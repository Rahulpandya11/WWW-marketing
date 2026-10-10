import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Bot,
  Search,
  Share2,
  BarChart3,
  Layers,
  Palette,
  Video,
  Globe,
  Smartphone,
  Layout,
  ShoppingCart,
  Wrench,
  Cloud,
  Compass,
  Sun,
  Moon
} from 'lucide-react';
import { servicesData } from '../lib/servicesData';
import { MagneticButton } from './ui/MagneticButton';
import { BrandLogo } from './BrandLogo';

// Icon mapping helper for mega menu services
const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-4 h-4" />,
  Bot: <Bot className="w-4 h-4" />,
  Search: <Search className="w-4 h-4" />,
  Share2: <Share2 className="w-4 h-4" />,
  BarChart3: <BarChart3 className="w-4 h-4" />,
  Layers: <Layers className="w-4 h-4" />,
  Palette: <Palette className="w-4 h-4" />,
  Video: <Video className="w-4 h-4" />,
  Globe: <Globe className="w-4 h-4" />,
  Smartphone: <Smartphone className="w-4 h-4" />,
  Layout: <Layout className="w-4 h-4" />,
  ShoppingCart: <ShoppingCart className="w-4 h-4" />,
  Wrench: <Wrench className="w-4 h-4" />,
  Cloud: <Cloud className="w-4 h-4" />,
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  // Initialize theme from DOM
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  // Track window scroll to switch navbar background to glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setMobileServicesExpanded(false);
  }, [location.pathname]);

  // Group services by category for mega menu
  const digitalGrowthServices = servicesData.filter(s => s.category === 'Digital Growth');
  const creativeBrandServices = servicesData.filter(s => s.category === 'Creative & Brand');
  const webTechServices = servicesData.filter(s => s.category === 'Web & Technology');

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services', hasDropdown: true },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0D14]/90 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/50 py-3'
          : 'bg-[#0A0D14]/65 backdrop-blur-md border-b border-white/5 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Brand Icon */}
          <Link
            to="/"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#3D5AFE]/30 rounded-lg p-1"
            id="brand-logo"
            aria-label="WEST WARD WORKS Home"
          >
            <BrandLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                        isActive
                          ? 'text-[#536DFE] bg-[#3D5AFE]/15 border border-[#3D5AFE]/30 font-bold'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180 text-[#536DFE]' : 'text-slate-400'
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown Mega-Menu */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-[880px] mt-2 bg-[#0F172A]/98 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-black/80 border border-white/10 p-6 z-50 overflow-hidden"
                        >
                          <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                            <div>
                              <h4 className="text-sm font-bold text-white">
                                Agency Capabilities & Solutions
                              </h4>
                              <p className="text-xs text-slate-400">
                                Specialized digital growth, creative design, and web technology engineered for market leaders.
                              </p>
                            </div>
                            <Link
                              to="/services"
                              className="text-xs font-bold text-[#536DFE] hover:text-[#3D5AFE] flex items-center gap-1 group"
                            >
                              View all 16 services
                              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-3 gap-6">
                            {/* Category 1: Digital Growth */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 pb-1.5 border-b border-indigo-500/30">
                                <span className="w-2 h-2 rounded-full bg-[#3D5AFE]" />
                                <h5 className="text-xs font-bold uppercase tracking-wider text-[#536DFE]">
                                  Digital Growth
                                </h5>
                              </div>
                              <ul className="space-y-1">
                                {digitalGrowthServices.map((svc) => (
                                  <li key={svc.id}>
                                    <Link
                                      to={`/services/${svc.slug}`}
                                      className="flex items-center gap-2.5 p-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors group"
                                    >
                                      <span className="text-slate-400 group-hover:text-[#536DFE] transition-colors">
                                        {iconMap[svc.iconName] || <Sparkles className="w-3.5 h-3.5" />}
                                      </span>
                                      <span className="truncate">{svc.title}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Category 2: Creative & Brand */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 pb-1.5 border-b border-[#FF6B6B]/30">
                                <span className="w-2 h-2 rounded-full bg-[#FF6B6B]" />
                                <h5 className="text-xs font-bold uppercase tracking-wider text-[#FFB86B]">
                                  Creative & Brand
                                </h5>
                              </div>
                              <ul className="space-y-1">
                                {creativeBrandServices.map((svc) => (
                                  <li key={svc.id}>
                                    <Link
                                      to={`/services/${svc.slug}`}
                                      className="flex items-center gap-2.5 p-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors group"
                                    >
                                      <span className="text-slate-400 group-hover:text-[#FF6B6B] transition-colors">
                                        {iconMap[svc.iconName] || <Palette className="w-3.5 h-3.5" />}
                                      </span>
                                      <span className="truncate">{svc.title}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Category 3: Web & Technology */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 pb-1.5 border-b border-blue-500/30">
                                <span className="w-2 h-2 rounded-full bg-[#3D5AFE]" />
                                <h5 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                                  Web & Technology
                                </h5>
                              </div>
                              <ul className="space-y-1">
                                {webTechServices.map((svc) => (
                                  <li key={svc.id}>
                                    <Link
                                      to={`/services/${svc.slug}`}
                                      className="flex items-center gap-2.5 p-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors group"
                                    >
                                      <span className="text-slate-400 group-hover:text-[#536DFE] transition-colors">
                                        {iconMap[svc.iconName] || <Globe className="w-3.5 h-3.5" />}
                                      </span>
                                      <span className="truncate">{svc.title}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Mega-menu footer banner */}
                          <div className="mt-5 p-3 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 text-slate-300 font-medium">
                              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              Currently accepting 2 new quarterly client partnerships
                            </div>
                            <Link
                              to="/contact"
                              className="font-bold text-[#536DFE] hover:text-[#3D5AFE] hover:underline inline-flex items-center gap-1"
                            >
                              Book a Discovery Session <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-[#536DFE] bg-[#3D5AFE]/15 border border-[#3D5AFE]/30 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Button & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400" />
              )}
            </button>

            <Link to="/contact">
              <MagneticButton variant="sunset" size="sm" id="nav-cta-btn">
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-indigo-400" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0D14]/98 border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-2xl overflow-hidden"
          >
            <div className="space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 rounded-lg"
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer"
                >
                  <span>Services (16 Solutions)</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileServicesExpanded ? 'rotate-180 text-[#536DFE]' : ''
                    }`}
                  />
                </button>

                {mobileServicesExpanded && (
                  <div className="pl-4 pr-2 py-2 space-y-4 bg-slate-900/80 rounded-xl my-1 border border-white/10">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#536DFE] mb-1">
                        Digital Growth
                      </p>
                      <div className="space-y-1">
                        {digitalGrowthServices.map((s) => (
                          <Link
                            key={s.id}
                            to={`/services/${s.slug}`}
                            className="block py-1 text-xs text-slate-300 hover:text-white"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#FFB86B] mb-1">
                        Creative & Brand
                      </p>
                      <div className="space-y-1">
                        {creativeBrandServices.map((s) => (
                          <Link
                            key={s.id}
                            to={`/services/${s.slug}`}
                            className="block py-1 text-xs text-slate-300 hover:text-white"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                        Web & Technology
                      </p>
                      <div className="space-y-1">
                        {webTechServices.map((s) => (
                          <Link
                            key={s.id}
                            to={`/services/${s.slug}`}
                            className="block py-1 text-xs text-slate-300 hover:text-white"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/case-studies"
                className="block px-3 py-2 text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 rounded-lg"
              >
                Case Studies
              </Link>
              <Link
                to="/portfolio"
                className="block px-3 py-2 text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 rounded-lg"
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 rounded-lg"
              >
                Contact Us
              </Link>

              <div className="pt-4">
                <Link to="/contact" className="block w-full">
                  <MagneticButton variant="sunset" size="md" className="w-full">
                    <span>Schedule Free Strategy Call</span>
                    <PhoneCall className="w-4 h-4" />
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
