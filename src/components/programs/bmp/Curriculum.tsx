"use client";

import { useState } from "react";
import { 
  Terminal, 
  Dna, 
  Sparkles, 
  Layers, 
  Bot,
  Calendar,
  CheckCircle2,
  Cpu
} from "lucide-react";

export interface SessionItem {
  day: string;
  date: string;
  displayDate: string;
  topic: string;
  category: "Foundation" | "Bulk RNA-Seq" | "Single-Cell RNA-Seq" | "Spatial Transcriptomics" | "AI & Machine Learning" | "Project & Presentation";
  type: string;
  desc: string;
  tools: string[];
  isMilestone?: boolean;
}

export interface ModuleData {
  id: string;
  moduleNumber: number;
  title: string;
  subtitle: string;
  duration: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  icon: any;
  sessions: SessionItem[];
}

export const BMP_COHORT_03_MODULES: ModuleData[] = [
  {
    id: "module-1",
    moduleNumber: 1,
    title: "Computational Foundation",
    subtitle: "Linux HPC, NGS Data Formats, Bash Scripting, Python & R Fundamentals",
    duration: "4 Sessions (D1 – D4)",
    accent: "#2563EB",
    accentBg: "bg-blue-50 text-blue-700",
    accentBorder: "border-blue-200",
    icon: Terminal,
    sessions: [
      {
        day: "D1",
        date: "2026-10-02",
        displayDate: "Oct 02, 2026",
        topic: "Bioinformatics Workflow Setup: Building Your Computational Foundation",
        category: "Foundation",
        type: "Environment & Setup",
        desc: "Set up isolated, reproducible bioinformatics environments using Conda, Mamba, and Bioconda. Configure high-performance compute environments for scalable transcriptomics.",
        tools: ["Linux CLI", "Conda / Mamba", "Bioconda", "VS Code SSH"]
      },
      {
        day: "D2",
        date: "2026-10-03",
        displayDate: "Oct 03, 2026",
        topic: "Command Line Tools for Omics Data Science: Basic Unix commands, NGS Data Formats, Bash Scripting",
        category: "Foundation",
        type: "Unix & Data Formats",
        desc: "Master high-throughput sequence manipulation. Learn bash automation, regular expressions, and parsing standard genomics file formats (FASTQ, SAM/BAM, VCF, BED, GFF3).",
        tools: ["Bash Scripting", "Samtools", "Bedtools", "SeqKit", "HPC Slurm"]
      },
      {
        day: "D3",
        date: "2026-10-09",
        displayDate: "Oct 09, 2026",
        topic: "Introduction to Programming in the Bioinformatics: Python Fundamentals",
        category: "Foundation",
        type: "Python Fundamentals",
        desc: "Foundations of Python for computational biology. Working with variables, data structures, BioPython, sequence parsing (FASTA/FASTQ), automation scripts, and tabular omics processing with Pandas.",
        tools: ["Python 3", "BioPython", "Pandas", "NumPy", "Jupyter"]
      },
      {
        day: "D4",
        date: "2026-10-10",
        displayDate: "Oct 10, 2026",
        topic: "Introduction to Programming in the Bioinformatics: R Fundamentals",
        category: "Foundation",
        type: "R Programming",
        desc: "Master data structures, Bioconductor packages, data wrangling with tidyverse, and publication-ready statistical plotting with ggplot2 tailored for biological datasets.",
        tools: ["R / RStudio", "Bioconductor", "tidyverse", "ggplot2", "SummarizedExperiment"]
      }
    ]
  },
  {
    id: "module-2",
    moduleNumber: 2,
    title: "Bulk RNA-seq Analysis for Absolute Beginners",
    subtitle: "From Raw FASTQ to Differential Expression, GSEA Pathways, Batch Effects & Meta-Analysis",
    duration: "6 Sessions (D5 – D10)",
    accent: "#0D9488",
    accentBg: "bg-teal-50 text-teal-700",
    accentBorder: "border-teal-200",
    icon: Dna,
    sessions: [
      {
        day: "D5",
        date: "2026-10-16",
        displayDate: "Oct 16, 2026",
        topic: "Introduction to Bulk RNA-Seq: Experimental design, Wet-lab overview, Dry-lab overview",
        category: "Bulk RNA-Seq",
        type: "Experimental Design",
        desc: "Understand library preparation protocols (poly-A vs ribo-depletion), sequencing depth, biological replication, power calculation, and overall upstream/downstream architecture.",
        tools: ["Experimental Design", "GEO Mining", "SRA Toolkit", "MultiQC"]
      },
      {
        day: "D6",
        date: "2026-10-17",
        displayDate: "Oct 17, 2026",
        topic: "From Fastq to Counts Matrix",
        category: "Bulk RNA-Seq",
        type: "Upstream Quantification",
        desc: "Perform end-to-end quality trimming (fastp), splice-aware reference genome alignment (STAR, HISAT2), and pseudoalignment transcript quantification (Salmon, featureCounts).",
        tools: ["fastp", "STAR", "Salmon", "featureCounts", "FastQC"]
      },
      {
        day: "D7",
        date: "2026-10-23",
        displayDate: "Oct 23, 2026",
        topic: "From Count Table to Differential Gene Expression Analysis",
        category: "Bulk RNA-Seq",
        type: "Statistical DGE",
        desc: "Statistical modeling with DESeq2 and edgeR. Negative binomial generalized linear models, normalization methods (size factors, TMM), dispersion estimation, and Volcano plots.",
        tools: ["DESeq2", "edgeR", "PCA Analysis", "Volcano Plots", "pheatmap"]
      },
      {
        day: "D8",
        date: "2026-10-24",
        displayDate: "Oct 24, 2026",
        topic: "From Differential Gene Expression Analysis to Pathways",
        category: "Bulk RNA-Seq",
        type: "Functional Pathways",
        desc: "Gene Ontology (GO), KEGG, and Reactome pathway enrichment. Master Gene Set Enrichment Analysis (GSEA) and Over-Representation Analysis (ORA) with clusterProfiler.",
        tools: ["clusterProfiler", "fgsea", "Pathview", "GO / KEGG", "ReactomePA"]
      },
      {
        day: "D9",
        date: "2026-10-30",
        displayDate: "Oct 30, 2026",
        topic: "Batch Effects and Complex Experimental Designs",
        category: "Bulk RNA-Seq",
        type: "Advanced Modeling",
        desc: "Handle multi-factor experiments, interaction terms, paired samples, and technical confounding batch effects using ComBat, limma-removeBatchEffect, and SVA.",
        tools: ["ComBat / sva", "limma", "Complex Designs", "Surrogate Variable Analysis"]
      },
      {
        day: "D10",
        date: "2026-10-31",
        displayDate: "Oct 31, 2026",
        topic: "Bulk RNA-Seq Meta-Analysis: Random Effects Model (REM), Vote-Counting, Combining Approach",
        category: "Bulk RNA-Seq",
        type: "Meta-Analysis",
        desc: "Integrate multiple public cohorts from GEO/ArrayExpress to maximize statistical power. Master Random Effects Models (REM), Fisher's combined probability, and effect size calculation.",
        tools: ["MetaDE", "REM Modeling", "Forest Plots", "GEO Multi-Cohort", "Effect Sizes"]
      }
    ]
  },
  {
    id: "module-3",
    moduleNumber: 3,
    title: "Single-Cell RNA-seq Analysis for Absolute Beginners",
    subtitle: "10x Genomics, Cell Ranger, Quality Control, Harmony Integration & Marker Annotation",
    duration: "5 Sessions (D11 – D15)",
    accent: "#4F46E5",
    accentBg: "bg-indigo-50 text-indigo-700",
    accentBorder: "border-indigo-200",
    icon: Sparkles,
    sessions: [
      {
        day: "D11",
        date: "2026-11-06",
        displayDate: "Nov 06, 2026",
        topic: "Introduction to Single-Cell RNA-Seq: Experimental design, Wet-lab overview, Dry-lab overview",
        category: "Single-Cell RNA-Seq",
        type: "scRNA-seq Intro",
        desc: "Droplet-based microfluidics (10x Chromium), unique molecular identifiers (UMIs), cellular barcodes, cell viability thresholds, and computational challenge landscape.",
        tools: ["10x Chromium", "UMI De-duplication", "Drop-seq Concept", "CELLxGENE"]
      },
      {
        day: "D12",
        date: "2026-11-07",
        displayDate: "Nov 07, 2026",
        topic: "From FASTQ to Count Matrix: Quality Check, Quantification with cellranger",
        category: "Single-Cell RNA-Seq",
        type: "Cell Ranger Pipeline",
        desc: "Execute cellranger count, understand web summary metrics, detect empty droplets with EmptyDrops, and extract sparse gene expression matrices.",
        tools: ["cellranger count", "STARsolo", "Web Summary QA", "Sparse Matrices"]
      },
      {
        day: "D13",
        date: "2026-11-13",
        displayDate: "Nov 13, 2026",
        topic: "Quality Control and Cell Filtering",
        category: "Single-Cell RNA-Seq",
        type: "QC & Doublet Removal",
        desc: "Assess mitochondrial and ribosomal read proportions, filter dead/dying cells, and computationally remove multiplet doublets using DoubletFinder and scDblFinder.",
        tools: ["Seurat QC", "DoubletFinder", "scDblFinder", "Mitochondrial Filters"]
      },
      {
        day: "D14",
        date: "2026-11-14",
        displayDate: "Nov 14, 2026",
        topic: "Data Integration and Clustering",
        category: "Single-Cell RNA-Seq",
        type: "Harmony & Clustering",
        desc: "Highly variable gene (HVG) selection, log-normalization / SCTransform, PCA dimensionality reduction, Harmony batch correction, UMAP & t-SNE embedding, and FindClusters/Leiden in R.",
        tools: ["Harmony", "SCTransform", "UMAP / t-SNE", "FindClusters", "Seurat v5"]
      },
      {
        day: "D15",
        date: "2026-11-20",
        displayDate: "Nov 20, 2026",
        topic: "Cell Type Identification",
        category: "Single-Cell RNA-Seq",
        type: "Cell Annotation",
        desc: "Differential marker expression (FindAllMarkers / Wilcoxon), automated reference-based annotation (SingleR, Celldex), and manual curation using canonical lineage markers in R.",
        tools: ["SingleR", "Celldex", "PanglaoDB", "Marker Gene Curation", "DotPlots"]
      }
    ]
  },
  {
    id: "module-4",
    moduleNumber: 4,
    title: "Spatial Transcriptomics",
    subtitle: "10x Visium HD, Xenium In Situ, Spatial Domains & Tissue Microenvironments",
    duration: "4 Sessions (D16 – D19)",
    accent: "#DB2777",
    accentBg: "bg-pink-50 text-pink-700",
    accentBorder: "border-pink-200",
    icon: Layers,
    sessions: [
      {
        day: "D16",
        date: "2026-11-21",
        displayDate: "Nov 21, 2026",
        topic: "Introduction to Spatial Biology and Spatial Transcriptomics: Experimental design, Wet-lab overview, Dry-lab overview",
        category: "Spatial Transcriptomics",
        type: "Spatial Foundations",
        desc: "Explore sequencing-based (10x Visium HD) vs imaging-based in situ (10x Xenium, MERFISH, CosMx) technologies. Spatial coordinates, resolution limits, and H&E histology integration in R.",
        tools: ["Visium HD Overview", "Xenium In Situ", "H&E Imaging Integration", "Spatial Biology"]
      },
      {
        day: "D17",
        date: "2026-11-27",
        displayDate: "Nov 27, 2026",
        topic: "SpatialExperiment - VisiumHD binned, SpatialFeatureExperiment - Xenium, SpatialFeatureExperiment - VisiumHD segmented, Visium HD QC, Xenium QC",
        category: "Spatial Transcriptomics",
        type: "Spatial Data Structures & QC",
        desc: "Load and structure spatial datasets in R/Bioconductor (SpatialExperiment, SpatialFeatureExperiment). Perform spot-level and cell-segmentation QC, library size normalization, and tissue alignment.",
        tools: ["SpatialExperiment", "SpatialFeatureExperiment", "Visium HD QC", "Xenium QC", "Voyager"]
      },
      {
        day: "D18",
        date: "2026-11-28",
        displayDate: "Nov 28, 2026",
        topic: "Visium HD Normalization, Xenium Normalization, SpatialFeatureExperiment - VisiumHD segmented, Clustering and Domains, Annotation",
        category: "Spatial Transcriptomics",
        type: "Spatial Domains & Annotation",
        desc: "Spatial normalization algorithms, spatial neighborhood graphs, spatial domain segmentation (BayesSpace, Seurat Spatial), and transfer of single-cell reference annotations in R.",
        tools: ["BayesSpace", "Seurat Spatial", "Cell Type Deconvolution", "Spatial Domains", "Giotto"]
      },
      {
        day: "D19",
        date: "2026-12-04",
        displayDate: "Dec 04, 2026",
        topic: "Multi-scale analysis, Differential Analysis",
        category: "Spatial Transcriptomics",
        type: "Spatially Variable Genes",
        desc: "Detect spatially variable genes (SVGs) with Moran's I and SpatialDE. Multi-scale microenvironment analysis, ligand-receptor spatial colocalization, and tumor-stroma niche modeling.",
        tools: ["SpatialDE", "Moran's I", "Cell-Cell Colocalization", "Niche Modeling", "Giotto"]
      }
    ]
  },
  {
    id: "module-5",
    moduleNumber: 5,
    title: "AI for Computational Biology and Bioinformatics",
    subtitle: "AI/ML Fundamentals, FAIR Data, Feature Engineering, Deep Learning & Agentic Bio-AI",
    duration: "6 Sessions (D20 – D25)",
    accent: "#7C3AED",
    accentBg: "bg-purple-50 text-purple-700",
    accentBorder: "border-purple-200",
    icon: Cpu,
    sessions: [
      {
        day: "D20",
        date: "2026-12-05",
        displayDate: "Dec 05, 2026",
        topic: "Introduction to Artificial Intelligence and Machine Learning (AI/ML), AI/ML Basic concepts, AI/ML Applications",
        category: "AI & Machine Learning",
        type: "AI/ML Fundamentals",
        desc: "Core concepts of artificial intelligence and machine learning in biology. Supervised vs unsupervised learning, regression, classification, and applications across drug discovery and omics.",
        tools: ["Scikit-Learn", "Python ML", "AI/ML Concepts", "Bioinformatics AI"]
      },
      {
        day: "D21",
        date: "2026-12-11",
        displayDate: "Dec 11, 2026",
        topic: "Overview of the Data Science Life Cycle, FAIR Data Principles, Data-Centric AI/ML, Responsible AI/ML: Principles and Practices",
        category: "AI & Machine Learning",
        type: "Data Science & Ethics",
        desc: "Understand data science lifecycles in computational biology. FAIR (Findable, Accessible, Interoperable, Reusable) data standards, data curation, model reproducibility, and ethical AI practices.",
        tools: ["FAIR Principles", "Data Stewardship", "Reproducibility", "Model Cards"]
      },
      {
        day: "D22",
        date: "2026-12-12",
        displayDate: "Dec 12, 2026",
        topic: "Data Collection and Preparation, Feature Engineering, Scaling, and Selection",
        category: "AI & Machine Learning",
        type: "Feature Engineering",
        desc: "Biological feature extraction from genomic and expression data. Handling high dimensionality (p >> n), imputation, normalization, PCA/t-SNE embedding, and LASSO/Random Forest feature selection.",
        tools: ["Pandas", "Feature Selection", "LASSO / Ridge", "Dimensionality Reduction"]
      },
      {
        day: "D23",
        date: "2026-12-18",
        displayDate: "Dec 18, 2026",
        topic: "ML Models and Model Evaluation, Model Tuning, Interpretation and Deployment",
        category: "AI & Machine Learning",
        type: "ML Modeling & Evaluation",
        desc: "Build, evaluate, and interpret predictive models. ROC-AUC, cross-validation, hyperparameter tuning (GridSearchCV), feature importance with SHAP values, and model deployment.",
        tools: ["Random Forest", "XGBoost", "Cross-Validation", "SHAP Values", "Streamlit"]
      },
      {
        day: "D24",
        date: "2026-12-19",
        displayDate: "Dec 19, 2026",
        topic: "Introduction to Deep Learning, Deep Learning Applications in Computational Biology and Bioinformatics",
        category: "AI & Machine Learning",
        type: "Deep Learning in Omics",
        desc: "Neural network architectures (MLP, CNN, Transformers) applied to genomics. Sequence classification, variant effect prediction, protein structure modeling, and foundation models in biology.",
        tools: ["PyTorch", "Neural Networks", "AlphaFold Concept", "Genomic Transformers"]
      },
      {
        day: "D25",
        date: "2026-12-25",
        displayDate: "Dec 25, 2026",
        topic: "No Code and Agentic AI for Computational Biology and Bioinformatics",
        category: "AI & Machine Learning",
        type: "Agentic AI & Graduation",
        desc: "Leverage no-code AI tools, LLMs, and autonomous AI agents for automated bioinformatics workflows, literature curation, and code generation. Cohort graduation and research portfolio wrap-up.",
        tools: ["Agentic AI", "LLM Bio-Agents", "Automated Pipelines", "Portfolio Defense"],
        isMilestone: true
      }
    ]
  }
];

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const totalSessions = BMP_COHORT_03_MODULES.reduce((acc, m) => acc + m.sessions.length, 0);

  const displayedModules = activeTab === "all" 
    ? BMP_COHORT_03_MODULES 
    : BMP_COHORT_03_MODULES.filter(m => m.id === activeTab);

  return (
    <section id="curriculum" className="py-20 lg:py-28 bg-slate-50/70 text-slate-900 relative overflow-hidden border-t border-slate-200">
      
      {/* Background Decorative Soft Gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Calendar className="w-3.5 h-3.5" /> Official Cohort 03 Syllabus (2026)
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Master Curriculum Roadmap
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A comprehensive, hands-on progression from computational foundations, bulk RNA-seq, single-cell genomics, and spatial transcriptomics to AI and machine learning for computational biology.
          </p>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-blue-600">25 Days</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Live Lab Sessions</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-teal-600">5 Modules</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Core Omics & AI Tracks</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-indigo-600">Python + R</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dual Computational Stack</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-purple-600">AI & Agentic</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Modern Bio-AI Workflows</div>
          </div>
        </div>

        {/* Interactive Module Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-slate-900 text-white shadow-md"
                : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All 5 Modules ({totalSessions} Sessions)
          </button>
          
          {BMP_COHORT_03_MODULES.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveTab(m.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === m.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <span>Module {m.moduleNumber}: {m.title.split(" ")[0]}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                activeTab === m.id ? "bg-blue-700 text-white" : "bg-slate-100 text-slate-600"
              }`}>
                {m.sessions.length}
              </span>
            </button>
          ))}
        </div>

        {/* Curriculum Content Modules */}
        <div className="space-y-8">
          {displayedModules.map((m) => {
            const Icon = m.icon;
            return (
              <div 
                key={m.id}
                className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-slate-300"
              >
                {/* Module Header Strip */}
                <div className="p-6 sm:p-8 bg-slate-50/90 border-b border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border shadow-2xs"
                      style={{ 
                        backgroundColor: `${m.accent}12`, 
                        borderColor: `${m.accent}30`,
                        color: m.accent
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span 
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border"
                          style={{ 
                            backgroundColor: `${m.accent}15`,
                            borderColor: `${m.accent}35`,
                            color: m.accent
                          }}
                        >
                          Module {m.moduleNumber}
                        </span>
                        <span className="text-xs font-bold text-slate-500">{m.duration}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        {m.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600">
                        {m.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-left md:text-right md:self-center">
                    <span className="text-xs font-mono font-semibold text-slate-700 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                      {m.sessions[0].displayDate} → {m.sessions[m.sessions.length - 1].displayDate}
                    </span>
                  </div>
                </div>

                {/* Session Cards Grid */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
                  {m.sessions.map((s) => (
                    <div 
                      key={s.day}
                      className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                        s.isMilestone 
                          ? "bg-gradient-to-br from-purple-50/60 via-white to-blue-50/40 border-purple-300/80 shadow-xs hover:border-purple-500 hover:shadow-md"
                          : "bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-xs"
                      }`}
                    >
                      <div className="space-y-2.5">
                        {/* Day Tag & Date */}
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className={`px-2.5 py-0.5 rounded-lg font-mono text-xs font-black ${
                              s.isMilestone 
                                ? "bg-purple-600 text-white shadow-2xs" 
                                : "bg-slate-100 text-slate-800 border border-slate-200"
                            }`}>
                              {s.day}
                            </span>
                            <span className={`text-[11px] font-bold uppercase tracking-wider ${
                              s.isMilestone ? "text-purple-700" : "text-slate-500"
                            }`}>
                              {s.type}
                            </span>
                          </div>

                          <span className="text-[11px] font-mono font-medium text-slate-500">
                            {s.displayDate}
                          </span>
                        </div>

                        {/* Topic Title */}
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          {s.topic}
                        </h4>

                        {/* Description */}
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>

                      {/* Tools & Frameworks Pills */}
                      <div className="pt-3 mt-3 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
                        {s.tools.map((tool, tIdx) => (
                          <span 
                            key={tIdx}
                            className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border ${
                              s.isMilestone 
                                ? "bg-purple-100/70 border-purple-200 text-purple-800" 
                                : "bg-slate-50 border-slate-200/80 text-slate-700"
                            }`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Clean Academic Footnote */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Official academic syllabus for <strong>Bioinformatics Mentorship Program (BMP) Cohort 03</strong>.</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-slate-600">
            <span>25 Live Sessions</span>
            <span>·</span>
            <span>5 Core Modules</span>
            <span>·</span>
            <span>120+ Lab Hours</span>
            <span>·</span>
            <span>Python, R &amp; AI</span>
          </div>
        </div>

      </div>
    </section>
  );
}
