import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote, Globe2, Sparkles } from 'lucide-react';
import { testimonialsData } from '../lib/testimonialsData';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const total = testimonialsData.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, total]);

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials-section" className="py-20 bg-slate-950/60 border-y border-white/10 relative overflow-hidden">
      {/* Background ambiance with California palette */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2B3A8F]/15 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6B6B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2 border border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              Client Endorsements
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trusted by Ambitious Leaders Worldwide
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Hear directly from founders, CMOs, and growth executives who scaled their revenue and digital infrastructure with WEST WARD WORKS.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => {
                setIsAutoPlaying(false);
                prevSlide();
              }}
              className="w-11 h-11 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#3D5AFE]/60 shadow-lg hover:bg-slate-800 transition-all focus:outline-none cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                setIsAutoPlaying(false);
                nextSlide();
              }}
              className="w-11 h-11 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#3D5AFE]/60 shadow-lg hover:bg-slate-800 transition-all focus:outline-none cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Showcase Card */}
        <div 
          className="relative bg-slate-900/85 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl shadow-black/80 overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="absolute -top-6 -right-6 text-slate-800 pointer-events-none">
            <Quote className="w-48 h-48 opacity-20" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Quote & Details */}
              <div className="lg:col-span-8 space-y-6">
                {/* Rating & Highlight Pill */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {current.metricHighlight && (
                    <span className="text-xs font-extrabold text-[#536DFE] bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-500/30">
                      Impact: {current.metricHighlight}
                    </span>
                  )}
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <Globe2 className="w-3.5 h-3.5 text-slate-400" />
                    {current.country}
                  </span>
                </div>

                {/* Main Quote Text */}
                <blockquote className="text-lg sm:text-2xl font-bold text-white leading-relaxed tracking-tight">
                  "{current.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#3D5AFE]/40 shadow-sm"
                  />
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {current.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium">
                      {current.role}, <span className="font-semibold text-slate-300">{current.company}</span>
                    </p>
                    <p className="text-[11px] text-[#536DFE] font-semibold mt-0.5">
                      Service: {current.serviceReceived}
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Trust Column */}
              <div className="lg:col-span-4 bg-slate-950/80 rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Client Partnership
                  </span>
                  <div className="text-xl font-black text-white mt-1">
                    {current.company}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Headquartered in {current.country}
                  </div>
                </div>

                <div className="p-3 bg-slate-900/90 rounded-xl border border-white/10 shadow-sm">
                  <div className="text-[11px] font-semibold text-slate-400">Verified Outcome</div>
                  <div className="text-sm font-extrabold text-[#536DFE] mt-0.5">
                    {current.metricHighlight || 'Consistent Positive ROI'}
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 leading-tight">
                  Part of our proud cohort of 40+ satisfied partners across 7+ global markets.
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-white/10">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(i);
                }}
                className={`h-2 rounded-full transition-all focus:outline-none cursor-pointer ${
                  i === currentIndex ? 'w-8 bg-[#3D5AFE]' : 'w-2 bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
