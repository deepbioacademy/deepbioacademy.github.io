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
    quoteLine1: "“This mentorship fundamentally changed my perspective on research.",
    quoteLine2: "I learned how to work with bioinformatics tools and workflows,",
    quoteLine3: "troubleshoot errors, and gain confidence working independently.”",
    badge: "Bulk RNA-Seq · Workflow Troubleshooting · Research Confidence",
    avatarBg: "#2563EB",
    initials: "SA",
    photoFile: "Screenshot 2026-07-03 215357 - sujana anjum.png"
  },
  {
    slug: "mantuka-masnoon",
    name: "Mantuka Masnoon Umama",
    institution: "North South University (NSU)",
    dept: "Department of Microbiology",
    highlight: "Scientific Reasoning & Advanced Omics Tools",
    quoteLine1: "“I was searching for a platform to expand my skills in bioinformatics.",
    quoteLine2: "This mentorship gave me insightful advice on research methods, data",
    quoteLine3: "analysis, scientific reasoning, and tackled problems methodically.”",
    badge: "Data Analysis · Methodical Reasoning · Advanced Tools",
    avatarBg: "#0D9488",
    initials: "MU",
    photoFile: "Mantuka_Masnoon_Umama - Mantuka Umama.jpg"
  },
  {
    slug: "sharfuddin-safin",
    name: "Sharfuddin Safin",
    institution: "Islamic University, Kushtia",
    dept: "Biomedical Engineering",
    highlight: "From 'Click-and-Run' to True Computational Literacy",
    quoteLine1: "“The transition from superficial GUI tools to code-based transcriptomics",
    quoteLine2: "is one of the most rewarding. Handling raw sequencing data, normalization,",
    quoteLine3: "and differential expression gives you the autonomy to ask real questions.”",
    badge: "Bulk & Single-Cell RNA-seq · Raw FASTQ · Rigorous Statistics",
    avatarBg: "#4F46E5",
    initials: "SS",
    photoFile: "Sharfuddin Safin - Sharfuddin Shafin.jpeg"
  },
  {
    slug: "tanvir-ahmed",
    name: "Tanvir Ahmed",
    institution: "Govt Unani & Ayurvedic Medical College",
    dept: "Department of Medicine & Surgery",
    highlight: "Doctor's Pathway to Omics & Neurogenomics",
    quoteLine1: "“As a medical student interested in cancer & neurogenomics,",
    quoteLine2: "I wanted practical skills beyond theory. Complex topics in bulk",
    quoteLine3: "and scRNA-seq were explained in a structured, practical manner.”",
    badge: "Bulk RNA-seq · scRNA-seq · Cancer & Neurogenomics",
    avatarBg: "#0284C7",
    initials: "TA",
    photoFile: "Tanvir_Ahmed - TANVIR AHMED.jpeg"
  },
  {
    slug: "farah-ulfat",
    name: "Farah Ulfat",
    institution: "University of Rajshahi",
    dept: "Genetic Engineering & Biotechnology",
    highlight: "Systematic Research & Biotech Career Preparation",
    quoteLine1: "“The mentorship helped me approach research problems systematically",
    quoteLine2: "and gave me clearer direction on skills to develop for future",
    quoteLine3: "research opportunities in biotechnology & computational biology.”",
    badge: "Systematic Analysis · Biotech Career · Independent Research",
    avatarBg: "#9333EA",
    initials: "FU",
    photoFile: "IMG_20260526_142254 - Farah Ulfat.jpg"
  },
  {
    slug: "sumaya-mifty",
    name: "Dr. Sumaya Khan Mifty",
    institution: "Dhaka Medical College",
    dept: "Department of Medicine",
    highlight: "Bridging RNA-Seq into Evidence-Based Medicine",
    quoteLine1: "“As a doctor, genomics lies at the heart of improving healthcare.",
    quoteLine2: "BMP successfully taught the ABCs of RNA-seq analysis in a structured",
    quoteLine3: "way, giving me confidence to explore transcriptomics in medicine.”",
    badge: "Medical Genomics · RNA-seq in Healthcare · Evidence-Based Medicine",
    avatarBg: "#E11D48",
    initials: "SM",
    photoFile: "IMG_1069 - Sumaya Mifty.jpeg"
  },
  {
    slug: "md-sohel-rahman",
    name: "Md Sohel Rahman",
    institution: "Gazipur Agricultural University",
    dept: "Veterinary Medicine & Animal Science",
    highlight: "Structured & Practical Bioinformatics Learning",
    quoteLine1: "“I learned bioinformatics in a structured and practical way.",
    quoteLine2: "The course was well organized, informative, and engaging, giving me",
    quoteLine3: "valuable practical skills for my academic and research journey.”",
    badge: "Structured Curriculum · Practical Skills · Hands-on Learning",
    avatarBg: "#D97706",
    initials: "SR",
    photoFile: "IMG_20260720_114532 - Sohel Rahman.jpeg"
  },
  {
    slug: "tasnim-haque-achal",
    name: "Tasnim Haque Achal",
    institution: "BRAC University",
    dept: "Department of Biotechnology",
    highlight: "Hands-on Workflows & Real-World Problem Solving",
    quoteLine1: "“The sessions and resources helped me understand bioinformatics",
    quoteLine2: "concepts and workflows more clearly. I especially appreciated",
    quoteLine3: "the practical guidance and hands-on tasks across real datasets.”",
    badge: "Hands-on Tasks · Clear Workflows · Practical Problem-Solving",
    avatarBg: "#059669",
    initials: "TA",
    photoFile: "IMG_1559_Original - Tasnim Haque Achal.jpeg"
  },
  {
    slug: "tamanna-dilshad",
    name: "Tamanna Dilshad Phul",
    institution: "American International University-Bangladesh",
    dept: "Computer Science & Engineering",
    highlight: "CS to Bioinformatics & Interdisciplinary Career",
    quoteLine1: "“The mentorship helped me understand complex bioinformatics concepts,",
    quoteLine2: "improve computational skills, and gain confidence in exploring",
    quoteLine3: "future career opportunities in computational biology.”",
    badge: "CSE to Omics · Computational Skills · Career Confidence",
    avatarBg: "#4338CA",
    initials: "TP",
    photoFile: "IMG_20260429_141226_294 - Tamanna Dilshad.webp"
  },
  {
    slug: "suprokash-chakra",
    name: "Suprokash Chakra Borty",
    institution: "Khwaja Yunus Ali University",
    dept: "Biochemistry & Biotechnology",
    highlight: "Navigating the Global Bioinformatics Landscape",
    quoteLine1: "“This mentorship helped me realize the current scenario of the",
    quoteLine2: "Bioinformatics world and drove me towards that path through",
    quoteLine3: "hands-on, skill-based practical learning and pipelines.”",
    badge: "Global Omics Trends · Skill-Based Learning · Research Direction",
    avatarBg: "#0891B2",
    initials: "SC",
    photoFile: "Screenshot 2025-04-11 152931 - Suprokash Chakra Borty.jpg"
  },
  {
    slug: "ariful-amin",
    name: "Md Ariful Amin",
    institution: "University of Dhaka",
    dept: "Genetic Engineering & Biotechnology",
    highlight: "Real Bioinformatics For MS/PhD Readiness",
    quoteLine1: "“As the mentor said: 'Real bioinformatics, no more toy tools.'",
    quoteLine2: "Now I have the direction and materials to initiate computational biology.",
    quoteLine3: "This mentorship expands my expertise and fuels my PhD admission.”",
    badge: "PhD Readiness · Production Workflows · Computational Biology",
    avatarBg: "#16A34A",
    initials: "AA",
    photoFile: null
  }
];

