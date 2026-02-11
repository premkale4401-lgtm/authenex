// frontend/src/app/dashboard/cases/page.tsx (Cases Management)
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  MoreVertical,
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Image as ImageIcon,
  Video,
  FileText,
  Download,
  Share2,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  X,
  FolderOpen,
  Shield,
  BarChart3
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

import { getScanHistory, deleteScan } from "@/lib/api";

const statusFilters = [
  { id: "all", label: "All Cases", count: 0 },
  { id: "completed", label: "Completed", count: 0 },
  { id: "processing", label: "Processing", count: 0 },
  { id: "pending", label: "Pending", count: 0 },
];

const typeFilters = [
  { id: "all", label: "All Types" },
  { id: "image", label: "Images" },
  { id: "video", label: "Videos" },
  { id: "document", label: "Documents" },
];


export default function CasesPage() {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<{ field: string; order: "asc" | "desc" }>({ field: "date", order: "desc" });
  const [showFilters, setShowFilters] = useState(false);
  
  // Real data state
  const [cases, setCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on mount
  useEffect(() => {
    async function loadCases() {
      try {
        const data = await getScanHistory();
        setCases(data);
      } catch (error) {
        console.error("Failed to load cases", error);
      } finally {
        setLoading(false);
      }
    }
    loadCases();
  }, []); // Empty dependency array for mount only

  // Filter and sort cases
  const filteredCases = cases.filter((caseItem) => {
    const matchesStatus = selectedStatus === "all" || caseItem.status === selectedStatus;
    const matchesType = selectedType === "all" || caseItem.type === selectedType;
    const matchesSearch = 
      (caseItem.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (caseItem.scanId || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (Array.isArray(caseItem.tags) && caseItem.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesStatus && matchesType && matchesSearch;
  }).sort((a, b) => {
    const order = sortBy.order === "asc" ? 1 : -1;
    if (sortBy.field === "date") return order * (new Date(a.date).getTime() - new Date(b.date).getTime());
    if (sortBy.field === "confidence") {
      const aConf = a.confidence || 0;
      const bConf = b.confidence || 0;
      return order * (aConf - bConf);
    }
    return 0;
  });

  // Calculate dynamic counts
  const statusCounts = {
    all: cases.length,
    completed: cases.filter(c => c.status === "completed").length,
    processing: cases.filter(c => c.status === "processing").length,
    pending: cases.filter(c => c.status === "pending").length,
  };

  const currentStatusFilters = statusFilters.map(f => ({
    ...f,
    count: statusCounts[f.id as keyof typeof statusCounts] || 0
  }));


  const handleDeleteCase = async (id: string | number) => {
    if (!window.confirm("Are you sure you want to delete this case? This action cannot be undone.")) {
      return;
    }
    
    try {
      const response = await deleteScan(id.toString());
      if (response && response.status === "success") {
        setCases(prev => prev.filter(c => c.id.toString() !== id.toString()));
      } else {
        alert("Failed to delete case: " + (response?.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Delete failed", error);
      alert("Delete failed. Please try again.");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "processing": return "bg-sky-500/10 text-sky-400 border-sky-500/20";
      case "pending": return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      default: return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    }
  };

  const getResultColor = (result: string | null) => {
    if (!result) return "text-slate-400";
    return result === "authentic" ? "text-emerald-400" : "text-rose-400";
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "image": return <ImageIcon className="w-5 h-5 text-purple-400" />;
      case "video": return <Video className="w-5 h-5 text-rose-400" />;
      case "document": return <FileText className="w-5 h-5 text-amber-400" />;
      default: return <FileText className="w-5 h-5 text-slate-400" />;
    }
  };

  if (loading) {
      return (
          <div className="flex items-center justify-center min-h-[60vh]">
              <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
          </div>
      );
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">{t('cases.title')}</h1>
          <p className="text-slate-400 mt-1">{t('cases.subtitle')}</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/analyze"
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-xl font-medium hover:from-sky-400 hover:to-indigo-500 transition-all shadow-lg shadow-sky-500/25"
          >
            <Shield className="w-4 h-4" />
            <span>{t('nav.newAnalysis')}</span>
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentStatusFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedStatus(filter.id)}
            className={`p-4 rounded-xl border transition-all text-left ${
              selectedStatus === filter.id
                ? "bg-sky-500/10 border-sky-500/30"
                : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
            }`}
          >
            <p className="text-2xl font-bold text-white">{filter.count}</p>
            <p className={`text-sm ${selectedStatus === filter.id ? "text-sky-400" : "text-slate-400"}`}>
              {t(`cases.filters.${filter.id}`)}
            </p>
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder={t('cases.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20 transition-all"
          />
        </div>

        {/* Filters & View Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all ${
              showFilters ? "bg-sky-500/10 border-sky-500/30 text-sky-400" : "bg-slate-900/50 border-slate-800 text-slate-300 hover:border-slate-700"
            }`}
          >
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filters</span>
          </button>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2.5 bg-slate-900/50 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-sky-500/50"
          >
            {typeFilters.map(type => (
              <option key={type.id} value={type.id}>{type.id === 'all' ? t('cases.filters.all') : t(`analyze.types.${type.id}`)}</option>
            ))}
          </select>

          <div className="flex items-center bg-slate-900/50 border border-slate-800 rounded-xl p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bulk Actions Removed */}

      {/* Cases Display */}
      <AnimatePresence mode="wait">
        {viewMode === "list" ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80">
                    <th className="py-4 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider w-10">#</th>
                    <th className="py-4 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">{t('cases.table.case')}</th>
                    <th className="py-4 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">{t('cases.table.type')}</th>
                    <th className="py-4 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                      <button 
                        onClick={() => setSortBy({ field: "date", order: sortBy.order === "asc" ? "desc" : "asc" })}
                        className="flex items-center gap-1 hover:text-white transition-colors"
                      >
                        {t('cases.table.date')}
                        <ArrowUpDown className="w-3 h-3" />
                      </button>
                    </th>
                    <th className="py-4 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">AI SCORE</th>
                    <th className="py-4 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">HUMAN SCORE</th>
                    <th className="py-4 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">VERDICT</th>
                    <th className="py-4 px-4 text-right text-xs font-medium text-slate-400 uppercase tracking-wider">{t('cases.table.actions')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {filteredCases.map((caseItem) => (
                    <motion.tr
                      key={caseItem.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-slate-800/30 transition-colors group"
                    >
                      <td className="py-4 px-4 text-slate-500 text-xs font-mono">
                        {filteredCases.indexOf(caseItem) + 1}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                            {getTypeIcon(caseItem.type)}
                          </div>
                          <div>
                            <Link href={`/dashboard/cases/${caseItem.id}`} className="font-mono text-sm text-sky-400 hover:text-sky-300">
                              {caseItem.scanId || caseItem.id}
                            </Link>
                            <p className="text-sm text-white font-medium">{caseItem.title}</p>
                            <div className="flex gap-1 mt-1">
                              {Array.isArray(caseItem.tags) && caseItem.tags.map((tag: string) => (
                                <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-slate-800 text-slate-400 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-slate-300">{caseItem.type ? t(`analyze.types.${caseItem.type}`) : "Unknown"}</span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-slate-300 font-medium">{caseItem.date}</div>
                        <div className="text-xs text-slate-500">{caseItem.time}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                           <div className="w-12 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-rose-500" style={{ width: `${caseItem.aiPercentage || 0}%` }} />
                           </div>
                           <span className="text-sm font-bold text-rose-400">{caseItem.aiPercentage || 0}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                           <div className="w-12 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500" style={{ width: `${caseItem.humanPercentage || 0}%` }} />
                           </div>
                           <span className="text-sm font-bold text-emerald-400">{caseItem.humanPercentage || 0}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        {caseItem.result ? (
                          <span className={`inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider ${getResultColor(caseItem.result)}`}>
                            {caseItem.result === "authentic" ? <CheckCircle2 className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                            {caseItem.result === "authentic" ? t('analyze.results.authentic') : t('analyze.results.aiGenerated')}
                          </span>
                        ) : (
                          <span className="text-slate-500 text-sm">-</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Link 
                            href={`/dashboard/cases/${caseItem.id}`}
                            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          <div className="relative group/menu">
                            <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                            <div className="absolute right-0 top-full mt-1 hidden group-hover/menu:block z-50 min-w-[120px] bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-1">
                                <button 
                                  onClick={() => handleDeleteCase(caseItem.id)}
                                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                  Delete Case
                                </button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredCases.length === 0 && (
              <div className="p-12 text-center">
                <FolderOpen className="w-12 h-12 mx-auto text-slate-600 mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">{t('cases.noCases')}</h3>
                <p className="text-slate-400">{t('cases.subtitle')}</p>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filteredCases.map((caseItem) => (
              <motion.div
                key={caseItem.id}
                layout
                className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 hover:bg-slate-800/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                      {getTypeIcon(caseItem.type)}
                    </div>
                    <div>
                      <p className="font-mono text-xs text-sky-400">{caseItem.scanId || caseItem.id}</p>
                      <p className="text-sm text-slate-500 capitalize">{t(`analyze.types.${caseItem.type}`)}</p>
                    </div>
                  </div>
                </div>

                <Link href={`/dashboard/cases/${caseItem.id}`} className="block">
                    <h3 className="font-semibold text-white mb-2 line-clamp-1 hover:text-sky-400 transition-colors">{caseItem.title}</h3>
                </Link>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {Array.isArray(caseItem.tags) && caseItem.tags.map((tag: string) => (
                    <span key={tag} className="text-[10px] px-2 py-1 bg-slate-800 text-slate-400 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">AI SCORE</span>
                    <span className="text-rose-400 font-bold">{caseItem.aiPercentage || 0}%</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">HUMAN SCORE</span>
                    <span className="text-emerald-400 font-bold">{caseItem.humanPercentage || 0}%</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">VERDICT</span>
                    <span className={`font-bold ${getResultColor(caseItem.result)}`}>
                      {caseItem.result === "authentic" ? t('analyze.results.authentic') : t('analyze.results.aiGenerated')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-500">{caseItem.time}</span>
                  <div className="flex gap-1 items-center">
                    <Link 
                        href={`/dashboard/cases/${caseItem.id}`}
                        className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                    <div className="relative group/menu">
                      <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                      <div className="absolute right-0 bottom-full mb-1 hidden group-hover/menu:block z-50 min-w-[120px] bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-1">
                          <button 
                            onClick={() => handleDeleteCase(caseItem.id)}
                            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Delete Case
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        <p className="text-sm text-slate-400">
          Showing <span className="text-white font-medium">1</span> to <span className="text-white font-medium">{filteredCases.length}</span> of <span className="text-white font-medium">{cases.length}</span> cases
        </p>
        <div className="flex items-center gap-2">
          <button 
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1">
            {[1].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === page 
                    ? "bg-sky-500 text-white" 
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button 
            className="p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}