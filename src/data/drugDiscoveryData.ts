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
    id: "cheminformatics",
    title: "Cheminformatics",
    description:
      "Working with chemical databases — ChEMBL, PubChem, RDKit descriptors, fingerprints, and QSAR modeling.",
  },
  {
    id: "structural-bio",
    title: "Structural Bioinformatics",
    description:
      "Retrieving, cleaning, pocket detection, and analyzing 3D protein structures from the Protein Data Bank.",
  },
  {
    id: "cadd",
    title: "Computer-Aided Drug Design",
    description:
      "Molecular docking, high-throughput virtual screening, and scoring functions with AutoDock Vina.",
  },
  {
    id: "system-biology",
    title: "System Biology",
    description:
      "Protein-protein interaction networks (PPI), pathway enrichment, STRING, Cytoscape, and multi-target pharmacology.",
  },
  {
    id: "molecular-dynamics",
    title: "Molecular Dynamics & Simulation",
    description:
      "Simulating protein-ligand systems over 100ns with GROMACS to analyze RMSD/RMSF and binding stability.",
  },
  {
    id: "ai-drug-discovery",
    title: "AI in Drug Discovery",
    description:
      "Machine learning models for bioactivity prediction, feature engineering, and applicability domain validation.",
  },
  {
    id: "deep-learning",
    title: "Deep Learning for Molecular Modeling",
    description:
      "Graph Neural Networks (GNNs), PyTorch Geometric, 3D molecular representations, and AlphaFold2/ColabFold.",
  },
  {
    id: "in-silico-toxicology",
    title: "AI in In Silico Toxicology Modeling",
    description:
      "ADMET forecasting, blood-brain barrier permeability, hERG cardiotoxicity, and off-target safety predictors.",
  },
  {
    id: "integrated-workflow",
    title: "Integrated Drug Discovery Workflow",
    description:
      "End-to-end target-to-lead capstone pipeline integrating every stage into a publication-ready research output.",
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
  { value: "Colab", label: "Cloud GPU" },
  { value: "1", label: "Capstone Project" },
  { value: "Yes", label: "Certificate" },
];

export type CurriculumModule = {
  number: string;
  id: number;
  title: string;
  tag: string;
  duration: string;
  level: string;
  summary: string;
  tags: string[];
};

