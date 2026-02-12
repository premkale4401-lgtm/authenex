"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, Activity, Users, FileCheck, Download } from 'lucide-react';
import StatsCard from '@/components/admin/shared/StatsCard';

export default function AnalyticsPage() {
  const { data: session, status } = useSession();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'loading') return;
    if (status === 'unauthenticated') {
      setError("Please log in to view analytics");
      setLoading(false);
      return;
    }

    const fetchStats = async () => {
      try {
        setLoading(true);
        const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
        const token = (session as any)?.authToken;

        const response = await fetch(`${BACKEND_URL}/api/admin/analytics`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) throw new Error('Failed to fetch analytics data');
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
        setError('Failed to load analytics data');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [session, status]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/10 p-6 rounded-xl border border-red-500/20 text-center">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  // Use fetched data or fallbacks
  const verificationTrends = data?.verificationTrends || [];
  const modalityDistribution = data?.modalityDistribution || [];
  const modelAccuracy = data?.modelAccuracy || [];
  const hourlyActivity = data?.hourlyActivity || [];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
              <p className="text-slate-400">Comprehensive insights and trends</p>
            </div>
            <button className="px-4 py-2 bg-gradient-to-br from-sky-500 to-indigo-600 text-white rounded-lg font-medium hover:from-sky-400 hover:to-indigo-500 transition-all shadow-lg shadow-sky-500/20 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Verifications"
              value={data?.totalVerifications || 0}
              icon={FileCheck}
              accentColor="sky"
              trend={{ value: 0, isPositive: true }} // Trend requires historical comparison
              description="All time"
            />
            <StatsCard
              title="Avg. Accuracy"
              value={data?.avgAccuracy || "0%"}
              icon={Activity}
              accentColor="emerald"
              description="Model Mean Confidence"
            />
            <StatsCard
              title="Active Users"
              value={data?.activeUsers || 0}
              icon={Users}
              accentColor="indigo"
              description="Total scanning users"
            />
            <StatsCard
              title="Peak Activity"
              value={data?.peakActivity || "N/A"}
              icon={TrendingUp}
              accentColor="amber"
              description="Daily peak hour"
            />
          </div>

          {/* Verification Trends */}
          <div className="glass-panel p-6 rounded-xl border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-6">Verification Trends</h2>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={verificationTrends}>
                <defs>
                  <linearGradient id="colorVerified" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorFlagged" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorUncertain" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="date" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                  labelStyle={{ color: '#cbd5e1' }}
                />
                <Legend />
                <Area type="monotone" dataKey="verified" name="Authentic" stroke="#10b981" fill="url(#colorVerified)" strokeWidth={2} />
                <Area type="monotone" dataKey="flagged" name="AI Generated" stroke="#f59e0b" fill="url(#colorFlagged)" strokeWidth={2} />
                <Area type="monotone" dataKey="uncertain" name="Uncertain" stroke="#6366f1" fill="url(#colorUncertain)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Distribution Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Modality Distribution */}
            <div className="glass-panel p-6 rounded-xl border border-slate-800">
              <h2 className="text-xl font-bold text-white mb-6">Modality Distribution</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={modalityDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }: { name?: string; percent?: number }) => `${name || 'Unknown'} ${((percent || 0) * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {modalityDistribution.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={entry.color || '#64748b'} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Model Accuracy Comparison */}
            <div className="glass-panel p-6 rounded-xl border border-slate-800">
              <h2 className="text-xl font-bold text-white mb-6">Model Confidence Comparison</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={modelAccuracy}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="model" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                  />
                  <Bar dataKey="accuracy" name="Avg Confidence %" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Hourly Activity */}
          <div className="glass-panel p-6 rounded-xl border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-6">Hourly Activity Pattern</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={hourlyActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="hour" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Line type="monotone" dataKey="scans" stroke="#6366f1" strokeWidth={3} dot={{ fill: '#6366f1', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
    </div>
  );
}
