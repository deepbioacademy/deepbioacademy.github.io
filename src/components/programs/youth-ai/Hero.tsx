'use client';

import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  School, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { LinkConfig } from '@/types';
import { DEFAULT_CONFIG } from '@/utils/config';

interface HeroProps {
  onOpenRegistration: (track?: string) => void;
  config?: LinkConfig;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRegistration,
  config = DEFAULT_CONFIG
}) => {
  const scrollTo = (id: string) => {
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
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/80">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none -z-10 overflow-hidden opacity-60">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-12 right-1/4 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-36 left-1/2 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Partnership Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white border border-indigo-100 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-800">
               National AI Literacy Initiative 
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] sm:leading-[1.12]">
              Empowering Future{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800">
                AI Leaders
              </span>{' '}
              in Bangladesh
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              <span className="font-semibold text-slate-900">agami.ai</span> delivers foundational Artificial Intelligence & Machine Learning literacy, ethics, and hands-on toolkits to school and college students aged 11-18 and educators across all 8 divisions — 100% free of cost.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onOpenRegistration('Student')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-sm shadow-md shadow-indigo-500/25 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Join Free Student Cohort</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('curriculum')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200 shadow-xs hover:border-slate-300 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>Explore 5 Curriculum Modules</span>
              </button>
            </div>

            {/* Trust Bullet Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-slate-200/80 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>100% Free Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Ages 11-18+ Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Unplugged + Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Teacher Guides</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Feature Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/60 p-6 space-y-5">
              
              {/* Card Top Pill */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Curriculum Framework
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Raspberry Pi & Google DeepMind
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                  5 Core Modules
                </span>
              </div>

              {/* Interactive Preview Items */}
              <div className="space-y-3">
                <div 
                  onClick={() => scrollTo('curriculum')}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-100 hover:border-indigo-100 transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                      01
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-indigo-700">
                        Module 1: AI Safety
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Privacy, media literacy & responsible use
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                </div>

                <div 
                  onClick={() => scrollTo('curriculum')}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-100 transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                      02
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-blue-700">
                        Module 2: Foundations of AI
                      </div>
                      <div className="text-[11px] text-slate-500">
                        ML models, dataset bias & decision trees
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all" />
                </div>

                <div 
                  onClick={() => scrollTo('curriculum')}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-violet-50/60 border border-slate-100 hover:border-violet-100 transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-xs">
                      03
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-violet-700">
                        Module 3: Large Language Models
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Generative AI, prompt craft & evaluation
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-violet-700 group-hover:translate-x-0.5 transition-all" />
                </div>

                <div 
                  onClick={() => scrollTo('curriculum')}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-100 hover:border-emerald-100 transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                      04
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                        Module 4: AI & Biology
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Protein folding, agriculture & ecosystems
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>

              {/* Card Footer Quick Action */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenRegistration('Student')}
                  className="w-full py-2.5 rounded-xl border border-indigo-200 bg-indigo-50/50 hover:bg-indigo-100/70 text-indigo-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Apply to Join agami.ai Cohort</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

