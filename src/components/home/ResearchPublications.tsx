import Link from "next/link";
import { ArrowRight, ExternalLink, FileText, CheckCircle2, Sparkles } from "lucide-react";

export default function ResearchPublications() {
  const featuredPapers = [
    {
      title: "Comprehensive Transcriptomic Profiling of Colorectal Adenocarcinoma Reveals Immune Subtypes and Novel Therapeutic Targets",
      journal: "Under Peer Review",
      year: "2025",
      disease: "Colorectal Cancer",
      methods: "Bulk RNA-seq • DESeq2 • GSEA • Immune Infiltration",
      cohort: "BMP Cohort 1",
    },
    {
      title: "Multi-Omics Identification of Key Biomarkers and Drug Repurposing Candidates in Pancreatic Ductal Adenocarcinoma",
      journal: "Preprint Manuscript",
      year: "2025",
      disease: "Pancreatic Cancer",
      methods: "Differential Expression • WGCNA • AutoDock Vina Docking",
      cohort: "BMP Cohort 1",
    },
    {
      title: "Single-Cell Transcriptional Landscape of Renal Cell Carcinoma Microenvironment",
      journal: "In Preparation",
      year: "2025",
      disease: "Renal Cell Carcinoma",
      methods: "scRNA-seq • Seurat v5 • Scanpy • Cell-Cell Communication",
      cohort: "BMP Cohort 2",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" /> Real Scientific Impact
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Mentee Publications & Research Outputs
            </h2>
            <p className="text-base text-slate-600">
              Unlike theoretical courses, DeepBio programs guide participants from initial hypotheses to publication-grade manuscripts, reproducible analyses, and international research readiness.
            </p>
          </div>

          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group"
          >
            <span>Explore All Research Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPapers.map((paper, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-bold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                    {paper.disease}
                  </span>
                  <span className="text-slate-400 font-medium">{paper.year}</span>
                </div>

                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  {paper.title}
                </h3>

                <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                  <p className="font-medium text-slate-700">{paper.methods}</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-600">{paper.journal}</span>
                <span className="text-blue-600 font-bold">{paper.cohort}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
