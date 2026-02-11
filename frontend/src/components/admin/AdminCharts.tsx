"use client";

import { Image, Video, FileText, Mic } from "lucide-react";

export default function AdminCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Traffic Chart */}
      <div className="lg:col-span-2 glass-card rounded-xl p-6 animate-fade-in-up stagger-5">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white">Analysis Traffic</h3>
            <p className="text-sm text-slate-400">Real-time verification requests</p>
          </div>
          <div className="flex gap-2">
            <button suppressHydrationWarning className="px-3 py-1.5 rounded-lg bg-sky-500/20 text-sky-400 text-xs font-medium">24H</button>
            <button suppressHydrationWarning className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 text-xs font-medium hover:text-white transition-colors">7D</button>
            <button suppressHydrationWarning className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 text-xs font-medium hover:text-white transition-colors">30D</button>
          </div>
        </div>
        
        {/* Chart Visualization */}
        <div className="h-64 relative">
          <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
            {/* Grid Lines */}
            <line x1="0" y1="50" x2="800" y2="50" stroke="rgba(148,163,184,0.1)" strokeWidth="1"/>
            <line x1="0" y1="100" x2="800" y2="100" stroke="rgba(148,163,184,0.1)" strokeWidth="1"/>
            <line x1="0" y1="150" x2="800" y2="150" stroke="rgba(148,163,184,0.1)" strokeWidth="1"/>
            
            {/* Area Gradient */}
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(6,182,212,0.3)"/>
                <stop offset="100%" stopColor="rgba(6,182,212,0)"/>
              </linearGradient>
            </defs>
            
            {/* Area */}
            <path d="M0,150 Q100,120 200,100 T400,80 T600,60 T800,40 L800,200 L0,200 Z" 
              fill="url(#areaGradient)" opacity="0.6"/>
            
            {/* Line */}
            <path d="M0,150 Q100,120 200,100 T400,80 T600,60 T800,40" 
              fill="none" stroke="#06b6d4" strokeWidth="3" className="chart-line" 
              style={{ strokeDasharray: 1000, strokeDashoffset: 0, animation: 'drawLine 2s ease forwards' }} />
            
            {/* Data Points */}
            <circle cx="200" cy="100" r="4" fill="#06b6d4" className="animate-pulse"/>
            <circle cx="400" cy="80" r="4" fill="#06b6d4" className="animate-pulse"/>
            <circle cx="600" cy="60" r="4" fill="#06b6d4" className="animate-pulse"/>
          </svg>
          
          {/* X-Axis Labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-slate-500 pt-2">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>23:59</span>
          </div>
        </div>
      </div>

      {/* Modality Distribution */}
      <div className="glass-card rounded-xl p-6 animate-fade-in-up stagger-5">
        <h3 className="text-lg font-semibold text-white mb-2">Modality Distribution</h3>
        <p className="text-sm text-slate-400 mb-6">Content types analyzed</p>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-300 flex items-center gap-2">
                <Image className="w-4 h-4 text-sky-400" />
                Images
              </span>
              <span className="text-white font-mono">45%</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-sky-500 w-[45%] rounded-full transition-all duration-1000"></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-300 flex items-center gap-2">
                <Video className="w-4 h-4 text-violet-400" />
                Video
              </span>
              <span className="text-white font-mono">30%</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-violet-500 w-[30%] rounded-full transition-all duration-1000 delay-100"></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-300 flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                Documents
              </span>
              <span className="text-white font-mono">15%</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 w-[15%] rounded-full transition-all duration-1000 delay-200"></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-300 flex items-center gap-2">
                <Mic className="w-4 h-4 text-rose-400" />
                Audio
              </span>
              <span className="text-white font-mono">10%</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-rose-500 w-[10%] rounded-full transition-all duration-1000 delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
