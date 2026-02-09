"use client";

import { useState } from 'react';
import { FileCheck, Filter, Download, Eye, Trash2, CheckCircle, XCircle, HelpCircle, Image as ImageIcon, Video, Music, FileText } from 'lucide-react';
import StatsCard from '@/components/admin/shared/StatsCard';
import DataTable, { Column } from '@/components/admin/shared/DataTable';

interface Verification {
  id: string;
  filename: string;
  modality: 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT';
  verdict: 'AI' | 'HUMAN' | 'UNCERTAIN';
  confidence: number;
  user: string;
  timestamp: string;
  aiPercentage: number;
}

// Mock data  
const mockVerifications: Verification[] = [
  {
    id: '1',
    filename: 'suspect_profile.jpg',
    modality: 'IMAGE',
    verdict:  'AI',
    confidence: 94.2,
    user: 'Sarah Chen',
    timestamp: '2024-02-09T14:30:00Z',
    aiPercentage: 94.2
  },
  {
    id: '2',
    filename: 'speech_recording.mp3',
    modality: 'AUDIO',
    verdict: 'HUMAN',
    confidence: 87.5,
    user: 'Raj Patel',
    timestamp: '2024-02-09T13:15:00Z',
    aiPercentage: 12.5
  },
  {
    id: '3',
    filename: 'evidence_video.mp4',
    modality: 'VIDEO',
    verdict: 'UNCERTAIN',
    confidence: 52.3,
    user: 'Emily Rodriguez',
    timestamp: '2024-02-09T12:00:00Z',
    aiPercentage: 52.3
  },
  {
    id: '4',
    filename: 'legal_document.pdf',
    modality: 'DOCUMENT',
    verdict: 'AI',
    confidence: 96.8,
    user: 'Ahmed Hassan',
    timestamp: '2024-02-09T10:45:00Z',
    aiPercentage: 96.8
  },
  {
    id: '5',
    filename: 'witness_statement.jpg',
    modality: 'IMAGE',
    verdict: 'HUMAN',
    confidence: 91.3,
    user: 'Li Wei',
    timestamp: '2024-02-09T09:20:00Z',
    aiPercentage: 8.7
  }
];

export default function VerificationsPage() {
  const [verifications] = useState<Verification[]>(mockVerifications);
  
  const aiCount = verifications.filter(v => v.verdict === 'AI').length;
  const humanCount = verifications.filter(v => v.verdict === 'HUMAN').length;
  const uncertainCount = verifications.filter(v => v.verdict === 'UNCERTAIN').length;
  const avgConfidence = (verifications.reduce((sum, v) => sum + v.confidence, 0) / verifications.length).toFixed(1);

  const getModalityIcon = (modality: string) => {
    switch (modality) {
      case 'IMAGE': return <ImageIcon className="w-4 h-4" />;
      case 'VIDEO': return <Video className="w-4 h-4" />;
      case 'AUDIO': return <Music className="w-4 h-4" />;
      case 'DOCUMENT': return <FileText className="w-4 h-4" />;
      default: return <FileCheck className="w-4 h-4" />;
    }
  };

  const columns: Column<Verification>[] = [
    {
      key: 'filename',
      label: 'File',
      sortable: true,
      render: (v) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400">
            {getModalityIcon(v.modality)}
          </div>
          <div>
            <p className="font-medium text-white text-sm">{v.filename}</p>
            <p className="text-xs text-slate-500">{v.modality}</p>
          </div>
        </div>
      )
    },
    {
      key: 'verdict',
      label: 'Verdict',
      sortable: true,
      render: (v) => {
        const styles = {
          AI: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30', icon: XCircle },
          HUMAN: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30', icon: CheckCircle },
          UNCERTAIN: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30', icon: HelpCircle }
        };
        const style = styles[v.verdict];
        const Icon = style.icon;
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${style.bg} ${style.text} ${style.border} flex items-center gap-1 w-fit`}>
            <Icon className="w-3 h-3" />
            {v.verdict}
          </span>
        );
      }
    },
    {
      key: 'confidence',
      label: 'Confidence',
      sortable: true,
      render: (v) => (
        <div className="flex items-center gap-2">
          <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className={`h-full ${v.confidence >= 80 ? 'bg-emerald-500' : v.confidence >= 60 ? 'bg-amber-500' : 'bg-red-500'}`}
              style={{ width: `${v.confidence}%` }}
            />
          </div>
          <span className="text-slate-300 text-sm font-mono">{v.confidence}%</span>
        </div>
      )
    },
    {
      key: 'user',
      label: 'Analyst',
      sortable: true,
      render: (v) => <span className="text-slate-300 text-sm">{v.user}</span>
    },
    {
      key: 'timestamp',
      label: 'Date',
      sortable: true,
      render: (v) => (
        <span className="text-slate-400 text-sm">
          {new Date(v.timestamp).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </span>
      )
    }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Verification Management</h1>
          <p className="text-slate-400">Review and manage all verification results</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium transition-all flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="px-4 py-2 bg-gradient-to-br from-sky-500 to-indigo-600 text-white rounded-lg font-medium hover:from-sky-400 hover:to-indigo-500 transition-all shadow-lg shadow-sky-500/20 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Scans"
          value={verifications.length}
          icon={FileCheck}
          accentColor="sky"
          description="All time"
        />
        <StatsCard
          title="AI Detected"
          value={aiCount}
          icon={XCircle}
          accentColor="red"
          description={`${((aiCount / verifications.length) * 100).toFixed(1)}% of total`}
        />
        <StatsCard
          title="Authentic"
          value={humanCount}
          icon={CheckCircle}
          accentColor="emerald"
          description={`${((humanCount / verifications.length) * 100).toFixed(1)}% of total`}
        />
        <StatsCard
          title="Avg Confidence"
          value={`${avgConfidence}%`}
          icon={HelpCircle}
          accentColor="indigo"
          description="Model certainty"
        />
      </div>

      {/* Verifications Table */}
      <DataTable
        data={verifications}
        columns={columns}
        searchPlaceholder="Search by filename, analyst, or verdict..."
        actions={(v) => (
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-sky-500/10 rounded-lg transition-colors group" title="View Details">
              <Eye className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
            </button>
            <button className="p-2 hover:bg-red-500/10 rounded-lg transition-colors group" title="Delete">
              <Trash2 className="w-4 h-4 text-slate-400 group-hover:text-red-400" />
            </button>
          </div>
        )}
      />
    </div>
  );
}
