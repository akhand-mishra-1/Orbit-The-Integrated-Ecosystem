import React from 'react';

export default function Stats() {
  const stats = [
    { value: '10K+', label: 'Students' },
    { value: '500+', label: 'Faculty' },
    { value: '50+', label: 'Institutions' },
    { value: '99.9%', label: 'Uptime' },
  ];

  return (
    <div className="pt-6 sm:pt-8">
      {/* Desktop / Tablet horizontal layout with thin separators */}
      <div className="grid grid-cols-2 sm:flex sm:items-center gap-y-6 sm:gap-y-0 sm:gap-x-0">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <div className="flex flex-col pr-6 sm:pr-8 lg:pr-10 text-left">
              <span className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#111827] tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-[#4B5563] font-medium mt-1.5 sm:mt-2">
                {stat.label}
              </span>
            </div>

            {/* Thin vertical separator between items (desktop/tablet only) */}
            {index < stats.length - 1 && (
              <div className="hidden sm:block h-9 w-[1px] bg-gray-200/90 mr-6 sm:mr-8 lg:mr-10 flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
