import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMemberSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  console.log("=== Registering routes ===");
  
  // Email verification flow - Step 1: Initiate registration (forwards to admin)
  app.post("/api/mobile/auth/send-verification", async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email) {
        return res.status(400).json({ message: "メールアドレスが必要です" });
      }
      
      console.log("=== Initiating Registration via Admin API ===");
      console.log("Email:", email);
      
      // Forward to admin API - Step 1: Initiate registration
      const ADMIN_API_URL = "https://4e475e40-746c-4b88-8374-64ada12b3caa-00-12lsasagarlm3.worf.replit.dev";
      
      const response = await fetch(`${ADMIN_API_URL}/api/auth/register/init`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Admin API error:", response.status, errorData);
        
        let errorMessage = "認証コードの送信に失敗しました";
        if (response.status === 409) {
          errorMessage = "このメールアドレスは既に登録されています";
        } else if (errorData.error) {
          errorMessage = errorData.error;
        }
        
        return res.status(response.status).json({
          success: false,
          message: errorMessage
        });
      }
      
      const result = await response.json();
      console.log("Admin API registration init success:", result);
      
      // Store session info locally for later use
      if (result.data?.sessionId) {
        global.registrationSessions = global.registrationSessions || {};
        global.registrationSessions[email] = {
          sessionId: result.data.sessionId,
          email: email,
          emailVerified: false,
          timestamp: Date.now()
        };
      }
      
      res.json({
        success: true,
        message: "認証コードを送信しました",
        data: {
          email: email,
          sessionId: result.data?.sessionId
        }
      });
      
    } catch (error) {
      console.error("Registration init error:", error);
      res.status(500).json({ 
        success: false, 
        message: "認証コードの送信に失敗しました" 
      });
    }
  });

  // Email verification flow - Step 2: Verify code (forwards to admin)
  app.post("/api/mobile/auth/verify-code", async (req, res) => {
    try {
      const { email, code } = req.body;
      
      if (!email || !code) {
        return res.status(400).json({ message: "メールアドレスと認証コードが必要です" });
      }
      
      console.log("=== Verifying Code via Admin API ===");
      console.log("Email:", email);
      console.log("Code:", code);
      
      // Get session info
      const sessionData = (global as any).registrationSessions?.[email];
      if (!sessionData) {
        return res.status(400).json({ message: "認証セッションが見つかりません" });
      }
      
      // Forward to admin API - Step 2: Verify email code
      const ADMIN_API_URL = "https://4e475e40-746c-4b88-8374-64ada12b3caa-00-12lsasagarlm3.worf.replit.dev";
      
      const response = await fetch(`${ADMIN_API_URL}/api/auth/register/verify-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email,
          code,
          sessionId: sessionData.sessionId
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Admin API verify error:", response.status, errorData);
        
        let errorMessage = "認証コードが正しくありません";
        if (response.status === 400 && errorData.error?.includes("expired")) {
          errorMessage = "認証コードの有効期限が切れています";
        } else if (errorData.error) {
          errorMessage = errorData.error;
        }
        
        return res.status(response.status).json({
          success: false,
          message: errorMessage
        });
      }
      
      const result = await response.json();
      console.log("Admin API verification success:", result);
      
      // Update local session
      if ((global as any).registrationSessions?.[email]) {
        (global as any).registrationSessions[email].emailVerified = true;
      }
      
      res.json({
        success: true,
        message: "認証が完了しました",
        data: {
          email: email,
          sessionId: sessionData.sessionId,
          emailVerified: true
        }
      });
      
    } catch (error) {
      console.error("Code verification error:", error);
      res.status(500).json({ 
        success: false, 
        message: "認証に失敗しました" 
      });
    }
  });

  // Email verification flow - Step 3: Complete registration (forwards to admin)
  app.post("/api/mobile/auth/complete-registration", async (req, res) => {
    try {
      const { email, firstName, lastName, mobile, password } = req.body;
      
      if (!email || !firstName || !lastName || !mobile || !password) {
        return res.status(400).json({ message: "すべての項目を入力してください" });
      }
      
      console.log("=== Completing Registration via Admin API ===");
      console.log("Email:", email);
      console.log("Name:", firstName, lastName);
      console.log("Mobile:", mobile);
      
      // Get session info and verify email was verified
      const sessionData = (global as any).registrationSessions?.[email];
      if (!sessionData || !sessionData.emailVerified) {
        return res.status(400).json({ message: "メールアドレスが認証されていません" });
      }
      
      // Forward to admin API - Step 3: Complete profile
      const ADMIN_API_URL = "https://4e475e40-746c-4b88-8374-64ada12b3caa-00-12lsasagarlm3.worf.replit.dev";
      
      const profileData = {
        sessionId: sessionData.sessionId,
        fullName: `${firstName} ${lastName}`,
        mobile: mobile,
        password: password,
        preferredLanguage: "ja"
      };
      
      console.log("Forwarding to admin API:", `${ADMIN_API_URL}/api/auth/register/complete`);
      
      const response = await fetch(`${ADMIN_API_URL}/api/auth/register/complete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(profileData),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Admin API complete error:", response.status, errorData);
        
        let errorMessage = "登録の完了に失敗しました";
        if (response.status === 409) {
          errorMessage = "携帯電話番号が既に登録されています";
        } else if (response.status === 400) {
          errorMessage = "入力内容に問題があります";
        } else if (errorData.error) {
          errorMessage = errorData.error;
        }
        
        return res.status(response.status).json({
          success: false,
          message: errorMessage
        });
      }
      
      const result = await response.json();
      console.log("Admin API registration complete success:", result);
      
      // Also store locally for backup/reference
      try {
        await storage.createMember({
          email,
          password,
          registrationMethod: "admin-api-2step-forwarded"
        });
        console.log("Local backup created");
      } catch (localError) {
        console.warn("Local backup failed:", localError);
        // Don't fail the request if local backup fails
      }
      
      // Clean up session data
      if ((global as any).registrationSessions?.[email]) {
        delete (global as any).registrationSessions[email];
      }
      
      res.json({
        success: true,
        message: "会員登録が完了しました",
        data: result.data || result,
        timestamp: new Date().toISOString(),
        registrationMethod: "admin-api-2step"
      });
      
    } catch (error) {
      console.error("Complete registration error:", error);
      res.status(500).json({ 
        success: false, 
        message: "登録の完了に失敗しました" 
      });
    }
  });
  
  // External mobile app registration endpoint (forwards to main admin dashboard) - Legacy support
  app.post('/api/mobile/auth/register', async (req, res) => {
    try {
      console.log("=== MOBILE REGISTRATION - FORWARDING TO MAIN ADMIN ===");
      console.log("Request body:", req.body);
      
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ 
          error: 'Missing required fields',
          message: 'Email and password are required'
        });
      }
      
      // Forward to main admin dashboard API
      const MAIN_ADMIN_URL = "https://4e475e40-746c-4b88-8374-64ada12b3caa-00-12lsasagarlm3.worf.replit.dev";
      
      console.log("Forwarding registration to main admin:", MAIN_ADMIN_URL);
      
      const response = await fetch(`${MAIN_ADMIN_URL}/api/mobile/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          username: email.split('@')[0], // Use email prefix as username
          location: 'Mobile App User',
          registrationMethod: 'mobile-app'
        })
      });
      
      console.log("Main admin response status:", response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Main admin error:", errorText);
        return res.status(response.status).json({
          error: 'Main admin registration failed',
          message: errorText
        });
      }
      
      const result = await response.json();
      console.log("Main admin registration success:", result);
      
      // Also store locally for backup/reference
      try {
        await storage.createMember({
          email,
          password,
          registrationMethod: "mobile-app-forwarded"
        });
        console.log("Local backup created");
      } catch (localError) {
        console.warn("Local backup failed:", localError);
        // Don't fail the request if local backup fails
      }
      
      // Return a standardized response with Japanese message
      res.status(201).json({
        success: true,
        message: "会員登録が完了しました",
        data: result.user || result.data,
        timestamp: new Date().toISOString(),
        registrationMethod: "mobile-app"
      });
      
    } catch (error) {
      console.error("Mobile registration forwarding error:", error);
      res.status(500).json({ 
        error: 'Registration failed',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });
  
  // Mobile app member registration
  app.post("/api/mobile/auth/register", async (req, res) => {
    try {
      const validatedData = insertMemberSchema.parse(req.body);
      
      // Check if email already exists
      const existingMember = await storage.getMemberByEmail(validatedData.email);
      if (existingMember) {
        return res.status(400).json({ 
          error: "Email already registered",
          message: "このメールアドレスは既に登録されています" 
        });
      }

      // Create new member
      const member = await storage.createMember({
        ...validatedData,
        registrationMethod: "email"
      });

      res.status(201).json({
        success: true,
        message: "Registration successful",
        data: {
          id: member.id,
          email: member.email,
          registrationMethod: member.registrationMethod,
          createdAt: member.createdAt
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: "Validation error",
          message: "入力データが無効です",
          details: error.errors
        });
      }
      
      console.error("Registration error:", error);
      res.status(500).json({
        error: "Internal server error",
        message: "登録に失敗しました"
      });
    }
  });

  // Admin endpoint to view all members
  app.get("/api/admin/members", async (req, res) => {
    try {
      const members = await storage.getAllMembers();
      res.json({
        success: true,
        data: members,
        count: members.length
      });
    } catch (error) {
      console.error("Admin members fetch error:", error);
      res.status(500).json({
        error: "Internal server error",
        message: "Failed to fetch members"
      });
    }
  });

  // Get member by ID
  app.get("/api/admin/members/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const member = await storage.getMember(id);
      
      if (!member) {
        return res.status(404).json({
          error: "Member not found",
          message: "メンバーが見つかりません"
        });
      }

      res.json({
        success: true,
        data: member
      });
    } catch (error) {
      console.error("Admin member fetch error:", error);
      res.status(500).json({
        error: "Internal server error",
        message: "Failed to fetch member"
      });
    }
  });

  // Debug endpoint to check what's available on external server
  app.get("/api/debug/external", async (req, res) => {
    const EXTERNAL_API = "https://4e475e40-746c-4b88-8374-64ada12b3caa-00-12lsasagarlm3.worf.replit.dev";
    
    try {
      console.log("Testing external API endpoints...");
      
      // Test different possible endpoints
      const endpoints = [
        "/",
        "/api",
        "/api/mobile",
        "/api/mobile/auth",
        "/api/mobile/auth/register",
        "/api/admin",
        "/api/admin/members"
      ];
      
      const results = [];
      
      for (const endpoint of endpoints) {
        try {
          const response = await fetch(`${EXTERNAL_API}${endpoint}`, {
            method: "GET",
            headers: { "Accept": "application/json" }
          });
          
          const contentType = response.headers.get('content-type') || '';
          const size = response.headers.get('content-length') || 'unknown';
          
          results.push({
            endpoint,
            status: response.status,
            contentType,
            size,
            isJson: contentType.includes('application/json')
          });
        } catch (error) {
          results.push({
            endpoint,
            error: error instanceof Error ? error.message : 'Unknown error'
          });
        }
      }
      
      res.json({ results });
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  // Proxy endpoint to handle external admin API calls
  app.post("/api/proxy/register", (req, res) => {
    console.log("=== PROXY ENDPOINT HIT ===");
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);

    const EXTERNAL_API = "https://4e475e40-746c-4b88-8374-64ada12b3caa-00-12lsasagarlm3.worf.replit.dev";
    
    fetch(`${EXTERNAL_API}/api/mobile/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: req.body.email,
        password: req.body.password
      }),
    })
    .then(async response => {
      console.log("External API response status:", response.status);
      console.log("External API response headers:", Object.fromEntries(response.headers.entries()));
      
      const contentType = response.headers.get('content-type') || '';
      
      if (contentType.includes('text/html')) {
        console.log("External API returned HTML instead of JSON - API endpoint may not exist");
        res.status(503).json({
          error: "External API unavailable",
          message: "The external API is returning HTML instead of JSON. This usually means the API endpoint doesn't exist or the server is misconfigured.",
          suggestion: "Using local database storage instead"
        });
        return;
      }
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("External API error:", errorText);
        res.status(response.status).json({
          error: "External API error",
          message: errorText,
          status: response.status
        });
        return;
      }
      
      try {
        const result = await response.json();
        console.log("External API success:", result);
        res.json(result);
      } catch (jsonError) {
        console.error("Failed to parse JSON response:", jsonError);
        res.status(502).json({
          error: "Invalid JSON response",
          message: "The external API returned invalid JSON"
        });
      }
    })
    .catch(error => {
      console.error("Proxy fetch error:", error);
      res.status(500).json({
        error: "Proxy error",
        message: error instanceof Error ? error.message : "Unknown error"
      });
    });
  });

  // Proxy endpoint for admin members
  app.get("/api/proxy/members", async (req, res) => {
    try {
      const EXTERNAL_API = "https://4e475e40-746c-4b88-8374-64ada12b3caa-00-12lsasagarlm3.worf.replit.dev";
      
      const response = await fetch(`${EXTERNAL_API}/api/admin/members`, {
        method: "GET",
        headers: {
          "Accept": "application/json"
        },
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        return res.status(response.status).json({
          error: "External API error",
          message: errorText
        });
      }
      
      const result = await response.json();
      res.json(result);
      
    } catch (error) {
      console.error("Members proxy error:", error);
      res.status(500).json({
        error: "Proxy error",
        message: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
