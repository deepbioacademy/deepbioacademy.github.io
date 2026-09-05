'use client';

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { LinkConfig } from '@/types';
import { DEFAULT_CONFIG } from '@/utils/config';

interface NavbarProps {
  onOpenConfig: () => void;
  onOpenRegistration: (track?: string) => void;
  config?: LinkConfig;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConfig,
  onOpenRegistration,
  config = DEFAULT_CONFIG
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Textual Logo */}
          <button 
            className="flex items-center gap-2 cursor-pointer group text-left focus:outline-none"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="agami.ai Bangladesh"
          >
            <span className="inline-flex items-baseline font-extrabold text-2xl tracking-tight text-slate-900 transition-colors group-hover:text-indigo-600">
              <span>agami<span className="text-indigo-600 group-hover:text-indigo-700">.ai</span></span>
              <sup className="ml-1 text-[11px] font-bold text-indigo-600 group-hover:text-indigo-700 tracking-wider select-none uppercase -top-2">
                BD
              </sup>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => scrollToSection('overview')}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 transition-colors cursor-pointer"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 transition-colors cursor-pointer"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('mentors')}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 transition-colors cursor-pointer"
            >
              Be a Mentor
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Right Header Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Primary Action Button */}
            <button
              onClick={() => onOpenRegistration('Student')}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-sm shadow-indigo-500/20 hover:shadow-md transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Apply Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-4 border-t border-slate-100 mt-3 space-y-1 animate-fadeIn">
            <button
              onClick={() => scrollToSection('overview')}
              className="w-full text-left px-3.5 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Program Overview</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="w-full text-left px-3.5 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Curriculum</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollToSection('mentors')}
              className="w-full text-left px-3.5 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Be a Mentor</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="w-full text-left px-3.5 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors flex items-center justify-between"
            >
              <span>Frequently Asked Questions</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegistration('Student');
                }}
                className="w-full py-3.5 rounded-xl bg-indigo-600 active:bg-indigo-700 text-white font-semibold text-sm text-center shadow-md shadow-indigo-500/20 flex items-center justify-center gap-2"
              >
                <span>Apply Now</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

