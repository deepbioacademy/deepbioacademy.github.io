import { FileText, Users, Award, Database, Cpu, Globe2 } from "lucide-react";

export default function AcademyStats() {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      value: "3K+",
      label: "Research Mentees & Learners",
      sub: "Across Medicine, Biotech & Computer Science",
    },
    {
      icon: <FileText className="w-6 h-6 text-teal-600" />,
      value: "20+",
      label: "Scientific Manuscripts",
      sub: "Published or under peer-review in Q1/Q2 journals",
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-600" />,
      value: "100+",
      label: "GPU Compute Hours",
      sub: "Molecular dynamics & deep learning simulations",
    },
    {
      icon: <Database className="w-6 h-6 text-pink-600" />,
      value: "100+",
      label: "Datasets Analyzed",
      sub: "Bulk RNA-seq, Single-Cell & Spatial GEO series",
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-100 flex flex-col items-center text-center space-y-2 hover:shadow-md transition-shadow"
            >
              <div className="p-3 rounded-xl bg-white shadow-xs mb-1">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-800">
                {stat.label}
              </div>
              <p className="text-xs text-slate-500 max-w-xs">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
