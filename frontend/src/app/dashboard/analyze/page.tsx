// frontend/src/app/dashboard/analyze/page.tsx (Analysis Interface)
"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Upload, 
  Image as ImageIcon, 
  Video, 
  FileText, 
  X, 
  Shield, 
  AlertCircle,
  CheckCircle2,
  Loader2,
  Scan,
  Brain,
  FileSearch,
  ArrowRight,
  Mic,
  Mail,
  MessageSquare
} from "lucide-react";
import { useDropzone } from "react-dropzone";
import { analyzeImage, analyzeVideo, analyzeAudio, analyzeDocument } from "@/lib/api";
import { useAnalysis } from "@/context/AnalysisContext";
import { useLanguage } from "@/context/LanguageContext";

const analysisTypes = [
  { id: "image", icon: ImageIcon, desc: "Detect manipulation, deepfakes, and metadata analysis" },
  { id: "video", icon: Video, desc: "Frame-by-frame verification and temporal consistency" },
  { id: "document", icon: FileText, desc: "PDF integrity and digital signature verification" },
  { id: "audio", icon: Mic, desc: "Voice cloning detection and waveform analysis" },
  { id: "email", icon: Mail, desc: "Phishing detection and sender identity verification" },
  { id: "text", icon: MessageSquare, desc: "AI-generated text detection (LLM forensics)" },
];

const analysisSteps = [
  { id: "upload", icon: Upload },
  { id: "scanning", icon: Scan },
  { id: "ai-analysis", icon: Brain },
  { id: "results", icon: FileSearch },
];

