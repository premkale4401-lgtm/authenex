"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Bell, 
  Moon, 
  Globe, 
  ChevronRight,
  Shield,
  Lock,
  User,
  Smartphone,
  Eye,
  Key,
  CheckCircle2,
  AlertTriangle,
  Trash2,
  Loader2,
  Save
} from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getUserSettings, updateUserSettings, UserSettings } from "@/lib/api";

export default function SettingsPage() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Fetch settings on mount
  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    setIsLoading(true);
    try {
      const data = await getUserSettings();
      if (data) {
        setSettings(data);
      }
    } catch (error) {
      showToast("Failed to load settings", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleToggle = async (section: string, key: string, value: boolean) => {
    if (!settings) return;

    // Optimistic update
    const previousSettings = { ...settings };
    let newSettings = { ...settings };

    if (section === 'preferences.notifications') {
      newSettings.preferences = {
        ...newSettings.preferences,
        notifications: {
          ...newSettings.preferences.notifications,
          [key]: value
        } as any
      };
    } else if (section === 'security') {
        if (key === 'is2faEnabled') {
            newSettings.is2faEnabled = value;
        }
    }

    setSettings(newSettings);

    try {
      await updateUserSettings({
        notifications: newSettings.preferences.notifications,
        is2faEnabled: newSettings.is2faEnabled
      });
      showToast("Settings saved", "success");
    } catch (error) {
      setSettings(previousSettings); // Revert on failure
      showToast("Failed to save changes", "error");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className={`fixed top-6 left-1/2 z-50 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 ${
              toast.type === 'success' ? 'bg-emerald-500/90 text-white' : 'bg-rose-500/90 text-white'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <AlertTriangle className="w-4 h-4" />
            )}
            <span className="text-sm font-medium">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <h1 className="text-3xl font-bold text-white mb-2">{t('settings.title')}</h1>
        <p className="text-slate-400">Manage your account preferences and security</p>
      </div>

      <div className="grid gap-6">
        
        {/* Appearance Section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold text-white mb-6">{t('settings.appearance')}</h2>
            <div className="space-y-6">
                {/* Dark Mode (Mock - always on for this theme) */}
                <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-400">
                      <Moon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{t('settings.items.darkMode')}</p>
                      <p className="text-slate-400 text-sm">Always active</p>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-not-allowed opacity-80">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-md" />
                  </div>
                </div>

                {/* Language */}
                <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-400">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{t('settings.items.language')}</p>
                      <p className="text-slate-400 text-sm">{settings?.preferences?.language || "English (Default)"}</p>
                    </div>
                  </div>
                  <button className="text-sky-400 hover:text-sky-300 text-sm font-medium flex items-center gap-1">
                    Change <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
            </div>
        </motion.div>

        {/* Notifications Section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold text-white mb-6">{t('settings.notifications')}</h2>
            <div className="space-y-6">
                {/* Email Notifications */}
                <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-400">
                      <Bell className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{t('settings.items.emailNotif')}</p>
                      <p className="text-slate-400 text-sm">Receive weekly summaries</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleToggle('preferences.notifications', 'email', !(settings?.preferences?.notifications?.email ?? true))}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      (settings?.preferences?.notifications?.email ?? true) ? 'bg-emerald-500' : 'bg-slate-700'
                    }`}
                  >
                    <motion.div
                      layout
                      className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-md ${
                        (settings?.preferences?.notifications?.email ?? true) ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>

                {/* Push Notifications */}
                <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-400">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{t('settings.items.pushNotif')}</p>
                      <p className="text-slate-400 text-sm">Receive updates on your device</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleToggle('preferences.notifications', 'push', !(settings?.preferences?.notifications?.push ?? false))}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      (settings?.preferences?.notifications?.push ?? false) ? 'bg-emerald-500' : 'bg-slate-700'
                    }`}
                  >
                    <motion.div
                      layout
                      className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-md ${
                        (settings?.preferences?.notifications?.push ?? false) ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>
            </div>
        </motion.div>

        {/* Security Section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
        >
          <h2 className="text-xl font-bold text-white px-1">{t('settings.security')}</h2>
          
          {/* Security Score */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{t('settings.securityScore')}</h3>
                <p className="text-slate-400 text-sm">Your account security status</p>
              </div>
              <div className="w-20 h-20 relative">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="40" cy="40" r="36" stroke="#1e293b" strokeWidth="8" fill="none" />
                  <motion.circle 
                    cx="40" cy="40" r="36" 
                    stroke={settings?.is2faEnabled ? "#10b981" : "#f59e0b"} 
                    strokeWidth="8" 
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 226" }}
                    animate={{ strokeDasharray: settings?.is2faEnabled ? "204 226" : "150 226" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-2xl font-bold ${settings?.is2faEnabled ? "text-emerald-400" : "text-amber-400"}`}>
                    {settings?.is2faEnabled ? "90" : "65"}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-2" />
                <p className="text-white font-medium text-sm">Strong Password</p>
                <p className="text-slate-400 text-xs">Login with Google OAuth</p>
              </div>
              <div className={`p-4 border rounded-xl ${settings?.is2faEnabled ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-slate-800/50 border-slate-700'}`}>
                {settings?.is2faEnabled ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-2" />
                ) : (
                    <AlertTriangle className="w-5 h-5 text-amber-400 mb-2" />
                )}
                <p className="text-white font-medium text-sm">2FA Status</p>
                <p className="text-slate-400 text-xs">{settings?.is2faEnabled ? "Enabled" : "Not configured"}</p>
              </div>
            </div>
          </div>

          {/* Detailed Security Settings */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Security Configuration</h3>
            <div className="space-y-4">
                {/* 2FA Toggle */}
                <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      settings?.is2faEnabled ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-700 text-slate-400'
                    }`}>
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Two-Factor Authentication</p>
                      <p className="text-slate-400 text-sm">Secure your account with 2FA</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleToggle('security', 'is2faEnabled', !settings?.is2faEnabled)}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      settings?.is2faEnabled ? 'bg-emerald-500' : 'bg-slate-700'
                    }`}
                  >
                    <motion.div
                      layout
                      className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-md ${
                        settings?.is2faEnabled ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-rose-400 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              {t('settings.dangerZone')}
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">{t('settings.deleteAccount')}</p>
                <p className="text-slate-400 text-sm">Permanently delete your account and all data</p>
              </div>
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 rounded-xl font-medium transition-all"
              >
                {t('settings.deleteAccount')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowDeleteConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full"
            >
              <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center mb-4">
                <Trash2 className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('profile.delete.title')}</h3>
              <p className="text-slate-400 mb-6">
                {t('profile.delete.desc')}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-all"
                >
                  {t('profile.cancel')}
                </button>
                <button
                  onClick={() => {
                    showToast("Account deletion requested", "success");
                    setShowDeleteConfirm(false);
                  }}
                  className="flex-1 py-2.5 bg-rose-500 hover:bg-rose-400 text-white rounded-xl font-medium transition-all"
                >
                  {t('profile.delete.confirm')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
