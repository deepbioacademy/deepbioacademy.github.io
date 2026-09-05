"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function AcademyFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Which DeepBio Academy program is right for me?",
      a: "If you want to master RNA sequencing, single-cell analysis, and co-author a publication, the Bioinformatics Mentorship Program (BMP) is our flagship. If your interest lies in molecular docking, GROMACS simulations, and drug design, choose Next-Gen AI Drug Discovery. If you are a lab biologist wanting to leverage AI without coding, No-Code AI for Life Sciences is perfect. For younger learners (11-18) and school educators, agami.ai provides foundational AI literacy.",
    },
    {
      q: "Do I need a strong coding or math background?",
      a: "No! Each program is structured progressively. For BMP and Drug Discovery, we provide pre-cohort foundation primers in Python, R, and Linux. For No-Code AI for Life Sciences, zero programming is required.",
    },
    {
      q: "How does the publication-track research work in BMP?",
      a: "During the mentorship, you formulate a specific hypothesis in a chosen disease area (e.g. colorectal, kidney, or pancreatic oncology), perform differential expression and pathway enrichment, and write manuscript sections under 1-on-1 mentor review.",
    },
    {
      q: "Are the sessions live or recorded?",
      a: "All sessions are conducted live over Zoom with interactive hands-on problem-solving. Full high-definition recordings, reproducible code notebooks, and dataset repositories are provided after every class.",
    },
    {
      q: "Will I receive a verified certificate upon completion?",
      a: "Yes. Upon completing your required assignments, capstone project, and presentation, you receive a cryptographically verified DeepBio Academy Certificate of Completion.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-base text-slate-600">
            Everything you need to know about cohorts, curriculum, and admissions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full p-6 text-left font-bold text-base text-slate-900 flex items-center justify-between gap-4 hover:text-blue-600 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    openIdx === i ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              {openIdx === i && (
                <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
