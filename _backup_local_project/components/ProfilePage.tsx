
import React, { useState } from 'react';
import { User, DetectionResult } from '../types';

interface ProfilePageProps {
  user: User;
  history: DetectionResult[];
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ user, history }) => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [show2FAModal, setShow2FAModal] = useState(false);
  const [isSettingUp, setIsSettingUp] = useState(false);

  const stats = [
    { label: 'Credits Remaining', value: user.credits ?? 0, icon: 'fa-coins', color: 'text-amber-400' },
    { label: 'Total Scans', value: user.totalVerifications ?? 0, icon: 'fa-shield-halved', color: 'text-sky-400' },
    { label: 'Synthetic Finds', value: history.filter(h => h.verdict === 'AI').length, icon: 'fa-bug', color: 'text-rose-400' },
    { label: 'Member Since', value: user.joinedDate ?? '2024', icon: 'fa-calendar-check', color: 'text-emerald-400' },
  ];

  const handleToggle2FA = () => {
    if (is2FAEnabled) {
      if (window.confirm("Are you sure you want to disable 2FA? This will decrease your node's security rating.")) {
        setIs2FAEnabled(false);
      }
    } else {
      setShow2FAModal(true);
    }
  };

  const complete2FASetup = () => {
    setIsSettingUp(true);
    setTimeout(() => {
      setIs2FAEnabled(true);
      setIsSettingUp(false);
      setShow2FAModal(false);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Profile Sidebar */}
        <div className="lg:w-1/3 space-y-6">
          <div className="glass-panel p-8 rounded-[2.5rem] border border-slate-800 text-center relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className={`text-[8px] font-orbitron px-2 py-1 rounded-full border uppercase tracking-widest ${user.role === 'Admin' ? 'border-amber-500/50 text-amber-500 bg-amber-500/5' : 'border-slate-700 text-slate-500'}`}>
                {user.role}
              </span>
            </div>
            <div className="relative inline-block mb-6">
              <img src={user.avatar} className="w-24 h-24 rounded-full border-2 border-sky-500/30 p-1 mx-auto" alt="User" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-sky-600 rounded-full border-4 border-[#020617] flex items-center justify-center">
                <i className="fa-solid fa-check text-[10px] text-white"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold font-orbitron text-white truncate">{user.name}</h3>
            <p className="text-xs text-slate-500 mb-6 truncate">{user.email}</p>
            
            <div className={`p-4 rounded-2xl border mb-4 ${user.isPro ? 'border-sky-500/30 bg-sky-500/5' : 'border-slate-800 bg-slate-900/50'}`}>
              <p className="text-[10px] font-orbitron text-slate-500 uppercase tracking-widest mb-1">Current Protocol</p>
              <p className={`text-sm font-bold font-orbitron uppercase ${user.isPro ? 'text-sky-400' : 'text-slate-300'}`}>
                {user.isPro ? 'Premium Forensic Node' : 'Basic Verification Node'}
              </p>
            </div>

            <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-orbitron text-[10px] uppercase tracking-[0.2em] transition-all">
              Edit Neural ID
            </button>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-slate-800">
            <h4 className="text-[10px] font-orbitron text-sky-400 uppercase tracking-[0.2em] mb-4">Account Integrity</h4>
            <div className="space-y-4">
              <SecurityItem icon="fa-fingerprint" label="Biometric Access" status="Active" color="text-emerald-500" />
              <SecurityItem 
                icon="fa-shield-halved" 
                label="Two-Factor (2FA)" 
                status={is2FAEnabled ? "Active" : "Inactive"} 
                color={is2FAEnabled ? "text-emerald-500" : "text-rose-500"} 
                actionLabel={is2FAEnabled ? "Manage" : "Setup"}
                onAction={handleToggle2FA}
              />
              <SecurityItem icon="fa-shield-virus" label="End-to-End Encryption" status="Active" color="text-emerald-500" />
              <SecurityItem icon="fa-key" label="Neural Key Rotation" status="Every 30d" color="text-amber-500" />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:w-2/3 space-y-8">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="glass-panel p-6 rounded-3xl border border-slate-800 group hover:border-sky-500/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center ${stat.color} text-lg`}>
                    <i className={`fa-solid ${stat.icon}`}></i>
                  </div>
                </div>
                <p className="text-[10px] font-orbitron text-slate-500 uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-bold font-orbitron text-white mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Usage Chart Simulation */}
          <div className="glass-panel p-8 rounded-[2.5rem] border border-slate-800">
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-sm font-bold font-orbitron uppercase tracking-widest">Verification Flux</h4>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                <span className="w-2 h-2 rounded-full bg-slate-700"></span>
              </div>
            </div>
            
            <div className="h-48 flex items-end justify-between gap-2 px-2">
              {[40, 70, 45, 90, 65, 80, 50, 85, 95, 60, 75, 55].map((h, i) => (
                <div key={i} className="flex-1 bg-slate-800/50 rounded-t-lg relative group transition-all hover:bg-sky-500/20">
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sky-600 to-sky-400 rounded-t-lg transition-all duration-1000" 
                    style={{ height: `${h}%` }}
                  ></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-orbitron text-white whitespace-nowrap">
                    NODE {i+1}: {h}%
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 px-2 text-[8px] font-orbitron text-slate-600 uppercase tracking-widest">
              <span>Cycle Start</span>
              <span>Inference Peak</span>
              <span>Cycle End</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 p-4 bg-sky-600 text-white rounded-2xl font-orbitron text-[10px] uppercase tracking-widest hover:bg-sky-500 transition-all shadow-lg shadow-sky-600/20">
              <i className="fa-solid fa-plus"></i> Buy Forensic Credits
            </button>
            <button className="flex items-center justify-center gap-3 p-4 bg-slate-800 text-white rounded-2xl font-orbitron text-[10px] uppercase tracking-widest hover:bg-slate-700 transition-all border border-slate-700">
              <i className="fa-solid fa-download"></i> Download Audit Log
            </button>
          </div>
        </div>

      </div>

      {/* 2FA Setup Modal */}
      {show2FAModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShow2FAModal(false)}></div>
          <div className="glass-panel p-8 rounded-[2.5rem] border border-sky-500/30 max-w-lg w-full relative animate-in zoom-in-95 duration-300">
            <button onClick={() => setShow2FAModal(false)} className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-sky-500/30">
                <i className="fa-solid fa-shield-halved text-2xl text-sky-400"></i>
              </div>
              <h4 className="text-2xl font-bold font-orbitron text-white">Two-Factor Auth</h4>
              <p className="text-slate-500 text-[10px] font-orbitron uppercase tracking-widest mt-1">Strengthen your node integrity</p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-slate-900/60 rounded-3xl border border-slate-800 text-center">
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Scan this QR code with your authentication app (Google Authenticator, Authy) to link your node.
                </p>
                <div className="w-40 h-40 bg-white p-2 rounded-xl mx-auto mb-6 relative group cursor-crosshair">
                   {/* Placeholder QR Code SVG */}
                   <svg viewBox="0 0 100 100" className="w-full h-full">
                     <rect width="100" height="100" fill="white"/>
                     <path d="M10,10 h30 v30 h-30 z M10,10 v10 M20,10 v10 M30,10 v10 M10,20 h30 M10,30 h30" stroke="black" strokeWidth="2" fill="none"/>
                     <path d="M60,10 h30 v30 h-30 z" stroke="black" strokeWidth="2" fill="none"/>
                     <path d="M10,60 h30 v30 h-30 z" stroke="black" strokeWidth="2" fill="none"/>
                     <path d="M45,45 h10 v10 h-10 z M60,60 h10 v10 h-10 z M75,75 h15 v15 h-15 z M50,70 h5 v5 h-5 z" fill="black"/>
                     <rect x="70" y="45" width="5" height="5" fill="black"/>
                     <rect x="85" y="10" width="5" height="5" fill="black"/>
                   </svg>
                   <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <i className="fa-solid fa-expand text-sky-500 text-2xl"></i>
                   </div>
                </div>
                <div className="flex flex-col gap-1">
                   <p className="text-[10px] font-orbitron text-slate-500 uppercase tracking-widest">Manual Setup Key</p>
                   <code className="text-sky-400 text-xs font-mono font-bold tracking-widest">AUTH-X9Z-2K0-LMP</code>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-orbitron text-slate-400 uppercase tracking-widest px-1">Backup Recovery Codes</p>
                <div className="grid grid-cols-2 gap-2">
                  {['8X3J-KL92', 'MP01-ZX34', 'QW78-NM45', 'PL20-GH67'].map(code => (
                    <div key={code} className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-center text-xs font-mono text-slate-500">{code}</div>
                  ))}
                </div>
                <p className="text-[9px] text-slate-600 italic text-center">Store these in a physical vault. They grant override access.</p>
              </div>

              <button 
                onClick={complete2FASetup}
                disabled={isSettingUp}
                className="w-full py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-2xl font-orbitron text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-xl shadow-sky-600/20 flex items-center justify-center gap-3"
              >
                {isSettingUp ? (
                  <>
                    <i className="fa-solid fa-spinner animate-spin"></i>
                    Syncing Node...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-lock"></i>
                    Verify & Enable
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SecurityItem: React.FC<{ 
  icon: string; 
  label: string; 
  status: string; 
  color: string; 
  actionLabel?: string; 
  onAction?: () => void 
}> = ({ icon, label, status, color, actionLabel, onAction }) => (
  <div className="flex items-center justify-between group">
    <div className="flex items-center gap-3">
      <i className={`fa-solid ${icon} text-slate-500 w-4 group-hover:text-sky-400 transition-colors`}></i>
      <div className="flex flex-col">
        <span className="text-xs text-slate-300">{label}</span>
        <span className={`text-[9px] font-orbitron font-bold uppercase ${color}`}>{status}</span>
      </div>
    </div>
    {actionLabel && (
      <button 
        onClick={onAction}
        className="text-[9px] font-orbitron text-sky-500 hover:text-sky-400 uppercase tracking-widest border border-sky-500/20 px-2 py-1 rounded-md hover:bg-sky-500/10 transition-all"
      >
        {actionLabel}
      </button>
    )}
  </div>
);
