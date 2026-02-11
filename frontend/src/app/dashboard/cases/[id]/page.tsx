"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, 
  RefreshCw, 
  Shield, 
  Clock,
  Image as ImageIcon,
  CheckCircle2, 
  AlertTriangle, 
  Layers,
  Activity,
  Fingerprint,
  Scan,
  Cpu,
  Eye,
  FileText,
  ChevronRight,
  Loader2
} from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from "recharts";
import { useLanguage } from "@/context/LanguageContext";
import { getScanById } from "@/lib/api";

const CircularProgress = ({ value, color, size = 140, strokeWidth = 10, label }: { 
  value: number; 
  color: string; 
  size?: number; 
  strokeWidth?: number;
  label: string;
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = (value / 100) * circumference;
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(30, 41, 59, 0.5)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - progress }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold tabular-nums text-white">
            {value ? value.toFixed(1) : "0.0"}%
          </span>
        </div>
      </div>
      <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-3">{label}</span>
    </div>
  );
};

export default function CaseDetailPage() {
  const { t } = useLanguage();
  const params = useParams();
  const [activeTab, setActiveTab] = useState("technical");
  const [scanData, setScanData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  useEffect(() => {
    const fetchScan = async () => {
      if (!params.id) return;
      try {
        const data = await getScanById(params.id as string);
        if (data) {
          setScanData(data);
        } else {
          setError("Scan not found");
        }
      } catch (err) {
        setError("Failed to load scan details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchScan();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
      </div>
    );
  }

  if (error || !scanData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-center p-4">
        <div>
           <Shield className="w-16 h-16 text-slate-700 mx-auto mb-4" />
           <h2 className="text-xl font-semibold text-slate-400 mb-2">Error Loading Case</h2>
           <p className="text-slate-500 mb-6">{error || "Case details unavailable"}</p>
           <Link href="/dashboard/cases" className="text-cyan-400 hover:text-cyan-300">Return to Cases</Link>
        </div>
      </div>
    );
  }
  
  // Transform DB data to UI format
  // Handle `details` JSON which might be stringified or object
  let detailsObj = scanData.details;
  if (typeof detailsObj === 'string') {
      try { detailsObj = JSON.parse(detailsObj); } catch(e) {}
  }
  
  // Construct detection layers from findings if structurally different
  const detectionLayers = detailsObj?.detectionLayers || (detailsObj?.findings || []).map((finding: string, idx: number) => ({
      name: `Detection Indicator ${idx + 1}`,
      score: scanData.confidence || 85,
      weight: 100,
      status: scanData.verdict === 'AI' ? 'critical' : 'pass',
      details: [finding]
  }));

  const analysisResult = {
    id: `CASE-${scanData.id}`,
    timestamp: scanData.created_at,
    contentType: scanData.modality?.toLowerCase() || "image",
    filename: scanData.filename || "Unknown File",
    fileSize: "N/A",
    overallScore: {
      aiProbability: scanData.aiPercentage || 0,
      humanProbability: scanData.humanPercentage || 0,
      confidence: scanData.confidence || 0
    },
    riskLevel: (scanData.aiPercentage || 0) > 50 ? 'high' : 'low',
    detectionLayers: detectionLayers,
    metrics: detailsObj?.categoryScores ? Object.entries(detailsObj.categoryScores).map(([key, value]) => ({
      subject: key.charAt(0).toUpperCase() + key.slice(1),
      A: value as number,
      fullMark: 100
    })) : [],
    forensicReport: {
      examiner: `Authenex AI (${scanData.model || 'Standard'})`,
      conclusion: detailsObj?.reasoning || scanData.reasoning || "Analysis based on multi-model detection.",
      recommendations: [
         "Verify source provenance",
         "Cross-reference metadata",
         "Manual inspection recommended for high-risk content"
      ]
    }
  };

  const tabs = [
    { id: "technical", label: t("analyze.report.tabs.details"), icon: Cpu },
    { id: "visualization", label: t("analyze.report.tabs.visual"), icon: Eye },
    { id: "report", label: t("analyze.report.tabs.report"), icon: FileText },
  ];

  const handleDownload = () => {
      alert("Report download coming soon for historical cases.");
  };

  return (
    <div className="min-h-screen pb-20 lg:pb-0 relative overflow-hidden bg-slate-950">
      <div className="relative z-10 container mx-auto px-4 py-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                 <Link href="/dashboard/cases" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors">
                    <ChevronRight className="w-5 h-5 text-slate-400 rotate-180" />
                 </Link>
                <div>
                  <h1 className="text-2xl font-bold text-white">{t("dashboard.recentAnalysis.status.completed")}</h1>
                  <p className="text-slate-400 text-sm">{t("analyze.report.id")}: {analysisResult.id}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Download button removed */}
            </div>
          </div>

          {/* File Info Bar */}
          <div className="flex flex-wrap items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-300 text-sm">{analysisResult.filename}</span>
            </div>
            <div className="w-px h-4 bg-slate-800" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-500" />
              <span className="text-slate-500 text-sm">{new Date(analysisResult.timestamp).toLocaleDateString()}</span>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <div className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                analysisResult.riskLevel === 'high' 
                  ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' 
                  : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
              }`}>
                {analysisResult.riskLevel} {t("analyze.report.risk")}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column - Score Display */}
             <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-center mb-4">
                  <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest">{t("analyze.report.authenticityAssessment")}</h3>
                </div>
                
                <div className="space-y-8">
                  <div className="flex flex-col items-center">
                    <CircularProgress 
                      value={analysisResult.overallScore.aiProbability} 
                      color="#f43f5e" 
                      size={160}
                      strokeWidth={12}
                      label=""
                    />
                    <div className="mt-4 text-center">
                      <p className="text-rose-400 text-sm font-bold uppercase tracking-wider">{t("analyze.results.aiGenerated")}</p>
                      <p className="text-slate-500 text-xs mt-1">{t("analyze.report.probability")}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                    <div className="relative flex justify-center">
                      <span className="bg-slate-900 px-3 py-1 text-slate-500 text-xs font-bold">VS</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <CircularProgress 
                      value={analysisResult.overallScore.humanProbability} 
                      color="#10b981" 
                      size={160}
                      strokeWidth={12}
                      label=""
                    />
                    <div className="mt-4 text-center">
                      <p className="text-emerald-400 text-sm font-bold uppercase tracking-wider">{t("analyze.report.human")}</p>
                      <p className="text-slate-500 text-xs mt-1">{t("analyze.report.authenticity")}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-2 mb-6 max-w-xs mx-auto">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                       <span>{t("analyze.report.confidenceScore")}</span>
                       <span className="text-white font-mono font-bold">{analysisResult.overallScore.confidence.toFixed(1)}%</span>
                    </div>
                    <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/30">
                       <div 
                         className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.3)]" 
                         style={{ width: `${analysisResult.overallScore.confidence}%` }}
                       />
                    </div>
                </div>

                <div className="mt-6 p-4 bg-slate-950/50 border border-slate-800 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className={`w-5 h-5 flex-shrink-0 ${
                      analysisResult.riskLevel === 'high' ? 'text-rose-400' : 'text-emerald-400'
                    }`} />
                    <div>
                      <h4 className={`font-semibold mb-1 text-sm ${
                        analysisResult.riskLevel === 'high' ? 'text-rose-400' : 'text-emerald-400'
                      }`}>
                         {analysisResult.overallScore.aiProbability > 50 ? t("analyze.report.syntheticDetected") : t("analyze.report.likelyAuthentic")}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Tabs */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex gap-2 border-b border-slate-800 pb-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all relative ${
                      activeTab === tab.id
                        ? "text-cyan-400"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" 
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
               {activeTab === "technical" && (
                <motion.div
                  key="technical"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                   {/* Layers Summary */}
                   <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                       <div className="flex items-center justify-between">
                         <div>
                           <h3 className="text-white font-bold text- flex items-center gap-2">
                             <Layers className="w-5 h-5 text-cyan-400" />
                             {t("analyze.report.multiLayerAnalysis")}
                           </h3>
                           <p className="text-slate-400 text-sm mt-1">{analysisResult.detectionLayers.length} {t("analyze.report.layersAnalyzed")}</p>
                         </div>
                       </div>
                       
                       <div className="mt-5">
                         <div className="space-y-2.5">
                           {analysisResult.detectionLayers.map((layer: any, idx: number) => (
                               <div key={idx} className="group">
                                 <div className="flex items-center justify-between text-xs mb-1.5">
                                   <span className="text-slate-300 font-medium">{layer.name}</span>
                                   <span className="text-cyan-400 font-bold">{layer.status}</span>
                                 </div>
                                 <div className="h-3 bg-slate-800/50 rounded-full overflow-hidden relative">
                                   <div
                                     style={{ width: `100%` }}
                                     className={`absolute h-full ${layer.status === 'critical' ? 'bg-rose-500' : 'bg-emerald-500'}`}
                                   />
                                 </div>
                               </div>
                           ))}
                         </div>
                       </div>
                   </div>

                   {/* Radar Chart */}
                   {analysisResult.metrics && analysisResult.metrics.length > 0 && (
                      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mt-6">
                       <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                         <Scan className="w-5 h-5 text-cyan-400" />
                         {t("analyze.report.categoryDistribution")}
                       </h3>
                       <div className="h-72">
                         <ResponsiveContainer width="100%" height="100%">
                          <RadarChart data={analysisResult.metrics}>
                            <PolarGrid stroke="#334155" strokeWidth={1.5} />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                            <Radar 
                              name="AI Probability" 
                              dataKey="A" 
                              stroke="#f43f5e" 
                              strokeWidth={2.5} 
                              fill="#f43f5e" 
                              fillOpacity={0.25} 
                              dot={{ fill: '#f43f5e', r: 4 }}
                            />
                            <Tooltip />
                          </RadarChart>
                        </ResponsiveContainer>
                       </div>
                     </div>
                   )}
                </motion.div>
               )}

               {activeTab === "visualization" && (
                   <motion.div
                   key="visualization"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0 }}
                   className="space-y-6"
                 >
                   <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                     <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                       <Scan className="w-5 h-5 text-cyan-400" />
                       {t("analyze.report.detectionFindings")}
                     </h3>
                     <div className="space-y-3">
                       {analysisResult.detectionLayers.map((layer: any, idx: number) => (
                         <div
                           key={idx}
                           className="flex items-start gap-3 p-4 bg-slate-950/50 rounded-lg border border-slate-800/50"
                         >
                           <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                             layer.status === 'critical' ? 'bg-rose-500' : 'bg-emerald-500'
                           }`} />
                            <div className="flex-1">
                              <h4 className="text-slate-200 font-medium mb-1">{layer.name}</h4>
                              {layer.details && (
                                <ul className="space-y-1">
                                  {(() => {
                                    // Handle details as string (split by newlines) or array
                                    const detailsArray = typeof layer.details === 'string' 
                                      ? layer.details.split('\n').filter((d: string) => d.trim())
                                      : Array.isArray(layer.details) 
                                      ? layer.details 
                                      : [layer.details];
                                    
                                    return detailsArray.map((detail: string, detailIdx: number) => (
                                      <li key={detailIdx} className="text-slate-400 text-sm flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                                        {detail}
                                      </li>
                                    ));
                                  })()}
                                </ul>
                              )}
                            </div>
                         </div>
                       ))}
                     </div>
                   </div>
                 </motion.div>
               )}
               
               {activeTab === "report" && (
                   <motion.div
                   key="report"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0 }}
                   className="bg-slate-900/50 border border-slate-800 rounded-xl p-8"
                 >
                   <div className="border-b border-slate-800 pb-6 mb-6">
                     <h3 className="text-xl font-bold text-white mb-2">{t("analyze.report.forensicReport")}</h3>
                     <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                       <div>
                         <span className="text-slate-500">{t("analyze.report.examiner")}:</span>
                         <span className="text-slate-300 ml-2">{analysisResult.forensicReport.examiner}</span>
                       </div>
                       <div>
                         <span className="text-slate-500">{t("analyze.report.date")}:</span>
                         <span className="text-slate-300 ml-2">{new Date(analysisResult.timestamp).toLocaleString()}</span>
                       </div>
                     </div>
                   </div>

                   <div className="space-y-6">
                     <div>
                       <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                         <Fingerprint className="w-4 h-4 text-cyan-400" />
                         {t("analyze.report.conclusion")}
                       </h4>
                       <p className="text-slate-400 leading-relaxed">
                         {analysisResult.forensicReport.conclusion}
                       </p>
                     </div>
                   </div>
                 </motion.div>
               )}

            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
