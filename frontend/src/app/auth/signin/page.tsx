"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Mail, 
  Lock, 
  ArrowRight, 
  Sparkles, 
  AlertCircle,
  CheckCircle2,
  Fingerprint,
  Scan,
  Globe
} from "lucide-react";
import Link from "next/link";
import LanguageSelector from "@/components/common/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";

export default function SignIn() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        // Redirect manually on success
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.error("Email sign in error:", err);
      setError("An unexpected error occurred");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex font-sans overflow-hidden">
      {/* Left Panel - Branding & Visuals (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-900 border-r border-slate-800 flex-col justify-between p-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-900 to-slate-950" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
          
          {/* Animated Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" 
          />
        </div>

        {/* Brand Content */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Authenex TrustLens</span>
          </Link>

          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl font-bold text-white leading-tight">
              Advanced Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                Forensic Intelligence
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Verify digital content authenticity with government-grade AI analysis. 
              Detect deepfakes, manipulation, and synthetic media in real-time.
            </p>
          </div>
        </div>

        {/* Feature List */}
        <div className="relative z-10 grid grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
            <Scan className="w-6 h-6 text-sky-400 mb-3" />
            <h3 className="text-slate-200 font-semibold mb-1">Deepfake Detection</h3>
            <p className="text-sm text-slate-400">Pixel-level analysis of manipulated media</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
            <Fingerprint className="w-6 h-6 text-purple-400 mb-3" />
            <h3 className="text-slate-200 font-semibold mb-1">Source Verification</h3>
            <p className="text-sm text-slate-400">Trace origin and metadata integrity</p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="relative z-10 flex justify-between items-center text-xs text-slate-500 border-t border-slate-800 pt-6">
          <p>© 2024 Authenex Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-sky-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-sky-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative overflow-y-auto">
        <div className="absolute top-6 right-6 z-20">
          <LanguageSelector />
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
             <div className="lg:hidden inline-flex items-center gap-2 mb-8 justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">Authenex</span>
             </div>
             <h2 className="text-3xl font-bold text-white mb-2">{t("auth.welcomeBack")}</h2>
             <p className="text-slate-400">Sign in to access your forensic dashboard</p>
          </div>

          {/* Social Auth */}
          <button
             onClick={handleGoogleSignIn}
             disabled={isLoading}
             className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-200 font-medium transition-all group disabled:opacity-50"
          >
             <svg className="w-5 h-5" viewBox="0 0 24 24">
               <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
               <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
               <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
               <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
             </svg>
             <span>{t("auth.continueGoogle")}</span>
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-950 px-2 text-slate-500">Or continue with email</span>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleEmailSignIn} className="space-y-4">
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
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all"
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
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-lg shadow-lg shadow-sky-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-sky-400 hover:text-sky-300 font-medium transition-colors">
              Request Access
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}