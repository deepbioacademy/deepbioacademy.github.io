import fs from "fs";
import path from "path";
import sharp from "sharp";

const svgOutPath = path.resolve("public/bmp_ads/modules/svg/bmp-module-03-single-cell-rnaseq.svg");
const pngOutPath = path.resolve("public/bmp_ads/modules/png/bmp-module-03-single-cell-rnaseq.png");

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

function wrapIntoTwoLines(text, maxChars = 52) {
  const words = text.split(" ");
  let line1 = "";
  let line2 = "";

  for (const word of words) {
    if ((line1 + " " + word).trim().length <= maxChars && line2 === "") {
      line1 = (line1 + " " + word).trim();
    } else {
      line2 = (line2 + " " + word).trim();
    }
  }

  return { line1, line2 };
}

const module3Data = {
  num: "03",
  tag: "MODULE 03 · SINGLE-CELL OMICS",
  title: "Module 3: Single-Cell RNA-seq Analysis",
  subtitleTag: "Absolute Beginners to Advanced",
  centralMessage: "“Uncover Cellular Heterogeneity: From 10x FASTQ & Cell Ranger to UMAP & Cell Typing”",
  accentColor: "#E11D48",
  topics: [
    {
      title: "1. Intro to Single-Cell RNA-Seq",
      subtitle: "Experimental & 10x Genomics Wet-Lab",
      desc: "Microfluidic droplet partitioning, biological replication, GEM generation, and dry-lab roadmap.",
      color: "#0284C7"
    },
    {
      title: "2. FASTQ to Count Matrix",
      subtitle: "Cell Ranger Pipeline & Quantification",
      desc: "Barcode / UMI demultiplexing, reference alignment, and feature-barcode quantification with cellranger.",
      color: "#2563EB"
    },
    {
      title: "3. Quality Control & Cell Filtering",
      subtitle: "Mitochondrial Cutoffs & Doublets",
      desc: "Filtering low-quality cells by nFeature_RNA, nCount_RNA, percent.mt, and DoubletFinder removal.",
      color: "#D97706"
    },
    {
      title: "4. Data Integration & Clustering",
      subtitle: "SCTransform, Harmony & UMAP",
      desc: "Normalization, high-variable gene selection, PCA, Harmony batch integration, and Leiden / Louvain clustering.",
      color: "#E11D48"
    },
    {
      title: "5. Cell Type Identification",
      subtitle: "Marker Curation, SingleR & CellTypist",
      desc: "FindAllMarkers differential signatures, canonical gene validation, and automated reference-based annotation.",
      color: "#16A34A"
    }
  ],
  techTags: [
    { name: "10x Chromium", w: 120 },
    { name: "Cell Ranger", w: 110 },
    { name: "Seurat v5", w: 95 },
    { name: "Scanpy", w: 85 },
    { name: "Harmony Integration", w: 160 },
    { name: "SingleR & CellTypist", w: 155 }
  ]
};

