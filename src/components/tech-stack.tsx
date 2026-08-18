import { Code2, Wrench } from "lucide-react";
import { techStack } from "@/lib/data";

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...techStack, ...techStack];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex shrink-0 animate-marquee gap-3.5 pr-3.5 ${reverse ? "[animation-direction:reverse]" : ""}`}
      >
        {items.map((tool, i) => (
          <div
            key={`${tool}-${i}`}
            className="flex shrink-0 items-center gap-2.5 rounded-xl border border-slate-200/90 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs hover:border-teal-300 transition-colors"
          >
            <Code2 className="w-4 h-4 text-teal-600" />
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section id="tools" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5 text-teal-600" />
            <span>20+ Open-Source Technologies</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industry &amp; Academic Standard Software
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Every session uses the exact toolkits and cloud environments utilized across biopharma and top computational laboratories.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3.5">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
