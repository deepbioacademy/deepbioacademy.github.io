import React from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Dna, 
  FlaskConical, 
  Layers, 
  ArrowRight, 
  ExternalLink, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  FileCode2,
  Terminal,
  Activity
} from "lucide-react";

export const metadata = {
  title: "Tutorials & Computational Workflows — DeepBio Academy",
  description: "Explore free open-source tutorials, Google Colab notebooks, and video series for RNA-seq, single-cell analysis, AlphaFold2, and AI drug discovery.",
};

const interactiveGuides = [
  {
    id: "bulk-rnaseq",
    title: "Bulk RNA-Seq Analysis Pipeline",
    description: "The gold-standard workflow for measuring differential gene expression across cell populations — covering QC, pseudo-alignment, DESeq2, and pathway enrichment.",
    href: "/tutorials/bulk-rnaseq",
    tag: "Transcriptomics",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    tools: ["FastQC", "Salmon", "DESeq2", "clusterProfiler"],
    icon: <Dna className="w-6 h-6 text-blue-600" />
  },
  {
    id: "single-cell-analysis",
    title: "Single-Cell RNA-Seq Analysis",
    description: "Dissect cellular heterogeneity at single-cell resolution. Step-by-step guidance on Cell Ranger output parsing, Seurat/Scanpy normalization, UMAP clustering, and marker annotation.",
    href: "/tutorials/single-cell-analysis",
    tag: "Single-Cell Omics",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
    tools: ["Scanpy", "Seurat", "Harmony", "CellTypist"],
    icon: <Activity className="w-6 h-6 text-indigo-600" />
  },
  {
    id: "spatial-transcriptomics",
    title: "Spatial Transcriptomics Workflows",
    description: "Integrate molecular gene expression with intact tissue histopathology using 10x Genomics Visium and spatial analysis frameworks.",
    href: "/tutorials/spatial-transcriptomics",
    tag: "Spatial Biology",
    badge: "bg-teal-50 text-teal-700 border-teal-200",
    tools: ["Seurat Spatial", "Squidpy", "SpatialDE", "Scanpy"],
    icon: <Layers className="w-6 h-6 text-teal-600" />
  }
];

