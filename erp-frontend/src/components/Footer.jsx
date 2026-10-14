import React from 'react';
import { ArrowUp } from 'lucide-react';
import orbitLogo from '../assets/orbit_logo.png';

export default function Footer({ onOpenAuth }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="about" className="bg-[#FAFAFA] border-t border-gray-100 pt-16 pb-12 text-gray-600">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-gray-200/80">
          
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <a href="#home" className="inline-block">
              <img 
                src={orbitLogo} 
                alt="Orbit — The Integrated Campus Ecosystem" 
                className="h-18 w-60 object-contain"
              />
            </a>

            <p className="mt-4 text-sm text-[#4B5563] leading-relaxed max-w-sm">
              Empowering colleges and universities with next-generation institutional intelligence. Unifying administrative workflows, interactive pedagogy, and autonomous assessments.
            </p>

            {/* Status indicator */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-medium text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational (99.99% Uptime)</span>
            </div>
          </div>

          {/* Col 3: Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827] mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#features" className="hover:text-[#FF6500] transition">Campus ERP Suite</a></li>
              <li><a href="#features" className="hover:text-[#FF6500] transition">NextGen LMS</a></li>
              <li><a href="#features" className="hover:text-[#FF6500] transition">Smart Attendance</a></li>
              <li><a href="#features" className="hover:text-[#FF6500] transition">Auto-Grading Engine</a></li>
              <li><a href="#features" className="hover:text-[#FF6500] transition">Outcome Based Education</a></li>
              <li><a href="#features" className="hover:text-[#FF6500] transition">Institutional Analytics</a></li>
            </ul>
          </div>

          {/* Col 4: Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827] mb-4">Institutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-[#FF6500] transition">Technical Universities</a></li>
              <li><a href="#about" className="hover:text-[#FF6500] transition">Autonomous Colleges</a></li>
              <li><a href="#about" className="hover:text-[#FF6500] transition">Research Institutes</a></li>
              <li><a href="#about" className="hover:text-[#FF6500] transition">Multi-Campus Groups</a></li>
              <li><a href="#about" className="hover:text-[#FF6500] transition">NAAC & NBA Audits</a></li>
              <li><a href="#about" className="hover:text-[#FF6500] transition">Security & FERPA</a></li>
            </ul>
          </div>

          {/* Col 5: Company & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827] mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-[#FF6500] transition">Documentation & APIs</a></li>
              <li><a href="#about" className="hover:text-[#FF6500] transition">Customer Stories</a></li>
              <li><a href="#about" className="hover:text-[#FF6500] transition">Integration Partners</a></li>
              <li><a href="#about" className="hover:text-[#FF6500] transition">Security Whitepaper</a></li>
              <li>
                <button onClick={onOpenAuth} className="hover:text-[#FF6500] transition text-left">
                  Request Campus Pilot
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Orbit Technologies, Inc. All rights reserved. Built for higher education excellence.
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-gray-900 transition">Privacy Policy</a>
            <a href="#about" className="hover:text-gray-900 transition">Terms of Service</a>
            <a href="#about" className="hover:text-gray-900 transition">Security</a>
            
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#FF6500] hover:border-[#FF6500] transition shadow-xs"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
