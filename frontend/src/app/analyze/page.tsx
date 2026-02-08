"use client";

import { motion } from "framer-motion";
import ScanUpload from "@/components/upload/ScanUpload";
import { Sparkles } from "lucide-react";

export default function AnalyzePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20 lg:pb-0">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-2"
      >
        <div className="flex items-center gap-2 text-emerald-400 mb-2">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-medium tracking-wider uppercase">AI Detection Engine</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Analyze Content
        </h1>
        <p className="text-slate-400 text-lg">
          Upload images to detect AI-generated content, deepfakes, and manipulation.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
      >
        <ScanUpload />
      </motion.div>
    </div>
  );
}
