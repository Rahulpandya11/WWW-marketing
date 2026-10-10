import React, { useState } from 'react';
import { Award } from 'lucide-react';
import { caseStudiesData } from '../lib/caseStudiesData';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { Hero3DBackground } from '../components/3d/Hero3DBackground';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { TextReveal } from '../components/ui/TextReveal';
import { ServiceCategory } from '../types';

export const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'All'>('All');

  const filteredCaseStudies = selectedCategory === 'All'
    ? caseStudiesData
    : caseStudiesData.filter((cs) => cs.serviceCategory === selectedCategory);

  const filterTabs: { label: string; value: ServiceCategory | 'All' }[] = [
    { label: 'All Case Studies (6)', value: 'All' },
    { label: 'Digital Growth', value: 'Digital Growth' },
    { label: 'Creative & Brand', value: 'Creative & Brand' },
    { label: 'Web & Technology', value: 'Web & Technology' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Header with 3D Background */}
      <section className="relative py-16 lg:py-20 border-b border-white/10 overflow-hidden">
        <Hero3DBackground theme="california" density="low" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/80 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-500/30">
            <Award className="w-3.5 h-3.5" />
            Verified Case Studies & ROI
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            <TextReveal text="Documented Outcomes." by="words" duration={0.6} />{' '}
            <span className="gradient-text-sunset">
              <TextReveal text="Exponential ROI." by="words" delay={0.2} duration={0.6} />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Deep-dive case studies breaking down the exact challenges, engineering strategies, and multi-million dollar growth metrics delivered for our client partners by WEST WARD WORKS.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedCategory(tab.value)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  selectedCategory === tab.value
                    ? 'bg-[#3D5AFE] text-white shadow-lg shadow-[#3D5AFE]/30'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-[#0A0D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy, idx) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer Call to Action */}
      <CallToActionBanner
        title="Ready to Become Our Next Growth Case Study?"
        subtitle="Schedule a 30-minute growth consultation. WEST WARD WORKS will analyze your current ad spend, tech stack, and organic reach to map out your highest-ROI growth opportunities."
        primaryButtonText="Schedule Your Growth Strategy Audit"
      />
    </div>
  );
};
