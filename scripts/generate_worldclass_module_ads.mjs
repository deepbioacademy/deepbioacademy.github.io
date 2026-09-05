import fs from "fs";
import path from "path";
import sharp from "sharp";

const svgOutPath = path.resolve("public/bmp_ads/modules/svg/bmp-module-01-computational-foundation.svg");
const pngOutPath = path.resolve("public/bmp_ads/modules/png/bmp-module-01-computational-foundation.png");

fs.mkdirSync(path.dirname(svgOutPath), { recursive: true });
fs.mkdirSync(path.dirname(pngOutPath), { recursive: true });

// Official Authentic Vector Logo Definitions
const officialPythonLogoSvg = `
<g transform="scale(0.55)">
  <!-- Python Top Blue Snake -->
  <path d="M19.8 0C8.9 0 9.5 4.8 9.5 4.8L9.5 9.7L19.9 9.7L19.9 11.2L5.9 11.2C-0.3 11.2 0 19.8 0 19.8C0 19.8 0 26.5 0 28.4C0 30.3 1.2 34.3 9.5 34.3L12.3 34.3L12.3 29.8C12.3 24.7 16.9 24.8 16.9 24.8L27.4 24.8C31.5 24.8 34.2 21.9 34.2 17.9L34.2 8.4C34.2 4.4 30.7 0 19.8 0ZM13.8 3.5C15.1 3.5 16.2 4.6 16.2 5.9C16.2 7.2 15.1 8.3 13.8 8.3C12.5 8.3 11.4 7.2 11.4 5.9C11.4 4.6 12.5 3.5 13.8 3.5Z" fill="#387EB8"/>
  <!-- Python Bottom Yellow Snake -->
  <path d="M20.2 40C31.1 40 30.5 35.2 30.5 35.2L30.5 30.3L20.1 30.3L20.1 28.8L34.1 28.8C40.3 28.8 40 20.2 40 20.2C40 20.2 40 13.5 40 11.6C40 9.7 38.8 5.7 30.5 5.7L27.7 5.7L27.7 10.2C27.7 15.3 23.1 15.2 23.1 15.2L12.6 15.2C8.5 15.2 5.8 18.1 5.8 22.1L5.8 31.6C5.8 35.6 9.3 40 20.2 40ZM26.2 36.5C24.9 36.5 23.8 35.4 23.8 34.1C23.8 32.8 24.9 31.7 26.2 31.7C27.5 31.7 28.6 32.8 28.6 34.1C28.6 35.4 27.5 36.5 26.2 36.5Z" fill="#FFE052"/>
</g>
`;

const officialRLogoSvg = `
<g transform="scale(0.65)">
  <!-- Outer Blue/Grey Oval -->
  <path d="M21.5 2C10.2 2 1 9.2 1 18C1 26.8 10.2 34 21.5 34C32.8 34 42 26.8 42 18C42 9.2 32.8 2 21.5 2ZM20 28C13.4 28 8 23.5 8 18C8 12.5 13.4 8 20 8C26.6 8 32 12.5 32 18C32 23.5 26.6 28 20 28Z" fill="#276DC3"/>
  <!-- Bold R letterform -->
  <path d="M14 10 L23 10 C27.5 10 30.5 12.2 30.5 15.8 C30.5 18.8 28.2 20.8 24.5 21.2 L32 30 L25.5 30 L18.8 21.8 L18.8 30 L14 30 Z M18.8 14 L18.8 18.2 L22.5 18.2 C24.8 18.2 26 17.4 26 16.1 C26 14.8 24.8 14 22.5 14 Z" fill="#1B5B9E"/>
</g>
`;

