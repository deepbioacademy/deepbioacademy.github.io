export type RoadmapStage = {
  id: string;
  title: string;
  description: string;
};

export const roadmapStages: RoadmapStage[] = [
  {
    id: "foundations",
    title: "Foundations",
    description:
      "Python programming, scientific computing, and the core biology/chemistry needed for computational drug discovery.",
  },
  {
    id: "molecular-data",
    title: "Molecular Data",
    description:
      "Working with chemical and biological databases — ChEMBL, PubChem, and molecular file formats (SMILES, SDF, PDB).",
  },
  {
    id: "protein-targets",
    title: "Protein Targets & Structures",
    description:
      "Structural bioinformatics fundamentals — retrieving, cleaning, and analyzing protein structures from the PDB.",
  },
  {
    id: "cheminformatics",
    title: "Cheminformatics",
    description:
      "Molecular representations, descriptors, fingerprints, similarity search, and QSAR with RDKit.",
  },
  {
    id: "cadd",
    title: "Computer-Aided Drug Design (CADD)",
    description:
      "Molecular docking, virtual screening, and structure-based drug design with AutoDock Vina.",
  },
  {
    id: "molecular-dynamics",
    title: "Molecular Dynamics",
    description:
      "Simulating protein-ligand systems over time with GROMACS to study stability and binding behavior.",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description:
      "Supervised and unsupervised learning for molecular property and bioactivity prediction.",
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    description:
      "Graph neural networks, protein-ligand deep learning models, and generative approaches with PyTorch.",
  },
  {
    id: "lead-optimization",
    title: "Lead Optimization & Integrated Drug Discovery",
    description:
      "End-to-end capstone project integrating every stage into a complete computational drug discovery pipeline.",
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "3", label: "Months" },
  { value: "36", label: "Live Sessions" },
  { value: "72+", label: "Hours Live Training" },
  { value: "20+", label: "Professional Tools" },
  { value: "Colab Pro", label: "Included" },
  { value: "1", label: "Capstone Project" },
  { value: "Yes", label: "Certificate" },
];

export type Module = {
  number: string;
  title: string;
  points: string[];
};

