import fs from "fs";
import path from "path";
import sharp from "sharp";

const svgOutPath = path.resolve("public/bmp_ads/modules/svg/bmp-module-05-ai-computational-biology.svg");
const pngOutPath = path.resolve("public/bmp_ads/modules/png/bmp-module-05-ai-computational-biology.png");

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

const module5Data = {
  num: "05",
  tag: "MODULE 05 · BIO-AI & MACHINE LEARNING",
  title: "Module 5: AI for Computational Biology",
  subtitleTag: "ML, Deep Learning & Agentic Bio-AI",
  centralMessage: "“Harness Machine Learning, Deep Neural Networks & Agentic AI for Omics Discovery”",
  accentColor: "#10B981",
  topics: [
    {
      title: "1. Intro to AI & ML in Biology",
      subtitle: "Concepts & Biomedical Applications",
      desc: "Supervised vs unsupervised learning, classification vs regression, and transformative biotech applications.",
      color: "#0284C7"
    },
    {
      title: "2. Data Lifecycle & FAIR AI",
      subtitle: "Data-Centric & Responsible AI",
      desc: "Data-centric AI principles, FAIR biomedical data standards, and ethical, reproducible AI practices.",
      color: "#2563EB"
    },
    {
      title: "3. Prep & Feature Engineering",
      subtitle: "Cleaning, Scaling & Selection",
      desc: "Handling missing omics values, Z-score scaling, PCA variance, and high-dimensional biomarker selection.",
      color: "#D97706"
    },
    {
      title: "4. ML Models & Interpretation",
      subtitle: "Random Forest, XGBoost & SHAP",
      desc: "Model training, hyperparameter tuning, ROC-AUC validation, and SHAP explainability for clinical biomarkers.",
      color: "#10B981"
    },
    {
      title: "5. Deep Learning for Omics",
      subtitle: "PyTorch Neural Networks & Sequences",
      desc: "Multi-layer perceptrons, CNNs for genomic motifs, Graph Neural Networks (GNNs), and transfer learning.",
      color: "#8B5CF6"
    },
    {
      title: "6. No-Code & Agentic Bio-AI",
      subtitle: "Autonomous LLM Research Pipelines",
      desc: "Agentic AI workflows, LLM literature reasoning, prompt engineering, and automated reproducible code synthesis.",
      color: "#F43F5E"
    }
  ],
  techTags: [
    { name: "Scikit-Learn", w: 110 },
    { name: "XGBoost", w: 90 },
    { name: "PyTorch", w: 90 },
    { name: "SHAP Explainability", w: 155 },
    { name: "Agentic Bio-AI", w: 125 },
    { name: "FAIR Data-Centric AI", w: 165 }
  ]
};

