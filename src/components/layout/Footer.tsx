"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

function GlobeIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function LinkedInIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function TwitterIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function FacebookIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white border-t border-slate-200/90 pt-16 pb-12 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-slate-200/80 text-left">
          
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4">
            <Link 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Logo size={32} />
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed pr-2">
              An intensive mentorship and research platform taking you from raw sequencing data to publication-ready research and AI discovery.
            </p>
          </div>

          {/* Col 2: Connect with Mentor */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-4 tracking-tight">
              Connect with Mentor
            </h4>
            <div className="flex flex-col gap-3 text-sm text-slate-600">
              <a 
                href="https://mdjubayerhossain.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <GlobeIcon size={17} className="text-slate-400" />
                <span>Personal Website</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/hossainmj" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <LinkedInIcon size={17} className="text-slate-400" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/hossainlab" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <GithubIcon size={17} className="text-slate-400" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://twitter.com/hossain_lab" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <TwitterIcon size={17} className="text-slate-400" />
                <span>Twitter / X</span>
              </a>
            </div>
          </div>

          {/* Col 3: DeepBio Academy */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-4 tracking-tight">
              DeepBio Academy
            </h4>
            <div className="flex flex-col gap-3 text-sm text-slate-600">
              <a 
                href="https://deepbioacademy.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <GlobeIcon size={17} className="text-slate-400" />
                <span>Academy Website</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/deepbioacademy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <LinkedInIcon size={17} className="text-slate-400" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/deepbioacademy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <GithubIcon size={17} className="text-slate-400" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.facebook.com/deepbioacademy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <FacebookIcon size={17} className="text-slate-400" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Col 4: DeepBio Limited */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-4 tracking-tight">
              DeepBio Limited
            </h4>
            <div className="flex flex-col gap-3 text-sm text-slate-600">
              <a 
                href="https://deepbioltd.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <GlobeIcon size={17} className="text-slate-400" />
                <span>Official Website</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/deepbioltd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <LinkedInIcon size={17} className="text-slate-400" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/deepbioltd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <GithubIcon size={17} className="text-slate-400" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.facebook.com/deepbioltd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <FacebookIcon size={17} className="text-slate-400" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-slate-600 font-medium">
            © {year} DeepBio Academy · All Rights Reserved
          </div>
          <div className="flex items-center gap-6">
            <Link href="/alumni" className="hover:text-blue-600 transition-colors">
              Alumni Network
            </Link>
            <Link href="/policies" className="hover:text-blue-600 transition-colors">
              Privacy & Policies
            </Link>
            <Link href="/apply" className="hover:text-blue-600 transition-colors font-semibold text-blue-700">
              Admissions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
