import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import path from 'path';
import dotenv from 'dotenv';

// Ensure env vars are loaded for server-side execution
dotenv.config({ path: path.resolve(process.cwd(), '../env/.env') });

export const authOptions: NextAuthOptions = {
  providers: [
    // Google OAuth
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    
    // Test Credentials (for demo without Google)
    CredentialsProvider({
      id: "credentials",
      name: "Test Account",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Demo login - no password check
        if (credentials?.email === "test@authenex.com") {
          return {
            id: "test-001",
            name: "Demo Analyst",
            email: "test@authenex.com",
            image: "https://ui-avatars.com/api/?name=Demo+Analyst&background=06b6d4&color=fff",
            role: "ANALYST",
            clearanceLevel: 3,
          };
        }
        return null;
      }
    })
  ],
  
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role || "USER";
        token.clearanceLevel = (user as any).clearanceLevel || 1;
      }
      return token;
    },
    
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
        (session.user as any).clearanceLevel = token.clearanceLevel;
      }
      return session;
    },
    
    async signIn({ user, account, profile }) {
      console.log("Sign In Callback:", { user, account, profile });
      
      try {
        if (user) {
           // Sync with backend
           const userData = {
             uid: user.id,
             email: user.email,
             displayName: user.name,
             photoURL: user.image
           };
           
           try {
             const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
             await fetch(`${backendUrl}/auth/login`, {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(userData)
             });
             console.log("✅ User synced with backend");
           } catch (err) {
             console.error("❌ Failed to sync user with backend:", err);
             // Don't block login if backend sync fails, but log it
           }
        }
        return true;
      } catch (error) {
        console.error("Sign in error:", error);
        return true; 
      }
    }
  },
  
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  
  debug: true, // Enable debug logs in console
};