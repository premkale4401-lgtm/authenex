"use client";

import { 
  ShieldCheck, 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  FileCheck, 
  Settings, 
  FileText, 
  LogOut,
  Shield,
  Activity,
  User
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isActive = (path: string) => {
    if (path === '/admin') return pathname === '/admin';
    return pathname.startsWith(path);
  };

  return (
    <aside className="w-64 glass-panel flex flex-col border-r border-slate-800 animate-slide-in h-screen sticky top-0">
      {/* Logo Area */}
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="https://res.cloudinary.com/dyvmqkxok/image/upload/e_background_removal/f_png/v1770664374/WhatsApp_Image_2026-02-10_at_00.39.29_rzzhs5.jpg" 
              alt="Authenex Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight text-white">AUTHENEX</h1>
            <p className="text-xs text-sky-400 font-mono tracking-wider">ADMIN CONSOLE</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        <Link 
          href="/admin" 
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative ${
            isActive('/admin') && pathname === '/admin'
              ? 'text-sky-400 bg-sky-900/10' 
              : 'text-slate-400 hover:text-sky-400 hover:bg-sky-900/10'
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
          {isActive('/admin') && pathname === '/admin' && (
            <div className="ml-auto w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>
          )}
        </Link>

        <Link 
          href="/admin/users" 
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative ${
            isActive('/admin/users')
              ? 'text-sky-400 bg-sky-900/10' 
              : 'text-slate-400 hover:text-sky-400 hover:bg-sky-900/10'
          }`}
        >
          <Users className="w-5 h-5" />
          <span>Users</span>
          {isActive('/admin/users') && (
            <div className="ml-auto w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>
          )}
        </Link>

        <Link 
          href="/admin/analytics" 
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative ${
            isActive('/admin/analytics')
              ? 'text-sky-400 bg-sky-900/10' 
              : 'text-slate-400 hover:text-sky-400 hover:bg-sky-900/10'
          }`}
        >
          <BarChart3 className="w-5 h-5" />
          <span>Analytics</span>
          {isActive('/admin/analytics') && (
            <div className="ml-auto w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>
          )}
        </Link>

        <Link 
          href="/admin/verifications" 
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative ${
            isActive('/admin/verifications')
              ? 'text-sky-400 bg-sky-900/10' 
              : 'text-slate-400 hover:text-sky-400 hover:bg-sky-900/10'
          }`}
        >
          <FileCheck className="w-5 h-5" />
          <span>Verifications</span>
          {isActive('/admin/verifications') && (
            <div className="ml-auto w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>
          )}
        </Link>

        <Link 
          href="/admin/system" 
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative ${
            isActive('/admin/system')
              ? 'text-sky-400 bg-sky-900/10' 
              : 'text-slate-400 hover:text-sky-400 hover:bg-sky-900/10'
          }`}
        >
          <Activity className="w-5 h-5" />
          <span>Monitoring</span>
          {isActive('/admin/system') && (
            <div className="ml-auto w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>
          )}
        </Link>

        <Link 
          href="/admin/settings" 
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative ${
            isActive('/admin/settings')
              ? 'text-sky-400 bg-sky-900/10' 
              : 'text-slate-400 hover:text-sky-400 hover:bg-sky-900/10'
          }`}
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
          {isActive('/admin/settings') && (
            <div className="ml-auto w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>
          )}
        </Link>

        <Link 
          href="/admin/audit" 
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative ${
            isActive('/admin/audit')
              ? 'text-sky-400 bg-sky-900/10' 
              : 'text-slate-400 hover:text-sky-400 hover:bg-sky-900/10'
          }`}
        >
          <FileText className="w-5 h-5" />
          <span>Audit Logs</span>
          {isActive('/admin/audit') && (
            <div className="ml-auto w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>
          )}
        </Link>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-800 mt-auto">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-800/50 border border-slate-700">
          <div className="w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
             <User className="w-4 h-4 text-sky-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{session?.user?.name || "User"}</p>
            <p className="text-xs text-slate-500 truncate">{session?.user?.email || "No Email"}</p>
          </div>
          <button 
            onClick={() => signOut({ callbackUrl: '/auth/signin' })}
            className="text-slate-400 hover:text-white transition-colors"
            suppressHydrationWarning
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
