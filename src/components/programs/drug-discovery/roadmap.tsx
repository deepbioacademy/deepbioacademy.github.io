"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { roadmapStages } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

export function Roadmap() {
  const [active, setActive] = useState(0);

  return (
    <section id="program" className="relative bg-white py-24 dark:bg-slate-950 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Program Journey"
          title="Your path from foundations to frontier AI"
          description="Nine progressive stages take you from Python fundamentals to a fully integrated, AI-driven drug discovery pipeline."
        />

        <Reveal delay={0.1} className="mt-16">
          {/* Desktop horizontal roadmap */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-6 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />
              <div className="relative grid grid-cols-9 gap-2">
                {roadmapStages.map((stage, i) => (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-center text-center cursor-pointer"
                  >
                    <span
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-200 ${
                        active === i
                          ? "scale-110 border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                          : "border-slate-300 bg-white text-slate-600 group-hover:border-blue-500 group-hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`mt-3 text-xs font-semibold leading-tight transition-colors ${
                        active === i
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-500 group-hover:text-slate-800 dark:text-slate-500 dark:group-hover:text-slate-300"
                      }`}
                    >
                      {stage.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div key={active} className="anim-fade-up-fast mt-10">
              <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-slate-50/70 px-8 py-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-sky-400">
                  Stage {active + 1} of {roadmapStages.length}
                </span>
                <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                  {roadmapStages[active].title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {roadmapStages[active].description}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile / tablet vertical roadmap */}
          <div className="flex flex-col gap-3 lg:hidden">
            {roadmapStages.map((stage, i) => {
              const isActive = active === i;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActive(isActive ? -1 : i)}
                  aria-expanded={isActive}
                  className="text-left cursor-pointer"
                >
                  <div
                    className={`rounded-2xl border px-5 py-4 transition-colors ${
                      isActive
                        ? "border-blue-500 bg-blue-50/60 dark:border-blue-500/40 dark:bg-blue-950/20"
                        : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="flex-1 text-sm font-semibold text-slate-900 dark:text-white">
                        {stage.title}
                      </span>
                      <ChevronRight
                        size={16}
                        className={`shrink-0 text-slate-400 transition-transform ${isActive ? "rotate-90" : ""}`}
                      />
                    </div>
                    <div
                      className={`grid overflow-clip pl-13 transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="min-h-0 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        <span className="mt-3 block">{stage.description}</span>
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
