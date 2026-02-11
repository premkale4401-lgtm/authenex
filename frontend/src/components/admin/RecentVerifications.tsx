"use client";

import { Check, AlertCircle, HelpCircle, Lock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function RecentVerifications() {
  const [verifications, setVerifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVerifications() {
      try {
        const data = await import("@/lib/api").then(mod => mod.getVerifications());
        setVerifications(data);
      } catch (error) {
        console.error("Failed to load verifications", error);
      } finally {
        setLoading(false);
      }
    }
    loadVerifications();
  }, []);

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
              <th className="pb-3 font-medium text-slate-400 text-xs uppercase tracking-wider">Status</th>
              <th className="pb-3 font-medium text-slate-400 text-xs uppercase tracking-wider">Time</th>
            </tr>
          </thead>
          <tbody className="text-sm">
             {loading ? (
                <tr><td colSpan={3} className="py-4 text-center text-slate-500">Loading...</td></tr>
             ) : verifications.length === 0 ? (
                <tr><td colSpan={3} className="py-4 text-center text-slate-500">No recent verifications</td></tr>
             ) : (
                verifications.map((v) => (
                  <tr key={v.id} className="border-t border-slate-800/50 hover:bg-sky-500/5 transition-colors">
                    <td className="py-4 pl-2 font-mono text-sky-400">#{v.scanId}</td>
                    <td className="py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border
                        ${v.status === 'APPROVED' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                          v.status === 'REJECTED' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : 
                          'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
                        {v.status}
                      </span>
                    </td>
                    <td className="py-4 text-slate-400">
                      {new Date(v.createdAt).toLocaleTimeString()}
                    </td>
                  </tr>
                ))
             )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
