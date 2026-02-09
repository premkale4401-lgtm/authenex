"use client";

import { Cpu, HardDrive, Activity, Zap, Database, Globe, AlertTriangle, CheckCircle2 } from 'lucide-react';
import StatsCard from '@/components/admin/shared/StatsCard';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// Mock system metrics data
const cpuData = [
  { time: '00:00', usage: 45 },
  { time: '04:00', usage: 32 },
  { time: '08:00', usage: 68 },
  { time: '12:00', usage: 82 },
  { time: '16:00', usage: 75 },
  { time: '20:00', usage: 58 },
];

const services = [
  { name: 'FastAPI Backend', status: 'online', uptime: '99.98%', responseTime: '124ms' },
  { name: 'Gemini API', status: 'online', uptime: '99.95%', responseTime: '342ms' },
  { name: 'Database (SQLite)', status: 'online', uptime: '100%', responseTime: '8ms' },
  { name: 'Next.js Frontend', status: 'online', uptime: '99.99%', responseTime: '56ms' },
  { name: 'Authentication', status: 'online', uptime: '99.97%', responseTime: '45ms' },
];

const recentErrors = [
  { timestamp: '2 hours ago', service: 'Gemini API', error: 'Rate limit exceeded', severity: 'warning' },
  { timestamp: '5 hours ago', service: 'Database', error: 'Connection timeout', severity: 'error' },
  { timestamp: '1 day ago', service: 'Frontend', error: 'Build warning', severity: 'info' },
];

export default function SystemPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">System Monitoring</h1>
        <p className="text-slate-400">Real-time system health and performance metrics</p>
      </div>

      {/* Resource Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="CPU Usage"
          value="68%"
          icon={Cpu}
          accentColor="sky"
          trend={{ value: 12, isPositive: false }}
          description="8 cores active"
        />
        <StatsCard
          title="Memory"
          value="4.2 GB"
          icon={HardDrive}
          accentColor="indigo"
          description="of 16 GB total"
        />
        <StatsCard
          title="API Requests"
          value="1.2K/min"
          icon={Activity}
          accentColor="emerald"
          trend={{ value: 8, isPositive: true }}
          description="Current rate"
        />
        <StatsCard
          title="Avg Response"
          value="124ms"
          icon={Zap}
          accentColor="amber"
          trend={{ value: 15, isPositive: true }}
          description="Last hour"
        />
      </div>

      {/* CPU Usage Chart */}
      <div className="glass-panel p-6 rounded-xl border border-slate-800">
        <h2 className="text-xl font-bold text-white mb-6">CPU Usage (24 Hours)</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={cpuData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="time" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
            />
            <Line type="monotone" dataKey="usage" stroke="#0ea5e9" strokeWidth={3} dot={{ fill: '#0ea5e9', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Services Status */}
      <div className="glass-panel p-6 rounded-xl border border-slate-800">
        <h2 className="text-xl font-bold text-white mb-6">Service Status</h2>
        <div className="space-y-4">
          {services.map((service, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-slate-950/50 rounded-lg border border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <p className="font-semibold text-white">{service.name}</p>
                  <p className="text-sm text-slate-500">Uptime: {service.uptime}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-xs text-slate-500">Response Time</p>
                  <p className="text-sm font-mono text-sky-400">{service.responseTime}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {service.status.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Errors */}
      <div className="glass-panel p-6 rounded-xl border border-slate-800">
        <h2 className="text-xl font-bold text-white mb-6">Recent Errors & Warnings</h2>
        <div className="space-y-3">
          {recentErrors.map((error, idx) => {
            const severityStyles = {
              error: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
              warning: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
              info: { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/30' }
            };
            const style = severityStyles[error.severity as keyof typeof severityStyles];
            
            return (
              <div key={idx} className={`flex items-start gap-4 p-4 rounded-lg border ${style.bg} ${style.border}`}>
                <AlertTriangle className={`w-5 h-5 ${style.text} flex-shrink-0 mt-0.5`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className={`font-semibold ${style.text}`}>{error.service}</p>
                    <span className="text-xs text-slate-500">{error.timestamp}</span>
                  </div>
                  <p className="text-sm text-slate-400">{error.error}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