function generateModule5SVG() {
  const m = module5Data;

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
    <linearGradient id="bg-grad-mod5" x1="0" y1="0" x2="1080" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#080D1A"/>
      <stop offset="50%" stop-color="#09181C"/>
      <stop offset="100%" stop-color="#02060F"/>
    </linearGradient>

    <!-- Glass Card Rim -->
    <linearGradient id="card-rim-mod5" x1="0" y1="0" x2="960" y2="820" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#10B981" stop-opacity="0.45"/>
      <stop offset="50%" stop-color="#38BDF8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.06"/>
    </linearGradient>

    <!-- Ambient Glow Filter -->
    <filter id="ambient-glow-mod5" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="80"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="1080" height="1080" fill="url(#bg-grad-mod5)"/>

  <!-- High-End Mesh Ambient Light Spotlights -->
  <circle cx="880" cy="180" r="320" fill="#10B981" opacity="0.2" filter="url(#ambient-glow-mod5)"/>
  <circle cx="150" cy="850" r="300" fill="#0284C7" opacity="0.15" filter="url(#ambient-glow-mod5)"/>

  <!-- Top Accent Bar -->
  <rect width="1080" height="5" fill="#10B981"/>

  <!-- ================= 1. HEADER (y=42) ================= -->
  <g transform="translate(60, 42)">
    <!-- DeepBio Emblem -->
    <rect width="44" height="44" rx="12" fill="#10B981"/>
    <path d="M22 12 L10 18 L22 24 L34 18 L22 12Z" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round" fill="none"/>
    <path d="M14 20 V27 C14 30 17.5 32 22 32 C26.5 32 30 30 30 27 V20" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" fill="none"/>
    
    <text x="56" y="24" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">DeepBio <tspan fill="#38BDF8">Academy</tspan></text>
    <text x="56" y="40" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#94A3B8" letter-spacing="1.5">BIOINFORMATICS MENTORSHIP PROGRAM (BMP-C03)</text>

    <!-- Top Right Module Badge -->
    <g transform="translate(630, 0)">
      <rect width="330" height="44" rx="22" fill="#1E293B" stroke="#334155" stroke-width="1.2"/>
      <circle cx="24" cy="22" r="6" fill="#10B981"/>
      <text x="175" y="27" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="11.5" fill="#F1F5F9">MODULE 05 · BIO-AI &amp; ML</text>
    </g>
  </g>

  <!-- ================= 2. MAIN HERO SPOTLIGHT CARD (y=110) ================= -->
  <g transform="translate(60, 110)">
    <!-- Outer Glass Card Shell -->
    <rect width="960" height="805" rx="28" fill="url(#card-rim-mod5)"/>
    <rect x="1.5" y="1.5" width="957" height="802" rx="26.5" fill="#0B1222" fill-opacity="0.98"/>

    <!-- A. Module Title & Central Hook Message (y=28) -->
    <g transform="translate(45, 28)">
      <text x="0" y="30" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="30" fill="#FFFFFF" letter-spacing="-0.5">${xmlEscape(m.title)} <tspan font-size="16" fill="#38BDF8" font-weight="700">(${xmlEscape(m.subtitleTag)})</tspan></text>
      
      <!-- Central Hook Quote -->
      <rect y="44" width="870" height="48" rx="14" fill="#0E2322" stroke="#10B981" stroke-width="1.2" stroke-opacity="0.6"/>
      <text x="25" y="74" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="15.5" fill="#38BDF8">${xmlEscape(m.centralMessage)}</text>
    </g>

    <!-- B. HERO AI & MACHINE LEARNING CANVAS (y=132) -->
    <g transform="translate(45, 132)">
      <!-- Panel 1: Deep Learning Neural Network & SHAP Values (Left, Width: 425) -->
      <g transform="translate(0, 0)">
        <rect width="425" height="185" rx="12" fill="#020617" stroke="#1E293B" stroke-width="1.5"/>
        <text x="212" y="22" text-anchor="middle" font-family="Arial" font-weight="900" font-size="12" fill="#10B981">PyTorch Neural Architecture &amp; SHAP Biomarker Selection</text>

        <!-- Neural Network Miniature -->
        <g transform="translate(20, 36)">
          <!-- Input Nodes -->
          <circle cx="15" cy="15" r="5" fill="#10B981"/>
          <circle cx="15" cy="40" r="5" fill="#10B981"/>
          <circle cx="15" cy="65" r="5" fill="#10B981"/>
          <circle cx="15" cy="90" r="5" fill="#10B981"/>

          <!-- Hidden Nodes -->
          <circle cx="55" cy="28" r="6" fill="#38BDF8"/>
          <circle cx="55" cy="52" r="6" fill="#38BDF8"/>
          <circle cx="55" cy="76" r="6" fill="#38BDF8"/>

          <!-- Output Node -->
          <circle cx="95" cy="52" r="7" fill="#F59E0B"/>

          <!-- Connections -->
          <line x1="15" y1="15" x2="55" y2="28" stroke="#475569" stroke-width="1"/>
          <line x1="15" y1="40" x2="55" y2="28" stroke="#475569" stroke-width="1"/>
          <line x1="15" y1="40" x2="55" y2="52" stroke="#475569" stroke-width="1"/>
          <line x1="15" y1="65" x2="55" y2="52" stroke="#475569" stroke-width="1"/>
          <line x1="15" y1="65" x2="55" y2="76" stroke="#475569" stroke-width="1"/>
          <line x1="15" y1="90" x2="55" y2="76" stroke="#475569" stroke-width="1"/>
          <line x1="55" y1="28" x2="95" y2="52" stroke="#38BDF8" stroke-width="1.5"/>
          <line x1="55" y1="52" x2="95" y2="52" stroke="#38BDF8" stroke-width="2"/>
          <line x1="55" y1="76" x2="95" y2="52" stroke="#38BDF8" stroke-width="1.5"/>
          <text x="55" y="112" text-anchor="middle" font-family="Arial" font-weight="700" font-size="8.5" fill="#94A3B8">Deep Omics NN</text>
        </g>

        <!-- Vertical Divider -->
        <line x1="135" y1="35" x2="135" y2="155" stroke="#1E293B" stroke-width="1.2"/>

        <!-- SHAP Feature Bars Right -->
        <g transform="translate(150, 38)">
          <text x="0" y="14" font-family="Arial" font-weight="800" font-size="9.5" fill="#E2E8F0">EGFR</text>
          <rect x="42" y="5" width="180" height="10" rx="2.5" fill="#EF4444"/>
          <text x="230" y="14" font-family="monospace" font-size="8.5" fill="#F87171">+0.48</text>

          <text x="0" y="36" font-family="Arial" font-weight="800" font-size="9.5" fill="#E2E8F0">TP53</text>
          <rect x="42" y="27" width="145" height="10" rx="2.5" fill="#F87171"/>
          <text x="195" y="36" font-family="monospace" font-size="8.5" fill="#F87171">+0.39</text>

          <text x="0" y="58" font-family="Arial" font-weight="800" font-size="9.5" fill="#E2E8F0">BRCA1</text>
          <rect x="42" y="49" width="115" height="10" rx="2.5" fill="#3B82F6"/>
          <text x="165" y="58" font-family="monospace" font-size="8.5" fill="#60A5FA">+0.28</text>

          <text x="0" y="80" font-family="Arial" font-weight="800" font-size="9.5" fill="#E2E8F0">MYC</text>
          <rect x="42" y="71" width="85" height="10" rx="2.5" fill="#60A5FA"/>
          <text x="135" y="80" font-family="monospace" font-size="8.5" fill="#93C5FD">+0.21</text>
          
          <text x="120" y="105" text-anchor="middle" font-family="Arial" font-weight="700" font-size="9" fill="#10B981">Mean |SHAP Value| Feature Importance</text>
        </g>
        <text x="212" y="170" text-anchor="middle" font-family="Arial" font-weight="800" font-size="10" fill="#38BDF8">&#10003; Explainable AI for Biomarker Validation</text>
      </g>

      <!-- Panel 2: Agentic Bio-AI Autonomous Research Pipeline (Right, Width: 425) -->
      <g transform="translate(445, 0)">
        <rect width="425" height="185" rx="12" fill="#020617" stroke="#1E293B" stroke-width="1.5"/>
        <text x="212" y="22" text-anchor="middle" font-family="Arial" font-weight="900" font-size="12" fill="#38BDF8">Agentic Bio-AI &amp; Autonomous Pipeline Synthesis</text>

        <!-- 3 Agent Workflow Nodes -->
        <g transform="translate(15, 38)">
          <!-- Node 1: Bio-LLM Research Agent -->
          <g transform="translate(0, 0)">
            <rect width="115" height="85" rx="10" fill="#1E293B" stroke="#38BDF8" stroke-width="1.2"/>
            <circle cx="57.5" cy="24" r="12" fill="#0284C7" opacity="0.3"/>
            <text x="57.5" y="28" text-anchor="middle" font-family="Arial" font-size="14">🤖</text>
            <text x="57.5" y="52" text-anchor="middle" font-family="Arial" font-weight="800" font-size="9.5" fill="#FFFFFF">Bio-AI Agent</text>
            <text x="57.5" y="68" text-anchor="middle" font-family="Arial" font-weight="500" font-size="8" fill="#94A3B8">Hypothesis / Lit</text>
          </g>

          <!-- Connector 1 -->
          <path d="M120 42 L138 42 M133 37 L138 42 L133 47" stroke="#38BDF8" stroke-width="2"/>

          <!-- Node 2: Automated Code & Tool Execution -->
          <g transform="translate(142, 0)">
            <rect width="115" height="85" rx="10" fill="#1E293B" stroke="#10B981" stroke-width="1.2"/>
            <circle cx="57.5" cy="24" r="12" fill="#10B981" opacity="0.3"/>
            <text x="57.5" y="28" text-anchor="middle" font-family="Arial" font-size="14">⚡</text>
            <text x="57.5" y="52" text-anchor="middle" font-family="Arial" font-weight="800" font-size="9.5" fill="#FFFFFF">Code Engine</text>
            <text x="57.5" y="68" text-anchor="middle" font-family="Arial" font-weight="500" font-size="8" fill="#94A3B8">PyTorch &amp; DESeq2</text>
          </g>

          <!-- Connector 2 -->
          <path d="M262 42 L280 42 M275 37 L280 42 L275 47" stroke="#10B981" stroke-width="2"/>

          <!-- Node 3: Synthesis & Discovery -->
          <g transform="translate(284, 0)">
            <rect width="110" height="85" rx="10" fill="#1E293B" stroke="#F59E0B" stroke-width="1.2"/>
            <circle cx="55" cy="24" r="12" fill="#F59E0B" opacity="0.3"/>
            <text x="55" y="28" text-anchor="middle" font-family="Arial" font-size="14">🎯</text>
            <text x="55" y="52" text-anchor="middle" font-family="Arial" font-weight="800" font-size="9.5" fill="#FFFFFF">Discovery</text>
            <text x="55" y="68" text-anchor="middle" font-family="Arial" font-weight="500" font-size="8" fill="#94A3B8">Paper-Ready Fig</text>
          </g>
        </g>
        <text x="212" y="152" text-anchor="middle" font-family="Arial" font-weight="800" font-size="10.5" fill="#10B981">End-to-End Agentic LLM Computational Workflows</text>
        <text x="212" y="170" text-anchor="middle" font-family="Arial" font-weight="500" font-size="9.5" fill="#94A3B8">Automate Literature Curation, Script QA &amp; Pipeline Debugging</text>
      </g>
    </g>

    <!-- C. 6 CORE CURRICULUM TOPICS (y=330) -->
    <g transform="translate(45, 330)">
      <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" fill="#64748B" letter-spacing="1.8">MODULE 5 DETAILED BIO-AI &amp; MACHINE LEARNING SYLLABUS</text>
      <g transform="translate(0, 10)">
        ${topicCards}
      </g>
    </g>

    <!-- D. TECH STACK RIBBON (y=582) -->
    <g transform="translate(45, 582)">
      <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="11" fill="#64748B" letter-spacing="1.5">BIO-AI FRAMEWORKS &amp; MACHINE LEARNING STACK:</text>
      <g transform="translate(0, 10)">
        ${techBadges}
      </g>
    </g>

    <!-- E. INTEGRATED ADMISSIONS CALLOUT (y=640) -->
    <g transform="translate(45, 640)">
      <rect width="870" height="135" rx="18" fill="#0C2020" stroke="#10B981" stroke-width="1.2" stroke-opacity="0.6"/>

      <!-- Content Left -->
      <g transform="translate(30, 36)">
        <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">Join BMP Cohort 03 &#8226; Starts October 2, 2026</text>
        <text x="0" y="26" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14.5" fill="#38BDF8">12-Week Research Mentorship &#8226; 25 Live Sessions &#8226; 30 Seats Limit</text>
        <text x="0" y="52" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="13" fill="#94A3B8">Master ML Classifiers, SHAP Biomarkers, PyTorch Deep Learning &amp; Agentic Bio-AI</text>
      </g>

      <!-- Action Button Right -->
      <g transform="translate(660, 42)">
        <rect width="180" height="52" rx="26" fill="#10B981"/>
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
  <rect y="1075" width="1080" height="5" fill="#10B981"/>
</svg>`;
}

async function run() {
  console.log("Generating Custom-Tailored Module 5: Bio-AI & Machine Learning Ad (600 DPI Ultra-HD)...");

  const svgCode = generateModule5SVG();
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
