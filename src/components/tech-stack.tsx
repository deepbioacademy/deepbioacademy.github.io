import { Code2 } from "lucide-react";
import { techStack } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...techStack, ...techStack];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex shrink-0 animate-marquee gap-4 pr-4 ${reverse ? "[animation-direction:reverse]" : ""}`}
      >
        {items.map((tool, i) => (
          <div
            key={`${tool}-${i}`}
            className="flex shrink-0 items-center gap-2.5 rounded-full border border-slate-900/10 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            <Code2 size={15} className="text-violet-600 dark:text-cyan-300" />
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section id="tools" className="relative overflow-hidden bg-white py-24 dark:bg-slate-950 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Software & Technologies"
          title="20+ industry-standard tools, hands-on"
          description="Every module is taught with the real open-source software used across pharma and academic computational research."
        />
      </div>

      <div className="mt-14 flex flex-col gap-4">
        <Reveal>
          <Row />
        </Reveal>
        <Reveal delay={0.1}>
          <Row reverse />
        </Reveal>
      </div>
    </section>
  );
}
