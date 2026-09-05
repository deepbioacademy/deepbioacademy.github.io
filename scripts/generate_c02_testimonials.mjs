import fs from "fs";
import path from "path";
import sharp from "sharp";

const svgDir = path.resolve("public/bmp_ads/svg");
const pngDir = path.resolve("public/bmp_ads/png");

if (!fs.existsSync(pngDir)) {
  fs.mkdirSync(pngDir, { recursive: true });
}

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
    initials: "SA"
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
    initials: "MU"
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
    initials: "SS"
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
    initials: "TA"
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
    initials: "FU"
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
    initials: "SM"
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
    initials: "AA"
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
    initials: "SR"
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
    initials: "TA"
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
    initials: "TP"
  }
];

function generateSVG(m) {
  const name = xmlEscape(m.name);
  const dept = xmlEscape(m.dept);
  const inst = xmlEscape(m.institution);
  const highlight = xmlEscape(m.highlight);
  const q1 = xmlEscape(m.quoteLine1);
  const q2 = xmlEscape(m.quoteLine2);
  const q3 = xmlEscape(m.quoteLine3);
  const badge = xmlEscape(m.badge);

  return `<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Background: Deep Slate Gradient -->
  <rect width="1080" height="1080" fill="#0F172A"/>

  <!-- Subtle Ambient Glows -->
  <circle cx="950" cy="180" r="350" fill="${m.avatarBg}" opacity="0.12"/>
  <circle cx="120" cy="900" r="300" fill="#10B981" opacity="0.08"/>

  <!-- Top Accent Bar -->
  <rect width="1080" height="6" fill="${m.avatarBg}"/>

  <!-- Header Branding -->
  <g transform="translate(70, 55)">
    <!-- Emblem -->
    <rect width="46" height="46" rx="12" fill="${m.avatarBg}"/>
    <path d="M23 12 L10 19 L23 26 L36 19 L23 12Z" stroke="#FFFFFF" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
    <path d="M14 21 V28 C14 31 18 33 23 33 C28 33 32 31 32 28 V21" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" fill="none"/>
    
    <!-- Title -->
    <text x="60" y="28" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="24" fill="#FFFFFF">DeepBio <tspan fill="#38BDF8">Academy</tspan></text>
    <text x="60" y="46" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="12" fill="#94A3B8" letter-spacing="1">BIOINFORMATICS MENTORSHIP PROGRAM</text>
  </g>

  <!-- Verified Participant Badge -->
  <rect x="730" y="55" width="280" height="42" rx="21" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
  <circle cx="752" cy="76" r="6" fill="#10B981"/>
  <text x="872" y="82" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14" fill="#E2E8F0">BMP Cohort 02 Mentee</text>

  <!-- Large Decorative Quote Glyph -->
  <text x="70" y="230" font-family="Georgia, serif" font-weight="900" font-size="120" fill="${m.avatarBg}" opacity="0.4">“</text>

  <!-- Mentee Profile Block -->
  <g transform="translate(70, 240)">
    <!-- Avatar circle with Initials -->
    <circle cx="50" cy="50" r="50" fill="${m.avatarBg}"/>
    <text x="50" y="62" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="34" fill="#FFFFFF">${m.initials}</text>

    <!-- Name & Department -->
    <text x="125" y="40" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="34" fill="#FFFFFF">${name}</text>
    <text x="125" y="70" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="18" fill="#38BDF8">${dept}</text>
    <text x="125" y="96" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="16" fill="#94A3B8">${inst}</text>
  </g>

  <!-- Key Highlight Tag -->
  <g transform="translate(70, 395)">
    <rect width="940" height="52" rx="14" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
    <text x="24" y="32" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="16" fill="${m.avatarBg}">KEY MILESTONE:</text>
    <text x="180" y="32" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="16" fill="#F8FAFC">${highlight}</text>
  </g>

  <!-- Quote Container -->
  <g transform="translate(70, 480)">
    <rect width="940" height="230" rx="20" fill="#020617" stroke="#1E293B" stroke-width="2"/>
    
    <text x="45" y="65" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="23" fill="#F1F5F9">${q1}</text>
    <text x="45" y="110" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="23" fill="#F1F5F9">${q2}</text>
    <text x="45" y="155" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="23" fill="#F1F5F9">${q3}</text>

    <!-- 5 Star Rating -->
    <g transform="translate(45, 195)">
      <text font-size="20" fill="#F59E0B">★★★★★</text>
      <text x="110" y="-3" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14" fill="#64748B">Verified Mentee Experience</text>
    </g>
  </g>

  <!-- Skills / Badges -->
  <g transform="translate(70, 745)">
    <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="14" fill="#64748B" letter-spacing="2">APPLIED RESEARCH DOMAINS</text>
    <rect y="12" width="940" height="48" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <circle cx="24" cy="36" r="6" fill="#10B981"/>
    <text x="42" y="41" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="15" fill="#38BDF8">${badge}</text>
  </g>

  <!-- CTA Banner -->
  <g transform="translate(70, 835)">
    <rect width="940" height="85" rx="20" fill="url(#cta-grad-${m.slug})"/>
    <defs>
      <linearGradient id="cta-grad-${m.slug}" x1="0" y1="0" x2="940" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#2563EB"/>
        <stop offset="50%" stop-color="#4F46E5"/>
        <stop offset="100%" stop-color="#0D9488"/>
      </linearGradient>
    </defs>
    <text x="470" y="40" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="24" fill="#FFFFFF">Join BMP Cohort 03 (Starts Oct 2, 2026)</text>
    <text x="470" y="66" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="13" fill="#E2E8F0" letter-spacing="1">12-WEEK INTENSIVE RESEARCH &amp; BIO-AI ACCELERATOR</text>
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
  console.log("Generating Cohort 02 Participant Testimonial SVGs and PNGs...");

  for (const m of mentees) {
    const svgFilename = `testimonial-${m.slug}.svg`;
    const pngFilename = `testimonial-${m.slug}.png`;

    const svgPath = path.join(svgDir, svgFilename);
    const pngPath = path.join(pngDir, pngFilename);

    const svgCode = generateSVG(m);
    fs.writeFileSync(svgPath, svgCode, "utf-8");

    try {
      await sharp(Buffer.from(svgCode), { density: 150 })
        .resize(1080, 1080)
        .png({ quality: 95, compressionLevel: 8 })
        .toFile(pngPath);
      console.log(`Generated: ${pngFilename}`);
    } catch (err) {
      console.error(`Error rendering ${pngFilename}:`, err);
    }
  }

  console.log("All testimonial cards generated successfully!");
}

run();
