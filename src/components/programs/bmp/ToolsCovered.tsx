import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const tools = [
  { name: "Linux & HPC", logo: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg", category: "Core Infrastructure" },
  { name: "Conda / Mamba", logo: `${BASE}/img/logos/bioconductor.png`, category: "Environment Isolation" },
  { name: "R & Bioconductor", logo: "https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg", category: "Statistical Omics" },
  { name: "Seurat v5", logo: `${BASE}/img/logos/seurat.png`, category: "Single-Cell Genomics" },
  { name: "DESeq2", logo: `${BASE}/img/logos/pydeseq2.png`, category: "Differential Expression" },
  { name: "10x Cell Ranger", logo: `${BASE}/img/logos/nextflow.png`, category: "scRNA-Seq Quantification" },
  { name: "Visium HD / Xenium", logo: `${BASE}/img/logos/nextflow.png`, category: "Spatial Transcriptomics" },
  { name: "SpatialExperiment", logo: `${BASE}/img/logos/bioconductor.png`, category: "Spatial R Architecture" },
  { name: "STAR / Salmon", logo: `${BASE}/img/logos/hpc.jpg`, category: "High-Speed Alignment" },
  { name: "clusterProfiler", logo: "https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg", category: "GSEA Pathways" },
  { name: "GitHub", logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg", category: "Reproducible Research" },
  { name: "RStudio / Posit", logo: "https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg", category: "R IDE" },
];

export default function ToolsCovered() {
  return (
    <section className="tools-section">
      <div className="tools-inner">
        <p className="tools-eyebrow">Technical Ecosystem</p>
        <h2 className="tools-heading">Production-Grade Tools</h2>
        <p className="tools-subtext">
          Master the exact software frameworks, packages, and cloud pipelines used by world-class genomics laboratories.
        </p>

        <div className="tools-grid">
          {tools.map((tool) => (
            <div key={tool.name} className="tool-card">
              <div className="tool-logo-wrap">
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  className="tool-logo"
                  loading="lazy"
                />
              </div>
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
