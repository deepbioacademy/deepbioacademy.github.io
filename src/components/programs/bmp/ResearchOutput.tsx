type Output = {
  cancer: string;
  title: string;
  summary: string;
  metrics: { label: string; value: string }[];
  program: "GSA Internship" | "BMP Cohort 01";
};

const outputs: Output[] = [
  {
    cancer: "Colorectal Cancer",
    title:
      "Defining a Robust Consensus Transcriptome in Colorectal Cancer: Cross-Platform Validation and Machine Learning-Based Risk Stratification",
    summary:
      "Random-effects meta-analysis across 13 RNA-seq cohorts (n = 1,124) defining a platform-independent consensus transcriptome with a 52-gene LASSO-Cox risk model.",
    metrics: [
      { label: "Cohorts", value: "13" },
      { label: "DEGs", value: "2,170" },
      { label: "C-index", value: "0.753" },
    ],
    program: "GSA Internship",
  },
  {
    cancer: "Esophageal Cancer",
    title:
      "Histotype-Independent Molecular Drivers of Esophageal Cancer Identified by Multi-Cohort Transcriptomic Meta-Analysis",
    summary:
      "Meta-analysis of 16 GEO cohorts spanning ESCC and EAC histotypes, identifying consensus drivers and a 37-gene LASSO-Cox prognostic model.",
    metrics: [
      { label: "Cohorts", value: "16" },
      { label: "DEGs", value: "2,082" },
      { label: "AUC", value: "0.991" },
    ],
    program: "GSA Internship",
  },
  {
    cancer: "Kidney Cancer",
    title:
      "A Multi-Cohort Transcriptomic Meta-Analysis Identifies a Consensus Gene Signature for Kidney Renal Cell Carcinoma",
    summary:
      "Integration of 13 GEO cohorts with TCGA KIRC/KIRP validation (Spearman r = +0.905), yielding a 53-gene risk score and Random Forest classifier.",
    metrics: [
      { label: "Cohorts", value: "13" },
      { label: "DEGs", value: "2,766" },
      { label: "C-index", value: "0.795" },
    ],
    program: "GSA Internship",
  },
  {
    cancer: "Liver Cancer",
    title:
      "The Essential 30-Gene Signature of Hepatocellular Carcinoma: A Conservative Multi-Cohort Meta-Analysis",
    summary:
      "Conservative meta-analysis of 7 cohorts identifying 30 study-invariant drivers, revealing metabolic reprogramming and RTKN2 as a prognostic candidate.",
    metrics: [
      { label: "Cohorts", value: "7" },
      { label: "Signature", value: "30 genes" },
      { label: "Hub genes", value: "5" },
    ],
    program: "GSA Internship",
  },
  {
    cancer: "Pancreatic Cancer",
    title:
      "Decoding Pancreatic Ductal Adenocarcinoma Drivers via Consensus Meta-Analysis: A Prognostic Gene Signature Resilient to Stromal Contamination",
    summary:
      "Meta-analysis of 7 GEO cohorts isolating 418 consensus PDAC drivers resilient to desmoplastic stroma, with an 11-gene LASSO-Cox risk model.",
    metrics: [
      { label: "Cohorts", value: "7" },
      { label: "DEGs", value: "418" },
      { label: "C-index", value: "0.666" },
    ],
    program: "GSA Internship",
  },
  {
    cancer: "Glioblastoma",
    title:
      "Multi-Cohort Transcriptomic Meta-Analysis of Glioblastoma Reveals a Convergent Immune-Myeloid Hub Network Associated with Adverse Prognosis and Druggable Targets",
    summary:
      "Cohort 01 meta-analysis uncovering a convergent immune-myeloid hub network in glioblastoma, linked to adverse prognosis and druggable targets.",
    metrics: [
      { label: "Type", value: "Meta-analysis" },
      { label: "Focus", value: "Immune-myeloid" },
      { label: "Output", value: "Druggable hubs" },
    ],
    program: "BMP Cohort 01",
  },
];

const stats = [
  { value: "6", label: "Manuscripts" },
  { value: "60+", label: "Cohorts Integrated" },
  { value: "2", label: "Programs" },
  { value: "100%", label: "Mentee-Led" },
];

export default function ResearchOutput() {
  return (
    <section id="research-output" className="ro-section">
      <div className="ro-header">
        <p className="res-eyebrow">Research Output</p>
        <h2 className="ro-heading">Manuscripts From My Mentees</h2>
        <p className="ro-subtext">
          Real, publication-grade research produced by mentees under my
          supervision across the GSA Bioinformatics Internship and BMP Cohort 01 —
          cancer transcriptomics meta-analyses, end to end.
        </p>
      </div>

      <div className="ro-stats-row">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`ro-stat-cell ${
              i < stats.length - 1 ? "ro-stat-cell-border" : ""
            }`}
          >
            <div className="ro-stat-value">{s.value}</div>
            <div className="ro-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="ro-grid">
        {outputs.map((o) => (
          <div key={o.title} className="ro-card">
            <div className="ro-card-top">
              <span className="ro-card-cancer">{o.cancer}</span>
              <span className="ro-card-program">{o.program}</span>
            </div>

            <h3 className="ro-card-title">{o.title}</h3>
            <p className="ro-card-summary">{o.summary}</p>

            <div className="ro-card-metrics">
              {o.metrics.map((m) => (
                <div key={m.label} className="ro-metric">
                  <div className="ro-metric-value">{m.value}</div>
                  <div className="ro-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
