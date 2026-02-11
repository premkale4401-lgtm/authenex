"use client";

import { UserPlus, Shield, Microscope, Building2, Globe, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";

export default function UserManagementPreview() {
  const [stats, setStats] = useState({
    roleDistribution: {
      ADMIN: 0,
      ANALYST: 0,
      USER: 0,
      SUSPENDED: 0
    }
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const data = await import("@/lib/api").then(mod => mod.getAdminStats());
        setStats(data);
      } catch (error) {
        console.error("Failed to load user stats", error);
      }
    }
    loadStats();
  }, []);

  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
            <UsersIcon className="w-5 h-5 text-violet-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">User Management</h3>
            <p className="text-sm text-slate-400">Role-based access control</p>
          </div>
        </div>
        <button 
          suppressHydrationWarning
          className="bg-gradient-to-br from-indigo-500 to-indigo-700 hover:from-indigo-400 hover:to-indigo-600 px-4 py-2 rounded-lg text-white text-sm font-medium flex items-center gap-2 transition-all shadow-lg shadow-indigo-500/20"
        >
          <UserPlus className="w-4 h-4" />
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 text-center group hover:border-sky-500/30 transition-all cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
            <Shield className="w-6 h-6 text-sky-400" />
          </div>
          <h4 className="text-white font-medium mb-1">Admins</h4>
          <p className="text-2xl font-bold text-sky-400 font-mono">{stats.roleDistribution?.ADMIN || 0}</p>
          <p className="text-xs text-slate-500 mt-1">Full platform access</p>
        </div>

        <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 text-center group hover:border-violet-500/30 transition-all cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
            <Microscope className="w-6 h-6 text-violet-400" />
          </div>
          <h4 className="text-white font-medium mb-1">Analysts</h4>
          <p className="text-2xl font-bold text-violet-400 font-mono">{stats.roleDistribution?.ANALYST || 0}</p>
          <p className="text-xs text-slate-500 mt-1">Forensic review access</p>
        </div>

        <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 text-center group hover:border-amber-500/30 transition-all cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
            <Building2 className="w-6 h-6 text-amber-400" />
          </div>
          <h4 className="text-white font-medium mb-1">Users</h4>
          <p className="text-2xl font-bold text-amber-400 font-mono">{stats.roleDistribution?.USER || 0}</p>
          <p className="text-xs text-slate-500 mt-1">Standard access</p>
        </div>

        <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 text-center group hover:border-brand-500/30 transition-all cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
            <EyeOff className="w-6 h-6 text-red-400" />
          </div>
          <h4 className="text-white font-medium mb-1">Suspended</h4>
          <p className="text-2xl font-bold text-red-400 font-mono">{stats.roleDistribution?.SUSPENDED || 0}</p>
          <p className="text-xs text-slate-500 mt-1">Access revoked</p>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 rounded-lg bg-rose-500/5 border border-rose-500/20">
        <EyeOff className="w-5 h-5 text-rose-400 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-sm text-rose-400 font-medium">Privacy Protection Active</p>
          <p className="text-xs text-slate-400">Administrators cannot view user-uploaded content without explicit judicial authorization. All access attempts are logged.</p>
        </div>
        <button suppressHydrationWarning className="text-xs text-rose-400 hover:text-rose-300 font-medium underline">View Policy</button>
      </div>
    </div>
  );
}

// Icon wrapper to avoid conflict with imported 'Users'
import { Users as UsersIcon } from "lucide-react";
