import fs from "fs";
import path from "path";
import sharp from "sharp";

const baseDir = path.resolve("public/bmp_ads/testimonials");
const photoDir = path.join(baseDir, "Photo_Mentees Feedback [BMP-C02]");
const testSvgDir = path.join(baseDir, "svg");
const testPngDir = path.join(baseDir, "png");

fs.mkdirSync(testSvgDir, { recursive: true });
fs.mkdirSync(testPngDir, { recursive: true });

function xmlEscape(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const mentees = [
  {
    slug: "sayma-anjum",
    name: "Sayma Anjum Sujana",
    institution: "Independent University, Bangladesh (IUB)",
    dept: "Biochemistry & Biotechnology",
    highlight: "Real Research & Problem-Solving Mastery",
    quote1: "“This mentorship fundamentally changed my perspective on research.",
    quote2: "I learned how to work with bioinformatics workflows, troubleshoot",
    quote3: "errors independently, and apply transcriptomics to real data.”",
    tags: ["Bulk RNA-Seq", "Workflow Troubleshooting", "Research Autonomy"],
    accentColor: "#3B82F6",
    gradientColor: "#1D4ED8",
    initials: "SA",
    photoFile: "Screenshot 2026-07-03 215357 - sujana anjum.png"
  },
  {
    slug: "sharfuddin-safin",
    name: "Sharfuddin Safin",
    institution: "Islamic University, Kushtia",
    dept: "Biomedical Engineering",
    highlight: "From 'Click-and-Run' to True Computational Literacy",
    quote1: "“The transition from superficial GUI tools to code-based transcriptomics",
    quote2: "is the most rewarding. Handling raw FASTQ sequencing data & statistical",
    quote3: "rigor gives you the autonomy to ask real scientific questions.”",
    tags: ["Bulk & Single-Cell", "Raw Sequencing Data", "Statistical Rigor"],
    accentColor: "#6366F1",
    gradientColor: "#4338CA",
    initials: "SS",
    photoFile: "Sharfuddin Safin - Sharfuddin Shafin.jpeg"
  },
  {
    slug: "sumaya-mifty",
    name: "Dr. Sumaya Khan Mifty",
    institution: "Dhaka Medical College",
    dept: "Department of Medicine",
    highlight: "Bridging RNA-Seq into Evidence-Based Medicine",
    quote1: "“As a doctor, genomics lies at the heart of improving healthcare.",
    quote2: "BMP taught the ABCs of RNA-seq analysis in a structured, practical",
    quote3: "way, giving me confidence to explore transcriptomics in medicine.”",
    tags: ["Medical Genomics", "RNA-Seq in Healthcare", "Evidence-Based Medicine"],
    accentColor: "#EC4899",
    gradientColor: "#BE185D",
    initials: "SM",
    photoFile: "IMG_1069 - Sumaya Mifty.jpeg"
  },
  {
    slug: "tanvir-ahmed",
    name: "Tanvir Ahmed",
    institution: "Govt Unani & Ayurvedic Medical College",
    dept: "Department of Medicine & Surgery",
    highlight: "Doctor's Pathway to Omics & Neurogenomics",
    quote1: "“As a medical student interested in cancer & neurogenomics, I wanted",
    quote2: "practical skills beyond theory. Complex topics in bulk and single-cell",
    quote3: "RNA-seq were explained in an exceptionally clear, structured manner.”",
    tags: ["Bulk RNA-Seq", "Single-Cell Omics", "Cancer & Neurogenomics"],
    accentColor: "#0EA5E9",
    gradientColor: "#0369A1",
    initials: "TA",
    photoFile: "Tanvir_Ahmed - TANVIR AHMED.jpeg"
  },
  {
    slug: "farah-ulfat",
    name: "Farah Ulfat",
    institution: "University of Rajshahi",
    dept: "Genetic Engineering & Biotechnology",
    highlight: "Systematic Research & Biotech Career Preparation",
    quote1: "“The mentorship helped me approach research problems systematically",
    quote2: "and gave me clearer direction on the exact bioinformatics skills",
    quote3: "to develop for international biotechnology opportunities.”",
    tags: ["Systematic Analysis", "Biotech Research", "Independent Direction"],
    accentColor: "#A855F7",
    gradientColor: "#7E22CE",
    initials: "FU",
    photoFile: "IMG_20260526_142254 - Farah Ulfat.jpg"
  },
  {
    slug: "mantuka-masnoon",
    name: "Mantuka Masnoon Umama",
    institution: "North South University (NSU)",
    dept: "Department of Microbiology",
    highlight: "Scientific Reasoning & Advanced Omics Tools",
    quote1: "“I was searching for a platform to expand my skills in bioinformatics.",
    quote2: "This mentorship gave me insightful advice on research methods, data",
    quote3: "analysis, scientific reasoning, and methodical problem-solving.”",
    tags: ["Data Analysis", "Scientific Reasoning", "Advanced Tools"],
    accentColor: "#14B8A6",
    gradientColor: "#0F766E",
    initials: "MU",
    photoFile: "Mantuka_Masnoon_Umama - Mantuka Umama.jpg"
  },
  {
    slug: "ariful-amin",
    name: "Md Ariful Amin",
    institution: "University of Dhaka",
    dept: "Genetic Engineering & Biotechnology",
    highlight: "Real Bioinformatics For MS/PhD Readiness",
    quote1: "“As the mentor said: 'Real bioinformatics, no more toy tools.'",
    quote2: "Now I have the direction and materials to initiate computational biology.",
    quote3: "This mentorship expands my expertise and fuels my PhD admission.”",
    tags: ["PhD Readiness", "Production Workflows", "Computational Biology"],
    accentColor: "#22C55E",
    gradientColor: "#15803D",
    initials: "AA",
    photoFile: null
  },
  {
    slug: "md-sohel-rahman",
    name: "Md Sohel Rahman",
    institution: "Gazipur Agricultural University",
    dept: "Veterinary Medicine & Animal Science",
    highlight: "Structured & Practical Bioinformatics Learning",
    quote1: "“I learned bioinformatics in a structured and practical way.",
    quote2: "The course was well organized, informative, and engaging, giving me",
    quote3: "valuable practical skills for my academic and research journey.”",
    tags: ["Structured Curriculum", "Practical Skills", "Hands-on Learning"],
    accentColor: "#F59E0B",
    gradientColor: "#B45309",
    initials: "SR",
    photoFile: "IMG_20260720_114532 - Sohel Rahman.jpeg"
  },
  {
    slug: "tasnim-haque-achal",
    name: "Tasnim Haque Achal",
    institution: "BRAC University",
    dept: "Department of Biotechnology",
    highlight: "Hands-on Workflows & Real-World Problem Solving",
    quote1: "“The sessions and resources helped me understand bioinformatics",
    quote2: "concepts and workflows clearly. I especially appreciated the hands-on",
    quote3: "practical guidance and applying pipelines to real datasets.”",
    tags: ["Hands-on Pipelines", "Real Datasets", "Practical Mastery"],
    accentColor: "#10B981",
    gradientColor: "#047857",
    initials: "TA",
    photoFile: "IMG_1559_Original - Tasnim Haque Achal.jpeg"
  },
  {
    slug: "tamanna-dilshad",
    name: "Tamanna Dilshad Phul",
    institution: "American International University-Bangladesh",
    dept: "Computer Science & Engineering",
    highlight: "CS to Bioinformatics & Interdisciplinary Career",
    quote1: "“The mentorship helped me understand complex bioinformatics concepts,",
    quote2: "improve computational skills, and gain confidence in exploring",
    quote3: "future research and career opportunities in computational biology.”",
    tags: ["CS to Omics", "Computational Skills", "Career Confidence"],
    accentColor: "#818CF8",
    gradientColor: "#4F46E5",
    initials: "TP",
    photoFile: "IMG_20260429_141226_294 - Tamanna Dilshad.webp"
  },
  {
    slug: "suprokash-chakra",
    name: "Suprokash Chakra Borty",
    institution: "Khwaja Yunus Ali University",
    dept: "Biochemistry & Biotechnology",
    highlight: "Navigating the Global Bioinformatics Landscape",
    quote1: "“This mentorship helped me realize the current scenario of the",
    quote2: "Bioinformatics world and drove me towards that path through",
    quote3: "hands-on, skill-based practical learning and pipelines.”",
    tags: ["Global Omics Trends", "Skill-Based Learning", "Research Direction"],
    accentColor: "#06B6D4",
    gradientColor: "#0E7490",
    initials: "SC",
    photoFile: "Screenshot 2025-04-11 152931 - Suprokash Chakra Borty.jpg"
  }
];

async function getPhotoDataUri(photoFile) {
  if (!photoFile) return null;
  const filePath = path.join(photoDir, photoFile);
  if (!fs.existsSync(filePath)) return null;

  try {
    const buffer = await sharp(filePath)
      .rotate() // Auto-orient based on camera metadata
      .resize(500, 500, {
        fit: "cover",
        position: "entropy" // Focuses on the face/highest detail region
      })
      .modulate({ brightness: 1.03, saturation: 1.05 }) // Subtle vibrant portrait color correction
      .sharpen({ sigma: 1.2, m1: 0.5, m2: 2.5 }) // High-end unsharp mask for portrait clarity
      .jpeg({ quality: 98 })
      .toBuffer();
    return `data:image/jpeg;base64,${buffer.toString("base64")}`;
  } catch (err) {
    console.error(`Error processing photo ${photoFile}:`, err);
    return null;
  }
}

function generateSVG(m, photoDataUri) {
  const name = xmlEscape(m.name);
  const dept = xmlEscape(m.dept);
  const inst = xmlEscape(m.institution);
  const highlight = xmlEscape(m.highlight);
  const q1 = xmlEscape(m.quote1);
  const q2 = xmlEscape(m.quote2);
  const q3 = xmlEscape(m.quote3);

  // Modern 160px portrait frame (rounded square with elegant dual border & glow)
  const avatarElement = photoDataUri
    ? `
    <defs>
      <clipPath id="clip-${m.slug}">
        <rect width="156" height="156" rx="28"/>
      </clipPath>
      <linearGradient id="avatar-border-${m.slug}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8"/>
        <stop offset="50%" stop-color="${m.accentColor}" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="${m.gradientColor}" stop-opacity="0.2"/>
      </linearGradient>
      <filter id="avatar-glow-${m.slug}" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="16" flood-color="${m.accentColor}" flood-opacity="0.4"/>
      </filter>
    </defs>
    <!-- Glow Background -->
    <rect width="160" height="160" rx="30" fill="${m.accentColor}" opacity="0.2" filter="url(#avatar-glow-${m.slug})"/>
    <!-- Outer Border -->
    <rect width="160" height="160" rx="30" fill="url(#avatar-border-${m.slug})"/>
    <rect x="2" y="2" width="156" height="156" rx="28" fill="#0B0F19"/>
    <!-- Clipped Image -->
    <g transform="translate(2, 2)">
      <image href="${photoDataUri}" clip-path="url(#clip-${m.slug})" width="156" height="156" preserveAspectRatio="xMidYMid slice"/>
    </g>
    <!-- Inner Highlight Rim -->
    <rect x="2" y="2" width="156" height="156" rx="28" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-opacity="0.25"/>`
    : `
    <rect width="160" height="160" rx="30" fill="${m.accentColor}" opacity="0.2"/>
    <rect width="160" height="160" rx="30" fill="#1E293B" stroke="${m.accentColor}" stroke-width="2"/>
    <text x="80" y="100" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="52" fill="#FFFFFF">${m.initials}</text>`;

  // Render tag pills
  const tagPills = m.tags.map((tag, idx) => {
    const xPos = idx * 290;
    return `
      <g transform="translate(${xPos}, 0)">
        <rect width="270" height="42" rx="12" fill="#1E293B" fill-opacity="0.7" stroke="#334155" stroke-width="1.2"/>
        <circle cx="22" cy="21" r="5" fill="${m.accentColor}"/>
        <text x="36" y="26" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14" fill="#E2E8F0">${xmlEscape(tag)}</text>
      </g>`;
  }).join("");

  return `<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bg-grad" x1="0" y1="0" x2="1080" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#070B14"/>
      <stop offset="50%" stop-color="#0B1120"/>
      <stop offset="100%" stop-color="#030712"/>
    </linearGradient>

    <!-- Card Background & Border -->
    <linearGradient id="card-border" x1="0" y1="0" x2="960" y2="760" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.18"/>
      <stop offset="50%" stop-color="${m.accentColor}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.05"/>
    </linearGradient>

    <!-- Ambient Glow Filter -->
    <filter id="ambient-blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="90"/>
    </filter>
  </defs>

  <!-- Deep Cosmic Background -->
  <rect width="1080" height="1080" fill="url(#bg-grad)"/>

  <!-- High-End Mesh Ambient Light Spotlights -->
  <circle cx="920" cy="180" r="320" fill="${m.accentColor}" opacity="0.18" filter="url(#ambient-blur)"/>
  <circle cx="120" cy="850" r="320" fill="${m.gradientColor}" opacity="0.15" filter="url(#ambient-blur)"/>

  <!-- Top Accent Bar -->
  <rect width="1080" height="5" fill="${m.accentColor}"/>

  <!-- TOP HEADER (60, 42) -->
  <g transform="translate(60, 42)">
    <!-- DeepBio Academic Emblem -->
    <g transform="translate(0, 0)">
      <rect width="44" height="44" rx="12" fill="${m.accentColor}"/>
      <path d="M22 12 L10 18 L22 24 L34 18 L22 12Z" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round" fill="none"/>
      <path d="M14 20 V27 C14 30 17.5 32 22 32 C26.5 32 30 30 30 27 V20" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" fill="none"/>
    </g>
    
    <text x="56" y="24" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">DeepBio <tspan fill="#38BDF8">Academy</tspan></text>
    <text x="56" y="40" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#94A3B8" letter-spacing="1.5">BIOINFORMATICS MENTORSHIP PROGRAM</text>

    <!-- Top-Right Cohort Badge -->
    <g transform="translate(690, 0)">
      <rect width="270" height="44" rx="22" fill="#1E293B" stroke="#334155" stroke-width="1.2"/>
      <circle cx="24" cy="22" r="6" fill="#10B981"/>
      <text x="144" y="27" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="13.5" fill="#F1F5F9">BMP Cohort 02 Mentee</text>
    </g>
  </g>

  <!-- ================= MAIN HERO GLASS CARD ================= -->
  <g transform="translate(60, 115)">
    <!-- Outer Gradient Border -->
    <rect width="960" height="760" rx="32" fill="url(#card-border)"/>
    <!-- Card Inner Fill -->
    <rect x="1.5" y="1.5" width="957" height="757" rx="30.5" fill="#0B1222" fill-opacity="0.92"/>

    <!-- Decorative Top-Right Subtle Watermark Quote -->
    <text x="880" y="160" text-anchor="end" font-family="Georgia, serif" font-weight="900" font-size="180" fill="${m.accentColor}" opacity="0.08">”</text>

    <!-- 1. MENTEE HERO PROFILE (x=45, y=45) -->
    <g transform="translate(45, 45)">
      ${avatarElement}

      <!-- Profile Details -->
      <g transform="translate(190, 10)">
        <text x="0" y="36" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="36" fill="#FFFFFF" letter-spacing="-0.5">${name}</text>
        <text x="0" y="70" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="19" fill="#38BDF8">${dept}</text>
        <text x="0" y="98" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="16" fill="#94A3B8">${inst}</text>

        <!-- Star Rating -->
        <g transform="translate(0, 126)">
          <text font-size="20" fill="#F59E0B" letter-spacing="3">★★★★★</text>
          <text x="125" y="-3" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14" fill="#64748B">Mentee Experience</text>
        </g>
      </g>
    </g>

    <!-- 2. CORE MILESTONE BANNER (x=45, y=240) -->
    <g transform="translate(45, 240)">
      <rect width="870" height="56" rx="16" fill="#131F37" stroke="${m.accentColor}" stroke-width="1.2" stroke-opacity="0.4"/>
      <circle cx="28" cy="28" r="12" fill="${m.accentColor}" opacity="0.25"/>
      <text x="28" y="33" text-anchor="middle" font-size="14">🎯</text>
      <text x="54" y="34" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="15" fill="${m.accentColor}">CORE MILESTONE:</text>
      <text x="215" y="34" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="15.5" fill="#F8FAFC">${highlight}</text>
    </g>

    <!-- 3. EDITORIAL QUOTE BLOCK (x=45, y=320) -->
    <g transform="translate(45, 320)">
      <rect width="870" height="260" rx="20" fill="#060A13" stroke="#1E293B" stroke-width="1.5"/>
      <!-- Left Accent Bar on Quote -->
      <rect x="0" y="20" width="4" height="220" rx="2" fill="${m.accentColor}"/>
      
      <text x="45" y="65" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="23" fill="#F1F5F9" line-height="1.5">${q1}</text>
      <text x="45" y="115" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="23" fill="#F1F5F9" line-height="1.5">${q2}</text>
      <text x="45" y="165" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="23" fill="#F1F5F9" line-height="1.5">${q3}</text>
    </g>

    <!-- 4. APPLIED RESEARCH DOMAINS PILLS (x=45, y=605) -->
    <g transform="translate(45, 605)">
      <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="13" fill="#64748B" letter-spacing="2">APPLIED RESEARCH DOMAINS</text>
      <g transform="translate(0, 14)">
        ${tagPills}
      </g>
    </g>

    <!-- 5. IN-CARD ADMISSIONS BAR (x=45, y=685) -->
    <g transform="translate(45, 685)">
      <rect width="870" height="52" rx="14" fill="#131F37" stroke="#334155" stroke-width="1"/>
      <circle cx="24" cy="26" r="6" fill="#10B981"/>
      <text x="38" y="31" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14" fill="#E2E8F0">BMP Cohort 03 Admissions Open</text>
      
      <text x="840" y="31" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="14" fill="${m.accentColor}">Starts Oct 2, 2026 &#8594;</text>
    </g>
  </g>

  <!-- ================= BOTTOM HIGH-IMPACT FOOTER ================= -->
  <g transform="translate(60, 905)">
    <!-- Primary CTA Gradient Button -->
    <rect width="960" height="80" rx="20" fill="url(#bottom-btn-grad-${m.slug})"/>
    <defs>
      <linearGradient id="bottom-btn-grad-${m.slug}" x1="0" y1="0" x2="960" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#2563EB"/>
        <stop offset="50%" stop-color="#4F46E5"/>
        <stop offset="100%" stop-color="#0D9488"/>
      </linearGradient>
    </defs>
    <text x="480" y="38" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">Master Bulk RNA-seq, Single-Cell, Spatial Omics &amp; Bio-AI</text>
    <text x="480" y="62" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="13" fill="#E0E7FF" letter-spacing="1.5">APPLY FOR COHORT 03 &#8226; LIMITED TO 20 PARTICIPANTS</text>
  </g>

  <!-- Target URL -->
  <text x="540" y="1025" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">deepbioacademy.com/programs/bmp</text>
  <text x="540" y="1050" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="14" fill="#64748B">12-Week Intensive Hands-on Research Mentorship</text>

  <!-- Bottom Accent Line -->
  <rect y="1075" width="1080" height="5" fill="#10B981"/>
</svg>`;
}

async function run() {
  console.log("Generating agency-grade ultra-clear photo-embedded testimonial SVGs & PNGs (300 DPI)...");

  for (const m of mentees) {
    const photoDataUri = await getPhotoDataUri(m.photoFile);
    const svgFilename = `testimonial-${m.slug}.svg`;
    const pngFilename = `testimonial-${m.slug}.png`;

    const svgPath = path.join(testSvgDir, svgFilename);
    const pngPath = path.join(testPngDir, pngFilename);

    const svgCode = generateSVG(m, photoDataUri);
    fs.writeFileSync(svgPath, svgCode, "utf-8");

    try {
      // High-DPI Sharp rendering (density: 300) with Lanczos3 anti-aliasing for razor-sharp text and graphics
      await sharp(Buffer.from(svgCode), { density: 300 })
        .resize(1080, 1080, { fit: "contain", kernel: "lanczos3" })
        .png({ quality: 100, compressionLevel: 7 })
        .toFile(pngPath);
      console.log(`Rendered Ultra-Crisp PNG: ${pngFilename}`);
    } catch (err) {
      console.error(`Error rendering ${pngFilename}:`, err);
    }
  }

  console.log("All premium testimonial cards generated successfully!");
}

run();
