"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { roadmapStages } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { GlassCard } from "./ui/glass-card";

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
              <div className="absolute left-0 right-0 top-6 h-0.5 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500" />
              <div className="relative grid grid-cols-9 gap-2">
                {roadmapStages.map((stage, i) => (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-center text-center"
                  >
                    <span
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${
                        active === i
                          ? "scale-110 border-cyan-400 bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-violet-600/40"
                          : "border-slate-300 bg-white text-slate-500 group-hover:border-violet-400 group-hover:text-violet-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
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

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="mt-10"
              >
                <GlassCard className="mx-auto max-w-2xl border-slate-900/10 bg-slate-900/[0.03] px-8 py-6 text-center dark:border-white/10 dark:bg-white/5">
                  <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-cyan-300">
                    Stage {active + 1} of {roadmapStages.length}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                    {roadmapStages[active].title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {roadmapStages[active].description}
                  </p>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
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
                  className="text-left"
                >
                  <GlassCard
                    className={`border px-5 py-4 transition-colors ${
                      isActive
                        ? "border-violet-500/40 bg-violet-500/5"
                        : "border-slate-900/10 dark:border-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          isActive
                            ? "bg-gradient-to-br from-blue-600 to-violet-600 text-white"
                            : "bg-slate-900/5 text-slate-600 dark:bg-white/10 dark:text-slate-300"
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
                    <AnimatePresence>
                      {isActive ? (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden pl-13 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                        >
                          <span className="mt-3 block">{stage.description}</span>
                        </motion.p>
                      ) : null}
                    </AnimatePresence>
                  </GlassCard>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
