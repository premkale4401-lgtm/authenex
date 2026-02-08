
import React from 'react';
import { DetectionResult } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

interface ForensicReportProps {
  result: DetectionResult;
  onReset: () => void;
}

export const ForensicReport: React.FC<ForensicReportProps> = ({ result, onReset }) => {
  const pieData = [
    { name: 'AI Probability', value: result.aiPercentage, color: '#f43f5e' },
    { name: 'Human Probability', value: result.humanPercentage, color: '#10b981' }
  ];

  const getRadarData = () => {
    if (!result.categoryScores) return [];
    const entries = Object.entries(result.categoryScores);
    return entries.map(([key, value]) => ({
      subject: key.replace('_', ' ').toUpperCase(),
      A: value,
      fullMark: 100
    }));
  };

  const radarData = getRadarData();

  const getVerdictStyles = () => {
    switch(result.verdict) {
      case 'AI': return 'text-rose-500 border-rose-500/30 bg-rose-500/10';
      case 'HUMAN': return 'text-emerald-500 border-emerald-500/30 bg-emerald-500/10';
      default: return 'text-amber-500 border-amber-500/30 bg-amber-500/10';
    }
  };

  const handleDownloadReport = () => {
    const timestamp = new Date().toLocaleString();
    const findingsHtml = result.findings.map((f, i) => `<li>${f}</li>`).join('');
    const artifactsHtml = result.metadata.artifactsDetected.map(a => `<span class="tag">${a}</span>`).join(' ');
    
    const reportContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Authenex Forensic Report - ${result.verdict}</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #020617; color: #f8fafc; padding: 40px; }
        .report-card { max-width: 800px; margin: auto; background: #0f172a; border: 1px solid #1e293b; border-radius: 24px; padding: 40px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
        .header { text-align: center; border-bottom: 1px solid #1e293b; padding-bottom: 20px; margin-bottom: 30px; }
        .logo { color: #38bdf8; font-weight: bold; font-size: 24px; letter-spacing: 2px; }
        .verdict { font-size: 48px; font-weight: 800; margin: 20px 0; color: ${result.verdict === 'AI' ? '#f43f5e' : '#10b981'}; }
        .stats { display: flex; justify-content: space-around; margin: 30px 0; background: #1e293b; padding: 20px; border-radius: 16px; }
        .stat-item { text-align: center; }
        .stat-value { font-size: 24px; font-weight: bold; display: block; }
        .stat-label { font-size: 10px; text-transform: uppercase; color: #64748b; }
        .section-title { color: #38bdf8; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-top: 30px; margin-bottom: 15px; border-bottom: 1px solid #1e293b; padding-bottom: 5px; }
        ul { padding-left: 20px; line-height: 1.6; color: #94a3b8; }
        .tag { background: #334155; padding: 4px 8px; border-radius: 6px; font-size: 11px; margin-right: 5px; }
        .disclaimer-box { margin-top: 15px; font-size: 11px; color: #94a3b8; opacity: 0.8; font-style: italic; }
        .footer { text-align: center; margin-top: 40px; font-size: 10px; color: #475569; }
    </style>
</head>
<body>
    <div class="report-card">
        <div class="header">
            <div class="logo">AUTHENEX FORENSICS</div>
            <div>Automated Asset Verification Node v2.5</div>
        </div>
        <div style="text-align: center;">
            <div class="stat-label">Analysis Verdict</div>
            <div class="verdict">${result.verdict} DETECTED</div>
            <div style="color: #64748b; font-size: 12px;">Confidence Level: ${(result.confidence * 100).toFixed(2)}% | Analysis Speed: ${result.analysisSpeed || 0}s</div>
            <div class="disclaimer-box">[AUTHENEX can make mistake. Check important info.]</div>
        </div>
        <div class="stats">
            <div class="stat-item">
                <span class="stat-value">${result.aiPercentage}%</span>
                <span class="stat-label">Synthetic Markers</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${result.humanPercentage}%</span>
                <span class="stat-label">Biological Markers</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${result.modality}</span>
                <span class="stat-label">Asset Modality</span>
            </div>
        </div>
        <div class="section-title">Forensic Evidence</div>
        <ul>${findingsHtml}</ul>
        <div class="section-title">Neural Artifact Tags</div>
        <div style="margin-top: 10px;">${artifactsHtml}</div>
        <div class="section-title">Session Metadata</div>
        <div style="font-size: 12px; color: #94a3b8;">
            Source Engine Identifier: ${result.metadata.potentialModel || 'N/A'}<br>
            Analysis Speed: ${result.analysisSpeed || 0}s<br>
            Analysis Timestamp: ${timestamp}
        </div>
        <div class="footer">
            Generated by Authenex. This report is for forensic guidance only.
        </div>
    </div>
</body>
</html>`;

    const blob = new Blob([reportContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Authenex-Forensic-Report-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header Result Summary */}
      <div className={`p-8 rounded-3xl border-2 text-center transition-all ${getVerdictStyles()} shadow-[0_0_40px_rgba(0,0,0,0.1)] relative overflow-hidden`}>
        <div className="absolute top-4 left-4">
           <span className="bg-slate-800 text-slate-400 text-[10px] font-orbitron px-3 py-1 rounded-full border border-slate-700 uppercase tracking-widest">
            {result.modality} SESSION
           </span>
        </div>
        {result.verdict === 'AI' && (
          <div className="absolute top-4 right-4 animate-bounce">
             <span className="bg-rose-600 text-white text-[10px] font-orbitron px-3 py-1 rounded-full shadow-lg border border-white/20 uppercase tracking-widest">Synthetic Detected</span>
          </div>
        )}
        
        <p className="text-xs font-orbitron tracking-[0.4em] uppercase mb-2 opacity-70">Forensic Scan Result</p>
        <h2 className="text-5xl font-black font-orbitron mb-2 tracking-tighter">
          {result.verdict === 'AI' ? 'SYNTHETIC' : result.verdict === 'HUMAN' ? 'AUTHENTIC' : 'SUSPICIOUS'}
        </h2>
        
        {result.verdict === 'AI' && result.metadata.potentialModel && (
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
            <span className="text-[10px] font-orbitron text-slate-400 uppercase tracking-widest">Source Engine:</span>
            <span className="text-lg font-bold font-orbitron text-sky-400 neon-glow">{result.metadata.potentialModel}</span>
          </div>
        )}

        <div className="flex flex-col items-center gap-1 mt-6">
          <div className="flex justify-center items-center gap-4">
            <div className="h-px w-12 bg-current opacity-30"></div>
            <div className="flex flex-col items-center">
               <span className="text-sm font-orbitron uppercase tracking-widest">Confidence: {(result.confidence * 100).toFixed(1)}%</span>
               <span className="text-[10px] font-orbitron text-slate-500 uppercase tracking-widest mt-1">Analysis Speed: {result.analysisSpeed || 0}s</span>
            </div>
            <div className="h-px w-12 bg-current opacity-30"></div>
          </div>
          <p className="text-[10px] font-orbitron mt-2 opacity-60 italic tracking-wider">
            [AUTHENEX can make mistake. Check important info.]
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center min-h-[450px]">
          <div className="text-center mb-8">
            <h3 className="font-orbitron text-lg opacity-80">Compositional Integrity</h3>
          </div>
          <div className="w-full h-72 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={75} outerRadius={110} paddingAngle={8} dataKey="value" stroke="none">
                  {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', fontSize: '12px', color: 'var(--text-main)' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-5xl font-black font-orbitron">{Math.max(result.aiPercentage, result.humanPercentage)}%</span>
              <span className="text-[10px] text-slate-400 font-orbitron uppercase tracking-tighter">Primary Trace</span>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8 w-full">
            <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20 text-center"><p className="text-[10px] font-orbitron text-rose-500 uppercase mb-1">AI Score</p><p className="text-2xl font-bold font-orbitron">{result.aiPercentage}%</p></div>
            <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center"><p className="text-[10px] font-orbitron text-emerald-500 uppercase mb-1">Human Score</p><p className="text-2xl font-bold font-orbitron">{result.humanPercentage}%</p></div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center min-h-[450px]">
          <div className="text-center mb-8">
            <h3 className="font-orbitron text-lg opacity-80">Neural Marker Flux</h3>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Modal Analysis: {result.modality}</p>
          </div>
          <div className="w-full h-72">
            {radarData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#64748b" opacity={0.3} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontFamily: 'Orbitron' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Intensity" dataKey="A" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.4} />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', fontSize: '12px', color: 'var(--text-main)' }} />
                </RadarChart>
              </ResponsiveContainer>
            ) : <div className="text-slate-500 font-orbitron text-xs">No categorical data available for this scan.</div>}
          </div>
          <div className="mt-8 w-full p-4 rounded-2xl border border-slate-800 bg-black/5">
            <h4 className="text-[10px] font-orbitron text-sky-400 uppercase mb-3 tracking-widest">Dimension Readings</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {radarData.map((d, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[9px] text-slate-500 font-orbitron uppercase">{d.subject}</span>
                  <span className="text-xs font-bold">{d.A}/100</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-panel p-8 rounded-3xl border border-slate-800">
          <h4 className="font-orbitron text-sm text-sky-400 mb-6 flex items-center gap-2 uppercase tracking-widest">
            <i className="fa-solid fa-dna"></i> Evidence Sequence
          </h4>
          <div className="space-y-4">
            {result.findings.map((finding, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-900/10 border border-slate-800/20 group hover:border-sky-500/30 transition-all">
                <div className="w-8 h-8 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 text-sky-500 text-xs font-bold group-hover:bg-sky-500 group-hover:text-white transition-all">{idx + 1}</div>
                <p className="text-sm opacity-80 leading-relaxed pt-1">{finding}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-panel p-8 rounded-3xl border border-slate-800">
            <h4 className="font-orbitron text-sm text-sky-400 mb-4 uppercase tracking-widest">Extraction Data</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-orbitron text-slate-500 uppercase mb-1">Identified Model</p>
                <p className="text-lg font-bold truncate">{result.verdict === 'AI' ? (result.metadata.potentialModel || 'Unknown Synthetic') : 'None (Authentic)'}</p>
              </div>
              <div className="h-px bg-slate-800 opacity-10"></div>
              <div>
                <p className="text-[10px] font-orbitron text-slate-500 uppercase mb-3">Analysis Speed</p>
                <p className="text-lg font-bold truncate text-sky-400">{result.analysisSpeed || 0}s</p>
              </div>
              <div className="h-px bg-slate-800 opacity-10"></div>
              <div>
                <p className="text-[10px] font-orbitron text-slate-500 uppercase mb-3">Detected Artifact Tags</p>
                <div className="flex flex-wrap gap-2">
                  {result.metadata.artifactsDetected.map((tag, i) => (
                    <span key={i} className="text-[9px] font-orbitron bg-slate-800 text-slate-400 px-2 py-1 rounded-md border border-slate-700 uppercase">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <button 
              onClick={handleDownloadReport} 
              className="w-full py-5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sky-400 rounded-3xl font-orbitron text-xs font-bold transition-all shadow-xl flex items-center justify-center gap-4 group active:scale-95"
            >
              <i className="fa-solid fa-file-pdf group-hover:scale-125 transition-transform"></i> DOWNLOAD REPORT
            </button>
            <button 
              onClick={onReset} 
              className="w-full py-6 bg-sky-600 hover:bg-sky-500 text-white rounded-3xl font-orbitron text-sm font-bold transition-all shadow-xl shadow-sky-600/30 flex items-center justify-center gap-4 group active:scale-95"
            >
              <i className="fa-solid fa-microscope group-hover:scale-125 transition-transform"></i> NEW SCAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
