import React, { useState } from 'react';
import { Search, X, ArrowRight, BookOpen, School, Users, CheckCircle2 } from 'lucide-react';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const quickLinks = [
    { title: 'ERP Student Lifecycle Management', category: 'Module', icon: School },
    { title: 'LMS Course Authoring & Grading Sync', category: 'Module', icon: BookOpen },
    { title: 'Biometric & Geofenced Attendance System', category: 'Hardware & App', icon: Users },
    { title: 'Automated Code Submission Rubrics', category: 'Evaluation', icon: CheckCircle2 },
    { title: 'Outcome Based Education (OBE) NAAC Mapping', category: 'Compliance', icon: School },
  ];

  const filteredLinks = query.trim() 
    ? quickLinks.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase()))
    : quickLinks;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-5 sm:p-6 shadow-2xl border border-gray-100 relative animate-in slide-in-from-top-4 duration-200">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center mb-4">
          <Search className="w-5 h-5 text-gray-400 absolute left-3.5" />
          <input
            type="text"
            autoFocus
            placeholder="Search modules, features, documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6500]/30 focus:border-[#FF6500] transition"
          />
          <button
            onClick={onClose}
            className="absolute right-3 w-7 h-7 rounded-full bg-gray-200/80 hover:bg-gray-300 flex items-center justify-center text-gray-600 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results */}
        <div className="space-y-1.5 mt-2">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-2">
            Suggested Orbit Resources
          </span>
          {filteredLinks.length > 0 ? (
            filteredLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href="#features"
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-[#FFF1E8]/60 transition group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-[#FF6500] flex items-center justify-center text-gray-600 group-hover:text-white transition">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 group-hover:text-[#FF6500] transition">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-gray-400">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#FF6500] transition group-hover:translate-x-1" />
                </a>
              );
            })
          ) : (
            <div className="py-6 text-center text-sm text-gray-400">
              No matching modules found for "{query}"
            </div>
          )}
        </div>

        {/* Modal Bottom Keyboard hint */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 px-2">
          <span>Search the integrated campus knowledgebase</span>
          <span>Press ESC to close</span>
        </div>

      </div>
    </div>
  );
}