function generateWorldClassAdSVG() {
  return `<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Premium Dark Tech Radial Background -->
    <radialGradient id="bg-spotlight" cx="50%" cy="22%" r="85%" fx="50%" fy="15%">
      <stop offset="0%" stop-color="#142646"/>
      <stop offset="45%" stop-color="#0A101D"/>
      <stop offset="100%" stop-color="#03060C"/>
    </radialGradient>

    <!-- Cyan/Blue Atmospheric Glows -->
    <linearGradient id="cyan-glow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>

    <linearGradient id="headline-grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="40%" stop-color="#60A5FA"/>
      <stop offset="100%" stop-color="#A78BFA"/>
    </linearGradient>

    <!-- Top-Right Premium Badge Gradient -->
    <linearGradient id="badge-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="50%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>

    <!-- Glowing Button Gradient -->
    <linearGradient id="btn-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>

    <!-- Glassmorphic Card Surface -->
    <linearGradient id="glass-surface" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.02"/>
    </linearGradient>

    <!-- Card Rim Gradient -->
    <linearGradient id="glass-rim" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.55"/>
      <stop offset="50%" stop-color="#2563EB" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.05"/>
    </linearGradient>

    <!-- Filters for 3D Depth & Glow -->
    <filter id="card-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.6"/>
    </filter>

    <filter id="badge-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#2563EB" flood-opacity="0.45"/>
    </filter>

    <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#2563EB" flood-opacity="0.5"/>
    </filter>

    <filter id="soft-glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="50"/>
    </filter>
  </defs>

  <!-- Deep Canvas Background -->
  <rect width="1080" height="1080" fill="url(#bg-spotlight)"/>

  <!-- Atmospheric Lighting Orbs -->
  <circle cx="540" cy="180" r="320" fill="#0284C7" opacity="0.16" filter="url(#soft-glow)"/>
  <circle cx="150" cy="520" r="260" fill="#2563EB" opacity="0.14" filter="url(#soft-glow)"/>
  <circle cx="920" cy="650" r="280" fill="#6366F1" opacity="0.12" filter="url(#soft-glow)"/>

  <!-- Subtle Tech Dot Grid Pattern -->
  <g opacity="0.05">
    <pattern id="dot-grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fill="#FFFFFF"/>
    </pattern>
    <rect width="1080" height="1080" fill="url(#dot-grid)"/>
  </g>

  <!-- Top Blue Accent Line -->
  <rect width="1080" height="4" fill="url(#cyan-glow)"/>

  <!-- ================= 1. HEADER BRANDING (y=45) ================= -->
  <g transform="translate(60, 45)">
    <!-- DeepBio Emblem -->
    <g transform="translate(0, 0)">
      <rect width="50" height="50" rx="14" fill="#0F1E36" stroke="#2563EB" stroke-width="1.5"/>
      <path d="M25 14 L12 21 L25 28 L38 21 L25 14Z" stroke="#38BDF8" stroke-width="2.2" stroke-linejoin="round" fill="none"/>
      <path d="M16 23.5 V31 C16 34.5 20 37 25 37 C30 37 34 34.5 34 31 V23.5" stroke="#60A5FA" stroke-width="2" stroke-linejoin="round" fill="none"/>
    </g>
    
    <text x="66" y="28" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="25" fill="#FFFFFF" letter-spacing="-0.3">DeepBio <tspan fill="#38BDF8">Academy</tspan></text>
    <text x="66" y="46" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="11" fill="#94A3B8" letter-spacing="1.5">BIOINFORMATICS MENTORSHIP PROGRAM</text>

    <!-- Top Right Premium Glowing Cohort 03 Badge -->
    <g transform="translate(630, 0)" filter="url(#badge-glow)">
      <!-- Outer Badge Container -->
      <rect width="330" height="52" rx="26" fill="url(#badge-grad)" stroke="#60A5FA" stroke-width="1.5"/>
      
      <!-- Pulse Live Indicator Left -->
      <g transform="translate(18, 14)">
        <circle cx="12" cy="12" r="10" fill="#22C55E" opacity="0.25"/>
        <circle cx="12" cy="12" r="5" fill="#4ADE80"/>
      </g>

      <!-- Badge Text Lines -->
      <g transform="translate(52, 21)">
        <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="13.5" fill="#FFFFFF" letter-spacing="0.5">BMP COHORT 03 &#8226; MODULE 01</text>
        <text x="0" y="17" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="11" fill="#FDE047" letter-spacing="0.8">STARTS OCT 2, 2026 &#8226; 30 SEATS ONLY</text>
      </g>
    </g>
  </g>

  <!-- ================= 2. HERO HEADLINE & VALUE HOOK (y=135) ================= -->
  <g transform="translate(60, 135)">
    <!-- Small Category Pill -->
    <rect width="250" height="26" rx="13" fill="#1E293B" stroke="#0284C7" stroke-width="1"/>
    <text x="125" y="17" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="11" fill="#38BDF8" letter-spacing="1">COMPUTATIONAL FOUNDATION</text>

    <!-- Huge Impactful Ad Headline -->
    <text y="70" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="46" fill="#FFFFFF" letter-spacing="-1">Master Linux, Python &amp; R</text>
    <text y="122" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="44" fill="url(#headline-grad)" letter-spacing="-1">For High-Throughput Omics</text>
    
    <!-- Subtitle Hook -->
    <text y="162" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="17" fill="#CBD5E1">
      Build a rock-solid computational workflow to process, analyze &amp; publish genomic data.
    </text>
  </g>

  <!-- ================= 3. HERO VISUAL 3D COMPOSITION (y=315) ================= -->
  <g transform="translate(60, 315)">
    <!-- Main Centerpiece Glass Card -->
    <rect width="960" height="245" rx="20" fill="url(#glass-surface)" stroke="url(#glass-rim)" stroke-width="1.5" filter="url(#card-shadow)"/>

    <!-- Left Sub-Panel: Linux Cluster & NGS Automation -->
    <g transform="translate(25, 18)">
      <rect width="440" height="205" rx="14" fill="#030712" stroke="#1F2937" stroke-width="1.2"/>
      <!-- Window Controls -->
      <circle cx="18" cy="16" r="4.5" fill="#EF4444"/>
      <circle cx="32" cy="16" r="4.5" fill="#F59E0B"/>
      <circle cx="46" cy="16" r="4.5" fill="#10B981"/>
      <text x="230" y="20" text-anchor="middle" font-family="monospace" font-weight="700" font-size="10.5" fill="#64748B">bash — hpc-node:~/omics_pipeline.sh</text>
      <line x1="0" y1="30" x2="440" y2="30" stroke="#1F2937" stroke-width="1"/>

      <!-- Live Pipeline Code -->
      <g transform="translate(18, 52)">
        <text y="0" font-family="monospace" font-weight="700" font-size="12" fill="#38BDF8">$ conda activate bmp_omics_env</text>
        <text y="22" font-family="monospace" font-weight="500" font-size="11" fill="#10B981">[OK] Bio-Stack loaded (Python 3.11, R 4.4, Bioc 3.19)</text>
        <text y="46" font-family="monospace" font-weight="700" font-size="12" fill="#F59E0B"># Automated NGS Quality Control &amp; Alignment</text>
        <text y="68" font-family="monospace" font-weight="500" font-size="11" fill="#E2E8F0">fastp -i sample_R1.fq.gz -I sample_R2.fq.gz -o clean/</text>
        <text y="90" font-family="monospace" font-weight="500" font-size="11" fill="#60A5FA">STAR --genomeDir /ref/GRCh38 --readFilesIn clean/*.fq</text>
        <text y="114" font-family="monospace" font-weight="700" font-size="11.5" fill="#34D399">&#10003; 38.4M Reads Mapped (94.2% Unique) &gt; counts.tsv</text>
      </g>
    </g>

    <!-- Right Sub-Panel: Dual Python & R Data Science Engine -->
    <g transform="translate(495, 18)">
      <rect width="440" height="205" rx="14" fill="#030712" stroke="#1F2937" stroke-width="1.2"/>
      <!-- Window Controls -->
      <circle cx="18" cy="16" r="4.5" fill="#3B82F6"/>
      <circle cx="32" cy="16" r="4.5" fill="#10B981"/>
      <circle cx="46" cy="16" r="4.5" fill="#F59E0B"/>
      
      <!-- Mini Python & R Official Emblems in Header -->
      <g transform="translate(370, 6)">
        <g transform="translate(0, 0)">${officialPythonLogoSvg}</g>
        <g transform="translate(30, -2)">${officialRLogoSvg}</g>
      </g>

      <text x="210" y="20" text-anchor="middle" font-family="monospace" font-weight="700" font-size="10.5" fill="#64748B">interactive_analysis.py / analysis.R</text>
      <line x1="0" y1="30" x2="440" y2="30" stroke="#1F2937" stroke-width="1"/>

      <!-- Python / R Code -->
      <g transform="translate(18, 52)">
        <text y="0" font-family="monospace" font-weight="700" font-size="12" fill="#38BDF8"># Python: BioPython &amp; High-Throughput Pandas</text>
        <text y="22" font-family="monospace" font-weight="500" font-size="11" fill="#E2E8F0">from Bio import SeqIO; import pandas as pd</text>
        <text y="44" font-family="monospace" font-weight="500" font-size="11" fill="#FBBF24">df = pd.DataFrame([s.features for s in SeqIO.parse()])</text>
        
        <line x1="0" y1="58" x2="404" y2="58" stroke="#1E293B" stroke-width="1"/>

        <text y="76" font-family="monospace" font-weight="700" font-size="12" fill="#A78BFA"># R: Bioconductor &amp; Publication Visuals</text>
        <text y="98" font-family="monospace" font-weight="500" font-size="11" fill="#E2E8F0">library(DESeq2); library(ggplot2)</text>
        <text y="120" font-family="monospace" font-weight="700" font-size="11" fill="#6EE7B7">ggplot(pca_data, aes(PC1, PC2)) + geom_point()</text>
      </g>
    </g>
  </g>

  <!-- ================= 4. 4 CORE MASTERY PILLARS (y=580) ================= -->
  <g transform="translate(60, 580)">
    <!-- Pillar 1: Workflow Setup -->
    <g transform="translate(0, 0)">
      <rect width="225" height="135" rx="16" fill="#0C1425" stroke="#1E293B" stroke-width="1.2"/>
      <circle cx="34" cy="32" r="14" fill="#0284C7" opacity="0.2"/>
      <!-- Gear Vector Icon -->
      <path d="M34 24 L34 26 M34 38 L34 40 M26 32 L28 32 M40 32 L42 32 M28 26 L30 28 M38 36 L40 38 M28 38 L30 36 M38 28 L40 26" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="34" cy="32" r="4" fill="#38BDF8"/>
      
      <text x="18" y="70" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="14.5" fill="#FFFFFF">Workflow Setup</text>
      <text x="18" y="90" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="11" fill="#94A3B8">HPC cluster setup &amp;</text>
      <text x="18" y="106" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="11" fill="#94A3B8">Conda environment builds</text>
    </g>

    <!-- Pillar 2: Unix & NGS Formats -->
    <g transform="translate(245, 0)">
      <rect width="225" height="135" rx="16" fill="#0C1425" stroke="#1E293B" stroke-width="1.2"/>
      <circle cx="34" cy="32" r="14" fill="#2563EB" opacity="0.2"/>
      <!-- CLI Prompt Vector Icon -->
      <rect x="23" y="23" width="22" height="18" rx="3" fill="#1E293B"/>
      <text x="26" y="35" font-family="monospace" font-weight="900" font-size="10" fill="#60A5FA">&gt;_</text>
      
      <text x="18" y="70" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="14.5" fill="#FFFFFF">Unix &amp; NGS Formats</text>
      <text x="18" y="90" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="11" fill="#94A3B8">Bash pipeline scripts &amp;</text>
      <text x="18" y="106" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="11" fill="#94A3B8">FASTQ, BAM, VCF parsing</text>
    </g>

    <!-- Pillar 3: Python in Omics (WITH REAL OFFICIAL PYTHON LOGO) -->
    <g transform="translate(490, 0)">
      <rect width="225" height="135" rx="16" fill="#0C1425" stroke="#1E293B" stroke-width="1.2"/>
      <circle cx="34" cy="32" r="16" fill="#1E293B" stroke="#334155" stroke-width="1"/>
      <!-- Authentic Python Logo -->
      <g transform="translate(23, 21)">
        ${officialPythonLogoSvg}
      </g>

      <text x="18" y="70" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="14.5" fill="#FFFFFF">Python in Omics</text>
      <text x="18" y="90" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="11" fill="#94A3B8">BioPython parsing &amp;</text>
      <text x="18" y="106" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="11" fill="#94A3B8">Pandas matrix wrangling</text>
    </g>

    <!-- Pillar 4: R & Bioconductor (WITH REAL OFFICIAL R LOGO) -->
    <g transform="translate(735, 0)">
      <rect width="225" height="135" rx="16" fill="#0C1425" stroke="#1E293B" stroke-width="1.2"/>
      <circle cx="34" cy="32" r="16" fill="#1E293B" stroke="#334155" stroke-width="1"/>
      <!-- Authentic R Logo -->
      <g transform="translate(20, 20)">
        ${officialRLogoSvg}
      </g>

      <text x="18" y="70" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="14.5" fill="#FFFFFF">R &amp; Bioconductor</text>
      <text x="18" y="90" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="11" fill="#94A3B8">Bioconductor packages &amp;</text>
      <text x="18" y="106" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="11" fill="#94A3B8">ggplot2 publication plots</text>
    </g>
  </g>

  <!-- ================= 5. TECH BADGES ROW (y=735) ================= -->
  <g transform="translate(60, 735)">
    <text x="0" y="16" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="11.5" fill="#64748B" letter-spacing="1.2">PRODUCTION STACK:</text>
    
    <g transform="translate(160, 0)">
      <!-- Tag 1 -->
      <rect x="0" width="85" height="26" rx="6" fill="#1E293B"/>
      <text x="42.5" y="17" text-anchor="middle" font-family="Arial" font-weight="700" font-size="11" fill="#FFFFFF">Linux CLI</text>

      <!-- Tag 2 -->
      <rect x="95" width="105" height="26" rx="6" fill="#1E293B"/>
      <text x="147.5" y="17" text-anchor="middle" font-family="Arial" font-weight="700" font-size="11" fill="#38BDF8">Bash Scripting</text>

      <!-- Tag 3 -->
      <rect x="210" width="90" height="26" rx="6" fill="#1E293B"/>
      <text x="255" y="17" text-anchor="middle" font-family="Arial" font-weight="700" font-size="11" fill="#60A5FA">Conda Envs</text>

      <!-- Tag 4 -->
      <rect x="310" width="125" height="26" rx="6" fill="#1E293B"/>
      <text x="372.5" y="17" text-anchor="middle" font-family="Arial" font-weight="700" font-size="11" fill="#FBBF24">NGS Data Formats</text>

      <!-- Tag 5 with Python mini icon -->
      <g transform="translate(445, 0)">
        <rect width="130" height="26" rx="6" fill="#1E293B"/>
        <g transform="translate(8, 5) scale(0.35)">${officialPythonLogoSvg}</g>
        <text x="72" y="17" text-anchor="middle" font-family="Arial" font-weight="700" font-size="11" fill="#34D399">Python / BioPython</text>
      </g>

      <!-- Tag 6 with R mini icon -->
      <g transform="translate(585, 0)">
        <rect width="120" height="26" rx="6" fill="#1E293B"/>
        <g transform="translate(8, 5) scale(0.4)">${officialRLogoSvg}</g>
        <text x="66" y="17" text-anchor="middle" font-family="Arial" font-weight="700" font-size="11" fill="#A78BFA">R / Bioconductor</text>
      </g>

      <!-- Tag 7 -->
      <rect x="715" width="95" height="26" rx="6" fill="#1E293B"/>
      <text x="762.5" y="17" text-anchor="middle" font-family="Arial" font-weight="700" font-size="11" fill="#94A3B8">Git &amp; GitHub</text>
    </g>
  </g>

  <!-- ================= 6. HIGH-CONVERTING ADMISSIONS BANNER (y=780) ================= -->
  <g transform="translate(60, 780)">
    <!-- Container Shell -->
    <rect width="960" height="150" rx="22" fill="#0D182E" stroke="#2563EB" stroke-width="1.8" filter="url(#card-shadow)"/>
    
    <!-- Left Urgency Highlights -->
    <g transform="translate(35, 30)">
      <rect width="210" height="24" rx="12" fill="#1E293B" stroke="#38BDF8" stroke-width="0.8"/>
      <text x="105" y="16" text-anchor="middle" font-family="Arial" font-weight="800" font-size="11" fill="#38BDF8">&#9889; COHORT 03 ADMISSIONS OPEN</text>

      <text y="58" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="24" fill="#FFFFFF">12-Week Intensive Research Mentorship</text>
      <text y="82" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="14" fill="#93C5FD">
        Live Code Training &#8226; 25 Live Sessions &#8226; 1-on-1 TA Support &#8226; <tspan fill="#FDE047" font-weight="800">Only 30 Seats Limit</tspan>
      </text>
      <text y="104" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="12.5" fill="#64748B">
        Program Start Date: October 2, 2026 &#8226; Capstone Projects on Real GEO/TCGA Datasets
      </text>
    </g>

    <!-- Right Primary CTA Action Button -->
    <g transform="translate(710, 48)">
      <rect width="215" height="56" rx="28" fill="url(#btn-grad)" filter="url(#neon-glow)"/>
      <text x="107.5" y="34" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="17" fill="#FFFFFF" letter-spacing="0.5">ENROLL NOW &#8594;</text>
    </g>
  </g>

  <!-- ================= 7. FOOTER LINK (y=970) ================= -->
  <g transform="translate(540, 970)">
    <rect x="-270" y="0" width="540" height="46" rx="23" fill="#0A101D" stroke="#1E293B" stroke-width="1"/>
    <text x="0" y="29" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="17" fill="#FFFFFF" letter-spacing="0.5">deepbioacademy.com/programs/bmp</text>
    <text x="0" y="65" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="12" fill="#64748B">Empowering the next generation of computational biologists &amp; researchers.</text>
  </g>

  <!-- Bottom Accent Strip -->
  <rect y="1075" width="1080" height="5" fill="#2563EB"/>
</svg>`;
}

async function run() {
  console.log("Integrating Official Real Python & R Logos into Module 1 Ad (600 DPI Ultra-HD)...");

  const svgCode = generateWorldClassAdSVG();
  fs.writeFileSync(svgOutPath, svgCode, "utf-8");
  console.log(`Saved SVG: ${svgOutPath}`);

  // Render to 600 DPI Ultra-HD PNG (2160x2160)
  await sharp(Buffer.from(svgCode), { density: 600 })
    .resize(2160, 2160, { fit: "contain", kernel: "lanczos3" })
    .png({ quality: 100, compressionLevel: 6 })
    .toFile(pngOutPath);

  const stats = fs.statSync(pngOutPath);
  console.log(`Rendered Official Logo 600 DPI PNG: ${pngOutPath} (${Math.round(stats.size / 1024)} KB)`);
}

run();
