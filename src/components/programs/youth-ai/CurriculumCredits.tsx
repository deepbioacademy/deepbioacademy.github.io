import React from 'react';
import { GoogleDeepMindLogo } from './GoogleDeepMindLogo';
import { RaspberryPiLogo } from './RaspberryPiLogo';
import { Logo as DeepBioLogo } from './DeepBioLogo';

export const CurriculumCredits: React.FC = () => {
  return (
    <section aria-label="Curriculum Partners and Credits" className="border-y border-slate-200/90 bg-white py-5 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Context Note */}
        <div className="text-center mb-3.5">
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Curriculum co-created globally by <span className="font-semibold text-slate-900">Google DeepMind</span> &amp; <span className="font-semibold text-slate-900">Raspberry Pi Foundation</span> (Experience AI), localized for Bangladesh by <span className="font-semibold text-slate-900">agami.ai</span> &amp; <span className="font-semibold text-slate-900">DeepBio</span>.
          </p>
        </div>

        {/* 3 Partner Logos in One Clean Horizontal Line */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 pt-1">
          
          {/* 1. Google DeepMind */}
          <div className="flex items-center flex-shrink-0" title="Google DeepMind">
            <GoogleDeepMindLogo height={23} />
          </div>

          {/* Vertical Divider */}
          <div className="h-6 w-px bg-slate-200 hidden sm:block" />

          {/* 2. Raspberry Pi Foundation */}
          <div className="flex items-center flex-shrink-0" title="Raspberry Pi Foundation">
            <RaspberryPiLogo height={28} />
          </div>

          {/* Vertical Divider */}
          <div className="h-6 w-px bg-slate-200 hidden sm:block" />

          {/* 3. DeepBio */}
          <div className="flex items-center flex-shrink-0" title="DeepBio">
            <DeepBioLogo className="scale-90 sm:scale-95 origin-left" />
          </div>

        </div>

      </div>
    </section>
  );
};
