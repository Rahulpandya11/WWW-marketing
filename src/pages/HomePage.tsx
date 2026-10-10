import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Award,
  Zap
} from 'lucide-react';
import { Hero3DBackground } from '../components/3d/Hero3DBackground';
import { TrustBar } from '../components/TrustBar';
import { ServiceCard } from '../components/ServiceCard';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { MagneticButton } from '../components/ui/MagneticButton';
import { TextReveal } from '../components/ui/TextReveal';
import { servicesData, getServicesByCategory } from '../lib/servicesData';
import { caseStudiesData } from '../lib/caseStudiesData';
import { ServiceCategory } from '../types';

export const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'All'>('All');

  // Featured 3 case studies for Home
  const featuredCaseStudies = caseStudiesData.slice(0, 3);

  // Filtered services for the home showcase
  const displayedServices = activeCategory === 'All' 
    ? servicesData.slice(0, 8) 
    : getServicesByCategory(activeCategory);

  const categories: { label: string; value: ServiceCategory | 'All' }[] = [
    { label: 'All Services (16)', value: 'All' },
    { label: 'Digital Growth', value: 'Digital Growth' },
    { label: 'Creative & Brand', value: 'Creative & Brand' },
    { label: 'Web & Technology', value: 'Web & Technology' },
  ];

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      {/* ==========================================
          HERO SECTION WITH 3D BACKGROUND
          ========================================== */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-16 lg:py-24">
        {/* Interactive 3D WebGL Canvas Background */}
        <Hero3DBackground theme="california" density="medium" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl mx-auto text-center">
            {/* Top Announcement Pill */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/10 shadow-lg text-xs font-semibold text-slate-200 mb-6 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#3D5AFE] animate-ping" />
              <span className="text-[#536DFE] font-bold">Generative Engine GEO + AI Ads</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">West Coast Digital Marketing</span>
            </motion.div>

            {/* Main Headline with Text Reveal Animation */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15]">
              <TextReveal
                text="Supercharge Your Digital Growth with"
                by="words"
                duration={0.6}
              />{' '}
              <span className="gradient-text-sunset">
                <TextReveal
                  text="AI-Powered Marketing"
                  by="words"
                  delay={0.25}
                  duration={0.6}
                />
              </span>{' '}
              <TextReveal
                text="& Next-Gen Web."
                by="words"
                delay={0.45}
                duration={0.6}
              />
            </h1>

            {/* Tagline / Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-400 mt-6 leading-relaxed max-w-2xl mx-auto font-normal"
            >
              WEST WARD WORKS engineers autonomous AI ad campaigns, ChatGPT & Gemini optimization, high-retention creative, and sub-second web platforms that convert visitors into predictable enterprise revenue.
            </motion.p>

            {/* CTA Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact">
                <MagneticButton variant="sunset" size="lg" className="w-full sm:w-auto shadow-xl shadow-[#FF6B6B]/25">
                  <span>Schedule Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>

              <Link to="/services">
                <MagneticButton variant="secondary" size="lg" className="w-full sm:w-auto">
                  <span>Explore All 16 Services</span>
                </MagneticButton>
              </Link>
            </motion.div>

            {/* Micro Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3D5AFE]" />
                <span>40+ Clients Across 7+ Countries</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3D5AFE]" />
                <span>Zero Long-Term Lock-in</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B6B]" />
                <span>Dedicated C-Level Strategist</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          TRUST BAR / STAT STRIP WITH SCROLL-DRIVEN 3D
          ========================================== */}
      <TrustBar />

      {/* ==========================================
          SERVICES OVERVIEW SECTION (BY CATEGORY)
          ========================================== */}
      <section id="services-overview" className="py-20 bg-slate-950/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2 border border-indigo-500/30">
                <Zap className="w-3.5 h-3.5" />
                Specialized Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Three Pillars of High-Velocity Growth
              </h2>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                Organized into Digital Growth, Creative & Brand, and Web & Technology — built for companies ready to dominate their vertical.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#536DFE] hover:text-[#3D5AFE] mt-4 md:mt-0 group"
            >
              <span>View full directory of 16 services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-[#3D5AFE] text-white shadow-lg shadow-[#3D5AFE]/30'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Service Cards Grid with 3D Tilt */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedServices.map((service, idx) => (
              <ServiceCard key={service.id} service={service} idx={idx} />
            ))}
          </div>

          {/* Bottom Link to Services Page */}
          <div className="mt-12 text-center">
            <Link to="/services">
              <MagneticButton variant="secondary" size="md">
                <span>Browse All 16 Comprehensive Services & Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          FEATURED CASE STUDIES / PORTFOLIO PREVIEW
          ========================================== */}
      <section id="case-studies-preview" className="py-20 bg-[#0A0D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2 border border-indigo-500/30">
                <Award className="w-3.5 h-3.5" />
                Proven Case Studies
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Real Revenue. Verified Attribution.
              </h2>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                Inspect the actual frameworks, challenges, and multi-million dollar results delivered for our partners.
              </p>
            </div>

            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#536DFE] hover:text-[#3D5AFE] mt-4 md:mt-0 group"
            >
              <span>Explore all case studies</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 3 Featured Case Studies Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCaseStudies.map((cs, idx) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          CLIENT TESTIMONIALS CAROUSEL
          ========================================== */}
      <TestimonialsCarousel />

      {/* ==========================================
          PRE-FOOTER CALL TO ACTION BANNER
          ========================================== */}
      <CallToActionBanner />
    </div>
  );
};
