
import React from 'react';
import { AppNotification } from '../types';

interface NotificationPageProps {
  notifications: AppNotification[];
  onMarkAsRead: (id: string) => void;
  onClearAll: () => void;
  onNavigateToResult: (result: any) => void;
}

export const NotificationPage: React.FC<NotificationPageProps> = ({ 
  notifications, 
  onMarkAsRead, 
  onClearAll,
  onNavigateToResult
}) => {
  const sortedNotifications = [...notifications].sort((a, b) => b.timestamp - a.timestamp);

  const getIcon = (type: AppNotification['type']) => {
    switch (type) {
      case 'FORENSIC_AI': return 'fa-bug text-rose-500';
      case 'FORENSIC_HUMAN': return 'fa-user-check text-emerald-500';
      case 'NEWS': return 'fa-newspaper text-sky-500';
      case 'CREDIT': return 'fa-coins text-amber-500';
      case 'SYSTEM': return 'fa-microchip text-slate-400';
      default: return 'fa-bell text-slate-400';
    }
  };

  const getLabel = (type: AppNotification['type']) => {
    switch (type) {
      case 'FORENSIC_AI': return 'AI Detected';
      case 'FORENSIC_HUMAN': return 'Human Verified';
      case 'NEWS': return 'Regional News';
      case 'CREDIT': return 'Credit Update';
      case 'SYSTEM': return 'System Update';
      default: return 'Alert';
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold font-orbitron text-white">System Alerts</h2>
          <p className="text-[10px] text-slate-500 font-orbitron uppercase tracking-widest mt-1">
            Real-time neural activity log
          </p>
        </div>
        {notifications.length > 0 && (
          <button 
            onClick={onClearAll}
            className="text-[10px] font-orbitron text-slate-500 hover:text-rose-400 uppercase tracking-widest transition-colors flex items-center gap-2"
          >
            <i className="fa-solid fa-trash-can"></i> Clear Feed
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <div className="text-center py-32 glass-panel rounded-[2.5rem] border border-slate-800">
          <i className="fa-solid fa-ghost text-5xl text-slate-800 mb-6"></i>
          <p className="text-slate-500 font-orbitron uppercase tracking-widest text-xs">No active alerts detected</p>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedNotifications.map((notif) => (
            <div 
              key={notif.id}
              onClick={() => {
                onMarkAsRead(notif.id);
                if (notif.linkData && notif.type.startsWith('FORENSIC')) {
                  onNavigateToResult(notif.linkData);
                } else if (notif.linkData?.url) {
                  window.open(notif.linkData.url, '_blank');
                }
              }}
              className={`glass-panel p-6 rounded-3xl border transition-all cursor-pointer group flex gap-5 items-start ${
                notif.read ? 'border-slate-800/50 bg-slate-900/10 opacity-70' : 'border-sky-500/30 bg-sky-500/5 ring-1 ring-sky-500/20'
              } hover:border-sky-500/50 hover:opacity-100`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform`}>
                <i className={`fa-solid ${getIcon(notif.type)}`}></i>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <span className={`text-[9px] font-orbitron font-bold uppercase tracking-widest ${
                    notif.type === 'FORENSIC_AI' ? 'text-rose-400' : 
                    notif.type === 'FORENSIC_HUMAN' ? 'text-emerald-400' : 
                    'text-sky-400'
                  }`}>
                    {getLabel(notif.type)}
                  </span>
                  <span className="text-[10px] text-slate-600 font-orbitron whitespace-nowrap">
                    {new Date(notif.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{notif.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{notif.message}</p>
              </div>

              {!notif.read && (
                <div className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9] shrink-0 mt-2"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
