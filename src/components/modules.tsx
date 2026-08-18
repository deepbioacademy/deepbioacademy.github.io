import {
  Atom,
  BookOpen,
  Cpu,
  Dna,
  Layers,
  Network,
  Activity,
  Sparkles,
  ShieldAlert,
  FolderGit2,
} from "lucide-react";
import { curriculumModules } from "@/lib/data";

const moduleIcons = [
  Cpu,
  Atom,
  Dna,
  Layers,
  Network,
  Activity,
  Sparkles,
  Dna,
  ShieldAlert,
  FolderGit2,
];

export function Modules() {
  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-teal-600" />
            <span>Curriculum Organization &amp; Learning Modules</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            NextGen Drug Discovery Curriculum Roadmap
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            10 progressive modules engineered to take you from foundational scientific computing and cheminformatics to molecular dynamics, graph neural networks, in silico toxicology, and capstone translation.
          </p>
        </div>

        {/* 10 Modules Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {curriculumModules.map((mod, idx) => {
            const Icon = moduleIcons[idx % moduleIcons.length];

            return (
              <div
                key={mod.number}
                id={`module-${mod.id}`}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-teal-300 transition-all duration-300 p-6 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon + Module Number Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:scale-105 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-extrabold border border-slate-200/60">
                        Module {mod.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Summary */}
                  <div className="mt-4 mb-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wide">
                        {mod.tag}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[11px] font-medium text-slate-500">
                        {mod.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors tracking-tight leading-snug">
                      {mod.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-2.5">
                      {mod.summary}
                    </p>
                  </div>
                </div>

                {/* Bottom Tags */}
                <div className="pt-4 mt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {mod.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 text-[11px] font-medium border border-slate-200/60 group-hover:bg-teal-50/50 group-hover:text-teal-800 group-hover:border-teal-100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
