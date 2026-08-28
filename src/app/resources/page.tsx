"use client";

import React, { useState } from "react";
import { 
  Database, 
  Wrench, 
  BookOpen, 
  ExternalLink, 
  Sparkles, 
  Search, 
  Dna, 
  FlaskConical, 
  Activity, 
  Layers, 
  Cpu, 
  CheckCircle2,
  Terminal,
  Code
} from "lucide-react";

interface ToolItem {
  tool: string;
  category: string;
  group: "bulk" | "single-cell" | "drug-discovery" | "libraries";
  goal: string;
  url: string;
}

interface DataSourceItem {
  name: string;
  description: string;
  url: string;
  type: "bulk" | "single-cell" | "drug-discovery" | "general";
  tags: string[];
}

interface ResourceItem {
  name: string;
  description: string;
  url: string;
  subcategory: "bulk" | "single-cell" | "both";
  tags: string[];
}

const allTools: ToolItem[] = [
  // Bulk RNA-Seq & QC
  {
    tool: "FastQC",
    category: "Bulk QC",
    group: "bulk",
    goal: "Assess read quality across raw high-throughput sequencing data",
    url: "https://www.bioinformatics.babraham.ac.uk/projects/fastqc/"
  },
  {
    tool: "MultiQC",
    category: "Bulk QC",
    group: "bulk",
    goal: "Aggregate QC reports across many samples into a unified dashboard",
    url: "https://multiqc.info/"
  },
  {
    tool: "fastp",
    category: "Bulk QC / Preprocessing",
    group: "bulk",
    goal: "Ultrafast all-in-one FASTQ preprocessor to trim adapters and filter reads",
    url: "https://github.com/OpenGene/fastp"
  },
  {
    tool: "STAR",
    category: "Alignment",
    group: "bulk",
    goal: "Splice-aware ultrafast RNA-seq aligner to reference genomes",
    url: "https://github.com/alexdobin/STAR"
  },
  {
    tool: "HISAT2",
    category: "Alignment",
    group: "bulk",
    goal: "Graph-based alignment system for mapping reads to reference genomes",
    url: "https://daehwankimlab.github.io/hisat2/"
  },
  {
    tool: "Salmon",
    category: "Quantification",
    group: "bulk",
    goal: "Accurate, ultrafast pseudo-alignment and transcript quantification",
    url: "https://combine-lab.github.io/salmon/"
  },
  {
    tool: "featureCounts",
    category: "Quantification",
    group: "bulk",
    goal: "High-performance program for counting reads mapped to genomic features",
    url: "http://subread.sourceforge.net/"
  },
  {
    tool: "DESeq2",
    category: "Differential Expression",
    group: "bulk",
    goal: "Statistical analysis of differential gene expression using negative binomial models",
    url: "https://bioconductor.org/packages/DESeq2"
  },
  {
    tool: "edgeR",
    category: "Differential Expression",
    group: "bulk",
    goal: "Empirical analysis of digital gene expression in R/Bioconductor",
    url: "https://bioconductor.org/packages/edgeR"
  },
  {
    tool: "clusterProfiler",
    category: "Functional Enrichment",
    group: "bulk",
    goal: "Statistical analysis and visualization of functional gene clusters and pathways",
    url: "https://bioconductor.org/packages/clusterProfiler"
  },

  // Single-Cell Genomics
  {
    tool: "Cell Ranger",
    category: "scRNA-seq Pre-processing",
    group: "single-cell",
    goal: "Demultiplexing, barcode processing, and alignment for 10x Genomics data",
    url: "https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/what-is-cell-ranger"
  },
  {
    tool: "Seurat",
    category: "scRNA-seq Analysis",
    group: "single-cell",
    goal: "R toolkit for quality control, clustering, integration, and spatial transcriptomics",
    url: "https://satijalab.org/seurat/"
  },
  {
    tool: "Scanpy",
    category: "scRNA-seq Analysis",
    group: "single-cell",
    goal: "Scalable Python toolkit for analyzing single-cell gene expression (scverse)",
    url: "https://scanpy.readthedocs.io/"
  },
  {
    tool: "scDblFinder",
    category: "scRNA-seq Quality",
    group: "single-cell",
    goal: "Identify and remove artificial doublet and multiplet cells in scRNA-seq",
    url: "https://bioconductor.org/packages/scDblFinder"
  },
  {
    tool: "SingleR",
    category: "Cell Annotation",
    group: "single-cell",
    goal: "Automated cell type annotation using reference transcriptomic datasets",
    url: "https://bioconductor.org/packages/SingleR"
  },
  {
    tool: "Monocle3",
    category: "Trajectory Analysis",
    group: "single-cell",
    goal: "Single-cell pseudotime analysis and developmental lineage trajectory mapping",
    url: "https://cole-trapnell-lab.github.io/monocle3/"
  },
  {
    tool: "Slingshot",
    category: "Trajectory Analysis",
    group: "single-cell",
    goal: "Lineage inference and pseudotime estimation on low-dimensional single-cell data",
    url: "https://bioconductor.org/packages/slingshot"
  },

  // AI, Cheminformatics & Drug Discovery
  {
    tool: "DeepChem",
    category: "Framework / Library",
    group: "drug-discovery",
    goal: "Python library for deep learning in drug discovery and materials science",
    url: "https://deepchem.io/"
  },
  {
    tool: "MoleculeNet",
    category: "Benchmark / Dataset",
    group: "drug-discovery",
    goal: "Curated benchmark suite and standardized datasets for molecular machine learning",
    url: "https://moleculenet.org/"
  },
  {
    tool: "OpenEye Scientific",
    category: "Commercial / Pro Software",
    group: "drug-discovery",
    goal: "High-performance molecular modeling, shape matching, and cheminformatics suites",
    url: "https://www.eyesopen.com/"
  },
  {
    tool: "Schrödinger (Education)",
    category: "Commercial / Pro Software",
    group: "drug-discovery",
    goal: "Industry-standard physics-based computational platforms for molecular simulation & CADD",
    url: "https://www.schrodinger.com/"
  },
  {
    tool: "PyTorch Geometric",
    category: "Deep Learning Library",
    group: "drug-discovery",
    goal: "Geometric deep learning on graphs (GNNs) for molecular property & bioactivity prediction",
    url: "https://www.pyg.org/"
  },
  {
    tool: "AlphaFold Protein Structure Database",
    category: "Structural Biology AI",
    group: "drug-discovery",
    goal: "EMBL-EBI open repository of over 200M AI-predicted 3D protein structures",
    url: "https://alphafold.ebi.ac.uk/"
  },
  {
    tool: "Chemprop",
    category: "Deep Learning Model",
    group: "drug-discovery",
    goal: "Directed message passing neural network (D-MPNN) for molecular property prediction",
    url: "http://chemprop.csail.mit.edu/"
  },
  {
    tool: "DeepDTA",
    category: "Deep Learning Model",
    group: "drug-discovery",
    goal: "Convolutional neural network for drug-target binding affinity (DTA) prediction",
    url: "https://github.com/hkmztrk/DeepDTA"
  },
  {
    tool: "MolSimplify",
    category: "Automation Tool",
    group: "drug-discovery",
    goal: "Automated software toolkit for inorganic and small molecule discovery",
    url: "https://molsimplify.mit.edu/"
  },

  // General Bioinformatics Libraries
  {
    tool: "BioPython",
    category: "Bioinformatics Library",
    group: "libraries",
    goal: "Freely available Python tools for biological computation, FASTA/PDB parsing, and sequence analysis",
    url: "https://biopython.org/"
  }
];

