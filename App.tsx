
import React, { useState, useRef, useEffect } from 'react';
import { AppState, DetectionResult, NewsItem, NavTab, User, ForensicModality, AppNotification } from './types';
import { analyzeAssetForensics, getRecentDeepfakeNews } from './services/geminiService';
import { ForensicReport } from './components/ForensicReport';
import { ScannerOverlay } from './components/ScannerOverlay';
import { DeepfakeNews } from './components/DeepfakeNews';
import { PricingSection } from './components/PricingSection';
import { ParticleBackground } from './components/ParticleBackground';
import { ProfilePage } from './components/ProfilePage';
import { NotificationPage } from './components/NotificationPage';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { ScrollToTop } from './components/ScrollToTop';

interface SelectedFile {
  data: string;
  type: string;
  name: string;
  size: string;
}

const GUEST_USER: User = {
  name: 'Forensic Agent',
  email: 'agent-001@authenex.local',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Authenex',
  isPro: false,
  role: 'User',
  credits: 10,
  totalVerifications: 0,
  joinedDate: new Date().getFullYear().toString()
};

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [selectedModality, setSelectedModality] = useState<ForensicModality | null>(null);
  const [selectedFile, setSelectedFile] = useState<SelectedFile | null>(null);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loadingNews, setLoadingNews] = useState(false);
  const [history, setHistory] = useState<DetectionResult[]>([]);
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [user] = useState<User>(GUEST_USER);
  const [isInitializing, setIsInitializing] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Fast initial boot sequence
    const bootTimer = setTimeout(() => setIsInitializing(false), 800);

    // Restore locally saved data
    try {
      const savedHistory = localStorage.getItem('authenex_history');
      if (savedHistory) setHistory(JSON.parse(savedHistory));
      
      const savedNotifications = localStorage.getItem('authenex_notifications');
      if (savedNotifications) setNotifications(JSON.parse(savedNotifications));

      const savedTheme = localStorage.getItem('authenex_theme') as 'light' | 'dark' | null;
      if (savedTheme) {
        setTheme(savedTheme);
        document.body.className = savedTheme;
      }
    } catch (e) { console.warn("Cache restoration failed", e); }

    const fetchNews = async () => {
      setLoadingNews(true);
      try { 
        const items = await getRecentDeepfakeNews(); 
        setNews(items); 
      } catch (err) {} finally { setLoadingNews(false); }
    };
    fetchNews();

    return () => clearTimeout(bootTimer);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      let modality: ForensicModality = 'IMAGE';
      if (file.type.startsWith('image/')) modality = 'IMAGE';
      else if (file.type.startsWith('video/')) modality = 'VIDEO';
      else if (file.type.startsWith('audio/')) modality = 'AUDIO';
      else if (file.type === 'application/pdf' || file.type.startsWith('text/')) modality = 'DOCUMENT';

      setAppState(AppState.UPLOADING);
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedFile({ 
          data: event.target?.result as string, 
          type: file.type,
          name: file.name,
          size: (file.size / 1024).toFixed(1) + ' KB'
        });
        setSelectedModality(modality);
        setAppState(AppState.IDLE);
      };
      reader.readAsDataURL(file);
    }
  };

  const startAnalysis = async () => {
    if (!selectedFile || !selectedModality) return;
    try {
      setAppState(AppState.ANALYZING);
      setError(null);
      const startTime = performance.now();
      const forensicResult = await analyzeAssetForensics(selectedFile.data, selectedFile.type, selectedModality);
      const enrichedResult = { 
        ...forensicResult, 
        timestamp: Date.now(), 
        imageUrl: selectedFile.data,
        analysisSpeed: parseFloat(((performance.now() - startTime) / 1000).toFixed(2))
      };
      setResult(enrichedResult);
      setHistory(prev => {
        const updated = [enrichedResult, ...prev].slice(0, 20);
        localStorage.setItem('authenex_history', JSON.stringify(updated));
        return updated;
      });
      setAppState(AppState.RESULT);
    } catch (err: any) {
      setError(err.message || 'Scan failed.');
      setAppState(AppState.ERROR);
    }
  };

  const reset = () => {
    setAppState(AppState.IDLE);
    setSelectedFile(null);
    setResult(null);
    setError(null);
  };

  if (isInitializing) {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center space-y-6">
        <Logo size="lg" className="animate-pulse" />
        <p className="text-sky-400 font-orbitron text-[10px] tracking-[0.4em] uppercase">Syncing Neural Node...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col pb-32 relative bg-[#020617]">
      <ParticleBackground />
      <ScrollToTop />
      
      <nav className="p-4 sm:p-6 border-b border-slate-800 glass-panel sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo size="md" showText={true} className="cursor-pointer" onClick={() => { setActiveTab('dashboard'); reset(); }} />
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[10px] font-bold font-orbitron text-white">{user.name.toUpperCase()}</span>
              <span className="text-[8px] font-orbitron tracking-widest uppercase text-sky-400">Anonymous Node</span>
            </div>
            <img src={user.avatar} className="w-10 h-10 rounded-full border border-slate-700 cursor-pointer" alt="Avatar" onClick={() => setActiveTab('profile')} />
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto w-full p-6 py-12 relative z-10">
        {activeTab === 'dashboard' && (
          <div className="space-y-12">
            {appState === AppState.IDLE && !selectedFile && (
              <div className="text-center space-y-8 max-w-4xl mx-auto py-12">
                <h2 className="text-5xl md:text-7xl font-extrabold font-orbitron leading-tight text-white animate-in slide-in-from-top-4 duration-1000">Trust Nothing <span className="text-sky-400">Verify Everything</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto pt-8">
                   <button onClick={() => fileInputRef.current?.click()} className="flex flex-col items-center gap-3 p-6 glass-panel rounded-2xl hover:border-sky-500/50 transition-all group">
                     <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center text-white text-xl"><i className="fa-solid fa-upload"></i></div>
                     <span className="text-[10px] font-orbitron font-bold uppercase tracking-widest text-slate-400">Scan Image</span>
                   </button>
                </div>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*,video/*,audio/*,.pdf" />
              </div>
            )}

            {appState === AppState.IDLE && selectedFile && (
              <div className="max-w-2xl mx-auto glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/40">
                  <img src={selectedFile.data} className="w-full h-full object-contain" alt="Preview" />
                </div>
                <div className="flex gap-4">
                  <button onClick={reset} className="flex-1 py-4 bg-slate-800 text-white rounded-xl font-orbitron text-[10px] uppercase">Discard</button>
                  <button onClick={startAnalysis} className="flex-[2] py-4 bg-sky-600 text-white rounded-xl font-orbitron text-[10px] uppercase font-bold tracking-widest">Deep Scan</button>
                </div>
              </div>
            )}

            {appState === AppState.ANALYZING && (
              <div className="max-w-3xl mx-auto space-y-8 py-12">
                <div className="relative aspect-video rounded-3xl overflow-hidden">
                  <img src={selectedFile?.data} className="w-full h-full object-contain grayscale opacity-40" alt="Scanning" />
                  <ScannerOverlay />
                </div>
                <h3 className="text-3xl font-bold font-orbitron text-white text-center">Neural Deconstruction In Progress</h3>
              </div>
            )}

            {appState === AppState.RESULT && result && <ForensicReport result={result} onReset={reset} />}
            <DeepfakeNews news={news} loading={loadingNews} />
            <PricingSection />
          </div>
        )}
        {activeTab === 'profile' && <ProfilePage user={user} history={history} />}
        {activeTab === 'history' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-orbitron text-white">Neural Vault</h2>
            {history.length === 0 ? <p className="text-slate-500 font-orbitron text-xs uppercase">No records found.</p> : 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {history.map((h, i) => (
                  <div key={i} className="glass-panel p-4 rounded-xl border border-slate-800 flex justify-between items-center">
                    <div>
                      <p className="text-white font-bold">{h.metadata.potentialModel || 'Unknown'}</p>
                      <p className="text-[10px] text-slate-500 uppercase">{h.verdict} • {h.modality}</p>
                    </div>
                    <button onClick={() => { setResult(h); setAppState(AppState.RESULT); setActiveTab('dashboard'); }} className="text-sky-400 text-xs font-orbitron uppercase tracking-widest">Retrieve Report</button>
                  </div>
                ))}
              </div>
            }
          </div>
        )}
        {activeTab === 'notifications' && (
          <NotificationPage 
            notifications={notifications} 
            onMarkAsRead={(id) => setNotifications(prev => prev.map(n => n.id === id ? {...n, read: true} : n))} 
            onClearAll={() => setNotifications([])}
            onNavigateToResult={(res) => { setResult(res); setAppState(AppState.RESULT); setActiveTab('dashboard'); }}
          />
        )}
      </main>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-lg px-4">
        <div className="glass-panel bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-2 shadow-2xl flex items-center justify-between">
          <NavBtn active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} icon="fa-gauge-high" label="Dash" />
          <NavBtn active={activeTab === 'history'} onClick={() => setActiveTab('history')} icon="fa-vault" label="Vault" />
          <NavBtn active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} icon="fa-id-card-clip" label="Node" />
          <NavBtn active={activeTab === 'notifications'} onClick={() => setActiveTab('notifications')} icon="fa-bell" label="Alerts" badge={notifications.filter(n => !n.read).length} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const NavBtn: React.FC<{active: boolean, onClick: () => void, icon: string, label: string, badge?: number}> = ({active, onClick, icon, label, badge}) => (
  <button onClick={onClick} className={`flex flex-col items-center justify-center py-2 px-4 rounded-xl transition-all flex-1 relative ${active ? 'text-sky-400 bg-sky-500/10' : 'text-slate-500'}`}>
    <i className={`fa-solid ${icon} text-lg mb-1`}></i>
    <span className="text-[8px] font-orbitron uppercase tracking-widest font-bold">{label}</span>
    {badge ? <span className="absolute top-1 right-3 w-4 h-4 bg-rose-500 text-white text-[8px] rounded-full flex items-center justify-center border border-slate-900">{badge}</span> : null}
  </button>
);

export default App;
