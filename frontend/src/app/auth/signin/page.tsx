"use client";

import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { 
  Shield, 
  Mail, 
  Lock, 
  ArrowRight, 
  AlertCircle,
  Scan,
  Fingerprint,
  Ghost,
  Binary,
  Code2,
  Cpu,
  Network,
  LucideIcon
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ParticleNetwork from "@/components/background/ParticleNetwork";
import AuroraBackground from "@/components/background/AuroraBackground";

// --- Components ---

interface FloatingInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  icon: LucideIcon;
  showPasswordToggle?: boolean;
  onTogglePassword?: () => void;
}

const FloatingInput = ({ 
  id, label, value, onChange, type = "text", icon: Icon,
  showPasswordToggle, onTogglePassword 
}: FloatingInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative group">
      <div 
        className={`absolute left-4 transition-all duration-300 pointer-events-none flex items-center gap-2
          ${isFocused || hasValue 
            ? 'top-2 text-[10px] text-sky-400 font-semibold' 
            : 'top-1/2 -translate-y-1/2 text-slate-500 text-sm'
          }`}
      >
        <Icon className={`transition-all duration-300 ${isFocused || hasValue ? 'w-3 h-3' : 'w-4 h-4'}`} />
        <span>{label}</span>
      </div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full pl-4 pr-12 pt-5 pb-1.5 bg-[#111827]/50 border border-slate-800 rounded-lg text-slate-100 placeholder-transparent focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 focus:bg-[#1a2234]/80 transition-all shadow-inner text-sm font-medium h-12"
        placeholder={label} 
        required
      />
      {showPasswordToggle && onTogglePassword && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-sky-400 transition-colors z-10"
        >
          {type === "password" ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          )}
        </button>
      )}
      <div className="absolute inset-0 rounded-lg ring-1 ring-white/5 pointer-events-none group-hover:ring-white/10 transition-all" />
      
      {/* Hover visual cue */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-sky-500 to-transparent transition-all duration-500 ease-out
        ${isFocused ? 'w-full opacity-100' : 'w-0 opacity-0'}
      `} />
    </div>
  );
};

export default function SignIn() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("ANALYST"); // Default role
  const [showPassword, setShowPassword] = useState(false);
  
  // Optimized Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 40, stiffness: 200, mass: 0.5 }; 
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          const x = (clientX - innerWidth / 2) / innerWidth;
          const y = (clientY - innerHeight / 2) / innerHeight;
          mouseX.set(x);
          mouseY.set(y);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const moveX = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]);
  const moveY = useTransform(mouseYSpring, [-0.5, 0.5], [-20, 20]);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-8, 8]);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError("");
    try {
      await signIn("google", { 
        callbackUrl: "/auth/callback",
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

    // Basic validation
    if (!email.trim()) {
      setError("Email is required");
      setIsLoading(false);
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      setIsLoading(false);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      const result = await signIn("credentials", {
        email,
        password,
        role,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password. If you don't have an account, please create one first.");
        setIsLoading(false);
      } else {
         if (role === "ADMIN") {
            window.location.href = "/admin";
        } else {
            window.location.href = "/dashboard";
        }
      }
    } catch (err) {
      console.error("Email sign in error:", err);
      setError("An unexpected error occurred");
      setIsLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
    <div className="min-h-screen w-full bg-[#020617] flex font-sans relative selection:bg-sky-500/30 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 opacity-60 pointer-events-none">
         <AuroraBackground />
         <ParticleNetwork />
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none z-0 mix-blend-overlay" />

      {/* Scanning Line Effect */}
      <motion.div 
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="fixed left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent pointer-events-none z-0"
      />

      {/* Left Panel - Flex Layout for Screen Height */}
      <div className="hidden lg:flex lg:w-1/2 relative z-10 flex-col justify-between p-8 xl:p-12 min-h-screen border-r border-slate-800/50 backdrop-blur-sm bg-slate-900/20 perspective-1000">
        
        {/* Floating 3D Icons Layer */}
        <motion.div style={{ x: moveX, y: moveY, rotateX, rotateY }} className="absolute inset-0 z-0 pointer-events-none">
          {[Binary, Code2, Ghost, Fingerprint, Cpu, Network].map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
                z: [0, 30, 0]
              }}
              transition={{ 
                duration: 10 + i * 2, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute text-sky-400/10"
              style={{
                top: `${15 + (i * 15) % 80}%`,
                left: `${10 + (i * 20) % 80}%`,
              }}
            >
              <Icon size={100 + (i % 3) * 40} />
            </motion.div>
          ))}
        </motion.div>

        {/* Brand Content - Top Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerSettings}
          className="relative z-10 flex-shrink-0"
        >
          <motion.div variants={fadeInUp} className="mb-6 xl:mb-10">
            <Link href="/" className="inline-flex items-center gap-3 xl:gap-4 group">
              <div className="w-14 h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all duration-500 relative overflow-hidden ring-1 ring-white/20">
                <img src="https://res.cloudinary.com/dyvmqkxok/image/upload/e_background_removal/f_png/v1770664374/WhatsApp_Image_2026-02-10_at_00.39.29_rzzhs5.jpg" alt="Authenex" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl xl:text-2xl font-bold text-white tracking-tight leading-none group-hover:scale-105 transition-transform duration-300 origin-left">
                  Authenex
                </span>
                <span className="text-[10px] xl:text-xs font-semibold text-sky-400 tracking-widest uppercase mt-0.5">TrustLens Intelligence</span>
              </div>
            </Link>
          </motion.div>

          {/* Headline - Responsive Text Size */}
          <motion.div variants={fadeInUp} className="space-y-4 xl:space-y-6 max-w-lg">
            <h1 className="text-4xl lg:text-[2.75rem] xl:text-5xl font-black text-white leading-[1.1] tracking-tight">
              Advanced Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 animate-gradient-x bg-[length:200%_auto]">
                Forensic Intelligence
              </span>
            </h1>
            <p className="text-sm xl:text-lg text-slate-300 leading-relaxed border-l-4 border-sky-500/50 pl-4 backdrop-blur-sm bg-white/5 py-3 rounded-r-lg pr-4 shadow-xl">
              Verify digital content authenticity with government-grade AI analysis. 
              Detect deepfakes, manipulation, and synthetic media in real-time.
            </p>
          </motion.div>
        </motion.div>

        {/* Spacer for Flex Layout */}
        <div className="flex-grow min-h-[2rem]" />

        {/* Feature Cards - Middle Section */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, type: "spring" }}
          className="relative z-10 grid grid-cols-2 gap-4 flex-shrink-0 mb-auto"
        >
          {[
            { icon: Scan, title: "Deepfake Detection", desc: "Pixel-level analysis engine", color: "text-sky-400", bg: "hover:bg-sky-500/10", border: "hover:border-sky-500/50" },
            { icon: Fingerprint, title: "Source Verification", desc: "Metadata integrity trace", color: "text-purple-400", bg: "hover:bg-purple-500/10", border: "hover:border-purple-500/50" }
          ].map((feature, i) => (
             <motion.div
               key={i}
               whileHover={{ y: -5, scale: 1.02 }}
               className={`p-4 xl:p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md transition-all duration-300 group cursor-default shadow-lg ${feature.bg} ${feature.border}`}
             >
               <div className="flex items-start justify-between mb-2 xl:mb-3">
                 <div className={`p-2 rounded-lg bg-white/5 ${feature.color} ring-1 ring-white/10 group-hover:ring-white/30 transition-all`}>
                   <feature.icon className="w-5 h-5 xl:w-6 xl:h-6" />
                 </div>
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
               </div>
               <h3 className="text-slate-100 font-bold mb-1 text-sm xl:text-base group-hover:text-white transition-colors">{feature.title}</h3>
               <p className="text-slate-400 text-xs leading-relaxed group-hover:text-slate-300 transition-colors">{feature.desc}</p>
             </motion.div>
          ))}
        </motion.div>
        
        {/* Footer - Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="relative z-10 flex justify-between items-center text-[10px] xl:text-xs text-slate-500 border-t border-slate-800/50 pt-4 xl:pt-6 mt-4 xl:mt-8 font-medium flex-shrink-0"
        >
          <p>© 2026 Authenex Inc. All rights reserved.</p>
          <div className="flex gap-4 xl:gap-6">
            <span className="hover:text-sky-400 cursor-pointer transition-colors duration-300 hover:underline decoration-sky-500/50 underline-offset-4">Privacy Policy</span>
            <span className="hover:text-sky-400 cursor-pointer transition-colors duration-300 hover:underline decoration-sky-500/50 underline-offset-4">Terms of Service</span>
            <span className="flex items-center gap-2 text-emerald-500"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> System Operational</span>
          </div>
        </motion.div>
      </div>

      {/* Right Panel - Centered Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 lg:p-6 xl:p-12 relative z-20 bg-slate-950/60 backdrop-blur-3xl min-h-screen">


        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "circOut", delay: 0.2 }}
          className="w-full max-w-[380px] xl:max-w-md my-auto"
        >
          <div className="bg-slate-950/10 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] p-6 sm:p-8 xl:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden group/card hover:border-white/20 transition-colors duration-500">
            
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-[1.5rem] p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none" />
            
            {/* Ambient Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-sky-500/20 rounded-full blur-[60px] pointer-events-none group-hover/card:bg-sky-500/30 transition-all duration-500" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-[60px] pointer-events-none group-hover/card:bg-indigo-500/30 transition-all duration-500" />

            {/* Header */}
            <div className="relative z-10 text-center mb-6 xl:mb-8">
               <div className="lg:hidden inline-flex items-center gap-3 mb-6 justify-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-sky-500/20">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white tracking-tight">Authenex</span>
               </div>
               <motion.h2 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 }}
                 className="text-2xl xl:text-3xl font-bold text-white mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
               >
                 {t("auth.welcomeBack")}
               </motion.h2>
               <motion.p 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="text-slate-400 text-sm xl:text-base font-medium"
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
               className="w-full mb-6 flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-slate-800/80 border border-slate-700/50 hover:border-sky-500/50 text-slate-200 font-semibold text-sm transition-all group disabled:opacity-50 relative overflow-hidden shadow-lg hover:shadow-sky-500/10"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
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
              <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
                <span className="bg-slate-900/40 px-3 text-slate-500 backdrop-blur-xl rounded-full">Or continue with email</span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleEmailSignIn} className="space-y-4">
              <motion.div 
                variants={fadeInUp} 
                initial="hidden" 
                animate="visible"
                className="space-y-4"
              >
                {/* Role Selection */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-900/50 rounded-lg border border-slate-800/50">
                  {['ADMIN', 'ANALYST'].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`text-xs font-semibold py-2 rounded-md transition-all duration-300 ${
                        role === r 
                          ? 'bg-sky-500/20 text-sky-400 shadow-sm ring-1 ring-sky-500/50' 
                          : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      {r === 'ADMIN' ? 'Admin' : 'Analyst'}
                    </button>
                  ))}
                </div>

                <FloatingInput
                  id="email"
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={Mail}
                />
                
                <div className="space-y-1.5">
                   <div className="flex justify-between items-center px-1">
                      <span className="text-[10px] text-transparent">.</span> {/* Spacer */}
                      <a href="#" className="text-[10px] text-sky-400 hover:text-sky-300 transition-colors font-medium">Forgot password?</a>
                   </div>
                   <FloatingInput
                    id="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    icon={Lock}
                    showPasswordToggle
                    onTogglePassword={() => setShowPassword(!showPassword)}
                  />
                </div>
              </motion.div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                     <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2 shadow-lg shadow-rose-900/10">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
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
                className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-500 bg-[length:200%_auto] animate-gradient hover:from-sky-400 hover:via-indigo-400 hover:to-sky-400 text-white font-bold text-base shadow-xl shadow-sky-500/20 hover:shadow-sky-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-4 relative overflow-hidden group ring-1 ring-white/20"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="relative z-10">Sign In</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </motion.button>
            </form>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center text-xs text-slate-400 mt-6"
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