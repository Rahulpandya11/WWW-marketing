import React from 'react';
import { motion } from 'motion/react';
import { AnimatedCounter } from './ui/AnimatedCounter';
import { Users2, Globe2, Briefcase, Award, Star } from 'lucide-react';
import { Scroll3DCanvas } from './3d/Scroll3DCanvas';

interface TrustBarProps {
  className?: string;
  variant?: 'light' | 'dark' | 'card';
}

export const TrustBar: React.FC<TrustBarProps> = ({ className = '' }) => {
  const stats = [
    {
      icon: <Users2 className="w-5 h-5 text-[#536DFE]" />,
      value: 40,
      suffix: '+',
      label: 'Clients Served',
      subtitle: 'Fast-growth brands & enterprises',
      highlight: true,
    },
    {
      icon: <Globe2 className="w-5 h-5 text-blue-400" />,
      value: 7,
      suffix: '+',
      label: 'Countries Served',
      subtitle: 'US, UK, DE, SG, AU, CA, FR',
      highlight: true,
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#536DFE]" />,
      value: 180,
      suffix: '+',
      label: 'Projects Delivered',
      subtitle: 'Web, AI, ads & campaigns',
      highlight: false,
    },
    {
      icon: <Award className="w-5 h-5 text-[#FFB86B]" />,
      value: 6,
      suffix: '+',
      label: 'Years of Experience',
      subtitle: 'Pioneering digital excellence',
      highlight: false,
    },
    {
      icon: <Star className="w-5 h-5 text-emerald-400 fill-emerald-400" />,
      value: 98,
      suffix: '%',
      label: 'Client Retention Rate',
      subtitle: 'Long-term partnership growth',
      highlight: false,
    },
  ];

  return (
    <section id="trust-bar" className={`w-full py-10 relative z-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Scroll-Driven 3D Interactive Canvas floating on side */}
        <div className="hidden lg:block absolute -top-16 -right-10 w-44 h-44 z-30 pointer-events-none">
          <Scroll3DCanvas className="w-full h-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative bg-slate-900/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/70 p-6 sm:p-8 overflow-hidden"
        >
          {/* Subtle California Sunset accent bar on top edge */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2B3A8F] via-[#3D5AFE] to-[#FF6B6B]" />

          {/* Top Label */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#536DFE] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#3D5AFE] animate-pulse" />
                Proven Track Record
              </span>
              <h3 className="text-lg font-extrabold text-white tracking-tight mt-0.5">
                Engineered for Measurable Impact Worldwide
              </h3>
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Verified outcomes backed by real attribution and audits
            </div>
          </div>

          {/* 5-Column Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div 
                key={stat.label}
                className={`relative flex flex-col ${
                  idx === 0 ? 'border-l-2 border-[#3D5AFE] pl-4 sm:pl-5' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-950/60 flex items-center justify-center shrink-0 border border-indigo-500/30">
                    {stat.icon}
                  </div>
                  {stat.highlight && (
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-500/30">
                      Core Trust
                    </span>
                  )}
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    className="text-white"
                  />
                </div>

                <div className="text-sm font-bold text-slate-200 mt-1">
                  {stat.label}
                </div>

                <div className="text-xs text-slate-400 mt-0.5 font-medium">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos Banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Trusted by disruptive teams across 7+ nations:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-extrabold text-slate-400 tracking-wider">
              <span className="hover:text-white transition-colors">LUMINAPAY</span>
              <span className="hover:text-white transition-colors">AURAHEALTH</span>
              <span className="hover:text-white transition-colors">SOLSTICE D2C</span>
              <span className="hover:text-white transition-colors">NEXIS CLOUD</span>
              <span className="hover:text-white transition-colors">SYNTHETIX AI</span>
              <span className="hover:text-white transition-colors">KURA BOTANICALS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
