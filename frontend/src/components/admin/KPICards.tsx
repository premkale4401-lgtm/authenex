"use client";

import { Activity, TrendingUp, CheckCircle2, Users, Crown, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

export default function KPICards() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-pulse">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="glass-card rounded-xl p-5 h-32 bg-slate-900/20" />
      ))}
    </div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Card 1: Total Analyses */}
      <div className="glass-card rounded-xl p-5 animate-fade-in-up stagger-1">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Analyses Today</p>
            <h3 className="text-2xl font-bold text-white font-mono animate-count">24,592</h3>
          </div>
          <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center">
            <Activity className="w-5 h-5 text-sky-400" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-emerald-400 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            +12.5%
          </span>
          <span className="text-slate-500">vs yesterday</span>
        </div>
        <div className="mt-4 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-sky-500 to-sky-400 w-3/4 rounded-full"></div>
        </div>
      </div>

      {/* Card 2: Trust Score Distribution */}
      <div className="glass-card rounded-xl p-5 animate-fade-in-up stagger-2">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Authenticity Rate</p>
            <h3 className="text-2xl font-bold text-white font-mono animate-count">87.3%</h3>
          </div>
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400">Real: <span className="text-emerald-400 font-mono">21,468</span></span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Fake: <span className="text-rose-400 font-mono">3,124</span></span>
        </div>
        <div className="mt-4 flex gap-1">
          <div className="h-1.5 flex-1 bg-emerald-500 rounded-l-full"></div>
          <div className="h-1.5 w-12 bg-rose-500 rounded-r-full"></div>
        </div>
      </div>

      {/* Card 3: Active Users */}
      <div className="glass-card rounded-xl p-5 animate-fade-in-up stagger-3">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Active Sessions</p>
            <h3 className="text-2xl font-bold text-white font-mono animate-count">1,247</h3>
          </div>
          <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-violet-400" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400">Peak: <span className="text-white font-mono">2,891</span> (14:00 UTC)</span>
        </div>
        <div className="mt-4 flex -space-x-2">
          <div className="w-6 h-6 rounded-full bg-slate-600 border-2 border-slate-800"></div>
          <div className="w-6 h-6 rounded-full bg-slate-500 border-2 border-slate-800"></div>
          <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-slate-800"></div>
          <div className="w-6 h-6 rounded-full bg-sky-600 border-2 border-slate-800 flex items-center justify-center text-[8px] text-white font-bold">+99</div>
        </div>
      </div>

      {/* Card 4: System Health */}
      <div className="glass-card rounded-xl p-5 animate-fade-in-up stagger-4 border-emerald-500/20">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">AI Services</p>
            <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
              OPERATIONAL
              <span className="status-dot status-operational"></span>
            </h3>
          </div>
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <Cpu className="w-5 h-5 text-emerald-400" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-slate-500">Gemini API</span>
            <span className="text-emerald-400">99.9% uptime</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-slate-500">Forensic Engine</span>
            <span className="text-emerald-400">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
