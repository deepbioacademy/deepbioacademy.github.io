import { CheckCircle2 } from "lucide-react";
import { learningOutcomes } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { GlassCard } from "./ui/glass-card";

export function Outcomes() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Learning Outcomes"
          title="What you'll walk away able to do"
          description="By the end of the program you'll have practical, portfolio-ready command of the full computational drug discovery stack."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {learningOutcomes.map((outcome, i) => (
            <Reveal key={outcome} delay={(i % 5) * 0.05}>
              <GlassCard className="flex items-center gap-3.5 border border-white/10 bg-white/[0.03] px-6 py-4.5 hover:border-cyan-400/30">
                <CheckCircle2 size={20} className="shrink-0 text-cyan-400" />
                <span className="text-sm font-semibold text-white sm:text-base">{outcome}</span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
