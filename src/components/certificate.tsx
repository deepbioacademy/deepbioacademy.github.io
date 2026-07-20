import { Award, Dna, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

export function Certificate() {
  return (
    <section className="relative bg-white py-24 dark:bg-slate-950 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certificate"
          title="Earn a certificate that proves what you can build"
          description="Complete the program and capstone project to receive an official DeepBio Academy certificate of completion."
        />

        <Reveal delay={0.1} className="mt-16">
          <div className="relative mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 p-[3px] shadow-2xl shadow-violet-600/20">
            <div className="relative overflow-hidden rounded-[15px] bg-white p-8 dark:bg-slate-950 sm:p-14">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet-600/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="pointer-events-none absolute inset-4 rounded-lg border border-slate-900/10 dark:border-white/10 sm:inset-6" />

              <div className="relative flex flex-col items-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-violet-600/25">
                  <Dna size={26} />
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  DeepBio Academy
                </p>
                <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                  Certificate of Completion
                </h3>
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                  This certifies that
                </p>
                <p className="mt-2 text-xl font-semibold text-transparent bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text sm:text-2xl">
                  Your Name Here
                </p>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  has successfully completed the{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    NextGen Drug Discovery with AI
                  </span>{" "}
                  program, covering cheminformatics, structural bioinformatics, molecular
                  dynamics, and AI for drug discovery.
                </p>

                <div className="mt-8 flex w-full items-center justify-between border-t border-slate-900/10 pt-6 dark:border-white/10">
                  <div className="text-left">
                    <p className="text-[11px] uppercase tracking-wide text-slate-400">Issued</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Upon Completion
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-300">
                    <ShieldCheck size={14} />
                    Verified
                  </span>
                  <div className="text-right">
                    <p className="text-[11px] uppercase tracking-wide text-slate-400">Signed</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Lead Instructor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Award size={16} className="text-violet-600 dark:text-cyan-300" />
            Illustrative preview — final certificate design provided at graduation.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
