import { CheckCircle2, Award } from "lucide-react";
import { learningOutcomes } from "@/lib/data";

export function Outcomes() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Mastery &amp; Capabilities</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What You Will Walk Away Able to Do
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-2">
            By the end of the program you will have practical, portfolio-ready command of the full computational drug discovery pipeline.
          </p>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {learningOutcomes.map((outcome) => (
            <div
              key={outcome}
              className="flex items-center gap-3.5 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-4.5 shadow-xs transition-all hover:bg-white hover:border-teal-300 hover:shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5 shrink-0 text-teal-600" />
              <span className="text-sm font-bold text-slate-800">{outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
