"use client";

import { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-[100dvh] bg-slate-50 dark:bg-[#020617] flex overflow-hidden transition-colors">
      <DashboardSidebar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <div 
        className={`flex-1 flex flex-col h-full transition-all duration-300 ease-in-out ${
          collapsed ? "lg:ml-20" : "lg:ml-72"
        } overflow-hidden`}
      >
        <DashboardHeader setMobileMenuOpen={setMobileMenuOpen} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 pb-48 lg:pb-8 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
          {children}
        </main>
      </div>
    </div>
  );
}
