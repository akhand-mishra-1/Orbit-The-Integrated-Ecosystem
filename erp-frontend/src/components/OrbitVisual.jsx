import React, { useState } from 'react';
import OrbitModule from './OrbitModule';
import iconErp from '../assets/icon_erp.svg';
import iconLms from '../assets/icon_lms.svg';
import iconAttendance from '../assets/icon_attendance.svg';
import iconAutoGrading from '../assets/icon_auto_grading.svg';
import smarterCampusImg from '../assets/Smarter Campus, Brighter Futures.png';

export default function OrbitVisual() {
  const [isOrbiting, setIsOrbiting] = useState(true);

  // 4 modules orbiting 360 degrees like moons around planet Earth (28s period, 90 deg / 7s spacing)
  const modules = [
    {
      title: 'ERP',
      subtitle: 'Manage • Automate • Grow',
      iconSvg: iconErp,
      animationDelay: '0s', // Starts Top-Left (0% phase)
    },
    {
      title: 'LMS',
      subtitle: 'Learn • Teach • Engage',
      iconSvg: iconLms,
      animationDelay: '-7s', // Starts Top-Right (25% phase)
    },
    {
      title: 'Auto-Grading',
      subtitle: 'Evaluate • Feedback • Evolve',
      iconSvg: iconAutoGrading,
      animationDelay: '-14s', // Starts Bottom-Right (50% phase)
    },
    {
      title: 'Attendance',
      subtitle: 'Track • Analyze • Support',
      iconSvg: iconAttendance,
      animationDelay: '-21s', // Starts Bottom-Left (75% phase)
    },
  ];

  return (
    <div className={`relative w-full h-[460px] xs:h-[500px] sm:h-[560px] md:h-[600px] lg:h-[630px] xl:h-[670px] flex items-center justify-center select-none overflow-visible orbit-stage ${!isOrbiting ? 'orbit-paused' : ''}`}>
      
      {/* LAYER 1: Soft ambient radial peach glow around the orbital ecosystem */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <div className="w-[300px] sm:w-[440px] lg:w-[560px] h-[300px] sm:h-[440px] lg:h-[560px] rounded-full bg-gradient-to-tr from-[#FFF1E8]/70 via-[#FF6500]/12 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* LAYER 3: SVG Orbital Rings & Particles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]">
        <svg 
          viewBox="0 0 700 700" 
          className="w-[105%] sm:w-[98%] max-w-[680px] h-auto overflow-visible"
          style={{ maxWidth: '680px', maxHeight: '640px', width: '100%', height: 'auto' }}
        >
          <defs>
            <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6500" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#FFA057" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FF6500" stopOpacity="0.55" />
            </linearGradient>

            <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF6500" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FFA057" stopOpacity="0.1" />
            </linearGradient>
            
            {/* Glow filter for particles */}
            <filter id="particleGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Innermost Orbit Ring (Wide flat horizontal ellipse) */}
          <ellipse 
            cx="350" 
            cy="350" 
            rx="215" 
            ry="78" 
            fill="none" 
            stroke="url(#ringGrad1)" 
            strokeWidth="1.8"
            transform="rotate(-14 350 350)"
          />

          {/* Middle Orbit Ring (Tilted clockwise) */}
          <g className="animate-orbit-slow" style={{ transformOrigin: '350px 350px' }}>
            <ellipse 
              cx="350" 
              cy="350" 
              rx="280" 
              ry="118" 
              fill="none" 
              stroke="#FF6500" 
              strokeOpacity="0.34" 
              strokeWidth="1.5"
              strokeDasharray="6 4"
              transform="rotate(24 350 350)"
            />
            {/* Glowing Orbit Particles */}
            <circle cx="105" cy="315" r="4.5" fill="#FF6500" filter="url(#particleGlow)" />
            <circle cx="595" cy="405" r="3.5" fill="#FF6500" opacity="0.85" />
          </g>

          {/* Outermost Orbit Ring (Tilted counter-clockwise) */}
          <g className="animate-orbit-reverse" style={{ transformOrigin: '350px 350px' }}>
            <ellipse 
              cx="350" 
              cy="350" 
              rx="325" 
              ry="142" 
              fill="none" 
              stroke="#FFA057" 
              strokeOpacity="0.38" 
              strokeWidth="1.2"
              transform="rotate(-28 350 350)"
            />
            {/* Glowing Orbit Particles */}
            <circle cx="350" cy="208" r="4" fill="#FF6500" filter="url(#particleGlow)" />
            <circle cx="205" cy="465" r="3.5" fill="#FF8A3D" />
            <circle cx="535" cy="245" r="4" fill="#FF6500" filter="url(#particleGlow)" />
          </g>

          {/* Additional subtle accent ring */}
          <ellipse 
            cx="350" 
            cy="350" 
            rx="165" 
            ry="58" 
            fill="none" 
            stroke="#FF6500" 
            strokeOpacity="0.25" 
            strokeWidth="1"
            transform="rotate(42 350 350)"
          />
        </svg>
      </div>

      {/* LAYER 4: Central Glowing 3D Orange Sphere */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Soft outer corona glow */}
        <div className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-54 md:h-54 lg:w-60 lg:h-60 rounded-full bg-[#FF6500]/35 blur-2xl pointer-events-none" />

        {/* 3D Sphere Container */}
        <div 
          className="relative w-36 h-36 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full flex flex-col items-center justify-center text-center text-white sphere-glow transition-transform duration-300 hover:scale-105 cursor-pointer shadow-2xl"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #FFA466 0%, #FF6500 45%, #D44800 85%, #9E3000 100%)',
          }}
        >
          {/* Subtle Top-Left Specular Reflection */}
          <div 
            className="absolute top-2.5 left-5 w-16 h-8 rounded-full opacity-45 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%)',
              transform: 'rotate(-25deg)',
            }}
          />

          {/* Central Title */}
          <div className="text-2xl xs:text-[26px] sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-white drop-shadow-sm font-sans">
            Orbit
          </div>

          {/* Subtitle Dot Separators */}
          <div className="mt-1 sm:mt-1.5 flex flex-col items-center text-[10px] xs:text-[11px] sm:text-xs text-white/95 font-medium leading-tight tracking-wide">
            <div>People • Learning</div>
            <div className="text-[9px] xs:text-[10px] sm:text-[11px] text-white/85 mt-0.5">Administration • Growth</div>
          </div>
        </div>
      </div>

      {/* LAYER 5: Four Revolving Moon-like Module Cards */}
      {modules.map((mod) => (
        <OrbitModule
          key={mod.title}
          title={mod.title}
          subtitle={mod.subtitle}
          iconSvg={mod.iconSvg}
          animationDelay={mod.animationDelay}
          onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
        />
      ))}

      {/* Orbit Live Status & Pause Indicator */}
      <div className="absolute bottom-1 xs:bottom-2 z-20 flex items-center justify-center pointer-events-auto">
        <button
          onClick={() => setIsOrbiting(!isOrbiting)}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-[#FF6500]/40 text-[11px] sm:text-xs font-semibold text-gray-600 hover:text-[#FF6500] transition-all active:scale-95 group/btn"
          title={isOrbiting ? "Click to pause orbital motion (hovering any card also pauses)" : "Click to resume orbital motion"}
        >
          <span className={`w-2 h-2 rounded-full transition-colors ${isOrbiting ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`} />
          <span>{isOrbiting ? 'Orbital Motion Active' : 'Orbit Paused'}</span>
          <span className="text-[10px] text-gray-400 font-normal">
            {isOrbiting ? '• hover to pause' : '• click to resume'}
          </span>
        </button>
      </div>

      {/* LAYER 6: Decorative Handwritten Notes (Hidden on mobile) */}
      
      {/* Note 1: "Different Modules One Orbit" + Curved Arrow (Top Left) */}
      <div className="hidden lg:flex flex-col items-center absolute top-[8%] left-[5%] xl:left-[5%] z-20 pointer-events-none select-none">
        <div className="font-handwriting text-[#FF6500] text-xl xl:text-2xl font-bold leading-tight -rotate-6 tracking-wide ">
          <span>Different</span><br />
          <span>Modules</span><br />
          <span className="font-extrabold">One Orbit</span>
        </div>
        {/* Hand-drawn curving arrow pointing down-right toward orbit */}
        <svg 
          width="48" 
          height="45" 
          viewBox="0 0 60 50" 
          fill="none" 
          className="mt-1 text-[#FF6500] transform -rotate-12"
        >
          <path 
            d="M 12,8 Q 38,10 46,38" 
            stroke="#FF6500" 
            strokeWidth="2.4" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            d="M 37,34 L 46,38 L 48,27" 
            stroke="#FF6500" 
            strokeWidth="2.4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
        </svg>
      </div>

      {/* Note 2: "Smarter Campus, Brighter Futures" (Top Right) */}
      <div className="hidden lg:block absolute top-[7%] sm:top-[1%] right-[1%] lg:right-[1%] xl:right-[1%] z-20 pointer-events-none select-none">
        <img 
          src={smarterCampusImg} 
          alt="Smarter Campus, Brighter Futures" 
          className="w-44 lg:w-52 xl:w-60 h-auto object-contain  pointer-events-none" 
        />
      </div>

    </div>
  );
}
