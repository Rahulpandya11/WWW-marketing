import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Bot, 
  Cpu, 
  TrendingUp, 
  Search, 
  Share2, 
  MousePointerClick, 
  Layers, 
  Palette, 
  Video, 
  Truck, 
  Code2, 
  Smartphone, 
  Layout, 
  ShoppingBag, 
  Wrench, 
  Server,
  CheckCircle2
} from 'lucide-react';
import { ServiceItem } from '../types';
import { TiltCard } from './ui/TiltCard';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5 text-[#536DFE]" />,
  Bot: <Bot className="w-5 h-5 text-[#536DFE]" />,
  Sparkle: <Cpu className="w-5 h-5 text-[#536DFE]" />,
  Target: <TrendingUp className="w-5 h-5 text-[#536DFE]" />,
  Search: <Search className="w-5 h-5 text-[#536DFE]" />,
  Share2: <Share2 className="w-5 h-5 text-[#536DFE]" />,
  MousePointerClick: <MousePointerClick className="w-5 h-5 text-[#536DFE]" />,
  Layers: <Layers className="w-5 h-5 text-[#536DFE]" />,
  Palette: <Palette className="w-5 h-5 text-[#FFB86B]" />,
  Video: <Video className="w-5 h-5 text-[#FF6B6B]" />,
  Truck: <Truck className="w-5 h-5 text-[#536DFE]" />,
  Code2: <Code2 className="w-5 h-5 text-[#536DFE]" />,
  Smartphone: <Smartphone className="w-5 h-5 text-[#536DFE]" />,
  Layout: <Layout className="w-5 h-5 text-[#536DFE]" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#536DFE]" />,
  Wrench: <Wrench className="w-5 h-5 text-[#536DFE]" />,
  Server: <Server className="w-5 h-5 text-[#536DFE]" />,
};

interface ServiceCardProps {
  service: ServiceItem;
  idx?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, idx = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (idx % 4) * 0.08, ease: 'easeOut' }}
      className="h-full"
    >
      <TiltCard
        maxTilt={6}
        className="h-full group flex flex-col justify-between bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-[#3D5AFE]/15 hover:border-[#3D5AFE]/50 transition-all duration-300"
      >
        <div>
          {/* Header row: Icon & Optional Badge */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center transition-all duration-300 group-hover:bg-[#3D5AFE] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#3D5AFE]/30">
              <span className="group-hover:text-white transition-colors">
                {iconMap[service.iconName] || <Sparkles className="w-5 h-5 text-[#536DFE]" />}
              </span>
            </div>

            {service.badge && (
              <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                {service.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#536DFE] transition-colors">
            {service.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-400 leading-relaxed mt-2 line-clamp-3">
            {service.shortDescription}
          </p>

          {/* Key Highlight / First Benefit */}
          {service.benefits && service.benefits.length > 0 && (
            <div className="mt-4 pt-3 border-t border-white/10 flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="line-clamp-2">{service.benefits[0]}</span>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            {service.category}
          </span>
          
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#536DFE] group-hover:text-indigo-300 group-hover:translate-x-1 transition-all"
          >
            Explore Service
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </TiltCard>
    </motion.div>
  );
};
