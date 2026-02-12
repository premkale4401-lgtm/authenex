"use client";

import { useState, useEffect } from "react";
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
  { name: "nav.myCases", href: "/dashboard/cases", icon: FolderKanban },
  { name: "nav.newAnalysis", href: "/dashboard/analyze", icon: Scan, highlight: true },
  { name: "nav.analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "nav.legal", href: "/dashboard/legal", icon: Scale },
  { name: "nav.settings", href: "/dashboard/settings", icon: Settings },
  { name: "nav.help", href: "/dashboard/help", icon: HelpCircle },
];

const bottomItems = [
  { name: "nav.profile", href: "/dashboard/profile", icon: User },
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
          x: isMobile ? (mobileMenuOpen ? 0 : -288) : 0
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
        className="hidden lg:block fixed left-0 top-0 h-screen bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-[#0B1120] dark:to-slate-950 border-r border-slate-200 dark:border-slate-800/50 z-50 flex flex-col shadow-xl dark:shadow-2xl dark:shadow-black/50 transition-colors"
      >
        <div className="flex flex-col h-full w-full overflow-hidden">
          {/* Logo */}
          <div className="h-24 flex items-center px-6 border-b border-slate-800/50 min-w-[288px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Link href="/dashboard" className="flex items-center gap-4 relative z-10">
              <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://res.cloudinary.com/dyvmqkxok/image/upload/e_background_removal/f_png/v1770664374/WhatsApp_Image_2026-02-10_at_00.39.29_rzzhs5.jpg" 
                  alt="Authenex Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              {!collapsed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <span className="font-bold text-slate-900 dark:text-white text-xl tracking-tight">Authenex</span>
                  <span className="block text-[10px] text-sky-400 uppercase tracking-widest font-semibold mt-0.5">TrustLens Intelligence</span>
                </motion.div>
              )}
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-8 px-4 space-y-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
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
                      ? "text-sky-600 dark:text-white bg-sky-50 dark:bg-transparent" 
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40"
                  } ${(item as any).highlight ? 'shadow-lg shadow-sky-500/30 dark:shadow-sky-500/50 ring-2 ring-sky-500/20 dark:ring-sky-500/30' : ''}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-transparent border-l-2 border-sky-500"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-5 h-5 flex-shrink-0 relative z-10 ${isActive ? "text-sky-400" : "group-hover:text-sky-400"} ${(item as any).highlight ? 'text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-pulse' : ''} transition-colors duration-300`} />
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
          <div className="p-4 border-t border-slate-200 dark:border-slate-800/50 space-y-2 min-w-[288px] bg-slate-50/50 dark:bg-slate-900/30">
            {bottomItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all group hover:pl-4"
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
          suppressHydrationWarning
          className="absolute -right-3 top-24 w-6 h-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all z-50 shadow-sm"
        >
          {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
        </button>
      </motion.aside>

      {/* Mobile Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50 z-50 px-1 py-2">
        <nav className="flex justify-around items-end">
          {navItems.filter(item => !['nav.settings', 'nav.help'].includes(item.name)).map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            const isHighlight = (item as any).highlight;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg relative ${
                  isActive ? "text-sky-400" : "text-slate-400"
                } ${isHighlight ? '-mt-4' : ''}`}
              >
                {isHighlight && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-500/30 to-transparent rounded-2xl blur-xl animate-pulse"></div>
                    <div className="absolute inset-0 bg-violet-500/20 rounded-2xl blur-lg"></div>
                  </>
                )}
                <div className={`relative ${isHighlight ? 'bg-gradient-to-br from-violet-500/20 to-fuchsia-600/10 p-2.5 rounded-xl ring-2 ring-violet-400/50 shadow-lg shadow-violet-500/60' : 'p-1'}`}>
                  <Icon className={`${isHighlight ? 'w-5 h-5 text-violet-300 drop-shadow-[0_0_12px_rgba(167,139,250,1)]' : 'w-5 h-5'}`} />
                  {isHighlight && (
                    <div className="absolute inset-0 bg-violet-400/10 rounded-2xl animate-ping opacity-50"></div>
                  )}
                </div>
                {!isHighlight && (
                  <span className="text-[9px] relative z-10">{t(item.name)}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}