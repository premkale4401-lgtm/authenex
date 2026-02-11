"use client";

import { ScrollText, Filter, Download } from "lucide-react";

export default function AuditTrail() {
  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center">
            <ScrollText className="w-5 h-5 text-slate-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Audit Trail</h3>
            <p className="text-sm text-slate-400">Immutable system logs</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button suppressHydrationWarning className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 text-xs font-medium hover:text-white transition-colors flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
          <button suppressHydrationWarning className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 text-xs font-medium hover:text-white transition-colors flex items-center gap-1">
            <Download className="w-3.5 h-3.5" />
            Export
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-[24px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 to-transparent"></div>
        
        <div className="space-y-6">
          {/* Item 1 */}
          <div className="relative pl-12">
            <div className="absolute left-[20px] w-2.5 h-2.5 bg-sky-500 rounded-full border-2 border-[#020617] shadow-[0_0_0_2px_#0ea5e9]"></div>
            <div className="glass-panel rounded-lg p-4 border-l-2 border-sky-500">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-white">User Role Modified</p>
                  <p className="text-xs text-slate-400">Enterprise user upgraded to Analyst tier</p>
                </div>
                <span className="text-xs text-slate-500 font-mono">14:32:09 UTC</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500">By:</span>
                <span className="text-sky-400 font-mono">admin_sarah_chen</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-500">ID: #LOG-89234</span>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative pl-12">
            <div className="absolute left-[20px] w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-[#020617] shadow-[0_0_0_2px_#f59e0b]"></div>
            <div className="glass-panel rounded-lg p-4 border-l-2 border-amber-500">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-white">Rate Limit Triggered</p>
                  <p className="text-xs text-slate-400">IP 203.0.113.42 exceeded threshold</p>
                </div>
                <span className="text-xs text-slate-500 font-mono">14:28:33 UTC</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500">Action:</span>
                <span className="text-amber-400">Temporarily throttled</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-500">Auto-resolved</span>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative pl-12">
            <div className="absolute left-[20px] w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#020617] shadow-[0_0_0_2px_#10b981]"></div>
            <div className="glass-panel rounded-lg p-4 border-l-2 border-emerald-500">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-white">System Configuration</p>
                  <p className="text-xs text-slate-400">AI explainability module enabled</p>
                </div>
                <span className="text-xs text-slate-500 font-mono">14:15:00 UTC</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500">By:</span>
                <span className="text-sky-400 font-mono">system_auto</span>
                <span className="text-slate-600">|</span>
                <span className="text-emerald-400">Scheduled maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
