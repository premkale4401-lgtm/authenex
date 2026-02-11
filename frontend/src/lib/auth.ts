import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import path from 'path';
import dotenv from 'dotenv';
import { createBackendToken } from "./jwt-helper";

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
    
    // Credentials Provider with Backend Validation
    CredentialsProvider({
      id: "credentials",
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
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

          // Validate credentials against backend
          try {
            const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
            const response = await fetch(`${backendUrl}/auth/validate`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
              console.error("❌ Credential validation failed");
              return null;
            }

            const userData = await response.json();
            console.log("✅ Credentials validated successfully");
            
            return {
              id: userData.id,
              name: userData.name,
              email: userData.email,
              image: userData.image,
              role: userData.role,
              clearanceLevel: userData.role === "ADMIN" ? 5 : (userData.role === "ANALYST" ? 3 : 1),
            };
          } catch (err) {
            console.error("❌ Backend validation error:", err);
            return null;
          }
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
        (session.user as any).id = token.id as string;
        (session.user as any).uid = token.id as string;
        (session.user as any).role = token.role as string;
        (session.user as any).clearanceLevel = token.clearanceLevel as number;
        
        // Generate a signed token on the server where NEXTAUTH_SECRET is available
        try {
          (session as any).authToken = createBackendToken({
            id: token.id as string,
            email: session.user.email,
            name: session.user.name,
            role: token.role as string
          });
        } catch (error) {
          console.error("Error generating authToken in session callback:", error);
        }
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