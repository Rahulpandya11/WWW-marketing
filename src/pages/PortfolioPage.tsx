import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  X, 
  CheckCircle2, 
  Eye,
} from 'lucide-react';
import { portfolioData } from '../lib/portfolioData';
import { PortfolioItem } from '../types';
import { Hero3DBackground } from '../components/3d/Hero3DBackground';
import { TiltCard } from '../components/ui/TiltCard';
import { TextReveal } from '../components/ui/TextReveal';
import { CallToActionBanner } from '../components/CallToActionBanner';

type PortfolioCategory = 'All' | 'Web Development' | 'Graphic Design' | 'Video & Social' | 'Marketing Campaigns';

export const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('All');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? portfolioData
    : portfolioData.filter((item) => item.category === selectedCategory);

  const categories: PortfolioCategory[] = [
    'All',
    'Web Development',
    'Graphic Design',
    'Video & Social',
    'Marketing Campaigns',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Header with 3D Background */}
      <section className="relative py-16 lg:py-20 border-b border-white/10 overflow-hidden">
        <Hero3DBackground theme="california" density="low" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/80 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Showcase
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            <TextReveal text="Crafted for" by="words" duration={0.6} />{' '}
            <span className="gradient-text-sunset">
              <TextReveal text="Performance & Polish" by="words" delay={0.2} duration={0.6} />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Explore our featured portfolio spanning sub-second Next.js web applications, luxury visual identities, high-retention video assets, and multi-market interactive digital activations by WEST WARD WORKS.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#3D5AFE] text-white shadow-lg shadow-[#3D5AFE]/30'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-white/10'
                }`}
              >
                {cat === 'All' ? 'All Works (8)' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Portfolio with 3D Tilt */}
      <section className="py-16 bg-[#0A0D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => {
              const isLarge = idx === 0 || idx === 3;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setActiveModalItem(item)}
                  className={`cursor-pointer ${isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}`}
                >
                  <TiltCard
                    maxTilt={6}
                    className="h-full group bg-slate-900/80 backdrop-blur-md rounded-3xl border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-[#3D5AFE]/15 hover:border-[#3D5AFE]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Image Showcase */}
                    <div className={`relative overflow-hidden bg-slate-950 ${isLarge ? 'h-72 sm:h-80' : 'h-60'}`}>
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-90" />

                      {/* Category pill */}
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950/80 text-white border border-white/15 shadow-sm backdrop-blur-md">
                          {item.category}
                        </span>
                      </div>

                      {/* Hover inspection overlay prompt */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                        <Eye className="w-3.5 h-3.5 text-[#FFB86B]" />
                        <span>View Details</span>
                      </div>

                      {/* Result Pill if present */}
                      {item.results && (
                        <div className="absolute bottom-4 left-4 bg-slate-950/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/15 max-w-[80%] truncate">
                          <span className="text-[#FF6B6B]">Metric: </span>{item.results}
                        </div>
                      )}
                    </div>

                    {/* Body Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                        <span className="font-semibold text-[#536DFE]">{item.client}</span>
                        <span>{item.year}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#536DFE] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {item.summary}
                      </p>

                      {/* Technologies tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {item.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Detail Modal on Click */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-slate-900 rounded-3xl shadow-2xl border border-white/10 overflow-hidden my-8 text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/90 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 shadow-md transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Header */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-950">
                <img
                  src={activeModalItem.imageUrl}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FFB86B] text-white">
                    {activeModalItem.category}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1.5">
                    {activeModalItem.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Project Overview
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 mt-1 leading-relaxed">
                    {activeModalItem.summary}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#536DFE] mb-3">
                    Deliverables Completed
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalItem.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/80 text-xs text-slate-200 border border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Outcome / Metrics */}
                {activeModalItem.results && (
                  <div className="p-4 rounded-2xl bg-indigo-950/80 border border-indigo-500/30">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#536DFE] block">
                      Measurable Business Outcome
                    </span>
                    <span className="text-sm font-black text-white mt-0.5 block">
                      {activeModalItem.results}
                    </span>
                  </div>
                )}

                {/* Stack and Action Footer */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalItem.technologies.map((t) => (
                      <span key={t} className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors cursor-pointer border border-white/10"
                  >
                    Done Viewing
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Pre-footer Call to Action */}
      <CallToActionBanner
        title="Love What You See? Let's Build Yours."
        subtitle="Schedule a free 30-minute creative or engineering discovery call with WEST WARD WORKS. We'll outline how your project can be brought to life."
        primaryButtonText="Schedule Discovery Session"
      />
    </div>
  );
};
