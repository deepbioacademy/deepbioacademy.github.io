import { Plus } from "lucide-react";
import { faqItems } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

export function Faq() {
  return (
    <section id="faq" className="relative bg-slate-50 py-24 dark:bg-slate-900/40 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />

        <div className="mt-14 flex flex-col gap-3">
          {faqItems.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.04}>
              {/* Native exclusive accordion — no state, no hydration. */}
              <details
                name="faq"
                open={i === 0}
                className="group glass rounded-2xl border border-slate-900/10 transition-colors open:border-blue-600/30 open:bg-blue-600/[0.03] dark:border-white/10 dark:open:border-cyan-400/20"
              >
                <summary className="flex w-full items-center gap-4 px-6 py-5 text-left">
                  <span className="flex-1 text-sm font-semibold text-slate-900 sm:text-base dark:text-white">
                    {item.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900/5 text-slate-600 transition-transform duration-300 group-open:rotate-45 group-open:bg-gradient-to-br group-open:from-blue-600 group-open:to-violet-600 group-open:text-white dark:bg-white/10 dark:text-slate-300">
                    <Plus size={15} />
                  </span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
