import {
  GraduationCap,
  Atom,
  FlaskConical,
  Microscope,
  Cpu,
  Award,
} from "lucide-react";
import { audience } from "@/lib/data";

const audienceIcons = [GraduationCap, GraduationCap, Microscope, Atom, FlaskConical, Microscope, Cpu, Award];

export function Audience() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
            <span>Target Audience &amp; Cohort Profile</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Who Should Join This Program?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-2">
            Built for ambitious students, graduate researchers, and industry scientists stepping into in silico therapeutics.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {audience.map((item, i) => {
            const Icon = audienceIcons[i % audienceIcons.length];
            return (
              <div
                key={item.title}
                className="flex h-full flex-col items-center gap-3.5 rounded-2xl border border-slate-200/90 bg-white px-5 py-7 text-center shadow-xs transition-all hover:shadow-md hover:border-teal-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs sm:text-sm font-bold leading-tight text-slate-900">
                  {item.title}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-semibold">
                  {item.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