const bulkDataSources: DataSourceItem[] = [
  {
    name: "GEO (Gene Expression Omnibus)",
    description: "Largest public repository of functional genomics data, including bulk RNA-seq, microarrays, and single-cell studies.",
    url: "https://www.ncbi.nlm.nih.gov/geo/",
    type: "bulk",
    tags: ["NCBI", "largest-repository", "microarray-rnaseq"]
  },
  {
    name: "ArrayExpress (EMBL-EBI)",
    description: "Major European archive of functional genomics experiments with curated metadata and raw sequencing assays.",
    url: "https://www.ebi.ac.uk/arrayexpress/",
    type: "bulk",
    tags: ["EMBL-EBI", "functional-genomics", "reproducible"]
  },
  {
    name: "TCGA (The Cancer Genome Atlas)",
    description: "Comprehensive multi-omics data for 33 cancer types including RNA-seq, somatic mutations, CNVs, and clinical survival profiles.",
    url: "https://portal.gdc.cancer.gov/",
    type: "bulk",
    tags: ["NCI", "cancer-genomics", "clinical-multiomics"]
  },
  {
    name: "GTEx Portal",
    description: "Comprehensive tissue-specific gene expression reference data from non-diseased healthy human donors across 54 body sites.",
    url: "https://gtexportal.org/",
    type: "bulk",
    tags: ["healthy-reference", "tissue-specific", "eQTL"]
  },
  {
    name: "ICGC Data Portal",
    description: "International Cancer Genome Consortium global database for uniform cancer genomic and transcriptomic datasets.",
    url: "https://dcc.icgc.org/",
    type: "bulk",
    tags: ["international", "cancer-cohorts", "variants"]
  },
  {
    name: "SRA (Sequence Read Archive)",
    description: "Primary NCBI/NIH global archive for raw high-throughput sequencing data (FASTQ, BAM, and CRAM formats).",
    url: "https://www.ncbi.nlm.nih.gov/sra",
    type: "bulk",
    tags: ["raw-fastq", "petabyte-scale", "NCBI"]
  },
  {
    name: "GDC (Genomic Data Commons)",
    description: "NCI unified cancer data repository with standardized bioinformatics pipelines, harmonized clinical data, and BAM files.",
    url: "https://portal.gdc.cancer.gov/",
    type: "bulk",
    tags: ["harmonized-pipelines", "NCI", "cancer"]
  },
  {
    name: "ENA (European Nucleotide Archive)",
    description: "European counterpart to SRA maintained by EMBL-EBI, containing raw reads, assembled genomes, and functional annotations.",
    url: "https://www.ebi.ac.uk/ena",
    type: "bulk",
    tags: ["EMBL-EBI", "raw-reads", "global-nucleotide"]
  },
  {
    name: "GREIN (GEO RNA-seq Interactive Navigator)",
    description: "Interactive web platform for exploring and analyzing over 6,500 harmonized GEO RNA-seq datasets with pre-computed counts.",
    url: "https://www.ilincs.org/apps/grein/",
    type: "bulk",
    tags: ["interactive", "pre-computed-counts", "GEO-browser"]
  }
];