async function getPhotoDataUri(photoFile) {
  if (!photoFile) return null;
  const filePath = path.join(photoDir, photoFile);
  if (!fs.existsSync(filePath)) return null;

  try {
    const buffer = await sharp(filePath)
      .rotate() // Auto-orient based on EXIF
      .resize(400, 400, { fit: "cover", position: "entropy" })
      .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
      .jpeg({ quality: 95 })
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
  const q1 = xmlEscape(m.quoteLine1);
  const q2 = xmlEscape(m.quoteLine2);
  const q3 = xmlEscape(m.quoteLine3);
  const badge = xmlEscape(m.badge);

  // Avatar size: diameter 140px (r=70), cx=70, cy=70
  const avatarElement = photoDataUri
    ? `
    <defs>
      <clipPath id="clip-${m.slug}">
        <circle cx="70" cy="70" r="66"/>
      </clipPath>
      <filter id="avatar-shadow-${m.slug}" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="${m.avatarBg}" flood-opacity="0.35"/>
      </filter>
    </defs>
    <!-- Outer Glow & Ring -->
    <circle cx="70" cy="70" r="70" fill="#1E293B" filter="url(#avatar-shadow-${m.slug})"/>
    <circle cx="70" cy="70" r="68" fill="${m.avatarBg}"/>
    <circle cx="70" cy="70" r="66" fill="#0F172A"/>
    <!-- Photo Image -->
    <image href="${photoDataUri}" clip-path="url(#clip-${m.slug})" x="4" y="4" width="132" height="132" preserveAspectRatio="xMidYMid slice"/>
    <!-- Crisp Outer Border Ring -->
    <circle cx="70" cy="70" r="67" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-opacity="0.9"/>`
    : `
    <circle cx="70" cy="70" r="70" fill="${m.avatarBg}"/>
    <circle cx="70" cy="70" r="66" fill="#1E293B"/>
    <text x="70" y="85" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="44" fill="#FFFFFF">${m.initials}</text>
    <circle cx="70" cy="70" r="68" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-opacity="0.8"/>`;

  return `<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Background: Premium Dark Slate with Mesh Gradients -->
  <rect width="1080" height="1080" fill="#0F172A"/>

  <!-- Radial Background Lighting -->
  <circle cx="950" cy="180" r="400" fill="${m.avatarBg}" opacity="0.15"/>
  <circle cx="120" cy="920" r="350" fill="#10B981" opacity="0.1"/>

  <!-- Top Accent Bar -->
  <rect width="1080" height="6" fill="${m.avatarBg}"/>

  <!-- Header Branding -->
  <g transform="translate(70, 50)">
    <!-- DeepBio Academic Emblem -->
    <rect width="48" height="48" rx="14" fill="${m.avatarBg}"/>
    <path d="M24 13 L11 20 L24 27 L37 20 L24 13Z" stroke="#FFFFFF" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
    <path d="M15 22 V30 C15 33 19 35 24 35 C29 35 33 33 33 30 V22" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round" fill="none"/>
    
    <!-- Title & Track -->
    <text x="64" y="30" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="26" fill="#FFFFFF">DeepBio <tspan fill="#38BDF8">Academy</tspan></text>
    <text x="64" y="48" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="12" fill="#94A3B8" letter-spacing="1.5">BIOINFORMATICS MENTORSHIP PROGRAM</text>
  </g>

  <!-- Verified Participant Pill Badge -->
  <g transform="translate(740, 50)">
    <rect width="270" height="46" rx="23" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
    <circle cx="26" cy="23" r="7" fill="#10B981"/>
    <text x="148" y="29" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14" fill="#E2E8F0">BMP Cohort 02 Mentee</text>
  </g>

  <!-- Large Stylized Background Quote Glyph -->
  <text x="65" y="235" font-family="Georgia, serif" font-weight="900" font-size="140" fill="${m.avatarBg}" opacity="0.35">“</text>

  <!-- Mentee Profile Block (High Visibility Avatar & Text) -->
  <g transform="translate(70, 220)">
    ${avatarElement}

    <!-- Name, Department & Institution -->
    <g transform="translate(170, 0)">
      <text x="0" y="45" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="38" fill="#FFFFFF" letter-spacing="-0.5">${name}</text>
      <text x="0" y="82" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="20" fill="#38BDF8">${dept}</text>
      <text x="0" y="112" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="17" fill="#94A3B8">${inst}</text>
    </g>
  </g>

  <!-- Key Highlight Tag Box -->
  <g transform="translate(70, 390)">
    <rect width="940" height="54" rx="16" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
    <circle cx="30" cy="27" r="10" fill="${m.avatarBg}" opacity="0.3"/>
    <text x="30" y="32" text-anchor="middle" font-size="13">🎯</text>
    <text x="56" y="34" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="16" fill="${m.avatarBg}">CORE MILESTONE:</text>
    <text x="215" y="34" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="16" fill="#F8FAFC">${highlight}</text>
  </g>

  <!-- Quote Card Block (Spacious, High Contrast) -->
  <g transform="translate(70, 470)">
    <rect width="940" height="240" rx="24" fill="#020617" stroke="#1E293B" stroke-width="2"/>
    
    <text x="45" y="68" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="23" fill="#F8FAFC">${q1}</text>
    <text x="45" y="114" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="23" fill="#F8FAFC">${q2}</text>
    <text x="45" y="160" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="23" fill="#F8FAFC">${q3}</text>

    <!-- Star Rating -->
    <g transform="translate(45, 202)">
      <text font-size="22" fill="#F59E0B">★★★★★</text>
      <text x="125" y="-4" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="15" fill="#64748B">Mentee Experience</text>
    </g>
  </g>

  <!-- Applied Research Domains Pill -->
  <g transform="translate(70, 740)">
    <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="14" fill="#64748B" letter-spacing="2">APPLIED RESEARCH DOMAINS</text>
    <rect y="12" width="940" height="50" rx="14" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <circle cx="28" cy="37" r="7" fill="#10B981"/>
    <text x="48" y="42" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="16" fill="#38BDF8">${badge}</text>
  </g>

  <!-- High-Impact CTA Banner -->
  <g transform="translate(70, 830)">
    <rect width="940" height="90" rx="22" fill="url(#cta-grad-${m.slug})"/>
    <defs>
      <linearGradient id="cta-grad-${m.slug}" x1="0" y1="0" x2="940" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#2563EB"/>
        <stop offset="50%" stop-color="#4F46E5"/>
        <stop offset="100%" stop-color="#0D9488"/>
      </linearGradient>
    </defs>
    <text x="470" y="42" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="25" fill="#FFFFFF">Join BMP Cohort 03 (Starts Oct 2, 2026)</text>
    <text x="470" y="70" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14" fill="#E2E8F0" letter-spacing="1">12-WEEK INTENSIVE RESEARCH &amp; BIO-AI ACCELERATOR</text>
  </g>

  <!-- Footer Link -->
  <g transform="translate(540, 975)">
    <text text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="18" fill="#64748B">Admissions Open · Limited to 20 Participants</text>
    <text y="35" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="24" fill="#FFFFFF">deepbioacademy.com/programs/bmp</text>
  </g>

  <!-- Bottom Accent -->
  <rect y="1074" width="1080" height="6" fill="#10B981"/>
</svg>`;
}

async function run() {
  console.log("Generating high-clarity photo-embedded testimonial SVGs and PNGs...");

  for (const m of mentees) {
    const photoDataUri = await getPhotoDataUri(m.photoFile);
    const svgFilename = `testimonial-${m.slug}.svg`;
    const pngFilename = `testimonial-${m.slug}.png`;

    const svgPath = path.join(testSvgDir, svgFilename);
    const pngPath = path.join(testPngDir, pngFilename);

    const svgCode = generateSVG(m, photoDataUri);
    fs.writeFileSync(svgPath, svgCode, "utf-8");

    try {
      await sharp(Buffer.from(svgCode), { density: 150 })
        .resize(1080, 1080)
        .png({ quality: 95, compressionLevel: 8 })
        .toFile(pngPath);
      console.log(`Generated with high clarity: ${pngFilename}`);
    } catch (err) {
      console.error(`Error rendering ${pngFilename}:`, err);
    }
  }

  console.log("All high-clarity photo testimonials generated successfully!");
}

run();
