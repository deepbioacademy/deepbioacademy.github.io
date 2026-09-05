import fs from "fs";
import path from "path";
import sharp from "sharp";

const svgOutPath = path.resolve("public/bmp_ads/modules/svg/bmp-module-02-bulk-rnaseq.svg");
const pngOutPath = path.resolve("public/bmp_ads/modules/png/bmp-module-02-bulk-rnaseq.png");

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

function wrapIntoTwoLines(text, maxChars = 50) {
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

const module2Data = {
  num: "02",
  tag: "MODULE 02 · BULK TRANSCRIPTOMICS",
  title: "Module 2: Bulk RNA-seq Analysis",
  subtitleTag: "FOR ABSOLUTE BEGINNERS & RESEARCHERS",
  centralMessage: "“Master End-to-End Transcriptomics: From FASTQ to Pathways & Meta-Analysis”",
  accentColor: "#2563EB",
  topics: [
    {
      title: "1. Intro to Bulk RNA-Seq",
      subtitle: "Experimental & Dry-Lab Design",
      desc: "Wet-lab library prep overview, biological replication, sequencing depth, and dry-lab roadmap.",
      color: "#0284C7"
    },
    {
      title: "2. FASTQ to Counts Matrix",
      subtitle: "QC, Alignment & Quantification",
      desc: "Raw read quality (fastp/MultiQC), STAR genome alignment, and Salmon transcript quantification.",
      color: "#2563EB"
    },
    {
      title: "3. Counts to DEG Analysis",
      subtitle: "DESeq2 & Statistical Modeling",
      desc: "DESeq2/EdgeR modeling, normalization (CPM, VST), dispersion estimation, and Volcano plots.",
      color: "#0D9488"
    },
    {
      title: "4. DEG to Functional Pathways",
      subtitle: "GSEA, GO & KEGG Networks",
      desc: "Over-representation analysis (ORA), Gene Set Enrichment (GSEA), and Reactome biological networks.",
      color: "#EA580C"
    },
    {
      title: "5. Batch Effects & Complex Designs",
      subtitle: "Multi-Factor & Confounder Removal",
      desc: "Controlling for technical covariates, paired designs, SVA, and ComBat batch effect correction.",
      color: "#D97706"
    },
    {
      title: "6. Bulk RNA-Seq Meta-Analysis",
      subtitle: "Multi-Cohort REM & Integration",
      desc: "Cross-cohort integration, Random Effects Model (REM), Vote-Counting, and Fisher combined p-values.",
      color: "#16A34A"
    }
  ],
  techTags: [
    { name: "FastQC & fastp", w: 120 },
    { name: "STAR Aligner", w: 110 },
    { name: "Salmon", w: 85 },
    { name: "DESeq2 / EdgeR", w: 130 },
    { name: "clusterProfiler", w: 125 },
    { name: "ComBat SVA", w: 110 },
    { name: "Meta-Analysis (REM)", w: 155 }
  ]
};

function generateModule2SVG() {
  const m = module2Data;

  const topicCards = m.topics.map((t, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = col === 0 ? 0 : 445;
    const y = row * 78;
    const { line1, line2 } = wrapIntoTwoLines(t.desc, 52);

    return `
      <!-- Card ${idx + 1}: ${xmlEscape(t.title)} -->
      <g transform="translate(${x}, ${y})">
        <rect width="425" height="70" rx="12" fill="#090E1A" stroke="#1E293B" stroke-width="1.2"/>
        <rect x="0" y="12" width="4" height="46" rx="2" fill="${t.color}"/>
        
        <!-- Header -->
        <circle cx="24" cy="22" r="10" fill="${t.color}" opacity="0.2"/>
        <circle cx="24" cy="22" r="4" fill="${t.color}"/>
        <text x="42" y="19" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13" fill="#FFFFFF">${xmlEscape(t.title)}</text>
        <text x="42" y="33" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="10.8" fill="#38BDF8">${xmlEscape(t.subtitle)}</text>
        
        <!-- Description -->
        <text x="42" y="49" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="10.2" fill="#94A3B8">${xmlEscape(line1)}</text>
        <text x="42" y="62" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="10.2" fill="#94A3B8">${xmlEscape(line2)}</text>
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
    <linearGradient id="bg-grad-mod2" x1="0" y1="0" x2="1080" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#080C17"/>
      <stop offset="50%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#030610"/>
    </linearGradient>

    <!-- Glass Card Rim -->
    <linearGradient id="card-rim-mod2" x1="0" y1="0" x2="960" y2="820" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.45"/>
      <stop offset="50%" stop-color="#2563EB" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.06"/>
    </linearGradient>

    <!-- Ambient Glow Filter -->
    <filter id="ambient-glow-mod2" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="80"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="1080" height="1080" fill="url(#bg-grad-mod2)"/>

  <!-- High-End Mesh Ambient Light Spotlights -->
  <circle cx="880" cy="180" r="320" fill="#2563EB" opacity="0.22" filter="url(#ambient-glow-mod2)"/>
  <circle cx="150" cy="850" r="300" fill="#0D9488" opacity="0.15" filter="url(#ambient-glow-mod2)"/>

  <!-- Top Accent Bar -->
  <rect width="1080" height="5" fill="#2563EB"/>

  <!-- ================= 1. HEADER (y=42) ================= -->
  <g transform="translate(60, 42)">
    <!-- DeepBio Emblem -->
    <rect width="44" height="44" rx="12" fill="#2563EB"/>
    <path d="M22 12 L10 18 L22 24 L34 18 L22 12Z" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round" fill="none"/>
    <path d="M14 20 V27 C14 30 17.5 32 22 32 C26.5 32 30 30 30 27 V20" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" fill="none"/>
    
    <text x="56" y="24" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">DeepBio <tspan fill="#38BDF8">Academy</tspan></text>
    <text x="56" y="40" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#94A3B8" letter-spacing="1.5">BIOINFORMATICS MENTORSHIP PROGRAM (BMP-C03)</text>

    <!-- Top Right Module Badge -->
    <g transform="translate(640, 0)">
      <rect width="320" height="44" rx="22" fill="#1E293B" stroke="#334155" stroke-width="1.2"/>
      <circle cx="24" cy="22" r="6" fill="#2563EB"/>
      <text x="170" y="27" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="11.5" fill="#F1F5F9">MODULE 02 · BULK RNA-SEQ</text>
    </g>
  </g>

  <!-- ================= 2. MAIN HERO SPOTLIGHT CARD (y=110) ================= -->
  <g transform="translate(60, 110)">
    <!-- Outer Glass Card Shell -->
    <rect width="960" height="805" rx="28" fill="url(#card-rim-mod2)"/>
    <rect x="1.5" y="1.5" width="957" height="802" rx="26.5" fill="#0B1222" fill-opacity="0.98"/>

    <!-- A. Module Title & Central Hook Message (y=28) -->
    <g transform="translate(45, 28)">
      <text x="0" y="30" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="28" fill="#FFFFFF" letter-spacing="-0.5">${xmlEscape(m.title)} <tspan font-size="16" fill="#38BDF8" font-weight="700">(Absolute Beginners to Advanced)</tspan></text>
      
      <!-- Central Hook Quote -->
      <rect y="44" width="870" height="48" rx="14" fill="#131F37" stroke="#2563EB" stroke-width="1.2" stroke-opacity="0.6"/>
      <text x="25" y="74" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="15.5" fill="#38BDF8">${xmlEscape(m.centralMessage)}</text>
    </g>

    <!-- B. HERO SCIENTIFIC GRAPHICS CANVAS (y=135) -->
    <g transform="translate(45, 132)">
      <!-- Panel 1: Volcano Plot & Pathways (Left, Width: 425) -->
      <g transform="translate(0, 0)">
        <rect width="425" height="185" rx="12" fill="#020617" stroke="#1E293B" stroke-width="1.5"/>
        <text x="212" y="22" text-anchor="middle" font-family="Arial" font-weight="900" font-size="12" fill="#38BDF8">DESeq2 Volcano Plot &amp; Pathway Enrichment</text>
        <line x1="212" y1="34" x2="212" y2="155" stroke="#334155" stroke-width="1" stroke-dasharray="2,2"/>
        <line x1="25" y1="105" x2="395" y2="105" stroke="#334155" stroke-width="1" stroke-dasharray="2,2"/>
        
        <!-- Downregulated Points (Blue) -->
        <circle cx="95" cy="55" r="4.5" fill="#3B82F6"/>
        <circle cx="120" cy="72" r="3.5" fill="#60A5FA"/>
        <circle cx="140" cy="90" r="3" fill="#93C5FD"/>
        <circle cx="70" cy="65" r="4" fill="#38BDF8"/>
        
        <!-- Upregulated Points (Red) -->
        <circle cx="325" cy="50" r="4.5" fill="#EF4444"/>
        <circle cx="300" cy="70" r="4" fill="#F87171"/>
        <circle cx="280" cy="88" r="3.5" fill="#FB7185"/>
        <circle cx="350" cy="60" r="4" fill="#DC2626"/>

        <!-- Central non-sig -->
        <circle cx="195" cy="130" r="2.5" fill="#64748B"/>
        <circle cx="225" cy="140" r="2.5" fill="#64748B"/>

        <!-- Labels -->
        <text x="30" y="170" font-family="Arial" font-weight="800" font-size="10.5" fill="#38BDF8">&#9660; Downregulated Genes</text>
        <text x="395" y="170" text-anchor="end" font-family="Arial" font-weight="800" font-size="10.5" fill="#EF4444">&#9650; Upregulated (GSEA / KEGG)</text>
      </g>

      <!-- Panel 2: Heatmap Matrix & Meta-Analysis REM (Right, Width: 425) -->
      <g transform="translate(445, 0)">
        <rect width="425" height="185" rx="12" fill="#020617" stroke="#1E293B" stroke-width="1.5"/>
        <text x="212" y="22" text-anchor="middle" font-family="Arial" font-weight="900" font-size="12" fill="#10B981">Heatmap Clustering &amp; Random Effects Model (REM)</text>

        <!-- Mini Heatmap Left -->
        <g transform="translate(20, 38)">
          <text x="50" y="0" text-anchor="middle" font-family="Arial" font-weight="700" font-size="9" fill="#94A3B8">Z-Score Heatmap</text>
          <rect x="0" y="8" width="22" height="18" fill="#EF4444"/>
          <rect x="25" y="8" width="22" height="18" fill="#F87171"/>
          <rect x="50" y="8" width="22" height="18" fill="#3B82F6"/>
          <rect x="75" y="8" width="22" height="18" fill="#1D4ED8"/>

          <rect x="0" y="29" width="22" height="18" fill="#F87171"/>
          <rect x="25" y="29" width="22" height="18" fill="#EF4444"/>
          <rect x="50" y="29" width="22" height="18" fill="#60A5FA"/>
          <rect x="75" y="29" width="22" height="18" fill="#3B82F6"/>

          <rect x="0" y="50" width="22" height="18" fill="#3B82F6"/>
          <rect x="25" y="50" width="22" height="18" fill="#60A5FA"/>
          <rect x="50" y="50" width="22" height="18" fill="#EF4444"/>
          <rect x="75" y="50" width="22" height="18" fill="#DC2626"/>

          <rect x="0" y="71" width="22" height="18" fill="#1D4ED8"/>
          <rect x="25" y="71" width="22" height="18" fill="#3B82F6"/>
          <rect x="50" y="71" width="22" height="18" fill="#DC2626"/>
          <rect x="75" y="71" width="22" height="18" fill="#991B1B"/>
          <text x="50" y="105" text-anchor="middle" font-family="Arial" font-weight="700" font-size="9" fill="#94A3B8">DESeq2 VST</text>
        </g>

        <!-- Vertical Divider -->
        <line x1="140" y1="35" x2="140" y2="160" stroke="#1E293B" stroke-width="1.5"/>

        <!-- Multi-Cohort Meta REM Right -->
        <g transform="translate(155, 38)">
          <text x="130" y="0" text-anchor="middle" font-family="Arial" font-weight="700" font-size="9" fill="#94A3B8">Multi-Cohort Meta-Analysis (REM)</text>
          
          <line x1="130" y1="12" x2="130" y2="95" stroke="#475569" stroke-width="1"/>
          
          <text x="0" y="26" font-family="Arial" font-size="9.5" fill="#E2E8F0">Cohort A (GEO)</text>
          <line x1="90" y1="23" x2="150" y2="23" stroke="#38BDF8" stroke-width="2"/>
          <rect x="115" y="19.5" width="7" height="7" fill="#38BDF8"/>
          <text x="210" y="26" font-family="monospace" font-size="8.5" fill="#94A3B8">p=1.2e-4</text>

          <text x="0" y="50" font-family="Arial" font-size="9.5" fill="#E2E8F0">Cohort B (TCGA)</text>
          <line x1="100" y1="47" x2="180" y2="47" stroke="#38BDF8" stroke-width="2"/>
          <rect x="135" y="43.5" width="8" height="7" fill="#38BDF8"/>
          <text x="210" y="50" font-family="monospace" font-size="8.5" fill="#94A3B8">p=4.5e-6</text>

          <line x1="0" y1="65" x2="255" y2="65" stroke="#334155" stroke-width="0.8"/>
          
          <text x="0" y="82" font-family="Arial" font-weight="800" font-size="9.5" fill="#10B981">Combined REM</text>
          <polygon points="125,80 132,75 140,80 132,85" fill="#10B981"/>
          <text x="210" y="82" font-family="monospace" font-weight="700" font-size="9" fill="#10B981">p=8.9e-9 ***</text>
          <text x="130" y="105" text-anchor="middle" font-family="Arial" font-weight="700" font-size="9" fill="#10B981">Random Effects Model (REM)</text>
        </g>
      </g>
    </g>

    <!-- C. 6 CORE CURRICULUM TOPICS (y=330) -->
    <g transform="translate(45, 330)">
      <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" fill="#64748B" letter-spacing="1.8">MODULE 2 DETAILED 6-STEP SYLLABUS</text>
      <g transform="translate(0, 10)">
        ${topicCards}
      </g>
    </g>

    <!-- D. TECH STACK RIBBON (y=585) -->
    <g transform="translate(45, 582)">
      <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="11" fill="#64748B" letter-spacing="1.5">PRODUCTION PIPELINES &amp; PACKAGES:</text>
      <g transform="translate(0, 10)">
        ${techBadges}
      </g>
    </g>

    <!-- E. INTEGRATED ADMISSIONS CALLOUT (y=640) -->
    <g transform="translate(45, 640)">
      <rect width="870" height="135" rx="18" fill="#131F37" stroke="#2563EB" stroke-width="1.2" stroke-opacity="0.6"/>

      <!-- Content Left -->
      <g transform="translate(30, 36)">
        <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">Join BMP Cohort 03 &#8226; Starts October 2, 2026</text>
        <text x="0" y="26" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14.5" fill="#38BDF8">12-Week Research Mentorship &#8226; 25 Live Sessions &#8226; 30 Seats Limit</text>
        <text x="0" y="52" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="13" fill="#94A3B8">Publish-ready Bulk RNA-Seq, Batch Correction, Pathway Networks &amp; Multi-Cohort Meta-Analysis</text>
      </g>

      <!-- Action Button Right -->
      <g transform="translate(660, 42)">
        <rect width="180" height="52" rx="26" fill="#2563EB"/>
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
  <rect y="1075" width="1080" height="5" fill="#2563EB"/>
</svg>`;
}

async function run() {
  console.log("Generating Custom-Tailored Module 2: Bulk RNA-Seq Ad (600 DPI Ultra-HD)...");

  const svgCode = generateModule2SVG();
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
