import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMemberSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
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

  // Proxy endpoint to handle external admin API calls
  app.post("/api/proxy/register", async (req, res) => {
    try {
      const EXTERNAL_API = "http://4e475e40-746c-4b88-8374-64ada12b3caa-00-12lsasagarlm3.worf.replit.dev";
      
      console.log("Proxying registration request to external API...");
      console.log("Request body:", req.body);
      
      const response = await fetch(`${EXTERNAL_API}/api/mobile/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(req.body),
      });
      
      console.log("External API response status:", response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("External API error:", errorText);
        return res.status(response.status).json({
          error: "External API error",
          message: errorText,
          status: response.status
        });
      }
      
      const result = await response.json();
      console.log("External API success:", result);
      res.json(result);
      
    } catch (error) {
      console.error("Proxy error:", error);
      res.status(500).json({
        error: "Proxy error",
        message: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Proxy endpoint for admin members
  app.get("/api/proxy/members", async (req, res) => {
    try {
      const EXTERNAL_API = "http://4e475e40-746c-4b88-8374-64ada12b3caa-00-12lsasagarlm3.worf.replit.dev";
      
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
