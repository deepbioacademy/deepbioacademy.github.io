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
    skills: ["Bulk RNA-Seq", "Workflow Troubleshooting", "Independent Research"],
    initials: "SA",
    photoFile: "Screenshot 2026-07-03 215357 - sujana anjum.png",
    cropGravity: "center"
  },
  {
    slug: "farah-ulfat",
    name: "Farah Ulfat",
    institution: "University of Rajshahi",
    dept: "Genetic Engineering & Biotechnology",
    quote1: "“The mentorship helped me approach research problems systematically",
    quote2: "and gave me clear direction on the exact computational skills",
    quote3: "needed to prepare for future biotechnology research opportunities.”",
    skills: ["Systematic Data Analysis", "Biotech Research", "Career Direction"],
    initials: "FU",
    photoFile: "IMG_20260526_142254 - Farah Ulfat.jpg",
    cropGravity: "north" // Focus on upper region/face
  },
  {
    slug: "sumaya-mifty",
    name: "Dr. Sumaya Khan Mifty",
    institution: "Dhaka Medical College",
    dept: "Department of Medicine",
    quote1: "“As a doctor, genomics lies at the heart of healthcare improvement.",
    quote2: "BMP taught the ABCs of RNA-seq analysis in a structured, practical",
    quote3: "manner, giving me the confidence to explore transcriptomics in medicine.”",
    skills: ["Medical Genomics", "RNA-Seq in Healthcare", "Evidence-Based Medicine"],
    initials: "SM",
    photoFile: "IMG_1069 - Sumaya Mifty.jpeg",
    cropGravity: "north" // Focus on face
  },
  {
    slug: "sharfuddin-safin",
    name: "Sharfuddin Safin",
    institution: "Islamic University, Kushtia",
    dept: "Biomedical Engineering",
    quote1: "“The transition from superficial GUI tools to code-based transcriptomics",
    quote2: "is the most rewarding. Handling raw sequencing data and statistical",
    quote3: "rigor gives you the autonomy to ask real scientific questions.”",
    skills: ["Bulk & Single-Cell", "Raw Sequencing Data", "Statistical Rigor"],
    initials: "SS",
    photoFile: "Sharfuddin Safin - Sharfuddin Shafin.jpeg",
    cropGravity: "center"
  },
  {
    slug: "tanvir-ahmed",
    name: "Tanvir Ahmed",
    institution: "Govt Unani & Ayurvedic Medical College",
    dept: "Department of Medicine & Surgery",
    quote1: "“As a medical student interested in cancer & neurogenomics, I wanted",
    quote2: "practical skills beyond theory. Complex topics in bulk and single-cell",
    quote3: "RNA-seq were explained in a remarkably clear and structured way.”",
    skills: ["Bulk RNA-Seq", "Single-Cell Omics", "Cancer & Neurogenomics"],
    initials: "TA",
    photoFile: "Tanvir_Ahmed - TANVIR AHMED.jpeg",
    cropGravity: "center"
  },
  {
    slug: "mantuka-masnoon",
    name: "Mantuka Masnoon Umama",
    institution: "North South University (NSU)",
    dept: "Department of Microbiology",
    quote1: "“I was searching for a platform to expand my skills in bioinformatics.",
    quote2: "This program provided insightful guidance on research methods,",
    quote3: "data analysis, scientific reasoning, and methodical problem-solving.”",
    skills: ["Data Analysis", "Scientific Reasoning", "Advanced Omics Tools"],
    initials: "MU",
    photoFile: "Mantuka_Masnoon_Umama - Mantuka Umama.jpg",
    cropGravity: "center"
  },
  {
    slug: "md-sohel-rahman",
    name: "Md Sohel Rahman",
    institution: "Gazipur Agricultural University",
    dept: "Veterinary Medicine & Animal Science",
    quote1: "“I learned bioinformatics in a structured and practical way.",
    quote2: "The course was well organized, highly informative, and engaging,",
    quote3: "giving me valuable hands-on skills for my research journey.”",
    skills: ["Structured Curriculum", "Practical Omics Skills", "Hands-on Learning"],
    initials: "SR",
    photoFile: "IMG_20260720_114532 - Sohel Rahman.jpeg",
    cropGravity: "north" // Focus on face
  },
  {
    slug: "tasnim-haque-achal",
    name: "Tasnim Haque Achal",
    institution: "BRAC University",
    dept: "Department of Biotechnology",
    quote1: "“The sessions and resources helped me understand bioinformatics",
    quote2: "concepts and workflows with clarity. I especially appreciated the",
    quote3: "practical guidance and applying real pipelines to datasets.”",
    skills: ["Hands-on Pipelines", "Real Datasets", "Practical Problem-Solving"],
    initials: "TA",
    photoFile: "IMG_1559_Original - Tasnim Haque Achal.jpeg",
    cropGravity: "north" // Focus on face
  },
  {
    slug: "tamanna-dilshad",
    name: "Tamanna Dilshad Phul",
    institution: "American International University-Bangladesh",
    dept: "Computer Science & Engineering",
    quote1: "“The mentorship helped me understand complex bioinformatics concepts,",
    quote2: "strengthen computational skills, and gain confidence in exploring",
    quote3: "future research opportunities at the intersection of CS and biology.”",
    skills: ["CS to Bioinformatics", "Computational Skills", "Research Confidence"],
    initials: "TP",
    photoFile: "IMG_20260429_141226_294 - Tamanna Dilshad.webp",
    cropGravity: "north" // Focus on face
  },
  {
    slug: "suprokash-chakra",
    name: "Suprokash Chakra Borty",
    institution: "Khwaja Yunus Ali University",
    dept: "Biochemistry & Biotechnology",
    quote1: "“This mentorship helped me realize the current scenario of the",
    quote2: "bioinformatics landscape and guided me towards that path through",
    quote3: "hands-on, skill-based practical learning and real research pipelines.”",
    skills: ["Global Omics Trends", "Skill-Based Learning", "Pipeline Mastery"],
    initials: "SC",
    photoFile: "Screenshot 2025-04-11 152931 - Suprokash Chakra Borty.jpg",
    cropGravity: "center"
  },
  {
    slug: "ariful-amin",
    name: "Md Ariful Amin",
    institution: "University of Dhaka",
    dept: "Genetic Engineering & Biotechnology",
    quote1: "“As the mentor said: 'Real bioinformatics, no more toy tools.'",
    quote2: "Now I have the direction and materials to initiate computational biology.",
    quote3: "This mentorship expands my expertise and fuels my PhD admission.”",
    skills: ["PhD Preparation", "Production Pipelines", "Computational Biology"],
    initials: "AA",
    photoFile: null,
    cropGravity: "center"
  }
];

