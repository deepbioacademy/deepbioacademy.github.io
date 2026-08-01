import { Check, ChevronDown } from "lucide-react";
import { modules } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

export function Modules() {
  return (
    <section id="modules" className="relative bg-white py-24 dark:bg-slate-950 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Curriculum"
          title="8 modules, one integrated pipeline"
          description="Each module builds directly on the last, culminating in a complete, end-to-end computational drug discovery project."
        />

        <div className="mt-14 flex flex-col gap-4">
          {modules.map((mod, i) => (
            <Reveal key={mod.number} delay={i * 0.04}>
              {/* Native exclusive accordion — the browser owns `open` (the
                  `name` group closes siblings on its own), so React must not
                  try to reconcile that attribute during hydration. */}
              <details
                name="modules"
                open={i === 0}
                suppressHydrationWarning
                className="group glass overflow-clip rounded-2xl border border-slate-900/10 transition-colors open:border-blue-600/30 open:bg-blue-600/[0.03] dark:border-white/10 dark:open:border-cyan-400/20 dark:open:bg-cyan-400/[0.03]"
              >
                <summary className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7">
                  <span className="font-mono text-sm font-bold text-transparent bg-gradient-to-br from-blue-600 to-violet-600 bg-clip-text sm:text-base">
                    {mod.number}
                  </span>
                  <span className="flex-1 text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                    {mod.title}
                  </span>
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180 group-open:text-violet-600 dark:group-open:text-cyan-300"
                  />
                </summary>
                <ul className="grid gap-2.5 px-5 pb-6 pl-16 sm:px-7 sm:pl-20 sm:grid-cols-2">
                  {mod.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <Check size={15} className="mt-0.5 shrink-0 text-cyan-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
