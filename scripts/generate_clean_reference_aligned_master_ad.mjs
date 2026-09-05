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

const curriculumModules = [
  {
    num: "01",
    title: "Module 1: Computational Foundation",
    summary: "Linux HPC Workflows • Bash Automation • Python & R Fundamentals",
    badge: "Linux • Python • R",
    color: "#38BDF8",
    bgAlpha: "#0C2340"
  },
  {
    num: "02",
    title: "Module 2: Bulk RNA-seq Analysis",
    summary: "FASTQ QC • STAR/Salmon Counts • DESeq2 DEGs • GSEA • Multi-Cohort REM Meta",
    badge: "DESeq2 • Meta-Analysis",
    color: "#60A5FA",
    bgAlpha: "#172A52"
  },
  {
    num: "03",
    title: "Module 3: Single-Cell RNA-seq",
    summary: "10x Cell Ranger • QC & Doublets • Harmony Integration • Seurat v5 • SingleR",
    badge: "10x Chromium • Seurat v5",
    color: "#FB7185",
    bgAlpha: "#3B1226"
  },
  {
    num: "04",
    title: "Module 4: Spatial Transcriptomics",
    summary: "10x Visium HD (2µm Bins) • Xenium In Situ • SpatialFeatureExperiment • SpatialDE",
    badge: "Visium HD • Xenium",
    color: "#C084FC",
    bgAlpha: "#2A1448"
  },
  {
    num: "05",
    title: "Module 5: AI for Computational Biology",
    summary: "FAIR AI • Machine Learning (XGBoost/RF) • SHAP Biomarkers • PyTorch • Agentic LLMs",
    badge: "PyTorch • Agentic Bio-AI",
    color: "#34D399",
    bgAlpha: "#0E332A"
  }
];

