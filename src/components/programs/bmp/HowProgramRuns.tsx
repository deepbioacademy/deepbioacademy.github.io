import { 
  Video, 
  Users, 
  GitPullRequest, 
  FolderCode, 
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  Sparkles,
  ShieldCheck
} from "lucide-react";

export default function HowProgramRuns() {
  const steps = [
    {
      step: "01",
      icon: Video,
      accent: "text-blue-600",
      accentBg: "bg-blue-50 border-blue-200",
      badgeBg: "bg-blue-600 text-white",
      topBorder: "border-t-blue-500",
      title: "Live Interactive Lectures",
      subtitle: "Module-by-Module Live Coding",
      desc: "Attend weekly hands-on live sessions with live screen-sharing, code walkthroughs, and real-time debugging. Each module is completed sequentially from basics to advanced analysis.",
      bullets: [
        "Live coding alongside instructor",
        "Pre-configured Conda, Python & R environments",
        "Immediate Q&A and troubleshooting"
      ]
    },
    {
      step: "02",
      icon: Users,
      accent: "text-teal-600",
      accentBg: "bg-teal-50 border-teal-200",
      badgeBg: "bg-teal-600 text-white",
      topBorder: "border-t-teal-500",
      title: "Hands-on Group Projects",
      subtitle: "Authentic Disease Datasets",
      desc: "Apply each completed module to authentic research datasets. Form focused study teams to process raw sequencing reads, run differential expression, and construct pathways together.",
      bullets: [
        "Real patient & clinical datasets (GEO/TCGA)",
        "Collaborative dry-lab teamwork",
        "Milestone-based sprint deliverables"
      ]
    },
    {
      step: "03",
      icon: GitPullRequest,
      accent: "text-indigo-600",
      accentBg: "bg-indigo-50 border-indigo-200",
      badgeBg: "bg-indigo-600 text-white",
      topBorder: "border-t-indigo-500",
      title: "Participant Peer-Review",
      subtitle: "Code Audits & Feedback",
      desc: "Participate in structured peer review among cohort participants. Review fellow mentees' code, validate biological hypotheses, reproduce figures, and give actionable critiques.",
      bullets: [
        "Cross-team code & pipeline reviews",
        "Validation of statistical assumptions",
        "Instructor & TA moderation"
      ]
    },
    {
      step: "04",
      icon: FolderCode,
      accent: "text-purple-600",
      accentBg: "bg-purple-50 border-purple-200",
      badgeBg: "bg-purple-600 text-white",
      topBorder: "border-t-purple-500",
      title: "Verified GitHub Portfolio",
      subtitle: "Publication & Admission Ready",
      desc: "Graduate with clean, documented, reproducible GitHub repositories that prove your dry-lab competence to international professors, PhD admissions committees, and employers.",
      bullets: [
        "Production-grade reproducible scripts",
        "Publication-quality Volcano & UMAP plots",
        "Tangible proof of dry-lab mastery"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-slate-50/80 border-t border-slate-200 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest shadow-2xs">
            <Workflow className="w-3.5 h-3.5" /> LEARNING &amp; RESEARCH WORKFLOW
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            How Does the Program <span className="text-blue-600">Run?</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A structured 4-stage execution loop designed to transform theoretical knowledge into verifiable research output and publication-grade pipelines.
          </p>
        </div>

        {/* 4-Step Process Flow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className={`bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm ${item.topBorder} border-t-4 flex flex-col justify-between space-y-6 hover:-translate-y-2 hover:shadow-xl hover:border-slate-300 transition-all duration-300 group relative`}
              >
                <div className="space-y-4">
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-2xl ${item.accentBg} border flex items-center justify-center ${item.accent} shadow-2xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-xl font-mono text-xs font-black ${item.badgeBg} shadow-2xs`}>
                      Step {item.step}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5 font-mono">
                      {item.subtitle}
                    </div>
                  </div>

                  {/* Body Text */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bullets */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Workflow Progression Banner */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Continuous Feedback &amp; Execution Cycle
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Every module follows this loop: live lecture mastery → hands-on group implementation → participant peer-review → production GitHub commit.
                </p>
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-2 text-xs font-mono font-bold text-slate-700 shrink-0">
              <span className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700">Live Lecture</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-700">Group Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700">Peer Review</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="px-3 py-1.5 rounded-lg bg-purple-50 border border-purple-200 text-purple-700">GitHub Portfolio</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
