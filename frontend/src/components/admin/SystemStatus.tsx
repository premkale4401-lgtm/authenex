"use client";

import { Database, Zap, Shield, Info } from "lucide-react";

export default function SystemStatus() {
  return (
    <div className="glass-card rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-6">System Status</h3>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Database className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Storage</p>
              <p className="text-xs text-slate-500">42% utilized</p>
            </div>
          </div>
          <span className="text-emerald-400 font-mono text-sm">Normal</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
              <Zap className="w-4 h-4 text-sky-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">API Latency</p>
              <p className="text-xs text-slate-500">Avg response</p>
            </div>
          </div>
          <span className="text-sky-400 font-mono text-sm">124ms</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-violet-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Threat Level</p>
              <p className="text-xs text-slate-500">Current assessment</p>
            </div>
          </div>
          <span className="text-emerald-400 font-mono text-sm">Low</span>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-4"></div>

        <div className="p-4 rounded-lg bg-sky-900/10 border border-sky-500/20">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-sky-400 mb-1">Governance Notice</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Admins cannot modify forensic results or trust scores. All actions are logged to the immutable audit trail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