export const curriculumModules: CurriculumModule[] = [
  {
    number: "01",
    id: 1,
    title: "Foundations of Drug Discovery & Scientific Python",
    tag: "Foundations",
    duration: "3 Sessions",
    level: "Beginner",
    summary:
      "Master scientific Python (NumPy, Pandas, Matplotlib), Google Colab free GPU workflows, and core biochemical thermodynamics.",
    tags: ["Python", "NumPy", "Colab GPU", "Biochem Primer"],
  },
  {
    number: "02",
    id: 2,
    title: "Cheminformatics & Molecular Data Science",
    tag: "Cheminformatics",
    duration: "4 Sessions",
    level: "Beginner-Intermediate",
    summary:
      "Represent and manipulate small molecules with RDKit, compute Morgan fingerprints, parse SMILES, and mine ChEMBL databases.",
    tags: ["RDKit", "SMILES", "Morgan Fingerprints", "ChEMBL"],
  },
  {
    number: "03",
    id: 3,
    title: "Structural Bioinformatics",
    tag: "Structural Bio",
    duration: "3 Sessions",
    level: "Intermediate",
    summary:
      "Retrieve 3D crystal structures from PDB, prepare active sites, detect cryptic binding pockets, and visualize complexes with py3Dmol.",
    tags: ["PDB", "Pocket Detection", "py3Dmol", "BioPython"],
  },
  {
    number: "04",
    id: 4,
    title: "Computer-Aided Drug Design (CADD)",
    tag: "CADD & Docking",
    duration: "4 Sessions",
    level: "Intermediate",
    summary:
      "High-throughput virtual screening with AutoDock Vina, grid box optimization, docking pose scoring, and PLIP interaction profiling.",
    tags: ["AutoDock Vina", "Virtual Screening", "Grid Box", "PLIP"],
  },
  {
    number: "05",
    id: 5,
    title: "System Biology",
    tag: "System Biology",
    duration: "3 Sessions",
    level: "Intermediate",
    summary:
      "Construct protein-protein interaction (PPI) networks with STRING and Cytoscape, identify hub target genes, and run KEGG pathway enrichment.",
    tags: ["STRING", "Cytoscape", "Hub Genes", "KEGG Pathways"],
  },
  {
    number: "06",
    id: 6,
    title: "Molecular Dynamics & Molecular Simulation",
    tag: "MD Dynamics",
    duration: "4 Sessions",
    level: "Advanced",
    summary:
      "Set up and run 100ns GROMACS molecular dynamics simulations in TIP3P water boxes, and compute RMSD/RMSF trajectory curves.",
    tags: ["GROMACS", "CHARMM36m", "MDAnalysis", "RMSD/RMSF"],
  },
  {
    number: "07",
    id: 7,
    title: "AI in Drug Discovery",
    tag: "AI & ML",
    duration: "4 Sessions",
    level: "Intermediate-Advanced",
    summary:
      "Train machine learning models for bioactivity (pIC50) prediction, perform scaffold splitting, and define applicability domains with SHAP.",
    tags: ["Scikit-Learn", "pIC50", "Scaffold Splitting", "SHAP"],
  },
  {
    number: "08",
    id: 8,
    title: "Deep Learning for Molecular Modeling",
    tag: "Deep Learning",
    duration: "4 Sessions",
    level: "Advanced",
    summary:
      "Model molecules as topological graphs using PyTorch Geometric (GCN/GAT) and predict structures with AlphaFold2 & ColabFold.",
    tags: ["PyTorch Geometric", "GNNs", "GCN / GAT", "ColabFold"],
  },
  {
    number: "09",
    id: 9,
    title: "AI in In Silico Toxicology Modeling",
    tag: "ADMET & Safety",
    duration: "3 Sessions",
    level: "Advanced",
    summary:
      "Predict ADMET pharmacokinetic profiles, blood-brain barrier permeability, and hERG channel cardiotoxicity to de-risk leads early.",
    tags: ["ADMET", "hERG Safety", "BBB Permeability", "Toxicophores"],
  },
  {
    number: "10",
    id: 10,
    title: "Integrated Drug Discovery Workflow",
    tag: "Capstone",
    duration: "4 Sessions",
    level: "Capstone",
    summary:
      "Execute an end-to-end target-to-lead pipeline from disease target to validated lead, producing a publication-ready research report.",
    tags: ["Target-to-Lead", "Lead Optimization", "Research Report", "GitHub"],
  },
];

export const modules = curriculumModules.map((m) => ({
  number: m.number,
  title: m.title,
  points: m.tags,
}));

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Oncology Kinase Inhibitor Screening",
    category: "Targeted Oncology",
    description: "Virtual screen 50,000+ compounds against oncogenic EGFR/KRAS mutants with AutoDock Vina and validate hits.",
    tags: ["AutoDock Vina", "RDKit", "PDB", "EGFR"],
  },
  {
    title: "Viral Protease Target-to-Lead Pipeline",
    category: "Antiviral CADD",
    description: "Dock and score covalent and non-covalent inhibitors against SARS-CoV-2 Mpro and Dengue NS2B-NS3 protease.",
    tags: ["ChEMBL", "Docking", "Open Babel", "Protease"],
  },
  {
    title: "100ns Protein-Ligand MD Simulation",
    category: "Molecular Dynamics",
    description: "Solvate complexes in TIP3P water boxes, run 100ns GROMACS MD, and calculate RMSD/RMSF stability curves.",
    tags: ["GROMACS", "CHARMM36m", "MDAnalysis", "RMSD"],
  },
  {
    title: "Graph Neural Network Bioactivity Predictor",
    category: "Deep Learning",
    description: "Build a PyTorch Geometric GNN (GCN/GAT) that predicts IC50 bioactivity directly from 2D molecular graphs.",
    tags: ["PyTorch Geometric", "GNNs", "ChEMBL", "Bioactivity"],
  },
  {
    title: "ADMET & Blood-Brain Barrier (BBB) ML Model",
    category: "In Silico Toxicology",
    description: "Train classification models to forecast blood-brain barrier permeability and hERG cardiotoxicity endpoints.",
    tags: ["Scikit-Learn", "RDKit", "ADMET", "Toxicology"],
  },
  {
    title: "AlphaFold Structure Modeling & Pocket Mapping",
    category: "Structural AI",
    description: "Predict uncharacterized target structures with ColabFold and map allosteric druggable binding pockets.",
    tags: ["ColabFold", "AlphaFold", "py3Dmol", "Pockets"],
  },
];

