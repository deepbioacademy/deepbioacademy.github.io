export interface Program {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  badge: string;
  category: "Bioinformatics" | "Drug Discovery" | "Generative AI" | "AI Literacy";
  duration: string;
  format: string;
  level: string;
  audience: string;
  language: string;
  accentColor: {
    primary: string;
    border: string;
    bg: string;
    text: string;
    gradient: string;
  };
  highlights: string[];
  keyTopics: string[];
  href: string;
  applyUrl: string;
  isPopular?: boolean;
  status: "Cohort 03 Admission is Open Now" | "Running" | "Admission Closed" | "Admission Starting Soon" | string;
}

export const ACADEMY_PROGRAMS: Program[] = [
  {
    id: "bmp",
    slug: "bioinformatics-mentorship",
    title: "Bioinformatics Mentorship Program (BMP)",
    shortTitle: "BMP Mentorship",
    subtitle: "From raw sequencing FASTQ data to high-impact publication-ready transcriptomics discoveries.",
    badge: "Flagship Research Track",
    category: "Bioinformatics",
    duration: "3 Months",
    format: "Live Virtual + 1-on-1 Mentoring",
    level: "Intermediate to Advanced",
    audience: "Undergrads, Postgrads, Doctors & Researchers",
    language: "English / Bangla",
    accentColor: {
      primary: "#2563eb",
      border: "border-blue-500/30",
      bg: "bg-blue-500/10",
      text: "text-blue-600 dark:text-blue-400",
      gradient: "from-blue-600 to-cyan-500",
    },
    highlights: [
      "End-to-end Bulk RNA-seq, Single-Cell (scRNA-seq), Spatial Transcriptomics & AI/ML",
      "Build a reproducible GitHub research portfolio with production-grade Linux, Python & R pipelines",
      "Complete Bioconductor & Bio-AI ecosystem: DESeq2, Seurat v5, SpatialExperiment, Scikit-Learn",
      "Direct weekly guidance from experienced computational biology mentors"
    ],
    keyTopics: ["Linux CLI & HPC", "Python & R Omics", "Bulk RNA-seq (DESeq2)", "Single-Cell (Seurat v5)", "Spatial Transcriptomics", "AI in Computational Biology"],
    href: "/programs/bioinformatics-mentorship",
    applyUrl: "https://forms.gle/zSPBekZdeiBpJURj9",
    isPopular: true,
    status: "Cohort 03 Admission is Open Now"
  },
  {
    id: "drug-discovery",
    slug: "drug-discovery",
    title: "Next-Gen Drug Discovery with AI",
    shortTitle: "Next-Gen Drug Discovery with AI",
    subtitle: "Master molecular docking, GROMACS molecular dynamics, cheminformatics, and AI bioactivity prediction.",
    badge: "Advanced Intensive",
    category: "Drug Discovery",
    duration: "3 Months",
    format: "Hands-on GPU Labs + Projects",
    level: "Intermediate to Advanced",
    audience: "Pharmacists, Biochemists, Medchemists & AI Engineers",
    language: "English / Bangla",
    accentColor: {
      primary: "#0d9488",
      border: "border-teal-500/30",
      bg: "bg-teal-500/10",
      text: "text-teal-600 dark:text-teal-400",
      gradient: "from-teal-600 to-emerald-500",
    },
    highlights: [
      "Cheminformatics with RDKit, SMILES mining & ChEMBL databases",
      "High-throughput virtual screening & AutoDock Vina molecular docking",
      "100ns solvent simulations & RMSD/RMSF curves with GROMACS",
      "Machine learning bioactivity prediction & in silico ADMET toxicology"
    ],
    keyTopics: ["RDKit & QSAR", "AutoDock Vina", "GROMACS 100ns MD", "AlphaFold2", "ADMET Modeling", "GPU Colab"],
    href: "/programs/drug-discovery",
    applyUrl: "/apply?track=drug-discovery",
    isPopular: true,
    status: "Running"
  },
  {
    id: "nocode-ai",
    slug: "nocode-ai",
    title: "No-Code & Agentic AI for Life Sciences",
    shortTitle: "No-Code & Agentic AI",
    subtitle: "Accelerate biomedical workflows with Generative AI, custom GPT agents, and automated research workflows without coding.",
    badge: "Fast-Track Skill Accelerator",
    category: "Generative AI",
    duration: "4 Weeks (8 Sessions)",
    format: "Interactive Live Workshops",
    level: "All Levels (Zero Coding Required)",
    audience: "Biologists, Lab Scientists, Medical Clinicians & Academics",
    language: "Bangla / English",
    accentColor: {
      primary: "#8b5cf6",
      border: "border-purple-500/30",
      bg: "bg-purple-500/10",
      text: "text-purple-600 dark:text-purple-400",
      gradient: "from-purple-600 to-indigo-500",
    },
    highlights: [
      "Agentic AI workflows for automated literature review and data extraction",
      "Prompt engineering designed specifically for life sciences & medical research",
      "Building specialized AI Research Assistants with Claude, ChatGPT & Gemini",
      "Data visualization & statistical interpretation with no-code AI tools"
    ],
    keyTopics: ["Agentic AI", "Life Science Prompting", "Claude & ChatGPT 4o", "NotebookLM", "AI Data Analysis"],
    href: "/programs/nocode-ai",
    applyUrl: "/apply?track=nocode-ai",
    status: "Admission Closed"
  },
  {
    id: "youth-ai",
    slug: "youth-ai",
    title: "agami.ai — National AI Literacy Initiative",
    shortTitle: "agami.ai Youth AI",
    subtitle: "Empowering school and college students (ages 11–18) and educators across Bangladesh with foundational AI literacy.",
    badge: "100% Free Public Initiative",
    category: "AI Literacy",
    duration: "Self-Paced / Cohorts",
    format: "Online + Division Workshops",
    level: "Beginner (Ages 11–18+)",
    audience: "School & College Students, STEM Teachers, Curious Beginners",
    language: "Bangla",
    accentColor: {
      primary: "#ec4899",
      border: "border-pink-500/30",
      bg: "bg-pink-500/10",
      text: "text-pink-600 dark:text-pink-400",
      gradient: "from-pink-600 to-rose-500",
    },
    highlights: [
      "100% Free access for students and educators nationwide",
      "5 Structured curriculum modules from AI basics to Machine Learning ethics",
      "Hands-on interactive toolkits with Raspberry Pi & DeepMind curriculum credits",
      "Certificates of completion and national student AI hackathons"
    ],
    keyTopics: ["AI Foundations", "Computer Vision Basics", "AI Ethics", "Raspberry Pi STEM", "Hands-on ML"],
    href: "/programs/youth-ai",
    applyUrl: "/apply?track=youth-ai",
    status: "Admission Starting Soon"
  }
];
