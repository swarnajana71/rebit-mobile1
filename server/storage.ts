import { users, members, type User, type InsertUser, type Member, type InsertMember } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Member operations for mobile app
  getMember(id: number): Promise<Member | undefined>;
  getMemberByEmail(email: string): Promise<Member | undefined>;
  createMember(member: InsertMember): Promise<Member>;
  getAllMembers(): Promise<Member[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private members: Map<number, Member>;
  currentId: number;
  currentMemberId: number;

  constructor() {
    this.users = new Map();
    this.members = new Map();
    this.currentId = 1;
    this.currentMemberId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Member operations for mobile app
  async getMember(id: number): Promise<Member | undefined> {
    return this.members.get(id);
  }

  async getMemberByEmail(email: string): Promise<Member | undefined> {
    return Array.from(this.members.values()).find(
      (member) => member.email === email,
    );
  }

  async createMember(insertMember: InsertMember): Promise<Member> {
    const id = this.currentMemberId++;
    const now = new Date();
    const member: Member = { 
      ...insertMember, 
      registrationMethod: insertMember.registrationMethod || "email",
      id, 
      createdAt: now, 
      updatedAt: now 
    };
    this.members.set(id, member);
    return member;
  }

  async getAllMembers(): Promise<Member[]> {
    return Array.from(this.members.values());
  }
}

export const storage = new MemStorage();
