import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  showSubtitle = true,
  className = '',
}) => {
  const sizeMap = {
    sm: { box: 'w-8 h-8', svg: 32, title: 'text-base', sub: 'text-[9px]' },
    md: { box: 'w-10 h-10', svg: 40, title: 'text-lg sm:text-xl', sub: 'text-[10px]' },
    lg: { box: 'w-12 h-12', svg: 48, title: 'text-xl sm:text-2xl', sub: 'text-xs' },
    xl: { box: 'w-16 h-16', svg: 64, title: 'text-2xl sm:text-3xl', sub: 'text-sm' },
  };

  const current = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Dynamic Emblem / Mark */}
      <div
        className={`${current.box} rounded-xl relative flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#3D5AFE]/25 overflow-hidden border border-white/15 bg-gradient-to-br from-[#121726] to-[#0A0D16]`}
      >
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full p-0.5 drop-shadow-sm transition-transform duration-300 group-hover:rotate-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blSunset" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF5252" />
              <stop offset="50%" stopColor="#FF7A45" />
              <stop offset="100%" stopColor="#FFB86B" />
            </linearGradient>

            <linearGradient id="blIndigo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#536DFE" />
              <stop offset="50%" stopColor="#3D5AFE" />
              <stop offset="100%" stopColor="#1E2968" />
            </linearGradient>

            <filter id="blGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Ambient Inner Lights */}
          <circle cx="58" cy="62" r="32" fill="#3D5AFE" opacity="0.3" filter="url(#blGlow)" />
          <circle cx="76" cy="48" r="22" fill="#FF7A45" opacity="0.35" filter="url(#blGlow)" />

          {/* WWW / Compass Forward Chevrons */}
          {/* Wing 1: Westward Left Segment */}
          <path
            d="M 23 38 L 39 77 L 51 48 L 41 48 L 35 61 L 28 38 Z"
            fill="url(#blIndigo)"
            className="transition-opacity group-hover:opacity-100"
          />

          {/* Wing 2: Central Pillar */}
          <path
            d="M 46 44 L 60 78 L 74 44 L 64 44 L 60 56 L 56 44 Z"
            fill="url(#blIndigo)"
          />

          {/* Wing 3: Sunset Forward Horizon Vector */}
          <path
            d="M 68 40 L 82 74 L 97 38 L 86 38 L 80 54 L 74 40 Z"
            fill="url(#blSunset)"
          />

          {/* Azimuth Compass Zenith Indicator */}
          <polygon
            points="60,22 65,29 60,35 55,29"
            fill="url(#blSunset)"
          />

          <circle cx="60" cy="88" r="3" fill="#536DFE" opacity="0.9" />
        </svg>

        {/* Ambient Corner Flare */}
        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FFB86B] opacity-60 blur-[3px] pointer-events-none" />
      </div>

      {/* Typography Lockup */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className={`${current.title} font-black tracking-tight text-white leading-none group-hover:text-slate-100 transition-colors`}>
            WEST WARD <span className="gradient-text-sunset">WORKS</span>
          </span>
          {showSubtitle && (
            <span className={`${current.sub} font-bold tracking-widest uppercase text-slate-400 mt-1 transition-colors group-hover:text-slate-300`}>
              Digital Marketing & Web
            </span>
          )}
        </div>
      )}
    </div>
  );
};
