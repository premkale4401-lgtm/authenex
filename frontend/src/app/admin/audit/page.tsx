"use client";

import { useState } from 'react';
import { FileText, Download, Filter, User, Shield, Settings, Trash2, Edit, Eye } from 'lucide-react';
import StatsCard from '@/components/admin/shared/StatsCard';
import DataTable, { Column } from '@/components/admin/shared/DataTable';

interface AuditLog {
  id: string;
  action: string;
  user: string;
  role: string;
  target: string;
  timestamp: string;
  ipAddress: string;
  status: 'success' | 'failed';
}

// Mock data
const mockLogs: AuditLog[] = [
  {
    id: '1',
    action: 'User Created',
    user: 'Sarah Chen',
    role: 'ADMIN',
    target: 'ahmed.hassan@cybersec.gov',
    timestamp: '2024-02-09T15:30:00Z',
    ipAddress: '192.168.1.45',
    status: 'success'
  },
  {
    id: '2',
    action: 'Verification Deleted',
    user: 'Raj Patel',
    role: 'ANALYST',
    target: 'evidence_video.mp4',
    timestamp: '2024-02-09T14:15:00Z',
    ipAddress: '192.168.1.82',
    status: 'success'
  },
  {
    id: '3',
    action: 'System Config Updated',
    user: 'Sarah Chen',
    role: 'ADMIN',
    target: 'API Rate Limits',
    timestamp: '2024-02-09T13:45:00Z',
    ipAddress: '192.168.1.45',
    status: 'success'
  },
  {
    id: '4',
    action: 'Login Attempt',
    user: 'Unknown',
    role: 'NONE',
    target: 'admin@authenex.gov',
    timestamp: '2024-02-09T12:20:00Z',
    ipAddress: '203.45.123.67',
    status: 'failed'
  },
  {
    id: '5',
    action: 'User Role Changed',
    user: 'Sarah Chen',
    role: 'ADMIN',
    target: 'li.wei@research.gov',
    timestamp: '2024-02-09T11:00:00Z',
    ipAddress: '192.168.1.45',
    status: 'success'
  }
];

export default function AuditPage() {
  const [logs] = useState<AuditLog[]>(mockLogs);

  const totalLogs = logs.length;
  const successfulActions = logs.filter(l => l.status === 'success').length;
  const failedActions = logs.filter(l => l.status === 'failed').length;
  const adminActions = logs.filter(l => l.role === 'ADMIN').length;

  const getActionIcon = (action: string) => {
    if (action.includes('User')) return User;
    if (action.includes('Config') || action.includes('System')) return Settings;
    if (action.includes('Login')) return Shield;
    return FileText;
  };

  const columns: Column<AuditLog>[] = [
    {
      key: 'action',
      label: 'Action',
      sortable: true,
      render: (log) => {
        const Icon = getActionIcon(log.action);
        return (
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg ${
              log.status === 'success' ? 'bg-emerald-500/10' : 'bg-red-500/10'
            } flex items-center justify-center`}>
              <Icon className={`w-5 h-5 ${
                log.status === 'success' ? 'text-emerald-400' : 'text-red-400'
              }`} />
            </div>
            <div>
              <p className="font-medium text-white text-sm">{log.action}</p>
              <p className="text-xs text-slate-500">{log.target}</p>
            </div>
          </div>
        );
      }
    },
    {
      key: 'user',
      label: 'User',
      sortable: true,
      render: (log) => (
        <div>
          <p className="text-slate-300 text-sm">{log.user}</p>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            log.role === 'ADMIN' 
              ? 'bg-indigo-500/20 text-indigo-400' 
              : log.role === 'ANALYST'
              ? 'bg-sky-500/20 text-sky-400'
              : 'bg-slate-500/20 text-slate-400'
          }`}>
            {log.role}
          </span>
        </div>
      )
    },
    {
      key: 'timestamp',
      label: 'Timestamp',
      sortable: true,
      render: (log) => (
        <span className="text-slate-400 text-sm font-mono">
          {new Date(log.timestamp).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}
        </span>
      )
    },
    {
      key: 'ipAddress',
      label: 'IP Address',
      sortable: true,
      render: (log) => (
        <span className="text-slate-400 text-sm font-mono">{log.ipAddress}</span>
      )
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (log) => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
          log.status === 'success'
            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
            : 'bg-red-500/20 text-red-400 border-red-500/30'
        }`}>
          {log.status.toUpperCase()}
        </span>
      )
    }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Audit Logs</h1>
          <p className="text-slate-400">Complete activity history and system events</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium transition-all flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="px-4 py-2 bg-gradient-to-br from-sky-500 to-indigo-600 text-white rounded-lg font-medium hover:from-sky-400 hover:to-indigo-500 transition-all shadow-lg shadow-sky-500/20 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Logs
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Events"
          value={totalLogs}
          icon={FileText}
          accentColor="sky"
          description="Last 24 hours"
        />
        <StatsCard
          title="Successful"
          value={successfulActions}
          icon={Shield}
          accentColor="emerald"
          description={`${((successfulActions / totalLogs) * 100).toFixed(1)}% success rate`}
        />
        <StatsCard
          title="Failed"
          value={failedActions}
          icon={Shield}
          accentColor="red"
          description="Security alerts"
        />
        <StatsCard
          title="Admin Actions"
          value={adminActions}
          icon={Settings}
          accentColor="indigo"
          description="Privileged operations"
        />
      </div>

      {/* Audit Logs Table */}
      <DataTable
        data={logs}
        columns={columns}
        searchPlaceholder="Search by action, user, or IP address..."
        actions={(log) => (
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-sky-500/10 rounded-lg transition-colors group" title="View Details">
              <Eye className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
            </button>
          </div>
        )}
      />
    </div>
  );
}
