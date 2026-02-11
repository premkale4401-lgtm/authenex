"use client";

import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { formatDistanceToNow } from "date-fns";
import { Clock, Activity } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function ScanHistory() {
  const { t } = useLanguage();
  const { user } = useAuthContext();
  const [scans, setScans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHistory() {
      if (!user) return;

      try {
        // Fetch from backend via API
        const history = await import("@/lib/api").then(mod => mod.getScanHistory());
        setScans(history.slice(0, 5));
      } catch (error) {
        console.error("Error fetching history:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, [user]);

  if (!user) return null;

  if (loading) {
    return <div className="p-4 text-center text-slate-500 animate-pulse">{t('scanHistory.loading')}</div>;
  }

  if (scans.length === 0) {
    return (
      <div className="text-center py-8 border border-dashed border-slate-800 rounded-xl">
        <p className="text-slate-500">{t('scanHistory.noData')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Clock className="w-4 h-4 text-sky-400" />
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{t('scanHistory.title')}</h3>
      </div>

      <div className="grid gap-3">
        {scans.map((scan) => (
          <div 
            key={scan.id} 
            className="p-4 bg-slate-900/50 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
               <div className={`
                 w-2 h-10 rounded-full
                 ${scan.verdict === 'AI' ? 'bg-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 
                   scan.verdict === 'HUMAN' ? 'bg-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 
                   'bg-amber-500/50'}
               `} />
               
               <div>
                 <p className="text-slate-200 font-medium">
                   {scan.verdict === 'AI' ? 'Likely AI' : scan.verdict === 'HUMAN' ? 'Likely Human' : scan.verdict || 'Uncertain'}
                 </p>
                 <p className="text-xs text-slate-500 flex items-center gap-1">
                   {scan.timestamp ? formatDistanceToNow(new Date(scan.timestamp)) + " " + t('scanHistory.ago') : t('scanHistory.justNow')}
                 </p>
               </div>
            </div>

            <div className="text-right">
              <span className="text-sky-400 font-mono font-bold">{scan.confidence}%</span>
              <p className="text-xs text-slate-600">{t('scanHistory.confidence')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
