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
import { getUserSettings, updateUserSettings, UserSettings, deleteAccount } from "@/lib/api";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const { t, language, setLanguage, languages } = useLanguage();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showLangModal, setShowLangModal] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

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

  const handleDeleteAccount = async () => {
      try {
          await deleteAccount();
          showToast("Account deleted successfully", "success");
          // Redirect to login or home after delay
          setTimeout(() => {
             window.location.href = '/login'; 
          }, 1500);
      } catch (error) {
          showToast("Failed to delete account", "error");
          setShowDeleteConfirm(false);
      }
  };

  const currentLangName = languages.find(l => l.code === language)?.name || "English";

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
      </div>
    );
  }

  if (!mounted) return null;

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
        <h1 className="text-3xl font-bold dark:text-white text-slate-900 mb-2 transition-colors">{t('settings.title')}</h1>
        <p className="dark:text-slate-400 text-slate-600 transition-colors">Manage your account preferences and security</p>
      </div>

      <div className="grid gap-6">
        
        {/* Appearance Section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="dark:bg-slate-900/50 bg-white/50 backdrop-blur-sm border dark:border-slate-800/50 border-slate-200 rounded-2xl p-6 transition-colors shadow-sm relative z-10"
          >
            <h2 className="text-lg font-semibold dark:text-white text-slate-900 mb-6">{t('settings.appearance')}</h2>
            <div className="space-y-6">
                {/* Dark Mode Toggle */}
                <div className="flex items-center justify-between p-4 dark:bg-slate-800/30 bg-slate-100/50 rounded-xl transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 dark:bg-slate-700/50 bg-white rounded-lg flex items-center justify-center dark:text-slate-400 text-slate-600 shadow-sm border dark:border-transparent border-slate-200">
                      <Moon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="dark:text-white text-slate-900 font-medium">{t('settings.items.darkMode')}</p>
                      <p className="dark:text-slate-400 text-slate-500 text-sm">
                        {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      theme === 'dark' ? 'bg-emerald-500' : 'bg-slate-300'
                    }`}
                  >
                    <motion.div
                      layout
                      className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-md ${
                        theme === 'dark' ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>

                {/* Language */}
                <div className="flex items-center justify-between p-4 dark:bg-slate-800/30 bg-slate-100/50 rounded-xl transition-colors relative z-20">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 dark:bg-slate-700/50 bg-white rounded-lg flex items-center justify-center dark:text-slate-400 text-slate-600 shadow-sm border dark:border-transparent border-slate-200">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="dark:text-white text-slate-900 font-medium">{t('settings.items.language')}</p>
                      <p className="dark:text-slate-400 text-slate-500 text-sm">{currentLangName}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <button 
                        onClick={() => setShowLangModal(!showLangModal)}
                        className="text-sky-500 hover:text-sky-600 font-medium flex items-center gap-1 transition-colors"
                    >
                        Change <ChevronRight className="w-4 h-4" />
                    </button>
                    
                    {/* Language Dropdown */}
                    <AnimatePresence>
                        {showLangModal && (
                            <>
                            <div className="fixed inset-0 z-40" onClick={() => setShowLangModal(false)} />
                            <motion.div 
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border dark:border-slate-700 border-slate-200 z-50 overflow-hidden"
                            >
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setLanguage(lang.code);
                                            setShowLangModal(false);
                                            showToast(`Language changed to ${lang.name}`, "success");
                                        }}
                                        className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center justify-between
                                            ${language === lang.code ? 'text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 font-medium' : 'dark:text-slate-300 text-slate-700'}
                                        `}
                                    >
                                        <span>{lang.name}</span>
                                        {language === lang.code && <CheckCircle2 className="w-3 h-3" />}
                                    </button>
                                ))}
                            </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                  </div>
                </div>
            </div>
        </motion.div>

        {/* Notifications Section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="dark:bg-slate-900/50 bg-white/50 backdrop-blur-sm border dark:border-slate-800/50 border-slate-200 rounded-2xl p-6 transition-colors shadow-sm"
          >
            <h2 className="text-lg font-semibold dark:text-white text-slate-900 mb-6">{t('settings.notifications')}</h2>
            <div className="space-y-6">
                {/* Email Notifications */}
                <div className="flex items-center justify-between p-4 dark:bg-slate-800/30 bg-slate-100/50 rounded-xl transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 dark:bg-slate-700/50 bg-white rounded-lg flex items-center justify-center dark:text-slate-400 text-slate-600 shadow-sm border dark:border-transparent border-slate-200">
                      <Bell className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="dark:text-white text-slate-900 font-medium">{t('settings.items.emailNotif')}</p>
                      <p className="dark:text-slate-400 text-slate-500 text-sm">Receive weekly summaries</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleToggle('preferences.notifications', 'email', !(settings?.preferences?.notifications?.email ?? true))}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      (settings?.preferences?.notifications?.email ?? true) ? 'bg-emerald-500' : 'bg-slate-300'
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
                <div className="flex items-center justify-between p-4 dark:bg-slate-800/30 bg-slate-100/50 rounded-xl transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 dark:bg-slate-700/50 bg-white rounded-lg flex items-center justify-center dark:text-slate-400 text-slate-600 shadow-sm border dark:border-transparent border-slate-200">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="dark:text-white text-slate-900 font-medium">{t('settings.items.pushNotif')}</p>
                      <p className="dark:text-slate-400 text-slate-500 text-sm">Receive updates on your device</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleToggle('preferences.notifications', 'push', !(settings?.preferences?.notifications?.push ?? false))}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      (settings?.preferences?.notifications?.push ?? false) ? 'bg-emerald-500' : 'bg-slate-300'
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
          <h2 className="text-xl font-bold dark:text-white text-slate-900 px-1">{t('settings.security')}</h2>
          
          {/* Security Score */}
          <div className="dark:bg-slate-900/50 bg-white/50 backdrop-blur-sm border dark:border-slate-800/50 border-slate-200 rounded-2xl p-6 transition-colors shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold dark:text-white text-slate-900 mb-1">{t('settings.securityScore')}</h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm">Your account security status</p>
              </div>
              <div className="w-20 h-20 relative">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="40" cy="40" r="36" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="8" fill="none" />
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
                  <span className={`text-2xl font-bold ${settings?.is2faEnabled ? "text-emerald-500" : "text-amber-500"}`}>
                    {settings?.is2faEnabled ? "90" : "65"}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mb-2" />
                <p className="dark:text-white text-slate-900 font-medium text-sm">Strong Password</p>
                <p className="dark:text-slate-400 text-slate-600 text-xs">Login with Google OAuth</p>
              </div>
              <div className={`p-4 border rounded-xl ${settings?.is2faEnabled ? 'bg-emerald-500/10 border-emerald-500/20' : 'dark:bg-slate-800/50 bg-slate-100/50 dark:border-slate-700 border-slate-200'}`}>
                {settings?.is2faEnabled ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mb-2" />
                ) : (
                    <AlertTriangle className="w-5 h-5 text-amber-500 mb-2" />
                )}
                <p className="dark:text-white text-slate-900 font-medium text-sm">2FA Status</p>
                <p className="dark:text-slate-400 text-slate-600 text-xs">{settings?.is2faEnabled ? "Enabled" : "Not configured"}</p>
              </div>
            </div>
          </div>

          {/* Detailed Security Settings */}
          <div className="dark:bg-slate-900/50 bg-white/50 backdrop-blur-sm border dark:border-slate-800/50 border-slate-200 rounded-2xl p-6 transition-colors shadow-sm">
            <h3 className="text-lg font-semibold dark:text-white text-slate-900 mb-6">Security Configuration</h3>
            <div className="space-y-4">
                {/* 2FA Toggle */}
                <div className="flex items-center justify-between p-4 dark:bg-slate-800/30 bg-slate-100/50 rounded-xl border dark:border-slate-800 border-slate-200 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      settings?.is2faEnabled ? 'bg-emerald-500/10 text-emerald-500' : 'dark:bg-slate-700 bg-white dark:text-slate-400 text-slate-400 shadow-sm'
                    }`}>
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="dark:text-white text-slate-900 font-medium">Two-Factor Authentication</p>
                      <p className="dark:text-slate-400 text-slate-600 text-sm">Secure your account with 2FA</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleToggle('security', 'is2faEnabled', !settings?.is2faEnabled)}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      settings?.is2faEnabled ? 'bg-emerald-500' : 'bg-slate-300'
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
            <h3 className="text-lg font-semibold text-rose-500 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              {t('settings.dangerZone')}
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="dark:text-white text-slate-900 font-medium">{t('settings.deleteAccount')}</p>
                <p className="dark:text-slate-400 text-slate-600 text-sm">Permanently delete your account and all data</p>
              </div>
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 border border-rose-500/20 rounded-xl font-medium transition-all"
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
              className="dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-2xl p-6 max-w-md w-full shadow-2xl"
            >
              <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center mb-4">
                <Trash2 className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">{t('profile.delete.title')}</h3>
              <p className="dark:text-slate-400 text-slate-600 mb-6">
                {t('profile.delete.desc')}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 py-2.5 dark:bg-slate-800 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-white text-slate-900 rounded-xl font-medium transition-all"
                >
                  {t('profile.cancel')}
                </button>
                <button
                  onClick={handleDeleteAccount}
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
