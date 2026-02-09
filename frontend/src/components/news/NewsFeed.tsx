"use client";

import { useEffect, useState } from 'react';
import { getNews, NewsCategory, NewsItem } from '@/lib/news-service';
import NewsCard from './NewsCard';
import { cn } from '../../lib/utils';
import { Newspaper, Shield, Cpu, Scale, Briefcase, MessageCircle, Globe } from 'lucide-react';

import { useLanguage } from "@/context/LanguageContext";

export default function NewsFeed() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<NewsCategory | 'all'>('all');
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  // ... (useEffect remains same) ...

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const data = await getNews(activeCategory, 50); 
        setNews(data);
      } catch (error) {
        console.error("Failed to fetch news", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [activeCategory]);

  const categories = [
    { id: 'all', label: t('news.top'), icon: Globe },
    { id: 'deepfake', label: t('news.deepfake'), icon: Newspaper },
    { id: 'cybercrime', label: t('news.cybercrime'), icon: Shield },
    { id: 'ai', label: t('news.ai'), icon: Cpu },
    { id: 'government', label: t('news.policy'), icon: Scale },
    { id: 'cases', label: t('news.cases'), icon: Briefcase },
    { id: 'social', label: t('news.social'), icon: MessageCircle },
  ];



  return (
    <div className="space-y-8">
      {/* Premium Filter Bar */}
      <div className="relative mb-8 bg-gradient-to-r from-slate-900/80 to-slate-900/40 backdrop-blur-xl p-2 rounded-2xl border border-slate-800/60 shadow-2xl flex flex-nowrap overflow-x-auto no-scrollbar gap-2">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as NewsCategory | 'all')}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap border border-transparent",
                activeCategory === category.id
                  ? "bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg shadow-sky-500/20 border-white/10"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60 hover:border-slate-700/50"
              )}
            >
              <Icon className={cn("w-4 h-4", activeCategory === category.id ? "text-sky-400" : "")} />
              {category.label}
            </button>
          );
        })}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className="h-[350px] bg-slate-900/50 rounded-2xl border border-slate-800" />
           ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      )}
    </div>
  );
}