const singleCellDataSources: DataSourceItem[] = [
  {
    name: "CELLxGENE Discover",
    description: "Interactive explorer and open data portal for large-scale standardized single-cell transcriptomic datasets (CZ CELLxGENE).",
    url: "https://cellxgene.cziscience.com/",
    type: "single-cell",
    tags: ["interactive-explorer", "CZI", "AnnData"]
  },
  {
    name: "Single Cell Expression Atlas",
    description: "Systematic, curated collection of scRNA-seq experiments with standardized quality control and re-analysis by EMBL-EBI.",
    url: "https://www.ebi.ac.uk/gxa/sc/home",
    type: "single-cell",
    tags: ["EMBL-EBI", "curated", "re-analyzed"]
  },
  {
    name: "HCA Data Portal (Human Cell Atlas)",
    description: "Global collaborative initiative mapping every cell type in the human body across development, health, and disease.",
    url: "https://data.humancellatlas.org/",
    type: "single-cell",
    tags: ["HumanCellAtlas", "global-consortium", "multi-tissue"]
  },
  {
    name: "Single Cell Portal (Broad Institute)",
    description: "Broad Institute interactive web portal for browsing, visualizing, and sharing published single-cell and spatial studies.",
    url: "https://singlecell.broadinstitute.org/single_cell",
    type: "single-cell",
    tags: ["Broad-Institute", "interactive-UMAP", "visualizer"]
  },
  {
    name: "PanglaoDB",
    description: "Marker-focused database for human and mouse single-cell transcriptomics with curated cell-type specific gene sets.",
    url: "https://panglaodb.se/",
    type: "single-cell",
    tags: ["cell-markers", "mouse-human", "gene-sets"]
  },
  {
    name: "TISCH2 (Tumor Immune Single-Cell Hub)",
    description: "Comprehensive single-cell RNA-seq database dedicated to profiling the tumor microenvironment across various human malignancies.",
    url: "http://tisch.comp-genomics.org/",
    type: "single-cell",
    tags: ["TME", "immuno-oncology", "cancer-single-cell"]
  },
  {
    name: "Allen Brain Cell Types Portal",
    description: "High-value reference database and multimodal atlas of cell types in the human, non-human primate, and mouse brain.",
    url: "https://portal.brain-map.org/",
    type: "single-cell",
    tags: ["neuroscience", "Allen-Institute", "brain-atlas"]
  },
  {
    name: "Tabula Sapiens",
    description: "Benchmark healthy human multi-organ transcriptomic atlas comprising over 500,000 cells across 24 distinct tissues.",
    url: "https://tabula-sapiens.cziscience.com/",
    type: "single-cell",
    tags: ["multi-organ", "healthy-reference", "CZ-Biohub"]
  },
  {
    name: "AD Knowledge Portal",
    description: "National Institute on Aging repository for multi-omic and single-cell datasets focused on Alzheimer's disease and neurodegeneration.",
    url: "https://adknowledgeportal.synapse.org/",
    type: "single-cell",
    tags: ["Alzheimers", "neurodegeneration", "Synapse-NIA"]
  },
  {
    name: "GEO Single-Cell Repository",
    description: "NCBI Gene Expression Omnibus repository containing tens of thousands of raw 10x Genomics, Drop-seq, and Smart-seq2 datasets.",
    url: "https://www.ncbi.nlm.nih.gov/geo/",
    type: "single-cell",
    tags: ["NCBI", "raw-matrix", "global-archive"]
  },
  {
    name: "ArrayExpress Single-Cell",
    description: "European functional genomics archive hosting single-cell study metadata, processed matrices, and FASTQ accessions.",
    url: "https://www.ebi.ac.uk/arrayexpress/",
    type: "single-cell",
    tags: ["EMBL-EBI", "European-archive", "metadata"]
  },
  {
    name: "Zenodo (CERN / OpenAIRE)",
    description: "Open-access general research repository hosting large-scale supplementary matrices, AnnData `.h5ad` files, and Seurat `.rds` objects.",
    url: "https://zenodo.org/",
    type: "general",
    tags: ["CERN", "open-science", "DOI-datasets"]
  },
  {
    name: "Figshare",
    description: "Online open-access repository for researchers to preserve, cite, and share supplementary biological datasets and computational figures.",
    url: "https://figshare.com/",
    type: "general",
    tags: ["citable-DOI", "supplementary", "open-data"]
  }
];

