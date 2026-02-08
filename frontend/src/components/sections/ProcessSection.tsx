"use client";

import { motion } from "framer-motion";
import { Shield, Cpu, FileCheck, Lock, Unlock, Database, Eye, Zap, Activity, FileText, Code, Link } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Shield,
      title: t('landing.process.step1.title'),
      description: t('landing.process.step1.description'),
      features: [
        { icon: Lock, text: t('landing.process.step1.features.f1') },
        { icon: Database, text: t('landing.process.step1.features.f2') },
        { icon: Unlock, text: t('landing.process.step1.features.f3') }
      ]
    },
    {
      icon: Cpu,
      title: t('landing.process.step2.title'),
      description: t('landing.process.step2.description'),
      features: [
        { icon: Eye, text: t('landing.process.step2.features.f1') },
        { icon: Zap, text: t('landing.process.step2.features.f2') },
        { icon: Activity, text: t('landing.process.step2.features.f3') }
      ]
    },
    {
      icon: FileCheck,
      title: t('landing.process.step3.title'),
      description: t('landing.process.step3.description'),
      features: [
        { icon: FileText, text: t('landing.process.step3.features.f1') },
        { icon: Code, text: t('landing.process.step3.features.f2') },
        { icon: Link, text: t('landing.process.step3.features.f3') }
      ]
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6"
          >
            <Activity className="w-4 h-4" />
            {t('landing.process.badge')}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t('landing.process.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{t('landing.process.titleHighlight')}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            {t('landing.process.description')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono text-sm z-10 group-hover:border-blue-500 transition-colors">
                0{index + 1}
              </div>

              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 mb-8">{step.description}</p>

                <ul className="space-y-3">
                  {step.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-gray-300">
                      <feature.icon className="w-4 h-4 text-blue-400" />
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}