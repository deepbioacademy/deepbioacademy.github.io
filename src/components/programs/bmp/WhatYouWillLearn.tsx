import { Terminal, Dna, Sparkles, MapPin } from "lucide-react";

export default function WhatYouWillLearn() {
  const pillars = [
    {
      icon: Terminal,
      accent: "text-blue-600",
      accentBg: "bg-blue-50 border-blue-200",
      topBorder: "border-t-blue-500",
      pill: "The Core Foundation",
      title: "Technical Foundation: Linux + R",
      desc: "Learn to navigate the command line with confidence and write statistical R code. You'll master environment setup, file handling, and data visualization from scratch without feeling overwhelmed.",
    },
    {
      icon: Dna,
      accent: "text-teal-600",
      accentBg: "bg-teal-50 border-teal-200",
      topBorder: "border-t-teal-500",
      pill: "Tissue-Level Profiling",
      title: "Bulk Transcriptomics",
      desc: "Discover which genes turn on or off in diseases like cancer. You'll take raw sequencing reads, quantify gene expression, find altered pathways, and combine multiple datasets into a powerful meta-analysis.",
    },
    {
      icon: Sparkles,
      accent: "text-indigo-600",
      accentBg: "bg-indigo-50 border-indigo-200",
      topBorder: "border-t-indigo-500",
      pill: "Single-Cell Resolution",
      title: "Single-Cell Transcriptomics",
      desc: "Zoom inside tissue to study thousands of cells individually. You'll isolate cell types, discover rare immune cell populations, and trace how cell states change during disease development.",
    },
    {
      icon: MapPin,
      accent: "text-pink-600",
      accentBg: "bg-pink-50 border-pink-200",
      topBorder: "border-t-pink-500",
      pill: "Tissue Spatial Biology",
      title: "Spatial Transcriptomics",
      desc: "Map active genes directly onto tissue microscope images. See exactly where disease cells live, how tumor microenvironments interact, and where therapeutic targets are located in 2D space.",
    },
  ];

  return (
    <section id="what-you-will-learn" className="py-20 lg:py-24 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest">
            CORE PILLARS
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            What You&apos;ll <span className="text-blue-600">Learn</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A comprehensive, hands-on path from computational fundamentals to the cutting-edge of modern genomics — explained simply and step-by-step.
          </p>
        </div>

        {/* 4 Clean, Plain-Language Cards without footer text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className={`bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm ${p.topBorder} border-t-4 flex flex-col justify-start space-y-4 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 transition-all duration-300 group`}
              >
                {/* Icon & Pill */}
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-2xl ${p.accentBg} border flex items-center justify-center ${p.accent} shadow-2xs`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 font-mono tracking-tight">
                    {p.pill}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors leading-snug">
                  {p.title}
                </h3>

                {/* Plain Language Body */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
