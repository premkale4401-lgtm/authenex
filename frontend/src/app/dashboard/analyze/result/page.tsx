"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { 
  Download, 
  RefreshCw, 
  Share2, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Shield, 
  Zap,
  Clock,
  FileText,
  Image as ImageIcon,
  Mic,
  FileType,
  AtSign,
  Type,
  ChevronRight,
  ChevronDown,
  Loader2,
  Maximize2,
  Minimize2,
  Info,
  Layers,
  Activity,
  Fingerprint,
  Scan,
  Cpu,
  Eye,
  Lock,
  Play,
  Pause,
  RotateCcw,
  Save,
  Printer,
  Mail
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { useAnalysis } from "@/context/AnalysisContext";

import { useLanguage } from "@/context/LanguageContext";



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
            {value.toFixed(1)}%
          </span>
        </div>
      </div>
      <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-3">{label}</span>
    </div>
  );
};

const WaveformVisualizer = ({ data }: { data: any[] }) => {
  if (!data || data.length === 0) return null;
  
  return (
    <div className="h-32 w-full relative overflow-hidden rounded-xl bg-slate-900/50 border border-slate-800/50">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorAuth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area 
            type="monotone" 
            dataKey="authenticity" 
            stroke="#06b6d4" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorAuth)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const HeatmapOverlay = ({ result }: { result: any }) => {
  if (!result.heatmapData || !result.heatmapData.regions) return null;

  return (
    <div className="relative w-full aspect-video bg-slate-900 rounded-xl overflow-hidden border border-slate-800/50 group">
      {/* Placeholder for analyzed image */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
        <ImageIcon className="w-16 h-16 text-slate-700" />
      </div>
      
      {/* Heatmap regions */}
      {result.heatmapData.regions.map((region: any, idx: number) => (
        <motion.div
          key={idx}
          className="absolute rounded-full border-2 border-rose-500/50 bg-rose-500/10"
          style={{
            left: `${region.x}%`,
            top: `${region.y}%`,
            width: 80,
            height: 80,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 + idx * 0.2, duration: 0.5 }}
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-rose-500/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {(region.intensity * 100).toFixed(0)}% AI
          </div>
        </motion.div>
      ))}
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
};

const SignalCard = ({ signal, index }: { 
  signal: {
    name: string;
    score: number;
    weight: number;
    status: string;
    details: string[];
  }, 
  index: number 
}) => {
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'critical': return 'bg-rose-500/10 border-rose-500/20 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.1)]';
      case 'elevated': return 'bg-orange-500/10 border-orange-500/20 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.1)]';
      case 'warning': return 'bg-amber-500/10 border-amber-500/20 text-amber-400';
      default: return 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]';
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-4 hover:border-slate-700 transition-colors"
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-slate-200">{signal.name}</h4>
        <div className={`px-2 py-0.5 rounded text-xs font-semibold border ${getStatusColor(signal.status)}`}>
          {signal.status}
        </div>
      </div>
      
      <div className="flex items-center gap-3 text-sm">
        <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${signal.score}%` }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
            className={`h-full rounded-full ${
              signal.score > 80 ? 'bg-rose-500' :
              signal.score > 50 ? 'bg-amber-500' :
              'bg-emerald-500'
            }`}
          />
        </div>
        <span className={`font-bold ${
          signal.score > 80 ? 'text-rose-400' :
          signal.score > 50 ? 'text-amber-400' :
          'text-emerald-400'
        }`}>{signal.score}%</span>
      </div>
    </motion.div>
  );
};

export default function AnalysisResultPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("technical"); // Default to technical
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const { currentAnalysis } = useAnalysis();
  const router = useRouter();
  
  const tabs = [
    { id: "technical", label: t("analyze.report.tabs.details"), icon: Cpu },
    { id: "visualization", label: t("analyze.report.tabs.visual"), icon: Eye },
    { id: "report", label: t("analyze.report.tabs.report"), icon: FileText },
  ];

  const handleDownload = async (format: 'pdf' | 'json' | 'csv') => {
    if (format === 'pdf') {
      try {
        setIsGeneratingReport(true);
        
        // Dynamic import to avoid SSR issues if any
        const { generatePDFReport } = await import('@/lib/report/client');
        
        // Map current analysis data to strict AnalysisResult type
        const reportData: import('@/types/report').AnalysisResult = {
          reportId: analysisResult.id,
          generatedAt: analysisResult.timestamp,
          contentType: analysisResult.contentType as any,
          verdict: analysisResult.overallScore.aiProbability > 50 ? 'ai-generated' : 'authentic',
          aiPercentage: analysisResult.overallScore.aiProbability,
          confidence: {
            score: analysisResult.overallScore.confidence
          },
          riskLevel: analysisResult.riskLevel as any,
          summary: analysisResult.forensicReport.conclusion,
          content: {
            filename: analysisResult.filename,
            fileSize: analysisResult.fileSize,
            fileType: analysisResult.contentType,
            imageUrl: (currentAnalysis as any)?.filePreview,
            thumbnailUrl: undefined
          },
          analysis: {
            engineVersion: analysisResult.forensicReport.examiner,
            duration: analysisResult.analysisDuration,
            signalsDetected: analysisResult.signalsDetected
          },
          detectionResults: analysisResult.detectionLayers.map((layer: any) => ({
            category: 'General', // Default category
            name: layer.name,
            score: layer.score,
            weight: layer.weight,
            status: layer.status === 'critical' || layer.status === 'elevated' ? 'fail' : 
                   layer.status === 'warning' ? 'warning' : 'pass',
            findings: layer.details || []
          }))
        };
        
        await generatePDFReport(reportData);
        
      } catch (error) {
        console.error("PDF Generation failed:", error);
        const errorMsg = error instanceof Error ? error.message : String(error);
        alert(`Failed to generate PDF report: ${errorMsg}\n\nCheck the browser console for details.`);
      } finally {
        setIsGeneratingReport(false);
      }
    }
  };
  
  
  // Use ONLY real backend data - NO fallback to mock
  if (!currentAnalysis) {
    return (
      <div className="min-h-screen pb-20 lg:pb-0 relative overflow-hidden bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-16 h-16 text-slate-700 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-400 mb-2">{t("analyze.report.error.title")}</h2>
          <p className="text-slate-500 mb-6">{t("analyze.report.error.desc")}</p>
          <Link
            href="/dashboard/analyze"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg text-sm font-medium inline-flex items-center gap-2 transition-all"
          >
            <Scan className="w-4 h-4" />
            {t("analyze.report.error.action")}
          </Link>
        </div>
      </div>
    );
  }

  const analysisResult = {
    id: `ANX-${Date.now()}`,
    timestamp: new Date().toISOString(),
    contentType: currentAnalysis.modality?.toLowerCase() || "image",
    filename: "analyzed_file",
    fileSize: "N/A",
    dimensions: "N/A",
    overallScore: {
      aiProbability: currentAnalysis.aiPercentage || 0,
      humanProbability: currentAnalysis.humanPercentage || 0,
      confidence: currentAnalysis.confidence || 0
    },
    analysisDuration: "N/A",
    processingNodes: 1,
    signalsDetected: currentAnalysis.detectionLayers?.length || 0,
    riskLevel: (currentAnalysis.aiPercentage || 0) > 50 ? 'high' : 'low',
    status: "completed",
    
    // Use REAL backend data only
    detectionLayers: currentAnalysis.detectionLayers || [],
    
    metrics: currentAnalysis.categoryScores ? Object.entries(currentAnalysis.categoryScores).map(([key, value]) => ({
      subject: key.charAt(0).toUpperCase() + key.slice(1),
      A: value as number,
      B: 100 - (value as number),
      fullMark: 100
    })) : [],
    
    forensicReport: {
      examiner: "Authenex AI Engine v3.2.1",
      methodology: "Multi-signal ensemble analysis with deep feature extraction",
      conclusion: currentAnalysis.explanation || "Analysis completed successfully.",
      recommendations: [
        "Verify source provenance through chain of custody",
        "Cross-reference with metadata from capture device",
        "Consider secondary analysis with alternate methodologies"
      ]
    },
    
    // No heatmap or temporal data unless backend provides it
    heatmapData: (currentAnalysis as any).heatmapData || null,
    temporalData: null
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
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-xl flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <h1 className="text-2xl font-bold text-white">{t("dashboard.recentAnalysis.status.completed")}</h1>
                  <p className="text-slate-400 text-sm">{t("analyze.report.id")}: {analysisResult.id}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleDownload('pdf')}
                disabled={isGeneratingReport}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-all border border-slate-700 disabled:opacity-50"
              >
                {isGeneratingReport ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                {t("analyze.results.downloadReport")}
              </button>
              
              <Link
                href="/dashboard/analyze"
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/25"
              >
                <RefreshCw className="w-4 h-4" />
                {t("nav.newAnalysis")}
              </Link>
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
              <span className="text-slate-500 text-sm">{analysisResult.fileSize}</span>
            </div>
            <div className="w-px h-4 bg-slate-800" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-500" />
              <span className="text-slate-500 text-sm">{analysisResult.analysisDuration}</span>
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
            {/* Primary Score Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 overflow-hidden"
            >
              
              
              <div className="relative z-10">
                <div className="text-center mb-4">
                  <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest">{t("analyze.report.authenticityAssessment")}</h3>
                </div>
                
                {/* Vertical Progress Rings */}
                <div className="space-y-8">
                  {/* AI Probability Ring - Now on Top */}
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
                  
                  {/* VS Divider */}
                  <div className="relative">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                    <div className="relative flex justify-center">
                      <span className="bg-slate-900 px-3 py-1 text-slate-500 text-xs font-bold">VS</span>
                    </div>
                  </div>
                  
                  {/* Human Probability Ring - Now on Bottom */}
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
                
                {/* Confidence - Moved Up */}
                <div className="mt-2 mb-6 max-w-xs mx-auto">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                       <span>{t("analyze.report.confidenceScore")}</span>
                       <span className="text-white font-mono font-bold">{analysisResult.overallScore.confidence}%</span>
                    </div>
                    <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/30">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: `${analysisResult.overallScore.confidence}%` }}
                         className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.3)]" 
                       />
                    </div>
                </div>

                {/* Verdict */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 p-4 bg-slate-950/50 border border-slate-800 rounded-xl"
                >
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
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Tabs & Details */}
          <div className="lg:col-span-8 space-y-6">
            {/* Tabs */}
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
                   {/* Detection Layers Summary Banner */}
                   {analysisResult.detectionLayers && analysisResult.detectionLayers.length > 0 && (
                     <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                       <div className="flex items-center justify-between">
                         <div>
                           <h3 className="text-white font-bold text- flex items-center gap-2">
                             <Layers className="w-5 h-5 text-cyan-400" />
                             {t("analyze.report.multiLayerAnalysis")}
                           </h3>
                           <p className="text-slate-400 text-sm mt-1">{analysisResult.detectionLayers.length} {t("analyze.report.layersAnalyzed")}</p>
                         </div>
                         <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-4 py-2 text-center">
                           <span className="text-cyan-400 font-mono text-2xl font-bold">{analysisResult.overallScore.confidence.toFixed(1)}%</span>
                           <p className="text-cyan-300 text-xs mt-0.5">{t("analyze.report.overallConfidence")}</p>
                         </div>
                       </div>
                       
                       {/* Layer Contribution Visualization */}
                       <div className="mt-5">
                         <h4 className="text-slate-300 font-semibold mb-3 text-sm flex items-center gap-2">
                           <Activity className="w-4 h-4 text-cyan-400" />
                           {t("analyze.report.layerContribution")}
                         </h4>
                         <div className="space-y-2.5">
                           {analysisResult.detectionLayers.map((layer: any, idx: number) => {
                             const contribution = (layer.score * layer.weight) / 100;
                             return (
                               <div key={idx} className="group">
                                 <div className="flex items-center justify-between text-xs mb-1.5">
                                   <span className="text-slate-300 font-medium">{layer.name}</span>
                                   <span className="text-slate-500">
                                     {layer.score}% <span className="text-slate-600">×</span> {layer.weight}% <span className="text-slate-600">=</span> <span className="text-cyan-400 font-bold">{contribution.toFixed(1)}</span>
                                   </span>
                                 </div>
                                 <div className="h-3 bg-slate-800/50 rounded-full overflow-hidden relative">
                                   {/* Background weight indicator */}
                                   <motion.div
                                     initial={{ width: 0 }}
                                     animate={{ width: `${layer.weight}%` }}
                                     transition={{ duration: 0.6, delay: idx * 0.08 }}
                                     className="absolute h-full bg-slate-700/20 border-r border-slate-600/30"
                                   />
                                   {/* Contribution bar */}
                                   <motion.div
                                     initial={{ width: 0 }}
                                     animate={{ width: `${contribution}%` }}
                                     transition={{ duration: 0.8, delay: 0.2 + idx * 0.08, ease: "easeOut" }}
                                     className="absolute h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_12px_rgba(6,182,212,0.5)]"
                                   />
                                 </div>
                               </div>
                             );
                           })}
                         </div>
                       </div>
                     </div>
                   )}

                   {/* Removed Detailed Layer Analysis section as per user request */}
                   {analysisResult.detectionLayers && analysisResult.detectionLayers.length === 0 && (
                     <div className="bg-slate-900/30 border border-dashed border-slate-700 rounded-xl p-12 text-center">
                       <Layers className="w-16 h-16 text-slate-700 mx-auto mb-4 opacity-50" />
                       <p className="text-slate-400 font-medium mb-1">{t("analyze.report.noLayers")}</p>
                       <p className="text-slate-600 text-sm">{t("analyze.report.noLayersDesc")}</p>
                     </div>
                   )}

                   {/* Feature Analysis Radar - Only if metrics exist */}
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
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: '#0f172a', 
                                border: '1px solid #1e293b', 
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                              }} 
                              itemStyle={{ color: '#e2e8f0', fontWeight: 600 }} 
                            />
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
                  {/* Key Findings Section */}
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Scan className="w-5 h-5 text-cyan-400" />
                      {t("analyze.report.detectionFindings")}
                    </h3>
                    <div className="space-y-3">
                      {analysisResult.detectionLayers.map((layer: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 p-4 bg-slate-950/50 rounded-lg border border-slate-800/50"
                        >
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            layer.status === 'critical' ? 'bg-rose-500' :
                            layer.status === 'elevated' ? 'bg-orange-500' :
                            layer.status === 'warning' ? 'bg-amber-500' :
                            'bg-emerald-500'
                          }`} />
                          <div className="flex-1">
                            <h4 className="text-slate-200 font-medium mb-1">{layer.name}</h4>
                            <ul className="space-y-1">
                              {(layer.details || []).map((detail: string, detailIdx: number) => (
                                <li key={detailIdx} className="text-slate-400 text-sm flex items-start gap-2">
                                  <ChevronRight className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className={`px-3 py-1 rounded-lg text-sm font-bold border ${
                            layer.status === 'critical' ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' :
                            layer.status === 'elevated' ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' :
                            layer.status === 'warning' ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' :
                            'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                          }`}>
                            {layer.score}%
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Heatmap if available */}
                  {analysisResult.heatmapData && (
                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                      <h3 className="text-white font-semibold mb-4 text-sm">{t("analyze.report.heatmap")}</h3>
                      <HeatmapOverlay result={analysisResult} />
                    </div>
                  )}

                  {/* Temporal Data if available */}
                  {analysisResult.temporalData && (
                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                      <h3 className="text-white font-semibold mb-4 text-sm">{t("analyze.report.temporal")}</h3>
                      <WaveformVisualizer data={analysisResult.temporalData} />
                    </div>
                  )}
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
                  {/* Report Content */}
                  <div className="border-b border-slate-800 pb-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{t("analyze.report.forensicReport")}</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
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

                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        {t("analyze.report.recommendations")}
                      </h4>
                      <ul className="space-y-2">
                        {analysisResult.forensicReport.recommendations.map((rec: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                            <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs text-cyan-400 flex-shrink-0">
                              {idx + 1}
                            </span>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Full Width Description - Bottom - Outside grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-indigo-600" />
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              Analysis Conclusion
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              {analysisResult.forensicReport.conclusion}
            </p>
          </div>
        </motion.div>

        {/* Action Buttons - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-end pt-4"
        >
          <Link
            href="/dashboard/analyze"
            className="px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white rounded-xl text-sm font-medium flex items-center gap-2 transition-all shadow-lg shadow-sky-500/25"
          >
            <RotateCcw className="w-4 h-4" />
            Start New Analysis
          </Link>
        </motion.div>

        {/* AI Safety Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-slate-500 text-xs">
            AI can make mistakes. Check important info.
          </p>
        </motion.div>
      </div>
    </div>
  );
}


