import {
  Atom,
  Beaker,
  BrainCircuit,
  FlaskConical,
  GraduationCap,
  Microscope,
  PenTool,
  TestTubes,
} from "lucide-react";
import { audience } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { GlassCard } from "./ui/glass-card";

const icons = [
  GraduationCap,
  GraduationCap,
  Microscope,
  Atom,
  BrainCircuit,
  FlaskConical,
  TestTubes,
  Beaker,
  PenTool,
];

export function Audience() {
  return (
    <section className="relative bg-slate-50 py-24 dark:bg-slate-900/40 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who Should Join"
          title="Built for the next generation of drug discovery scientists"
          description="Whether you're starting out or advancing an existing research career, this program meets you where you are."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {audience.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.06}>
                <GlassCard className="flex h-full flex-col items-center gap-3.5 border border-slate-900/10 bg-white/70 px-5 py-8 text-center transition-all hover:-translate-y-1 hover:border-violet-500/30 dark:border-white/10 dark:bg-white/[0.03]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/10 to-violet-600/10 text-violet-600 dark:from-blue-600/20 dark:to-violet-600/20 dark:text-cyan-300">
                    <Icon size={22} />
                  </span>
                  <span className="text-sm font-semibold leading-tight text-slate-900 dark:text-white">
                    {item.title}
                  </span>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
