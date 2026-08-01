import { ArrowRight } from "lucide-react";
import { Reveal } from "./ui/reveal";
import { preRegisterNote, preRegisterUrl } from "@/lib/data";

export function FinalCta() {
  return (
    <section className="relative overflow-clip bg-slate-950 py-24 sm:py-32">
      <div className="absolute inset-0">
        {/* Radial gradient instead of a 40rem circle under blur(130px), which
            the compositor has to rasterise and blur on its own layer. */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(46rem 34rem at 50% 50%, rgba(88, 80, 236, 0.3), rgba(6, 182, 212, 0.12) 45%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Become the Next Generation
            <br />
            <span className="text-gradient">Drug Discovery Scientist.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            Seats for the live cohort are limited. Apply today and start building your
            computational drug discovery portfolio in three months.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <a
            href={preRegisterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-violet-600/30 transition-all hover:scale-105 hover:shadow-violet-600/50 active:scale-95 sm:text-base"
          >
            Pre-Register Free
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-xs font-medium text-slate-400 sm:text-sm">{preRegisterNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
