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

// Vector mini-illustrations for each stage
const vectorIcons = {
  "01": (col) => `
    <!-- Linux Terminal Prompt -->
    <rect x="10" y="10" width="40" height="30" rx="4" fill="#1E293B"/>
    <text x="14" y="24" font-family="monospace" font-weight="900" font-size="11" fill="${col}">&gt;_</text>
    <line x1="28" y1="24" x2="38" y2="24" stroke="#38BDF8" stroke-width="2"/>
    <rect x="14" y="29" width="30" height="4" rx="2" fill="#475569"/>
  `,
  "02": (col) => `
    <!-- FASTQ Quality Bars -->
    <rect x="12" y="28" width="6" height="12" rx="2" fill="${col}"/>
    <rect x="21" y="20" width="6" height="20" rx="2" fill="${col}"/>
    <rect x="30" y="15" width="6" height="25" rx="2" fill="${col}"/>
    <rect x="39" y="12" width="6" height="28" rx="2" fill="${col}"/>
    <line x1="10" y1="18" x2="48" y2="18" stroke="#10B981" stroke-width="1.5" stroke-dasharray="2,2"/>
  `,
  "03": (col) => `
    <!-- Genome Read Alignment -->
    <line x1="10" y1="36" x2="50" y2="36" stroke="#475569" stroke-width="2.5"/>
    <rect x="12" y="16" width="14" height="4" rx="1.5" fill="${col}"/>
    <rect x="22" y="22" width="16" height="4" rx="1.5" fill="${col}"/>
    <rect x="34" y="28" width="14" height="4" rx="1.5" fill="${col}"/>
  `,
  "04": (col) => `
    <!-- Heatmap Grid -->
    <rect x="12" y="12" width="10" height="10" rx="1" fill="#EF4444"/>
    <rect x="25" y="12" width="10" height="10" rx="1" fill="#3B82F6"/>
    <rect x="38" y="12" width="10" height="10" rx="1" fill="#10B981"/>
    <rect x="12" y="25" width="10" height="10" rx="1" fill="#3B82F6"/>
    <rect x="25" y="25" width="10" height="10" rx="1" fill="#EF4444"/>
    <rect x="38" y="25" width="10" height="10" rx="1" fill="#F59E0B"/>
  `,
  "05": (col) => `
    <!-- Volcano Scatter Plot -->
    <line x1="12" y1="38" x2="48" y2="38" stroke="#64748B" stroke-width="1.5"/>
    <line x1="30" y1="12" x2="30" y2="38" stroke="#64748B" stroke-width="1.5" stroke-dasharray="2,2"/>
    <circle cx="18" cy="18" r="3" fill="#3B82F6"/>
    <circle cx="22" cy="24" r="2.5" fill="#94A3B8"/>
    <circle cx="42" cy="16" r="3" fill="#EF4444"/>
    <circle cx="38" cy="22" r="2.5" fill="#94A3B8"/>
  `,
  "06": (col) => `
    <!-- Forest Meta Plot -->
    <line x1="30" y1="12" x2="30" y2="38" stroke="#64748B" stroke-width="1.5"/>
    <line x1="16" y1="18" x2="28" y2="18" stroke="${col}" stroke-width="2"/>
    <rect x="20" y="16" width="4" height="4" fill="${col}"/>
    <line x1="32" y1="26" x2="46" y2="26" stroke="${col}" stroke-width="2"/>
    <rect x="37" y="24" width="4" height="4" fill="${col}"/>
    <polygon points="30,32 35,35 30,38 25,35" fill="#10B981"/>
  `,
  "07": (col) => `
    <!-- Single-Cell UMAP Clusters -->
    <circle cx="20" cy="20" r="3" fill="#EC4899"/>
    <circle cx="25" cy="16" r="2.5" fill="#EC4899"/>
    <circle cx="18" cy="26" r="2" fill="#EC4899"/>
    <circle cx="38" cy="30" r="3.5" fill="#3B82F6"/>
    <circle cx="44" cy="26" r="2.5" fill="#3B82F6"/>
    <circle cx="28" cy="34" r="3" fill="#10B981"/>
  `,
  "08": (col) => `
    <!-- Spatial Tissue Hex Grid -->
    <circle cx="18" cy="18" r="4" fill="#A855F7"/>
    <circle cx="30" cy="18" r="4" fill="#3B82F6"/>
    <circle cx="42" cy="18" r="4" fill="#EC4899"/>
    <circle cx="24" cy="28" r="4" fill="#3B82F6"/>
    <circle cx="36" cy="28" r="4" fill="#A855F7"/>
  `,
  "09": (col) => `
    <!-- Neural Network Nodes -->
    <circle cx="18" cy="16" r="3" fill="${col}"/>
    <circle cx="18" cy="32" r="3" fill="${col}"/>
    <circle cx="32" cy="24" r="3.5" fill="#38BDF8"/>
    <circle cx="44" cy="24" r="3" fill="#10B981"/>
    <line x1="18" y1="16" x2="32" y2="24" stroke="#94A3B8" stroke-width="1.2"/>
    <line x1="18" y1="32" x2="32" y2="24" stroke="#94A3B8" stroke-width="1.2"/>
    <line x1="32" y1="24" x2="44" y2="24" stroke="#94A3B8" stroke-width="1.2"/>
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

function generateRoadmapSVG() {
  const stepWidth = 104;
  const startX = 38;
  const stepSpacing = 111;

  const moduleColumns = modules.map((m, idx) => {
    const x = startX + idx * stepSpacing;
    const bulletsXml = m.bullets.map((b, bIdx) => {
      return `<text x="${x + 6}" y="${475 + bIdx * 20}" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="8.8" fill="#334155">&#8226; ${xmlEscape(b)}</text>`;
    }).join("\n      ");

    // Arrow connector
    const arrow = idx < modules.length - 1 ? `
      <g transform="translate(${x + 104}, 415)">
        <path d="M0 0 L4 0 L2 -3 M4 0 L2 3" stroke="#94A3B8" stroke-width="2" stroke-linecap="round"/>
      </g>` : "";

    const vectorIconSnippet = vectorIcons[m.num](m.color);

    return `
    <!-- Column ${m.num}: ${m.title} -->
    <g>
      <!-- Step Badge -->
      <rect x="${x + 36}" y="325" width="32" height="24" rx="12" fill="${m.color}"/>
      <text x="${x + 52}" y="341" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="11" fill="#FFFFFF">${m.num}</text>

      <!-- Main Column Box -->
      <rect x="${x}" y="356" width="${stepWidth}" height="240" rx="14" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.2"/>
      
      <!-- Top Title Bar -->
      <rect x="${x}" y="356" width="${stepWidth}" height="42" rx="14" fill="${m.lightBg}"/>
      <rect x="${x}" y="386" width="${stepWidth}" height="12" fill="${m.lightBg}"/>
      <text x="${x + stepWidth / 2}" y="382" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="10" fill="${m.color}">${xmlEscape(m.title)}</text>

      <!-- Center Icon Box -->
      <g transform="translate(${x + 22}, 404)">
        <rect width="60" height="50" rx="10" fill="${m.lightBg}" stroke="${m.color}" stroke-width="1" stroke-opacity="0.3"/>
        ${vectorIconSnippet}
      </g>

      <!-- Bullets -->
      ${bulletsXml}
      ${arrow}
    </g>`;
  }).join("\n");

  return `<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bg-grad" x1="0" y1="0" x2="1080" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="50%" stop-color="#F0F7FF"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>

    <!-- Top Badge Glow -->
    <linearGradient id="blue-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>

    <!-- Dark Bar Gradient -->
    <linearGradient id="dark-ribbon" x1="0" y1="0" x2="1080" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#090D1A"/>
      <stop offset="50%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#090D1A"/>
    </linearGradient>

    <!-- CTA Box Gradient -->
    <linearGradient id="cta-grad" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="50%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#0D9488"/>
    </linearGradient>
  </defs>

  <!-- Clean Canvas Background -->
  <rect width="1080" height="1080" fill="url(#bg-grad)"/>

  <!-- Top Ambient Blue Lighting Glow -->
  <circle cx="120" cy="90" r="250" fill="#38BDF8" opacity="0.15"/>
  <circle cx="950" cy="110" r="250" fill="#4F46E5" opacity="0.12"/>

  <!-- ================= 1. HEADER SECTION (y=35 to 200) ================= -->
  <!-- Top DNA Art Decoration Left -->
  <g transform="translate(45, 30)">
    <circle cx="18" cy="18" r="8" fill="#2563EB" opacity="0.8"/>
    <circle cx="45" cy="40" r="11" fill="#38BDF8" opacity="0.9"/>
    <circle cx="75" cy="18" r="6" fill="#10B981" opacity="0.8"/>
    <circle cx="30" cy="72" r="9" fill="#6366F1" opacity="0.7"/>
    <path d="M18 18 L45 40 L75 18 M45 40 L30 72" stroke="#94A3B8" stroke-width="2" stroke-opacity="0.4"/>
  </g>

  <!-- Main Titles Center -->
  <g transform="translate(500, 42)">
    <text text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="26" fill="#0F172A" letter-spacing="1.5">DEEPBIO ACADEMY</text>
    <text y="46" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="44" fill="#1E3A8A" letter-spacing="-0.5">Bioinformatics Mentorship</text>
    <text y="92" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="30" fill="#0284C7">with AI &amp; High-Throughput Omics</text>
    
    <!-- Subtitle Line -->
    <path d="M-180 112 L180 112" stroke="#CBD5E1" stroke-width="2"/>
    <circle cx="0" cy="112" r="4" fill="#2563EB"/>
    <text y="132" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="15" fill="#475569">From Raw Sequences to High-Impact Discoveries &#8226; BMP Cohort 03</text>

    <!-- Program Pill -->
    <rect x="-310" y="146" width="620" height="32" rx="16" fill="#1E293B"/>
    <text y="167" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" fill="#38BDF8" letter-spacing="0.8">A COMPLETE 12-WEEK RESEARCH MENTORSHIP IN TRANSCRIPTOMICS &amp; BIO-AI</text>
  </g>

  <!-- Top-Right Cohort Badge (Circular High-Impact Badge) -->
  <g transform="translate(970, 95)">
    <circle cx="0" cy="0" r="62" fill="url(#blue-grad)" stroke="#FFFFFF" stroke-width="3.5"/>
    <circle cx="0" cy="0" r="56" fill="none" stroke="#60A5FA" stroke-width="1.2" stroke-dasharray="3,3"/>
    <text y="-22" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="10.5" fill="#BAE6FD" letter-spacing="1">COHORT 03</text>
    <text y="-1" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="17" fill="#FFFFFF">APPLY NOW</text>
    <text y="17" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="12.5" fill="#FDE047">STARTS OCT 2</text>
    <text y="32" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="9.5" fill="#E2E8F0">30 Seats Limit</text>
  </g>

  <!-- ================= 2. PROGRAM METRICS BAR (y=245) ================= -->
  <g transform="translate(40, 240)">
    <rect width="1000" height="64" rx="18" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>

    <!-- Metric 1: 3 Months -->
    <g transform="translate(35, 32)">
      <!-- Calendar Icon -->
      <rect x="0" y="-12" width="22" height="20" rx="3" fill="#2563EB"/>
      <rect x="3" y="-5" width="16" height="10" fill="#FFFFFF"/>
      <text x="30" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13.5" fill="#0F172A">3 Months</text>
      <text x="30" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="10.5" fill="#64748B">12-Week Intensive</text>
    </g>

    <!-- Metric 2: 25 Live Sessions -->
    <g transform="translate(175, 32)">
      <circle cx="10" cy="-3" r="8" fill="#0D9488"/>
      <text x="26" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13.5" fill="#0F172A">25 Sessions</text>
      <text x="26" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="10.5" fill="#64748B">Live Interactive</text>
    </g>

    <!-- Metric 3: 50+ Hours -->
    <g transform="translate(320, 32)">
      <circle cx="10" cy="-3" r="8" fill="#EA580C"/>
      <text x="26" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13.5" fill="#0F172A">50+ Hours</text>
      <text x="26" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="10.5" fill="#64748B">Hands-on Training</text>
    </g>

    <!-- Metric 4: 20+ Tools -->
    <g transform="translate(465, 32)">
      <rect x="0" y="-10" width="20" height="15" rx="2" fill="#4F46E5"/>
      <text x="28" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13.5" fill="#0F172A">20+ Tools</text>
      <text x="28" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="10.5" fill="#64748B">R, Python &amp; Linux</text>
    </g>

    <!-- Metric 5: HPC & Cloud -->
    <g transform="translate(610, 32)">
      <path d="M2 -2 C2 -8 8 -10 12 -8 C15 -11 20 -8 20 -3 C23 -3 24 2 20 5 L4 5 C0 5 0 -2 2 -2 Z" fill="#0284C7"/>
      <text x="28" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13.5" fill="#0F172A">HPC &amp; Cloud</text>
      <text x="28" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="10.5" fill="#64748B">Cluster Provided</text>
    </g>

    <!-- Metric 6: Research Project -->
    <g transform="translate(755, 32)">
      <path d="M4 -10 L16 -10 L16 -5 L20 4 C21 7 19 9 16 9 L4 9 C1 9 -1 7 0 4 L4 -5 Z" fill="#E11D48"/>
      <text x="28" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13.5" fill="#0F172A">Capstone</text>
      <text x="28" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="10.5" fill="#64748B">Real GEO/TCGA</text>
    </g>

    <!-- Metric 7: Certificate -->
    <g transform="translate(880, 32)">
      <rect x="0" y="-10" width="18" height="18" rx="2" fill="#16A34A"/>
      <text x="26" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13.5" fill="#0F172A">Certificate</text>
      <text x="26" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="10.5" fill="#64748B">Verified Credential</text>
    </g>
  </g>

  <!-- ================= 3. 9-STEP PIPELINE ROADMAP (y=320 to 600) ================= -->
  ${moduleColumns}

  <!-- ================= 4. TOOLS & TECHNOLOGIES DARK RIBBON (y=612) ================= -->
  <g transform="translate(40, 612)">
    <rect width="1000" height="52" rx="14" fill="url(#dark-ribbon)" stroke="#1E293B" stroke-width="1.2"/>
    
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
    <rect width="1000" height="56" rx="16" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.2"/>

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
  <g transform="translate(40, 750)">
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
        <text x="0" y="58" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="13.5" fill="#E0F2FE">Master Bulk RNA-Seq, Multi-Cohort Meta, Single-Cell Seurat v5, Spatial Omics &amp; Bio-AI</text>
      </g>
    </g>

    <!-- Right Highlight Box -->
    <g transform="translate(735, 38)">
      <rect width="225" height="96" rx="16" fill="#0F172A" fill-opacity="0.45" stroke="#FFFFFF" stroke-width="1.5" stroke-opacity="0.3"/>
      
      <g transform="translate(20, 32)">
        <circle cx="8" cy="0" r="5" fill="#38BDF8"/>
        <text x="20" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="13" fill="#FFFFFF">30 Seats Limit</text>
        <text x="20" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="10.5" fill="#93C5FD">Personalized Mentorship</text>
      </g>

      <g transform="translate(20, 72)">
        <circle cx="8" cy="0" r="5" fill="#FDE047"/>
        <text x="20" y="-1" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="13" fill="#FDE047">Live Code Sessions</text>
        <text x="20" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="10.5" fill="#FEF08A">Oct 2, 2026 Kickoff</text>
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
      <text x="58" y="44" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="11" fill="#64748B">Empowering the next generation of computational biologists &amp; researchers.</text>
    </g>

    <!-- Center Action Link Button -->
    <g transform="translate(560, 20)">
      <rect width="400" height="56" rx="28" fill="#1E293B" stroke="#2563EB" stroke-width="2"/>
      <text x="200" y="24" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#94A3B8" letter-spacing="1">LEARN MORE &amp; APPLY ONLINE</text>
      <text x="200" y="44" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="18" fill="#FFFFFF">deepbioacademy.com/programs/bmp</text>
    </g>
  </g>

  <!-- Bottom Accent Strip -->
  <rect y="1074" width="1080" height="6" fill="#2563EB"/>
</svg>`;
}

async function run() {
  console.log("Generating refined BMP Cohort 03 9-Stage Roadmap Infographic Ad...");

  const svgCode = generateRoadmapSVG();
  fs.writeFileSync(svgOutPath, svgCode, "utf-8");
  console.log(`Saved SVG: ${svgOutPath}`);

  // Render to 600 DPI Ultra-HD PNG (2160x2160)
  await sharp(Buffer.from(svgCode), { density: 600 })
    .resize(2160, 2160, { fit: "contain", kernel: "lanczos3" })
    .png({ quality: 100, compressionLevel: 6 })
    .toFile(pngOutPath);

  const stats = fs.statSync(pngOutPath);
  console.log(`Rendered 600 DPI Ultra-HD PNG: ${pngOutPath} (${Math.round(stats.size / 1024)} KB)`);
}

run();
