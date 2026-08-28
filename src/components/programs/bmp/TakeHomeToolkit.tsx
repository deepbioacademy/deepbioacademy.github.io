import { Terminal, Dna, Layers, FolderGit2, BarChart2 } from "lucide-react";

export default function TakeHomeToolkit() {
  const toolkits = [
    {
      id: "bulk-rnaseq",
      icon: Dna,
      accent: "text-blue-600",
      accentBg: "bg-blue-50 border-blue-200",
      topBorder: "border-t-blue-500",
      title: "Bulk_RNAseq_Pipeline/",
      desc: "End-to-end standard RNA-seq pipeline from raw sequencing reads to count matrices, DESeq2 differential expression, and GSEA pathway discovery.",
      tree: [
        "Bulk_RNAseq_Pipeline/",
        "├── 01_fastp_qc.sh",
        "├── 02_star_salmon.sh",
        "├── 03_deseq2_dge.R",
        "└── 04_gsea_enrich.R"
      ]
    },
    {
      id: "bulk-rnaseq-meta",
      icon: BarChart2,
      accent: "text-teal-600",
      accentBg: "bg-teal-50 border-teal-200",
      topBorder: "border-t-teal-500",
      title: "Bulk_RNAseq_MetaPipeline/",
      desc: "Multi-cohort transcriptomics meta-analysis combining independent studies using ComBat batch removal and Random Effects Models (REM).",
      tree: [
        "Bulk_RNAseq_MetaPipeline/",
        "├── 01_geo_download.R",
        "├── 02_combat_batch.R",
        "├── 03_meta_de_rem.R",
        "└── 04_forest_plots.R"
      ]
    },
    {
      id: "single-cell",
      icon: Terminal,
      accent: "text-indigo-600",
      accentBg: "bg-indigo-50 border-indigo-200",
      topBorder: "border-t-indigo-500",
      title: "SingleCell_Seurat_Pipeline/",
      desc: "Single-cell R workflows — 10x Cell Ranger QC, DoubletFinder, Harmony integration, UMAP clustering, and SingleR automated annotation.",
      tree: [
        "SingleCell_Seurat_Pipeline/",
        "├── 01_cellranger_qc.R",
        "├── 02_harmony_umap.R",
        "├── 03_singler_annot.R",
        "└── 04_prop_testing.R"
      ]
    },
    {
      id: "spatial-omics",
      icon: Layers,
      accent: "text-pink-600",
      accentBg: "bg-pink-50 border-pink-200",
      topBorder: "border-t-pink-500",
      title: "Spatial_Transcriptomics_R/",
      desc: "10x Visium HD & Xenium In Situ pipelines — spot-level QC, SpatialExperiment objects, BayesSpace domain clustering, and tissue niche modeling.",
      tree: [
        "Spatial_Transcriptomics_R/",
        "├── 01_visium_hd_qc.R",
        "├── 02_bayesspace_clust.R",
        "├── 03_spatial_de.R",
        "└── 04_niche_mapping.R"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Clean, Clear Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono font-bold uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-600" /> TAKE-HOME TOOLKIT
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Ready-to-Use <span className="text-blue-600">Research Pipelines</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Get fully annotated, production-ready scripts you can immediately run on your own research datasets.
          </p>
        </div>

        {/* 4 Focused Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolkits.map((tk) => {
            const Icon = tk.icon;
            return (
              <div 
                key={tk.id}
                className={`bg-white rounded-3xl p-6 border border-slate-200 shadow-sm ${tk.topBorder} border-t-4 flex flex-col justify-between space-y-5 hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 group`}
              >
                <div className="space-y-3">
                  {/* Icon */}
                  <div className={`w-9 h-9 rounded-xl ${tk.accentBg} border flex items-center justify-center ${tk.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-sm sm:text-base font-mono font-bold text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
                      {tk.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      {tk.desc}
                    </p>
                  </div>
                </div>

                {/* Clean Terminal Code Box */}
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1 overflow-x-auto shadow-inner">
                  {tk.tree.map((line, idx) => (
                    <div 
                      key={idx} 
                      className={idx === 0 ? "text-emerald-400 font-bold" : "text-slate-400"}
                    >
                      {line}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Focused Bottom Note */}
        <div className="text-center pt-2">
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Start from raw sequencing reads or from a count matrix — the pipelines meet your data wherever it is.
          </p>
        </div>

      </div>
    </section>
  );
}
