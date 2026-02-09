"use client";

import { signIn } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { 
  Shield, 
  Mail, 
  Lock, 
  ArrowRight, 
  AlertCircle,
  Scan,
  Fingerprint,
  Globe,
  Binary,
  Code2,
  Cpu,
  Network
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
  
  // Advanced Mouse Tracking for Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax Transform Functions
  const moveX = useTransform(mouseXSpring, [-0.5, 0.5], [-30, 30]);
  const moveY = useTransform(mouseYSpring, [-0.5, 0.5], [-30, 30]);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

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
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
  };

  const staggerSettings = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex font-sans overflow-hidden relative selection:bg-sky-500/30">
      {/* Cinematic Animated Background */}
      <div className="absolute inset-0 z-0 opacity-80">
         <AuroraBackground />
         <ParticleNetwork />
      </div>

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none z-0 mix-blend-overlay" />

      {/* Scanning Line Effect */}
      <motion.div 
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-500/30 to-transparent pointer-events-none z-0 blur-[1px]"
      />

      {/* Left Panel - Immersive 3D Experience */}
      <div className="hidden lg:flex w-1/2 relative z-10 flex-col justify-between p-16 overflow-hidden border-r border-slate-800/50 backdrop-blur-sm bg-slate-900/30 perspective-1000">
        
        {/* Floating 3D Icons Layer */}
        <motion.div style={{ x: moveX, y: moveY, rotateX, rotateY }} className="absolute inset-0 z-0 pointer-events-none">
          {[Binary, Code2, Globe, Fingerprint, Cpu, Network].map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.15, 0.4, 0.15],
                scale: [1, 1.2, 1],
                z: [0, 50, 0]
              }}
              transition={{ 
                duration: 8 + i * 2, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute text-sky-400/20 blur-[1px]"
              style={{
                top: `${15 + (i * 15) % 80}%`,
                left: `${10 + (i * 20) % 80}%`,
                filter: "drop-shadow(0 0 10px rgba(56, 189, 248, 0.2))"
              }}
            >
              <Icon size={80 + (i % 3) * 40} />
            </motion.div>
          ))}
        </motion.div>

        {/* Brand Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerSettings}
          className="relative z-10"
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)] group-hover:shadow-[0_0_60px_-10px_rgba(14,165,233,0.7)] transition-all duration-500 relative overflow-hidden ring-1 ring-white/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <Shield className="w-8 h-8 text-white relative z-10 drop-shadow-md" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-tight leading-none group-hover:scale-105 transition-transform duration-300 origin-left">
                  Authenex
                </span>
                <span className="text-sm font-semibold text-sky-400 tracking-widest uppercase mt-1">TrustLens Intelligence</span>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-8 max-w-xl">
            <h1 className="text-6xl font-black text-white leading-[1.1] tracking-tight">
              Advanced Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 animate-gradient-x drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                Forensic Intelligence
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed border-l-4 border-sky-500/50 pl-6 backdrop-blur-sm bg-white/5 py-4 rounded-r-xl pr-4 shadow-xl">
              Verify digital content authenticity with government-grade AI analysis. 
              Detect deepfakes, manipulation, and synthetic media in real-time.
            </p>
          </motion.div>
        </motion.div>

        {/* 3D Interactive Feature Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, type: "spring" }}
          className="relative z-10 grid grid-cols-2 gap-6"
        >
          {[
            { icon: Scan, title: "Deepfake Detection", desc: "Pixel-level analysis engine", color: "text-sky-400", bg: "hover:bg-sky-500/10", border: "hover:border-sky-500/50" },
            { icon: Fingerprint, title: "Source Verification", desc: "Metadata integrity trace", color: "text-purple-400", bg: "hover:bg-purple-500/10", border: "hover:border-purple-500/50" }
          ].map((feature, i) => (
             <motion.div
               key={i}
               whileHover={{ y: -10, scale: 1.05, rotateX: 5, rotateY: 5 }}
               style={{ perspective: 1000 }}
               className={`p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md transition-all duration-500 group cursor-default shadow-xl ${feature.bg} ${feature.border}`}
             >
               <div className="flex items-start justify-between mb-4">
                 <div className={`p-3 rounded-xl bg-white/5 ${feature.color} ring-1 ring-white/10 group-hover:ring-white/30 transition-all`}>
                   <feature.icon className="w-8 h-8" />
                 </div>
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               </div>
               <h3 className="text-slate-100 font-bold mb-2 text-lg group-hover:text-white transition-colors">{feature.title}</h3>
               <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{feature.desc}</p>
             </motion.div>
          ))}
        </motion.div>
        
        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="relative z-10 flex justify-between items-center text-xs text-slate-500 border-t border-slate-800/50 pt-8 mt-12 font-medium"
        >
          <p>© 2026 Authenex Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-sky-400 cursor-pointer transition-colors duration-300 hover:underline decoration-sky-500/50 underline-offset-4">Privacy Policy</span>
            <span className="hover:text-sky-400 cursor-pointer transition-colors duration-300 hover:underline decoration-sky-500/50 underline-offset-4">Terms of Service</span>
            <span className="flex items-center gap-2 text-emerald-500"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> System Operational</span>
          </div>
        </motion.div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative z-20 bg-gradient-to-tl from-slate-950 via-slate-900/50 to-slate-950">
        <div className="absolute top-6 right-6">
          <LanguageSelector />
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="bg-slate-900/40 backdrop-blur-2xl border border-slate-800/60 rounded-[2rem] p-8 sm:p-12 shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden ring-1 ring-white/5">
            
            {/* Ambient Glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-sky-500/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 text-center mb-10">
               <div className="lg:hidden inline-flex items-center gap-3 mb-8 justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-white tracking-tight">Authenex</span>
               </div>
               <motion.h2 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 }}
                 className="text-4xl font-bold text-white mb-3 tracking-tight"
               >
                 {t("auth.welcomeBack")}
               </motion.h2>
               <motion.p 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="text-slate-400 text-lg"
               >
                 Sign in to access your forensic dashboard
               </motion.p>
            </div>

            {/* Social Auth */}
            <motion.button
               whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 41, 59, 1)" }}
               whileTap={{ scale: 0.98 }}
               onClick={handleGoogleSignIn}
               disabled={isLoading}
               className="w-full mb-8 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-slate-800/80 border border-slate-700/50 hover:border-sky-500/50 text-slate-200 font-semibold text-lg transition-all group disabled:opacity-50 relative overflow-hidden shadow-lg"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
               <svg className="w-6 h-6" viewBox="0 0 24 24">
                 <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                 <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                 <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                 <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
               </svg>
               <span>{t("auth.continueGoogle")}</span>
            </motion.button>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest">
                <span className="bg-slate-900/40 px-4 text-slate-500 backdrop-blur-xl rounded-full">Or continue with email</span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleEmailSignIn} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Email Address</label>
                <motion.div 
                  whileFocus={{ scale: 1.01 }}
                  className="relative group"
                >
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-sky-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-950/50 border border-slate-800 rounded-2xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20 focus:bg-slate-900/80 transition-all shadow-inner text-lg"
                    placeholder="name@company.com"
                    required
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 pointer-events-none" />
                </motion.div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                   <label className="text-sm font-semibold text-slate-300">Password</label>
                   <a href="#" className="text-xs text-sky-400 hover:text-sky-300 transition-colors font-medium">Forgot password?</a>
                </div>
                <motion.div 
                  whileFocus={{ scale: 1.01 }}
                  className="relative group"
                >
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-sky-400 transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-950/50 border border-slate-800 rounded-2xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20 focus:bg-slate-900/80 transition-all shadow-inner text-lg"
                    placeholder="••••••••"
                    required
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 pointer-events-none" />
                </motion.div>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                     <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm flex items-center gap-3 shadow-lg shadow-rose-900/10">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{error}</span>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-lg shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-6 relative overflow-hidden group ring-1 ring-white/20"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="relative z-10">Sign In</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </motion.button>
            </form>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center text-sm text-slate-400 mt-8"
            >
              Don't have an account?{" "}
              <Link href="/auth/signup" className="text-sky-400 hover:text-sky-300 font-bold transition-colors hover:underline decoration-sky-500/30 underline-offset-4">
                Request Access
              </Link>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}