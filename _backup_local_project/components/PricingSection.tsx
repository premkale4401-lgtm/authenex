
import React, { useState } from 'react';

export const PricingSection: React.FC = () => {
  const [showBillingDemo, setShowBillingDemo] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const runDemoBilling = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowBillingDemo(true);
    }, 2000);
  };

  return (
    <section id="pricing" className="py-24 scroll-mt-24">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold font-orbitron mb-4">Join the Forensic Network</h3>
        <p className="text-slate-500 text-sm font-orbitron tracking-widest uppercase">Select your authentication protocol</p>
        <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {/* Free Tier */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col relative overflow-hidden group">
          <div className="mb-8">
            <h4 className="text-xl font-bold font-orbitron text-slate-300">Standard Access</h4>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold font-orbitron text-white">$0</span>
              <span className="ml-2 text-slate-500 font-orbitron text-[10px] uppercase">/ Lifetime</span>
            </div>
          </div>

          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3 text-sm text-slate-400">
              <i className="fa-solid fa-check text-emerald-500"></i>
              Single Image Forensic Scan
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-400">
              <i className="fa-solid fa-check text-emerald-500"></i>
              AI Probability Percentage
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-400">
              <i className="fa-solid fa-check text-emerald-500"></i>
              Local History (20 items)
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-600 opacity-50">
              <i className="fa-solid fa-lock text-[10px]"></i>
              <span className="line-through">Bulk Analysis</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-600 opacity-50">
              <i className="fa-solid fa-lock text-[10px]"></i>
              <span className="line-through">Deep EXIF Forensics</span>
            </li>
          </ul>

          <button className="w-full py-4 px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-orbitron text-xs uppercase tracking-widest transition-all">
            Current Plan
          </button>
        </div>

        {/* Premium Tier */}
        <div className="glass-panel p-8 rounded-3xl border-2 border-sky-500/50 bg-sky-500/5 flex flex-col relative overflow-hidden group shadow-[0_0_30px_rgba(14,165,233,0.1)]">
          <div className="absolute top-0 right-0 px-4 py-1 bg-sky-500 text-white text-[10px] font-orbitron uppercase tracking-widest rounded-bl-xl">
            Recommended
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-bold font-orbitron text-sky-400">Premium Core</h4>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold font-orbitron text-white">$29</span>
              <span className="ml-2 text-slate-500 font-orbitron text-[10px] uppercase">/ Monthly</span>
            </div>
          </div>

          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <i className="fa-solid fa-check-double text-sky-400"></i>
              Unlimited Laboratory Scans
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <i className="fa-solid fa-check-double text-sky-400"></i>
              Batch Processing (Up to 50 files)
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <i className="fa-solid fa-check-double text-sky-400"></i>
              Deep Metadata & GPS Analysis
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <i className="fa-solid fa-check-double text-sky-400"></i>
              API Access for Developers
            </li>
            <li className="flex items-center gap-3 text-sm text-sky-400/80 font-medium">
              <i className="fa-solid fa-bolt-lightning animate-pulse"></i>
              Priority Neural Queue
            </li>
          </ul>

          <div className="flex flex-col gap-3">
            <button className="w-full py-4 px-6 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-orbitron text-xs uppercase tracking-widest transition-all shadow-lg shadow-sky-600/30">
              Upgrade to Premium
            </button>
            <button 
              onClick={runDemoBilling}
              disabled={isProcessing}
              className="w-full py-2 text-sky-400/50 hover:text-sky-400 rounded-xl font-orbitron text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <i className="fa-solid fa-spinner animate-spin"></i>
              ) : (
                <i className="fa-solid fa-vial"></i>
              )}
              {isProcessing ? 'Processing Transaction...' : 'Run Demo Billing Test'}
            </button>
          </div>
        </div>
      </div>

      {/* Billing Demo Modal */}
      {showBillingDemo && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowBillingDemo(false)}></div>
          <div className="glass-panel p-8 rounded-3xl border border-sky-500/30 max-w-md w-full relative animate-in zoom-in-95 duration-300 text-center">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/50">
              <i className="fa-solid fa-shield-check text-4xl text-emerald-500"></i>
            </div>
            <h4 className="text-2xl font-bold font-orbitron mb-2">Demo Billing Success</h4>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Transaction ID: <span className="text-sky-400 font-mono">AUTH-9XJ2-KM01</span><br/>
              Network: <span className="text-emerald-500 uppercase font-orbitron text-[10px]">Verified Production Node</span>
            </p>
            <div className="space-y-4 text-left glass-panel p-4 rounded-xl border-slate-800 mb-8 bg-black/40">
              <div className="flex justify-between text-[10px] font-orbitron uppercase">
                <span className="text-slate-500">Premium Subscription</span>
                <span className="text-white">$29.00</span>
              </div>
              <div className="flex justify-between text-[10px] font-orbitron uppercase">
                <span className="text-slate-500">Forensic Surcharge</span>
                <span className="text-white">$0.00</span>
              </div>
              <div className="pt-2 border-t border-slate-800 flex justify-between font-bold font-orbitron">
                <span className="text-sky-400 uppercase text-xs">Total Charged</span>
                <span className="text-white">$29.00</span>
              </div>
            </div>
            <button 
              onClick={() => setShowBillingDemo(false)}
              className="w-full py-4 bg-sky-600 rounded-xl font-orbitron text-xs uppercase tracking-widest text-white"
            >
              Return to Control Panel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
