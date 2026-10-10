import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
} from 'lucide-react';
import { getServiceBySlug } from '../lib/servicesData';
import { getCaseStudyBySlug } from '../lib/caseStudiesData';
import { Hero3DBackground } from '../components/3d/Hero3DBackground';
import { MagneticButton } from '../components/ui/MagneticButton';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { CallToActionBanner } from '../components/CallToActionBanner';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || '');

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // If service not found
  if (!service) {
    return (
      <div className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-4 text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-[#536DFE] mb-6">
          <Sparkles className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Service Not Found
        </h1>
        <p className="text-slate-400 mt-2 text-sm max-w-md mx-auto">
          We couldn't locate a service matching "{slug}". Explore our directory of 16 specialized agency capabilities.
        </p>
        <div className="mt-8">
          <Link to="/services">
            <MagneticButton variant="primary">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Services</span>
            </MagneticButton>
          </Link>
        </div>
      </div>
    );
  }

  // Resolve related case studies if any
  const relatedCaseStudies = (service.relatedCaseStudies || [])
    .map((csSlug) => getCaseStudyBySlug(csSlug))
    .filter((cs): cs is NonNullable<typeof cs> => Boolean(cs));

  return (
    <div className="min-h-screen pt-20">
      {/* ==========================================
          DYNAMIC HERO SECTION
          ========================================== */}
      <section className="relative py-16 lg:py-24 border-b border-white/10 overflow-hidden">
        {/* Dynamic 3D canvas themed to California palette */}
        <Hero3DBackground 
          theme="california" 
          density="medium" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
            <Link to="/services" className="hover:text-[#536DFE] transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              Services Directory
            </Link>
            <span>/</span>
            <span className="text-[#536DFE]">{service.category}</span>
            <span>/</span>
            <span className="text-white font-bold">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              {/* Category & Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-500/30">
                  {service.category}
                </span>
                {service.badge && (
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Title & Hero Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
              >
                {service.heroHeadline}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-lg text-slate-300 mt-6 leading-relaxed"
              >
                {service.fullDescription}
              </motion.p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link to="/contact">
                  <MagneticButton variant="sunset" size="lg" className="w-full sm:w-auto shadow-xl shadow-[#FF6B6B]/25">
                    <span>Schedule Consultation for {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                </Link>

                <a href="#service-process">
                  <MagneticButton variant="secondary" size="lg" className="w-full sm:w-auto">
                    <span>Our 4-Step Process</span>
                  </MagneticButton>
                </a>
              </div>
            </div>

            {/* Right Quick Summary Card */}
            <div className="lg:col-span-4 bg-slate-900/85 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#536DFE] mb-3">
                Key Strategic Benefits
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs text-slate-400 mb-1">Standard Delivery Timeline</div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#536DFE]" />
                  2-3 week sprint cycles with ongoing agile optimization
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          DEEP FEATURES & CAPABILITIES
          ========================================== */}
      <section className="py-20 bg-slate-950/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#536DFE]">
              Architectural Breakdown
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              What’s Included in Our {service.title} Practice
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Every deliverable is crafted in-house by senior domain specialists without outsourcing or cookie-cutter templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg hover:border-white/20 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-[#536DFE] mb-4 font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Deliverables Checklist Bar */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-white/10 shadow-lg">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
              Concrete Tangible Deliverables
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              You receive full commercial ownership, raw master design files, analytics dashboards, and documentation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.deliverables.map((deliv, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-950/80 border border-white/10 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200 leading-snug">
                    {deliv}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PRICING / RETAINER TIERS (IF PRESENT)
          ========================================== */}
      {service.tiers && service.tiers.length > 0 && (
        <section className="py-20 bg-[#0A0D14] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#536DFE]">
                Investment Framework
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
                Transparent Partnership Packages
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                Predictable monthly billing with zero hidden fees, custom scope adjustments, and no annual lock-in.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {service.tiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`rounded-3xl p-8 border flex flex-col justify-between transition-all ${
                    tier.popular
                      ? 'bg-slate-950 text-white border-[#3D5AFE]/60 ring-1 ring-[#3D5AFE]/40 shadow-2xl shadow-[#3D5AFE]/15 relative'
                      : 'bg-slate-900/80 text-white border-white/10 shadow-lg'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 right-8 px-3 py-1 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FFB86B] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
                      Most Selected
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-black text-white">
                      {tier.name}
                    </h3>
                    <p className="text-xs mt-2 text-slate-400">
                      {tier.description}
                    </p>

                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-4xl font-black tracking-tight text-white">{tier.price}</span>
                      {tier.period && (
                        <span className="text-xs font-semibold text-slate-400">
                          {tier.period}
                        </span>
                      )}
                    </div>

                    <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#536DFE]">
                        What's Included:
                      </div>
                      {tier.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 ${tier.popular ? 'text-[#FFB86B]' : 'text-emerald-400'}`} />
                          <span className="text-slate-200">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <Link to="/contact">
                      <MagneticButton
                        variant={tier.popular ? 'sunset' : 'secondary'}
                        size="md"
                        className="w-full"
                      >
                        <span>Apply for {tier.name}</span>
                        <ArrowRight className="w-4 h-4" />
                      </MagneticButton>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
          RELATED CASE STUDIES
          ========================================== */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20 bg-slate-950/40 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#536DFE]">
                  Verified Proof
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                  Relevant Case Studies
                </h2>
              </div>
              <Link
                to="/case-studies"
                className="text-xs font-bold text-[#536DFE] hover:text-[#3D5AFE] hover:underline mt-2 sm:mt-0 inline-flex items-center gap-1"
              >
                View all case studies <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedCaseStudies.map((cs, idx) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} idx={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
          FAQS ACCORDION
          ========================================== */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 bg-[#0A0D14] border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#536DFE]">
                Clarity & Expectations
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-white/10 rounded-2xl overflow-hidden transition-colors bg-slate-900/80 backdrop-blur-md"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left bg-slate-900/80 hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-white">
                        {faq.question}
                      </span>
                      <span className="p-1 rounded-full bg-slate-800 text-slate-400 shrink-0 ml-4">
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#536DFE]" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 bg-slate-950/80"
                        >
                          <div className="pt-3">{faq.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Conversion Banner */}
      <CallToActionBanner
        title={`Scale Your Business with ${service.title}`}
        subtitle="Schedule a 30-minute growth discovery call. WEST WARD WORKS will audit your current strategy and provide a bespoke execution roadmap."
        primaryButtonText={`Book Your ${service.title} Strategy Call`}
      />
    </div>
  );
};
