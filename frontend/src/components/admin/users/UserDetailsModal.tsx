"use client";

import { X, Shield, Mail, Calendar, Activity, Clock, FileCheck, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'ANALYST' | 'USER';
  status: 'ACTIVE' | 'PENDING' | 'SUSPENDED';
  lastLogin: string;
  verifications: number;
  joinedAt: string;
}

interface UserDetailsModalProps {
  user: User;
  onClose: () => void;
}

export default function UserDetailsModal({ user, onClose }: UserDetailsModalProps) {
  const roleStyles = {
    ADMIN: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    ANALYST: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
    USER: 'bg-slate-500/20 text-slate-400 border-slate-500/30'
  };

  const statusStyles = {
    ACTIVE: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    PENDING: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    SUSPENDED: 'bg-red-500/20 text-red-400 border-red-500/30'
  };

  // Mock activity data
  const recentActivity = [
    { action: 'Verified image', timestamp: '2 hours ago', status: 'success' },
    { action: 'Reviewed deepfake case', timestamp: '5 hours ago', status: 'success' },
    { action: 'Uploaded document', timestamp: '1 day ago', status: 'success' },
    { action: 'Failed login attempt', timestamp: '2 days ago', status: 'warning' }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-slate-900 border-b border-slate-800 p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{user.name}</h2>
                <p className="text-slate-400">{user.email}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Status & Role */}
            <div className="flex gap-3">
              <span className={`px-4 py-2 rounded-lg text-sm font-medium border ${roleStyles[user.role]}`}>
                {user.role}
              </span>
              <span className={`px-4 py-2 rounded-lg text-sm font-medium border ${statusStyles[user.status]}`}>
                {user.status}
              </span>
            </div>

            {/* User Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-lg border border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-sky-400" />
                  <h3 className="font-semibold text-slate-300">Email</h3>
                </div>
                <p className="text-slate-400 text-sm">{user.email}</p>
              </div>

              <div className="glass-panel p-4 rounded-lg border border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-indigo-400" />
                  <h3 className="font-semibold text-slate-300">Joined</h3>
                </div>
                <p className="text-slate-400 text-sm">
                  {new Date(user.joinedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>

              <div className="glass-panel p-4 rounded-lg border border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-semibold text-slate-300">Last Login</h3>
                </div>
                <p className="text-slate-400 text-sm">
                  {user.lastLogin === 'Never' 
                    ? 'Never' 
                    : new Date(user.lastLogin).toLocaleString()
                  }
                </p>
              </div>

              <div className="glass-panel p-4 rounded-lg border border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <FileCheck className="w-5 h-5 text-amber-400" />
                  <h3 className="font-semibold text-slate-300">Verifications</h3>
                </div>
                <p className="text-slate-400 text-sm font-mono text-2xl font-bold text-sky-400">
                  {user.verifications.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="glass-panel p-6 rounded-lg border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-5 h-5 text-sky-400" />
                <h3 className="font-semibold text-white">Recent Activity</h3>
              </div>
              <div className="space-y-3">
                {recentActivity.map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-slate-950/50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'success' ? 'bg-emerald-500' : 'bg-amber-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-slate-300 text-sm">{activity.action}</p>
                      <p className="text-slate-500 text-xs">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t border-slate-800">
              <button className="flex-1 px-4 py-3 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-400 rounded-lg font-medium transition-colors">
                Edit User
              </button>
              {user.status === 'ACTIVE' ? (
                <button className="flex-1 px-4 py-3 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 rounded-lg font-medium transition-colors">
                  Suspend User
                </button>
              ) : (
                <button className="flex-1 px-4 py-3 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 rounded-lg font-medium transition-colors">
                  Activate User
                </button>
              )}
              <button className="px-4 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg font-medium transition-colors">
                Delete
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
