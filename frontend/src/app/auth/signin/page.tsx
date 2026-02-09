"use client";

import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Mail, 
  Lock, 
  ArrowRight, 
  Sparkles, 
  AlertCircle,
  Scan,
  Fingerprint,
  Globe,
  Binary,
  Code2
} from "lucide-react";
import Link from "next/link";
import LanguageSelector from "@/components/common/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";
import ParticleNetwork from "@/components/background/ParticleNetwork";
import AuroraBackground from "@/components/background/AuroraBackground";

export default function SignIn() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError("");
    try {
      await signIn("google", { 
        callbackUrl: "/dashboard",
        redirect: true 
      });
    } catch (err) {
      console.error("Google sign in error:", err);
      setError("Failed to connect to Google");
      setIsLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
        setIsLoading(false);
      } else {
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.error("Email sign in error:", err);
      setError("An unexpected error occurred");
      setIsLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerSettings = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex font-sans overflow-hidden relative selection:bg-sky-500/30">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
         <AuroraBackground />
         <ParticleNetwork />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Left Panel - Branding */}
      <div className="hidden lg:flex w-1/2 relative z-10 flex-col justify-between p-12 lg:p-16 overflow-hidden border-r border-slate-800/50 backdrop-blur-sm bg-slate-900/30">
        
        {/* Floating Code Elements */}
        {[Binary, Code2, Globe, Fingerprint].map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: Math.sin(i) * 50,
              y: Math.cos(i) * 50,
            }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute text-sky-500/20 pointer-events-none"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 25}%`,
            }}
          >
            <Icon size={120 + i * 40} />
          </motion.div>
        ))}

        {/* Brand Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerSettings}
          className="relative z-10"
        >
          <motion.div variants={fadeInUp}>
            <Link href="/" className="inline-flex items-center gap-3 mb-16 group">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Shield className="w-7 h-7 text-white relative z-10" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight group-hover:tracking-normal transition-all duration-300">
                Authenex <span className="text-sky-400">TrustLens</span>
              </span>
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-8 max-w-lg">
            <h1 className="text-5xl font-bold text-white leading-tight">
              Advanced Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 animate-gradient-x">
                Forensic Intelligence
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed border-l-2 border-sky-500/30 pl-6">
              Verify digital content authenticity with government-grade AI analysis. 
              Detect deepfakes, manipulation, and synthetic media in real-time.
            </p>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative z-10 grid grid-cols-2 gap-6"
        >
          {[
            { icon: Scan, title: "Deepfake Detection", desc: "Pixel-level analysis engine", color: "text-sky-400", border: "group-hover:border-sky-500/50" },
            { icon: Fingerprint, title: "Source Verification", desc: "Metadata integrity trace", color: "text-purple-400", border: "group-hover:border-purple-500/50" }
          ].map((feature, i) => (
             <motion.div
               key={i}
               whileHover={{ y: -5, scale: 1.02 }}
               className={`p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md transition-all duration-300 group ${feature.border}`}
             >
               <feature.icon className={`w-8 h-8 ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
               <h3 className="text-slate-100 font-bold mb-2 text-lg">{feature.title}</h3>
               <p className="text-slate-400 text-sm">{feature.desc}</p>
             </motion.div>
          ))}
        </motion.div>
        
        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative z-10 flex justify-between items-center text-xs text-slate-500 border-t border-slate-800/50 pt-8 mt-12"
        >
          <p>© 2024 Authenex Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-sky-400 cursor-pointer transition-colors duration-300">Privacy Policy</span>
            <span className="hover:text-sky-400 cursor-pointer transition-colors duration-300">Terms of Service</span>
          </div>
        </motion.div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative z-20">
        <div className="absolute top-6 right-6">
          <LanguageSelector />
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/60 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-sky-900/10">
            <div className="text-center mb-8">
               <div className="lg:hidden inline-flex items-center gap-2 mb-6 justify-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white tracking-tight">Authenex</span>
               </div>
               <motion.h2 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="text-3xl font-bold text-white mb-2"
               >
                 {t("auth.welcomeBack")}
               </motion.h2>
               <motion.p 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="text-slate-400"
               >
                 Sign in to access your forensic dashboard
               </motion.p>
            </div>

            {/* Social Auth */}
            <motion.button
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               onClick={handleGoogleSignIn}
               disabled={isLoading}
               className="w-full mb-6 flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-500 text-slate-200 font-medium transition-all group disabled:opacity-50 relative overflow-hidden"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
               <svg className="w-5 h-5" viewBox="0 0 24 24">
                 <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                 <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                 <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                 <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
               </svg>
               <span>{t("auth.continueGoogle")}</span>
            </motion.button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-900/60 px-2 text-slate-500 backdrop-blur-xl">Or continue with email</span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleEmailSignIn} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-sky-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 bg-slate-950/50 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 focus:bg-slate-900/80 transition-all shadow-inner"
                    placeholder="name@company.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                   <label className="text-sm font-medium text-slate-300">Password</label>
                   <a href="#" className="text-xs text-sky-400 hover:text-sky-300 transition-colors">Forgot password?</a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-sky-400 transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 bg-slate-950/50 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 focus:bg-slate-900/80 transition-all shadow-inner"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                     <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        {error}
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-lg shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-6 relative overflow-hidden group"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="relative z-10">Sign In</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.button>
            </form>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-sm text-slate-500 mt-8"
            >
              Don't have an account?{" "}
              <Link href="/auth/signup" className="text-sky-400 hover:text-sky-300 font-medium transition-colors hover:underline">
                Request Access
              </Link>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}