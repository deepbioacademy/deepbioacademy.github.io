import { FC } from "react";


const sessions = [
  {
    week: "Week 1",
    topics: [
      { 
        num: "01",
        title: "Bioinformatics Workflow Setup", 
        type: "Environment Setup",
        desc: "Build a production-grade foundation. Master environment isolation to ensure your research is reproducible across any lab cluster."
      },
      { 
        num: "02",
        title: "Mastering Linux for Bioinformatics", 
        type: "Linux",
        desc: "Gain the primary skill for computational biology. Navigate remote servers and automate heavy processing tasks with confidence."
      }
    ]
  },
  {
    week: "Week 2",
    topics: [
      { 
        num: "03",
        title: "Getting Started with Slurm (HPC)", 
        type: "HPC",
        desc: "Learn to handle massive datasets. Master job submission on High-Performance Computing clusters—a prerequisite for top-tier PhD labs."
      },
      { 
        num: "04",
        title: "HPC Data Management", 
        type: "HPC",
        desc: "Professional data standards. Learn secure transfer and sharing protocols used in collaborative international research projects."
      }
    ]
  },
  {
    week: "Week 3",
    topics: [
      { 
        num: "05",
        title: "Environment Isolation with Conda", 
        type: "Conda / Mamba",
        desc: "End dependency conflicts. Isolate your analysis environments using Conda and Mamba so your pipelines run reliably across any system."
      },
      { 
        num: "06",
        title: "Nextflow and nf-core", 
        type: "Nextflow",
        desc: "Master industry-standard pipelines. Build scalable, fault-tolerant workflows that are the gold standard in modern genomics."
      }
    ]
  },
  {
    week: "Week 4",
    topics: [
      { 
        num: "07",
        title: "Python for Bioinformatics", 
        type: "Scientific Programming",
        desc: "Go beyond basic scripts. Build custom tools to parse unique biological formats and integrate AI models into your research."
      },
      { 
        num: "08",
        title: "R for Bioinformatics", 
        type: "Scientific Programming",
        desc: "The language of statistical genomics. Master data wrangling and publication-quality visualization for high-impact journals."
      }
    ]
  },
  {
    week: "Week 5",
    topics: [
      { 
        num: "09",
        title: "Variant Calling with GATK", 
        type: "Genomics & WGS/WES",
        desc: "Identify disease-causing mutations. Learn the Broad Institute's best-practice workflows for germline and somatic discovery."
      },
      { 
        num: "10",
        title: "Loci Discovery with PLINK", 
        type: "Genomics & WGS/WES",
        desc: "Statistical genetics mastery. Perform large-scale association studies to link genetic variants to complex phenotypes."
      }
    ]
  },
  {
    week: "Week 6",
    topics: [
      { 
        num: "11",
        title: "RNAseq: Fastq to Counts", 
        type: "Bulk RNA-seq",
        desc: "Upstream processing. Master quality control and high-speed alignment—the engine room of transcriptomic research."
      },
      { 
        num: "12",
        title: "RNAseq: Differential Expression", 
        type: "Bulk RNA-seq",
        desc: "Downstream analysis. Master DESeq2/edgeR to find biological signal in noisy data and identify key disease biomarkers."
      }
    ]
  },
  {
    week: "Week 7",
    topics: [
      { 
        num: "13",
        title: "Pathways & Functional Insights", 
        type: "Bulk RNA-seq",
        desc: "Biological interpretation. Use GSEA and Over-Representation Analysis to turn gene lists into actionable biological mechanisms."
      },
      { 
        num: "14",
        title: "Meta-Analysis of Public Data", 
        type: "Bulk RNA-seq",
        desc: "Leverage global resources. Mine GEO and TCGA to validate your findings and increase the statistical power of your research."
      }
    ]
  },
  {
    week: "Week 8",
    topics: [
      { 
        num: "15",
        title: "Single-Cell: Fastq to Matrix", 
        type: "Single-Cell RNA-seq",
        desc: "The future of genomics. Master CellRanger and pseudo-bulk processing for high-resolution cellular maps."
      },
      { 
        num: "16",
        title: "Single-Cell: QC & Filtering", 
        type: "Single-Cell RNA-seq",
        desc: "Ensure data integrity. Learn to identify and remove doublets and low-quality cells to prevent false discoveries."
      }
    ]
  },
  {
    week: "Week 9",
    topics: [
      { 
        num: "17",
        title: "Integration & Clustering", 
        type: "Single-Cell RNA-seq",
        desc: "Batch effect correction. Merge multiple datasets and identify unique cell populations across different biological conditions."
      },
      { 
        num: "18",
        title: "Cell Type Identification", 
        type: "Single-Cell RNA-seq",
        desc: "Annotation expertise. Use reference-based and marker-based methods to accurately name clusters—a critical lab skill."
      }
    ]
  },
  {
    week: "Week 10",
    topics: [
      { 
        num: "19",
        title: "Cell-Specific Dynamics", 
        type: "Single-Cell RNA-seq",
        desc: "Advanced single-cell logic. Perform proportion testing and trajectory inference to see how cell states change over time."
      },
      { 
        num: "20",
        title: "Harmonized Single-Cell Data", 
        type: "Single-Cell RNA-seq",
        desc: "Public data mastery. Learn to integrate your experimental data with large-scale human cell atlases."
      }
    ]
  },
  {
    week: "Week 11",
    topics: [
      { 
        num: "21",
        title: "AI for Life Sciences: Intro", 
        type: "AI",
        desc: "The new paradigm. Learn how Large Language Models and AI agents are revolutionizing bioinformatics productivity."
      },
      { 
        num: "22",
        title: "Machine Learning Models", 
        type: "AI",
        desc: "Predictive biology. Master scikit-learn for classification and regression tasks on high-dimensional omics data."
      }
    ]
  },
  {
    week: "Week 12",
    topics: [
      { 
        num: "23",
        title: "Deep Learning Models", 
        type: "AI",
        desc: "Advanced neural networks. Explore how transformer architectures are used for protein folding and sequence prediction."
      },
      { 
        num: "24",
        title: "Scientific Writing", 
        type: "Writing",
        desc: "Get published. Learn to write methods and results that meet the rigorous standards of international peer-reviewed journals."
      }
    ]
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="cur-section">
      <div className="cur-inner">
        <p className="cur-eyebrow">Program Timeline</p>

        <h2 className="cur-heading">
          The 12-Week Roadmap
        </h2>
        <p className="cur-subtext">
          A rigorous, session-by-session progression from computational foundations to advanced single-cell omics and AI.
        </p>

        <div className="cur-grid">
          {sessions.map((s, i) => (
            <div key={i} className="cur-card">
              <div className="cur-card-header">
                <span className="cur-week-badge">{s.week}</span>
              </div>
              <div className="cur-card-content">
                {s.topics.map((t, j) => (
                  <div key={j} className="cur-topic-item">
                    <div className="cur-topic-meta">
                      <span className="cur-session-num">Session {t.num}</span>
                      <span className="cur-topic-type">{t.type}</span>
                    </div>
                    <div className="cur-topic-title">{t.title}</div>
                    <p className="cur-topic-desc">{t.desc}</p>
                    {j < s.topics.length - 1 && <div className="cur-topic-divider" />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
