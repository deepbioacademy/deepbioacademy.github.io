'use client';

import React from 'react';
import { 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  GraduationCap 
} from 'lucide-react';
import { LinkConfig } from '@/types';
import { DEFAULT_CONFIG } from '@/utils/config';

interface ProgramOverviewProps {
  onOpenRegistration?: (track?: string) => void;
  config?: LinkConfig;
}

export const ProgramOverview: React.FC<ProgramOverviewProps> = ({
  onOpenRegistration,
  config = DEFAULT_CONFIG
}) => {
  return (
    <section id="overview" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>agami.ai Educational Mission</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why agami.ai in Bangladesh?
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            <strong className="text-slate-900 font-semibold">agami.ai</strong> is an independent youth AI education initiative in Bangladesh. We adapt and localize the world-renowned Experience AI programme — developed by the Raspberry Pi Foundation and Google DeepMind — ensuring every student and teacher has equal access to future technologies.
          </p>
        </div>

        {/* 3 Main Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Pillar 1 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 card-hover space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl">
              <Cpu className="w-6 h-6" />
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Intuitive & Unplugged
            </h3>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Over 50% of the lessons are unplugged (paper cards, roleplay, blackboard logic), so students without high-end computers can master machine learning models and algorithms effortlessly.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 card-hover space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Ethics, Bias & Safety
            </h3>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Students do not just use AI — they learn how training bias occurs, how to protect personal privacy, and how to build responsible solutions for society and Bangladesh.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 card-hover space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl">
              <GraduationCap className="w-6 h-6" />
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Teacher Enablement (TOT)
            </h3>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Empowering ICT and STEM teachers with ready-made PPTX presentation decks, educator guides, and lesson rubrics in clear, pedagogical English.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

