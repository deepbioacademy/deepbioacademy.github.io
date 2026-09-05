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
    quote1: "“This mentorship fundamentally changed my perspective on research.",
    quote2: "I learned how to work with bioinformatics workflows, troubleshoot",
    quote3: "errors independently, and apply transcriptomics to real projects.”",
    domain: "Bulk RNA-Seq &#183; Workflow Troubleshooting &#183; Independent Research",
    initials: "SA",
    photoFile: "Screenshot 2026-07-03 215357 - sujana anjum.png"
  },
  {
    slug: "sharfuddin-safin",
    name: "Sharfuddin Safin",
    institution: "Islamic University, Kushtia",
    dept: "Biomedical Engineering",
    quote1: "“The transition from superficial GUI tools to code-based transcriptomics",
    quote2: "is the most rewarding. Handling raw sequencing data and statistical",
    quote3: "rigor gives you the autonomy to ask real scientific questions.”",
    domain: "Bulk &amp; Single-Cell RNA-Seq &#183; Raw Sequencing &#183; Statistical Rigor",
    initials: "SS",
    photoFile: "Sharfuddin Safin - Sharfuddin Shafin.jpeg"
  },
  {
    slug: "sumaya-mifty",
    name: "Dr. Sumaya Khan Mifty",
    institution: "Dhaka Medical College",
    dept: "Department of Medicine",
    quote1: "“As a doctor, genomics lies at the heart of healthcare improvement.",
    quote2: "BMP taught the ABCs of RNA-seq analysis in a structured, practical",
    quote3: "manner, giving me the confidence to explore transcriptomics in medicine.”",
    domain: "Clinical Genomics &#183; RNA-Seq in Healthcare &#183; Evidence-Based Medicine",
    initials: "SM",
    photoFile: "IMG_1069 - Sumaya Mifty.jpeg"
  },
  {
    slug: "tanvir-ahmed",
    name: "Tanvir Ahmed",
    institution: "Govt Unani & Ayurvedic Medical College",
    dept: "Department of Medicine & Surgery",
    quote1: "“As a medical student interested in cancer and neurogenomics, I wanted",
    quote2: "practical skills beyond theory. Complex topics in bulk and single-cell",
    quote3: "RNA-seq were explained in a remarkably clear and structured way.”",
    domain: "Bulk RNA-Seq &#183; Single-Cell Omics &#183; Cancer &amp; Neurogenomics",
    initials: "TA",
    photoFile: "Tanvir_Ahmed - TANVIR AHMED.jpeg"
  },
  {
    slug: "farah-ulfat",
    name: "Farah Ulfat",
    institution: "University of Rajshahi",
    dept: "Genetic Engineering & Biotechnology",
    quote1: "“The mentorship helped me approach research problems systematically",
    quote2: "and gave me clear direction on the exact computational skills",
    quote3: "needed to prepare for future biotechnology research opportunities.”",
    domain: "Systematic Data Analysis &#183; Biotech Research &#183; Career Direction",
    initials: "FU",
    photoFile: "IMG_20260526_142254 - Farah Ulfat.jpg"
  },
  {
    slug: "mantuka-masnoon",
    name: "Mantuka Masnoon Umama",
    institution: "North South University (NSU)",
    dept: "Department of Microbiology",
    quote1: "“I was searching for a platform to expand my skills in bioinformatics.",
    quote2: "This program provided insightful guidance on research methods,",
    quote3: "data analysis, scientific reasoning, and methodical problem-solving.”",
    domain: "Data Analysis &#183; Scientific Reasoning &#183; Advanced Omics Tools",
    initials: "MU",
    photoFile: "Mantuka_Masnoon_Umama - Mantuka Umama.jpg"
  },
  {
    slug: "ariful-amin",
    name: "Md Ariful Amin",
    institution: "University of Dhaka",
    dept: "Genetic Engineering & Biotechnology",
    quote1: "“As the mentor said: 'Real bioinformatics, no more toy tools.'",
    quote2: "Now I have the direction and materials to initiate computational biology.",
    quote3: "This mentorship expands my expertise and fuels my PhD admission.”",
    domain: "PhD Preparation &#183; Production Pipelines &#183; Computational Biology",
    initials: "AA",
    photoFile: null
  },
  {
    slug: "md-sohel-rahman",
    name: "Md Sohel Rahman",
    institution: "Gazipur Agricultural University",
    dept: "Veterinary Medicine & Animal Science",
    quote1: "“I learned bioinformatics in a structured and practical way.",
    quote2: "The course was well organized, highly informative, and engaging,",
    quote3: "giving me valuable hands-on skills for my research journey.”",
    domain: "Structured Curriculum &#183; Practical Omics Skills &#183; Hands-on Learning",
    initials: "SR",
    photoFile: "IMG_20260720_114532 - Sohel Rahman.jpeg"
  },
  {
    slug: "tasnim-haque-achal",
    name: "Tasnim Haque Achal",
    institution: "BRAC University",
    dept: "Department of Biotechnology",
    quote1: "“The sessions and resources helped me understand bioinformatics",
    quote2: "concepts and workflows with clarity. I especially appreciated the",
    quote3: "practical guidance and applying real pipelines to datasets.”",
    domain: "Hands-on Pipelines &#183; Real Datasets &#183; Practical Problem-Solving",
    initials: "TA",
    photoFile: "IMG_1559_Original - Tasnim Haque Achal.jpeg"
  },
  {
    slug: "tamanna-dilshad",
    name: "Tamanna Dilshad Phul",
    institution: "American International University-Bangladesh",
    dept: "Computer Science & Engineering",
    quote1: "“The mentorship helped me understand complex bioinformatics concepts,",
    quote2: "strengthen computational skills, and gain confidence in exploring",
    quote3: "future research opportunities at the intersection of CS and biology.”",
    domain: "CS to Bioinformatics &#183; Computational Skills &#183; Research Confidence",
    initials: "TP",
    photoFile: "IMG_20260429_141226_294 - Tamanna Dilshad.webp"
  },
  {
    slug: "suprokash-chakra",
    name: "Suprokash Chakra Borty",
    institution: "Khwaja Yunus Ali University",
    dept: "Biochemistry & Biotechnology",
    quote1: "“This mentorship helped me realize the current scenario of the",
    quote2: "bioinformatics landscape and guided me towards that path through",
    quote3: "hands-on, skill-based practical learning and real research pipelines.”",
    domain: "Global Omics Trends &#183; Skill-Based Learning &#183; Pipeline Mastery",
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
      .rotate() // Auto-orient EXIF
      .resize(400, 400, {
        fit: "cover",
        position: "entropy"
      })
      .modulate({ brightness: 1.02, saturation: 1.05 })
      .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
      .jpeg({ quality: 95 })
      .toBuffer();
    return `data:image/jpeg;base64,${buffer.toString("base64")}`;
  } catch (err) {
    console.error(`Error processing photo ${photoFile}:`, err);
    return null;
  }
}

