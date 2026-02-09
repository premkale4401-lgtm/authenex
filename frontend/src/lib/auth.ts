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
        try {
          // Demo login - accepts any email for testing
          const selectedRole = (credentials as any)?.role || "ANALYST";
          const email = credentials?.email;
          const password = credentials?.password;
          
          if (!email || !password) {
            return null;
          }

          // Basic email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            return null;
          }

          // Demo mode - accept any valid email format
          // In production, you would validate against a database
          let userRole = selectedRole;
          let userId = `user-${Date.now()}`;
          let name = email.split('@')[0];
          
          // Special handling for known demo accounts
          if (email === "test@authenex.com" || email === "admin@authenex.gov") {
            if (selectedRole === "ADMIN") {
              userRole = "ADMIN";
              userId = "admin-001";
              name = "System Admin";
            } else {
              userRole = "ANALYST";
              userId = "analyst-001";
              name = "Demo Analyst";
            }
          } else {
            // For new accounts, capitalize first letter
            name = name.charAt(0).toUpperCase() + name.slice(1);
          }

          return {
            id: userId,
            name: name,
            email: email,
            image: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff`,
            role: userRole,
            clearanceLevel: userRole === "ADMIN" ? 5 : 3,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      }
    })
  ],
  
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        
        // Identify Admin users
        // Rule 1: Email ends with @authenex.gov
        // Rule 2: Specific admin emails
        const adminEmails = ["admin@authenex.gov", "visha@authenex.gov"];
        const isAdminEmail = user.email?.endsWith("@authenex.gov") || (user.email && adminEmails.includes(user.email));
        
        if (isAdminEmail) {
          token.role = "ADMIN";
          token.clearanceLevel = 5;
        } else {
          token.role = (user as any).role || "USER";
          token.clearanceLevel = (user as any).clearanceLevel || 1;
        }
      }
      return token;
    },
    
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).uid = token.id; // Add uid for backend compatibility
        (session.user as any).role = token.role;
        (session.user as any).clearanceLevel = token.clearanceLevel;
      }
      // Include the JWT token in session for backend authentication
      (session as any).accessToken = token.sub; // Use sub claim as token identifier
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