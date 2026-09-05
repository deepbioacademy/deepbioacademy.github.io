import fs from "fs";
import path from "path";
import sharp from "sharp";

const svgOutPath = path.resolve("public/bmp_ads/modules/svg/bmp-module-04-spatial-transcriptomics.svg");
const pngOutPath = path.resolve("public/bmp_ads/modules/png/bmp-module-04-spatial-transcriptomics.png");

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

const module4Data = {
  num: "04",
  tag: "MODULE 04 · SPATIAL OMICS",
  title: "Module 4: Spatial Transcriptomics",
  subtitleTag: "Visium HD & Xenium In Situ",
  centralMessage: "“Map Tissue Microenvironments at Subcellular Resolution with Visium HD & Xenium”",
  accentColor: "#9333EA",
  topics: [
    {
      title: "1. Intro to Spatial Biology",
      subtitle: "Experimental & Slide Wet-Lab Design",
      desc: "In situ sequencing vs spatial barcoding chemistries, tissue permeabilization, and dry-lab roadmap.",
      color: "#0284C7"
    },
    {
      title: "2. Spatial Objects & Platform QC",
      subtitle: "SpatialExperiment & SpatialFeatureExperiment",
      desc: "Visium HD binned (2µm/8µm/16µm), Xenium in situ objects, segmented cells, and platform QC metrics.",
      color: "#9333EA"
    },
    {
      title: "3. Normalization, Domains & Annotation",
      subtitle: "Spatial Clustering & Tissue Segmentation",
      desc: "Multi-scale normalization, morphological domain detection, cell-type annotation, and niche mapping.",
      color: "#E11D48"
    },
    {
      title: "4. Multi-Scale & Spatial DEGs",
      subtitle: "Differential Analysis & Neighborhoods",
      desc: "Multi-resolution scale modeling, spatial differential expression (SpatialDE), and cell-cell interaction niches.",
      color: "#16A34A"
    }
  ],
  techTags: [
    { name: "10x Visium HD", w: 125 },
    { name: "10x Xenium", w: 110 },
    { name: "SpatialExperiment", w: 145 },
    { name: "SpatialFeatureExperiment", w: 185 },
    { name: "Voyager & Giotto", w: 140 },
    { name: "SpatialDE", w: 105 }
  ]
};