function generateModule3SVG() {
  const m = module3Data;

  const topicCards = m.topics.map((t, idx) => {
    // 5 cards layout: first 4 in 2x2, 5th card spans full bottom or balanced
    let x, y, width;
    if (idx < 4) {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      x = col === 0 ? 0 : 445;
      y = row * 82;
      width = 425;
    } else {
      // 5th card (Cell Type Identification) centered or full width
      x = 0;
      y = 164;
      width = 870;
    }

    const maxChars = idx === 4 ? 110 : 52;
    const { line1, line2 } = wrapIntoTwoLines(t.desc, maxChars);

    return `
      <!-- Card ${idx + 1}: ${xmlEscape(t.title)} -->
      <g transform="translate(${x}, ${y})">
        <rect width="${width}" height="74" rx="12" fill="#090E1A" stroke="#1E293B" stroke-width="1.2"/>
        <rect x="0" y="12" width="4" height="50" rx="2" fill="${t.color}"/>
        
        <!-- Header -->
        <circle cx="24" cy="23" r="10" fill="${t.color}" opacity="0.2"/>
        <circle cx="24" cy="23" r="4" fill="${t.color}"/>
        <text x="42" y="20" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13.5" fill="#FFFFFF">${xmlEscape(t.title)}</text>
        <text x="42" y="35" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#38BDF8">${xmlEscape(t.subtitle)}</text>
        
        <!-- Description -->
        <text x="42" y="52" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="10.5" fill="#94A3B8">${xmlEscape(line1)}</text>
        ${line2 ? `<text x="42" y="65" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="10.5" fill="#94A3B8">${xmlEscape(line2)}</text>` : ""}
      </g>
    `;
  }).join("\n");

  let currentX = 0;
  const techBadges = m.techTags.map((tag) => {
    const snippet = `
      <g transform="translate(${currentX}, 0)">
        <rect width="${tag.w}" height="28" rx="8" fill="#1E293B" stroke="#334155" stroke-width="1"/>
        <text x="${tag.w / 2}" y="18" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#E2E8F0">${xmlEscape(tag.name)}</text>
      </g>
    `;
    currentX += tag.w + 10;
    return snippet;
  }).join("\n");

  return `<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bg-grad-mod3" x1="0" y1="0" x2="1080" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#090D1A"/>
      <stop offset="50%" stop-color="#140D1B"/>
      <stop offset="100%" stop-color="#040711"/>
    </linearGradient>

    <!-- Glass Card Rim -->
    <linearGradient id="card-rim-mod3" x1="0" y1="0" x2="960" y2="820" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F43F5E" stop-opacity="0.45"/>
      <stop offset="50%" stop-color="#38BDF8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.06"/>
    </linearGradient>

    <!-- Ambient Glow Filter -->
    <filter id="ambient-glow-mod3" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="80"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="1080" height="1080" fill="url(#bg-grad-mod3)"/>

  <!-- High-End Mesh Ambient Light Spotlights -->
  <circle cx="880" cy="180" r="320" fill="#E11D48" opacity="0.2" filter="url(#ambient-glow-mod3)"/>
  <circle cx="150" cy="850" r="300" fill="#2563EB" opacity="0.15" filter="url(#ambient-glow-mod3)"/>

  <!-- Top Accent Bar -->
  <rect width="1080" height="5" fill="#E11D48"/>

  <!-- ================= 1. HEADER (y=42) ================= -->
  <g transform="translate(60, 42)">
    <!-- DeepBio Emblem -->
    <rect width="44" height="44" rx="12" fill="#E11D48"/>
    <path d="M22 12 L10 18 L22 24 L34 18 L22 12Z" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round" fill="none"/>
    <path d="M14 20 V27 C14 30 17.5 32 22 32 C26.5 32 30 30 30 27 V20" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" fill="none"/>
    
    <text x="56" y="24" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">DeepBio <tspan fill="#38BDF8">Academy</tspan></text>
    <text x="56" y="40" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#94A3B8" letter-spacing="1.5">BIOINFORMATICS MENTORSHIP PROGRAM (BMP-C03)</text>

    <!-- Top Right Module Badge -->
    <g transform="translate(630, 0)">
      <rect width="330" height="44" rx="22" fill="#1E293B" stroke="#334155" stroke-width="1.2"/>
      <circle cx="24" cy="22" r="6" fill="#E11D48"/>
      <text x="175" y="27" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="11.5" fill="#F1F5F9">MODULE 03 · SINGLE-CELL OMICS</text>
    </g>
  </g>

  <!-- ================= 2. MAIN HERO SPOTLIGHT CARD (y=110) ================= -->
  <g transform="translate(60, 110)">
    <!-- Outer Glass Card Shell -->
    <rect width="960" height="805" rx="28" fill="url(#card-rim-mod3)"/>
    <rect x="1.5" y="1.5" width="957" height="802" rx="26.5" fill="#0B1222" fill-opacity="0.98"/>

    <!-- A. Module Title & Central Hook Message (y=28) -->
    <g transform="translate(45, 28)">
      <text x="0" y="30" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="28" fill="#FFFFFF" letter-spacing="-0.5">${xmlEscape(m.title)} <tspan font-size="16" fill="#38BDF8" font-weight="700">(${xmlEscape(m.subtitleTag)})</tspan></text>
      
      <!-- Central Hook Quote -->
      <rect y="44" width="870" height="48" rx="14" fill="#1A1224" stroke="#E11D48" stroke-width="1.2" stroke-opacity="0.6"/>
      <text x="25" y="74" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="15.5" fill="#38BDF8">${xmlEscape(m.centralMessage)}</text>
    </g>

    <!-- B. HERO SINGLE-CELL VISUALIZATION CANVAS (y=132) -->
    <g transform="translate(45, 132)">
      <!-- Panel 1: Single-Cell Quality Control Violin Plots (Left, Width: 425) -->
      <g transform="translate(0, 0)">
        <rect width="425" height="185" rx="12" fill="#020617" stroke="#1E293B" stroke-width="1.5"/>
        <text x="212" y="22" text-anchor="middle" font-family="Arial" font-weight="900" font-size="12" fill="#38BDF8">Single-Cell QC &amp; Cell Filtering Cutoffs</text>
        
        <!-- Violin 1: nFeature_RNA (Genes) -->
        <g transform="translate(45, 38)">
          <text x="35" y="0" text-anchor="middle" font-family="Arial" font-weight="700" font-size="10" fill="#E2E8F0">nFeature_RNA</text>
          <path d="M35 15 C20 40 22 75 35 100 C48 75 50 40 35 15 Z" fill="#3B82F6" opacity="0.6" stroke="#38BDF8" stroke-width="1.2"/>
          <line x1="15" y1="30" x2="55" y2="30" stroke="#EF4444" stroke-width="1.2" stroke-dasharray="2,2"/>
          <line x1="15" y1="85" x2="55" y2="85" stroke="#EF4444" stroke-width="1.2" stroke-dasharray="2,2"/>
          <text x="35" y="115" text-anchor="middle" font-family="monospace" font-size="8.5" fill="#94A3B8">&gt; 500 &amp; &lt; 6000</text>
        </g>

        <!-- Violin 2: nCount_RNA (UMIs) -->
        <g transform="translate(170, 38)">
          <text x="35" y="0" text-anchor="middle" font-family="Arial" font-weight="700" font-size="10" fill="#E2E8F0">nCount_RNA</text>
          <path d="M35 15 C15 50 20 80 35 100 C50 80 55 50 35 15 Z" fill="#10B981" opacity="0.6" stroke="#34D399" stroke-width="1.2"/>
          <line x1="15" y1="25" x2="55" y2="25" stroke="#EF4444" stroke-width="1.2" stroke-dasharray="2,2"/>
          <text x="35" y="115" text-anchor="middle" font-family="monospace" font-size="8.5" fill="#94A3B8">&lt; 25,000 UMIs</text>
        </g>

        <!-- Violin 3: percent.mt (Mito %) -->
        <g transform="translate(295, 38)">
          <text x="35" y="0" text-anchor="middle" font-family="Arial" font-weight="700" font-size="10" fill="#E2E8F0">percent.mt</text>
          <path d="M35 15 C25 60 28 85 35 100 C42 85 45 60 35 15 Z" fill="#F43F5E" opacity="0.6" stroke="#FB7185" stroke-width="1.2"/>
          <line x1="15" y1="45" x2="55" y2="45" stroke="#EF4444" stroke-width="1.2" stroke-dasharray="2,2"/>
          <text x="35" y="115" text-anchor="middle" font-family="monospace" font-size="8.5" fill="#F43F5E">&lt; 10% Mito Cutoff</text>
        </g>

        <text x="212" y="172" text-anchor="middle" font-family="Arial" font-weight="800" font-size="10" fill="#10B981">&#10003; High-Quality Cell Selection &amp; Doublet Removal</text>
      </g>

      <!-- Panel 2: Seurat v5 2D UMAP & Automated Cell Typing (Right, Width: 425) -->
      <g transform="translate(445, 0)">
        <rect width="425" height="185" rx="12" fill="#020617" stroke="#1E293B" stroke-width="1.5"/>
        <text x="212" y="22" text-anchor="middle" font-family="Arial" font-weight="900" font-size="12" fill="#F43F5E">Seurat v5 UMAP &amp; Automated Cell Type Annotation</text>

        <!-- UMAP Cluster Canvas -->
        <g transform="translate(20, 32)">
          <!-- Cluster 1: CD8+ T-Cells (Rose) -->
          <circle cx="65" cy="45" r="4.5" fill="#F43F5E"/>
          <circle cx="55" cy="58" r="4" fill="#FB7185"/>
          <circle cx="75" cy="62" r="4.2" fill="#F43F5E"/>
          <circle cx="85" cy="50" r="3.8" fill="#FDA4AF"/>
          <circle cx="70" cy="40" r="3.5" fill="#F43F5E"/>
          <rect x="35" y="70" width="70" height="18" rx="5" fill="#1E293B" stroke="#F43F5E" stroke-width="0.8"/>
          <text x="70" y="82" text-anchor="middle" font-family="Arial" font-weight="800" font-size="9" fill="#FDA4AF">CD8+ T-Cells</text>

          <!-- Cluster 2: B-Cells (Blue) -->
          <circle cx="175" cy="40" r="4.5" fill="#3B82F6"/>
          <circle cx="190" cy="50" r="4" fill="#60A5FA"/>
          <circle cx="165" cy="55" r="3.8" fill="#93C5FD"/>
          <circle cx="205" cy="42" r="4.2" fill="#38BDF8"/>
          <rect x="150" y="65" width="60" height="18" rx="5" fill="#1E293B" stroke="#3B82F6" stroke-width="0.8"/>
          <text x="180" y="77" text-anchor="middle" font-family="Arial" font-weight="800" font-size="9" fill="#93C5FD">B-Cells</text>

          <!-- Cluster 3: Monocytes / Macrophages (Emerald) -->
          <circle cx="115" cy="105" r="4.5" fill="#10B981"/>
          <circle cx="102" cy="118" r="4" fill="#34D399"/>
          <circle cx="128" cy="115" r="3.8" fill="#6EE7B7"/>
          <circle cx="120" cy="128" r="4.2" fill="#10B981"/>
          <rect x="80" y="132" width="80" height="18" rx="5" fill="#1E293B" stroke="#10B981" stroke-width="0.8"/>
          <text x="120" y="144" text-anchor="middle" font-family="Arial" font-weight="800" font-size="9" fill="#6EE7B7">Macrophages</text>

          <!-- Cluster 4: NK Cells (Gold) -->
          <circle cx="260" cy="85" r="4.5" fill="#F59E0B"/>
          <circle cx="275" cy="95" r="4" fill="#FBBF24"/>
          <circle cx="250" cy="100" r="3.8" fill="#FDE047"/>
          <rect x="235" y="110" width="60" height="18" rx="5" fill="#1E293B" stroke="#F59E0B" stroke-width="0.8"/>
          <text x="265" y="122" text-anchor="middle" font-family="Arial" font-weight="800" font-size="9" fill="#FDE047">NK Cells</text>
        </g>

        <g transform="translate(315, 45)">
          <rect width="95" height="100" rx="8" fill="#0F172A" stroke="#334155" stroke-width="1"/>
          <text x="47.5" y="20" text-anchor="middle" font-family="Arial" font-weight="800" font-size="9" fill="#38BDF8">Annotators</text>
          <text x="47.5" y="42" text-anchor="middle" font-family="Arial" font-weight="700" font-size="9" fill="#FFFFFF">&#8226; SingleR</text>
          <text x="47.5" y="62" text-anchor="middle" font-family="Arial" font-weight="700" font-size="9" fill="#FFFFFF">&#8226; CellTypist</text>
          <text x="47.5" y="82" text-anchor="middle" font-family="Arial" font-weight="700" font-size="9" fill="#FFFFFF">&#8226; Azimuth</text>
        </g>
      </g>
    </g>

    <!-- C. 5 CORE CURRICULUM TOPICS (y=330) -->
    <g transform="translate(45, 330)">
      <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" fill="#64748B" letter-spacing="1.8">MODULE 3 COMPLETE SYLLABUS BREAKDOWN</text>
      <g transform="translate(0, 10)">
        ${topicCards}
      </g>
    </g>

    <!-- D. TECH STACK RIBBON (y=585) -->
    <g transform="translate(45, 582)">
      <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="11" fill="#64748B" letter-spacing="1.5">SINGLE-CELL SOFTWARE &amp; WORKFLOWS:</text>
      <g transform="translate(0, 10)">
        ${techBadges}
      </g>
    </g>

    <!-- E. INTEGRATED ADMISSIONS CALLOUT (y=640) -->
    <g transform="translate(45, 640)">
      <rect width="870" height="135" rx="18" fill="#1A1224" stroke="#E11D48" stroke-width="1.2" stroke-opacity="0.6"/>

      <!-- Content Left -->
      <g transform="translate(30, 36)">
        <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">Join BMP Cohort 03 &#8226; Starts October 2, 2026</text>
        <text x="0" y="26" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14.5" fill="#38BDF8">12-Week Research Mentorship &#8226; 25 Live Sessions &#8226; 30 Seats Limit</text>
        <text x="0" y="52" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="13" fill="#94A3B8">Master 10x Genomics, Cell Ranger, Seurat v5, Scanpy, Harmony Integration &amp; CellTypist</text>
      </g>

      <!-- Action Button Right -->
      <g transform="translate(660, 42)">
        <rect width="180" height="52" rx="26" fill="#E11D48"/>
        <text x="90" y="32" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="15" fill="#FFFFFF">Apply Now &#8594;</text>
      </g>
    </g>
  </g>

  <!-- ================= 3. FOOTER URL (y=945) ================= -->
  <g transform="translate(540, 950)">
    <rect x="-320" y="0" width="640" height="52" rx="26" fill="#0F172A" stroke="#1E293B" stroke-width="1.2"/>
    <text x="0" y="33" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="20" fill="#FFFFFF">deepbioacademy.com/programs/bmp</text>
    <text x="0" y="80" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="13.5" fill="#64748B">Admissions Open &#8226; Transform Your Computational Biology Career</text>
  </g>

  <!-- Bottom Accent Line -->
  <rect y="1075" width="1080" height="5" fill="#E11D48"/>
</svg>`;
}

async function run() {
  console.log("Generating Custom-Tailored Module 3: Single-Cell RNA-Seq Ad (600 DPI Ultra-HD)...");

  const svgCode = generateModule3SVG();
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
