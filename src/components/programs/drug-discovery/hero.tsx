import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { preRegisterUrl } from "@/lib/data";

const previewModules = [
  {
    num: "01",
    bg: "bg-teal-100 text-teal-800",
    hoverBg: "hover:bg-teal-50/60 hover:border-teal-100",
    hoverText: "group-hover:text-teal-800",
    title: "M1: Foundations & Scientific Python",
    desc: "NumPy, Pandas, Google Colab GPU & biochem primer",
    href: "#module-1",
  },
  {
    num: "02",
    bg: "bg-cyan-100 text-cyan-800",
    hoverBg: "hover:bg-cyan-50/60 hover:border-cyan-100",
    hoverText: "group-hover:text-cyan-800",
    title: "M2: Cheminformatics & RDKit",
    desc: "SMILES, ChEMBL data mining & QSAR modeling",
    href: "#module-2",
  },
  {
    num: "03",
    bg: "bg-emerald-100 text-emerald-800",
    hoverBg: "hover:bg-emerald-50/60 hover:border-emerald-100",
    hoverText: "group-hover:text-emerald-800",
    title: "M4: Computer-Aided Drug Design (CADD)",
    desc: "AutoDock Vina virtual screening & PLIP poses",
    href: "#module-4",
  },
  {
    num: "04",
    bg: "bg-blue-100 text-blue-800",
    hoverBg: "hover:bg-blue-50/60 hover:border-blue-100",
    hoverText: "group-hover:text-blue-800",
    title: "M6: Molecular Dynamics & GROMACS",
    desc: "100ns solvent simulations, RMSD/RMSF curves",
    href: "#module-6",
  },
  {
    num: "05",
    bg: "bg-teal-100 text-teal-800",
    hoverBg: "hover:bg-teal-50/60 hover:border-teal-100",
    hoverText: "group-hover:text-teal-800",
    title: "M8: Deep Learning & PyTorch GNNs",
    desc: "Graph neural networks, AlphaFold & ColabFold",
    href: "#module-8",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/80">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none -z-10 overflow-hidden opacity-60">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-teal-200/35 rounded-full blur-3xl" />
        <div className="absolute top-12 right-1/4 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute top-36 left-1/2 w-72 h-72 bg-emerald-200/25 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal-100 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-800">
                3-Month Live Cohort · Enroll Now
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] sm:leading-[1.12]">
              Next-Gen Drug Discovery{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-700">
                with AI
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              <span className="font-semibold text-slate-900">DeepBio Academy</span> delivers
              10 comprehensive modules spanning Cheminformatics, Structural Bioinformatics, CADD docking, System Biology, GROMACS 100ns molecular dynamics, PyTorch GNNs, and In Silico Toxicology on Google Colab GPUs.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={preRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold text-sm shadow-md shadow-teal-600/25 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Join Free Pre-Registration</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#curriculum"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200 shadow-xs hover:border-slate-300 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-teal-600" />
                <span>Explore 10 Curriculum Modules</span>
              </a>
            </div>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-slate-200/80 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>100% Free Pre-Reg</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>36 Live Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Colab Free GPU Tier</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>1 Capstone Project</span>
              </div>
            </div>
          </div>

          {/* Right Column: Curriculum Framework Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/60 p-6 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Curriculum Framework</h3>
                    <p className="text-[11px] text-slate-500">Target-to-Lead Roadmap</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                  10 Core Modules
                </span>
              </div>

              <div className="space-y-2.5">
                {previewModules.map((item) => (
                  <a
                    key={item.num}
                    href={item.href}
                    className={`p-3 rounded-xl bg-slate-50 ${item.hoverBg} border border-slate-100 transition-all cursor-pointer flex items-center justify-between group`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-md ${item.bg} flex items-center justify-center font-bold text-xs`}
                      >
                        {item.num}
                      </div>
                      <div>
                        <div className={`text-xs font-bold text-slate-800 ${item.hoverText}`}>
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-700 group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>

              <div className="pt-1">
                <a
                  href="#curriculum"
                  className="w-full py-2.5 rounded-xl border border-teal-200 bg-teal-50/50 hover:bg-teal-100/70 text-teal-800 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>View All 10 Modules in Detail</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
