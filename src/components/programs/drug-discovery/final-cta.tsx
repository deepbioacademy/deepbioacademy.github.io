import { ArrowRight, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { contactEmail, preRegisterUrl } from "@/lib/data";

export function FinalCta() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-950 via-teal-950/80 to-slate-950 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready to Step into In Silico Therapeutics?</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Become the Next Generation Drug Discovery Scientist
            </h2>

            <p className="text-slate-300 text-xs sm:text-base font-normal leading-relaxed max-w-2xl">
              Whether you are an undergraduate student in pharmacy/biotech, a graduate researcher, or an AI engineer, our 3-month live mentorship equips you with reproducible, submittable computational research pipelines.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={preRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold text-xs sm:text-sm shadow-md shadow-teal-600/25 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Pre-Register Free for Live Cohort</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={`mailto:${contactEmail}`}
                className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>Contact Mentorship Team</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center gap-x-5 gap-y-1.5 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% Free Pre-Registration
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                First 2 live Zoom sessions free trial
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Google Colab Free Tier (No GPU purchase required)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
