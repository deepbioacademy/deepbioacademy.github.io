export default function AIPerspective() {
  const amplifyPoints = [
    "Instant syntax assistance & rapid shell script drafting",
    "Fast environment configuration & container troubleshooting",
    "Instant Bioconductor, Python & package lookups",
    "Automated pipeline documentation & reproducible code formatting",
    "Accelerated publication figure styling and palette customization",
  ];

  const fundamentalsPoints = [
    "Generates plausible-looking code with invalid statistical assumptions",
    "Hallucinates nonexistent Python & R functions, parameters, or genome builds",
    "Confuses basic overlap tests with true GSEA — leading to journal rejections",
    "You cannot direct, debug, or validate what you don't deeply understand",
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono font-bold uppercase tracking-widest">
            PERSPECTIVE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Bioinformatics in the <span className="text-blue-600">Era of AI</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Why domain mastery in Linux, Python &amp; R is the single most valuable advantage for modern life science researchers.
          </p>
        </div>

        {/* 2 High-Conversion Comparison Cards with Interactive Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Can AI replace bioinformaticians? */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm border-t-4 border-t-emerald-500 flex flex-col justify-between space-y-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-300 transition-all duration-300 cursor-default group">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight group-hover:text-emerald-950 transition-colors">
                Can AI replace bioinformaticians?
              </h3>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 text-xs sm:text-sm font-bold shadow-2xs group-hover:bg-emerald-100 transition-colors">
                  <span>✓</span> No — It 10x Amplifies Trained Scientists
                </span>
              </div>

              <p className="text-xs sm:text-sm font-medium text-slate-600 pt-1">
                AI eliminates tedious syntax barriers so you focus on high-impact discovery:
              </p>

              <ul className="space-y-3 pt-1">
                {amplifyPoints.map((point, i) => (
                  <li 
                    key={i} 
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium p-1.5 -mx-1.5 rounded-lg hover:bg-emerald-50/60 transition-colors"
                  >
                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Do I still need to learn bioinformatics? */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm border-t-4 border-t-rose-500 flex flex-col justify-between space-y-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/10 hover:border-rose-300 transition-all duration-300 cursor-default group">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight group-hover:text-rose-950 transition-colors">
                Do I still need to learn bioinformatics?
              </h3>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-300 text-rose-700 text-xs sm:text-sm font-bold shadow-2xs group-hover:bg-rose-100 transition-colors">
                  <span>!</span> Domain Mastery is Non-Negotiable
                </span>
              </div>

              <p className="text-xs sm:text-sm font-medium text-slate-600 pt-1">
                AI models lack biological intuition and fail <strong className="text-slate-900 font-bold">silently</strong> on raw data:
              </p>

              <ul className="space-y-3 pt-1">
                {fundamentalsPoints.map((point, i) => (
                  <li 
                    key={i} 
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium p-1.5 -mx-1.5 rounded-lg hover:bg-rose-50/60 transition-colors"
                  >
                    <span className="text-rose-500 font-bold shrink-0 mt-0.5">✗</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Nature npj Digital Medicine Academic Citation */}
        <div className="pt-2 text-center border-t border-slate-100">
          <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-slate-700">Perspective Reference:</span> Goh, W.W.B., Polster, A., Wong, L. &amp; Cvijovic, M.{" "}
            <em className="text-slate-700 font-medium">&ldquo;Rethinking bioinformatics expertise in the era of artificial intelligence.&rdquo;</em>{" "}
            <span className="font-semibold text-slate-800">npj Digital Medicine</span> (Nature Portfolio, 2026).{" "}
            <a
              href="https://www.nature.com/articles/s41746-026-02777-1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 hover:underline font-semibold inline-flex items-center gap-1 ml-1"
            >
              <span>View Paper</span>
              <svg className="w-3 h-3 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
