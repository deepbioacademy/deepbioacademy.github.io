"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ACADEMY_PROGRAMS, Program } from "@/data/programs";
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, HelpCircle, Send } from "lucide-react";

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const trackParam = searchParams.get("track");

  const [selectedProgramId, setSelectedProgramId] = useState<string>(trackParam || "bmp");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    academicBackground: "",
    experienceLevel: "Beginner",
    statementOfInterest: "",
  });

  useEffect(() => {
    if (trackParam) {
      const match = ACADEMY_PROGRAMS.find((p) => p.id === trackParam || p.slug === trackParam);
      if (match) setSelectedProgramId(match.id);
    }
  }, [trackParam]);

  const selectedProg = ACADEMY_PROGRAMS.find((p) => p.id === selectedProgramId) || ACADEMY_PROGRAMS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Admissions Gateway
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Apply to DeepBio Academy
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Take the first step towards publication-track computational research, molecular drug design, or generative AI workflows.
          </p>
        </div>

        {/* Step 1: Program Selector Pills */}
        <div className="mb-10">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Select Your Desired Program Track
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

        {/* Main Application Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Track Summary */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${selectedProg.accentColor.bg} ${selectedProg.accentColor.text}`}>
                {selectedProg.badge}
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-3 mb-2">
                {selectedProg.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedProg.subtitle}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-500 font-medium">Duration</span>
                <span className="font-bold text-slate-900">{selectedProg.duration}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-500 font-medium">Format</span>
                <span className="font-bold text-slate-900">{selectedProg.format}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-500 font-medium">Level</span>
                <span className="font-bold text-slate-900">{selectedProg.level}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-500 font-medium">Language</span>
                <span className="font-bold text-slate-900">{selectedProg.language}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Track Inclusions
              </h4>
              {selectedProg.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href={selectedProg.href}
                className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
              >
                <span>Read Full Program Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Application Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for applying for <strong>{selectedProg.title}</strong>. Our admissions committee will review your background and reach out via email within 48 hours.
                </p>
                <div className="pt-4">
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                  >
                    Back to Programs
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    Applicant Information
                  </h3>
                  <p className="text-xs text-slate-500">
                    Please provide accurate details so our mentors can evaluate your application.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ayesha Rahman"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ayesha@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 17XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Current Institution / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. University of Dhaka / Hospital"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Academic Background *
                    </label>
                    <select
                      value={formData.academicBackground}
                      onChange={(e) => setFormData({ ...formData, academicBackground: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                    >
                      <option value="">Select your discipline</option>
                      <option value="Biotechnology / Biochemistry">Biotechnology / Biochemistry</option>
                      <option value="Medicine / MBBS / BDS">Medicine / MBBS / BDS</option>
                      <option value="Pharmacy / Medchem">Pharmacy / Medchem</option>
                      <option value="Computer Science / Data Science">Computer Science / Data Science</option>
                      <option value="Microbiology / Genetics">Microbiology / Genetics</option>
                      <option value="High School / College Student">High School / College Student</option>
                      <option value="Other">Other Life Science / Engineering</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Prior Coding / AI Experience
                    </label>
                    <select
                      value={formData.experienceLevel}
                      onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                    >
                      <option value="None">Zero coding experience (Complete beginner)</option>
                      <option value="Beginner">Beginner (Basic Python or R syntax)</option>
                      <option value="Intermediate">Intermediate (Run packages, basic data cleaning)</option>
                      <option value="Advanced">Advanced (Custom scripts & pipelines)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    What is your primary research or career goal?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you hope to achieve (e.g., publish a paper, prepare for PhD applications, learn AI for drug discovery)..."
                    value={formData.statementOfInterest}
                    onChange={(e) => setFormData({ ...formData, statementOfInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 hover:from-blue-700 hover:via-indigo-700 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Application for {selectedProg.shortTitle}</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 text-center pt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> 100% Confidential
                  </span>
                  <span>•</span>
                  <span>No payment required upon application</span>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading admissions...</div>}>
      <ApplyFormContent />
    </Suspense>
  );
}
