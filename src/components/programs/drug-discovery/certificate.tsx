import { Award, Dna, ShieldCheck } from "lucide-react";

export function Certificate() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Official Credential</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Earn an Official Verified Certificate
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-2">
            Complete the live sessions and capstone project to receive an official DeepBio Academy certificate of completion with verifiable digital credentials.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl rounded-3xl border border-slate-200/90 bg-gradient-to-b from-teal-50/40 via-white to-slate-50 p-2 sm:p-3 shadow-md">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 text-center shadow-xs">
            <div className="pointer-events-none absolute inset-4 rounded-xl border border-slate-100 sm:inset-6" />

            <div className="relative flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-md shadow-teal-600/20">
                <Dna className="w-7 h-7" />
              </div>

              <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.25em] text-slate-400">
                DeepBio Academy
              </p>

              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Certificate of Completion
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                This certifies that
              </p>

              <p className="mt-1 text-xl sm:text-2xl font-extrabold text-teal-700">
                Your Name Here
              </p>

              <p className="mx-auto mt-4 max-w-md text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                has successfully completed the{" "}
                <span className="font-bold text-slate-900">
                  NextGen Drug Discovery with AI
                </span>{" "}
                program, covering cheminformatics, structural bioinformatics, AutoDock Vina,
                GROMACS molecular dynamics, and Graph Neural Networks.
              </p>

              <div className="mt-8 flex w-full items-center justify-between border-t border-slate-100 pt-6">
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Issued</p>
                  <p className="text-xs font-bold text-slate-800">Upon Completion</p>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                  <ShieldCheck className="w-4 h-4" />
                  Verified Digital ID
                </span>

                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Signed</p>
                  <p className="text-xs font-bold text-slate-800">Lead Instructor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
