import { ArrowRight, Download, Sparkles } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import { Counter } from "./ui/counter";
import { preRegisterNote, preRegisterUrl, stats } from "@/lib/data";

function parseStat(value: string) {
  const match = value.match(/^(\d+)(\+?)$/);
  if (!match) return null;
  return { number: parseInt(match[1], 10), suffix: match[2] };
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-clip bg-slate-950 pt-28 pb-20"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="anim-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            <Sparkles size={14} />
            Live Hands-on Training on Zoom · Enrolling Now
          </div>

          <h1
            className="anim-fade-up text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            NextGen Drug Discovery
            <br />
            <span className="text-gradient">with AI</span>
          </h1>

          <p
            className="anim-fade-up mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Master Computational Drug Discovery through Cheminformatics, Structural
            Bioinformatics, Molecular Modeling, Molecular Dynamics, and Artificial
            Intelligence.
          </p>

          <div
            className="anim-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              id="apply"
              href={preRegisterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-600/30 transition-all hover:scale-[1.03] hover:shadow-violet-600/50 active:scale-95 sm:w-auto"
            >
              Pre-Register Free
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#modules"
              className="glass glass-on-dark inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              <Download size={16} />
              Download Brochure
            </a>
          </div>

          <p
            className="anim-fade-up mt-4 text-xs font-medium text-slate-400 sm:text-sm"
            style={{ animationDelay: "0.35s" }}
          >
            {preRegisterNote}
          </p>
        </div>

        <div
          className="anim-fade-up mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-7"
          style={{ animationDelay: "0.45s" }}
        >
          {stats.map((stat, i) => {
            const parsed = parseStat(stat.value);
            return (
              <GlassCard
                key={stat.label}
                className="glass-on-dark flex flex-col items-center justify-center gap-1 px-3 py-5 text-center hover:-translate-y-1 hover:border-cyan-400/30"
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
        </div>
      </div>
    </section>
  );
}
