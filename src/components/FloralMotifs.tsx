import React from 'react';

/**
 * Reusable Floral & Traditional Wedding Motifs
 * (Marigold garland, Paisley/Kalka, Gold Filigree Arch, Mandala corner)
 */

export const FloralDivider: React.FC<{ className?: string }> = ({ className = 'my-8' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#C89B3C] to-[#E87722]"></div>
      <div className="flex items-center gap-1.5 text-[#E87722]">
        {/* Marigold petal center */}
        <svg className="w-5 h-5 fill-current text-[#E87722]" viewBox="0 0 24 24">
          <path d="M12 2C11.5 5 9 7.5 6 8C9 8.5 11.5 11 12 14C12.5 11 15 8.5 18 8C15 7.5 12.5 5 12 2Z" fill="#C89B3C" />
          <circle cx="12" cy="12" r="3" fill="#E87722" />
          <path d="M7 12C7 10 9 9 12 9C9 9 7 8 7 6C7 8 5 9 2 9C5 9 7 10 7 12Z" fill="#C89B3C" opacity="0.7" />
          <path d="M17 12C17 10 15 9 12 9C15 9 17 8 17 6C17 8 19 9 22 9C19 9 17 10 17 12Z" fill="#C89B3C" opacity="0.7" />
        </svg>
      </div>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#C89B3C] to-[#E87722]"></div>
    </div>
  );
};

export const MarigoldFlower: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      {/* Layered vibrant marigold blossom */}
      <circle cx="24" cy="24" r="22" fill="#E87722" fillOpacity="0.2" />
      <circle cx="24" cy="24" r="16" fill="#F89C36" />
      <circle cx="24" cy="24" r="10" fill="#E87722" />
      <circle cx="24" cy="24" r="5" fill="#9A721C" />
      {/* Petal scallops */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <circle
          key={deg}
          cx={24 + 14 * Math.cos((deg * Math.PI) / 180)}
          cy={24 + 14 * Math.sin((deg * Math.PI) / 180)}
          r="4.5"
          fill="#F59E0B"
        />
      ))}
      {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg) => (
        <circle
          key={`inner-${deg}`}
          cx={24 + 8 * Math.cos((deg * Math.PI) / 180)}
          cy={24 + 8 * Math.sin((deg * Math.PI) / 180)}
          r="3"
          fill="#E87722"
        />
      ))}
    </svg>
  );
};

export const GoldMandalaCorner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-16 h-16 pointer-events-none opacity-40 text-[#C89B3C] ${className}`}
    >
      <path
        d="M0 0 L100 0 C70 0 40 30 40 60 C40 80 20 100 0 100 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="rgba(200, 155, 60, 0.04)"
      />
      <circle cx="25" cy="25" r="15" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
      <circle cx="25" cy="25" r="8" stroke="currentColor" strokeWidth="0.8" />
      <path d="M0 45 Q 45 45 45 0" stroke="currentColor" strokeWidth="0.8" />
      <path d="M0 65 Q 65 65 65 0" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
};

export const ArchFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`relative p-6 sm:p-10 rounded-t-[3rem] sm:rounded-t-[4rem] rounded-b-2xl border border-[#C89B3C]/35 bg-[#FAF7F2]/90 backdrop-blur-sm shadow-xl ${className}`}>
      {/* Top ornate arch crest */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-[#FAF7F2] border border-[#C89B3C]/50 rounded-full flex items-center gap-1.5 shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E87722]" />
        <span className="text-[10px] tracking-widest uppercase font-semibold text-[#9A721C]">Bismillah</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#E87722]" />
      </div>
      {children}
    </div>
  );
};
