import { Cpu, ShieldCheck, Sparkles, GraduationCap } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Cpu,
      color: "bg-teal-100 text-teal-800",
      title: "Cloud-First & Zero Local Setup",
      description:
        "Every session and assignment runs in Google Colab with free GPU acceleration. No expensive $5,000 workstations or broken Linux dependencies — start coding in minutes.",
    },
    {
      icon: ShieldCheck,
      color: "bg-cyan-100 text-cyan-800",
      title: "Cheminformatics & CADD Docking",
      description:
        "Master the industry standard: RDKit molecular graphs, ChEMBL/PubChem APIs, PDB active site preparation, and AutoDock Vina high-throughput virtual screening.",
    },
    {
      icon: Sparkles,
      color: "bg-emerald-100 text-emerald-800",
      title: "100ns GROMACS MD & GNNs",
      description:
        "Simulate dynamic protein-ligand stability over 100ns trajectories, compute RMSD/RMSF curves, and train Graph Neural Networks in PyTorch Geometric.",
    },
    {
      icon: GraduationCap,
      color: "bg-amber-100 text-amber-800",
      title: "Lab Recruitment & Q1 Papers",
      description:
        "Top performers from the capstone project are invited to join DeepBio's research lab as Research Assistants to co-author peer-reviewed publications.",
    },
  ];

  return (
    <section id="overview" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>DeepBio Educational Mission</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why NextGen Drug Discovery with AI?
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            <strong className="text-slate-900 font-semibold">DeepBio Academy</strong>{" "}
            bridges the gap between computational chemistry, structural bioinformatics, and artificial
            intelligence. We train students and researchers with the exact skills, pipelines, and
            reproducible codebases required in pharmaceutical R&amp;D and top international labs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 card-hover space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center font-bold text-xl`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