export const modules: Module[] = [
  {
    number: "01",
    title: "Foundations of Computational Drug Discovery",
    points: [
      "Python for scientific computing",
      "Drug discovery pipeline overview",
      "Biology & chemistry primer for computation",
      "Working in Google Colab Pro",
    ],
  },
  {
    number: "02",
    title: "Cheminformatics & Molecular Data Science",
    points: [
      "SMILES, molecular representations & descriptors",
      "Fingerprints & similarity search with RDKit",
      "ChEMBL & PubChem data mining",
      "QSAR modeling fundamentals",
    ],
  },
  {
    number: "03",
    title: "Structural Bioinformatics",
    points: [
      "Protein Data Bank & structure retrieval",
      "Structure cleaning & preparation",
      "Binding site & pocket analysis",
      "Visualization with py3Dmol & NGLView",
    ],
  },
  {
    number: "04",
    title: "Computer-Aided Drug Design",
    points: [
      "Molecular docking with AutoDock Vina",
      "Structure-based virtual screening",
      "Ligand- and structure-based design",
      "Docking pose analysis & scoring",
    ],
  },
  {
    number: "05",
    title: "Molecular Dynamics",
    points: [
      "GROMACS simulation setup",
      "Protein-ligand system preparation",
      "Trajectory analysis with MDAnalysis",
      "Stability, RMSD & binding free energy",
    ],
  },
  {
    number: "06",
    title: "Artificial Intelligence for Drug Discovery",
    points: [
      "Machine learning for bioactivity prediction",
      "Feature engineering for molecules",
      "Model evaluation & validation",
      "ADMET & toxicity prediction",
    ],
  },
  {
    number: "07",
    title: "Deep Learning for Molecular Modeling",
    points: [
      "Graph neural networks for molecules",
      "Protein-ligand interaction prediction",
      "PyTorch for molecular deep learning",
      "Generative models & ColabFold",
    ],
  },
  {
    number: "08",
    title: "Integrated Drug Discovery Project",
    points: [
      "End-to-end pipeline design",
      "Target-to-lead capstone project",
      "Lead optimization strategies",
      "Project presentation & review",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Drug Discovery Pipeline",
    description: "Build a complete target-to-lead computational pipeline from scratch.",
  },
  {
    title: "Molecular Docking",
    description: "Dock small molecules against a protein target using AutoDock Vina.",
  },
  {
    title: "Virtual Screening",
    description: "Screen large compound libraries to identify promising hit candidates.",
  },
  {
    title: "Molecular Dynamics",
    description: "Simulate protein-ligand complexes and analyze stability over time.",
  },
  {
    title: "Protein Structure Analysis",
    description: "Analyze binding pockets and structural features from PDB structures.",
  },
  {
    title: "AI Molecular Property Prediction",
    description: "Train ML models to predict bioactivity and physicochemical properties.",
  },
  {
    title: "Graph Neural Networks",
    description: "Represent molecules as graphs and predict properties with GNNs.",
  },
  {
    title: "Protein-Ligand Prediction",
    description: "Predict binding affinity using deep learning on structural data.",
  },
  {
    title: "Lead Optimization",
    description: "Optimize hit compounds into viable leads using computational strategies.",
  },
];

export const techStack: string[] = [
  "Python",
  "Google Colab Pro",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "BioPython",
  "RDKit",
  "ChEMBL",
  "PubChem",
  "Protein Data Bank",
  "KLIFS",
  "AutoDock Vina",
  "GROMACS",
  "MDAnalysis",
  "PyTorch",
  "Open Babel",
  "py3Dmol",
  "NGLView",
  "ColabFold",
  "MODELLER",
];

export const learningOutcomes: string[] = [
  "Python for Drug Discovery",
  "Cheminformatics",
  "Structural Bioinformatics",
  "Molecular Docking",
  "Molecular Dynamics",
  "Protein Structure Analysis",
  "Machine Learning",
  "Graph Neural Networks",
  "AI Drug Discovery",
  "End-to-End Computational Drug Discovery",
];

export type Audience = {
  title: string;
};

export const audience: Audience[] = [
  { title: "Undergraduate Students" },
  { title: "Graduate Students" },
  { title: "PhD Researchers" },
  { title: "Bioinformaticians" },
  { title: "Computational Biologists" },
  { title: "Medicinal Chemists" },
  { title: "Pharmaceutical Scientists" },
  { title: "AI Researchers" },
];

export type ProgramDetail = {
  label: string;
  value: string;
  note?: string;
};

export const programDetails: ProgramDetail[] = [
  { label: "Duration", value: "3 Months" },
  { label: "Schedule", value: "3 Classes per Week" },
  { label: "Time", value: "9 PM – 11 PM (Bangladesh Time)" },
  { label: "Mode", value: "Live Online" },
  { label: "Assignments", value: "Weekly" },
  { label: "Projects", value: "Hands-on" },
  { label: "Certificate", value: "Yes" },
  { label: "Fee", value: "10,200 BDT / month" },
  { label: "Payment Deadline", value: "5th of every month" },
  {
    label: "Google Colab Pro",
    value: "Included",
    note: "~10 USD + VAT cost / participant",
  },
  {
    label: "Colab Notebooks",
    value: "Every Session",
    note: "Research-grade & reproducible",
  },
  {
    label: "Enrollment Process",
    value: "Pre-Register → Q&A Call → Enroll",
    note: "No payment for pre-registration & first 2 sessions",
  },
];

export type LeadStat = Stat & { description: string };

export type Instructor = {
  name: string;
  role: string;
  photo: string;
  lead?: boolean;
  stats?: LeadStat[];
  bio?: string;
  quote?: string;
};

export const instructors: Instructor[] = [
  {
    name: "Md. Jubayer Hossain",
    role: "Founder & CEO, DeepBio Ltd",
    photo: "/team/jubayer.jpg",
    lead: true,
    stats: [
      {
        value: "5+",
        label: "Years Research",
        description: "Computational chemistry & structural bioinformatics.",
      },
      {
        value: "5+",
        label: "Years Mentoring",
        description: "Guiding beginners through graduate researchers.",
      },
      {
        value: "3K+",
        label: "Students Trained",
        description: "Live cohorts and workshops since 2020.",
      },
      {
        value: "20+",
        label: "Publications",
        description: "Peer-reviewed cheminformatics & AI research.",
      },
    ],
    bio: "Bioinformatician and computational biologist who has trained 3,000+ students since 2020. Every student in this program works directly with him — not a TA, not a substitute — toward a real, submittable research output.",
    quote:
      "You bring the curiosity — I bring the roadmap, the tools, and the accountability to get you there.",
  },
  {
    name: "Musab Shahriar",
    role: "Computational Drug Discovery",
    photo: "/team/musab.jpg",
  },
  {
    name: "Pritom Kundu",
    role: "AI-driven Drug Discovery",
    photo: "/team/pritom.jpg",
  },
  {
    name: "Naem Islam Abhi",
    role: "scRNA-seq Disease Drug Discovery",
    photo: "/team/abhi.jpg",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Do I need a programming or biology background to join?",
    answer:
      "No prior computational background is required. The program starts with Python foundations and a biology/chemistry primer before progressing into advanced cheminformatics, structural bioinformatics, and AI topics.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "A laptop with a stable internet connection is enough. All heavy computation runs in the cloud through the included Google Colab Pro subscription — no local GPU required.",
  },
  {
    question: "Are the classes live or pre-recorded?",
    answer:
      "All 36 sessions are live and interactive, held online three times a week. Recordings are provided afterward for revision.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes. Upon successful completion of the program and the capstone project, you receive an official certificate of completion.",
  },
  {
    question: "What is the capstone project?",
    answer:
      "In the final module you build a complete, end-to-end computational drug discovery pipeline — from target selection through virtual screening, docking, molecular dynamics, and AI-based lead optimization.",
  },
  {
    question: "How is the fee structured?",
    answer:
      "The program fee is 10,200 BDT per month for 3 months, due by the 5th of each month. Google Colab Pro access is included at no extra cost.",
  },
  {
    question: "Is this program suitable for working professionals?",
    answer:
      "Yes. Classes run in the evening (9 PM – 11 PM Bangladesh Time), three days a week, designed to fit around full-time work or study schedules.",
  },
];

export const navLinks = [
  { href: "#program", label: "Program" },
  { href: "#modules", label: "Modules" },
  { href: "#projects", label: "Projects" },
  { href: "#tools", label: "Tools" },
  { href: "#instructor", label: "Instructor" },
  { href: "#faq", label: "FAQ" },
];
