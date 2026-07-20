"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { HeroBackground } from "./hero-background";
import { GlassCard } from "./ui/glass-card";
import { Counter } from "./ui/counter";
import { stats } from "@/lib/data";

function parseStat(value: string) {
  const match = value.match(/^(\d+)(\+?)$/);
  if (!match) return null;
  return { number: parseInt(match[1], 10), suffix: match[2] };
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300"
          >
            <Sparkles size={14} />
            Live Online Cohort · Enrolling Now
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            NextGen Drug Discovery
            <br />
            <span className="text-gradient bg-[length:200%_auto] animate-[gradient-shift_6s_ease_infinite]">
              with AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Master Computational Drug Discovery through Cheminformatics, Structural
            Bioinformatics, Molecular Modeling, Molecular Dynamics, and Artificial
            Intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              id="apply"
              href="#program"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-600/30 transition-all hover:scale-[1.03] hover:shadow-violet-600/50 active:scale-95 sm:w-auto"
            >
              Apply Now
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#modules"
              className="glass glass-blur inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              <Download size={16} />
              Download Brochure
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-7"
        >
          {stats.map((stat, i) => {
            const parsed = parseStat(stat.value);
            return (
              <GlassCard
                key={stat.label}
                blur
                className="flex flex-col items-center justify-center gap-1 px-3 py-5 text-center hover:-translate-y-1 hover:border-cyan-400/30"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <span className="text-xl font-extrabold text-white sm:text-2xl">
                  {parsed ? <Counter value={parsed.number} suffix={parsed.suffix} /> : stat.value}
                </span>
                <span className="text-[11px] font-medium leading-tight text-slate-400 sm:text-xs">
                  {stat.label}
                </span>
              </GlassCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
