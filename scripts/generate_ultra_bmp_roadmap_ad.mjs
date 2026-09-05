import fs from "fs";
import path from "path";
import sharp from "sharp";

const svgOutPath = path.resolve("public/bmp_ads/svg/bmp-c03-roadmap-infographic.svg");
const pngOutPath = path.resolve("public/bmp_ads/png/bmp-c03-roadmap-infographic.png");

fs.mkdirSync(path.dirname(svgOutPath), { recursive: true });
fs.mkdirSync(path.dirname(pngOutPath), { recursive: true });

function xmlEscape(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Highly polished, rich vector graphics for all 9 modules
const richIllustrations = {
  "01": (col) => `
    <!-- Linux Laptop & Python Shell -->
    <g transform="translate(14, 8)">
      <!-- Laptop Screen -->
      <rect x="6" y="2" width="38" height="26" rx="3" fill="#0F172A" stroke="#334155" stroke-width="1"/>
      <rect x="8" y="4" width="34" height="22" rx="1.5" fill="#020617"/>
      <!-- Terminal prompt & code lines -->
      <text x="11" y="11" font-family="monospace" font-weight="900" font-size="6" fill="#38BDF8">&gt; conda</text>
      <text x="11" y="17" font-family="monospace" font-weight="700" font-size="5" fill="#10B981">env active</text>
      <line x1="11" y1="21" x2="25" y2="21" stroke="#F59E0B" stroke-width="1"/>
      <!-- Laptop Base -->
      <path d="M2 28 L48 28 L44 32 L6 32 Z" fill="#64748B"/>
      <!-- Python dual color emblem -->
      <circle cx="40" cy="8" r="5" fill="#3B82F6"/>
      <circle cx="43" cy="11" r="5" fill="#FACC15"/>
    </g>
  `,
  "02": (col) => `
    <!-- FASTQ Quality Distribution & Phred Scores -->
    <g transform="translate(12, 6)">
      <!-- Chart BG -->
      <rect x="2" y="2" width="46" height="32" rx="3" fill="#0F172A" stroke="#1E293B" stroke-width="1"/>
      <!-- Grid Lines -->
      <line x1="4" y1="12" x2="46" y2="12" stroke="#334155" stroke-width="0.8" stroke-dasharray="2,2"/>
      <line x1="4" y1="22" x2="46" y2="22" stroke="#334155" stroke-width="0.8" stroke-dasharray="2,2"/>
      <!-- Phred Q30 Green Line -->
      <line x1="4" y1="10" x2="46" y2="10" stroke="#10B981" stroke-width="1.2"/>
      <!-- Quality Boxplot bars (Green & Yellow) -->
      <rect x="8" y="8" width="4" height="20" rx="1" fill="#10B981"/>
      <rect x="15" y="7" width="4" height="21" rx="1" fill="#10B981"/>
      <rect x="22" y="9" width="4" height="19" rx="1" fill="#10B981"/>
      <rect x="29" y="11" width="4" height="17" rx="1" fill="#10B981"/>
      <rect x="36" y="14" width="4" height="14" rx="1" fill="#F59E0B"/>
      <text x="25" y="30" text-anchor="middle" font-family="Arial" font-weight="900" font-size="5" fill="#38BDF8">FASTQ Q30</text>
    </g>
  `,
  "03": (col) => `
    <!-- Reference Genome & Splice Alignment -->
    <g transform="translate(12, 6)">
      <rect x="2" y="2" width="46" height="32" rx="3" fill="#0F172A" stroke="#1E293B" stroke-width="1"/>
      <!-- Reference Chromosome Track -->
      <rect x="6" y="6" width="38" height="4" rx="2" fill="#6366F1"/>
      <line x1="6" y1="8" x2="44" y2="8" stroke="#FFFFFF" stroke-width="0.8" stroke-dasharray="3,2"/>
      <!-- Spliced Junction Reads -->
      <rect x="8" y="14" width="12" height="3" rx="1" fill="#38BDF8"/>
      <path d="M20 15.5 Q 26 11 32 15.5" stroke="#F43F5E" stroke-width="1.2" fill="none"/>
      <rect x="32" y="14" width="10" height="3" rx="1" fill="#38BDF8"/>
      <!-- Paired-End Reads -->
      <rect x="10" y="21" width="10" height="3" rx="1" fill="#10B981"/>
      <line x1="20" y1="22.5" x2="28" y2="22.5" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="1,1"/>
      <rect x="28" y="21" width="10" height="3" rx="1" fill="#10B981"/>
      <!-- Salmon/STAR label -->
      <text x="25" y="31" text-anchor="middle" font-family="Arial" font-weight="800" font-size="5" fill="#E2E8F0">STAR / Salmon</text>
    </g>
  `,
  "04": (col) => `
    <!-- Gene Expression Heatmap Matrix -->
    <g transform="translate(13, 6)">
      <!-- Dendrogram Top -->
      <path d="M12 4 L12 2 L22 2 L22 4 M17 2 L17 0 L32 0 L32 2 L37 2 L37 4" stroke="#94A3B8" stroke-width="1" fill="none"/>
      <!-- Heatmap Cells Matrix 4x3 -->
      <rect x="6" y="6" width="8" height="6" rx="1" fill="#EF4444"/>
      <rect x="15" y="6" width="8" height="6" rx="1" fill="#F87171"/>
      <rect x="24" y="6" width="8" height="6" rx="1" fill="#3B82F6"/>
      <rect x="33" y="6" width="8" height="6" rx="1" fill="#1D4ED8"/>

      <rect x="6" y="13" width="8" height="6" rx="1" fill="#F87171"/>
      <rect x="15" y="13" width="8" height="6" rx="1" fill="#EF4444"/>
      <rect x="24" y="13" width="8" height="6" rx="1" fill="#60A5FA"/>
      <rect x="33" y="13" width="8" height="6" rx="1" fill="#3B82F6"/>

      <rect x="6" y="20" width="8" height="6" rx="1" fill="#3B82F6"/>
      <rect x="15" y="20" width="8" height="6" rx="1" fill="#60A5FA"/>
      <rect x="24" y="20" width="8" height="6" rx="1" fill="#EF4444"/>
      <rect x="33" y="20" width="8" height="6" rx="1" fill="#DC2626"/>
      
      <!-- DESeq2 Label -->
      <text x="24" y="32" text-anchor="middle" font-family="Arial" font-weight="900" font-size="5.5" fill="#0D9488">DESeq2 Log2FC</text>
    </g>
  `,
  "05": (col) => `
    <!-- Volcano Scatter & Pathway Network -->
    <g transform="translate(12, 6)">
      <rect x="2" y="2" width="46" height="32" rx="3" fill="#0F172A" stroke="#1E293B" stroke-width="1"/>
      <!-- Volcano Axes & Cutoffs -->
      <line x1="25" y1="4" x2="25" y2="28" stroke="#475569" stroke-width="0.8" stroke-dasharray="1.5,1.5"/>
      <line x1="4" y1="18" x2="46" y2="18" stroke="#475569" stroke-width="0.8" stroke-dasharray="1.5,1.5"/>
      <!-- Downregulated Genes (Blue) -->
      <circle cx="10" cy="8" r="2" fill="#3B82F6"/>
      <circle cx="14" cy="11" r="1.5" fill="#38BDF8"/>
      <circle cx="18" cy="14" r="1.5" fill="#60A5FA"/>
      <!-- Upregulated Genes (Red) -->
      <circle cx="40" cy="6" r="2.2" fill="#EF4444"/>
      <circle cx="36" cy="10" r="1.8" fill="#F87171"/>
      <circle cx="32" cy="14" r="1.5" fill="#FB7185"/>
      <!-- Non-sig central points (Gray) -->
      <circle cx="23" cy="22" r="1" fill="#64748B"/>
      <circle cx="27" cy="24" r="1" fill="#64748B"/>
      <text x="25" y="30" text-anchor="middle" font-family="Arial" font-weight="800" font-size="5" fill="#EA580C">GSEA &amp; Volcano</text>
    </g>
  `,
  "06": (col) => `
    <!-- Forest Meta-Analysis Plot & Multi-Cohort Integration -->
    <g transform="translate(12, 6)">
      <rect x="2" y="2" width="46" height="32" rx="3" fill="#0F172A" stroke="#1E293B" stroke-width="1"/>
      <!-- Zero Effect Center Line -->
      <line x1="25" y1="4" x2="25" y2="26" stroke="#64748B" stroke-width="1"/>
      <!-- Cohort 1 Study (GSE1234) -->
      <line x1="12" y1="8" x2="24" y2="8" stroke="#38BDF8" stroke-width="1.2"/>
      <rect x="16" y="6.5" width="3" height="3" fill="#38BDF8"/>
      <!-- Cohort 2 Study (TCGA-BRCA) -->
      <line x1="15" y1="14" x2="33" y2="14" stroke="#38BDF8" stroke-width="1.2"/>
      <rect x="22" y="12.5" width="4" height="4" fill="#38BDF8"/>
      <!-- Cohort 3 Study (GSE5678) -->
      <line x1="18" y1="20" x2="38" y2="20" stroke="#38BDF8" stroke-width="1.2"/>
      <rect x="27" y="18.5" width="3.5" height="3.5" fill="#38BDF8"/>
      <!-- Combined Meta Diamond (Green) -->
      <polygon points="25,23 28,25.5 25,28 22,25.5" fill="#10B981"/>
      <text x="25" y="31" text-anchor="middle" font-family="Arial" font-weight="900" font-size="4.5" fill="#FBBF24">GEO+TCGA Meta</text>
    </g>
  `,
  "07": (col) => `
    <!-- Single-Cell 2D UMAP Cell Typing -->
    <g transform="translate(12, 6)">
      <rect x="2" y="2" width="46" height="32" rx="3" fill="#0F172A" stroke="#1E293B" stroke-width="1"/>
      <!-- T-Cell Cluster (Rose) -->
      <circle cx="12" cy="10" r="2.5" fill="#F43F5E"/>
      <circle cx="16" cy="8" r="2" fill="#F43F5E"/>
      <circle cx="15" cy="14" r="2" fill="#FB7185"/>
      <circle cx="9" cy="13" r="1.5" fill="#FDA4AF"/>
      <!-- B-Cell Cluster (Blue) -->
      <circle cx="36" cy="10" r="2.5" fill="#3B82F6"/>
      <circle cx="41" cy="13" r="2" fill="#38BDF8"/>
      <circle cx="34" cy="15" r="2" fill="#60A5FA"/>
      <!-- Macrophage Cluster (Emerald) -->
      <circle cx="26" cy="24" r="2.5" fill="#10B981"/>
      <circle cx="21" cy="22" r="2" fill="#34D399"/>
      <circle cx="31" cy="23" r="2" fill="#6EE7B7"/>
      <text x="25" y="31" text-anchor="middle" font-family="Arial" font-weight="800" font-size="5" fill="#F43F5E">Seurat v5 UMAP</text>
    </g>
  `,
  "08": (col) => `
    <!-- 10x Visium HD Spatial Tissue Grid -->
    <g transform="translate(12, 6)">
      <rect x="2" y="2" width="46" height="32" rx="3" fill="#0F172A" stroke="#1E293B" stroke-width="1"/>
      <!-- Hexagonal Spatial Spots Array -->
      <!-- Row 1 -->
      <circle cx="12" cy="8" r="2.5" fill="#8B5CF6"/>
      <circle cx="20" cy="8" r="2.5" fill="#8B5CF6"/>
      <circle cx="28" cy="8" r="2.5" fill="#EC4899"/>
      <circle cx="36" cy="8" r="2.5" fill="#EC4899"/>
      <!-- Row 2 -->
      <circle cx="16" cy="14" r="2.5" fill="#8B5CF6"/>
      <circle cx="24" cy="14" r="2.5" fill="#3B82F6"/>
      <circle cx="32" cy="14" r="2.5" fill="#EC4899"/>
      <circle cx="40" cy="14" r="2.5" fill="#3B82F6"/>
      <!-- Row 3 -->
      <circle cx="12" cy="20" r="2.5" fill="#3B82F6"/>
      <circle cx="20" cy="20" r="2.5" fill="#10B981"/>
      <circle cx="28" cy="20" r="2.5" fill="#10B981"/>
      <circle cx="36" cy="20" r="2.5" fill="#3B82F6"/>
      <text x="25" y="30" text-anchor="middle" font-family="Arial" font-weight="800" font-size="5" fill="#A855F7">Visium HD Niche</text>
    </g>
  `,
  "09": (col) => `
    <!-- Neural Network AI & SHAP Feature Importance -->
    <g transform="translate(12, 6)">
      <rect x="2" y="2" width="46" height="32" rx="3" fill="#0F172A" stroke="#1E293B" stroke-width="1"/>
      <!-- Input Layer (Green) -->
      <circle cx="10" cy="8" r="2.2" fill="#10B981"/>
      <circle cx="10" cy="16" r="2.2" fill="#10B981"/>
      <circle cx="10" cy="24" r="2.2" fill="#10B981"/>
      <!-- Hidden Layer (Blue) -->
      <circle cx="24" cy="11" r="2.5" fill="#38BDF8"/>
      <circle cx="24" cy="21" r="2.5" fill="#38BDF8"/>
      <!-- Output Layer (Gold) -->
      <circle cx="38" cy="16" r="3" fill="#F59E0B"/>
      <!-- Synaptic Connections -->
      <line x1="10" y1="8" x2="24" y2="11" stroke="#475569" stroke-width="0.8"/>
      <line x1="10" y1="16" x2="24" y2="11" stroke="#475569" stroke-width="0.8"/>
      <line x1="10" y1="16" x2="24" y2="21" stroke="#475569" stroke-width="0.8"/>
      <line x1="10" y1="24" x2="24" y2="21" stroke="#475569" stroke-width="0.8"/>
      <line x1="24" y1="11" x2="38" y2="16" stroke="#38BDF8" stroke-width="1"/>
      <line x1="24" y1="21" x2="38" y2="16" stroke="#38BDF8" stroke-width="1"/>
      <text x="25" y="30" text-anchor="middle" font-family="Arial" font-weight="900" font-size="5" fill="#10B981">Bio-AI &amp; SHAP</text>
    </g>
  `
};

const modules = [
  {
    num: "01",
    title: "Foundations & HPC",
    color: "#0284C7",
    lightBg: "#F0F9FF",
    bullets: ["Linux & Bash CLI", "Conda & Envs", "Git & GitHub", "R & Python Setup"]
  },
  {
    num: "02",
    title: "Raw NGS & QC",
    color: "#2563EB",
    lightBg: "#EFF6FF",
    bullets: ["FASTQ Processing", "FastQC & MultiQC", "fastp Trimming", "Sequencing QC"]
  },
  {
    num: "03",
    title: "Alignment & Quant",
    color: "#4F46E5",
    lightBg: "#EEF2FF",
    bullets: ["STAR Aligner", "Salmon & Kallisto", "Reference Genomes", "Count Matrices"]
  },
  {
    num: "04",
    title: "Bulk RNA-Seq",
    color: "#0D9488",
    lightBg: "#F0FDFA",
    bullets: ["DESeq2 & EdgeR", "Normalization", "PCA & Heatmaps", "Batch Effects"]
  },
  {
    num: "05",
    title: "Pathways & GSEA",
    color: "#EA580C",
    lightBg: "#FFF7ED",
    bullets: ["GO & KEGG", "GSEA Enrichment", "Reactome & PPI", "Volcano Plots"]
  },
  {
    num: "06",
    title: "Meta-Analysis",
    color: "#D97706",
    lightBg: "#FFFBEB",
    bullets: ["GEO & TCGA Data", "Cross-Cohort Merge", "ComBat Batch Fix", "Biomarker Search"]
  },
  {
    num: "07",
    title: "Single-Cell (scRNA)",
    color: "#E11D48",
    lightBg: "#FFF1F2",
    bullets: ["10x & Seurat v5", "Scanpy Workflows", "UMAP & Clustering", "CellTypist / SingleR"]
  },
  {
    num: "08",
    title: "Spatial Omics",
    color: "#9333EA",
    lightBg: "#FAF5FF",
    bullets: ["10x Visium HD", "Spatial DimPlots", "Niche Analysis", "Tissue Microenv."]
  },
  {
    num: "09",
    title: "Bio-AI & ML",
    color: "#16A34A",
    lightBg: "#F0FDF4",
    bullets: ["ML Classification", "SHAP Biomarkers", "Agentic Bio-AI", "Manuscript Ready"]
  }
];

function generateUltraRoadmapSVG() {
  const stepWidth = 104;
  const startX = 38;
  const stepSpacing = 111;

  const moduleColumns = modules.map((m, idx) => {
    const x = startX + idx * stepSpacing;
    const bulletsXml = m.bullets.map((b, bIdx) => {
      return `<text x="${x + 6}" y="${475 + bIdx * 20}" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="8.8" fill="#1E293B">&#8226; ${xmlEscape(b)}</text>`;
    }).join("\n      ");

    // Arrow connector
    const arrow = idx < modules.length - 1 ? `
      <g transform="translate(${x + 104}, 412)">
        <circle cx="3" cy="0" r="7" fill="#F1F5F9"/>
        <path d="M1 -3 L5 0 L1 3" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>` : "";

    const illustrationSvg = richIllustrations[m.num](m.color);

    return `
    <!-- Column ${m.num}: ${m.title} -->
    <g>
      <!-- Step Badge with Shadow -->
      <rect x="${x + 36}" y="325" width="32" height="24" rx="12" fill="${m.color}" filter="url(#badge-shadow)"/>
      <text x="${x + 52}" y="341" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="11" fill="#FFFFFF">${m.num}</text>

      <!-- Main Column Box (Elevated Card) -->
      <rect x="${x}" y="356" width="${stepWidth}" height="240" rx="14" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2" filter="url(#card-shadow)"/>
      
      <!-- Top Title Bar -->
      <rect x="${x}" y="356" width="${stepWidth}" height="40" rx="14" fill="${m.lightBg}"/>
      <rect x="${x}" y="384" width="${stepWidth}" height="12" fill="${m.lightBg}"/>
      <text x="${x + stepWidth / 2}" y="380" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="10" fill="${m.color}">${xmlEscape(m.title)}</text>

      <!-- Center Rich Illustration Frame -->
      <g transform="translate(${x + 18}, 400)">
        <rect width="68" height="46" rx="8" fill="#090D1A" stroke="${m.color}" stroke-width="1.2"/>
        ${illustrationSvg}
      </g>

      <!-- Bullets List -->
      ${bulletsXml}
      ${arrow}
    </g>`;
  }).join("\n");

  return `<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bg-grad" x1="0" y1="0" x2="1080" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="40%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EDF4FD"/>
    </linearGradient>

    <!-- Top Badge Glow -->
    <linearGradient id="blue-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="50%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>

    <!-- Dark Bar Gradient -->
    <linearGradient id="dark-ribbon" x1="0" y1="0" x2="1080" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#090D1A"/>
      <stop offset="50%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#090D1A"/>
    </linearGradient>

    <!-- CTA Box Gradient -->
    <linearGradient id="cta-grad" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="40%" stop-color="#1E3A8A"/>
      <stop offset="100%" stop-color="#0D9488"/>
    </linearGradient>

    <!-- Filters for Depth and Realism -->
    <filter id="card-shadow" x="-10%" y="-5%" width="120%" height="115%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0F172A" flood-opacity="0.07"/>
    </filter>

    <filter id="badge-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.25"/>
    </filter>

    <filter id="glow-badge" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#2563EB" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Clean Canvas Background -->
  <rect width="1080" height="1080" fill="url(#bg-grad)"/>

  <!-- High-End Mesh Ambient Light Spotlights -->
  <circle cx="100" cy="80" r="220" fill="#38BDF8" opacity="0.18"/>
  <circle cx="980" cy="100" r="240" fill="#4F46E5" opacity="0.14"/>

  <!-- ================= 1. HEADER SECTION (y=30 to 200) ================= -->
  <!-- Top 3D DNA Graphic on Left -->
  <g transform="translate(35, 25)">
    <!-- DNA Strand Left Curve -->
    <path d="M20 15 Q 45 40 20 65 Q -5 90 20 115" stroke="#2563EB" stroke-width="4" fill="none" opacity="0.8"/>
    <path d="M40 15 Q 15 40 40 65 Q 65 90 40 115" stroke="#0D9488" stroke-width="4" fill="none" opacity="0.8"/>
    <!-- Base pair rungs -->
    <line x1="20" y1="25" x2="38" y2="25" stroke="#60A5FA" stroke-width="2.5"/>
    <circle cx="29" cy="25" r="3.5" fill="#F43F5E"/>
    <line x1="30" y1="40" x2="30" y2="40" stroke="#60A5FA" stroke-width="2.5"/>
    <circle cx="30" cy="40" r="4.5" fill="#FBBF24"/>
    <line x1="20" y1="55" x2="38" y2="55" stroke="#60A5FA" stroke-width="2.5"/>
    <circle cx="29" cy="55" r="3.5" fill="#38BDF8"/>
    <line x1="12" y1="75" x2="48" y2="75" stroke="#60A5FA" stroke-width="2.5"/>
    <circle cx="30" cy="75" r="4" fill="#10B981"/>
    <line x1="20" y1="95" x2="38" y2="95" stroke="#60A5FA" stroke-width="2.5"/>
    <circle cx="29" cy="95" r="3.5" fill="#8B5CF6"/>
  </g>

  <!-- Main Center Header Typography -->
  <g transform="translate(490, 42)">
    <text text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="24" fill="#0F172A" letter-spacing="2">DEEPBIO ACADEMY</text>
    <text y="48" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="44" fill="#1E3A8A" letter-spacing="-0.5">Bioinformatics Mentorship</text>
    <text y="92" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="30" fill="#0284C7">with AI &amp; High-Throughput Omics</text>
    
    <!-- Subtitle Line -->
    <path d="M-190 112 L190 112" stroke="#CBD5E1" stroke-width="2"/>
    <circle cx="0" cy="112" r="4.5" fill="#2563EB"/>
    <text y="132" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="15" fill="#475569">From Raw Sequences to High-Impact Discoveries &#8226; BMP Cohort 03</text>

    <!-- Program Pill -->
    <rect x="-310" y="146" width="620" height="32" rx="16" fill="#1E293B"/>
    <text y="167" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" fill="#38BDF8" letter-spacing="0.8">A COMPLETE 12-WEEK RESEARCH MENTORSHIP IN TRANSCRIPTOMICS &amp; BIO-AI</text>
  </g>

  <!-- Top-Right Circular High-Impact Badge (Floating Glow Badge) -->
  <g transform="translate(970, 96)" filter="url(#glow-badge)">
    <circle cx="0" cy="0" r="62" fill="url(#blue-grad)" stroke="#FFFFFF" stroke-width="3.5"/>
    <circle cx="0" cy="0" r="56" fill="none" stroke="#60A5FA" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text y="-22" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="11" fill="#BAE6FD" letter-spacing="1">COHORT 03</text>
    <text y="-1" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="17" fill="#FFFFFF">APPLY NOW</text>
    <text y="17" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13" fill="#FDE047">STARTS OCT 2</text>
    <text y="32" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="9.5" fill="#E2E8F0">30 Seats Limit</text>
  </g>

  <!-- ================= 2. PROGRAM METRICS BAR (y=240) ================= -->
  <g transform="translate(40, 240)">
    <rect width="1000" height="64" rx="18" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2" filter="url(#card-shadow)"/>

    <!-- Metric 1: 3 Months -->
    <g transform="translate(35, 32)">
      <rect x="0" y="-12" width="22" height="20" rx="3" fill="#2563EB"/>
      <rect x="3" y="-5" width="16" height="10" fill="#FFFFFF"/>
      <text x="30" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13.5" fill="#0F172A">3 Months</text>
      <text x="30" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#64748B">12-Week Intensive</text>
    </g>

    <!-- Metric 2: 25 Live Sessions -->
    <g transform="translate(175, 32)">
      <circle cx="10" cy="-3" r="8" fill="#0D9488"/>
      <text x="26" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13.5" fill="#0F172A">25 Sessions</text>
      <text x="26" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#64748B">Live Interactive</text>
    </g>

    <!-- Metric 3: 50+ Hours -->
    <g transform="translate(320, 32)">
      <circle cx="10" cy="-3" r="8" fill="#EA580C"/>
      <text x="26" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13.5" fill="#0F172A">50+ Hours</text>
      <text x="26" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#64748B">Hands-on Training</text>
    </g>

    <!-- Metric 4: 20+ Tools -->
    <g transform="translate(465, 32)">
      <rect x="0" y="-10" width="20" height="15" rx="2" fill="#4F46E5"/>
      <text x="28" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13.5" fill="#0F172A">20+ Tools</text>
      <text x="28" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#64748B">R, Python &amp; Linux</text>
    </g>

    <!-- Metric 5: HPC & Cloud -->
    <g transform="translate(610, 32)">
      <path d="M2 -2 C2 -8 8 -10 12 -8 C15 -11 20 -8 20 -3 C23 -3 24 2 20 5 L4 5 C0 5 0 -2 2 -2 Z" fill="#0284C7"/>
      <text x="28" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13.5" fill="#0F172A">HPC &amp; Cloud</text>
      <text x="28" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#64748B">Cluster Provided</text>
    </g>

    <!-- Metric 6: Research Project -->
    <g transform="translate(755, 32)">
      <path d="M4 -10 L16 -10 L16 -5 L20 4 C21 7 19 9 16 9 L4 9 C1 9 -1 7 0 4 L4 -5 Z" fill="#E11D48"/>
      <text x="28" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13.5" fill="#0F172A">Capstone</text>
      <text x="28" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#64748B">Real GEO/TCGA</text>
    </g>

    <!-- Metric 7: Certificate -->
    <g transform="translate(880, 32)">
      <rect x="0" y="-10" width="18" height="18" rx="2" fill="#16A34A"/>
      <text x="26" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13.5" fill="#0F172A">Certificate</text>
      <text x="26" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#64748B">Verified Credential</text>
    </g>
  </g>

  <!-- ================= 3. 9-STEP PIPELINE ROADMAP (y=320 to 600) ================= -->
  ${moduleColumns}

  <!-- ================= 4. TOOLS & TECHNOLOGIES DARK RIBBON (y=612) ================= -->
  <g transform="translate(40, 612)">
    <rect width="1000" height="52" rx="14" fill="url(#dark-ribbon)" stroke="#1E293B" stroke-width="1.2" filter="url(#card-shadow)"/>
    
    <g transform="translate(20, 26)">
      <circle cx="8" cy="0" r="5" fill="#38BDF8"/>
      <text x="20" y="4" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="11" fill="#38BDF8" letter-spacing="1">TECH STACK:</text>
    </g>

    <!-- Tool Tags -->
    <g transform="translate(130, 14)">
      <!-- Linux -->
      <rect width="68" height="24" rx="6" fill="#1E293B"/>
      <text x="34" y="16" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#FFFFFF">Linux CLI</text>

      <!-- Python -->
      <rect x="76" width="65" height="24" rx="6" fill="#1E293B"/>
      <text x="108.5" y="16" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#60A5FA">Python</text>

      <!-- R Bioc -->
      <rect x="149" width="90" height="24" rx="6" fill="#1E293B"/>
      <text x="194" y="16" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#38BDF8">Bioconductor</text>

      <!-- STAR -->
      <rect x="247" width="58" height="24" rx="6" fill="#1E293B"/>
      <text x="276" y="16" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#F87171">STAR</text>

      <!-- DESeq2 -->
      <rect x="313" width="70" height="24" rx="6" fill="#1E293B"/>
      <text x="348" y="16" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#34D399">DESeq2</text>

      <!-- Seurat v5 -->
      <rect x="391" width="80" height="24" rx="6" fill="#1E293B"/>
      <text x="431" y="16" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#F472B6">Seurat v5</text>

      <!-- Scanpy -->
      <rect x="479" width="68" height="24" rx="6" fill="#1E293B"/>
      <text x="513" y="16" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#FBBF24">Scanpy</text>

      <!-- 10x Visium -->
      <rect x="555" width="95" height="24" rx="6" fill="#1E293B"/>
      <text x="602.5" y="16" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#A78BFA">10x Visium HD</text>

      <!-- PyTorch -->
      <rect x="658" width="70" height="24" rx="6" fill="#1E293B"/>
      <text x="693" y="16" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#FB923C">PyTorch</text>

      <!-- Git / Docker -->
      <rect x="736" width="105" height="24" rx="6" fill="#1E293B"/>
      <text x="788.5" y="16" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.5" fill="#93C5FD">Git &amp; Conda HPC</text>
    </g>
  </g>

  <!-- ================= 5. RESEARCH BENEFITS PILLS (y=678) ================= -->
  <g transform="translate(40, 678)">
    <rect width="1000" height="56" rx="16" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2" filter="url(#card-shadow)"/>

    <!-- Benefit 1 -->
    <g transform="translate(25, 28)">
      <circle cx="6" cy="0" r="5" fill="#2563EB"/>
      <text x="18" y="4" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" fill="#0F172A">Hands-on Code Training</text>
    </g>

    <!-- Benefit 2 -->
    <g transform="translate(225, 28)">
      <circle cx="6" cy="0" r="5" fill="#0D9488"/>
      <text x="18" y="4" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" fill="#0F172A">Real GEO/TCGA Projects</text>
    </g>

    <!-- Benefit 3 -->
    <g transform="translate(435, 28)">
      <circle cx="6" cy="0" r="5" fill="#EA580C"/>
      <text x="18" y="4" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" fill="#0F172A">Publication-Ready Code</text>
    </g>

    <!-- Benefit 4 -->
    <g transform="translate(640, 28)">
      <circle cx="6" cy="0" r="5" fill="#10B981"/>
      <text x="18" y="4" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" fill="#0F172A">1-on-1 TA Debugging</text>
    </g>

    <!-- Pill Tag Right -->
    <g transform="translate(845, 10)">
      <rect width="140" height="36" rx="18" fill="#1E3A8A"/>
      <text x="70" y="23" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="11" fill="#FFFFFF">PhD-Ready Omics</text>
    </g>
  </g>

  <!-- ================= 6. HIGH-CONVERTING ADMISSIONS BANNER (y=750) ================= -->
  <g transform="translate(40, 750)" filter="url(#glow-badge)">
    <rect width="1000" height="180" rx="24" fill="url(#cta-grad)"/>

    <!-- Left Emblem & Text -->
    <g transform="translate(35, 38)">
      <rect width="84" height="84" rx="20" fill="#FFFFFF" fill-opacity="0.18" stroke="#FFFFFF" stroke-width="2"/>
      <!-- Rocket Graphic -->
      <path d="M42 20 C42 20 54 28 54 44 L46 54 L38 54 L30 44 C30 28 42 20 42 20 Z" fill="#FFFFFF"/>
      <circle cx="42" cy="36" r="4" fill="#1E3A8A"/>
      <polygon points="30,48 24,56 34,54" fill="#FDE047"/>
      <polygon points="54,48 60,56 50,54" fill="#FDE047"/>
      <polygon points="38,54 42,66 46,54" fill="#EF4444"/>

      <g transform="translate(108, 16)">
        <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="28" fill="#FFFFFF" letter-spacing="-0.5">ADMISSIONS OPEN FOR BMP COHORT 03!</text>
        <text x="0" y="32" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="15.5" fill="#BAE6FD">Program Period: October 2 &#8211; December 2026 &#8226; 12-Week Intensive Mentorship</text>
        <text x="0" y="58" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="13.5" fill="#E0F2FE">Master Bulk RNA-Seq, Multi-Cohort Meta, Single-Cell Seurat v5, Spatial Omics &amp; Bio-AI</text>
      </g>
    </g>

    <!-- Right Highlight Box -->
    <g transform="translate(735, 38)">
      <rect width="225" height="96" rx="16" fill="#0F172A" fill-opacity="0.6" stroke="#FFFFFF" stroke-width="1.5" stroke-opacity="0.3"/>
      
      <g transform="translate(20, 32)">
        <circle cx="8" cy="0" r="5" fill="#38BDF8"/>
        <text x="20" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="13" fill="#FFFFFF">30 Seats Limit</text>
        <text x="20" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="10.5" fill="#93C5FD">Personalized Mentorship</text>
      </g>

      <g transform="translate(20, 72)">
        <circle cx="8" cy="0" r="5" fill="#FDE047"/>
        <text x="20" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="13" fill="#FDE047">Live Code Sessions</text>
        <text x="20" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="10.5" fill="#FEF08A">Oct 2, 2026 Kickoff</text>
      </g>
    </g>
  </g>

  <!-- ================= 7. FOOTER BRANDING & LINK (y=950) ================= -->
  <g transform="translate(40, 950)">
    <!-- DeepBio Brand Left -->
    <g transform="translate(20, 25)">
      <!-- Emblem -->
      <rect width="46" height="46" rx="12" fill="#1E3A8A"/>
      <path d="M23 12 L10 19 L23 26 L36 19 L23 12Z" stroke="#FFFFFF" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
      <path d="M14 21 V29 C14 33 18.5 35 23 35 C27.5 35 32 33 32 29 V21" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round" fill="none"/>
      
      <text x="58" y="26" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="26" fill="#0F172A">DeepBio <tspan fill="#0284C7">Academy</tspan></text>
      <text x="58" y="44" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="11.5" fill="#64748B">Empowering the next generation of computational biologists &amp; researchers.</text>
    </g>

    <!-- Center Action Link Button -->
    <g transform="translate(560, 20)">
      <rect width="400" height="56" rx="28" fill="#1E293B" stroke="#2563EB" stroke-width="2" filter="url(#badge-shadow)"/>
      <text x="200" y="24" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#94A3B8" letter-spacing="1">LEARN MORE &amp; APPLY ONLINE</text>
      <text x="200" y="44" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="18" fill="#FFFFFF">deepbioacademy.com/programs/bmp</text>
    </g>
  </g>

  <!-- Bottom Accent Strip -->
  <rect y="1074" width="1080" height="6" fill="#2563EB"/>
</svg>`;
}

async function run() {
  console.log("Generating Ultra-Clarity 600 DPI BMP Cohort 03 Roadmap Infographic...");

  const svgCode = generateUltraRoadmapSVG();
  fs.writeFileSync(svgOutPath, svgCode, "utf-8");
  console.log(`Saved SVG: ${svgOutPath}`);

  // Render to 600 DPI Ultra-HD PNG (2160x2160)
  await sharp(Buffer.from(svgCode), { density: 600 })
    .resize(2160, 2160, { fit: "contain", kernel: "lanczos3" })
    .png({ quality: 100, compressionLevel: 6 })
    .toFile(pngOutPath);

  const stats = fs.statSync(pngOutPath);
  console.log(`Rendered Ultra-Clarity 600 DPI PNG: ${pngOutPath} (${Math.round(stats.size / 1024)} KB)`);
}

run();