function generateCleanSVG(m, photoDataUri) {
  const name = xmlEscape(m.name);
  const dept = xmlEscape(m.dept);
  const inst = xmlEscape(m.institution);
  const q1 = xmlEscape(m.quote1);
  const q2 = xmlEscape(m.quote2);
  const q3 = xmlEscape(m.quote3);
  const domain = m.domain; // Already has HTML/XML entities

  // Clean 130px Avatar with subtle 2px border
  const avatarElement = photoDataUri
    ? `
    <defs>
      <clipPath id="avatar-clip-${m.slug}">
        <circle cx="65" cy="65" r="63"/>
      </clipPath>
    </defs>
    <circle cx="65" cy="65" r="65" fill="#2563EB" opacity="0.4"/>
    <image href="${photoDataUri}" clip-path="url(#avatar-clip-${m.slug})" x="2" y="2" width="126" height="126" preserveAspectRatio="xMidYMid slice"/>
    <circle cx="65" cy="65" r="63" fill="none" stroke="#3B82F6" stroke-width="2.5"/>`
    : `
    <circle cx="65" cy="65" r="65" fill="#1E293B"/>
    <circle cx="65" cy="65" r="63" fill="none" stroke="#3B82F6" stroke-width="2.5"/>
    <text x="65" y="78" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="42" fill="#FFFFFF">${m.initials}</text>`;

  return `<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient: Deep Obsidian Navy -->
    <linearGradient id="bg-grad" x1="540" y1="0" x2="540" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="50%" stop-color="#090D1A"/>
      <stop offset="100%" stop-color="#030712"/>
    </linearGradient>

    <!-- DeepBio Brand Accent Glow -->
    <radialGradient id="hero-glow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#2563EB" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#2563EB" stop-opacity="0"/>
    </radialGradient>

    <!-- Glass Card Gradient -->
    <linearGradient id="card-border-grad" x1="0" y1="0" x2="940" y2="760" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#2563EB" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background Base -->
  <rect width="1080" height="1080" fill="url(#bg-grad)"/>
  <rect width="1080" height="1080" fill="url(#hero-glow)"/>

  <!-- Top DeepBio Brand Accent Bar -->
  <rect width="1080" height="5" fill="#2563EB"/>

  <!-- ================= TOP HEADER (y=55) ================= -->
  <g transform="translate(70, 55)">
    <!-- DeepBio Academic Emblem -->
    <rect width="44" height="44" rx="12" fill="#2563EB"/>
    <path d="M22 12 L10 18 L22 24 L34 18 L22 12Z" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round" fill="none"/>
    <path d="M14 20 V27 C14 30 17.5 32 22 32 C26.5 32 30 30 30 27 V20" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" fill="none"/>
    
    <!-- DeepBio Academy Typography -->
    <text x="56" y="24" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">DeepBio <tspan fill="#38BDF8">Academy</tspan></text>
    <text x="56" y="40" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#94A3B8" letter-spacing="1.5">BIOINFORMATICS MENTORSHIP PROGRAM</text>

    <!-- Top-Right Academic Track Badge -->
    <g transform="translate(680, 0)">
      <rect width="260" height="44" rx="22" fill="#1E293B" stroke="#334155" stroke-width="1.2"/>
      <circle cx="24" cy="22" r="6" fill="#10B981"/>
      <text x="140" y="27" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="13.5" fill="#F1F5F9">BMP Cohort 02 Mentee</text>
    </g>
  </g>

  <!-- ================= MAIN TESTIMONIAL CARD (y=130) ================= -->
  <g transform="translate(70, 130)">
    <!-- Elegant Card Border & Backdrop -->
    <rect width="940" height="730" rx="28" fill="url(#card-border-grad)"/>
    <rect x="1.5" y="1.5" width="937" height="727" rx="26.5" fill="#0F172A" fill-opacity="0.95"/>

    <!-- Large Decorative Quote Glyph -->
    <g transform="translate(55, 60)">
      <text x="0" y="0" font-family="Georgia, serif" font-weight="900" font-size="90" fill="#2563EB" opacity="0.4">“</text>
    </g>

    <!-- 1. EDITORIAL QUOTE TEXT (y=90) -->
    <g transform="translate(55, 95)">
      <text x="0" y="30" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="26" fill="#FFFFFF" line-height="1.5">${q1}</text>
      <text x="0" y="75" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="26" fill="#FFFFFF" line-height="1.5">${q2}</text>
      <text x="0" y="120" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="26" fill="#FFFFFF" line-height="1.5">${q3}</text>
    </g>

    <!-- Subtle Divider Line -->
    <line x1="55" y1="275" x2="885" y2="275" stroke="#1E293B" stroke-width="1.5"/>

    <!-- 2. MENTEE SPOTLIGHT PROFILE (y=305) -->
    <g transform="translate(55, 305)">
      <!-- Avatar (130px) -->
      ${avatarElement}

      <!-- Author Bio Details -->
      <g transform="translate(160, 15)">
        <text x="0" y="34" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="34" fill="#FFFFFF" letter-spacing="-0.3">${name}</text>
        <text x="0" y="68" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="18" fill="#38BDF8">${dept}</text>
        <text x="0" y="94" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="15" fill="#94A3B8">${inst}</text>

        <!-- Star Rating -->
        <g transform="translate(0, 122)">
          <text font-size="18" fill="#F59E0B" letter-spacing="2">★★★★★</text>
          <text x="110" y="-3" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="13" fill="#64748B">Mentee Experience</text>
        </g>
      </g>
    </g>

    <!-- 3. APPLIED RESEARCH DOMAIN BAR (y=495) -->
    <g transform="translate(55, 495)">
      <rect width="830" height="52" rx="14" fill="#1E293B" stroke="#334155" stroke-width="1"/>
      <circle cx="26" cy="26" r="6" fill="#10B981"/>
      <text x="44" y="31" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="13" fill="#38BDF8">RESEARCH FOCUS:</text>
      <text x="195" y="31" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="13.5" fill="#F8FAFC">${domain}</text>
    </g>

    <!-- 4. ADMISSIONS NOTICE (y=575) -->
    <g transform="translate(55, 575)">
      <rect width="830" height="110" rx="18" fill="#131F37" stroke="#2563EB" stroke-width="1.2" stroke-opacity="0.5"/>
      <g transform="translate(30, 36)">
        <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="20" fill="#FFFFFF">Join BMP Cohort 03 &#8226; Oct&#8211;Dec 2026</text>
        <text x="0" y="26" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="14" fill="#94A3B8">Bulk RNA-Seq &#8226; Single-Cell &#8226; Spatial Transcriptomics &#8226; AI Omics</text>
      </g>
      <!-- Action Arrow Pill -->
      <g transform="translate(640, 33)">
        <rect width="160" height="44" rx="22" fill="#2563EB"/>
        <text x="80" y="27" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="13" fill="#FFFFFF">Apply Now &#8594;</text>
      </g>
    </g>
  </g>

  <!-- ================= BOTTOM FOOTER (y=895) ================= -->
  <g transform="translate(540, 915)">
    <!-- Primary Clean Link -->
    <rect x="-350" y="0" width="700" height="60" rx="30" fill="#1E293B" stroke="#334155" stroke-width="1.2"/>
    <text x="0" y="37" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="21" fill="#FFFFFF">deepbioacademy.com/programs/bmp</text>

    <!-- Subtitle Note -->
    <text x="0" y="90" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="14" fill="#64748B">12-Week Intensive Hands-on Research Mentorship &#8226; Admissions Open</text>
  </g>

  <!-- Bottom Accent Line -->
  <rect y="1075" width="1080" height="5" fill="#10B981"/>
</svg>`;
}

async function run() {
  console.log("Generating clean, professional, unified-color testimonial cards...");

  for (const m of mentees) {
    const photoDataUri = await getPhotoDataUri(m.photoFile);
    const svgFilename = `testimonial-${m.slug}.svg`;
    const pngFilename = `testimonial-${m.slug}.png`;

    const svgPath = path.join(testSvgDir, svgFilename);
    const pngPath = path.join(testPngDir, pngFilename);

    const svgCode = generateCleanSVG(m, photoDataUri);
    fs.writeFileSync(svgPath, svgCode, "utf-8");

    try {
      await sharp(Buffer.from(svgCode), { density: 300 })
        .resize(1080, 1080, { fit: "contain", kernel: "lanczos3" })
        .png({ quality: 100, compressionLevel: 7 })
        .toFile(pngPath);
      console.log(`Rendered Clean Executive Card: ${pngFilename}`);
    } catch (err) {
      console.error(`Error rendering ${pngFilename}:`, err);
    }
  }

  console.log("All professional testimonial cards regenerated successfully!");
}

run();
