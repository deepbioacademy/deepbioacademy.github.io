import { GraduationCap, FileText, Briefcase, Globe2, Compass, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProgramOutcomes() {
  const pathways = [
    {
      icon: GraduationCap,
      accent: "text-blue-600",
      accentBg: "bg-blue-50 border-blue-200",
      topBorder: "border-t-blue-500",
      title: "Funded MS & PhD Admissions",
      subtitle: "USA, Germany, UK, Sweden, Japan & Australia",
      desc: "Top international graduate programs require demonstrable dry-lab experience. You graduate with a verified GitHub portfolio, battle-tested pipelines, and the exact skills professors look for in graduate research assistants.",
      highlights: [
        "Verifiable GitHub research repository",
        "Strong computational foundation for graduate SOPs",
        "Direct preparation for lab interviews and coding tasks",
      ],
    },
    {
      icon: FileText,
      accent: "text-teal-600",
      accentBg: "bg-teal-50 border-teal-200",
      topBorder: "border-t-teal-500",
      title: "Peer-Reviewed Publications",
      subtitle: "First-author & co-authored genomics manuscripts",
      desc: "Go from consumer of papers to author. Learn to formulate biological hypotheses, run multi-cohort meta-analyses on public datasets (GEO/TCGA), and generate publication-quality figures that reviewers respect.",
      highlights: [
        "End-to-end meta-analysis methodology",
        "Publication-ready ggplot2 Volcano & UMAP figures",
        "Eligibility for active research lab projects",
      ],
    },
    {
      icon: Briefcase,
      accent: "text-indigo-600",
      accentBg: "bg-indigo-50 border-indigo-200",
      topBorder: "border-t-indigo-500",
      title: "Industry & Lab Independence",
      subtitle: "Bridge the wet-lab and computational divide",
      desc: "Stop waiting for external bioinformatics collaborators. Process your lab's raw sequencing data in-house, troubleshoot pipelines independently, and become the indispensable dry-lab lead in your department.",
      highlights: [
        "Process raw in-house sequencing runs",
        "Lead dry-lab analyses for research teams",
        "High demand across biotech and academic institutes",
      ],
    },
  ];

  const researchFields = [
    { name: "Cancer Genomics & Oncology", desc: "Tumor heterogeneity, driver genes & drug response" },
    { name: "Immunology & Immune Profiling", desc: "Single-cell T/B cell receptors & immunotherapy" },
    { name: "Spatial Neuroscience", desc: "Mapping cellular niches in brain and neural tissue" },
    { name: "Infectious Diseases & Pathogens", desc: "Host-pathogen dynamics and viral transcriptomics" },
    { name: "Precision & Genomic Medicine", desc: "Biomarker identification and multi-cohort patient stratification" },
    { name: "Stem Cell & Developmental Biology", desc: "Lineage tracing, differentiation trajectories & organoids" },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono font-bold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-blue-600" /> CAREER &amp; RESEARCH OUTCOMES
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Where This Mentorship <span className="text-blue-600">Takes You</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Transcriptomics is the fastest-growing skill in biological sciences. Here is how mastering it transforms your research independence, publications, and international academic career.
          </p>
        </div>

        {/* 3 Major Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pathways.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`bg-white rounded-3xl p-7 border border-slate-200 shadow-sm ${item.topBorder} border-t-4 flex flex-col justify-between space-y-6 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 transition-all duration-300 group`}
              >
                <div className="space-y-4">
                  {/* Icon & Subhead */}
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-2xl ${item.accentBg} border flex items-center justify-center ${item.accent} shadow-2xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs font-medium text-slate-500">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {item.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Research Fields Unlocked Strip */}
        <div className="bg-slate-50 rounded-3xl p-7 sm:p-9 border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-blue-600" /> Research Fields You Can Enter Immediately
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                The skills in Linux, Python, R, Bulk RNA-seq, Single-Cell, Spatial transcriptomics, and AI apply directly to:
              </p>
            </div>
            <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-mono">
              6 Core Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchFields.map((field, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className="text-sm font-bold text-slate-900">{field.name}</div>
                <div className="text-xs text-slate-500 mt-1 leading-snug">{field.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
