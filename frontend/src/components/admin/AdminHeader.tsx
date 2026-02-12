"use client";

import { useState, useEffect } from 'react';
import { Search, Bell, HelpCircle, X, CheckCircle, AlertCircle, Info, User, Settings, LogOut, Menu, ChevronDown, LayoutDashboard, Users, BarChart3, FileCheck } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion';
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

// Mock Notifications
const initialNotifications = [
  {
    id: 1,
    type: 'alert',
    title: 'Abuse Pattern Detected',
    message: 'Multiple failed login attempts from IP 192.168.1.5',
    time: '5 min ago',
    read: false,
  },
  {
    id: 2,
    type: 'success',
    title: 'System Update Complete',
    message: 'Patches deployed successfully to all nodes.',
    time: '1 hour ago',
    read: false,
  },
  {
    id: 3,
    type: 'info',
    title: 'New Analyst Joined',
    message: 'Sarah Johnson has been added to the Analytics team.',
    time: '3 hours ago',
    read: true,
  }
];

export default function AdminHeader() {
  const { data: session } = useSession();
  const [showNotifications, setShowNotifications] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'alert': return <AlertCircle className="w-4 h-4 text-red-400" />;
      case 'success': return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      default: return <Info className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-slate-800/50 px-6 py-4 flex items-center justify-between">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
      
      {/* Admin Sections Dropdown */}
      <div className="relative">
        <button 
          onClick={() => setAdminMenuOpen(!adminMenuOpen)}
          suppressHydrationWarning
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 transition-all group"
        >
          <Menu className="w-5 h-5 text-sky-400" />
          <span className="text-white font-medium hidden sm:block">Admin Sections</span>
          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${adminMenuOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {adminMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40"
                onClick={() => setAdminMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute left-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50"
              >
                <div className="p-2">
                  <Link 
                    href="/admin"
                    onClick={() => setAdminMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all group"
                  >
                    <LayoutDashboard className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                    <span className="text-sm font-medium">Dashboard</span>
                  </Link>
                  <Link 
                    href="/admin/users"
                    onClick={() => setAdminMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all group"
                  >
                    <Users className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                    <span className="text-sm font-medium">Users</span>
                  </Link>
                  <Link 
                    href="/admin/analytics"
                    onClick={() => setAdminMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all group"
                  >
                    <BarChart3 className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                    <span className="text-sm font-medium">Analytics</span>
                  </Link>
                  <Link 
                    href="/admin/verifications"
                    onClick={() => setAdminMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all group"
                  >
                    <FileCheck className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                    <span className="text-sm font-medium">Verifications</span>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            suppressHydrationWarning
            className={`relative p-2 rounded-lg transition-all ${showNotifications ? 'bg-slate-800 text-white' : 'hover:bg-slate-800/50 text-slate-400 hover:text-white'}`}
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full border-2 border-slate-900"></span>
            )}
          </button>

          <AnimatePresence>
            {showNotifications && (
               <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-2 w-80 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50"
               >
                 <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-800/50">
                   <h3 className="font-semibold text-white text-sm">Notifications</h3>
                    {notifications.length > 0 && (
                        <button onClick={clearAll} className="text-xs text-slate-400 hover:text-white transition-colors">
                            Clear all
                        </button>
                    )}
                 </div>
                 
                 <div className="max-h-80 overflow-y-auto">
                    {notifications.length === 0 ? (
                        <div className="p-6 text-center text-slate-500 text-sm">
                            No new notifications
                        </div>
                    ) : (
                        notifications.map((n) => (
                           <div 
                             key={n.id} 
                             className={`p-4 border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors ${n.read ? 'opacity-60' : ''}`}
                             onClick={() => markAsRead(n.id)}
                           >
                              <div className="flex gap-3">
                                <div className={`mt-1 p-1.5 rounded-full bg-slate-800 flex-shrink-0 border border-slate-700 h-fit`}>
                                   {getIcon(n.type)}
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-white">{n.title}</h4>
                                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{n.message}</p>
                                    <span className="text-[10px] text-slate-500 mt-2 block uppercase tracking-wider">{n.time}</span>
                                </div>
                              </div>
                           </div> 
                        ))
                    )}
                 </div>
               </motion.div> 
            )}
          </AnimatePresence>
        </div>

        {/* Help */}
        <button 
          suppressHydrationWarning
          className="p-2 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-white transition-all group relative"
        >
          <HelpCircle className="w-5 h-5" />
          <div className="absolute top-full right-0 mt-2 p-2 bg-slate-800 text-xs text-white rounded hidden group-hover:block z-50 whitespace-nowrap shadow-lg border border-slate-700">
            Documentation
          </div>
        </button>

        {/* User Profile Dropdown */}
        <div className="relative ml-2">
          <button 
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            suppressHydrationWarning
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-800/50 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 p-0.5 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <User className="w-4 h-4 text-slate-300" />
              </div>
            </div>
          </button>

          <AnimatePresence>
            {userMenuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-40"
                  onClick={() => setUserMenuOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-xl shadow-black/50 overflow-hidden z-50 divide-y divide-slate-800"
                >
                  <div className="p-2">
                    <Link 
                      href="/admin/profile"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all group"
                    >
                      <User className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                      <span className="text-sm font-medium">Profile</span>
                    </Link>
                    <Link 
                      href="/admin/settings"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all group"
                    >
                      <Settings className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                      <span className="text-sm font-medium">Settings</span>
                    </Link>
                    <Link 
                      href="/dashboard/help"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all group"
                    >
                      <HelpCircle className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                      <span className="text-sm font-medium">Help & Support</span>
                    </Link>
                  </div>
                  <div className="p-2">
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-all group"
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm font-medium">Sign Out</span>
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
