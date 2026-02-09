import KPICards from "@/components/admin/KPICards";
import AdminCharts from "@/components/admin/AdminCharts";
import RecentVerifications from "@/components/admin/RecentVerifications";
import SystemStatus from "@/components/admin/SystemStatus";
import UserManagementPreview from "@/components/admin/UserManagementPreview";
import AuditTrail from "@/components/admin/AuditTrail";
import { AlertTriangle } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Critical Alert Banner (Conditional) */}
      <div className="hidden glass-card border-amber-500/30 bg-amber-500/5 p-4 rounded-lg flex items-center gap-4 animate-fade-in-up">
        <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-amber-400 font-semibold text-sm">Abuse Pattern Detected</h3>
          <p className="text-slate-400 text-sm">Unusual spike in API requests from Enterprise Tier users. 3 accounts flagged for review.</p>
        </div>
        <button className="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 rounded-lg text-sm font-medium transition-colors">
          Review Alerts
        </button>
      </div>

      {/* KPI Cards Grid */}
      <KPICards />

      {/* Main Charts Section */}
      <AdminCharts />

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentVerifications />
        <SystemStatus />
      </div>

      {/* User Management Preview */}
      <UserManagementPreview />

      {/* Audit Trail Preview */}
      <AuditTrail />

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-slate-800 text-center">
        <p className="text-xs text-slate-500">
          AUTHENEX Digital Trust Platform • v2.4.1 • 
          <span className="text-cyan-600">Classified: OFFICIAL</span> • 
          All actions monitored and logged
        </p>
      </footer>
    </div>
  );
}
