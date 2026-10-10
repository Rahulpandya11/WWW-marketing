import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { CaseStudy } from '../types';
import { AnimatedCounter } from './ui/AnimatedCounter';
import { TiltCard } from './ui/TiltCard';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  idx?: number;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, idx = 0 }) => {
  const primaryStat = caseStudy.stats.find((s) => s.highlight) || caseStudy.stats[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: 'easeOut' }}
      className="h-full"
    >
      <TiltCard
        maxTilt={5}
        className="h-full group flex flex-col bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-[#3D5AFE]/15 hover:border-[#3D5AFE]/50 overflow-hidden transition-all duration-300"
      >
        {/* Thumbnail with overlay badge */}
        <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950">
          <img
            src={caseStudy.thumbnail}
            alt={caseStudy.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-90" />

          {/* Top category badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950/80 text-white shadow-sm border border-white/15 backdrop-blur-md">
              {caseStudy.industry}
            </span>
          </div>

          {/* Primary Stat Callout Pill */}
          {primaryStat && (
            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md rounded-xl p-3 text-white flex items-center justify-between border border-white/15 shadow-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B6B] to-[#FFB86B] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-semibold text-slate-400">
                    {primaryStat.label}
                  </span>
                  <span className="text-lg font-black text-white leading-tight">
                    <AnimatedCounter
                      value={primaryStat.value}
                      prefix={primaryStat.prefix}
                      suffix={primaryStat.suffix}
                    />
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-amber-300 uppercase">
                Verified
              </span>
            </div>
          )}
        </div>

        {/* Body Content */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-semibold text-[#536DFE]">{caseStudy.client}</span>
              <span>{caseStudy.timeframe}</span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#536DFE] transition-colors leading-snug">
              {caseStudy.title}
            </h3>

            <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
              {caseStudy.summary}
            </p>

            {/* Technology tags */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {caseStudy.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Read Case Study Link */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 truncate max-w-[180px]">
              {caseStudy.serviceName}
            </span>
            <Link
              to={`/case-studies/${caseStudy.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#536DFE] group-hover:text-indigo-300 group-hover:translate-x-1 transition-all shrink-0"
            >
              Read Case Study
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </TiltCard>
    </motion.article>
  );
};
