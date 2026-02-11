"use client";

import { useState, useCallback } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useDropzone } from "react-dropzone";
import { Loader2, UploadCloud, AlertTriangle, FileText, Video, Music, Image as ImageIcon } from "lucide-react";
import { ForensicReport } from "@/components/analyze/ForensicReport";
import { analyzeAsset } from "@/lib/api";

export default function ScanUpload() {
  const { user } = useAuthContext();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [modality, setModality] = useState<'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT'>('IMAGE');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile) {
        setFile(selectedFile);
        setError(null);
        setResult(null);

        // Determine modality
        if (selectedFile.type.startsWith('image/')) setModality('IMAGE');
        else if (selectedFile.type.startsWith('video/')) setModality('VIDEO');
        else if (selectedFile.type.startsWith('audio/')) setModality('AUDIO');
        else setModality('DOCUMENT');

        // Generate preview if image
        if (selectedFile.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => setPreview(e.target?.result as string);
            reader.readAsDataURL(selectedFile);
        } else {
            setPreview(null);
        }
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 
        "image/*": [], 
        "video/*": [], 
        "audio/*": [],
        "application/pdf": [],
        "text/plain": []
    },
    maxFiles: 1,
    disabled: loading,
  });

  const handleScan = async () => {
    if (!file || !user) return;

    setLoading(true);
    setError(null);

    try {
      const data = await analyzeAsset(file, modality);
      console.log("🎯 RECEIVED DATA IN SCANUPLOAD:", JSON.stringify(data, null, 2));
      console.log("🔢 aiPercentage:", data.aiPercentage, "humanPercentage:", data.humanPercentage);
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const resetScan = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
  };

  if (!user) {
    return (
      <div className="p-6 text-center border border-slate-800 rounded-xl bg-slate-900/50">
        <p className="text-slate-400">Please log in to access the secure scanner.</p>
      </div>
    );
  }

  // If we have a result, show the Forensic Report
  if (result) {
      return <ForensicReport result={result} onReset={resetScan} />;
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      
      {/* Upload Area */}
      {!file && (
        <div
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300
            ${isDragActive ? "border-sky-500 bg-sky-500/10" : "border-slate-700 hover:border-sky-400/50 hover:bg-slate-800/50"}
          `}
        >
          <input {...getInputProps()} />
          <UploadCloud className="w-12 h-12 mx-auto mb-4 text-sky-400" />
          <p className="text-lg font-medium text-slate-200">
            {isDragActive ? "Drop asset here..." : "Drag & drop Image, Video, Audio, or Doc"}
          </p>
          <p className="text-sm text-slate-500 mt-2">Supports JPG, PNG, MP4, MP3, PDF (Max 10MB)</p>
        </div>
      )}

      {/* Preview & Action */}
      {file && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900/50 shadow-2xl p-8 flex flex-col items-center justify-center min-h-[200px]">
            
            {preview ? (
                <img src={preview} alt="Preview" className="max-h-64 object-contain rounded-lg" />
            ) : (
                <div className="flex flex-col items-center gap-4 text-slate-400">
                    {modality === 'VIDEO' && <Video className="w-16 h-16" />}
                    {modality === 'AUDIO' && <Music className="w-16 h-16" />}
                    {modality === 'DOCUMENT' && <FileText className="w-16 h-16" />}
                    <span className="text-lg font-mono">{file.name}</span>
                    <span className="text-sm px-3 py-1 bg-slate-800 rounded-full">{modality}</span>
                </div>
            )}
            
            <button 
              onClick={resetScan}
              className="absolute top-2 right-2 px-3 py-1 bg-slate-800 hover:bg-red-500/20 hover:text-red-400 rounded-lg text-xs transition-colors"
            >
              Change File
            </button>
          </div>

          <button
            onClick={handleScan}
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-sky-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all group relative z-10"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Analyzing {modality.toLowerCase()}...
                <span className="text-[10px] opacity-70 block">The Analysis may take some Time</span>
              </>
            ) : (
              <>
                <span className="group-hover:scale-110 transition-transform">🛡️</span>
                Run Forensic Analysis
              </>
            )}
          </button>
          
          {/* Component-level Spacer for Mobile */}
          <div className="h-24 lg:hidden" />
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 flex items-center gap-3 animate-in shake">
          <AlertTriangle className="w-5 h-5" />
          {error}
        </div>
      )}
    </div>
  );
}
