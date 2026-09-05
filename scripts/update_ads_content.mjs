import fs from "fs";
import path from "path";
import sharp from "sharp";

const svgDir = path.resolve("public/bmp_ads/svg");
const pngDir = path.resolve("public/bmp_ads/png");

if (!fs.existsSync(pngDir)) {
  fs.mkdirSync(pngDir, { recursive: true });
}

// Map of ad-specific content updates
const updates = [
  {
    file: "fb-ad-cancer-research.svg",
    replacements: [
      { from: /Cohort 02: July–Sept 2026/g, to: "Cohort 03: Oct–Dec 2026" },
      { from: /Nextflow/g, to: "Python" },
      { from: /Docker/g, to: "Spatial Omics" },
      { from: /Deep Learning/g, to: "Bio-AI & ML" }
    ]
  },
  {
    file: "fb-ad-drug-discovery.svg",
    replacements: [
      { from: /Cohort 02: July–Sept 2026/g, to: "Cohort 03: Oct–Dec 2026" },
      { from: /Nextflow/g, to: "Python & R" },
      { from: /AutoDock/g, to: "AI Bio-Models" }
    ]
  },
  {
    file: "fb-ad-neuroscience.svg",
    replacements: [
      { from: /Cohort 02: July–Sept 2026/g, to: "Cohort 03: Oct–Dec 2026" },
      { from: /Nextflow/g, to: "Spatial Visium" },
      { from: /Docker/g, to: "Python & R" }
    ]
  },
  {
    file: "fb-ad-precision-medicine.svg",
    replacements: [
      { from: /Cohort 02: July–Sept 2026/g, to: "Cohort 03: Oct–Dec 2026" },
      { from: /Nextflow/g, to: "Python & R" },
      { from: /Docker/g, to: "Spatial Omics" }
    ]
  },
  {
    file: "fb-ad-launch-career.svg",
    replacements: [
      { from: /Nextflow/g, to: "Spatial HD" },
      { from: /Docker/g, to: "Bio-AI/ML" },
      { from: /Claude AI/g, to: "Agentic AI" }
    ]
  },
  {
    file: "fb-ad-phd-ready.svg",
    replacements: [
      { from: /Deadline: June 25/g, to: "Starts Oct 2, 2026" },
      { from: /Nextflow \+ Docker — production-grade/g, to: "Spatial Transcriptomics & AI" },
      { from: /workflows for any research lab/g, to: "Visium HD, Python, R & ML models" }
    ]
  },
  {
    file: "fb-ad-deadline.svg",
    replacements: [
      { from: /COHORT 02 APPLICATIONS OPEN/g, to: "COHORT 03 ADMISSIONS OPEN" },
      { from: /July – September 2026 \| 12-Week Intensive/g, to: "October – December 2026 | 12-Week Intensive" },
      { from: /JUNE 25/g, to: "OCTOBER 2" },
      { from: /Nextflow, Docker, Linux\/HPC/g, to: "Linux HPC, Python, R & Bio-AI" },
      { from: /Claude Code &amp; Gemini CLI/g, to: "Machine Learning & Agentic Bio-AI" }
    ]
  },
  {
    file: "fb-ad-discount.svg",
    replacements: [
      { from: /JUNE FLASH OFFER/g, to: "COHORT 03 ADMISSION" },
      { from: /Join by June 25 to lock in this rate/g, to: "Enroll for Cohort 03 (Starts Oct 2, 2026)" },
      { from: /Nextflow &amp; Docker Mastery/g, to: "Spatial Transcriptomics & AI" },
      { from: /AI Productivity Training/g, to: "Bio-AI & Machine Learning" }
    ]
  },
  {
    file: "fb-ad-info-session.svg",
    replacements: [
      { from: /JUNE 20, 2026/g, to: "OCTOBER 2, 2026" },
      { from: /June 20, 2026/g, to: "October 2, 2026" },
      { from: /Nextflow/g, to: "Python" }
    ]
  },
  {
    file: "fb-ad-right-fit.svg",
    replacements: [
      { from: /Nextflow/g, to: "Python" },
      { from: /Docker/g, to: "Spatial Omics" }
    ]
  },
  {
    file: "fb-ad-testimonial.svg",
    replacements: [
      { from: /Nextflow/g, to: "Python" }
    ]
  }
];

// Process all files
const allFiles = fs.readdirSync(svgDir).filter((f) => f.endsWith(".svg"));

for (const file of allFiles) {
  const filePath = path.join(svgDir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // Global replacements
  content = content.replace(/Cohort 02/g, "Cohort 03");
  content = content.replace(/Cohort 01/g, "Cohort 03");
  content = content.replace(/Cohort 2/g, "Cohort 3");
  content = content.replace(/Cohort 1/g, "Cohort 3");
  content = content.replace(/July[–-]Sept(ember)? 2026/g, "Oct–Dec 2026");
  content = content.replace(/July 3/g, "Oct 2");
  content = content.replace(/Starts Tomorrow, July 3/g, "Starts Oct 2, 2026");
  content = content.replace(/Starts Tomorrow, Oct 2/g, "Starts Oct 2, 2026");
  content = content.replace(/CHIRAL Bangladesh/g, "DeepBio Academy");
  content = content.replace(/CHIRAL/g, "DeepBio");
  content = content.replace(/mdjubayerhossain\.com\/bmp/g, "deepbioacademy.com/programs/bmp");
  content = content.replace(/mdjubayerhossain\.com/g, "deepbioacademy.com/programs/bmp");
  content = content.replace(/deepbio\.academy\/programs\/bmp/g, "deepbioacademy.com/programs/bmp");
  content = content.replace(/deepbio\.academy\/bmp/g, "deepbioacademy.com/programs/bmp");
  content = content.replace(/deepbio\.academy/g, "deepbioacademy.com/programs/bmp");

  // Apply targeted updates if any
  const targetUpdate = updates.find((u) => u.file === file);
  if (targetUpdate) {
    for (const rep of targetUpdate.replacements) {
      content = content.replace(rep.from, rep.to);
    }
  }

  // Fix unescaped ampersands in XML
  content = content.replace(/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g, "&amp;");

  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`Updated content for SVG: ${file}`);
}

// Convert all to high quality PNGs
async function convertAll() {
  console.log("\nRendering PNGs with Sharp...");
  for (const file of allFiles) {
    const filePath = path.join(svgDir, file);
    const pngName = file.replace(/\.svg$/, ".png");
    const outPngPath = path.join(pngDir, pngName);

    try {
      const svgBuffer = fs.readFileSync(filePath);
      await sharp(svgBuffer, { density: 150 })
        .resize(1080, 1080, { fit: "contain", background: { r: 15, g: 23, b: 42, alpha: 0 } })
        .png({ quality: 95, compressionLevel: 8 })
        .toFile(outPngPath);

      console.log(`Converted: ${pngName}`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }
  console.log("\nAll PNG conversions complete!");
}

convertAll();
