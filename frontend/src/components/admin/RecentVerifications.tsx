"use client";

import { Check, AlertCircle, HelpCircle, Lock, ArrowRight } from "lucide-react";

export default function RecentVerifications() {
  return (
    <div className="lg:col-span-2 glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Recent Verifications</h3>
          <p className="text-sm text-slate-400">Latest forensic analyses</p>
        </div>
        <button 
          suppressHydrationWarning
          className="text-sky-400 hover:text-sky-300 text-sm font-medium flex items-center gap-1 transition-colors"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full data-table">
          <thead>
            <tr className="text-left">
              <th className="pb-3 pl-2 font-medium text-slate-400 text-xs uppercase tracking-wider">Case ID</th>
              <th className="pb-3 font-medium text-slate-400 text-xs uppercase tracking-wider">Type</th>
              <th className="pb-3 font-medium text-slate-400 text-xs uppercase tracking-wider">Result</th>
              <th className="pb-3 font-medium text-slate-400 text-xs uppercase tracking-wider">Confidence</th>
              <th className="pb-3 font-medium text-slate-400 text-xs uppercase tracking-wider">Time</th>
              <th className="pb-3 font-medium text-slate-400 text-xs uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-t border-slate-800/50 hover:bg-sky-500/5 transition-colors">
              <td className="py-4 pl-2 font-mono text-sky-400">#AUT-2024-0892</td>
              <td className="py-4 text-slate-300">Image</td>
              <td className="py-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                  <Check className="w-3 h-3" />
                  Authentic
                </span>
              </td>
              <td className="py-4 text-white font-mono">98.2%</td>
              <td className="py-4 text-slate-400">2 min ago</td>
              <td className="py-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Lock className="w-3.5 h-3.5" />
                  <span className="text-xs">Immutable</span>
                </div>
              </td>
            </tr>
            <tr className="border-t border-slate-800/50 hover:bg-sky-500/5 transition-colors">
              <td className="py-4 pl-2 font-mono text-sky-400">#AUT-2024-0891</td>
              <td className="py-4 text-slate-300">Video</td>
              <td className="py-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-medium border border-rose-500/20">
                  <AlertCircle className="w-3 h-3" />
                  Manipulated
                </span>
              </td>
              <td className="py-4 text-white font-mono">94.7%</td>
              <td className="py-4 text-slate-400">5 min ago</td>
              <td className="py-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Lock className="w-3.5 h-3.5" />
                  <span className="text-xs">Immutable</span>
                </div>
              </td>
            </tr>
            <tr className="border-t border-slate-800/50 hover:bg-sky-500/5 transition-colors">
              <td className="py-4 pl-2 font-mono text-sky-400">#AUT-2024-0890</td>
              <td className="py-4 text-slate-300">Document</td>
              <td className="py-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20">
                  <HelpCircle className="w-3 h-3" />
                  Uncertain
                </span>
              </td>
              <td className="py-4 text-white font-mono">62.1%</td>
              <td className="py-4 text-slate-400">12 min ago</td>
              <td className="py-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Lock className="w-3.5 h-3.5" />
                  <span className="text-xs">Immutable</span>
                </div>
              </td>
            </tr>
            <tr className="border-t border-slate-800/50 hover:bg-sky-500/5 transition-colors">
              <td className="py-4 pl-2 font-mono text-sky-400">#AUT-2024-0889</td>
              <td className="py-4 text-slate-300">Audio</td>
              <td className="py-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                  <Check className="w-3 h-3" />
                  Authentic
                </span>
              </td>
              <td className="py-4 text-white font-mono">89.5%</td>
              <td className="py-4 text-slate-400">18 min ago</td>
              <td className="py-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Lock className="w-3.5 h-3.5" />
                  <span className="text-xs">Immutable</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
