import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  const symbolSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* High-Impact Electric Shield Vector Symbol */}
      <div className={`${symbolSizes[size]} relative shrink-0 group`}>
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(14,165,233,0.4)]"
        >
          <defs>
            {/* Main Metallic Cyan-Teal Gradient */}
            <linearGradient id="alliedGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#2DD4BF" />
            </linearGradient>

            <linearGradient id="amberAccent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>

            {/* Glowing Drop Shadow filter */}
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Hexagonal Industrial Shield Outer Frame */}
          <path
            d="M32 4L56 16V40L32 60L8 40V16L32 4Z"
            fill="#090D16"
            stroke="url(#alliedGlow)"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Stylized "A" Vector Frame */}
          <path
            d="M32 10L48 42H40L32 24L24 42H16L32 10Z"
            fill="url(#alliedGlow)"
            opacity="0.9"
          />

          {/* Dual Velocity Chevrons / High Voltage Bolt Core */}
          <path
            d="M34 16L24 34H33L28 50L40 30H31L34 16Z"
            fill="url(#amberAccent)"
            filter="url(#neonGlow)"
          />

          {/* Angular Tech Precision Nodes */}
          <circle cx="32" cy="10" r="2.5" fill="#00F0FF" />
          <circle cx="16" cy="42" r="2" fill="#38BDF8" />
          <circle cx="48" cy="42" r="2" fill="#38BDF8" />
        </svg>
      </div>

      {/* Brand Logotype Text */}
      <div>
        <div className="flex items-center gap-2">
          <span className={`font-black ${textSizes[size]} tracking-tight text-white font-sans flex items-center gap-1`}>
            ALLIED
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-300 font-extrabold">
              ELECTRIC
            </span>
          </span>
          <span className="hidden sm:inline-flex bg-cyan-500/10 text-cyan-400 text-[10px] font-mono px-2 py-0.5 rounded border border-cyan-500/30 tracking-widest font-bold">
            AU
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono tracking-wider truncate">
            <span className="text-cyan-400/90 font-bold">VEHICLES</span>
            <span>·</span>
            <span>ABN 66 060 256 377</span>
            <span className="hidden md:inline">· PERTH WA</span>
          </div>
        )}
      </div>
    </div>
  );
};
