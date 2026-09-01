import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const BMP_APPLY_URL = "https://forms.gle/zSPBekZdeiBpJURj9";
export const BMP_CURRICULUM_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1oXl4a8N4W8jupClYWJCCwr06Waz8R5bW5Mo63QuGz6k/edit?usp=sharing";

const previewModules = [
  {
    num: "01",
    bg: "bg-blue-100 text-blue-800",
    hoverBg: "hover:bg-blue-50/70 hover:border-blue-200",
    hoverText: "group-hover:text-blue-700",
    title: "01: Computational Foundation",
    desc: "Linux HPC, Bash, NGS data formats, Python & R fundamentals",
    href: BMP_CURRICULUM_SHEET_URL,
  },
  {
    num: "02",
    bg: "bg-teal-100 text-teal-800",
    hoverBg: "hover:bg-teal-50/70 hover:border-teal-200",
    hoverText: "group-hover:text-teal-700",
    title: "02: Bulk RNA-seq & Meta-Analysis",
    desc: "FASTQ to Counts, DESeq2, GSEA pathways & REM meta-analysis",
    href: BMP_CURRICULUM_SHEET_URL,
  },
  {
    num: "03",
    bg: "bg-indigo-100 text-indigo-800",
    hoverBg: "hover:bg-indigo-50/70 hover:border-indigo-200",
    hoverText: "group-hover:text-indigo-700",
    title: "03: Single-Cell RNA-seq (scRNA-seq)",
    desc: "10x Genomics, Cell Ranger, Seurat v5 & marker curation",
    href: BMP_CURRICULUM_SHEET_URL,
  },
  {
    num: "04",
    bg: "bg-pink-100 text-pink-800",
    hoverBg: "hover:bg-pink-50/70 hover:border-pink-200",
    hoverText: "group-hover:text-pink-700",
    title: "04: Spatial Transcriptomics",
    desc: "10x Visium HD & Xenium, SpatialExperiment & tissue niches",
    href: BMP_CURRICULUM_SHEET_URL,
  },
  {
    num: "05",
    bg: "bg-purple-100 text-purple-800",
    hoverBg: "hover:bg-purple-50/70 hover:border-purple-200",
    hoverText: "group-hover:text-purple-700",
    title: "05: AI in Computational Biology",
    desc: "ML Models, FAIR Data, Deep Learning & Agentic Bio-AI",
    href: BMP_CURRICULUM_SHEET_URL,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/80">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none -z-10 overflow-hidden opacity-60">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-200/35 rounded-full blur-3xl" />
        <div className="absolute top-12 right-1/4 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute top-36 left-1/2 w-72 h-72 bg-purple-200/25 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Cohort Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-800">
                Cohort 03 (2026) · Open for Enrollment
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] sm:leading-[1.12]">
              Bioinformatics Mentorship{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600">
                Program (BMP)
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              A selective, research-grade mentorship led by <strong className="text-slate-900 font-semibold">Md. Jubayer Hossain</strong>. Master production-grade pipelines in <strong className="text-slate-900 font-semibold">Linux, Python, R &amp; AI</strong> across Bulk RNA-seq, Single-Cell genomics, Spatial Transcriptomics (Visium HD &amp; Xenium), and Machine Learning toward high-impact publication and international PhD admissions.
            </p>

            {/* Mentor Attribution Strip */}
            <div className="flex items-center gap-3.5 pt-1">
              <Image
                src={`${BASE}/img/agamiai_mentors/jubayer.jpg`}
                alt="Md. Jubayer Hossain"
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-cover border-2 border-blue-200 shadow-xs"
                priority
              />
              <div className="text-xs sm:text-sm">
                <div className="font-bold text-slate-900">Md. Jubayer Hossain</div>
                <div className="text-slate-500">Mentor</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={BMP_APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-600/25 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Apply for Cohort 03</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={BMP_CURRICULUM_SHEET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-bold text-sm border border-slate-200 shadow-xs hover:border-slate-300 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Explore Curricula (Google Sheet)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-slate-200/80 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Live Lab Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Python, R &amp; Bioconductor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>5 Comprehensive Modules</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>1-on-1 Code Reviews</span>
              </div>
            </div>

          </div>

          {/* Right Column: Curriculum Framework Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/60 p-6 sm:p-7 space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-700">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-sm">Curriculum Framework</h3>
                    <p className="text-[11px] text-slate-500">Raw Data to Bio-AI Deployment</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-bold font-mono">
                  5 Core Modules
                </span>
              </div>

              <div className="space-y-2">
                {previewModules.map((item) => (
                  <a
                    key={item.num}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-2xl bg-slate-50/80 ${item.hoverBg} border border-slate-200/60 transition-all cursor-pointer flex items-center justify-between group`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-lg ${item.bg} flex items-center justify-center font-black text-xs font-mono shrink-0`}
                      >
                        {item.num}
                      </div>
                      <div>
                        <div className={`text-xs font-bold text-slate-900 ${item.hoverText}`}>
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-500 leading-snug">{item.desc}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </a>
                ))}
              </div>

              <div className="pt-1">
                <a
                  href={BMP_CURRICULUM_SHEET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl border border-blue-200 bg-blue-50/60 hover:bg-blue-100/70 text-blue-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Explore Curricula (Google Sheet)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