export const techStack: string[] = [
  "Python",
  "Google Colab",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "BioPython",
  "RDKit",
  "ChEMBL",
  "PubChem",
  "Protein Data Bank",
  "STRING",
  "Cytoscape",
  "KLIFS",
  "AutoDock Vina",
  "GROMACS",
  "MDAnalysis",
  "PyTorch",
  "PyTorch Geometric",
  "Open Babel",
  "py3Dmol",
  "NGLView",
  "ColabFold",
];

export const learningOutcomes: string[] = [
  "Python & Colab Cloud GPU for Drug Discovery",
  "RDKit Cheminformatics & Molecular Descriptors",
  "PDB Structural Preparation & Pocket Detection",
  "AutoDock Vina High-Throughput Virtual Screening",
  "System Biology & PPI Network Target Identification",
  "100ns GROMACS Molecular Dynamics Simulations",
  "MDAnalysis Trajectory RMSD & RMSF Analysis",
  "Machine Learning Bioactivity (pIC50) & QSAR",
  "Graph Neural Networks with PyTorch Geometric",
  "AI in In Silico Toxicology & ADMET Safety",
  "AlphaFold & ColabFold Structure Prediction",
  "End-to-End Target-to-Lead Capstone Project",
];

export type Audience = {
  title: string;
  category: string;
};

export const audience: Audience[] = [
  { title: "Undergraduate Students in Pharmacy & Biotech", category: "Academic" },
  { title: "Graduate & Master's Students in Life Sciences", category: "Academic" },
  { title: "PhD Researchers & Faculty Members", category: "Research" },
  { title: "Bioinformaticians & Computational Biologists", category: "Industry" },
  { title: "Medicinal Chemists & Organic Chemists", category: "Industry" },
  { title: "Pharmaceutical R&D Professionals", category: "Industry" },
  { title: "Computer Science & AI Engineers in Biotech", category: "AI & Tech" },
  { title: "Researchers Preparing for MS/PhD Abroad", category: "Career" },
];

export type ProgramDetail = {
  label: string;
  value: string;
  note?: string;
};

export const programDetails: ProgramDetail[] = [
  { label: "Duration", value: "3 Months (12 Weeks)" },
  { label: "Schedule", value: "3 Classes per Week" },
  { label: "Time", value: "9 PM – 11 PM (BST)" },
  { label: "Mode", value: "Live Interactive on Zoom" },
  { label: "Assignments", value: "Hands-on Weekly Notebooks" },
  { label: "Capstone", value: "1 End-to-End Target-to-Lead Project" },
  { label: "Certificate", value: "Official DeepBio Academy Certificate" },
  { label: "Fee", value: "10,200 BDT / month" },
  { label: "Payment Due", value: "5th of every month" },
  {
    label: "Google Colab",
    value: "Free GPU Tier",
    note: "No expensive local workstation needed",
  },
  {
    label: "Colab Notebooks",
    value: "Every Single Session",
    note: "Research-grade, reproducible code",
  },
  {
    label: "Enrollment Process",
    value: "Free Pre-Register → Live Q&A → Enroll",
    note: "No payment for pre-registration & first 2 sessions",
  },
];

export type LeadStat = Stat & { description: string };

export type Instructor = {
  name: string;
  role: string;
  organization: string;
  specialty: string;
  photo: string;
  lead?: boolean;
  stats?: LeadStat[];
  bio?: string;
  quote?: string;
  tags: string[];
};

