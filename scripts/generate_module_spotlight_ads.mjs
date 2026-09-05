import fs from "fs";
import path from "path";
import sharp from "sharp";

const svgDir = path.resolve("public/bmp_ads/modules/svg");
const pngDir = path.resolve("public/bmp_ads/modules/png");

fs.mkdirSync(svgDir, { recursive: true });
fs.mkdirSync(pngDir, { recursive: true });

function xmlEscape(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const moduleAds = [
  {
    num: "01",
    tag: "MODULE 01 · COMPUTATIONAL FOUNDATIONS",
    title: "Foundations & Linux HPC for Omics",
    centralMessage: "“Master the Non-Negotiable Computational Toolkit for Modern High-Throughput Biology.”",
    accentColor: "#0284C7",
    bullets: [
      { title: "Linux & Bash Scripting", desc: "Automate large-scale NGS pipelines on cluster environments" },
      { title: "Conda & Reproducibility", desc: "Manage complex bioinformatic environments without dependency hell" },
      { title: "R Bioconductor & Python", desc: "Data wrangling, matrix manipulation, and publication visualization" },
      { title: "Git & GitHub Portfolios", desc: "Version control your research and build a verified computational CV" }
    ],
    techTags: ["Linux CLI", "Bash", "Conda", "R Bioconductor", "Python", "Git & GitHub"],
    renderGraphic: () => `
      <!-- Big Terminal Screen & Code Matrix -->
      <g transform="translate(180, 0)">
        <rect width="480" height="230" rx="14" fill="#020617" stroke="#1E293B" stroke-width="2"/>
        <!-- Window Controls -->
        <circle cx="20" cy="18" r="5" fill="#EF4444"/>
        <circle cx="36" cy="18" r="5" fill="#F59E0B"/>
        <circle cx="52" cy="18" r="5" fill="#10B981"/>
        <text x="240" y="22" text-anchor="middle" font-family="monospace" font-weight="700" font-size="12" fill="#64748B">bash — deepbio@hpc-cluster:~/bmp-c03</text>
        <line x1="0" y1="34" x2="480" y2="34" stroke="#1E293B" stroke-width="1.5"/>

        <!-- Terminal Output -->
        <text x="25" y="60" font-family="monospace" font-weight="700" font-size="14" fill="#38BDF8">$ conda activate bmp_omics_env</text>
        <text x="25" y="85" font-family="monospace" font-weight="700" font-size="13" fill="#10B981">[OK] Environment loaded: Python 3.11, R 4.4, Bioconductor 3.19</text>
        <text x="25" y="112" font-family="monospace" font-weight="700" font-size="14" fill="#F59E0B">$ fastp -i sample_R1.fastq.gz -I sample_R2.fastq.gz -o clean_R1.fq -O clean_R2.fq</text>
        <text x="25" y="136" font-family="monospace" font-weight="500" font-size="12" fill="#94A3B8">Filtering reads: Q30 &gt; 94.8% | Duplication: 4.2% | Clean reads: 38,420,192</text>
        <text x="25" y="162" font-family="monospace" font-weight="700" font-size="14" fill="#60A5FA">$ STAR --genomeDir /ref/GRCh38 --readFilesIn clean_R1.fq clean_R2.fq --outSAMtype BAM</text>
        <text x="25" y="186" font-family="monospace" font-weight="900" font-size="13" fill="#34D399">Uniquely mapped reads %: 92.4% -- Processing Complete.</text>
        <line x1="25" y1="205" x2="38" y2="205" stroke="#38BDF8" stroke-width="3"/>
      </g>
    `
  },
  {
    num: "02",
    tag: "MODULE 02 · BULK TRANSCRIPTOMICS",
    title: "Bulk RNA-Seq & Functional Pathways",
    centralMessage: "“From Raw FASTQ to Differential Expression, Heatmaps, and GSEA Biological Enrichment.”",
    accentColor: "#2563EB",
    bullets: [
      { title: "Read Alignment & Quantification", desc: "Process raw reads using fastp, STAR aligner, and Salmon matrices" },
      { title: "DESeq2 & Statistical Modeling", desc: "Identify true differentially expressed genes with empirical Bayes shrinkage" },
      { title: "Publication Visualizations", desc: "Generate custom Volcano plots, PCA projections, and clustered Heatmaps" },
      { title: "Pathway Enrichment & GSEA", desc: "Map gene signatures to Gene Ontology, KEGG, and Reactome networks" }
    ],
    techTags: ["fastp", "FastQC", "STAR", "Salmon", "DESeq2", "clusterProfiler", "GSEA"],
    renderGraphic: () => `
      <!-- Side-by-side Volcano Plot & Heatmap Matrix -->
      <g transform="translate(140, 0)">
        <!-- Volcano Plot Card Left -->
        <g transform="translate(0, 0)">
          <rect width="260" height="230" rx="14" fill="#020617" stroke="#1E293B" stroke-width="2"/>
          <text x="130" y="28" text-anchor="middle" font-family="Arial" font-weight="900" font-size="14" fill="#38BDF8">Differential Expression Volcano</text>
          <line x1="130" y1="45" x2="130" y2="200" stroke="#475569" stroke-width="1.2" stroke-dasharray="3,3"/>
          <line x1="25" y1="130" x2="235" y2="130" stroke="#475569" stroke-width="1.2" stroke-dasharray="3,3"/>
          <!-- Points -->
          <circle cx="50" cy="70" r="4.5" fill="#3B82F6"/>
          <circle cx="70" cy="95" r="4" fill="#38BDF8"/>
          <circle cx="85" cy="115" r="3.5" fill="#60A5FA"/>
          <circle cx="210" cy="65" r="5" fill="#EF4444"/>
          <circle cx="190" cy="85" r="4.2" fill="#F87171"/>
          <circle cx="175" cy="110" r="3.5" fill="#FB7185"/>
          <circle cx="120" cy="160" r="2.5" fill="#64748B"/>
          <circle cx="140" cy="175" r="2.5" fill="#64748B"/>
          <text x="30" y="215" font-family="Arial" font-weight="800" font-size="11" fill="#3B82F6">&#9660; Downregulated</text>
          <text x="230" y="215" text-anchor="end" font-family="Arial" font-weight="800" font-size="11" fill="#EF4444">&#9650; Upregulated</text>
        </g>

        <!-- Clustered Heatmap Card Right -->
        <g transform="translate(290, 0)">
          <rect width="270" height="230" rx="14" fill="#020617" stroke="#1E293B" stroke-width="2"/>
          <text x="135" y="28" text-anchor="middle" font-family="Arial" font-weight="900" font-size="14" fill="#10B981">Hierarchical Heatmap Matrix</text>
          
          <!-- Heatmap Grid 5x4 -->
          <g transform="translate(30, 45)">
            <rect x="0" y="0" width="38" height="28" rx="2" fill="#EF4444"/>
            <rect x="42" y="0" width="38" height="28" rx="2" fill="#F87171"/>
            <rect x="84" y="0" width="38" height="28" rx="2" fill="#60A5FA"/>
            <rect x="126" y="0" width="38" height="28" rx="2" fill="#2563EB"/>
            <rect x="168" y="0" width="38" height="28" rx="2" fill="#1D4ED8"/>

            <rect x="0" y="32" width="38" height="28" rx="2" fill="#F87171"/>
            <rect x="42" y="32" width="38" height="28" rx="2" fill="#EF4444"/>
            <rect x="84" y="32" width="38" height="28" rx="2" fill="#3B82F6"/>
            <rect x="126" y="32" width="38" height="28" rx="2" fill="#2563EB"/>
            <rect x="168" y="32" width="38" height="28" rx="2" fill="#1D4ED8"/>

            <rect x="0" y="64" width="38" height="28" rx="2" fill="#3B82F6"/>
            <rect x="42" y="64" width="38" height="28" rx="2" fill="#60A5FA"/>
            <rect x="84" y="64" width="38" height="28" rx="2" fill="#F87171"/>
            <rect x="126" y="64" width="38" height="28" rx="2" fill="#EF4444"/>
            <rect x="168" y="64" width="38" height="28" rx="2" fill="#DC2626"/>

            <rect x="0" y="96" width="38" height="28" rx="2" fill="#1D4ED8"/>
            <rect x="42" y="96" width="38" height="28" rx="2" fill="#2563EB"/>
            <rect x="84" y="96" width="38" height="28" rx="2" fill="#EF4444"/>
            <rect x="126" y="96" width="38" height="28" rx="2" fill="#DC2626"/>
            <rect x="168" y="96" width="38" height="28" rx="2" fill="#991B1B"/>
          </g>
          <text x="135" y="205" text-anchor="middle" font-family="Arial" font-weight="700" font-size="11" fill="#94A3B8">Z-Score Normalized Expression</text>
        </g>
      </g>
    `
  },
  {
    num: "03",
    tag: "MODULE 03 · MULTI-COHORT INTEGRATION",
    title: "Meta-Analysis & Clinical Biomarkers",
    centralMessage: "“Combine GEO & TCGA Datasets, Eliminate Batch Effects, and Identify Robust Biomarkers.”",
    accentColor: "#D97706",
    bullets: [
      { title: "Public Omics Repositories", desc: "Programmatically download and curate raw datasets from GEO, TCGA, and SRA" },
      { title: "Batch Effect Correction", desc: "Master ComBat, SVA, and Limma to remove technical variance across platforms" },
      { title: "Meta-Analysis Statistics", desc: "Apply Random Effects & Fixed Effects models to discover universal biomarkers" },
      { title: "Survival & Clinical Prognostics", desc: "Kaplan-Meier survival curves and Cox proportional hazards regression" }
    ],
    techTags: ["GEOquery", "TCGAbiolinks", "ComBat", "metaRNASeq", "survival", "survminer"],
    renderGraphic: () => `
      <!-- Forest Meta-Analysis & Cross-Cohort Cohort Integration -->
      <g transform="translate(180, 0)">
        <rect width="480" height="230" rx="14" fill="#020617" stroke="#1E293B" stroke-width="2"/>
        <text x="240" y="28" text-anchor="middle" font-family="Arial" font-weight="900" font-size="14" fill="#F59E0B">Multi-Cohort Forest Plot (Biomarker Meta-Analysis)</text>
        <line x1="240" y1="42" x2="240" y2="200" stroke="#475569" stroke-width="1.5"/>

        <!-- Study 1: GSE19804 (Lung Cancer) -->
        <text x="35" y="65" font-family="Arial" font-weight="700" font-size="12" fill="#E2E8F0">GSE19804 (n=120)</text>
        <line x1="140" y1="61" x2="220" y2="61" stroke="#38BDF8" stroke-width="2.5"/>
        <rect x="175" y="56" width="10" height="10" fill="#38BDF8"/>
        <text x="380" y="65" font-family="monospace" font-size="11" fill="#94A3B8">HR: 1.45 [1.12-1.88]</text>

        <!-- Study 2: GSE31210 (Tumor vs Normal) -->
        <text x="35" y="100" font-family="Arial" font-weight="700" font-size="12" fill="#E2E8F0">GSE31210 (n=226)</text>
        <line x1="160" y1="96" x2="290" y2="96" stroke="#38BDF8" stroke-width="2.5"/>
        <rect x="215" y="91" width="12" height="10" fill="#38BDF8"/>
        <text x="380" y="100" font-family="monospace" font-size="11" fill="#94A3B8">HR: 1.62 [1.25-2.10]</text>

        <!-- Study 3: TCGA-LUAD (RNA-Seq) -->
        <text x="35" y="135" font-family="Arial" font-weight="700" font-size="12" fill="#E2E8F0">TCGA-LUAD (n=515)</text>
        <line x1="180" y1="131" x2="310" y2="131" stroke="#38BDF8" stroke-width="2.5"/>
        <rect x="235" y="126" width="15" height="10" fill="#38BDF8"/>
        <text x="380" y="135" font-family="monospace" font-size="11" fill="#94A3B8">HR: 1.58 [1.32-1.90]</text>

        <!-- Combined Random Effects Meta Summary -->
        <line x1="35" y1="155" x2="445" y2="155" stroke="#334155" stroke-width="1"/>
        <text x="35" y="182" font-family="Arial" font-weight="900" font-size="13" fill="#10B981">Summary Meta-Effect</text>
        <polygon points="215,178 225,172 235,178 225,184" fill="#10B981"/>
        <text x="380" y="182" font-family="monospace" font-weight="700" font-size="12" fill="#10B981">HR: 1.56 [1.38-1.77] ***</text>
      </g>
    `
  },
  {
    num: "04",
    tag: "MODULE 04 · SINGLE-CELL & SPATIAL OMICS",
    title: "Single-Cell (scRNA) & 10x Visium HD",
    centralMessage: "“Resolve Cellular Heterogeneity & Spatial Tissue Niches at Single-Cell Resolution.”",
    accentColor: "#E11D48",
    bullets: [
      { title: "10x Genomics & Cell Ranger", desc: "Demultiplexing, count matrix processing, and quality control filtering" },
      { title: "Seurat v5 & Scanpy Workflows", desc: "Normalization, PCA, Harmony integration, and 2D UMAP non-linear clustering" },
      { title: "Automated Cell Type Annotation", desc: "Reference-based labeling with SingleR, CellTypist, and canonical markers" },
      { title: "10x Visium HD Spatial Niches", desc: "Map cell-cell communication and microenvironment spatial architecture" }
    ],
    techTags: ["10x Genomics", "Cell Ranger", "Seurat v5", "Scanpy", "Harmony", "Visium HD", "SingleR"],
    renderGraphic: () => `
      <!-- Single-Cell UMAP & Spatial Visium Side-by-Side -->
      <g transform="translate(140, 0)">
        <!-- scRNA UMAP Left -->
        <g transform="translate(0, 0)">
          <rect width="260" height="230" rx="14" fill="#020617" stroke="#1E293B" stroke-width="2"/>
          <text x="130" y="28" text-anchor="middle" font-family="Arial" font-weight="900" font-size="14" fill="#F43F5E">Seurat v5 UMAP Clustering</text>
          
          <!-- Cluster 1 (CD8+ T-Cells - Rose) -->
          <circle cx="65" cy="80" r="5" fill="#F43F5E"/>
          <circle cx="55" cy="95" r="4" fill="#FB7185"/>
          <circle cx="75" cy="100" r="4.5" fill="#F43F5E"/>
          <circle cx="85" cy="85" r="4" fill="#FDA4AF"/>
          <text x="70" y="125" text-anchor="middle" font-family="Arial" font-weight="700" font-size="10" fill="#FDA4AF">T-Cells</text>

          <!-- Cluster 2 (B-Cells - Blue) -->
          <circle cx="180" cy="75" r="5" fill="#3B82F6"/>
          <circle cx="195" cy="88" r="4.5" fill="#60A5FA"/>
          <circle cx="170" cy="92" r="4" fill="#93C5FD"/>
          <circle cx="210" cy="80" r="3.8" fill="#38BDF8"/>
          <text x="190" y="120" text-anchor="middle" font-family="Arial" font-weight="700" font-size="10" fill="#93C5FD">B-Cells</text>

          <!-- Cluster 3 (Macrophages - Emerald) -->
          <circle cx="130" cy="160" r="5.5" fill="#10B981"/>
          <circle cx="115" cy="175" r="4.5" fill="#34D399"/>
          <circle cx="145" cy="172" r="4" fill="#6EE7B7"/>
          <text x="130" y="205" text-anchor="middle" font-family="Arial" font-weight="700" font-size="10" fill="#6EE7B7">Macrophages</text>
        </g>

        <!-- Spatial 10x Visium HD Right -->
        <g transform="translate(290, 0)">
          <rect width="270" height="230" rx="14" fill="#020617" stroke="#1E293B" stroke-width="2"/>
          <text x="135" y="28" text-anchor="middle" font-family="Arial" font-weight="900" font-size="14" fill="#A855F7">10x Visium HD Spatial Niches</text>

          <!-- Spatial Hex Spot Array -->
          <g transform="translate(35, 48)">
            <!-- Row 1 -->
            <circle cx="20" cy="20" r="8" fill="#8B5CF6"/>
            <circle cx="50" cy="20" r="8" fill="#8B5CF6"/>
            <circle cx="80" cy="20" r="8" fill="#EC4899"/>
            <circle cx="110" cy="20" r="8" fill="#EC4899"/>
            <circle cx="140" cy="20" r="8" fill="#3B82F6"/>
            <circle cx="170" cy="20" r="8" fill="#3B82F6"/>

            <!-- Row 2 -->
            <circle cx="35" cy="46" r="8" fill="#8B5CF6"/>
            <circle cx="65" cy="46" r="8" fill="#EC4899"/>
            <circle cx="95" cy="46" r="8" fill="#EC4899"/>
            <circle cx="125" cy="46" r="8" fill="#3B82F6"/>
            <circle cx="155" cy="46" r="8" fill="#10B981"/>

            <!-- Row 3 -->
            <circle cx="20" cy="72" r="8" fill="#8B5CF6"/>
            <circle cx="50" cy="72" r="8" fill="#EC4899"/>
            <circle cx="80" cy="72" r="8" fill="#3B82F6"/>
            <circle cx="110" cy="72" r="8" fill="#10B981"/>
            <circle cx="140" cy="72" r="8" fill="#10B981"/>
            <circle cx="170" cy="72" r="8" fill="#10B981"/>

            <!-- Row 4 -->
            <circle cx="35" cy="98" r="8" fill="#3B82F6"/>
            <circle cx="65" cy="98" r="8" fill="#3B82F6"/>
            <circle cx="95" cy="98" r="8" fill="#10B981"/>
            <circle cx="125" cy="98" r="8" fill="#10B981"/>
            <circle cx="155" cy="98" r="8" fill="#10B981"/>
          </g>
          <text x="135" y="205" text-anchor="middle" font-family="Arial" font-weight="700" font-size="11" fill="#94A3B8">Tumor-Immune Microenvironment</text>
        </g>
      </g>
    `
  },
  {
    num: "05",
    tag: "MODULE 05 · BIO-AI & MACHINE LEARNING",
    title: "AI & Machine Learning for Omics Discovery",
    centralMessage: "“Train Machine Learning Models, SHAP Biomarkers & Agentic Bio-AI Pipelines.”",
    accentColor: "#16A34A",
    bullets: [
      { title: "Supervised Omics Classifiers", desc: "Build Random Forest, XGBoost, and SVM models for disease classification" },
      { title: "SHAP & Feature Explainability", desc: "Extract non-linear key gene drivers using Shapley additive explanations" },
      { title: "Deep Learning for Sequences", desc: "Introduction to PyTorch CNNs & Graph Neural Networks for biological networks" },
      { title: "Agentic LLM Bio-Workflows", desc: "Accelerate literature synthesis, automated QA, and reproducible scripting" }
    ],
    techTags: ["Scikit-Learn", "XGBoost", "PyTorch", "SHAP", "Agentic Bio-AI", "BioPython"],
    renderGraphic: () => `
      <!-- Neural Network & SHAP Feature Importance -->
      <g transform="translate(180, 0)">
        <rect width="480" height="230" rx="14" fill="#020617" stroke="#1E293B" stroke-width="2"/>
        <text x="240" y="28" text-anchor="middle" font-family="Arial" font-weight="900" font-size="14" fill="#10B981">AI Diagnostic Classifier &amp; SHAP Feature Importance</text>

        <!-- Neural Network Architecture Left -->
        <g transform="translate(25, 45)">
          <!-- Input Nodes (Genes) -->
          <circle cx="20" cy="20" r="6" fill="#10B981"/>
          <circle cx="20" cy="50" r="6" fill="#10B981"/>
          <circle cx="20" cy="80" r="6" fill="#10B981"/>
          <circle cx="20" cy="110" r="6" fill="#10B981"/>

          <!-- Hidden Layer -->
          <circle cx="70" cy="35" r="7" fill="#38BDF8"/>
          <circle cx="70" cy="65" r="7" fill="#38BDF8"/>
          <circle cx="70" cy="95" r="7" fill="#38BDF8"/>

          <!-- Output Node (Diagnosis) -->
          <circle cx="120" cy="65" r="8" fill="#F59E0B"/>

          <!-- Connections -->
          <line x1="20" y1="20" x2="70" y2="35" stroke="#475569" stroke-width="1.2"/>
          <line x1="20" y1="50" x2="70" y2="35" stroke="#475569" stroke-width="1.2"/>
          <line x1="20" y1="50" x2="70" y2="65" stroke="#475569" stroke-width="1.2"/>
          <line x1="20" y1="80" x2="70" y2="65" stroke="#475569" stroke-width="1.2"/>
          <line x1="20" y1="80" x2="70" y2="95" stroke="#475569" stroke-width="1.2"/>
          <line x1="20" y1="110" x2="70" y2="95" stroke="#475569" stroke-width="1.2"/>
          <line x1="70" y1="35" x2="120" y2="65" stroke="#38BDF8" stroke-width="1.5"/>
          <line x1="70" y1="65" x2="120" y2="65" stroke="#38BDF8" stroke-width="2"/>
          <line x1="70" y1="95" x2="120" y2="65" stroke="#38BDF8" stroke-width="1.5"/>
          <text x="70" y="140" text-anchor="middle" font-family="Arial" font-weight="700" font-size="10" fill="#94A3B8">PyTorch Model</text>
        </g>

        <!-- SHAP Importance Bar Chart Right -->
        <g transform="translate(200, 48)">
          <text x="0" y="15" font-family="Arial" font-weight="800" font-size="11" fill="#E2E8F0">Gene: EGFR</text>
          <rect x="75" y="4" width="180" height="13" rx="3" fill="#EF4444"/>
          <text x="75" y="42" font-family="Arial" font-weight="800" font-size="11" fill="#E2E8F0">Gene: TP53</text>
          <rect x="75" y="31" width="145" height="13" rx="3" fill="#F87171"/>
          <text x="0" y="69" font-family="Arial" font-weight="800" font-size="11" fill="#E2E8F0">Gene: BRCA1</text>
          <rect x="75" y="58" width="115" height="13" rx="3" fill="#3B82F6"/>
          <text x="0" y="96" font-family="Arial" font-weight="800" font-size="11" fill="#E2E8F0">Gene: MYC</text>
          <rect x="75" y="85" width="85" height="13" rx="3" fill="#60A5FA"/>
          <text x="135" y="125" text-anchor="middle" font-family="Arial" font-weight="700" font-size="10" fill="#10B981">Mean |SHAP Value| (Impact on Prediction)</text>
        </g>
      </g>
    `
  }
];

function generateModuleSVG(m) {
  const techBadges = m.techTags.map((t, idx) => {
    return `
      <g transform="translate(${idx * 115}, 0)">
        <rect width="105" height="30" rx="8" fill="#1E293B" stroke="#334155" stroke-width="1"/>
        <text x="52.5" y="19" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="12" fill="#E2E8F0">${xmlEscape(t)}</text>
      </g>
    `;
  }).join("");

  const bulletCards = m.bullets.map((b, idx) => {
    const x = idx % 2 === 0 ? 0 : 440;
    const y = Math.floor(idx / 2) * 90;
    return `
      <g transform="translate(${x}, ${y})">
        <rect width="420" height="76" rx="14" fill="#0C1322" stroke="#1E293B" stroke-width="1.2"/>
        <circle cx="28" cy="38" r="10" fill="${m.accentColor}" opacity="0.25"/>
        <circle cx="28" cy="38" r="4.5" fill="${m.accentColor}"/>
        <text x="50" y="30" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="15" fill="#FFFFFF">${xmlEscape(b.title)}</text>
        <text x="50" y="52" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="12.5" fill="#94A3B8">${xmlEscape(b.desc)}</text>
      </g>
    `;
  }).join("");

  return `<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bg-grad-${m.num}" x1="0" y1="0" x2="1080" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#090D1A"/>
      <stop offset="50%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#040711"/>
    </linearGradient>

    <!-- Glass Card Rim -->
    <linearGradient id="card-rim-${m.num}" x1="0" y1="0" x2="960" y2="820" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.4"/>
      <stop offset="50%" stop-color="${m.accentColor}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.05"/>
    </linearGradient>

    <!-- Ambient Glow Filter -->
    <filter id="ambient-glow-${m.num}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="80"/>
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="1080" height="1080" fill="url(#bg-grad-${m.num})"/>

  <!-- Ambient Light Spotlights -->
  <circle cx="880" cy="180" r="320" fill="${m.accentColor}" opacity="0.18" filter="url(#ambient-glow-${m.num})"/>
  <circle cx="150" cy="850" r="300" fill="#2563EB" opacity="0.12" filter="url(#ambient-glow-${m.num})"/>

  <!-- Top Accent Bar -->
  <rect width="1080" height="5" fill="${m.accentColor}"/>

  <!-- ================= 1. HEADER (y=45) ================= -->
  <g transform="translate(60, 45)">
    <!-- DeepBio Emblem -->
    <rect width="44" height="44" rx="12" fill="${m.accentColor}"/>
    <path d="M22 12 L10 18 L22 24 L34 18 L22 12Z" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round" fill="none"/>
    <path d="M14 20 V27 C14 30 17.5 32 22 32 C26.5 32 30 30 30 27 V20" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" fill="none"/>
    
    <text x="56" y="24" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">DeepBio <tspan fill="#38BDF8">Academy</tspan></text>
    <text x="56" y="40" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#94A3B8" letter-spacing="1.5">BIOINFORMATICS MENTORSHIP PROGRAM (BMP-C03)</text>

    <!-- Top Right Module Badge -->
    <g transform="translate(670, 0)">
      <rect width="290" height="44" rx="22" fill="#1E293B" stroke="#334155" stroke-width="1.2"/>
      <circle cx="24" cy="22" r="6" fill="${m.accentColor}"/>
      <text x="155" y="27" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" fill="#F1F5F9">${xmlEscape(m.tag)}</text>
    </g>
  </g>

  <!-- ================= 2. MAIN HERO SPOTLIGHT CARD (y=112) ================= -->
  <g transform="translate(60, 112)">
    <!-- Outer Card Shell -->
    <rect width="960" height="800" rx="28" fill="url(#card-rim-${m.num})"/>
    <rect x="1.5" y="1.5" width="957" height="797" rx="26.5" fill="#0C1322" fill-opacity="0.98"/>

    <!-- A. Module Title & Central Hook Message (y=35) -->
    <g transform="translate(45, 35)">
      <text x="0" y="32" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="36" fill="#FFFFFF" letter-spacing="-0.5">${xmlEscape(m.title)}</text>
      
      <!-- Central Hook Quote -->
      <rect y="48" width="870" height="52" rx="14" fill="#131C31" stroke="${m.accentColor}" stroke-width="1.2" stroke-opacity="0.5"/>
      <text x="25" y="80" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="16" fill="#38BDF8">${xmlEscape(m.centralMessage)}</text>
    </g>

    <!-- B. HERO GRAPHIC CENTERPIECE (y=155) -->
    <g transform="translate(45, 155)">
      ${m.renderGraphic()}
    </g>

    <!-- C. CORE DELIVERABLES 2x2 GRID (y=405) -->
    <g transform="translate(45, 405)">
      <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="13" fill="#64748B" letter-spacing="2">WHAT YOU WILL MASTER &amp; BUILD</text>
      <g transform="translate(0, 14)">
        ${bulletCards}
      </g>
    </g>

    <!-- D. TECH STACK RIBBON (y=610) -->
    <g transform="translate(45, 605)">
      <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" fill="#64748B" letter-spacing="1.5">PRODUCTION STACK &amp; TOOLS:</text>
      <g transform="translate(0, 10)">
        ${techBadges}
      </g>
    </g>

    <!-- E. INTEGRATED ADMISSIONS CALLOUT (y=675) -->
    <g transform="translate(45, 665)">
      <rect width="870" height="105" rx="18" fill="#131F37" stroke="${m.accentColor}" stroke-width="1.2" stroke-opacity="0.6"/>

      <!-- Content Left -->
      <g transform="translate(30, 36)">
        <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">Join BMP Cohort 03 &#8226; Starts October 2, 2026</text>
        <text x="0" y="26" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="14" fill="#38BDF8">12-Week Intensive Hands-on Research Mentorship &#8226; Limited to 30 Seats</text>
      </g>

      <!-- Action Button Right -->
      <g transform="translate(670, 26)">
        <rect width="170" height="52" rx="26" fill="${m.accentColor}"/>
        <text x="85" y="32" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="15" fill="#FFFFFF">Apply Now &#8594;</text>
      </g>
    </g>
  </g>

  <!-- ================= 3. FOOTER URL (y=945) ================= -->
  <g transform="translate(540, 950)">
    <rect x="-320" y="0" width="640" height="52" rx="26" fill="#0F172A" stroke="#1E293B" stroke-width="1.2"/>
    <text x="0" y="33" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="20" fill="#FFFFFF">deepbioacademy.com/programs/bmp</text>
    <text x="0" y="80" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="13.5" fill="#64748B">Admissions Open &#8226; Transform Your Academic &amp; Research Career</text>
  </g>

  <!-- Bottom Accent Line -->
  <rect y="1075" width="1080" height="5" fill="${m.accentColor}"/>
</svg>`;
}

async function run() {
  console.log("Generating 5 Dedicated BMP Module Spotlight Ads (600 DPI Ultra-HD)...");

  for (const m of moduleAds) {
    const svgCode = generateModuleSVG(m);
    const svgFilename = `bmp-module-${m.num}-spotlight.svg`;
    const pngFilename = `bmp-module-${m.num}-spotlight.png`;

    const svgPath = path.join(svgDir, svgFilename);
    const pngPath = path.join(pngDir, pngFilename);

    fs.writeFileSync(svgPath, svgCode, "utf-8");

    try {
      await sharp(Buffer.from(svgCode), { density: 600 })
        .resize(2160, 2160, { fit: "contain", kernel: "lanczos3" })
        .png({ quality: 100, compressionLevel: 6 })
        .toFile(pngPath);
      console.log(`✓ Rendered 600 DPI Ultra-HD: ${pngFilename}`);
    } catch (err) {
      console.error(`✗ Error rendering ${pngFilename}:`, err);
    }
  }

  console.log("All 5 Module Spotlight Ads successfully generated!");
}

run();