function generateModule4SVG() {
  const m = module4Data;

  const topicCards = m.topics.map((t, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = col === 0 ? 0 : 445;
    const y = row * 105;
    const { line1, line2 } = wrapIntoTwoLines(t.desc, 54);

    return `
      <!-- Card ${idx + 1}: ${xmlEscape(t.title)} -->
      <g transform="translate(${x}, ${y})">
        <rect width="425" height="92" rx="14" fill="#090E1A" stroke="#1E293B" stroke-width="1.2"/>
        <rect x="0" y="16" width="4" height="60" rx="2" fill="${t.color}"/>
        
        <!-- Header -->
        <circle cx="28" cy="28" r="12" fill="${t.color}" opacity="0.2"/>
        <circle cx="28" cy="28" r="4.5" fill="${t.color}"/>
        <text x="48" y="24" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="14.5" fill="#FFFFFF">${xmlEscape(t.title)}</text>
        <text x="48" y="40" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="12" fill="#38BDF8">${xmlEscape(t.subtitle)}</text>
        
        <!-- Description -->
        <text x="48" y="58" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="11.5" fill="#94A3B8">${xmlEscape(line1)}</text>
        <text x="48" y="74" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="11.5" fill="#94A3B8">${xmlEscape(line2)}</text>
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
    <linearGradient id="bg-grad-mod4" x1="0" y1="0" x2="1080" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#090D1A"/>
      <stop offset="50%" stop-color="#14091E"/>
      <stop offset="100%" stop-color="#04060F"/>
    </linearGradient>

    <!-- Glass Card Rim -->
    <linearGradient id="card-rim-mod4" x1="0" y1="0" x2="960" y2="820" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#A855F7" stop-opacity="0.45"/>
      <stop offset="50%" stop-color="#38BDF8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.06"/>
    </linearGradient>

    <!-- Ambient Glow Filter -->
    <filter id="ambient-glow-mod4" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="80"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="1080" height="1080" fill="url(#bg-grad-mod4)"/>

  <!-- High-End Mesh Ambient Light Spotlights -->
  <circle cx="880" cy="180" r="320" fill="#9333EA" opacity="0.2" filter="url(#ambient-glow-mod4)"/>
  <circle cx="150" cy="850" r="300" fill="#2563EB" opacity="0.15" filter="url(#ambient-glow-mod4)"/>

  <!-- Top Accent Bar -->
  <rect width="1080" height="5" fill="#9333EA"/>

  <!-- ================= 1. HEADER (y=42) ================= -->
  <g transform="translate(60, 42)">
    <!-- DeepBio Emblem -->
    <rect width="44" height="44" rx="12" fill="#9333EA"/>
    <path d="M22 12 L10 18 L22 24 L34 18 L22 12Z" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round" fill="none"/>
    <path d="M14 20 V27 C14 30 17.5 32 22 32 C26.5 32 30 30 30 27 V20" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" fill="none"/>
    
    <text x="56" y="24" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">DeepBio <tspan fill="#38BDF8">Academy</tspan></text>
    <text x="56" y="40" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#94A3B8" letter-spacing="1.5">BIOINFORMATICS MENTORSHIP PROGRAM (BMP-C03)</text>

    <!-- Top Right Module Badge -->
    <g transform="translate(640, 0)">
      <rect width="320" height="44" rx="22" fill="#1E293B" stroke="#334155" stroke-width="1.2"/>
      <circle cx="24" cy="22" r="6" fill="#9333EA"/>
      <text x="170" y="27" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="11.5" fill="#F1F5F9">MODULE 04 · SPATIAL OMICS</text>
    </g>
  </g>

  <!-- ================= 2. MAIN HERO SPOTLIGHT CARD (y=110) ================= -->
  <g transform="translate(60, 110)">
    <!-- Outer Glass Card Shell -->
    <rect width="960" height="805" rx="28" fill="url(#card-rim-mod4)"/>
    <rect x="1.5" y="1.5" width="957" height="802" rx="26.5" fill="#0B1222" fill-opacity="0.98"/>

    <!-- A. Module Title & Central Hook Message (y=28) -->
    <g transform="translate(45, 28)">
      <text x="0" y="30" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="30" fill="#FFFFFF" letter-spacing="-0.5">${xmlEscape(m.title)} <tspan font-size="16" fill="#38BDF8" font-weight="700">(${xmlEscape(m.subtitleTag)})</tspan></text>
      
      <!-- Central Hook Quote -->
      <rect y="44" width="870" height="48" rx="14" fill="#1A1126" stroke="#9333EA" stroke-width="1.2" stroke-opacity="0.6"/>
      <text x="25" y="74" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="15.5" fill="#38BDF8">${xmlEscape(m.centralMessage)}</text>
    </g>

    <!-- B. HERO SPATIAL VISUALIZATION CANVAS (y=132) -->
    <g transform="translate(45, 132)">
      <!-- Panel 1: 10x Visium HD Multi-Scale Binned Grid (Left, Width: 425) -->
      <g transform="translate(0, 0)">
        <rect width="425" height="185" rx="12" fill="#020617" stroke="#1E293B" stroke-width="1.5"/>
        <text x="212" y="22" text-anchor="middle" font-family="Arial" font-weight="900" font-size="12" fill="#A855F7">10x Visium HD Multi-Scale Binned Grid (2µm / 8µm / 16µm)</text>
        
        <!-- Multi-Scale Grid Canvas -->
        <g transform="translate(30, 35)">
          <!-- 16µm Macro Spot Left -->
          <g transform="translate(10, 8)">
            <rect width="70" height="70" rx="10" fill="#1E293B" stroke="#9333EA" stroke-width="1.5"/>
            <circle cx="35" cy="35" r="28" fill="#9333EA" opacity="0.6"/>
            <text x="35" y="95" text-anchor="middle" font-family="Arial" font-weight="700" font-size="10" fill="#C084FC">16µm Macro</text>
          </g>

          <!-- Arrow -->
          <path d="M100 48 L125 48 M120 43 L125 48 L120 53" stroke="#64748B" stroke-width="2"/>

          <!-- 8µm Intermediate Grid -->
          <g transform="translate(145, 8)">
            <rect width="70" height="70" rx="8" fill="#1E293B" stroke="#3B82F6" stroke-width="1.2"/>
            <rect x="5" y="5" width="28" height="28" rx="4" fill="#3B82F6" opacity="0.8"/>
            <rect x="37" y="5" width="28" height="28" rx="4" fill="#60A5FA" opacity="0.8"/>
            <rect x="5" y="37" width="28" height="28" rx="4" fill="#93C5FD" opacity="0.8"/>
            <rect x="37" y="37" width="28" height="28" rx="4" fill="#3B82F6" opacity="0.8"/>
            <text x="35" y="95" text-anchor="middle" font-family="Arial" font-weight="700" font-size="10" fill="#93C5FD">8µm Cellular</text>
          </g>

          <!-- Arrow -->
          <path d="M235 48 L260 48 M255 43 L260 48 L255 53" stroke="#64748B" stroke-width="2"/>

          <!-- 2µm Subcellular Micro-Bins -->
          <g transform="translate(280, 8)">
            <rect width="70" height="70" rx="8" fill="#020617" stroke="#10B981" stroke-width="1.5"/>
            <!-- 4x4 Mini Bins -->
            <rect x="4" y="4" width="13" height="13" rx="2" fill="#10B981"/>
            <rect x="20" y="4" width="13" height="13" rx="2" fill="#EC4899"/>
            <rect x="36" y="4" width="13" height="13" rx="2" fill="#38BDF8"/>
            <rect x="52" y="4" width="13" height="13" rx="2" fill="#10B981"/>

            <rect x="4" y="20" width="13" height="13" rx="2" fill="#38BDF8"/>
            <rect x="20" y="20" width="13" height="13" rx="2" fill="#F59E0B"/>
            <rect x="36" y="20" width="13" height="13" rx="2" fill="#10B981"/>
            <rect x="52" y="20" width="13" height="13" rx="2" fill="#EC4899"/>

            <rect x="4" y="36" width="13" height="13" rx="2" fill="#EC4899"/>
            <rect x="20" y="36" width="13" height="13" rx="2" fill="#10B981"/>
            <rect x="36" y="36" width="13" height="13" rx="2" fill="#38BDF8"/>
            <rect x="52" y="36" width="13" height="13" rx="2" fill="#10B981"/>

            <rect x="4" y="52" width="13" height="13" rx="2" fill="#10B981"/>
            <rect x="20" y="52" width="13" height="13" rx="2" fill="#38BDF8"/>
            <rect x="36" y="52" width="13" height="13" rx="2" fill="#EC4899"/>
            <rect x="52" y="52" width="13" height="13" rx="2" fill="#F59E0B"/>

            <text x="35" y="95" text-anchor="middle" font-family="Arial" font-weight="900" font-size="10" fill="#34D399">2µm Subcellular</text>
          </g>
        </g>
        <text x="212" y="168" text-anchor="middle" font-family="Arial" font-weight="800" font-size="10.5" fill="#38BDF8">SpatialExperiment Binned Object Architecture</text>
      </g>

      <!-- Panel 2: 10x Xenium In Situ Subcellular Transcripts & Niches (Right, Width: 425) -->
      <g transform="translate(445, 0)">
        <rect width="425" height="185" rx="12" fill="#020617" stroke="#1E293B" stroke-width="1.5"/>
        <text x="212" y="22" text-anchor="middle" font-family="Arial" font-weight="900" font-size="12" fill="#EC4899">10x Xenium In Situ &amp; Segmented Tissue Microdomains</text>

        <!-- Cell Segments & In Situ RNA Spots -->
        <g transform="translate(30, 35)">
          <!-- Segmented Cell 1 (Tumor Core - Purple) -->
          <path d="M40 25 Q 70 10 95 30 Q 110 65 85 85 Q 50 95 35 70 Z" fill="#8B5CF6" fill-opacity="0.25" stroke="#A855F7" stroke-width="1.5"/>
          <circle cx="65" cy="50" r="14" fill="#3B82F6" opacity="0.3"/>
          <text x="65" y="54" text-anchor="middle" font-family="Arial" font-weight="700" font-size="8" fill="#BAE6FD">Nucleus</text>
          <!-- mRNA Spot Molecules -->
          <circle cx="48" cy="35" r="2.5" fill="#F43F5E"/>
          <circle cx="80" cy="30" r="2.5" fill="#F43F5E"/>
          <circle cx="90" cy="55" r="2.5" fill="#FBBF24"/>
          <circle cx="75" cy="72" r="2.5" fill="#10B981"/>
          <circle cx="45" cy="65" r="2.5" fill="#38BDF8"/>
          <text x="65" y="105" text-anchor="middle" font-family="Arial" font-weight="800" font-size="9" fill="#C084FC">Tumor Cell</text>

          <!-- Segmented Cell 2 (Immune Infiltrate - Green) -->
          <path d="M150 30 Q 185 20 205 45 Q 215 80 185 90 Q 140 85 145 55 Z" fill="#10B981" fill-opacity="0.25" stroke="#34D399" stroke-width="1.5"/>
          <circle cx="178" cy="55" r="12" fill="#3B82F6" opacity="0.3"/>
          <circle cx="160" cy="40" r="2.5" fill="#38BDF8"/>
          <circle cx="195" cy="45" r="2.5" fill="#38BDF8"/>
          <circle cx="170" cy="75" r="2.5" fill="#10B981"/>
          <circle cx="195" cy="70" r="2.5" fill="#FBBF24"/>
          <text x="180" y="105" text-anchor="middle" font-family="Arial" font-weight="800" font-size="9" fill="#6EE7B7">CD8+ T-Cell</text>

          <!-- Segmented Cell 3 (Stroma - Gold) -->
          <path d="M260 25 Q 310 15 335 45 Q 350 85 305 95 Q 255 85 250 50 Z" fill="#F59E0B" fill-opacity="0.25" stroke="#FBBF24" stroke-width="1.5"/>
          <circle cx="295" cy="55" r="14" fill="#3B82F6" opacity="0.3"/>
          <circle cx="275" cy="35" r="2.5" fill="#FBBF24"/>
          <circle cx="315" cy="40" r="2.5" fill="#F43F5E"/>
          <circle cx="325" cy="65" r="2.5" fill="#38BDF8"/>
          <circle cx="280" cy="75" r="2.5" fill="#10B981"/>
          <text x="295" y="105" text-anchor="middle" font-family="Arial" font-weight="800" font-size="9" fill="#FDE047">Fibroblast</text>
        </g>
        <text x="212" y="168" text-anchor="middle" font-family="Arial" font-weight="800" font-size="10.5" fill="#10B981">SpatialFeatureExperiment Subcellular RNA Localization</text>
      </g>
    </g>

    <!-- C. 4 CORE CURRICULUM TOPICS (y=355) -->
    <g transform="translate(45, 355)">
      <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" fill="#64748B" letter-spacing="1.8">MODULE 4 DETAILED SPATIAL BIOLOGY SYLLABUS</text>
      <g transform="translate(0, 12)">
        ${topicCards}
      </g>
    </g>

    <!-- D. TECH STACK RIBBON (y=582) -->
    <g transform="translate(45, 582)">
      <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="11" fill="#64748B" letter-spacing="1.5">SPATIAL TRANSCRIPTOMICS TOOLS &amp; LIBRARIES:</text>
      <g transform="translate(0, 10)">
        ${techBadges}
      </g>
    </g>

    <!-- E. INTEGRATED ADMISSIONS CALLOUT (y=640) -->
    <g transform="translate(45, 640)">
      <rect width="870" height="135" rx="18" fill="#171026" stroke="#9333EA" stroke-width="1.2" stroke-opacity="0.6"/>

      <!-- Content Left -->
      <g transform="translate(30, 36)">
        <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">Join BMP Cohort 03 &#8226; Starts October 2, 2026</text>
        <text x="0" y="26" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14.5" fill="#38BDF8">12-Week Research Mentorship &#8226; 25 Live Sessions &#8226; 30 Seats Limit</text>
        <text x="0" y="52" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="13" fill="#94A3B8">Analyze 10x Visium HD, Xenium In Situ, SpatialFeatureExperiment &amp; Niche Interactions</text>
      </g>

      <!-- Action Button Right -->
      <g transform="translate(660, 42)">
        <rect width="180" height="52" rx="26" fill="#9333EA"/>
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
  <rect y="1075" width="1080" height="5" fill="#9333EA"/>
</svg>`;
}

async function run() {
  console.log("Generating Custom-Tailored Module 4: Spatial Transcriptomics Ad (600 DPI Ultra-HD)...");

  const svgCode = generateModule4SVG();
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
