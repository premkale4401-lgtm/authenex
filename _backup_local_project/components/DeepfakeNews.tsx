
import React from 'react';
import { NewsItem } from '../types';

interface DeepfakeNewsProps {
  news: NewsItem[];
  loading: boolean;
}

export const DeepfakeNews: React.FC<DeepfakeNewsProps> = ({ news, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-pulse">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="glass-panel p-6 rounded-2xl h-48 bg-slate-800/20 border border-slate-800"></div>
        ))}
      </div>
    );
  }

  if (!news || news.length === 0) {
    return (
      <div className="text-center py-12 glass-panel rounded-2xl border border-slate-800">
        <i className="fa-solid fa-newspaper text-4xl text-slate-600 mb-4"></i>
        <p className="text-slate-400">No recent cases detected in the database for Maharashtra.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {news.map((item, idx) => (
        <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-sky-500/30 transition-all flex flex-col group">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-orbitron text-sky-400 bg-sky-500/10 px-2 py-1 rounded tracking-widest uppercase">
              {item.location}
            </span>
            <span className="text-[10px] text-slate-500 font-orbitron">{item.date}</span>
          </div>
          <h4 className="text-lg font-bold text-slate-200 mb-3 group-hover:text-white transition-colors">{item.title}</h4>
          <p className="text-sm text-slate-400 mb-6 flex-1 line-clamp-3 leading-relaxed">
            {item.summary}
          </p>
          <div className="pt-4 border-t border-slate-800 mt-auto">
            <a 
              href={item.sourceLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-orbitron text-sky-500 hover:text-sky-400 flex items-center gap-2 uppercase tracking-wider"
            >
              Forensic Source <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
