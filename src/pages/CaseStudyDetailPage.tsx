import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Quote, 
} from 'lucide-react';
import { getCaseStudyBySlug, caseStudiesData } from '../lib/caseStudiesData';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { Hero3DBackground } from '../components/3d/Hero3DBackground';
import { MagneticButton } from '../components/ui/MagneticButton';
import { CallToActionBanner } from '../components/CallToActionBanner';

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = getCaseStudyBySlug(slug || '');

  if (!caseStudy) {
    return (
      <div className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-extrabold text-white">Case Study Not Found</h1>
        <p className="text-slate-400 mt-2 text-sm">We couldn’t find the requested case study.</p>
        <div className="mt-6">
          <Link to="/case-studies">
            <MagneticButton variant="primary">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Case Studies</span>
            </MagneticButton>
          </Link>
        </div>
      </div>
    );
  }

  // Find next case study for footer navigation
  const currentIndex = caseStudiesData.findIndex((c) => c.slug === caseStudy.slug);
  const nextCaseStudy = caseStudiesData[(currentIndex + 1) % caseStudiesData.length];

  return (
    <div className="min-h-screen pt-20">
      {/* Dynamic Hero Section */}
      <section className="relative py-16 lg:py-20 border-b border-white/10 overflow-hidden">
        <Hero3DBackground theme="california" density="low" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
            <Link to="/case-studies" className="hover:text-[#536DFE] transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              All Case Studies
            </Link>
            <span>/</span>
            <span className="text-[#536DFE]">{caseStudy.industry}</span>
            <span>/</span>
            <span className="text-white font-bold">{caseStudy.client}</span>
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-500/30">
                {caseStudy.industry}
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-slate-300 border border-white/10">
                Timeframe: {caseStudy.timeframe}
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
            >
              {caseStudy.title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed"
            >
              {caseStudy.summary}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Primary Key Stats Strip */}
      <section className="py-10 bg-slate-900/80 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caseStudy.stats.map((stat, i) => (
              <div 
                key={i}
                className="bg-slate-950/80 border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-lg"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {stat.label}
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white mt-2">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-[11px] text-[#FF6B6B] mt-1 font-semibold">
                  Verified Metric
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Narrative Breakdown */}
      <section className="py-20 bg-[#0A0D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Featured Case Study Hero Banner */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950 max-h-[440px]">
                <img
                  src={caseStudy.thumbnail}
                  alt={caseStudy.client}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 1. Challenge */}
              <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 shadow-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-[#536DFE]">
                  Phase 01: The Bottleneck
                </span>
                <h2 className="text-2xl font-extrabold text-white tracking-tight mt-1 mb-4">
                  The Core Challenge
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* 2. Strategy */}
              <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 shadow-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-[#536DFE]">
                  Phase 02: Strategic Architecture
                </span>
                <h2 className="text-2xl font-extrabold text-white tracking-tight mt-1 mb-4">
                  The Growth Strategy
                </h2>
                <ul className="space-y-4">
                  {caseStudy.strategy.map((strat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                      <div className="w-6 h-6 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-[#536DFE] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <span className="leading-relaxed">{strat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Execution Timeline */}
              <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 shadow-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-[#536DFE]">
                  Phase 03: Implementation
                </span>
                <h2 className="text-2xl font-extrabold text-white tracking-tight mt-1 mb-6">
                  Execution & Rollout
                </h2>

                <div className="space-y-6 border-l-2 border-indigo-500/30 pl-6 ml-2">
                  {caseStudy.execution.map((phase, i) => (
                    <div key={i} className="relative">
                      <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#3D5AFE] border-2 border-slate-900 ring-2 ring-indigo-500/40" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#536DFE]">
                        {phase.phase}
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        {phase.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                        {phase.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Results & Executive Overview */}
              <div className="bg-gradient-to-br from-slate-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Phase 04: The Outcome
                </span>
                <h2 className="text-2xl font-extrabold text-white tracking-tight mt-1 mb-4">
                  Measurable Business Impact
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {caseStudy.resultsOverview}
                </p>

                {/* Client Quote Callout */}
                {caseStudy.testimonial && (
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <Quote className="w-8 h-8 text-[#FF6B6B] mb-3 opacity-80" />
                    <blockquote className="text-base sm:text-lg italic font-medium text-slate-200 leading-relaxed">
                      "{caseStudy.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3 mt-4">
                      <img
                        src={caseStudy.testimonial.avatar}
                        alt={caseStudy.testimonial.author}
                        className="w-10 h-10 rounded-full object-cover border border-[#FF6B6B]/40"
                      />
                      <div>
                        <div className="text-xs font-bold text-white">
                          {caseStudy.testimonial.author}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {caseStudy.testimonial.role}, {caseStudy.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Meta Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-900/85 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl sticky top-28">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 pb-3 border-b border-white/10">
                  Project Snapshot
                </h3>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-slate-400 font-semibold block">Client Partner</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">{caseStudy.client}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 font-semibold block">Vertical / Industry</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">{caseStudy.industry}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 font-semibold block">Services Deployed</span>
                    <span className="text-sm font-bold text-[#536DFE] mt-0.5 block">{caseStudy.serviceName}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 font-semibold block">Engagement Duration</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">{caseStudy.timeframe}</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-white block mb-3">
                    Technologies & Tools Used
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {caseStudy.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Consultation trigger */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link to="/contact">
                    <MagneticButton variant="sunset" size="md" className="w-full shadow-lg shadow-[#FF6B6B]/25">
                      <span>Achieve Similar Results</span>
                      <ArrowRight className="w-4 h-4" />
                    </MagneticButton>
                  </Link>
                </div>
              </div>

              {/* Next Case Study Preview Card */}
              {nextCaseStudy && (
                <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Next Case Study
                  </span>
                  <h4 className="text-sm font-bold text-white line-clamp-2">
                    {nextCaseStudy.title}
                  </h4>
                  <Link
                    to={`/case-studies/${nextCaseStudy.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#536DFE] hover:text-indigo-300 mt-3 hover:underline"
                  >
                    Read Next Study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer Call to Action */}
      <CallToActionBanner
        title={`Scale Your Enterprise Like ${caseStudy.client}`}
        subtitle="Book a consultation with WEST WARD WORKS senior strategy partners to audit your current performance channels."
        primaryButtonText="Schedule Your Strategy Call"
      />
    </div>
  );
};
