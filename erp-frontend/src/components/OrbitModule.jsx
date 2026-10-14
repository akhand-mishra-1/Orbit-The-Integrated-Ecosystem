import React from 'react';

export default function OrbitModule({ 
  title, 
  subtitle, 
  icon: Icon, 
  iconSvg, 
  animationDelay,
  onClick
}) {
  return (
    <div
      onClick={onClick}
      style={{ animationDelay }}
      className="absolute top-1/2 left-1/2 z-20 orbit-active cursor-pointer group select-none pointer-events-auto"
    >
      <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 bg-white/95 backdrop-blur-md px-2.5 py-1.5 xs:px-3.5 xs:py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl border border-gray-100 shadow-[0_6px_22px_rgba(0,0,0,0.06)] group-hover:border-[#FF6500]/50 group-hover:shadow-[0_12px_28px_rgba(255,101,0,0.18)] group-hover:scale-105 transition-all duration-300">
        
        {/* Orange icon container */}
        <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#FFF1E8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6500] transition-colors duration-300">
          {iconSvg ? (
            <img 
              src={iconSvg} 
              alt={title} 
              className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 object-contain group-hover:brightness-0 group-hover:invert transition duration-300" 
            />
          ) : Icon ? (
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6500] group-hover:text-white transition-colors duration-300" />
          ) : null}
        </div>

        {/* Text information */}
        <div className="flex flex-col text-left">
          <div className="text-xs xs:text-sm sm:text-[15px] font-bold text-[#111827] leading-tight group-hover:text-[#FF6500] transition-colors duration-200">
            {title}
          </div>
          <div className="text-[9px] xs:text-[10px] sm:text-[11px] text-[#4B5563] font-medium tracking-tight mt-0.5 whitespace-nowrap">
            {subtitle}
          </div>
        </div>

      </div>
    </div>
  );
}
