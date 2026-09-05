import fs from "fs";
import path from "path";
import sharp from "sharp";

const svgOutPath = path.resolve("public/bmp_ads/modules/svg/bmp-module-01-computational-foundation.svg");
const pngOutPath = path.resolve("public/bmp_ads/modules/png/bmp-module-01-computational-foundation.png");

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

const module1Data = {
  num: "01",
  tag: "MODULE 01 · COMPUTATIONAL FOUNDATIONS",
  title: "Module 1: Computational Foundation",
  centralMessage: "“Bioinformatics Workflow Setup: Building Your Computational Foundation”",
  topics: [
    {
      title: "Bioinformatics Workflow Setup",
      subtitle: "Building Your Computational Foundation",
      desc: "HPC cluster connection, Conda environment isolation, reproducible pipelines, and GitHub version control.",
      color: "#0284C7"
    },
    {
      title: "Command Line for Omics Science",
      subtitle: "Unix, NGS Formats & Bash Scripting",
      desc: "Master essential Unix commands, Bash automation, and parsing raw NGS formats (FASTQ, FASTA, BAM, VCF).",
      color: "#2563EB"
    },
    {
      title: "Programming in Bioinformatics: Python",
      subtitle: "Python Fundamentals & Data Structures",
      desc: "Core Python syntax, BioPython sequence parsing, high-performance NumPy arrays, and Pandas DataFrames.",
      color: "#10B981"
    },
    {
      title: "Programming in Bioinformatics: R",
      subtitle: "R Fundamentals & Bioconductor",
      desc: "R programming, RStudio workflows, Bioconductor packages, tidyverse wrangling, and ggplot2 figures.",
      color: "#8B5CF6"
    }
  ],
  techTags: [
    { name: "Linux CLI", w: 95 },
    { name: "Bash Scripting", w: 115 },
    { name: "Conda Envs", w: 100 },
    { name: "NGS Data Formats", w: 135 },
    { name: "Python & BioPython", w: 140 },
    { name: "R & Bioconductor", w: 135 },
    { name: "Git & GitHub", w: 105 }
  ]
};

