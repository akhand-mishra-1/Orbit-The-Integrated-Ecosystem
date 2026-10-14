import React from 'react';
import { X, Play, Volume2, ShieldCheck, Sparkles } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100 relative animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-[#FF6500]" />
            <h3 className="font-bold text-gray-900 text-sm sm:text-base">
              Orbit Platform Overview & Interactive Tour
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Screen Mockup */}
        <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-6 text-white text-center">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FF6500_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 w-16 h-16 rounded-full bg-[#FF6500] text-white flex items-center justify-center shadow-lg shadow-orange-500/40 mb-4 transform hover:scale-110 cursor-pointer transition">
            <Play className="w-7 h-7 fill-white translate-x-0.5" />
          </div>

          <span className="relative z-10 text-lg font-bold tracking-tight">
            See How Orbit Powers 50+ Premier Campuses
          </span>
          <p className="relative z-10 text-xs sm:text-sm text-gray-300 max-w-md mt-1.5">
            Unified ERP, LMS grading sync, real-time geofenced attendance & automated faculty workloads in under 3 minutes.
          </p>

          {/* Video bottom control bar mockup */}
          <div className="absolute bottom-3 inset-x-4 flex items-center justify-between px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-xs text-white/80">
            <div className="flex items-center gap-2">
              <Play className="w-3 h-3 fill-white" />
              <span>01:14 / 03:42</span>
            </div>
            <div className="flex items-center gap-3">
              <Volume2 className="w-3.5 h-3.5" />
              <span className="px-2 py-0.5 rounded bg-white/20 text-[10px] font-semibold">1080p HD</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Official Orbit Product Demonstration</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl font-semibold text-white bg-[#FF6500] hover:bg-[#E55A00] transition"
          >
            Close Tour
          </button>
        </div>

      </div>
    </div>
  );
}
