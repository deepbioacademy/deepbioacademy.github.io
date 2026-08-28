import { Users, Code2, UserCheck, Sparkles } from "lucide-react";

interface TASeat {
  id: string;
  role: string;
  focus: string;
  status: string;
}

const incomingTAs: TASeat[] = [
  {
    id: "TA-01",
    role: "Lead Teaching Assistant",
    focus: "Linux HPC & NGS Alignment Pipelines",
    status: "Incoming Cohort 03",
  },
  {
    id: "TA-02",
    role: "Teaching Assistant",
    focus: "Bulk RNA-seq & DESeq2 Differential Expression",
    status: "Incoming Cohort 03",
  },
  {
    id: "TA-03",
    role: "Teaching Assistant",
    focus: "Multi-Cohort Meta-Analysis & Public Data (GEO/TCGA)",
    status: "Incoming Cohort 03",
  },
  {
    id: "TA-04",
    role: "Teaching Assistant",
    focus: "Single-Cell RNA-seq (scRNA-seq) & Seurat v5",
    status: "Incoming Cohort 03",
  },
  {
    id: "TA-05",
    role: "Teaching Assistant",
    focus: "Spatial Transcriptomics (Visium HD & Xenium)",
    status: "Incoming Cohort 03",
  },
  {
    id: "TA-06",
    role: "Teaching Assistant",
    focus: "R Bioconductor & Publication Data Visualization",
    status: "Incoming Cohort 03",
  },
  {
    id: "TA-07",
    role: "Teaching Assistant",
    focus: "Bash Automation, Conda Environments & Reproducibility",
    status: "Incoming Cohort 03",
  },
  {
    id: "TA-08",
    role: "Teaching Assistant",
    focus: "Weekly Milestone Reviews & 1-on-1 Code Debugging",
    status: "Incoming Cohort 03",
  },
];

export default function TeachingAssistants() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest">
            <Users className="w-3.5 h-3.5 text-blue-600" /> ACADEMIC SUPPORT &amp; CODE REVIEWS
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Dedicated Lab Support: <span className="text-blue-600">8 Teaching Assistants</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            You are never left stuck on a broken pipeline or terminal error. Our team of 8 Teaching Assistants provides continuous 1-on-1 code debugging, milestone reviews, and live breakout support throughout the entire cohort.
          </p>
        </div>

        {/* 8-Card Placeholder Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {incomingTAs.map((ta) => (
            <div
              key={ta.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                {/* Placeholder Avatar & Identifier */}
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 flex items-center justify-center text-blue-600 group-hover:border-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                        {ta.id}
                      </span>
                    </div>
                    <span className="inline-block text-[11px] font-semibold text-blue-700 font-mono mt-1">
                      {ta.role}
                    </span>
                  </div>
                </div>

                {/* Focus Area */}
                <div className="space-y-1.5 text-xs">
                  <div className="text-slate-800 font-medium flex items-start gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{ta.focus}</span>
                  </div>
                </div>
              </div>

              {/* Status Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-500">
                <span className="flex items-center gap-1 text-slate-600">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  {ta.status}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold text-[10px]">
                  Active Support
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
