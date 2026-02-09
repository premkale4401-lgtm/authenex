"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Scan, 
  FolderKanban, 
  BarChart3, 
  Settings, 
  HelpCircle, 
  Shield,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Newspaper,
  Scale,
  User
} from "lucide-react";
import { signOut } from "next-auth/react";

const navItems = [
  { name: "nav.dashboard", href: "/dashboard", icon: Newspaper },
  { name: "nav.newAnalysis", href: "/dashboard/analyze", icon: Scan },
  { name: "nav.myCases", href: "/dashboard/cases", icon: FolderKanban },
  { name: "nav.analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "nav.legal", href: "/dashboard/legal", icon: Scale },
];

const bottomItems = [
  { name: "nav.profile", href: "/dashboard/profile", icon: User },
  { name: "nav.settings", href: "/dashboard/settings", icon: Settings },
  { name: "nav.help", href: "/dashboard/help", icon: HelpCircle },
];

import { useLanguage } from "@/context/LanguageContext";

export default function DashboardSidebar({ 
  collapsed, 
  setCollapsed,
  mobileMenuOpen,
  setMobileMenuOpen
}: { 
  collapsed: boolean; 
  setCollapsed: (collapsed: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  const { t } = useLanguage();
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
      
      <motion.aside
        initial={false}
        animate={{ 
          width: collapsed ? 80 : 288,
          x: typeof window !== 'undefined' && window.innerWidth < 1024 ? (mobileMenuOpen ? 0 : -288) : 0
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
        className="fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-900 via-[#0B1120] to-slate-950 border-r border-slate-800/50 z-50 flex flex-col lg:translate-x-0 shadow-2xl shadow-black/50"
      >
        <div className="flex flex-col h-full w-full overflow-hidden">
          {/* Logo */}
          <div className="h-24 flex items-center px-6 border-b border-slate-800/50 min-w-[288px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Link href="/dashboard" className="flex items-center gap-4 relative z-10">
              <div className="w-11 h-11 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-sky-500/20 ring-1 ring-white/10 group-hover:scale-105 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              {!collapsed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <span className="font-bold text-white text-xl tracking-tight">Authenex</span>
                  <span className="block text-[10px] text-sky-400 uppercase tracking-widest font-semibold mt-0.5">TrustLens Intelligence</span>
                </motion.div>
              )}
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-8 px-4 space-y-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-800">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3.5 rounded-xl transition-all group relative overflow-hidden ${
                    isActive 
                      ? "text-white" 
                      : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-transparent border-l-2 border-sky-500"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-5 h-5 flex-shrink-0 relative z-10 ${isActive ? "text-sky-400" : "group-hover:text-sky-400"} transition-colors duration-300`} />
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-medium text-sm whitespace-nowrap relative z-10"
                    >
                      {t(item.name)}
                    </motion.span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom section */}
          <div className="p-4 border-t border-slate-800/50 space-y-2 min-w-[288px] bg-slate-900/30">
            {bottomItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all group hover:pl-4"
                >
                  <Icon className="w-5 h-5 flex-shrink-0 group-hover:text-sky-400 transition-colors" />
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-medium text-sm whitespace-nowrap"
                    >
                      {t(item.name)}
                    </motion.span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Collapse button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-24 w-6 h-6 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all z-50"
        >
          {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
        </button>
      </motion.aside>

      {/* Mobile sidebar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50 z-50 px-2 py-2">
        <nav className="flex justify-around">
          {navItems.slice(0, 4).map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg ${
                  isActive ? "text-sky-400" : "text-slate-400"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px]">{t(item.name)}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}