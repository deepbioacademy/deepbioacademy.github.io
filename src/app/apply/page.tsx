"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ACADEMY_PROGRAMS } from "@/data/programs";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Calendar,
  Clock,
  Globe2,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

function ApplyContent() {
  const searchParams = useSearchParams();
  const trackParam = searchParams.get("track");

  const [selectedProgramId, setSelectedProgramId] = useState<string>(trackParam || "bmp");

  useEffect(() => {
    if (trackParam) {
      const match = ACADEMY_PROGRAMS.find((p) => p.id === trackParam || p.slug === trackParam);
      if (match) setSelectedProgramId(match.id);
    }
  }, [trackParam]);

  const selectedProg = ACADEMY_PROGRAMS.find((p) => p.id === selectedProgramId) || ACADEMY_PROGRAMS[0];

  const isGoogleForm = selectedProg.applyUrl.startsWith("http");

  return (
    <div className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Admissions & Registration Portal
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Apply to DeepBio Academy
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Admissions and registrations for all tracks are managed directly via our official cohort registration forms.
          </p>
        </div>

        {/* Step 1: Program Selector Pills */}
        <div className="mb-10">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Select A Program Track
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACADEMY_PROGRAMS.map((prog) => {
              const isSelected = prog.id === selectedProgramId;
              return (
                <button
                  key={prog.id}
                  type="button"
                  onClick={() => setSelectedProgramId(prog.id)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-blue-600 shadow-md ring-2 ring-blue-500/20"
                      : "bg-white/80 hover:bg-white border-slate-200"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${prog.accentColor.bg} ${prog.accentColor.text}`}>
                        {prog.duration}
                      </span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />}
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 leading-snug">
                      {prog.shortTitle}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 mt-2 block">
                    {prog.category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Details & Direct Application Gateway */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Track Summary */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${selectedProg.accentColor.bg} ${selectedProg.accentColor.text}`}>
                  {selectedProg.badge}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                  {selectedProg.status}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3 mb-2">
                {selectedProg.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedProg.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Duration</div>
                  <div className="font-bold text-slate-900">{selectedProg.duration}</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Format</div>
                  <div className="font-bold text-slate-900">{selectedProg.format}</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Level</div>
                  <div className="font-bold text-slate-900">{selectedProg.level}</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                <Globe2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Language</div>
                  <div className="font-bold text-slate-900">{selectedProg.language}</div>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Curriculum & Mentorship Highlights
              </h4>
              {selectedProg.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Direct Official Google Form Action Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-700">
                <FileCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Official Registration Form</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Register for {selectedProg.shortTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Admissions for this cohort are handled directly via Google Forms. Please complete the official application form with your background and research interests.
              </p>

              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2 text-xs text-slate-700">
                <div className="font-bold text-blue-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Admissions Process Overview</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Fill in your educational background & contact details.</li>
                  <li>Our academic mentors review applications on a rolling basis.</li>
                  <li>Accepted participants will receive welcome instructions and onboarding links via email / WhatsApp.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {isGoogleForm ? (
                <a
                  href={selectedProg.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 hover:from-blue-700 hover:via-indigo-700 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Open Official Google Registration Form</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  href={selectedProg.applyUrl}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 hover:from-blue-700 hover:via-indigo-700 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Proceed to {selectedProg.shortTitle}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}

              <Link
                href={selectedProg.href}
                className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Read Full Program Syllabus & FAQs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> 100% Confidential
              </span>
              <span>•</span>
              <span>Direct Mentorship Access</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading admissions...</div>}>
      <ApplyContent />
    </Suspense>
  );
}
