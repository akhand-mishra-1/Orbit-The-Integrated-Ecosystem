import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import FeatureCard from './FeatureCard';
import iconErp from '../assets/icon_erp.svg';
import iconLms from '../assets/icon_lms.svg';
import iconAttendance from '../assets/icon_attendance.svg';
import iconAutoGrading from '../assets/icon_auto_grading.svg';

export default function Features({ onOpenAuth }) {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 'erp',
      title: 'Enterprise Resource Planning (ERP)',
      description: 'Manage students, faculty, courses, resources and operations efficiently.',
      iconSvg: iconErp,
      badge: 'Core Administrative Engine',
      highlights: [
        'End-to-end student lifecycle from admission to alumni',
        'Automated fee collection, invoices & payment gateways',
        'Faculty workload distribution and department audits',
        'Government accreditation & NAAC/NIRF reporting compliance'
      ]
    },
    {
      id: 'lms',
      title: 'Learning Management System (LMS)',
      description: 'Deliver engaging learning experiences fully integrated with your campus data.',
      iconSvg: iconLms,
      badge: 'Pedagogical Framework',
      highlights: [
        'Interactive lesson plans, video lecture streaming & notes',
        'Collaborative forums, quizzes, and live Q&A rooms',
        'Direct synchronization with student grades & transcripts',
        'Mobile-ready offline access for remote study'
      ]
    },
    {
      id: 'attendance',
      title: 'Smart Attendance',
      description: 'Automate attendance tracking with biometric, geolocation or digital check-ins.',
      iconSvg: iconAttendance,
      badge: 'Real-time Verification',
      highlights: [
        'Geo-fenced mobile check-ins with anti-spoofing logic',
        'Biometric IoT scanner hardware integration',
        'Automated low-attendance alerts to parents & advisors',
        'Comprehensive monthly trends and predictive dropout analytics'
      ]
    },
    {
      id: 'grading',
      title: 'Intelligent Auto-Grading',
      description: 'Evaluate assignments, quizzes and code submissions with instant, objective feedback.',
      iconSvg: iconAutoGrading,
      badge: 'AI & Automated Evaluation',
      highlights: [
        'Automated unit testing for code submissions (Python, C++, Java)',
        'Plagiarism & code similarity detection algorithms',
        'Instant rubric score generation and diagnostic feedback',
        'Continuous export to course gradebooks without manual data entry'
      ]
    },
  ];

  return (
    <section id="features" className="pt-10 sm:pt-14 pb-16 sm:pb-20 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Section Header: Two Column Top Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-14">
          
          {/* Left: Label and Heading */}
          <div className="max-w-2xl">
            <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#FF6500] uppercase font-sans">
              BUILT FOR REAL IMPACT
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-[1.15]">
              Everything Your Campus Needs, <br className="hidden sm:inline" />
              In <span className="text-[#FF6500]">One Place.</span>
            </h2>
          </div>

          {/* Right: Subtitle description and CTA link */}
          <div className="max-w-xl flex flex-col items-start lg:items-end text-left lg:text-right">
            <p className="text-base text-[#4B5563] leading-relaxed">
              From administration to academics, Orbit brings every part of your institution together — with intelligent automation and a seamless user experience.
            </p>
            <a
              href="#about"
              className="mt-3 inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#FF6500] hover:text-[#E55A00] transition group"
            >
              <span>Explore All Features</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>

        {/* Four Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              iconSvg={feature.iconSvg}
              onClick={() => setSelectedFeature(feature)}
            />
          ))}
        </div>

        {/* Bottom Tagline with thin horizontal lines */}
        <div className="mt-16 sm:mt-20 flex items-center justify-center gap-4 sm:gap-6 text-center">
          <div className="h-[1px] bg-gray-200/90 flex-1 max-w-[100px] sm:max-w-[180px] md:max-w-[240px]" />
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-gray-400 uppercase select-none font-sans">
            SAME PEOPLE • SAME CAMPUS • MORE POSSIBILITIES
          </span>
          <div className="h-[1px] bg-gray-200/90 flex-1 max-w-[100px] sm:max-w-[180px] md:max-w-[240px]" />
        </div>

      </div>

      {/* Feature Detail Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFF1E8] flex items-center justify-center">
                <img src={selectedFeature.iconSvg} alt="" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6500]">
                  {selectedFeature.badge}
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedFeature.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              {selectedFeature.description}
            </p>

            <div className="space-y-3 mb-6 bg-gray-50/70 rounded-2xl p-4 border border-gray-100">
              <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                Key Institutional Capabilities:
              </h4>
              {selectedFeature.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6500] flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedFeature(null)}
                className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900"
              >
                Close
              </button>
              <button
                onClick={() => { setSelectedFeature(null); onOpenAuth(); }}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-[#FF6500] hover:bg-[#E55A00] rounded-xl shadow-sm transition"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