function generateModule1SVG() {
  const m = module1Data;

  const topicCards = m.topics.map((t, idx) => {
    const x = idx % 2 === 0 ? 0 : 445;
    const y = Math.floor(idx / 2) * 105;
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
        
        <!-- Description with clean word wrap -->
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
    <linearGradient id="bg-grad-mod1" x1="0" y1="0" x2="1080" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#080C17"/>
      <stop offset="50%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#030610"/>
    </linearGradient>

    <!-- Glass Card Rim -->
    <linearGradient id="card-rim-mod1" x1="0" y1="0" x2="960" y2="820" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.45"/>
      <stop offset="50%" stop-color="#0284C7" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.06"/>
    </linearGradient>

    <!-- Ambient Glow Filter -->
    <filter id="ambient-glow-mod1" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="80"/>
    </filter>

    <filter id="card-shadow" x="-10%" y="-5%" width="120%" height="115%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="1080" height="1080" fill="url(#bg-grad-mod1)"/>

  <!-- High-End Mesh Ambient Light Spotlights -->
  <circle cx="880" cy="180" r="320" fill="#0284C7" opacity="0.2" filter="url(#ambient-glow-mod1)"/>
  <circle cx="150" cy="850" r="300" fill="#2563EB" opacity="0.15" filter="url(#ambient-glow-mod1)"/>

  <!-- Top Accent Bar -->
  <rect width="1080" height="5" fill="#0284C7"/>

  <!-- ================= 1. HEADER (y=42) ================= -->
  <g transform="translate(60, 42)">
    <!-- DeepBio Emblem -->
    <rect width="44" height="44" rx="12" fill="#0284C7"/>
    <path d="M22 12 L10 18 L22 24 L34 18 L22 12Z" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round" fill="none"/>
    <path d="M14 20 V27 C14 30 17.5 32 22 32 C26.5 32 30 30 30 27 V20" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" fill="none"/>
    
    <text x="56" y="24" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">DeepBio <tspan fill="#38BDF8">Academy</tspan></text>
    <text x="56" y="40" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#94A3B8" letter-spacing="1.5">BIOINFORMATICS MENTORSHIP PROGRAM (BMP-C03)</text>

    <!-- Top Right Module Badge -->
    <g transform="translate(660, 0)">
      <rect width="300" height="44" rx="22" fill="#1E293B" stroke="#334155" stroke-width="1.2"/>
      <circle cx="24" cy="22" r="6" fill="#0284C7"/>
      <text x="160" y="27" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" fill="#F1F5F9">MODULE 01 · FOUNDATIONS</text>
    </g>
  </g>

  <!-- ================= 2. MAIN HERO SPOTLIGHT CARD (y=110) ================= -->
  <g transform="translate(60, 110)">
    <!-- Outer Glass Card Shell -->
    <rect width="960" height="805" rx="28" fill="url(#card-rim-mod1)"/>
    <rect x="1.5" y="1.5" width="957" height="802" rx="26.5" fill="#0B1222" fill-opacity="0.98"/>

    <!-- A. Module Title & Central Hook Message (y=30) -->
    <g transform="translate(45, 30)">
      <text x="0" y="32" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="36" fill="#FFFFFF" letter-spacing="-0.5">${xmlEscape(m.title)}</text>
      
      <!-- Central Hook Quote -->
      <rect y="46" width="870" height="50" rx="14" fill="#131F37" stroke="#0284C7" stroke-width="1.2" stroke-opacity="0.6"/>
      <text x="25" y="78" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="16.5" fill="#38BDF8">${xmlEscape(m.centralMessage)}</text>
    </g>

    <!-- B. HERO DUAL-ENVIRONMENT CODE CANVAS (y=142) -->
    <g transform="translate(45, 142)">
      <!-- Panel 1: Linux CLI & Bash Pipeline (Left, Width: 425) -->
      <g transform="translate(0, 0)">
        <rect width="425" height="195" rx="12" fill="#020617" stroke="#1E293B" stroke-width="1.5"/>
        <!-- Window Bar -->
        <rect width="425" height="28" rx="12" fill="#0F172A"/>
        <rect y="16" width="425" height="12" fill="#0F172A"/>
        <circle cx="16" cy="14" r="4" fill="#EF4444"/>
        <circle cx="28" cy="14" r="4" fill="#F59E0B"/>
        <circle cx="40" cy="14" r="4" fill="#10B981"/>
        <text x="212" y="18" text-anchor="middle" font-family="monospace" font-weight="700" font-size="10" fill="#94A3B8">bash — hpc-node:~/pipeline.sh</text>

        <!-- Bash Code -->
        <g transform="translate(15, 48)">
          <text y="0" font-family="monospace" font-weight="700" font-size="11" fill="#38BDF8">#!/usr/bin/env bash</text>
          <text y="18" font-family="monospace" font-weight="700" font-size="11" fill="#10B981">conda activate bmp_omics_env</text>
          <text y="36" font-family="monospace" font-weight="500" font-size="10.5" fill="#94A3B8"># Process raw NGS data formats</text>
          <text y="54" font-family="monospace" font-weight="700" font-size="11" fill="#F59E0B">for fq in raw_reads/*_R1.fastq.gz; do</text>
          <text y="72" font-family="monospace" font-weight="500" font-size="10.5" fill="#E2E8F0">  fastp -i $fq -I \${fq/_R1/_R2} -o clean/</text>
          <text y="90" font-family="monospace" font-weight="500" font-size="10.5" fill="#60A5FA">  samtools view -bS aln.sam &gt; aln.bam</text>
          <text y="108" font-family="monospace" font-weight="700" font-size="11" fill="#34D399">  bcftools call -mv -Ov -o vars.vcf aln.bam</text>
          <text y="126" font-family="monospace" font-weight="700" font-size="11" fill="#F59E0B">done</text>
        </g>
      </g>

      <!-- Panel 2: Python & R Programming Canvas (Right, Width: 425) -->
      <g transform="translate(445, 0)">
        <rect width="425" height="195" rx="12" fill="#020617" stroke="#1E293B" stroke-width="1.5"/>
        <!-- Window Bar -->
        <rect width="425" height="28" rx="12" fill="#0F172A"/>
        <rect y="16" width="425" height="12" fill="#0F172A"/>
        <circle cx="16" cy="14" r="4" fill="#3B82F6"/>
        <circle cx="28" cy="14" r="4" fill="#10B981"/>
        <circle cx="40" cy="14" r="4" fill="#F59E0B"/>
        <text x="212" y="18" text-anchor="middle" font-family="monospace" font-weight="700" font-size="10" fill="#94A3B8">Python &amp; R — interactive_bio.py / .R</text>

        <!-- Python & R Code -->
        <g transform="translate(15, 48)">
          <text y="0" font-family="monospace" font-weight="700" font-size="11" fill="#38BDF8"># Python: BioPython &amp; Pandas</text>
          <text y="18" font-family="monospace" font-weight="500" font-size="10.5" fill="#E2E8F0">from Bio import SeqIO; import pandas as pd</text>
          <text y="36" font-family="monospace" font-weight="500" font-size="10.5" fill="#FBBF24">df = pd.DataFrame([rec.id for rec in SeqIO.parse()])</text>
          
          <line x1="0" y1="52" x2="395" y2="52" stroke="#1E293B" stroke-width="1"/>
          
          <text y="68" font-family="monospace" font-weight="700" font-size="11" fill="#A78BFA"># R: Bioconductor &amp; ggplot2</text>
          <text y="86" font-family="monospace" font-weight="500" font-size="10.5" fill="#E2E8F0">library(BiocManager); library(DESeq2)</text>
          <text y="104" font-family="monospace" font-weight="500" font-size="10.5" fill="#6EE7B7">dds &lt;- DESeqDataSetFromMatrix(countData, colData)</text>
          <text y="122" font-family="monospace" font-weight="700" font-size="11" fill="#38BDF8">ggplot(pca_data, aes(PC1, PC2)) + geom_point()</text>
        </g>
      </g>
    </g>

    <!-- C. 4 CORE CURRICULUM PILLARS (y=355) -->
    <g transform="translate(45, 355)">
      <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" fill="#64748B" letter-spacing="1.8">MODULE 1 CORE SYLLABUS BREAKDOWN</text>
      <g transform="translate(0, 12)">
        ${topicCards}
      </g>
    </g>

    <!-- D. TECH STACK RIBBON (y=582) -->
    <g transform="translate(45, 582)">
      <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="11" fill="#64748B" letter-spacing="1.5">STACK &amp; TOOLS YOU WILL MASTER:</text>
      <g transform="translate(0, 10)">
        ${techBadges}
      </g>
    </g>

    <!-- E. INTEGRATED ADMISSIONS CALLOUT (y=640) -->
    <g transform="translate(45, 640)">
      <rect width="870" height="135" rx="18" fill="#131F37" stroke="#0284C7" stroke-width="1.2" stroke-opacity="0.6"/>

      <!-- Content Left -->
      <g transform="translate(30, 36)">
        <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF">Join BMP Cohort 03 &#8226; Starts October 2, 2026</text>
        <text x="0" y="26" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14.5" fill="#38BDF8">12-Week Research Mentorship &#8226; 25 Live Sessions &#8226; 30 Seats Limit</text>
        <text x="0" y="52" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="13" fill="#94A3B8">Build a rock-solid foundation in Linux, Bash, Python &amp; R for High-Throughput Omics</text>
      </g>

      <!-- Action Button Right -->
      <g transform="translate(660, 42)">
        <rect width="180" height="52" rx="26" fill="#0284C7"/>
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
  <rect y="1075" width="1080" height="5" fill="#0284C7"/>
</svg>`;
}

async function run() {
  console.log("Generating Clean-Wrapped Module 1 Ad (600 DPI Ultra-HD)...");

  const svgCode = generateModule1SVG();
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
