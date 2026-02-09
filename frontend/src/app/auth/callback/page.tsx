"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function AuthCallback() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session) {
      const userRole = (session.user as any).role;
      
      console.log("Auth Callback: User authenticated with role:", userRole);
      
      if (userRole === "ADMIN") {
        router.replace("/admin");
      } else {
        router.replace("/dashboard");
      }
    } else if (status === "unauthenticated") {
      router.replace("/auth/signin");
    }
  }, [status, session, router]);

  return (
    <div className="min-h-screen w-full bg-[#020617] flex items-center justify-center font-sans">
      <div className="text-center space-y-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-20 h-20 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-sky-500/20 mx-auto relative overflow-hidden ring-1 ring-white/20"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <Shield className="w-10 h-10 text-white relative z-10 drop-shadow-md" />
        </motion.div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Authenticating...
          </h2>
          <p className="text-slate-400 text-sm font-medium">
            Preparing your secure forensic environment
          </p>
        </div>

        <div className="flex justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
                repeatType: "reverse"
              }}
              className="w-1.5 h-1.5 rounded-full bg-sky-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
