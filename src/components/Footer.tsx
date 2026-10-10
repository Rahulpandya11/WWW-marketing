import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { 
  Compass, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Github,
  Globe2,
  Users2,
  Sparkles,
  Zap
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-white relative overflow-hidden pt-16 pb-12 border-t border-slate-800">
      {/* Subtle California Sunset & Indigo Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3D5AFE]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#FF6B6B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Prominent Trust Banner in Footer */}
        <div className="bg-slate-900/90 border border-slate-800/80 rounded-2xl p-6 sm:p-8 mb-16 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="md:col-span-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3D5AFE]/15 text-[#3D5AFE] text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Global Impact
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Trusted Worldwide
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Delivering high-velocity digital marketing and web engineering across continents.
              </p>
            </div>

            <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2B3A8F]/30 border border-[#3D5AFE]/30 flex items-center justify-center text-[#3D5AFE]">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white">40+</div>
                  <div className="text-xs text-slate-400 font-medium">Clients Served</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white">7+</div>
                  <div className="text-xs text-slate-400 font-medium">Countries Served</div>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#FFB86B]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white">180+</div>
                  <div className="text-xs text-slate-400 font-medium">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Multi-column Sitemap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Agency Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="WEST WARD WORKS Home">
              <BrandLogo size="md" />
            </Link>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              WEST WARD WORKS is an elite full-service digital marketing and web engineering agency. We turn ambitious brands into category leaders through autonomous AI ad engines, generative search optimization (GEO), and ultra-fast web platforms.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B6B] shrink-0" />
                <span>100 Tech Horizon Boulevard, Suite 400, San Francisco, CA 94107</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#3D5AFE] shrink-0" />
                <a href="mailto:hello@westwardworks.agency" className="hover:text-white transition-colors">
                  hello@westwardworks.agency
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#3D5AFE] shrink-0" />
                <a href="tel:+18004567890" className="hover:text-white transition-colors">
                  +1 (800) 456-7890
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#3D5AFE] hover:border-[#3D5AFE]/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#3D5AFE] hover:border-[#3D5AFE]/40 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#FF6B6B] hover:border-[#FF6B6B]/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Digital Growth Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3D5AFE]">
              Digital Growth
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/services/ai-digital-marketing" className="hover:text-white transition-colors">
                  AI Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/chatgpt-optimization" className="hover:text-white transition-colors">
                  ChatGPT Optimization
                </Link>
              </li>
              <li>
                <Link to="/services/gemini-optimization" className="hover:text-white transition-colors">
                  Gemini Optimization
                </Link>
              </li>
              <li>
                <Link to="/services/seo-services" className="hover:text-white transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link to="/services/google-ads" className="hover:text-white transition-colors">
                  Google Ads (PPC)
                </Link>
              </li>
              <li>
                <Link to="/services/meta-ads" className="hover:text-white transition-colors">
                  Meta Ads
                </Link>
              </li>
              <li>
                <Link to="/services/social-media-marketing" className="hover:text-white transition-colors">
                  Social Media Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Creative & Web Tech */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Web & Creative
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/services/website-development" className="hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services/app-development" className="hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services/ui-ux-design" className="hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services/ecommerce-development" className="hover:text-white transition-colors">
                  eCommerce Stores
                </Link>
              </li>
              <li>
                <Link to="/services/graphic-design" className="hover:text-white transition-colors">
                  Graphic & Brand Identity
                </Link>
              </li>
              <li>
                <Link to="/services/video-editing" className="hover:text-white transition-colors">
                  Video Reels & Content
                </Link>
              </li>
              <li>
                <Link to="/services/website-maintenance" className="hover:text-white transition-colors">
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Growth Newsletter
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get our monthly breakdown of AI marketing shifts, prompt strategies, and conversion case studies. Zero spam.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You are subscribed! Welcome to the insider circle.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2" id="footer-newsletter-form">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email..."
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3D5AFE] transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-gradient-to-r from-[#FF6B6B] to-[#FFB86B] hover:brightness-105 text-white rounded-lg text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-slate-500">
                  Read by 6,200+ founders and CMOs worldwide.
                </p>
              </form>
            )}

            <div className="pt-2 border-t border-slate-900 space-y-1 text-xs text-slate-400">
              <Link to="/case-studies" className="block hover:text-white transition-colors">
                • View All Case Studies
              </Link>
              <Link to="/portfolio" className="block hover:text-white transition-colors">
                • Explore Design Portfolio
              </Link>
              <Link to="/contact" className="block text-[#FF6B6B] font-semibold hover:underline">
                • Request a Free Marketing Audit →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} WEST WARD WORKS Agency Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Security</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