const pipelines = [
  {
    title: "End-to-End Bulk RNA-seq Quantification Pipeline using Salmon",
    description: "A complete pipeline for pseudo-alignment and quantification of bulk RNA-seq data using Salmon — from raw FASTQ reads to transcript-level abundance estimates ready for downstream DESeq2 analysis.",
    category: "RNA-Seq",
    tools: ["Python", "Salmon", "tximeta", "DESeq2"],
    input: "Raw FASTQ files, reference transcriptome",
    output: "Transcript/gene-level count matrix, quantification summary",
    links: [
      { label: "GitHub Repository", url: "https://github.com/hossainlab/salmon-rnaseq", type: "github" }
    ]
  },
  {
    title: "nf-core/rnaseqmeta: Nextflow Pipeline for RNA-seq Meta-Analysis",
    description: "A Nextflow pipeline for reproducible meta-analysis of multiple RNA-seq cohorts — automating sample retrieval, quality control, batch effect correction, and cross-study differential expression.",
    category: "RNA-Seq",
    tools: ["Nextflow", "nf-core", "Salmon", "DESeq2"],
    input: "Multiple RNA-seq datasets (FASTQ or SRA accessions), sample sheets",
    output: "Integrated count matrix, cross-study DE results, batch-corrected expression",
    links: [
      { label: "GitHub Repository", url: "https://github.com/hossainlab/nf-core-rnaseqmeta", type: "github" }
    ]
  },
  {
    title: "Fast Preprocessing of scRNA-seq with kallisto | bustools | kb-python",
    description: "End-to-end pipeline for scRNA-seq preprocessing using kallisto, bustools, and kb-python — transforming raw sequencing data into filtered count matrices for Scanpy and Seurat.",
    category: "Single-Cell",
    tools: ["Python", "kallisto", "bustools", "kb-python", "Scanpy"],
    input: "Raw FASTQ files (10x Chromium)",
    output: "Filtered cell × gene count matrix, QC metrics",
    links: [
      { label: "Open in Google Colab", url: "https://colab.research.google.com/drive/1i9WxmUjSq3mNoPostbJLSu6eeNi8vqgE?usp=sharing", type: "colab" }
    ]
  },
  {
    title: "Practical Guide for Single-Cell Data Analysis with scverse Ecosystem",
    description: "Comprehensive walkthrough of the scverse workflow — covering quality control filtering, highly variable genes, dimensionality reduction, Leiden clustering, and marker gene annotation.",
    category: "Single-Cell",
    tools: ["Python", "Scanpy", "scVI-tools", "AnnData"],
    input: "Count matrix (AnnData .h5ad or 10x format)",
    output: "Annotated cell clusters, UMAP embeddings, cell type labels",
    links: [
      { label: "Open in Google Colab", url: "https://colab.research.google.com/drive/1MyBbAQvTKGLFOpPAP-w3hedyXs-l0Vff?usp=sharing", type: "colab" }
    ]
  },
  {
    title: "Predicting Protein Structures with ColabFold & AlphaFold2",
    description: "Predict 3D protein structures from amino acid sequences using ColabFold's accelerated AlphaFold2 pipeline with MMseqs2 MSA generation and interactive in-browser 3D structure visualization.",
    category: "Protein Modeling",
    tools: ["Python", "ColabFold", "AlphaFold2", "MMseqs2", "py3Dmol"],
    input: "Amino acid sequence (FASTA format)",
    output: "Predicted 3D structures (PDB), pLDDT confidence scores, PAE plots",
    links: [
      { label: "Open in Google Colab", url: "https://colab.research.google.com/drive/1PQS5EWpGP5aWJ4KtrGlKetCidA44RySx?usp=sharing", type: "colab" }
    ]
  },
  {
    title: "Boltz2-Notebook: Diffusion-Based Protein-Ligand Structure Prediction",
    description: "Predict protein-ligand complex conformations and binding affinities using the state-of-the-art Boltz2 diffusion model — enabling rapid in silico docking and interaction mapping without heavy MD setups.",
    category: "Protein Modeling",
    tools: ["Python", "Boltz2", "RDKit", "py3Dmol"],
    input: "Protein sequence and ligand SMILES/SDF",
    output: "Predicted complex structures (PDB), binding affinity scores",
    links: [
      { label: "Open in Google Colab", url: "https://colab.research.google.com/drive/1MzmcvZTvpvGEyTQdJIt5DCVn9mJOZS1J?usp=sharing", type: "colab" }
    ]
  },
  {
    title: "AI in Drug Discovery: Molecular Property Prediction & Virtual Screening",
    description: "End-to-end pipeline for AI-driven small molecule screening — covering Morgan fingerprint featurization, toxicity prediction, ADMET property modeling, and virtual screening of compound libraries.",
    category: "Drug Discovery",
    tools: ["Python", "RDKit", "DeepChem", "scikit-learn"],
    input: "Compound libraries (SMILES), molecular descriptors",
    output: "Toxicity predictions, ADMET profiles, ranked hit compounds",
    links: [
      { label: "Open in Google Colab", url: "https://colab.research.google.com/drive/124b2zhlFujYBk2cGoT64DWPTwr0SB-Ph?usp=sharing", type: "colab" }
    ]
  },
  {
    title: "In Silico Toxicology & Safety Modeling with Machine Learning",
    description: "Build machine learning models to predict compound toxicity from 2D molecular structures — covering molecular fingerprint generation, endpoint classification, and structure-activity relationships (SAR).",
    category: "Drug Discovery",
    tools: ["Python", "RDKit", "scikit-learn", "Mordred"],
    input: "Chemical compounds (SMILES), toxicity endpoint labels",
    output: "Toxicity classification models, SAR insights, safety predictions",
    links: [
      { label: "Open in Google Colab", url: "https://colab.research.google.com/drive/1ths5Mb1sHos6y5qcnodcWOnw-XR-Mw8w?usp=sharing", type: "colab" }
    ]
  }
];

const videoPlaylists = [
  {
    course: "R for Research & Bioinformatics",
    description: "Video lectures covering R programming fundamentals, tidyverse data wrangling, statistical testing, and publication-ready visualization.",
    playlist: "https://www.youtube.com/playlist?list=PLQtDkvtE4BUa05wsFn5OWHEapIiSEYp7T",
    categories: ["Statistics", "R Programming"]
  },
  {
    course: "Machine Learning for Bioinformatics",
    description: "Hands-on video tutorials applying machine learning techniques (Random Forest, XGBoost, Neural Nets) to biological and genomic datasets.",
    playlist: "https://www.youtube.com/playlist?list=PLQtDkvtE4BUCZuWpLiM5bV5--gjuY5ZI",
    categories: ["Machine Learning", "Genomics"]
  },
  {
    course: "RNA-Seq Analysis with R & Bioconductor",
    description: "Step-by-step video tutorials on bulk RNA-seq analysis using R, DESeq2, and Bioconductor, from raw counts to biological pathway interpretation.",
    playlist: "https://www.youtube.com/playlist?list=PLQtDkvtE4BUZUHltq6DJ5KGrncv0gn_Zj",
    categories: ["Transcriptomics", "Bioconductor"]
  },
  {
    course: "AI for Drug Discovery & Cheminformatics",
    description: "Video series introducing AI-powered approaches to drug discovery, including molecular dynamics, toxicology modeling, and virtual screening.",
    playlist: "https://www.youtube.com/playlist?list=PLQtDkvtE4BUYu0_nHZ4m9JcSHtLbJ_HUM",
    categories: ["AI Therapeutics", "CADD"]
  },
  {
    course: "Cancer Bioinformatics & Multi-Omics",
    description: "Video tutorials on cancer genomics analysis, covering TCGA data mining, mutation profiles, Kaplan-Meier survival modeling, and immune infiltration.",
    playlist: "https://www.youtube.com/playlist?list=PLQtDkvtE4BUazUbCqCGNrsziV2heHcR2V",
    categories: ["Cancer Genomics", "TCGA"]
  },
  {
    course: "Academic Writing & Manuscript Preparation",
    description: "Video lectures on scientific writing, publication ethics, structured methodology descriptions, and peer-review preparation.",
    playlist: "https://www.youtube.com/playlist?list=PLQtDkvtE4BUba95QvQBoaKEALyRO-VBoS",
    categories: ["Scientific Writing", "Publishing"]
  },
  {
    course: "Python for Health Data Analytics",
    description: "Video tutorials on using Python, pandas, and seaborn for clinical data wrangling, epidemiologic trends, and biostatistical models.",
    playlist: "https://www.youtube.com/playlist?list=PLQtDkvtE4BUYqRQa6Lev4NFg5MJ4fuKsw",
    categories: ["Python", "Health Analytics"]
  },
  {
    course: "Bioinformatics Workflow Automation Bootcamp",
    description: "Intensive video series on building automated, reproducible bioinformatics workflows using Linux, Conda, Nextflow, and Docker.",
    playlist: "https://www.youtube.com/playlist?list=PLQtDkvtE4BUZtvFhArTgkenAHFZL7xcpB",
    categories: ["Nextflow", "Workflows"]
  },
  {
    course: "Single-Cell Analysis with R & Seurat",
    description: "Comprehensive step-by-step video guide on scRNA-seq analysis using R and Seurat, from QC filtering to t-SNE/UMAP cluster annotation.",
    playlist: "https://youtu.be/nhwtzU4zNQo?si=cCey731oy4rKVQaE",
    categories: ["Single-Cell", "Seurat"]
  }
];

