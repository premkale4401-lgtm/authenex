"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Book, 
  MessageCircle, 
  FileText, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Shield, 
  Zap, 
  Eye, 
  Lock, 
  Activity, 
  AlertTriangle,
  CheckCircle2,
  Mail,
  Video,
  Image as ImageIcon,
  FileSearch,
  Mic,
  Type
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function HelpPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("overview");

  // Detection methods data - could be expanded or moved to translations if descriptions get long
  const detectionMethods = [
    {
      id: "image",
      icon: ImageIcon,
      title: t('analyze.types.image'),
      description: "Pixel-level analysis, error level analysis (ELA), and metadata verification to detect manipulation."
    },
    {
      id: "video",
      icon: Video,
      title: t('analyze.types.video'),
      description: "Frame-by-frame analysis, temporal consistency checks, and face artifact detection."
    },
    {
      id: "audio",
      icon: Mic,
      title: t('analyze.types.audio'),
      description: "Spectrogram analysis, voice cloning detection, and background noise consistency checks."
    },
    {
      id: "text",
      icon: Type,
      title: t('analyze.types.text'),
      description: "Stylometric analysis, perplexity scoring, and burstiness evaluation for AI text detection."
    }
  ];

  // FAQs data
  const faqs = [
    {
      question: "How accurate is the detection? (95%+)",
      answer: "Our models achieve over 95% accuracy on standard benchmarks. However, AI generation techniques evolve rapidly. We recommend using our results as a strong indicator alongside human review."
    },
    {
      question: "What file formats are supported?",
      answer: "We support common formats: JPG, PNG, WEBP for images; MP4, MOV, AVI for video; MP3, WAV for audio; and PDF, DOCX, TXT for text analysis."
    },
    {
      question: "Is my data private?",
      answer: "Yes. All uploaded files are processed securely and automatically deleted from our servers after analysis, unless you explicitly choose to save them to your case files."
    },
    {
      question: "How do I interpret the 'Confidence Score'?",
      answer: "The Confidence Score indicates the model's certainty. A high score (e.g., 90% AI) means the model found strong evidence of AI generation. A low score (e.g., 55%) suggests ambiguity."
    },
    {
      question: "Can I use this for legal evidence?",
      answer: "Our reports provide detailed forensic technical breakdowns that can support investigations. However, they should be validated by certified forensic experts for legal proceedings."
    },
    {
      question: "What if I get an 'Inconclusive' result?",
      answer: "Inconclusive results occur when the content lacks sufficient data or has been heavily compressed. Try uploading a higher quality version if possible."
    }
  ];

  const troubleshootingItems = [
    { title: "Upload Failures", desc: "Check file size (max 500MB) and format support." },
    { title: "Slow Analysis", desc: "Large video files may take several minutes to process." },
    { title: "Inconclusive Results", desc: "Ensure high-quality, uncompressed inputs for best results." },
    { title: "Access Issues", desc: "Verify your internet connection and API credits." }
  ];

  const supportChannels = [
    { icon: Mail, title: t('help.channels.email'), desc: "support@authenex.com", action: "Email Us" },
    { icon: Book, title: t('help.channels.docs'), desc: "Detailed guides & API", action: "View Docs" },
    { icon: AlertTriangle, title: t('help.channels.report'), desc: "Bug reports", action: "Report" },
    { icon: MessageCircle, title: t('help.channels.chat'), desc: "Mon-Fri, 9am-5pm", action: "Chat Now" }
  ];

  return (
    <div className="max-w-6xl mx-auto pb-20 space-y-8">
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 border border-slate-800 p-8 md:p-12 text-center"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="px-3 py-1 bg-sky-500/20 text-sky-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-4 inline-block">
            {t('help.hero.badge')}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('help.hero.title')}</h1>
          <p className="text-slate-400 mb-8 text-lg">{t('help.hero.subtitle')}</p>
          
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input 
              type="text"
              placeholder={t('help.hero.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all shadow-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* Quick Navigation Rows */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { id: "overview", label: t('help.sections.overview'), icon: Eye },
          { id: "detection", label: t('help.sections.detection'), icon: Shield },
          { id: "troubleshooting", label: t('help.sections.troubleshooting'), icon: Zap },
          { id: "contact", label: t('help.sections.contact'), icon: MessageCircle }
        ].map((item) => (
           <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all ${
              activeSection === item.id 
                ? "bg-sky-500/10 border-sky-500/50 text-sky-400"
                : "bg-slate-900/50 border-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <item.icon className="w-6 h-6 mb-2" />
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Overview Section */}
          <section id="overview">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-sky-400" />
              {t('help.sections.overview')}
            </h2>
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 prose prose-invert max-w-none">
              <h3 className="text-lg font-semibold text-white mb-2">{t('help.overview.title')}</h3>
              <p className="text-slate-300 mb-4">
                {t('help.overview.desc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                  <h4 className="font-medium text-emerald-400 mb-2">{t('analyze.results.authentic')}</h4>
                  <p className="text-sm text-slate-400">Content shows natural statistical patterns consistent with organic creation.</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                  <h4 className="font-medium text-rose-400 mb-2">{t('analyze.results.aiGenerated')}</h4>
                  <p className="text-sm text-slate-400">Content exhibits artifacts, frequency anomalies, or patterns typical of generative models.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Detection Methods */}
          <section id="detection">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-sky-400" />
              {t('help.sections.detection')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detectionMethods.map((method) => (
                <div key={method.id} className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-5 hover:border-sky-500/30 transition-colors">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-sky-400 mb-3">
                    <method.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                  <p className="text-sm text-slate-400">{method.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-sky-400" />
              {t('help.faq.title')}
            </h2>
            <div className="space-y-3">
              {faqs.filter(f => f.question.toLowerCase().includes(searchQuery.toLowerCase())).map((faq, idx) => (
                <Disclosure key={idx} question={faq.question} answer={faq.answer} />
              ))}
              {faqs.filter(f => f.question.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                <p className="text-slate-500 text-center py-4">{t('help.faq.noResults')}</p>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          
          {/* Troubleshooting Widget */}
          <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6">
             <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              {t('help.sections.troubleshooting')}
            </h3>
            <div className="space-y-4">
              {troubleshootingItems.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-200">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Channels */}
          <div className="bg-gradient-to-br from-sky-500/10 to-indigo-500/10 border border-sky-500/20 rounded-2xl p-6">
            <h3 className="font-semibold text-white mb-4">{t('help.sections.contact')}</h3>
            <div className="space-y-3">
              {supportChannels.map((channel, idx) => (
                <a 
                  key={idx}
                  href="#"
                  className="flex items-center gap-3 p-3 bg-slate-900/50 hover:bg-slate-900/80 rounded-xl border border-slate-700/50 transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-sky-400 transition-colors">
                    <channel.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">{channel.title}</p>
                    <p className="text-xs text-slate-500">{channel.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-slate-500 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {t('help.disclaimer.title')}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t('help.disclaimer.text')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Disclosure({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-800/50 rounded-xl overflow-hidden bg-slate-900/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800/50 transition-colors"
      >
        <span className="font-medium text-slate-200 text-sm">{question}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 text-sm text-slate-400 leading-relaxed border-t border-slate-800/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}