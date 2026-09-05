import fs from "fs";
import path from "path";
import sharp from "sharp";

const svgOutPath = path.resolve("public/bmp_ads/modules/svg/bmp-c03-5-modules-master-ad.svg");
const pngOutPath = path.resolve("public/bmp_ads/modules/png/bmp-c03-5-modules-master-ad.png");

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

function generateMasterCleanAdSVG() {
  return `<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Deep Cosmic Radial Background -->
    <radialGradient id="bg-spotlight" cx="50%" cy="18%" r="85%" fx="50%" fy="12%">
      <stop offset="0%" stop-color="#142646"/>
      <stop offset="40%" stop-color="#0A101E"/>
      <stop offset="100%" stop-color="#03060C"/>
    </radialGradient>

    <!-- Glowing Headline Gradient -->
    <linearGradient id="headline-grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="50%" stop-color="#818CF8"/>
      <stop offset="100%" stop-color="#C084FC"/>
    </linearGradient>

    <!-- Top Badge Gradient -->
    <linearGradient id="top-badge-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="50%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>

    <!-- Primary CTA Button Gradient -->
    <linearGradient id="btn-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>

    <!-- Card Background Gradient -->
    <linearGradient id="card-surface" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#111B2E"/>
      <stop offset="100%" stop-color="#090E1A"/>
    </linearGradient>

    <!-- Shadow & Glow Filters -->
    <filter id="card-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.5"/>
    </filter>

    <filter id="badge-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#2563EB" flood-opacity="0.45"/>
    </filter>

    <filter id="btn-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="14" flood-color="#2563EB" flood-opacity="0.55"/>
    </filter>

    <filter id="soft-glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="60"/>
    </filter>
  </defs>

  <!-- Deep Canvas Background -->
  <rect width="1080" height="1080" fill="url(#bg-spotlight)"/>

  <!-- High-End Mesh Ambient Light Spotlights -->
  <circle cx="540" cy="160" r="350" fill="#0284C7" opacity="0.14" filter="url(#soft-glow)"/>
  <circle cx="120" cy="500" r="280" fill="#9333EA" opacity="0.12" filter="url(#soft-glow)"/>
  <circle cx="950" cy="650" r="280" fill="#2563EB" opacity="0.14" filter="url(#soft-glow)"/>

  <!-- Tech Dot Grid Background -->
  <g opacity="0.04">
    <pattern id="dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fill="#FFFFFF"/>
    </pattern>
    <rect width="1080" height="1080" fill="url(#dot-grid)"/>
  </g>

  <!-- Top Blue Accent Line -->
  <rect width="1080" height="4" fill="#38BDF8"/>

  <!-- ================= 1. HEADER (y=40) ================= -->
  <g transform="translate(60, 40)">
    <!-- DeepBio Emblem -->
    <g transform="translate(0, 0)">
      <rect width="48" height="48" rx="14" fill="#0F1E36" stroke="#2563EB" stroke-width="1.5"/>
      <path d="M24 13 L11 20 L24 27 L37 20 L24 13Z" stroke="#38BDF8" stroke-width="2.2" stroke-linejoin="round" fill="none"/>
      <path d="M15 22.5 V30 C15 33.5 19 36 24 36 C29 36 33 33.5 33 30 V22.5" stroke="#60A5FA" stroke-width="2" stroke-linejoin="round" fill="none"/>
    </g>
    
    <text x="64" y="27" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="24" fill="#FFFFFF" letter-spacing="-0.3">DeepBio <tspan fill="#38BDF8">Academy</tspan></text>
    <text x="64" y="44" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#94A3B8" letter-spacing="1.5">BIOINFORMATICS MENTORSHIP PROGRAM</text>

    <!-- Top Right Cohort 03 Badge -->
    <g transform="translate(620, 0)" filter="url(#badge-glow)">
      <rect width="340" height="48" rx="24" fill="url(#top-badge-grad)" stroke="#60A5FA" stroke-width="1.5"/>
      <g transform="translate(16, 12)">
        <circle cx="12" cy="12" r="10" fill="#22C55E" opacity="0.25"/>
        <circle cx="12" cy="12" r="5" fill="#4ADE80"/>
      </g>
      <g transform="translate(50, 19)">
        <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="12.5" fill="#FFFFFF" letter-spacing="0.5">BMP COHORT 03 &#8226; 5-MODULE ROADMAP</text>
        <text x="0" y="16" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="10.5" fill="#FDE047" letter-spacing="0.8">STARTS OCT 2, 2026 &#8226; 30 SEATS ONLY</text>
      </g>
    </g>
  </g>

  <!-- ================= 2. HERO HEADLINE (y=115) ================= -->
  <g transform="translate(60, 115)">
    <!-- Small Category Pill -->
    <rect width="270" height="24" rx="12" fill="#1E293B" stroke="#0284C7" stroke-width="1"/>
    <text x="135" y="16" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="10.5" fill="#38BDF8" letter-spacing="1">12-WEEK RESEARCH CURRICULUM</text>

    <!-- Big Headline -->
    <text y="58" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="36" fill="#FFFFFF" letter-spacing="-0.8">Master Modern Omics &amp; Bio-AI</text>
    <text y="98" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="34" fill="url(#headline-grad)" letter-spacing="-0.8">From Computational Foundations to Spatial Biology</text>
    
    <!-- Sub-hook -->
    <text y="128" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="14" fill="#94A3B8">
      A structured, hands-on journey from raw NGS reads to publishable discoveries on real GEO &amp; TCGA datasets.
    </text>
  </g>

  <!-- ================= 3. 5-MODULE CLEAN GRID (y=265) ================= -->
  <g transform="translate(60, 265)">
    
    <!-- ====== ROW 1: MODULE 1 & MODULE 2 ====== -->
    
    <!-- CARD 1: Module 1 (Left, Width: 468, Height: 155) -->
    <g transform="translate(0, 0)" filter="url(#card-shadow)">
      <rect width="468" height="155" rx="16" fill="url(#card-surface)" stroke="#1E293B" stroke-width="1.2"/>
      <rect x="0" y="18" width="4.5" height="118" rx="2.2" fill="#0284C7"/>

      <!-- Header: Number & Title -->
      <g transform="translate(20, 20)">
        <rect width="40" height="40" rx="10" fill="#082F49" stroke="#0284C7" stroke-width="1.2"/>
        <text x="20" y="26" text-anchor="middle" font-family="Arial" font-weight="900" font-size="16" fill="#38BDF8">01</text>
        
        <text x="52" y="18" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="16" fill="#FFFFFF">Computational Foundation</text>
        <text x="52" y="34" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11.5" fill="#38BDF8">Linux, Bash, Python &amp; R for Omics</text>
      </g>

      <!-- Bullet Points -->
      <g transform="translate(24, 76)">
        <text y="0" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="12" fill="#CBD5E1">&#8226; HPC cluster setup, Conda environments &amp; Git</text>
        <text y="20" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="12" fill="#CBD5E1">&#8226; Bash automation &amp; NGS formats (FASTQ/BAM)</text>
        <text y="40" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="12" fill="#CBD5E1">&#8226; BioPython parsing &amp; R Bioconductor models</text>
      </g>

      <!-- Bottom Tag -->
      <g transform="translate(340, 122)">
        <rect width="112" height="20" rx="5" fill="#0F172A" stroke="#1E293B" stroke-width="0.8"/>
        <text x="56" y="13.5" text-anchor="middle" font-family="Arial" font-weight="800" font-size="9.5" fill="#38BDF8">Linux &#8226; Python &#8226; R</text>
      </g>
    </g>

    <!-- CARD 2: Module 2 (Right, Width: 468, Height: 155) -->
    <g transform="translate(492, 0)" filter="url(#card-shadow)">
      <rect width="468" height="155" rx="16" fill="url(#card-surface)" stroke="#1E293B" stroke-width="1.2"/>
      <rect x="0" y="18" width="4.5" height="118" rx="2.2" fill="#2563EB"/>

      <!-- Header: Number & Title -->
      <g transform="translate(20, 20)">
        <rect width="40" height="40" rx="10" fill="#1E3A8A" stroke="#2563EB" stroke-width="1.2"/>
        <text x="20" y="26" text-anchor="middle" font-family="Arial" font-weight="900" font-size="16" fill="#60A5FA">02</text>
        
        <text x="52" y="18" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="16" fill="#FFFFFF">Bulk RNA-seq Analysis</text>
        <text x="52" y="34" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11.5" fill="#60A5FA">Reads &#8594; Counts &#8594; DEGs &#8594; Meta-Analysis</text>
      </g>

      <!-- Bullet Points -->
      <g transform="translate(24, 76)">
        <text y="0" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="12" fill="#CBD5E1">&#8226; FASTQ QC (fastp) &amp; STAR/Salmon quantification</text>
        <text y="20" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="12" fill="#CBD5E1">&#8226; DESeq2 differential expression &amp; Volcano plots</text>
        <text y="40" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="12" fill="#CBD5E1">&#8226; GSEA enrichment &amp; Multi-cohort REM meta</text>
      </g>

      <!-- Bottom Tag -->
      <g transform="translate(325, 122)">
        <rect width="127" height="20" rx="5" fill="#0F172A" stroke="#1E293B" stroke-width="0.8"/>
        <text x="63.5" y="13.5" text-anchor="middle" font-family="Arial" font-weight="800" font-size="9.5" fill="#60A5FA">DESeq2 &#8226; GSEA &#8226; REM</text>
      </g>
    </g>

    <!-- ====== ROW 2: MODULE 3 & MODULE 4 ====== -->

    <!-- CARD 3: Module 3 (Left, Width: 468, Height: 155) -->
    <g transform="translate(0, 172)" filter="url(#card-shadow)">
      <rect width="468" height="155" rx="16" fill="url(#card-surface)" stroke="#1E293B" stroke-width="1.2"/>
      <rect x="0" y="18" width="4.5" height="118" rx="2.2" fill="#E11D48"/>

      <!-- Header: Number & Title -->
      <g transform="translate(20, 20)">
        <rect width="40" height="40" rx="10" fill="#4C0519" stroke="#E11D48" stroke-width="1.2"/>
        <text x="20" y="26" text-anchor="middle" font-family="Arial" font-weight="900" font-size="16" fill="#FB7185">03</text>
        
        <text x="52" y="18" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="16" fill="#FFFFFF">Single-Cell RNA-seq</text>
        <text x="52" y="34" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11.5" fill="#FB7185">From 10x Chromium to UMAP &amp; Cell Typing</text>
      </g>

      <!-- Bullet Points -->
      <g transform="translate(24, 76)">
        <text y="0" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="12" fill="#CBD5E1">&#8226; 10x Cell Ranger feature-barcode count matrix</text>
        <text y="20" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="12" fill="#CBD5E1">&#8226; QC filtering (percent.mt) &amp; DoubletFinder</text>
        <text y="40" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="12" fill="#CBD5E1">&#8226; Harmony integration, Seurat v5 &amp; SingleR</text>
      </g>

      <!-- Bottom Tag -->
      <g transform="translate(325, 122)">
        <rect width="127" height="20" rx="5" fill="#0F172A" stroke="#1E293B" stroke-width="0.8"/>
        <text x="63.5" y="13.5" text-anchor="middle" font-family="Arial" font-weight="800" font-size="9.5" fill="#FB7185">Cell Ranger &#8226; Seurat v5</text>
      </g>
    </g>

    <!-- CARD 4: Module 4 (Right, Width: 468, Height: 155) -->
    <g transform="translate(492, 172)" filter="url(#card-shadow)">
      <rect width="468" height="155" rx="16" fill="url(#card-surface)" stroke="#1E293B" stroke-width="1.2"/>
      <rect x="0" y="18" width="4.5" height="118" rx="2.2" fill="#9333EA"/>

      <!-- Header: Number & Title -->
      <g transform="translate(20, 20)">
        <rect width="40" height="40" rx="10" fill="#3B0764" stroke="#9333EA" stroke-width="1.2"/>
        <text x="20" y="26" text-anchor="middle" font-family="Arial" font-weight="900" font-size="16" fill="#C084FC">04</text>
        
        <text x="52" y="18" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="16" fill="#FFFFFF">Spatial Transcriptomics</text>
        <text x="52" y="34" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11.5" fill="#C084FC">Visium HD &amp; Xenium Subcellular Omics</text>
      </g>

      <!-- Bullet Points -->
      <g transform="translate(24, 76)">
        <text y="0" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="12" fill="#CBD5E1">&#8226; Multi-scale 2µm/8µm/16µm binned grid models</text>
        <text y="20" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="12" fill="#CBD5E1">&#8226; SpatialFeatureExperiment &amp; in situ transcript QC</text>
        <text y="40" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="12" fill="#CBD5E1">&#8226; Tissue domain clustering &amp; SpatialDE niches</text>
      </g>

      <!-- Bottom Tag -->
      <g transform="translate(325, 122)">
        <rect width="127" height="20" rx="5" fill="#0F172A" stroke="#1E293B" stroke-width="0.8"/>
        <text x="63.5" y="13.5" text-anchor="middle" font-family="Arial" font-weight="800" font-size="9.5" fill="#C084FC">Visium HD &#8226; Xenium</text>
      </g>
    </g>

    <!-- ====== ROW 3: MODULE 5 (FULL WIDTH HERO CARD) ====== -->

    <!-- CARD 5: Module 5 (Width: 960, Height: 125) -->
    <g transform="translate(0, 344)" filter="url(#card-shadow)">
      <rect width="960" height="125" rx="16" fill="url(#card-surface)" stroke="#1E293B" stroke-width="1.2"/>
      <rect x="0" y="16" width="4.5" height="92" rx="2.2" fill="#10B981"/>

      <!-- Header: Number & Title -->
      <g transform="translate(20, 18)">
        <rect width="40" height="40" rx="10" fill="#064E3B" stroke="#10B981" stroke-width="1.2"/>
        <text x="20" y="26" text-anchor="middle" font-family="Arial" font-weight="900" font-size="16" fill="#34D399">05</text>
        
        <text x="52" y="18" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="16.5" fill="#FFFFFF">AI for Computational Biology &amp; Bioinformatics</text>
        <text x="52" y="34" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="12" fill="#34D399">Machine Learning, PyTorch Deep Learning &amp; Agentic Bio-AI Pipelines</text>
      </g>

      <!-- Content 2 Columns -->
      <g transform="translate(24, 70)">
        <text y="0" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="11.5" fill="#CBD5E1">&#8226; FAIR biomedical data standards &amp; data-centric ML</text>
        <text y="18" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="11.5" fill="#CBD5E1">&#8226; Random Forest, XGBoost &amp; SHAP clinical biomarkers</text>

        <text x="475" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="11.5" fill="#CBD5E1">&#8226; PyTorch deep neural networks for genomic sequences</text>
        <text x="475" y="18" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="11.5" fill="#CBD5E1">&#8226; Agentic AI workflows &amp; autonomous LLM pipelines</text>
      </g>

      <!-- Bottom Tag Right -->
      <g transform="translate(795, 96)">
        <rect width="145" height="20" rx="5" fill="#0F172A" stroke="#1E293B" stroke-width="0.8"/>
        <text x="72.5" y="13.5" text-anchor="middle" font-family="Arial" font-weight="800" font-size="9.5" fill="#34D399">PyTorch &#8226; SHAP &#8226; Bio-AI</text>
      </g>
    </g>

  </g>

  <!-- ================= 4. ADMISSIONS HIGH-CONVERTING BANNER (y=760) ================= -->
  <g transform="translate(60, 755)">
    <!-- Container -->
    <rect width="960" height="150" rx="22" fill="#0D182E" stroke="#2563EB" stroke-width="1.8" filter="url(#card-shadow)"/>
    
    <!-- Left Urgency Highlights -->
    <g transform="translate(35, 30)">
      <rect width="210" height="24" rx="12" fill="#1E293B" stroke="#38BDF8" stroke-width="0.8"/>
      <text x="105" y="16" text-anchor="middle" font-family="Arial" font-weight="800" font-size="11" fill="#38BDF8">&#9889; COHORT 03 ADMISSIONS OPEN</text>

      <text y="58" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="24" fill="#FFFFFF">12-Week Intensive Research Mentorship</text>
      <text y="82" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="14" fill="#93C5FD">
        Live Code Training &#8226; 25 Live Sessions &#8226; 1-on-1 TA Support &#8226; <tspan fill="#FDE047" font-weight="800">Only 30 Seats Limit</tspan>
      </text>
      <text y="104" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="12.5" fill="#64748B">
        Program Start Date: October 2, 2026 &#8226; Capstone Projects on Real GEO/TCGA Datasets
      </text>
    </g>

    <!-- Right Primary CTA Action Button -->
    <g transform="translate(710, 48)">
      <rect width="215" height="56" rx="28" fill="url(#btn-grad)" filter="url(#btn-glow)"/>
      <text x="107.5" y="34" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="17" fill="#FFFFFF" letter-spacing="0.5">ENROLL NOW &#8594;</text>
    </g>
  </g>

  <!-- ================= 5. FOOTER LINK (y=945) ================= -->
  <g transform="translate(540, 955)">
    <rect x="-270" y="0" width="540" height="46" rx="23" fill="#0A101D" stroke="#1E293B" stroke-width="1"/>
    <text x="0" y="29" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="17" fill="#FFFFFF" letter-spacing="0.5">deepbioacademy.com/programs/bmp</text>
    <text x="0" y="65" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="12" fill="#64748B">Empowering the next generation of computational biologists &amp; researchers.</text>
  </g>

  <!-- Bottom Accent Strip -->
  <rect y="1075" width="1080" height="5" fill="#2563EB"/>
</svg>`;
}

async function run() {
  console.log("Generating Clean 2-Column Master 5-Module Ad (600 DPI Ultra-HD)...");

  const svgCode = generateMasterCleanAdSVG();
  fs.writeFileSync(svgOutPath, svgCode, "utf-8");
  console.log(`Saved SVG: ${svgOutPath}`);

  // Render to 600 DPI Ultra-HD PNG (2160x2160)
  await sharp(Buffer.from(svgCode), { density: 600 })
    .resize(2160, 2160, { fit: "contain", kernel: "lanczos3" })
    .png({ quality: 100, compressionLevel: 6 })
    .toFile(pngOutPath);

  const stats = fs.statSync(pngOutPath);
  console.log(`Rendered Clean Master 600 DPI PNG: ${pngOutPath} (${Math.round(stats.size / 1024)} KB)`);
}

run();