const drugDiscoveryDataSources: DataSourceItem[] = [
  {
    name: "PubChem",
    description: "World's largest open database of chemical molecules, structures, bioassays, and biological activities maintained by NCBI.",
    url: "https://pubchem.ncbi.nlm.nih.gov/",
    type: "drug-discovery",
    tags: ["NCBI", "chemical-structures", "bioassays"]
  },
  {
    name: "ChEMBL",
    description: "Manually curated database of bioactive molecules with drug-like properties, binding affinities, and quantitative SAR data.",
    url: "https://www.ebi.ac.uk/chembl/",
    type: "drug-discovery",
    tags: ["EMBL-EBI", "bioactive-compounds", "QSAR"]
  },
  {
    name: "DrugBank",
    description: "Comprehensive structured pharmaceutical knowledgebase combining detailed chemical, pharmacological, and drug-target interaction data.",
    url: "https://go.drugbank.com/",
    type: "drug-discovery",
    tags: ["pharmaceuticals", "drug-targets", "mechanism-of-action"]
  },
  {
    name: "ZINC Database",
    description: "Free database of over 230 million commercially-available 3D chemical structures prepared for virtual screening and docking.",
    url: "https://zinc.docking.org/",
    type: "drug-discovery",
    tags: ["virtual-screening", "3D-docking", "commercial-compounds"]
  },
  {
    name: "BindingDB",
    description: "Public database of experimentally measured binding affinities, focusing on the interactions of target proteins with drug candidates.",
    url: "https://www.bindingdb.org/",
    type: "drug-discovery",
    tags: ["binding-affinity", "Ki-Kd-IC50", "protein-ligand"]
  },
  {
    name: "PDB (Protein Data Bank / RCSB)",
    description: "Primary international archive for 3D experimental structural data of proteins, nucleic acids, and complex biological assemblies.",
    url: "https://www.rcsb.org/",
    type: "drug-discovery",
    tags: ["RCSB", "X-ray-CryoEM", "3D-structures"]
  },
  {
    name: "ChEBI (Chemical Entities of Biological Interest)",
    description: "Dictionary and ontology of small molecular entities focused on biologically relevant chemical compounds.",
    url: "https://www.ebi.ac.uk/chebi/",
    type: "drug-discovery",
    tags: ["EMBL-EBI", "chemical-ontology", "metabolites"]
  },
  {
    name: "UniProt (Universal Protein Resource)",
    description: "Comprehensive, high-quality, and freely accessible resource of protein sequence, functional annotation, and structural mapping.",
    url: "https://www.uniprot.org/",
    type: "drug-discovery",
    tags: ["protein-sequences", "functional-annotation", "Swiss-Prot"]
  },
  {
    name: "TargetMine",
    description: "Integrated data warehouse and knowledge discovery system for target prioritization, network analysis, and validation.",
    url: "https://targetmine.mizuguchilab.org/",
    type: "drug-discovery",
    tags: ["target-validation", "pathway-networks", "integrated-warehouse"]
  },
  {
    name: "ClinicalTrials.gov",
    description: "Largest international registry and results database of publicly and privately supported clinical studies conducted worldwide.",
    url: "https://clinicaltrials.gov/",
    type: "drug-discovery",
    tags: ["clinical-trials", "FDA-NIH", "translational-medicine"]
  }
];

