import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMemberSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  console.log("=== Registering routes ===");
  
  // External mobile app registration endpoint (for external projects)
  app.post('/api/mobile/auth/register', async (req, res) => {
    try {
      console.log("=== EXTERNAL MOBILE REGISTRATION ENDPOINT HIT ===");
      console.log("Request body:", req.body);
      
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ 
          error: 'Missing required fields',
          message: 'Email and password are required'
        });
      }
      
      // Create member in local database
      const member = await storage.createMember({
        email,
        password, // In production, this should be hashed
        registrationMethod: "external-mobile"
      });
      
      console.log("Member created successfully:", member);
      
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
      console.error("External mobile registration error:", error);
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
