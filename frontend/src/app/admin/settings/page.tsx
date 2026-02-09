"use client";

import { useState, useEffect } from "react";
import { 
  Shield, 
  Settings, 
  AlertTriangle, 
  Save, 
  Loader2, 
  ToggleLeft, 
  ToggleRight,
  Database,
  Users
} from "lucide-react";
import { getSystemSettings, updateSystemSetting } from "@/lib/api";
import { motion } from "framer-motion";

export default function AdminSystemSettings() {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState<Record<string, any>>({});
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    setLoading(true);
    try {
      const data = await getSystemSettings();
      // Initialize defaults if empty
      if (Object.keys(data).length === 0) {
        setSettings({
            maintenance_mode: false,
            allow_registration: true,
            auto_verify_scans: false,
            retention_days: 90
        });
      } else {
        setSettings(data);
      }
    } catch (error) {
      console.error("Failed to load system settings", error);
    } finally {
        setLoading(false);
    }
  };

  const handleToggle = async (key: string, currentValue: boolean) => {
    setSaving(key);
    try {
        const newValue = !currentValue;
        
        // Optimistic update
        setSettings(prev => ({
            ...prev,
            [key]: newValue
        }));

        await updateSystemSetting(key, newValue, "Toggled via Admin Dashboard");
    } catch (error) {
        // Revert
        setSettings(prev => ({
            ...prev,
            [key]: currentValue
        }));
        console.error(`Failed to update ${key}`, error);
    } finally {
        setSaving(null);
    }
  };

  const ConfigCard = ({ 
    title, 
    description, 
    settingKey, 
    type = "toggle", 
    icon: Icon 
  }: any) => (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex items-start justify-between hover:border-slate-700 transition-all">
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-white font-medium mb-1">{title}</h3>
          <p className="text-sm text-slate-400 max-w-sm">{description}</p>
        </div>
      </div>
      
      {type === "toggle" && (
        <button
          onClick={() => handleToggle(settingKey, settings[settingKey])}
          disabled={saving === settingKey}
          className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
            settings[settingKey] ? "bg-emerald-500" : "bg-slate-700"
          }`}
        >
          {saving === settingKey ? (
            <Loader2 className="w-4 h-4 animate-spin absolute right-1 top-1 text-white/50" />
          ) : (
            <span
                className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-all duration-200 ${
                settings[settingKey] ? "right-1" : "left-1"
                }`}
            />
          )}
        </button>
      )}
    </div>
  );

  if (loading) {
      return (
        <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
        </div>
      );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">System Configuration</h1>
        <p className="text-slate-400">Manage global platform settings and operational modes</p>
      </div>

      <div className="grid gap-6">
        <h2 className="text-xl font-bold text-white mt-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" />
            Operational Security
        </h2>
        
        <ConfigCard
            title="Maintenance Mode"
            description="Disable all user access except for Admins. Useful during upgrades or security incidents."
            settingKey="maintenance_mode"
            icon={AlertTriangle}
        />
        
        <ConfigCard
            title="Allow New Registrations"
            description="Toggle capability for new users to sign up. Disable to close the platform to new members."
            settingKey="allow_registration"
            icon={Users}
        />

        <h2 className="text-xl font-bold text-white mt-4 flex items-center gap-2">
            <Database className="w-5 h-5 text-sky-400" />
            Data & Automation
        </h2>

        <ConfigCard
            title="Auto-Verify High Confidence Scans"
            description="Automatically mark scans with >98% AI confidence as 'Verified AI Generated'."
            settingKey="auto_verify_scans"
            icon={Settings}
        />

      </div>
    </div>
  );
}
