import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Stats from './Stats';
import OrbitVisual from './OrbitVisual';
import campusPhoto from '../assets/03_campus_hero_photo.png';

export default function Hero({ onOpenAuth, onOpenVideo }) {
  return (
    <section id="home" className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden">
      
      {/* Background soft ambient gradient flare */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-b from-[#FFF1E8]/60 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Background Campus Architectural Scene (Positions at bottom-right of viewport, flush with edge) */}
      <div className="absolute right-0 bottom-0 w-full sm:w-[85%] md:w-[75%] lg:w-[60%] xl:w-[54%] 2xl:w-[48%] h-[55%] sm:h-[65%] md:h-[75%] lg:h-[84%] pointer-events-none z-0 overflow-hidden">
        <img 
          src={campusPhoto} 
          alt="Modern Campus Architecture" 
          className="w-full h-full object-cover object-right-bottom opacity-90 transition-opacity duration-700"
        />
        {/* Seamless blend gradient masks into the white hero background */}
        {/* Left feather fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/55 to-transparent w-full" />
        {/* Top feather fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-transparent h-1/2" />
        {/* Bottom soften edge */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>
      
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Editorial Headline, Description, CTAs, Stats */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start z-10">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-gray-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] mb-6 sm:mb-8 transition hover:border-[#FF6500]/40">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF6500] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-semibold text-gray-700 tracking-tight">
                One Campus. One Ecosystem.
              </span>
            </div>

            {/* Giant Heading */}
            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[68px] xl:text-[74px] font-extrabold text-[#111827] tracking-[-0.035em] leading-[1.08] text-left">
              Unified Education <br />
              for a <span className="text-[#FF6500]">Brighter</span> <br className="hidden sm:inline" />
              <span className="text-[#FF6500]">Tomorrow</span>
            </h1>

            {/* Description */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed max-w-[560px] text-left">
              Orbit unifies ERP, LMS, attendance, and auto-grading into a single, intelligent platform — empowering institutions to teach, manage, and grow without silos.
            </p>

            {/* Two CTA Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4">
              {/* Primary CTA */}
              <button
                onClick={onOpenAuth}
                className="group px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#FF6500] hover:bg-[#E55A00] text-white font-semibold text-sm sm:text-base shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-200 active:scale-[0.98] flex items-center gap-2.5"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA: Watch Video */}
             
            </div>

            {/* Hero Statistics */}
            <Stats />

          </div>

          {/* Right Column: Orbit Visual with 3D Sphere, Floating Modules & Campus */}
          <div className="lg:col-span-6 xl:col-span-7 relative w-full mt-4 lg:mt-0 lg:-translate-x-14 xl:-translate-x-24 2xl:-translate-x-32 transition-transform duration-300">
            <OrbitVisual />
          </div>

        </div>
      </div>

    </section>
  );
}
