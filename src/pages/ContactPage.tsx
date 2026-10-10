import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Globe2, 
  Users2, 
  Sparkles,
  Award,
  AlertCircle
} from 'lucide-react';
import { servicesData } from '../lib/servicesData';
import { Hero3DBackground } from '../components/3d/Hero3DBackground';
import { MagneticButton } from '../components/ui/MagneticButton';
import { TextReveal } from '../components/ui/TextReveal';
import { ContactFormData } from '../types';

// Zod Schema Validation
const contactSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid work email address.' }),
  phone: z.string().min(7, { message: 'Please provide a valid phone number.' }),
  service: z.string().min(1, { message: 'Please select a service.' }),
  budget: z.string().min(1, { message: 'Please choose an estimated monthly budget.' }),
  timeline: z.string().min(1, { message: 'Please select an estimated project timeline.' }),
  message: z.string().min(10, { message: 'Please provide a brief message of at least 10 characters.' }),
});

export const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      service: 'AI Digital Marketing',
      budget: '$5,000 - $15,000 / mo',
      timeline: 'Within 2-4 weeks',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate real network submission with realistic loading delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitted(true);
    setSubmittedData(data);
    reset();

    // Trigger celebratory confetti burst with California palette
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2B3A8F', '#3D5AFE', '#FF6B6B', '#FFB86B'],
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header Banner */}
      <section className="relative py-16 lg:py-20 border-b border-white/10 overflow-hidden">
        <Hero3DBackground theme="california" density="low" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/80 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Partner Access
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            <TextReveal text="Let’s Build Your" by="words" duration={0.6} />{' '}
            <span className="gradient-text-sunset">
              <TextReveal text="Growth Engine" by="words" delay={0.2} duration={0.6} />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Schedule a growth audit or request a custom proposal from WEST WARD WORKS. We respond within 4 business hours with an initial architectural overview.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Form + Contact Info & Trust */}
      <section className="py-20 bg-[#0A0D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Form or Success State (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900/85 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl shadow-black/80">
                {isSubmitted && submittedData ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>

                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      Thank You, {submittedData.fullName}!
                    </h3>

                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your inquiry regarding <strong className="text-[#536DFE]">{submittedData.service}</strong> has been routed directly to our Senior Strategy Director at WEST WARD WORKS. We will review your project brief and follow up at <strong className="text-white">{submittedData.email}</strong> within 4 business hours.
                    </p>

                    <div className="p-4 bg-slate-950/80 rounded-2xl border border-white/10 max-w-md mx-auto text-left text-xs text-slate-300 space-y-1">
                      <div><strong className="text-white">Client Name:</strong> {submittedData.fullName}</div>
                      <div><strong className="text-white">Direct Phone:</strong> {submittedData.phone}</div>
                      <div><strong className="text-white">Budget Allocated:</strong> {submittedData.budget}</div>
                      <div><strong className="text-white">Timeline:</strong> {submittedData.timeline}</div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-xs font-bold text-[#536DFE] hover:text-indigo-300 hover:underline cursor-pointer"
                      >
                        Submit another inquiry →
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" id="agency-contact-form">
                    <div className="border-b border-white/10 pb-4 mb-2">
                      <h3 className="text-xl font-extrabold text-white tracking-tight">
                        Request a Growth Consultation
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Fill in your project details below to receive a personalized scope and roadmap.
                      </p>
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          {...register('fullName')}
                          placeholder="e.g. Sarah Connor"
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#3D5AFE] focus:bg-slate-950 focus:ring-1 focus:ring-[#3D5AFE]/40 transition-all"
                        />
                        {errors.fullName && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          {...register('email')}
                          placeholder="sarah@company.com"
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#3D5AFE] focus:bg-slate-950 focus:ring-1 focus:ring-[#3D5AFE]/40 transition-all"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Service Interested In */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          {...register('phone')}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#3D5AFE] focus:bg-slate-950 focus:ring-1 focus:ring-[#3D5AFE]/40 transition-all"
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Service Interested In *
                        </label>
                        <select
                          {...register('service')}
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#3D5AFE] focus:bg-slate-950 focus:ring-1 focus:ring-[#3D5AFE]/40 transition-all cursor-pointer"
                        >
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.title} className="bg-slate-900 text-white">
                              {s.category}: {s.title}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.service.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Monthly Budget Range *
                        </label>
                        <select
                          {...register('budget')}
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#3D5AFE] focus:bg-slate-950 focus:ring-1 focus:ring-[#3D5AFE]/40 transition-all cursor-pointer"
                        >
                          <option value="$3,000 - $5,000 / mo" className="bg-slate-900 text-white">$3,000 - $5,000 / month</option>
                          <option value="$5,000 - $15,000 / mo" className="bg-slate-900 text-white">$5,000 - $15,000 / month</option>
                          <option value="$15,000 - $40,000 / mo" className="bg-slate-900 text-white">$15,000 - $40,000 / month</option>
                          <option value="$40,000+ / mo" className="bg-slate-900 text-white">$40,000+ / month (Enterprise)</option>
                          <option value="One-time Project ($10k+)" className="bg-slate-900 text-white">One-time Project ($10k+)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Target Timeline *
                        </label>
                        <select
                          {...register('timeline')}
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#3D5AFE] focus:bg-slate-950 focus:ring-1 focus:ring-[#3D5AFE]/40 transition-all cursor-pointer"
                        >
                          <option value="Immediately (Within 1-2 weeks)" className="bg-slate-900 text-white">Immediately (Within 1-2 weeks)</option>
                          <option value="Within 2-4 weeks" className="bg-slate-900 text-white">Within 2-4 weeks</option>
                          <option value="Next Quarter" className="bg-slate-900 text-white">Next Quarter</option>
                          <option value="Exploring Options" className="bg-slate-900 text-white">Exploring Options</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Box */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Tell Us About Your Goals *
                      </label>
                      <textarea
                        rows={4}
                        {...register('message')}
                        placeholder="Briefly describe your current bottlenecks, target KPIs, or specific technical requirements..."
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#3D5AFE] focus:bg-slate-950 focus:ring-1 focus:ring-[#3D5AFE]/40 transition-all resize-y"
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <MagneticButton
                        type="submit"
                        variant="sunset"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full shadow-xl shadow-[#FF6B6B]/25"
                      >
                        {isSubmitting ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <span>Send Growth Brief & Request Audit</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </MagneticButton>
                      <p className="text-[11px] text-slate-400 text-center mt-2.5">
                        Strict confidentiality guaranteed. We sign mutual NDAs upon request.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Contact Details, Map & "Why Work With Us" (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Contact Information Card */}
              <div className="bg-slate-900/85 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6 text-white">
                <h3 className="text-base font-bold uppercase tracking-wider text-white pb-3 border-b border-white/10">
                  Direct Agency Contacts
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-[#536DFE] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white">San Francisco Headquarters</div>
                      <div className="text-slate-400 mt-0.5 leading-relaxed">
                        100 California Street, Suite 400<br />
                        San Francisco, CA 94111, United States
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-[#536DFE] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Email Inquiries</div>
                      <a href="mailto:hello@westwardworks.agency" className="text-[#536DFE] hover:text-indigo-300 hover:underline font-semibold block mt-0.5">
                        hello@westwardworks.agency
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-[#536DFE] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Direct Inbound Line</div>
                      <a href="tel:+18004567890" className="text-slate-300 hover:text-white font-semibold block mt-0.5">
                        +1 (800) 456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-[#536DFE] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Operating Hours</div>
                      <div className="text-slate-400 mt-0.5">
                        Mon – Fri: 8:00 AM – 7:00 PM PST (US & Europe coverage)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map Placeholder */}
              <div className="bg-slate-900/85 backdrop-blur-xl rounded-3xl p-4 border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  {/* Map Pin UI */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FFB86B] text-white flex items-center justify-center shadow-lg animate-bounce">
                      <MapPin className="w-5 h-5 fill-white text-white" />
                    </div>
                    <div className="mt-2 bg-slate-900 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg border border-white/15">
                      WEST WARD WORKS HQ • San Francisco
                    </div>
                  </div>

                  <div className="absolute bottom-2 right-2 text-[10px] text-slate-400 bg-slate-900/90 border border-white/10 px-2 py-0.5 rounded backdrop-blur-sm">
                    Interactive Map Integration
                  </div>
                </div>
              </div>

              {/* "Why Work With Us" Section Reinforcing 40+ Clients / 7+ Countries */}
              <div className="bg-gradient-to-br from-slate-950 to-slate-900 text-white rounded-3xl p-8 border border-white/10 shadow-2xl space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                  <Award className="w-4 h-4" />
                  Why Partner With WEST WARD WORKS
                </div>

                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  Proven Enterprise Pedigree
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  We are not an agency of junior interns running auto-pilot templates. Every account is directly managed by vetted growth and engineering directors with a track record of multi-million dollar outcomes.
                </p>

                <div className="pt-2 space-y-3 border-t border-white/10 text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 border border-indigo-500/30">
                      <Users2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white">40+ Fast-Growth Clients:</strong> From seed-stage disruptors to publicly traded leaders.
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0 border border-blue-500/30">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white">7+ Countries Served:</strong> Global ad pacing, localized SEO, and round-the-clock coverage.
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-500/30">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white">99.4% On-Time Delivery:</strong> Strict agile sprint management and SLA warranties.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
