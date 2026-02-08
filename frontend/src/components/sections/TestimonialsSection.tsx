"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const colorMap: Record<string, string> = {
  sky: "bg-sky-500/20 text-sky-400 border-sky-500/30",
  indigo: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  emerald: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
};

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t('landing.testimonials.item1.quote'),
      author: t('landing.testimonials.item1.author'),
      role: t('landing.testimonials.item1.role'),
      org: t('landing.testimonials.item1.org'),
      initials: "SC",
      color: "sky"
    },
    {
      quote: t('landing.testimonials.item2.quote'),
      author: t('landing.testimonials.item2.author'),
      role: t('landing.testimonials.item2.role'),
      org: t('landing.testimonials.item2.org'),
      initials: "MR",
      color: "indigo"
    },
    {
      quote: t('landing.testimonials.item3.quote'),
      author: t('landing.testimonials.item3.author'),
      role: t('landing.testimonials.item3.role'),
      org: t('landing.testimonials.item3.org'),
      initials: "EW",
      color: "emerald"
    }
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-6">
            {t('landing.testimonials.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
            {t('landing.testimonials.title')}{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              {t('landing.testimonials.titleHighlight')}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-700" />
              
              <p className="text-slate-300 italic mb-6 leading-relaxed relative z-10">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${colorMap[t.color]} border flex items-center justify-center font-bold text-lg`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-200">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                  <p className="text-xs text-sky-400">{t.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}