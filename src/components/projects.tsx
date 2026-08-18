import {
  Atom,
  Dna,
  FlaskConical,
  GitBranch,
  Microscope,
  Network,
  Sparkles,
} from "lucide-react";
import { projects } from "@/lib/data";

const projectIcons = [Atom, FlaskConical, Microscope, Network, GitBranch, Dna];

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Hands-on Research Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Projects Built on Real Research Data
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Gain production-level mastery with hands-on projects designed to be showcased directly on GitHub and in your academic and industry research applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = projectIcons[i % projectIcons.length];
            return (
              <div
                key={project.title}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white text-slate-600 text-[11px] font-medium border border-slate-200"
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
