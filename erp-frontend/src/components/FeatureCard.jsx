import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function FeatureCard({ title, description, icon: Icon, iconSvg, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white border border-[#F1F1F1] rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-[#FF6500]/25 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Top Header Row: Icon container on left, circular arrow button on right */}
        <div className="flex items-center justify-between mb-5">
          {/* Orange Icon Container */}
          <div className="w-12 h-12 rounded-xl bg-[#FFF1E8] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#FF6500]">
            {iconSvg ? (
              <img 
                src={iconSvg} 
                alt={title} 
                className="w-6 h-6 object-contain group-hover:brightness-0 group-hover:invert transition duration-300" 
              />
            ) : Icon ? (
              <Icon className="w-6 h-6 text-[#FF6500] group-hover:text-white transition-colors duration-300" />
            ) : null}
          </div>

          {/* Top-Right Circular Action Arrow */}
          <div className="w-8 h-8 rounded-full bg-[#FFF1E8] text-[#FF6500] flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF6500] group-hover:text-white group-hover:scale-105">
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Feature Title */}
        <h3 className="text-lg sm:text-[19px] font-bold text-[#111827] leading-snug tracking-tight group-hover:text-[#FF6500] transition-colors duration-200">
          {title}
        </h3>

        {/* Feature Description */}
        <p className="mt-2.5 text-sm text-[#4B5563] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Subtle indicator bar on bottom */}
      <div className="mt-5 pt-3 border-t border-gray-50 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-[#FF6500] transition-colors">
        <span>Learn module capabilities</span>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
      </div>
    </div>
  );
}
