'use client';

import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  Check, 
  ClipboardList
} from 'lucide-react';
import { LinkConfig } from '@/types';
import { DEFAULT_CONFIG } from '@/utils/config';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  config?: LinkConfig;
  initialTrack?: string;
  eventTitle?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  config = DEFAULT_CONFIG,
  initialTrack,
  eventTitle
}) => {
  const safeConfig = config || DEFAULT_CONFIG;
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | 'school' | 'mentor'>(() => {
    if (initialTrack?.includes('Teacher')) return 'teacher';
    if (initialTrack?.includes('School')) return 'school';
    if (initialTrack?.includes('Mentor')) return 'mentor';
    return 'student';
  });

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const getFormUrl = () => {
    switch (selectedRole) {
      case 'student': return safeConfig.studentFormUrl;
      case 'teacher': return safeConfig.teacherFormUrl;
      case 'school': return safeConfig.schoolPartnerFormUrl;
      case 'mentor': return safeConfig.mentorFormUrl;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getFormUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-lg w-full max-h-[92vh] overflow-y-auto my-auto animate-scaleUp">
        
        {/* Modal Top Banner */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          <span className="inline-block bg-indigo-500/20 text-indigo-300 text-[11px] font-bold tracking-wider px-2.5 py-0.5 rounded-full mb-2">
            agami.ai Bangladesh
          </span>

          <h3 className="text-lg sm:text-xl font-bold text-white pr-8">
            {eventTitle || 'Cohort Registration'}
          </h3>

          <p className="text-xs text-slate-300 mt-1 font-normal">
            Complete the official Google Form application. All programmes are free.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4 sm:space-y-5">
          
          {/* Role selector pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              onClick={() => setSelectedRole('student')}
              className={`py-3 px-2 rounded-xl text-center text-xs font-bold transition-all cursor-pointer ${
                selectedRole === 'student'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 active:bg-slate-200'
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setSelectedRole('teacher')}
              className={`py-3 px-2 rounded-xl text-center text-xs font-bold transition-all cursor-pointer ${
                selectedRole === 'teacher'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 active:bg-slate-200'
              }`}
            >
              Teacher
            </button>
            <button
              onClick={() => setSelectedRole('school')}
              className={`py-3 px-2 rounded-xl text-center text-xs font-bold transition-all cursor-pointer ${
                selectedRole === 'school'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 active:bg-slate-200'
              }`}
            >
              School
            </button>
            <button
              onClick={() => setSelectedRole('mentor')}
              className={`py-3 px-2 rounded-xl text-center text-xs font-bold transition-all cursor-pointer ${
                selectedRole === 'mentor'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 active:bg-slate-200'
              }`}
            >
              Mentor
            </button>
          </div>

          {/* Form preview details */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
              <ClipboardList className="w-4 h-4 text-indigo-600 flex-shrink-0" />
              <span>
                {selectedRole === 'student' && 'Student Application Form (Google Forms)'}
                {selectedRole === 'teacher' && 'Educator TOT Application Form (Google Forms)'}
                {selectedRole === 'school' && 'School Campus Workshop Request (Google Forms)'}
                {selectedRole === 'mentor' && 'Youth Mentor & Volunteer Form (Google Forms)'}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              {selectedRole === 'student' && 'Requires student name, school/college, division, parent/guardian contact, and track preference.'}
              {selectedRole === 'teacher' && 'Requires ICT/STEM teacher details, institution address, subject taught, and expected student reach.'}
              {selectedRole === 'school' && 'Requires institutional representative contact, lab capacity, and estimated number of students.'}
              {selectedRole === 'mentor' && 'Requires university major, technical background, and preferred regional bootcamp location.'}
            </p>

            <div className="pt-2 border-t border-slate-200/80 text-[11px] font-medium text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>100% Free Â· Official Certificates Provided</span>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-2.5 pt-1">
            <a
              href={getFormUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <span>Open Google Form Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopy}
              className="w-full py-3 px-4 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 active:bg-slate-100 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'URL Copied to Clipboard!' : 'Copy Google Form Link'}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