async function getPhotoDataUri(photoFile, cropGravity = "center") {
  if (!photoFile) return null;
  const filePath = path.join(photoDir, photoFile);
  if (!fs.existsSync(filePath)) return null;

  try {
    const buffer = await sharp(filePath)
      .rotate() // Auto-orient EXIF
      .resize(400, 400, {
        fit: "cover",
        position: cropGravity === "north" ? sharp.gravity.north : sharp.gravity.center
      })
      .modulate({ brightness: 1.02, saturation: 1.05 })
      .sharpen({ sigma: 1.2, m1: 0.5, m2: 2 })
      .jpeg({ quality: 95 })
      .toBuffer();
    return `data:image/jpeg;base64,${buffer.toString("base64")}`;
  } catch (err) {
    console.error(`Error processing photo ${photoFile}:`, err);
    return null;
  }
}

function generateRefinedSVG(m, photoDataUri) {
  const name = xmlEscape(m.name);
  const dept = xmlEscape(m.dept);
  const inst = xmlEscape(m.institution);
  const q1 = xmlEscape(m.quote1);
  const q2 = xmlEscape(m.quote2);
  const q3 = xmlEscape(m.quote3);

  // Avatar (130px diameter) with perfect face alignment & crisp border
  const avatarElement = photoDataUri
    ? `
    <defs>
      <clipPath id="avatar-clip-${m.slug}">
        <circle cx="65" cy="65" r="62"/>
      </clipPath>
    </defs>
    <circle cx="65" cy="65" r="65" fill="#2563EB"/>
    <image href="${photoDataUri}" clip-path="url(#avatar-clip-${m.slug})" x="3" y="3" width="124" height="124" preserveAspectRatio="xMidYMid slice"/>
    <circle cx="65" cy="65" r="63" fill="none" stroke="#60A5FA" stroke-width="2.5"/>`
    : `
    <circle cx="65" cy="65" r="65" fill="#1E293B"/>
    <circle cx="65" cy="65" r="63" fill="none" stroke="#60A5FA" stroke-width="2.5"/>
    <text x="65" y="78" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="42" fill="#FFFFFF">${m.initials}</text>`;

  // Skills Pills
  const skillsPills = m.skills.map((s, idx) => {
    const xPos = idx * 280;
    return `
      <g transform="translate(${xPos}, 0)">
        <rect width="265" height="38" rx="19" fill="#131C31" stroke="#334155" stroke-width="1.2"/>
        <circle cx="20" cy="19" r="4.5" fill="#10B981"/>
        <text x="34" y="24" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="13" fill="#E2E8F0">${xmlEscape(s)}</text>
      </g>`;
  }).join("");

  return `<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bg-grad" x1="0" y1="0" x2="1080" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#080C17"/>
      <stop offset="50%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#040711"/>
    </linearGradient>

    <!-- Card Glass Border -->
    <linearGradient id="card-rim" x1="0" y1="0" x2="960" y2="800" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.35"/>
      <stop offset="40%" stop-color="#2563EB" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.06"/>
    </linearGradient>
  </defs>

  <!-- Background Base -->
  <rect width="1080" height="1080" fill="url(#bg-grad)"/>

  <!-- Top Brand Accent Bar -->
  <rect width="1080" height="5" fill="#2563EB"/>

  <!-- ================= 1. TOP HEADER (y=50) ================= -->
  <g transform="translate(60, 50)">
    <!-- DeepBio Emblem -->
    <rect width="44" height="44" rx="12" fill="#2563EB"/>
    <path d="M22 12 L10 18 L22 24 L34 18 L22 12Z" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round" fill="none"/>
    <path d="M14 20 V27 C14 30 17.5 32 22 32 C26.5 32 30 30 30 27 V20" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" fill="none"/>
    
    <text x="56" y="24" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">DeepBio <tspan fill="#38BDF8">Academy</tspan></text>
    <text x="56" y="40" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#94A3B8" letter-spacing="1.5">BIOINFORMATICS MENTORSHIP PROGRAM</text>

    <!-- Top Right Badge -->
    <g transform="translate(690, 0)">
      <rect width="270" height="44" rx="22" fill="#1E293B" stroke="#334155" stroke-width="1.2"/>
      <circle cx="24" cy="22" r="5.5" fill="#10B981"/>
      <text x="144" y="27" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="13.5" fill="#F1F5F9">Cohort 02 Mentee Spotlight</text>
    </g>
  </g>

  <!-- ================= 2. MAIN CONTAINER CARD (y=118) ================= -->
  <g transform="translate(60, 118)">
    <!-- Outer Card Shell -->
    <rect width="960" height="800" rx="28" fill="url(#card-rim)"/>
    <rect x="1.5" y="1.5" width="957" height="797" rx="26.5" fill="#0C1322" fill-opacity="0.98"/>

    <!-- A. MENTEE PROFILE HEADER (y=40) -->
    <g transform="translate(45, 40)">
      ${avatarElement}

      <!-- Author Information -->
      <g transform="translate(155, 12)">
        <text x="0" y="32" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="34" fill="#FFFFFF" letter-spacing="-0.3">${name}</text>
        <text x="0" y="62" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="18" fill="#38BDF8">${dept}</text>
        <text x="0" y="88" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="15" fill="#94A3B8">${inst}</text>

        <!-- Rating Stars & Label -->
        <g transform="translate(0, 114)">
          <text font-size="18" fill="#F59E0B" letter-spacing="3">★★★★★</text>
          <text x="120" y="-3" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="13" fill="#64748B">Mentee Experience</text>
        </g>
      </g>
    </g>

    <!-- B. DEDICATED QUOTE BOX CONTAINER (y=210) -->
    <g transform="translate(45, 210)">
      <!-- Quote Card Box with Border & Left Accent -->
      <rect width="870" height="270" rx="20" fill="#060A14" stroke="#1E293B" stroke-width="1.5"/>
      <rect x="0" y="25" width="4.5" height="220" rx="2.2" fill="#2563EB"/>

      <!-- Quotation Mark -->
      <text x="40" y="60" font-family="Georgia, serif" font-weight="900" font-size="54" fill="#2563EB" opacity="0.7">“</text>

      <!-- Inside-Box Quote Typography -->
      <g transform="translate(40, 95)">
        <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="24" fill="#F1F5F9" line-height="1.6">${q1}</text>
        <text x="0" y="48" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="24" fill="#F1F5F9" line-height="1.6">${q2}</text>
        <text x="0" y="96" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="24" fill="#F1F5F9" line-height="1.6">${q3}</text>
      </g>
    </g>

    <!-- C. RESEARCH SKILLS PILLS (y=505) -->
    <g transform="translate(45, 505)">
      <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" fill="#64748B" letter-spacing="1.8">KEY RESEARCH SKILLS</text>
      <g transform="translate(0, 14)">
        ${skillsPills}
      </g>
    </g>

    <!-- D. INTEGRATED ADMISSIONS CALLOUT (y=580) -->
    <g transform="translate(45, 580)">
      <rect width="870" height="175" rx="20" fill="#070D1A" stroke="#1E293B" stroke-width="1.5"/>

      <!-- Left Callout Content -->
      <g transform="translate(35, 48)">
        <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="24" fill="#FFFFFF">Join BMP Cohort 03</text>
        <text x="0" y="30" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="15" fill="#38BDF8">Starts October 2, 2026 &#8226; 12-Week Intensive</text>
        <text x="0" y="58" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="14" fill="#94A3B8">Bulk RNA-Seq &#8226; Single-Cell &#8226; Spatial Omics &#8226; Bio-AI Pipelines</text>
      </g>

      <!-- Right Action Button -->
      <g transform="translate(645, 58)">
        <rect width="185" height="56" rx="28" fill="#2563EB"/>
        <text x="92" y="34" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="16" fill="#FFFFFF">Apply Now &#8594;</text>
      </g>
    </g>
  </g>

  <!-- ================= 3. BOTTOM FOOTER LINK (y=948) ================= -->
  <g transform="translate(540, 955)">
    <rect x="-320" y="0" width="640" height="52" rx="26" fill="#0F172A" stroke="#1E293B" stroke-width="1.2"/>
    <text x="0" y="33" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="20" fill="#FFFFFF">deepbioacademy.com/programs/bmp</text>
    <text x="0" y="80" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="13.5" fill="#64748B">Limited to 30 Participants &#8226; Academic &amp; Research Career Accelerator</text>
  </g>

  <!-- Bottom Accent Line -->
  <rect y="1075" width="1080" height="5" fill="#10B981"/>
</svg>`;
}

async function run() {
  console.log("Generating refined photo-centered testimonials with enclosed quote box (300 DPI)...");

  for (const m of mentees) {
    const photoDataUri = await getPhotoDataUri(m.photoFile, m.cropGravity);
    const svgFilename = `testimonial-${m.slug}.svg`;
    const pngFilename = `testimonial-${m.slug}.png`;

    const svgPath = path.join(testSvgDir, svgFilename);
    const pngPath = path.join(testPngDir, pngFilename);

    const svgCode = generateRefinedSVG(m, photoDataUri);
    fs.writeFileSync(svgPath, svgCode, "utf-8");

    try {
      await sharp(Buffer.from(svgCode), { density: 300 })
        .resize(1080, 1080, { fit: "contain", kernel: "lanczos3" })
        .png({ quality: 100, compressionLevel: 7 })
        .toFile(pngPath);
      console.log(`Rendered Perfectly Formatted Card: ${pngFilename}`);
    } catch (err) {
      console.error(`Error rendering ${pngFilename}:`, err);
    }
  }

  console.log("All perfected testimonial cards generated successfully!");
}

run();