export const instructors: Instructor[] = [
  {
    name: "Jubayer Hossain",
    role: "Lead Instructor & Mentor",
    organization: "DeepBio Ltd",
    specialty: "Multiomics Scientist",
    photo: "/img/nextgendd_team/jubayer.jpg",
    lead: true,
    tags: ["Cheminformatics", "CADD", "GROMACS MD", "AI Drug Design"],
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
      "You bring the curiosity — I bring the roadmap, the tools, and the accountability to get you from raw target sequence to lead candidate.",
  },
  {
    name: "Musab Shahriar",
    role: "Instructor",
    organization: "DeepBio Academy",
    specialty: "Computational Drug Discovery & Virtual Screening",
    photo: "/img/nextgendd_team/musab.jpg",
    tags: ["AutoDock Vina", "Virtual Screening", "RDKit"],
  },
  {
    name: "Pritom Kundu",
    role: "Instructor",
    organization: "DeepBio Academy",
    specialty: "AI-driven Drug Discovery & Machine Learning",
    photo: "/img/nextgendd_team/pritom.jpg",
    tags: ["PyTorch", "GNNs", "QSAR Modeling"],
  },
  {
    name: "Lamia Hasan Barsha",
    role: "Instructor",
    organization: "DeepBio Academy",
    specialty: "Computer-Aided Drug Design & Molecular Modeling",
    photo: "/img/nextgendd_team/barsha.jpg",
    tags: ["CADD", "Protein-Ligand", "py3Dmol"],
  },
  {
    name: "Naem Islam Abhi",
    role: "Instructor",
    organization: "DeepBio Academy",
    specialty: "scRNA-seq Disease Drug Discovery & Target ID",
    photo: "/img/nextgendd_team/abhi.jpg",
    tags: ["Target Discovery", "Bioinformatics", "Genomics"],
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Does pre-registration cost anything?",
    answer:
      "No. Pre-registration is completely free — no payment is collected at this stage. You simply fill in the pre-registration form, join the live Q&A session where we walk through the curriculum and answer your questions, and only then decide whether to enroll and pay.",
  },
  {
    question: "Do I need a programming or biology background to join?",
    answer:
      "No prior computational background is required. The program starts with Python foundations and a biology/chemistry primer before progressing into advanced cheminformatics, structural bioinformatics, and AI topics.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "A standard laptop with a stable internet connection is enough. All heavy computation runs in the cloud on Google Colab, which is free to use — no local GPU and no paid subscription required.",
  },
  {
    question: "Are the classes live or pre-recorded?",
    answer:
      "All 36 sessions are live and interactive, held online via Zoom three times a week (9 PM – 11 PM BST). High-definition recordings are provided after each session with lifetime access.",
  },
  {
    question: "Will I get an official verified certificate?",
    answer:
      "Yes. Upon successful completion of the program and capstone project, you receive an official verified DeepBio Academy Certificate of Completion.",
  },
  {
    question: "What is the capstone project?",
    answer:
      "In the final module you build a complete, end-to-end computational drug discovery pipeline — from target selection through virtual screening, docking, 100ns molecular dynamics, toxicology AI, and lead optimization.",
  },
  {
    question: "How is the fee structured?",
    answer:
      "The program fee is 10,200 BDT per month for 3 months, due by the 5th of each month. There are no hidden fees — every session runs on Google Colab, which is free to use.",
  },
  {
    question: "Is this program suitable for working professionals and university students?",
    answer:
      "Yes. Classes run in the evening (9 PM – 11 PM Bangladesh Time), three days a week, designed to fit around full-time work or university study schedules.",
  },
];

export const preRegisterUrl = "https://forms.gle/5aekYtmDXmLh4ePp7";

export const contactEmail = "deepbioacademy@gmail.com";

export const preRegisterNote =
  "100% Free Pre-Registration · No payment required · First 2 live sessions free trial";

export const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#notebooks", label: "Notebooks" },
  { href: "#projects", label: "Projects" },
  { href: "#tools", label: "Tools" },
  { href: "#faculty", label: "Faculty" },
  { href: "#faq", label: "FAQ" },
];
