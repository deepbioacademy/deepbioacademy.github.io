import {
  Atom,
  Dna,
  FlaskConical,
  GitBranch,
  Microscope,
  Network,
  ScanSearch,
  Target,
  Waypoints,
} from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { GlassCard } from "./ui/glass-card";

const icons = [Waypoints, Target, ScanSearch, Atom, Microscope, Network, GitBranch, Dna, FlaskConical];

export function Projects() {
  return (
    <section id="projects" className="relative bg-slate-50 py-24 dark:bg-slate-900/40 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hands-on Projects"
          title="Build a portfolio that proves you can do the work"
          description="Every concept is reinforced with a real, hands-on project using authentic research data and industry-standard tools."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={project.title} delay={(i % 3) * 0.08}>
                <GlassCard className="group relative h-full overflow-hidden border border-slate-900/10 bg-white/70 p-7 transition-all hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-blue-600/10 dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/0 via-violet-600/0 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 group-hover:from-blue-600 group-hover:via-violet-600 group-hover:to-cyan-500" />
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900/5 text-violet-600 transition-colors group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white dark:bg-white/5 dark:text-cyan-300">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