function generateMasterCleanAdSVG() {
  const rows = curriculumModules.map((m, idx) => {
    const y = idx * 95;

    return `
      <!-- Row ${m.num}: ${xmlEscape(m.title)} -->
      <g transform="translate(0, ${y})">
        <!-- Row Background -->
        <rect width="860" height="78" rx="14" fill="#0C1424" stroke="#1E293B" stroke-width="1.2"/>
        <rect x="0" y="14" width="4.5" height="50" rx="2.2" fill="${m.color}"/>

        <!-- Number Circle / Box -->
        <g transform="translate(18, 16)">
          <rect width="46" height="46" rx="12" fill="${m.bgAlpha}" stroke="${m.color}" stroke-width="1.2"/>
          <text x="23" y="29" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="16" fill="${m.color}">${m.num}</text>
        </g>

        <!-- Text Content -->
        <g transform="translate(78, 17)">
          <text x="0" y="17" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="16.5" fill="#FFFFFF">${xmlEscape(m.title)}</text>
          <text x="0" y="37" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="12.5" fill="#94A3B8">${xmlEscape(m.summary)}</text>
        </g>

        <!-- Right Badge (1 clean pill) -->
        <g transform="translate(670, 24)">
          <rect width="170" height="30" rx="15" fill="#131D31" stroke="#334155" stroke-width="1"/>
          <text x="85" y="19.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="11" fill="${m.color}">${xmlEscape(m.badge)}</text>
        </g>
      </g>
    `;
  }).join("\n");

  return `<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient Matching Spotlight Series Reference -->
    <linearGradient id="bg-grad-clean" x1="0" y1="0" x2="1080" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#080D1A"/>
      <stop offset="50%" stop-color="#0A1224"/>
      <stop offset="100%" stop-color="#04060E"/>
    </linearGradient>

    <!-- Glass Rim for Outer Card -->
    <linearGradient id="glass-rim-clean" x1="0" y1="0" x2="960" y2="920" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.5"/>
      <stop offset="50%" stop-color="#2563EB" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.05"/>
    </linearGradient>

    <!-- Top Badge Gradient -->
    <linearGradient id="badge-grad-clean" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>

    <!-- Button Gradient -->
    <linearGradient id="btn-grad-clean" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#1D4ED8"/>
    </linearGradient>

    <filter id="soft-glow-clean" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="80"/>
    </filter>
  </defs>

  <!-- Deep Canvas Background -->
  <rect width="1080" height="1080" fill="url(#bg-grad-clean)"/>

  <!-- Ambient Light Spotlights -->
  <circle cx="850" cy="200" r="300" fill="#2563EB" opacity="0.16" filter="url(#soft-glow-clean)"/>
  <circle cx="150" cy="800" r="300" fill="#0284C7" opacity="0.12" filter="url(#soft-glow-clean)"/>

  <!-- ================= MAIN GLASS CONTAINER CARD (y=50) ================= -->
  <g transform="translate(60, 50)">
    <!-- Outer Glass Frame -->
    <rect width="960" height="970" rx="26" fill="url(#glass-rim-clean)"/>
    <rect x="1.5" y="1.5" width="957" height="967" rx="24.5" fill="#090E1A" fill-opacity="0.98"/>

    <!-- 1. HEADER (y=36) -->
    <g transform="translate(45, 36)">
      <!-- DeepBio Emblem -->
      <rect width="44" height="44" rx="12" fill="#0F1E36" stroke="#2563EB" stroke-width="1.5"/>
      <path d="M22 12 L10 18 L22 24 L34 18 L22 12Z" stroke="#38BDF8" stroke-width="2.2" stroke-linejoin="round" fill="none"/>
      <path d="M14 20 V27 C14 30 17.5 32 22 32 C26.5 32 30 30 30 27 V20" stroke="#60A5FA" stroke-width="2" stroke-linejoin="round" fill="none"/>
      
      <text x="56" y="24" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">DeepBio <tspan fill="#38BDF8">Academy</tspan></text>
      <text x="56" y="40" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#94A3B8" letter-spacing="1.5">BIOINFORMATICS MENTORSHIP PROGRAM</text>

      <!-- Top Right Cohort 03 Capsule -->
      <g transform="translate(545, 0)">
        <rect width="325" height="44" rx="22" fill="url(#badge-grad-clean)" stroke="#60A5FA" stroke-width="1.2"/>
        <g transform="translate(16, 12)">
          <circle cx="10" cy="10" r="8" fill="#22C55E" opacity="0.25"/>
          <circle cx="10" cy="10" r="4" fill="#4ADE80"/>
        </g>
        <g transform="translate(44, 18)">
          <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="12" fill="#FFFFFF" letter-spacing="0.5">BMP COHORT 03 &#8226; 5-MODULE SYLLABUS</text>
          <text x="0" y="14" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="10" fill="#FDE047" letter-spacing="0.8">STARTS OCT 2, 2026 &#8226; 30 SEATS ONLY</text>
        </g>
      </g>
    </g>

    <!-- 2. HEADLINE & VALUE PROPOSITION (y=112) -->
    <g transform="translate(45, 112)">
      <text x="0" y="32" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="32" fill="#FFFFFF" letter-spacing="-0.5">Master Modern Omics &amp; Bio-AI</text>
      <text x="0" y="66" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="28" fill="#38BDF8" letter-spacing="-0.5">The Complete 12-Week Mentorship Curriculum</text>
      <text x="0" y="94" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="14" fill="#94A3B8">
        A structured, hands-on path from computational foundations to spatial biology and deep learning.
      </text>
    </g>

    <!-- 3. 5 CURRICULUM ROWS (y=232) -->
    <g transform="translate(45, 232)">
      ${rows}
    </g>

    <!-- 4. ENROLLMENT BANNER (y=735) -->
    <g transform="translate(45, 730)">
      <!-- Card Shell -->
      <rect width="870" height="125" rx="18" fill="#0C1425" stroke="#2563EB" stroke-width="1.5"/>

      <!-- Content Left -->
      <g transform="translate(30, 32)">
        <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">Join BMP Cohort 03 &#8226; Starts October 2, 2026</text>
        <text x="0" y="24" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14" fill="#38BDF8">12-Week Intensive Mentorship &#8226; 25 Live Sessions &#8226; 30 Seats Limit</text>
        <text x="0" y="46" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="12.5" fill="#94A3B8">Bulk RNA-Seq &#8226; Single-Cell &#8226; Spatial Transcriptomics &#8226; Bio-AI &amp; PyTorch</text>
      </g>

      <!-- Apply Now Button Right -->
      <g transform="translate(680, 36)">
        <rect width="160" height="52" rx="26" fill="url(#btn-grad-clean)"/>
        <text x="80" y="32" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="16" fill="#FFFFFF">Apply Now &#8594;</text>
      </g>
    </g>

    <!-- 5. FOOTER URL (y=885) -->
    <g transform="translate(480, 885)">
      <rect x="-260" y="0" width="520" height="42" rx="21" fill="#0F172A" stroke="#1E293B" stroke-width="1"/>
      <text x="0" y="27" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="16" fill="#FFFFFF">deepbioacademy.com/programs/bmp</text>
      <text x="0" y="58" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="11.5" fill="#64748B">Admissions Open &#8226; Limited to 30 Participants</text>
    </g>
  </g>
</svg>`;
}

async function run() {
  console.log("Generating Clean, Reference-Aligned 5-Module Master Ad (600 DPI Ultra-HD)...");

  const svgCode = generateMasterCleanAdSVG();
  fs.writeFileSync(svgOutPath, svgCode, "utf-8");
  console.log(`Saved SVG: ${svgOutPath}`);

  // Render to 600 DPI Ultra-HD PNG (2160x2160)
  await sharp(Buffer.from(svgCode), { density: 600 })
    .resize(2160, 2160, { fit: "contain", kernel: "lanczos3" })
    .png({ quality: 100, compressionLevel: 6 })
    .toFile(pngOutPath);

  const stats = fs.statSync(pngOutPath);
  console.log(`Rendered Clean 600 DPI PNG: ${pngOutPath} (${Math.round(stats.size / 1024)} KB)`);
}

run();
