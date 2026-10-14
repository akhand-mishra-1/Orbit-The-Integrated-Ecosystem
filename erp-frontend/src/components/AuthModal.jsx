import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Shield, School, Lock, Mail, User } from 'lucide-react';
import orbitLogo from '../assets/orbit_logo.png';

export default function AuthModal({ isOpen, onClose, initialMode = 'signin' }) {
  const [mode, setMode] = useState(initialMode);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    role: 'administrator',
    password: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Orbit Brand Mark */}
        <div className="flex items-center gap-2.5 mb-6">
          <img src={orbitLogo} alt="Orbit" className="h-15 w-30 object-contain" />
        </div>

        {/* Toggle Mode */}
        <div className="grid grid-cols-2 bg-gray-100/80 p-1 rounded-xl mb-6 text-sm font-semibold">
          <button
            type="button"
            onClick={() => setMode('signin')}
            className={`py-2 rounded-lg transition ${mode === 'signin' ? 'bg-white text-[#FF6500] shadow-xs' : 'text-gray-600 hover:text-gray-900'}`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`py-2 rounded-lg transition ${mode === 'signup' ? 'bg-white text-[#FF6500] shadow-xs' : 'text-gray-600 hover:text-gray-900'}`}
          >
            Get Started
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center animate-in fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-gray-900">
              {mode === 'signin' ? 'Welcome Back!' : 'Request Received!'}
            </h4>
            <p className="text-xs text-gray-600 mt-1 max-w-xs">
              {mode === 'signin' 
                ? 'Authenticating your institutional single sign-on session...'
                : 'Our academic solutions team will contact your administration shortly.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Dean / Provost / Dr."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6500]/30 focus:border-[#FF6500] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Institution Name
                  </label>
                  <div className="relative">
                    <School className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="University or College Name"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6500]/30 focus:border-[#FF6500] transition"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Official Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="admin@institution.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6500]/30 focus:border-[#FF6500] transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6500]/30 focus:border-[#FF6500] transition"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 bg-[#FF6500] hover:bg-[#E55A00] text-white font-semibold text-sm rounded-xl transition duration-200 shadow-md shadow-orange-500/20 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>{mode === 'signin' ? 'Access Campus Console' : 'Deploy Orbit for Your Campus'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Security guarantee */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-center gap-1.5 text-xs text-gray-400">
          <Shield className="w-3.5 h-3.5 text-gray-400" />
          <span>SSO & SAML 2.0 Institutional Security</span>
        </div>

      </div>
    </div>
  );
}
