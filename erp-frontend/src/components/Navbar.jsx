import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, Menu, X, ChevronDown, Sparkles, Shield, BookOpen, Users, CheckCircle2, School, GraduationCap } from 'lucide-react';
import orbitLogo from '../assets/orbit_logo.png';

export default function Navbar({ onOpenAuth, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', active: true },
    {
      name: 'Product',
      hasDropdown: true,
      items: [
        { title: 'Campus ERP', desc: 'Centralized institutional management & workflow automation', icon: School },
        { title: 'NextGen LMS', desc: 'Interactive coursework, digital resources & assignments', icon: BookOpen },
        { title: 'Smart Attendance', desc: 'AI-assisted, biometric & geo-fenced student tracking', icon: Users },
        { title: 'Auto-Grading Engine', desc: 'Instant code execution and rubric-based evaluations', icon: CheckCircle2 }
      ]
    },
    {
      name: 'For Institutions',
      hasDropdown: true,
      items: [
        { title: 'Colleges & Universities', desc: 'Custom enterprise multi-department deployments', icon: GraduationCap },
        { title: 'Autonomous Institutes', desc: 'Accreditation, outcome-based education (OBE) frameworks', icon: Shield },
        { title: 'Research Campuses', desc: 'Grant allocation, publication & lab resource management', icon: Sparkles }
      ]
    },
    {
      name: 'Resources',
      hasDropdown: true,
      items: [
        { title: 'Documentation & API', desc: 'Developer integration guides and SDK references', icon: BookOpen },
        { title: 'Case Studies', desc: 'How premier institutes cut admin workload by 68%', icon: Sparkles },
        { title: 'Compliance & Security', desc: 'FERPA, GDPR, and ISO-27001 institutional guarantees', icon: Shield }
      ]
    },
    { name: 'About', href: '#about' }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white'}`}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Left: Orbit Logo */}
        <a href="#home" className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#FF6500]/30 rounded-lg py-1 px-1 transition">
          <img 
            src={orbitLogo} 
            alt="Orbit — The Integrated Campus Ecosystem" 
            className="h-15 sm:h-15 md:h-12 w-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-200" 
          />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav ref={dropdownRef} className="hidden lg:flex items-center space-x-7 xl:space-x-9 text-[15px] font-medium text-gray-700">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.hasDropdown ? (
                <div>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    className={`flex items-center gap-1.5 py-2 hover:text-[#FF6500] transition duration-200 focus:outline-none ${activeDropdown === item.name ? 'text-[#FF6500]' : 'text-gray-700'}`}
                    aria-expanded={activeDropdown === item.name}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-gray-500 group-hover:text-[#FF6500] ${activeDropdown === item.name ? 'rotate-180 text-[#FF6500]' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.name && (
                    <div 
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    >
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3 overflow-hidden">
                        {item.items.map((subItem) => {
                          const Icon = subItem.icon;
                          return (
                            <a
                              key={subItem.title}
                              href="#features"
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#FFF1E8]/50 transition duration-150 group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#FFF1E8] flex items-center justify-center text-[#FF6500] flex-shrink-0 group-hover:bg-[#FF6500] group-hover:text-white transition">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-[#111827] group-hover:text-[#FF6500] transition">
                                  {subItem.title}
                                </div>
                                <div className="text-xs text-gray-500 mt-0.5 leading-snug">
                                  {subItem.desc}
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className={`relative py-2 transition duration-200 ${
                    item.active
                      ? 'text-[#FF6500] font-semibold'
                      : 'text-gray-700 hover:text-[#FF6500]'
                  }`}
                >
                  {item.name}
                  {item.active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF6500] rounded-full mx-auto w-full" />
                  )}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Right side CTAs & Search */}
        <div className="hidden md:flex items-center gap-3.5 sm:gap-4">
          {/* Search Button */}
          {/* <button
            onClick={onOpenSearch}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#111827] hover:bg-gray-100 hover:text-[#FF6500] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6500]/30"
            aria-label="Search campus platform"
            title="Search"
          >
            <Search className="w-4 h-4 stroke-[2.2]" />
          </button> */}

          {/* Sign In Button */}
          {/* <button
            onClick={onOpenAuth}
            className="px-5 py-2 text-sm font-semibold text-[#FF6500] bg-white border border-[#FF6500] rounded-xl hover:bg-[#FFF1E8]/60 transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow"
          >
            Sign in                                     
          </button> */}

          {/* Get Started Button */}
          <button
            onClick={onOpenAuth}
            className="group px-5 py-2.5 text-sm font-semibold text-white bg-[#FF6500] hover:bg-[#E55A00] rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-orange-500/25 active:scale-[0.98] flex items-center gap-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile menu and search toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="w-9 h-9 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6500]/30"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 pt-4 pb-8 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100 pb-2">
                <a
                  href={item.href || '#features'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium flex items-center justify-between py-1.5 ${
                    item.active ? 'text-[#FF6500] font-bold' : 'text-gray-800'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                </a>
              </div>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }}
                className="w-full py-3 text-center font-semibold text-[#FF6500] border border-[#FF6500] rounded-xl bg-white hover:bg-[#FFF1E8]/60 transition"
              >
                Sign in
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }}
                className="w-full py-3 text-center font-semibold text-white bg-[#FF6500] hover:bg-[#E55A00] rounded-xl flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
