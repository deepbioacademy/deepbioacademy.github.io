import React from "react";
import Publications from "@/components/sections/Publications";
import Link from "next/link";
import { 
  Dna, 
  Brain, 
  FlaskConical, 
  Microscope, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Activity,
  Layers,
  Award
} from "lucide-react";

export const metadata = {
  title: "Research Tracks & Computational Pipelines — DeepBio Academy",
  description: "Explore active research tracks in Cancer Genomics, Neurogenomics, and Next-Gen Drug Discovery with AI.",
};

export default function ResearchPage() {
  const workflows = [
    {
      num: "01",
      name: "Bulk RNA-Seq Meta-Analysis",
      goal: "Large-scale transcriptomic discovery using harmonized public datasets from GEO, SRA, and TCGA.",
      tech: ["FastQC", "STAR/Salmon", "DESeq2", "MetaVolcanoR", "RankProd"]
    },
    {
      num: "02",
      name: "Single-Cell Harmonization & Atlas Construction",
      goal: "Cross-cohort atlas construction, cell annotation, and comparative analysis using global single-cell repositories.",
      tech: ["Harmony", "scVI", "CellTypist", "PySCENIC", "Scanpy/Seurat"]
    },
    {
      num: "03",
      name: "ML/DL in Genomics & Clinical Biomarkers",
      goal: "Training predictive models (XGBoost, DNNs) on high-dimensional multi-omics data for prognostic biomarker discovery.",
      tech: ["XGBoost", "Deep Learning", "SHAP/LIME", "Tidyverse/Pandas"]
    },
    {
      num: "04",
      name: "AI Drug Discovery & Molecular Dynamics",
      goal: "Structure-based virtual screening, 100ns GROMACS molecular dynamics, and graph neural network bioactivity prediction.",
      tech: ["RDKit", "AutoDock Vina", "GROMACS", "PyTorch Geometric", "ChEMBL"]
    }
  ];

  const projects = [
    {
      title: "Harmonized Cancer Cell Atlas",
      tag: "Cancer Genomics",
      desc: "Constructing high-resolution single-cell atlases across 10+ cancer types using variational integration and CellTypist.",
      icon: <Dna className="w-5 h-5 text-blue-600" />,
      accent: "border-blue-200 bg-blue-50/40 text-blue-700"
    },
    {
      title: "Neurogenomics Reference Map",
      tag: "Neuroscience",
      desc: "Mapping cell-type-specific dysregulation in neurodegenerative disorders via cross-cohort single-cell harmonization.",
      icon: <Brain className="w-5 h-5 text-indigo-600" />,
      accent: "border-indigo-200 bg-indigo-50/40 text-indigo-700"
    },
    {
      title: "Pan-Cancer TME & Immune Profiling",
      tag: "Immunology",
      desc: "Computational profiling of the tumor immune microenvironment to identify universal prognostic markers and checkpoint targets.",
      icon: <Activity className="w-5 h-5 text-amber-600" />,
      accent: "border-amber-200 bg-amber-50/40 text-amber-700"
    },
    {
      title: "AI-Driven Molecular Therapeutics",
      tag: "Drug Discovery",
      desc: "Deploying graph neural networks and 100ns GROMACS solvent simulations to discover patient-specific therapeutic hit compounds.",
      icon: <FlaskConical className="w-5 h-5 text-teal-600" />,
      accent: "border-teal-200 bg-teal-50/40 text-teal-700"
    }
  ];

  return (
    <div className="bg-slate-50/70 min-h-screen py-12 lg:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Microscope className="w-4 h-4" /> DeepBio Research Laboratories
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Real Scientific Discovery &amp; Computational Innovation
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Researchers and top-performing mentees collaborate on active scientific projects across cancer genomics, neurogenomics, and AI-accelerated drug discovery — producing publication-grade methodologies and reproducible code.
          </p>
        </div>

        {/* Impact Numbers Banner */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900">3 Active</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Research Tracks</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl font-black text-blue-600">100+</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Datasets Harmonized</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl font-black text-teal-600">100ns</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">GROMACS MD Simulations</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl font-black text-indigo-600">100%</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Reproducible Pipelines</p>
          </div>
        </div>

        {/* Section: 3 Research Tracks */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Core Specializations</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Active Research Focus Tracks
            </h2>
            <p className="text-sm text-slate-600">
              Our lab focuses on high-impact computational biology areas with dedicated computational infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Track 1: Cancer Genomics */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between border-t-4 border-t-blue-600 group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 border border-blue-200/80 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Dna className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  Track 01
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-3 mb-3 leading-snug">
                  Cancer Genomics &amp; Transcriptomics
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  Integrative analysis of tumor transcriptomes, somatic mutations, and immune microenvironments to identify prognostic biomarkers and therapeutic targets across multiple cancer types.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Tumor subtype classification via bulk &amp; single-cell RNA-Seq</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Survival modeling with multi-omics risk scores</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Immune cell deconvolution &amp; TME profiling</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Drug sensitivity prediction using ML/DL pipelines</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {['DESeq2', 'TCGA', 'GEO', 'STAR', 'SHAP'].map((tag) => (
                  <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Track 2: Neurogenomics */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between border-t-4 border-t-indigo-600 group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 border border-indigo-200/80 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Brain className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                  Track 02
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-3 mb-3 leading-snug">
                  Neurogenomics &amp; Brain Atlases
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  Computational dissection of gene expression landscapes in neurological and neurodegenerative disorders to uncover cell-type-specific dysregulation and novel disease pathways.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Single-cell atlas construction of human brain regions</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Differential expression &amp; pathway analysis</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Gene regulatory network inference (SCENIC)</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Cross-disorder comparative transcriptomics</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {['Scanpy', 'Seurat', 'CellTypist', 'Harmony', 'scVI'].map((tag) => (
                  <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Track 3: Drug Discovery */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between border-t-4 border-t-teal-600 group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 border border-teal-200/80 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
                  Track 03
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-3 mb-3 leading-snug">
                  Next-Gen Drug Discovery with AI
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  Computational identification of therapeutic targets, high-throughput virtual screening, 100ns GROMACS molecular dynamics simulations, and deep learning for bioactivity &amp; ADMET forecasting.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>High-throughput virtual screening &amp; AutoDock Vina</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>100ns GROMACS solvent simulations &amp; RMSD/RMSF curves</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Cheminformatics with RDKit &amp; ChEMBL mining</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Deep learning (GNNs) for bioactivity &amp; ADMET safety</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {['AutoDock', 'GROMACS', 'RDKit', 'ChEMBL', 'PyTorch'].map((tag) => (
                  <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Section: Active Initiatives Grid */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Ongoing Projects</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Active Lab Research Initiatives
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Ambitious multi-omics and structural biology projects conducted by DeepBio research fellows and top mentees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      {proj.icon}
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${proj.accent}`}>
                      {proj.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-700 transition-colors mb-2 leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Core Computational Workflows */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Standard Operating Procedures</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Core Computational Workflows
            </h2>
            <p className="text-sm text-slate-600">
              Production-grade computational workflows used across all DeepBio research investigations.
            </p>
          </div>

          <div className="space-y-4">
            {workflows.map((wf) => (
              <div
                key={wf.num}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 border border-blue-200/60 font-black text-base flex items-center justify-center flex-shrink-0 shadow-2xs">
                    {wf.num}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
                      {wf.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-3xl">
                      {wf.goal}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 md:flex-shrink-0">
                  {wf.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Peer-Reviewed Publications Section */}
        <Publications />

      </div>
    </div>
  );
}