const tutorials: ResourceItem[] = [
  {
    name: "Bioconductor Workflows",
    description: "Official step-by-step tutorials for reproducible RNA-seq and genomics workflows in R.",
    url: "https://www.bioconductor.org/help/workflows/",
    subcategory: "both",
    tags: ["R", "step-by-step", "official"]
  },
  {
    name: "Single-Cell Best Practices",
    description: "Community-driven tutorial and standard book on reproducible single-cell RNA-seq computational workflows.",
    url: "https://www.sc-best-practices.org/",
    subcategory: "single-cell",
    tags: ["Python", "Scanpy", "curated"]
  },
  {
    name: "Orchestrating Single-Cell Analysis (OSCA)",
    description: "Comprehensive online guide and book covering single-cell RNA-seq analysis with Bioconductor.",
    url: "http://bioconductor.org/books/release/OSCA/",
    subcategory: "single-cell",
    tags: ["R", "book", "comprehensive"]
  }
];

function ResourceCard({ item }: { item: DataSourceItem | ResourceItem }) {
  const badge = "subcategory" in item ? item.subcategory : item.type;
  return (
    <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 transition-all flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
            {item.name}
          </h3>
          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200/60 flex-shrink-0">
            {badge}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
          {item.description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {item.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-100">
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 group-hover:underline">
          <span>Access Repository</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </div>
      </div>
    </a>
  );
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All 27 Tools" },
    { id: "bulk", label: "Bulk RNA-Seq & QC" },
    { id: "single-cell", label: "Single-Cell Genomics" },
    { id: "drug-discovery", label: "AI & Drug Discovery" },
    { id: "libraries", label: "Bioinformatics Libraries" },
  ];

  const filteredTools = allTools.filter((item) => {
    const matchesGroup = selectedGroup === "all" || item.group === selectedGroup;
    const matchesSearch = 
      item.tool.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.goal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGroup && matchesSearch;
  });

  const getGroupBadge = (group: ToolItem["group"]) => {
    switch (group) {
      case "bulk":
        return "bg-blue-50 text-blue-700 border-blue-200/80";
      case "single-cell":
        return "bg-indigo-50 text-indigo-700 border-indigo-200/80";
      case "drug-discovery":
        return "bg-teal-50 text-teal-700 border-teal-200/80";
      case "libraries":
        return "bg-purple-50 text-purple-700 border-purple-200/80";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="py-12 lg:py-16 bg-slate-50/70 min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" /> Comprehensive Resource &amp; Software Directory
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Curated Academic &amp; Computational Resources
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            A comprehensive reference library of standard bioinformatics tools, single-cell frameworks, deep learning drug discovery libraries, and verified genomic data repositories.
          </p>
        </div>

        {/* Section 1: Comprehensive Tools Directory */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200/80">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                <Wrench className="w-4 h-4" /> Essential Software &amp; Frameworks
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Computational Biology &amp; AI Tools
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search tools, categories, or goals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-2xs"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedGroup(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedGroup === tab.id
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-2xs"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tools Grid Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 border-2 border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
                      {item.tool}
                    </h3>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md border flex-shrink-0 ${getGroupBadge(item.group)}`}>
                      {item.category}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                    {item.goal}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700 group-hover:text-blue-800">
                  <span>Visit Official Documentation</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm">No tools matched your search query. Try searching for a different keyword or category.</p>
            </div>
          )}
        </section>

        {/* Section 2: Bulk RNA-Seq Data Sources */}
        <section className="space-y-6 pt-6 border-t border-slate-200/80">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-200/60 flex items-center justify-center flex-shrink-0 shadow-2xs">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Bulk RNA-Seq Data Sources &amp; Repositories
              </h2>
              <p className="text-xs text-slate-500">Major public repositories for bulk transcriptomic datasets and clinical cancer cohorts</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bulkDataSources.map((item, i) => (
              <ResourceCard key={i} item={item} />
            ))}
          </div>
        </section>

        {/* Section 3: Single-Cell Data Sources */}
        <section className="space-y-6 pt-6 border-t border-slate-200/80">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 border border-teal-200/60 flex items-center justify-center flex-shrink-0 shadow-2xs">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Single-Cell &amp; Spatial Omics Data Sources
              </h2>
              <p className="text-xs text-slate-500">Curated single-cell portals, cell marker databases, and tissue reference atlases</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {singleCellDataSources.map((item, i) => (
              <ResourceCard key={i} item={item} />
            ))}
          </div>
        </section>

        {/* Section 4: Drug Discovery & Structural Biology Data Sources */}
        <section className="space-y-6 pt-6 border-t border-slate-200/80">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center flex-shrink-0 shadow-2xs">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Drug Discovery &amp; Structural Biology Data Sources
              </h2>
              <p className="text-xs text-slate-500">Chemical knowledgebases, 3D structural repositories, and binding affinity databases</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drugDiscoveryDataSources.map((item, i) => (
              <ResourceCard key={i} item={item} />
            ))}
          </div>
        </section>

        {/* Section 5: Tutorials & Best Practices */}
        <section className="space-y-6 pt-6 border-t border-slate-200/80">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200/60 flex items-center justify-center flex-shrink-0 shadow-2xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Learning Materials &amp; Best Practices
              </h2>
              <p className="text-xs text-slate-500">Community guides, official books, and verified standard workflows</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorials.map((item, i) => (
              <ResourceCard key={i} item={item} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
