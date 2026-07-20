import { Beaker, Brain, LineChart, Microscope } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { GlassCard } from "./ui/glass-card";

const pillars = [
  {
    icon: Beaker,
    title: "Why Computational Drug Discovery",
    body: "Traditional wet-lab drug discovery takes over a decade and billions of dollars per approved drug, with high attrition at every stage. Computational methods let researchers simulate, screen, and prioritize candidates in silico — dramatically cutting cost, time, and risk before a single compound reaches the lab bench.",
  },
  {
    icon: Brain,
    title: "The AI Revolution in Pharma",
    body: "AI and deep learning are reshaping every stage of the pipeline — from predicting protein structures with tools like AlphaFold and ColabFold, to generating novel molecules and forecasting binding affinity with graph neural networks. This program builds the exact skill set the AI-driven pharma industry is hiring for right now.",
  },
  {
    icon: Microscope,
    title: "Real Pharmaceutical Applications",
    body: "Learn the same workflows used inside pharmaceutical and biotech R&D — target identification, virtual screening, molecular docking, molecular dynamics validation, and lead optimization — using the industry-standard open-source tools that power real drug discovery programs.",
  },
  {
    icon: LineChart,
    title: "Growing Industry & Research Demand",
    body: "Computational and AI drug discovery roles are among the fastest-growing in biotech, pharma, and academic research. This program prepares you for careers and research opportunities in cheminformatics, structural bioinformatics, CADD, and AI-driven molecular design.",
  },
];

export function About() {
  return (
    <section className="relative bg-slate-50 py-24 dark:bg-slate-900/40 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About the Program"
          title="Where computation meets the frontier of medicine"
          description="NextGen Drug Discovery with AI is a rigorous, hands-on program built for the new era of AI-accelerated pharmaceutical research."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <GlassCard className="group h-full border border-slate-900/10 bg-white/60 p-7 hover:-translate-y-1 hover:border-blue-600/30 dark:border-white/10 dark:bg-white/[0.03]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-violet-600/20">
                  <pillar.icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {pillar.body}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
