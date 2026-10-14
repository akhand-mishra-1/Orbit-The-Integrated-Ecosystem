import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedInstitutions from './components/TrustedInstitutions';
import Features from './components/Features';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import VideoModal from './components/VideoModal';
import SearchModal from './components/SearchModal';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handleOpenAuth = (mode = 'signin') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col selection:bg-[#FF6500]/15 selection:text-[#FF6500] overflow-x-hidden font-sans">
      {/* 1. Top Navigation Bar */}
      <Navbar 
        onOpenAuth={() => handleOpenAuth('signin')} 
        onOpenSearch={() => setSearchModalOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section (Headline, Stats, CTA, 3D Orbit Visualization, Campus Scene, Notes) */}
        <Hero 
          onOpenAuth={() => handleOpenAuth('signup')} 
          onOpenVideo={() => setVideoModalOpen(true)} 
        />

       

        {/* 4. Features Section (Headline, 4 Feature Cards, Bottom Tagline) */}
        <Features 
          onOpenAuth={() => handleOpenAuth('signup')} 
        />
      </main>

      {/* 5. Production Quality Footer */}
      <Footer 
        onOpenAuth={() => handleOpenAuth('signup')} 
      />

      {/* Interactive Modals */}
      <AuthModal 
        isOpen={authModalOpen} 
        initialMode={authMode} 
        onClose={() => setAuthModalOpen(false)} 
      />

      <VideoModal 
        isOpen={videoModalOpen} 
        onClose={() => setVideoModalOpen(false)} 
      />

      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />
    </div>
  );
}
