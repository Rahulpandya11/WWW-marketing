import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Palette, 
  Code2, 
  TrendingUp,
} from 'lucide-react';
import { Hero3DBackground } from '../components/3d/Hero3DBackground';
import { ServiceCard } from '../components/ServiceCard';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { getServicesByCategory } from '../lib/servicesData';
import { TextReveal } from '../components/ui/TextReveal';

export const ServicesPage: React.FC = () => {
  const digitalGrowthServices = getServicesByCategory('Digital Growth');
  const creativeBrandServices = getServicesByCategory('Creative & Brand');
  const webTechServices = getServicesByCategory('Web & Technology');

  return (
    <div className="min-h-screen pt-20">
      {/* ==========================================
          HERO BANNER WITH 3D CANVAS
          ========================================== */}
      <section className="relative py-16 lg:py-20 border-b border-white/10 overflow-hidden">
        <Hero3DBackground theme="california" density="low" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/80 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-500/30"
          >
            <Sparkles className="w-3.5 h-3.5" />
            16 High-Performance Solutions
          </motion.div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            <TextReveal text="Capabilities Engineered for" by="words" duration={0.6} />{' '}
            <span className="gradient-text-sunset">
              <TextReveal text="Market Dominance" by="words" delay={0.2} duration={0.6} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            Explore our specialized agency services grouped into Digital Growth, Creative & Brand, and Web & Technology. Each capability is backed by senior strategists, predictive analytics, and bespoke engineering.
          </motion.p>

          {/* Quick jump anchor tags */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#category-digital-growth"
              className="px-4 py-2 rounded-full bg-slate-900/80 border border-white/10 text-xs font-bold text-slate-200 hover:border-[#3D5AFE] hover:text-white transition-colors shadow-lg cursor-pointer"
            >
              1. Digital Growth ({digitalGrowthServices.length})
            </a>
            <a
              href="#category-creative-brand"
              className="px-4 py-2 rounded-full bg-slate-900/80 border border-white/10 text-xs font-bold text-slate-200 hover:border-[#FF6B6B] hover:text-white transition-colors shadow-lg cursor-pointer"
            >
              2. Creative & Brand ({creativeBrandServices.length})
            </a>
            <a
              href="#category-web-technology"
              className="px-4 py-2 rounded-full bg-slate-900/80 border border-white/10 text-xs font-bold text-slate-200 hover:border-[#3D5AFE] hover:text-white transition-colors shadow-lg cursor-pointer"
            >
              3. Web & Technology ({webTechServices.length})
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          CATEGORY 1: DIGITAL GROWTH
          ========================================== */}
      <section id="category-digital-growth" className="py-16 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          <div className="border-l-4 border-[#3D5AFE] pl-4 sm:pl-6 mb-10">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#536DFE]">
              <TrendingUp className="w-4 h-4 text-[#3D5AFE]" />
              Category 01
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Digital Growth
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Autonomous AI marketing engines, generative search optimization (ChatGPT & Gemini), programmatic SEO, and high-ROI paid media on Google and Meta.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalGrowthServices.map((svc, idx) => (
              <ServiceCard key={svc.id} service={svc} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          CATEGORY 2: CREATIVE & BRAND
          ========================================== */}
      <section id="category-creative-brand" className="py-16 bg-slate-950/40 border-t border-white/10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          <div className="border-l-4 border-[#FF6B6B] pl-4 sm:pl-6 mb-10">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#FFB86B]">
              <Palette className="w-4 h-4 text-[#FF6B6B]" />
              Category 02
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Creative & Brand
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Unforgettable visual identities, viral short-form video reels, and high-impact experiential digital screen activations that captivate modern audiences.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {creativeBrandServices.map((svc, idx) => (
              <ServiceCard key={svc.id} service={svc} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          CATEGORY 3: WEB & TECHNOLOGY
          ========================================== */}
      <section id="category-web-technology" className="py-16 border-t border-white/10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          <div className="border-l-4 border-[#3D5AFE] pl-4 sm:pl-6 mb-10">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#536DFE]">
              <Code2 className="w-4 h-4 text-[#3D5AFE]" />
              Category 03
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Web & Technology
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              High-performance web platforms in Next.js & React, native mobile apps, conversion-engineered Shopify stores, 24/7 SLA maintenance, and cloud CDN hosting.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webTechServices.map((svc, idx) => (
              <ServiceCard key={svc.id} service={svc} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer Call to Action */}
      <CallToActionBanner
        title="Need a Bespoke Combination of Growth & Tech?"
        subtitle="WEST WARD WORKS frequently constructs custom omnichannel retainers combining Web Engineering, AI Marketing, and Creative Production for fast-growing brands."
        primaryButtonText="Request a Custom Agency Proposal"
      />
    </div>
  );
};
