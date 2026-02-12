"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
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

export default function VerificationsPage() {
  const { data: session, status } = useSession();
  const [verifications, setVerifications] = useState<Verification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Wait for session to load
    if (status === 'loading') return;

    if (status === 'unauthenticated') {
      setError('Please log in to view verifications');
      setLoading(false);
      return;
    }

    const fetchVerifications = async () => {
      try {
        setLoading(true);
        const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
        
        // Get token from session (it's added in auth.ts session callback)
        const token = (session as any)?.authToken;
        
        // Debug: Log token to console
        console.log("Session Token available:", !!token);
        
        // Fetch all scan history (admin endpoint)
        console.log("Fetching from:", `${BACKEND_URL}/api/admin/scans`);
        
        const response = await fetch(`${BACKEND_URL}/api/admin/scans`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          credentials: 'include',
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error("API Error:", response.status, errorData);
          throw new Error(errorData.detail || `Failed to fetch: ${response.status}`);
        }

        const data = await response.json();
        console.log("Raw API Response:", data); // Debug: See what backend returns
        
        // Handle empty data
        if (!Array.isArray(data)) {
          setVerifications([]);
          setError(null);
          setLoading(false);
          return;
        }
        
        // Transform API data to match Verification interface
        const transformedData: Verification[] = data.map((item: any) => {
          const aiPercentage = item.ai_percentage || item.aiPercentage || 0;
          const humanPercentage = item.human_percentage || item.humanPercentage || 0;
          
          // Determine verdict based on percentages
          let verdict: 'AI' | 'HUMAN' | 'UNCERTAIN';
          if (aiPercentage > 70) {
            verdict = 'AI';
          } else if (humanPercentage > 70) {
            verdict = 'HUMAN';
          } else {
            verdict = 'UNCERTAIN';
          }

          // Determine modality from filename extension
          const ext = item.filename?.toLowerCase().split('.').pop() || '';
          let modality: 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT' = 'DOCUMENT';
          if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) modality = 'IMAGE';
          else if (['mp4', 'avi', 'mov', 'webm'].includes(ext)) modality = 'VIDEO';
          else if (['mp3', 'wav', 'ogg', 'm4a'].includes(ext)) modality = 'AUDIO';

          return {
            id: item.id || item._id || String(Math.random()),
            filename: item.filename || 'Unknown file',
            modality,
            verdict,
            confidence: Math.max(aiPercentage, humanPercentage),
            user: item.user_email || item.user_name || item.userName || 'Unknown User',
            timestamp: item.timestamp || item.created_at || new Date().toISOString(),
            aiPercentage
          };
        });

        setVerifications(transformedData);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching verifications:', err);
        setError(err.message || 'Failed to load verification data. Please try again later.');
        setVerifications([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVerifications();
  }, [session, status]);
  
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

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this scan? This action cannot be undone.')) return;
    
    try {
      const token = (session as any)?.authToken;
      const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
      
      const response = await fetch(`${BACKEND_URL}/api/scan/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) throw new Error('Failed to delete scan');
      
      setVerifications(prev => prev.filter(v => v.id !== id));
    } catch (err) {
      console.error(err);
      alert('Failed to delete scan: ' + (err instanceof Error ? err.message : 'Unknown error'));
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

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {/* Content - Only show when not loading */}
      {!loading && !error && (
        <>

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
            <button 
              onClick={() => handleDelete(v.id)}
              className="p-2 hover:bg-red-500/10 rounded-lg transition-colors group" 
              title="Delete"
            >
              <Trash2 className="w-4 h-4 text-slate-400 group-hover:text-red-400" />
            </button>
          </div>
        )}
      />
      </>
      )}
    </div>
  );
}
