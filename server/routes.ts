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

  const httpServer = createServer(app);
  return httpServer;
}
