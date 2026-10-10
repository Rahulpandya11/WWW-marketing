import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, PhoneCall, ShieldCheck } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

interface CallToActionBannerProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  className?: string;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  title = 'Ready to Scale Your Digital Revenue & Inbound Pipeline?',
  subtitle = 'Join 40+ forward-thinking brands across 7+ countries. Let WEST WARD WORKS build your autonomous AI marketing engine or ultra-fast web application.',
  primaryButtonText = 'Schedule Your Free Growth Audit',
  className = '',
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white p-8 sm:p-14 overflow-hidden border border-slate-800 shadow-2xl"
        >
          {/* Decorative California glow blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3D5AFE]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF6B6B]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Access to Senior Partners
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl leading-relaxed">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link to="/contact">
                <MagneticButton variant="sunset" size="lg" className="w-full sm:w-auto shadow-lg shadow-[#FF6B6B]/25">
                  <span>{primaryButtonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>

              <Link to="/case-studies">
                <MagneticButton variant="secondary" size="lg" className="w-full sm:w-auto">
                  <PhoneCall className="w-4 h-4 text-[#536DFE]" />
                  <span>View Verified Results</span>
                </MagneticButton>
              </Link>
            </div>

            {/* Reassurance points */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3D5AFE]" />
                <span>No long-term lock-in contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFB86B]" />
                <span>Custom 90-day growth roadmap included</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDA & Confidentiality guaranteed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