export default function TutorialsPage() {
  return (
    <div className="bg-slate-50/70 min-h-screen py-12 lg:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <BookOpen className="w-4 h-4" /> Open-Source Computational Biology Hub
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Interactive Tutorials &amp; Research Pipelines
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Access free, reproducible computational biology walkthroughs, interactive Google Colab notebooks, and video masterclasses covering transcriptomics, single-cell analysis, AlphaFold, and AI drug discovery.
          </p>
        </div>

        {/* Global Hub Stats Banner */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900">3 Core</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Interactive Guides</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl font-black text-blue-600">8+</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Colab Pipelines</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl font-black text-teal-600">9+</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Video Playlists</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-4xl font-black text-indigo-600">100%</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Free &amp; Open-Source</p>
          </div>
        </div>

        {/* Section 1: Interactive Core Guides */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Step-by-Step Walkthroughs</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Featured Interactive Guides
            </h2>
            <p className="text-sm text-slate-600">
              Read comprehensive, in-depth documentation and code examples built directly into our learning platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interactiveGuides.map((guide) => (
              <Link
                key={guide.id}
                href={guide.href}
                className="bg-white rounded-3xl p-7 border-2 border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                      {guide.icon}
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${guide.badge}`}>
                      {guide.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors mb-3 leading-snug">
                    {guide.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {guide.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 mb-6">
                    {guide.tools.map((t) => (
                      <span key={t} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700 pt-3 border-t border-slate-100">
                  <span>Explore Interactive Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 2: Reusable Open-Source Pipelines */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Ready-to-Run Code</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Production-Grade Computational Pipelines
            </h2>
            <p className="text-sm text-slate-600">
              Verified bioinformatics and cheminformatics workflows ready for your research projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pipelines.map((pipe, i) => (
              <div 
                key={i} 
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200/70 uppercase tracking-wider">
                      {pipe.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">Open-Source Asset</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {pipe.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {pipe.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-4">
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Key Tools</span>
                      <div className="flex flex-wrap gap-1.5">
                        {pipe.tools.map((t) => (
                          <span key={t} className="text-xs font-semibold text-slate-800 bg-white border border-slate-200 px-2 py-0.5 rounded-md shadow-2xs">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Data Specifications</span>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                        <strong className="text-slate-800">In:</strong> {pipe.input}<br />
                        <strong className="text-slate-800">Out:</strong> {pipe.output}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                  {pipe.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-2xs ${
                        link.type === 'github'
                          ? 'bg-slate-900 hover:bg-slate-800 text-white'
                          : 'bg-amber-500 hover:bg-amber-600 text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Video Lecture Masterclasses */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-red-600">Video Masterclasses</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Curated YouTube Video Courses
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Structured video series covering programming, computational genomics, and academic publication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoPlaylists.map((playlist, i) => (
              <a
                key={i}
                href={playlist.playlist}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex gap-1.5">
                      {playlist.categories.map((cat, cIdx) => (
                        <span key={cIdx} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xs">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 border border-red-200 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors shadow-2xs">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 group-hover:text-red-600 transition-colors mb-2 leading-snug">
                    {playlist.course}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6">
                    {playlist.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-red-600 group-hover:text-red-700">
                  <span>Watch Course Series</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-xl shadow-blue-600/10">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Accelerate Your Research with 1-on-1 Mentorship
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Take your skills further with direct weekly guidance, live debugging, real-world multi-omics datasets, and personalized career roadmaps.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/apply"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Apply for Upcoming Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/programs"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-700/60 hover:bg-blue-700 text-white font-semibold text-xs border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore All 4 Programs</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