export default function AnalyzePage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [selectedType, setSelectedType] = useState("image");
  const [files, setFiles] = useState<File[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { setAnalysis } = useAnalysis();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles]);
  }, []);

  const getAccept = (): Record<string, string[]> => {
    switch (selectedType) {
      case 'image': return { 'image/*': [] };
      case 'video': return { 'video/*': [] };
      case 'document': return { 'application/pdf': [] };
      case 'audio': return { 'audio/*': [] };
      case 'email': return { '.eml': [], '.msg': [] };
      case 'text': return { 'text/plain': [], 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [] };
      default: return { 'image/*': [] };
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: getAccept(),
    multiple: true
  });

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  /* eslint-disable @typescript-eslint/no-unused-vars */
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const startAnalysis = async () => {
    if (files.length === 0 && selectedType !== "text" && selectedType !== "email") return;

    setIsAnalyzing(true);
    setCurrentStep(1);
    setResults(null);

    // Initial delay for UX (Scanning step)
    await new Promise(resolve => setTimeout(resolve, 1500));
    setCurrentStep(2);

    try {
      let data;
      
      switch (selectedType) {
        case "image":
          if (files.length > 0) data = await analyzeImage(files[0]);
          break;
        case "video":
           if (files.length > 0) data = await analyzeVideo(files[0]);
          break;
        case "audio":
           if (files.length > 0) data = await analyzeAudio(files[0]);
          break;
         case "document":
           if (files.length > 0) data = await analyzeDocument(files[0]);
           break;
        case "text":
          // Assuming there's a text input state elsewhere, or we handle file as text source
          // For now, let's keep it simple or prompt user - implementing generic fallback
           break;
        case "email":
           break;
        default:
          break;
      }

      if (data) {
        // Transform backend response to UI format
        // Backend returns: { trust_score, deepfake_probability, verdict, explanation, details: { findings: [], ...categoryScores } }
        
        // Map backend findings to UI findings
        // Map backend findings to UI findings
        const findings = data.details?.findings || [];
        
        let mappedFindings = findings.map((f: any) => ({
             type: f.category && f.category !== "General" ? f.category : 
                   (f.reason?.includes("Visual") ? "Visual" : 
                    f.reason?.includes("Face") ? "Facial Analysis" : 
                    f.reason?.includes("Metadata") ? "Metadata" : "Anomaly Detection"),
             status: f.score > 80 ? "critical" : f.score > 60 ? "warning" : "low",
             detail: f.reason || "Analysis complete",
             score: f.score || 85 // Ensure score exists
        }));

        // If no findings, generate from category scores
        if (mappedFindings.length === 0 && data.details) {
           Object.entries(data.details).forEach(([key, value]) => {
              if (key !== 'findings' && typeof value === 'number' && value > 50) {
                 mappedFindings.push({
                    type: key.replace(/([A-Z])/g, ' $1').trim(), // Format camelCase
                    status: value > 80 ? "critical" : value > 60 ? "warning" : "low",
                    detail: `Elevated ${key} anomaly detected`,
                    score: value
                 });
              }
           });
        }

        // Fallback findings if still empty
        if (mappedFindings.length === 0) {
             mappedFindings.push({
                 type: "Overall Integirty",
                 status: data.confidence > 80 ? "valid" : "warning",
                 detail: data.explanation || "No significant anomalies detected",
                 score: Math.round(data.confidence)
             });
        }

        // Extract category scores (texture, lighting, anatomy, background, semantics, etc.)
        const categoryScores: Record<string, number> = {};
        if (data.details) {
          Object.keys(data.details).forEach(key => {
            if (key !== 'findings' && typeof data.details[key] === 'number') {
              categoryScores[key] = data.details[key];
            }
          });
        }

        // Convert file to base64 for PDF embedding (with compression)
        let filePreviewBase64 = undefined;
        if (files[0] && (selectedType === 'image' || selectedType === 'video')) {
          try {
            if (selectedType === 'image') {
              // Create a promise to handle image loading and compression
              filePreviewBase64 = await new Promise<string>((resolve) => {
                const img = new Image();
                img.onload = () => {
                  const canvas = document.createElement('canvas');
                  // Max dimension 800px is sufficient for PDF report thumbnail
                  const MAX_SIZE = 800;
                  let width = img.width;
                  let height = img.height;
                  
                  if (width > height) {
                    if (width > MAX_SIZE) {
                      height *= MAX_SIZE / width;
                      width = MAX_SIZE;
                    }
                  } else {
                    if (height > MAX_SIZE) {
                      width *= MAX_SIZE / height;
                      height = MAX_SIZE;
                    }
                  }
                  
                  canvas.width = width;
                  canvas.height = height;
                  const ctx = canvas.getContext('2d');
                  ctx?.drawImage(img, 0, 0, width, height);
                  
                  // Compress to JPEG with 0.7 quality
                  resolve(canvas.toDataURL('image/jpeg', 0.7));
                };
                img.src = URL.createObjectURL(files[0]);
              });
            } else {
               // For video, we might not be able to grab a frame easily without more complex logic
               // Fallback to simple file read for small videos or placeholder
               // A better approach for video would be to generate a thumbnail, but for now let's skip large video files
               // to avoid breaking localStorage. 
               // If file size is small (< 500KB), try to read it, otherwise skip
               if (files[0].size < 500 * 1024) {
                 const reader = new FileReader();
                 filePreviewBase64 = await new Promise<string>((resolve) => {
                    reader.onload = () => resolve(reader.result as string);
                    reader.readAsDataURL(files[0]);
                 });
               }
            }
          } catch (e) {
            console.error('Failed to process file preview:', e);
          }
        }

        const uiResults = {
            authenticity: data.humanPercentage,
            aiPercentage: data.aiPercentage,
            humanPercentage: data.humanPercentage,
            modality: selectedType,
            verdict: data.verdict,
            explanation: data.explanation,
            manipulated: data.verdict === 'AI',
            confidence: data.confidence,
            confidenceLevel: data.confidence > 80 ? "High" : data.confidence > 50 ? "Medium" : "Low",
            categoryScores: categoryScores,
            findings: mappedFindings,
            detectionLayers: (data.detectionLayers || data.details?.detectionLayers || []).length > 0 
              ? (data.detectionLayers || data.details?.detectionLayers)
              : mappedFindings.map((f: any) => ({
                  category: f.type,
                  name: f.type,
                  score: f.score,
                  weight: 0.2,
                  status: f.status === 'critical' ? 'fail' : f.status === 'warning' ? 'warning' : 'pass',
                  findings: [f.detail],
                  technicalDetails: f.detail
                })),
            metadata: data.metadata || data.details?.metadata || {},
            details: data.details || {},
            heatmapData: data.heatmapData || data.details?.heatmapData || null,
            filePreview: filePreviewBase64
        };

        console.log("Setting analysis result with preview length:", filePreviewBase64 ? filePreviewBase64.length : 0);

        // Update global context for chatbot
        setAnalysis(uiResults);

        setCurrentStep(3);
        await new Promise(resolve => setTimeout(resolve, 500));
        router.push("/dashboard/analyze/result");
      }
      
    } catch (error) {
      console.error("Analysis failed:", error);
      alert("Analysis failed. Please check backend connection.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Helper for text/email input (can be expanded later)
  // For now we focus on file uploads as per UI

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-white">{t('analyze.title')}</h1>
        <p className="text-slate-400">{t('analyze.subtitle')}</p>
      </div>

      {/* Analysis Type Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {analysisTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`relative p-6 rounded-2xl border-2 transition-all text-left group ${
              selectedType === type.id
                ? "border-sky-500 bg-sky-500/10"
                : "border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-800/50"
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
              selectedType === type.id ? "bg-sky-500 text-white" : "bg-slate-800 text-slate-400 group-hover:bg-slate-700"
            }`}>
              <type.icon className="w-6 h-6" />
            </div>
            <h3 className={`font-semibold mb-1 ${selectedType === type.id ? "text-white" : "text-slate-300"}`}>
              {t(`analyze.types.${type.id}`)}
            </h3>
            <p className="text-sm text-slate-400">{type.desc}</p>
            
            {selectedType === type.id && (
              <motion.div
                layoutId="selected-indicator"
                className="absolute top-4 right-4 w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center"
              >
                <CheckCircle2 className="w-4 h-4 text-white" />
              </motion.div>
            )}
          </button>
        ))}
      </div>

      {/* Upload Area */}
      <AnimatePresence mode="wait">

        {!isAnalyzing && !results && (
          <motion.div
            key="upload-area"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div
              {...getRootProps()}
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer ${
                isDragActive
                  ? "border-sky-500 bg-sky-500/10"
                  : "border-slate-700 bg-slate-900/50 hover:border-slate-600 hover:bg-slate-800/30"
              }`}
            >
              <input {...getInputProps()} />
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-slate-800 flex items-center justify-center">
                <Upload className={`w-10 h-10 ${isDragActive ? "text-sky-400" : "text-slate-400"}`} />
              </div>
              <p className="text-lg font-medium text-white mb-2">
                {isDragActive ? t('analyze.dropzone.dragActive') : t('analyze.dropzone.dragDrop')}
              </p>
              <p className="text-sm text-slate-400 mb-4">{t('analyze.dropzone.browse')}</p>
              <button className="px-6 py-2.5 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 transition-colors">
                {t('analyze.dropzone.selectFiles')}
              </button>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-3"
              >
                <h4 className="text-sm font-medium text-slate-300">{t('analyze.dropzone.selectedFiles')} ({files.length})</h4>
                <div className="space-y-2">
                  {files.map((file, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                          {selectedType === 'image' && <ImageIcon className="w-5 h-5 text-purple-400" />}
                          {selectedType === 'video' && <Video className="w-5 h-5 text-rose-400" />}
                          {selectedType === 'document' && <FileText className="w-5 h-5 text-amber-400" />}
                          {selectedType === 'audio' && <Mic className="w-5 h-5 text-sky-400" />}
                          {selectedType === 'email' && <Mail className="w-5 h-5 text-emerald-400" />}
                          {selectedType === 'text' && <MessageSquare className="w-5 h-5 text-indigo-400" />}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white truncate max-w-[200px] sm:max-w-xs">{file.name}</p>
                          <p className="text-xs text-slate-400">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile(index)}
                        className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-rose-400 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
                
                <button
                  onClick={startAnalysis}
                  disabled={isAnalyzing}
                  className="w-full py-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:from-sky-400 hover:to-indigo-500 transition-all shadow-lg shadow-sky-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t('analyze.button.analyzing')}
                    </>
                  ) : (
                    <>
                      {t('analyze.button.start')}
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Analysis Progress - Scanning Animation */}
        {isAnalyzing && (
          <motion.div
            key="scanning-animation"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative max-w-3xl mx-auto aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-sky-500/10"
          >
           {/* Content Preview */}
           <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
             {files.length > 0 && selectedType === 'image' ? (
               // eslint-disable-next-line @next/next/no-img-element
               <img 
                 src={URL.createObjectURL(files[0])} 
                 alt="Scanning..." 
                 className="w-full h-full object-contain opacity-50"
               />
             ) : (
               <div className="flex flex-col items-center gap-4 text-slate-600">
                 <FileSearch className="w-16 h-16" />
                 <p>Analyzing Content...</p>
               </div>
             )}
           </div>
 
           {/* Grid Overlay */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
 
           {/* Scanning Beam */}
           <motion.div
             className="absolute inset-x-0 h-1 bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.8)] z-10"
             animate={{ top: ["0%", "100%", "0%"] }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
           />
 
           {/* Scanning Text */}
           <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
             <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-lg">
               <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
               <span className="text-cyan-400 font-mono text-sm">
                 {currentStep === 1 ? "INITIALIZING..." : 
                  currentStep === 2 ? "SCANNING LAYERS..." : 
                  "ANALYZING FEATURES..."}
               </span>
             </div>
             <div className="px-4 py-2 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-lg">
               <span className="text-slate-400 font-mono text-sm">
                 ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
               </span>
             </div>
           </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
    </div>
  );
}
