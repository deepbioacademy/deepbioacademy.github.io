import { Users, ArrowUpRight } from "lucide-react";

function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

type Project = {
  id: string;
  number: string;
  organism: string;
  title: string;
  summary: string;
  lead: string;
  team: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  repo: string;
};

const projects: Project[] = [
  {
    id: "zebrafish-retina",
    number: "Project 01",
    organism: "Zebrafish Retina",
    title: "Müller Glia Activation During Retina Regeneration",
    summary:
      "Independent Python/Scanpy reanalysis of careg:EGFP adult zebrafish retina across an MNU photoreceptor-injury time course, reproducing 14 of 18 published panels and matching the reporter time course within 0.2 percentage points.",
    lead: "Md. Mahabubur Rahman",
    team: "Group 1",
    stack: ["Scanpy", "AnnData", "GSE202212"],
    metrics: [
      { label: "Samples", value: "8" },
      { label: "Timepoints", value: "4" },
      { label: "Panels Reproduced", value: "14/18" },
    ],
    repo: "https://github.com/mr-mahabubur-rahman/sc-project1-zebrafish-retina",
  },
  {
    id: "drosophila-brain",
    number: "Project 02",
    organism: "Drosophila Brain",
    title: "Sex-Biased Brain Response to Cocaine Exposure",
    summary:
      "Reanalysis of the Drosophila melanogaster brain following cocaine versus sucrose exposure across both sexes — rebuilding the cell-clustering atlas, annotating neuronal and glial populations, and testing sex-biased transcriptional response.",
    lead: "Tanvir Ahmed",
    team: "Group 2 · 10 members",
    stack: ["Scanpy", "Leiden", "GSE152495"],
    metrics: [
      { label: "Samples", value: "8" },
      { label: "Clusters", value: "28" },
      { label: "DE Genes", value: "50 / 46" },
    ],
    repo: "https://github.com/tanvirahmed-dr/scproject2-drosophila-brain",
  },
  {
    id: "ifn-i",
    number: "Project 03",
    organism: "Human PBMC",
    title: "Pre-Encoded Type I Interferon Responsiveness and Anti-PD-1 Therapy",
    summary:
      "Single-cell profiling of peripheral immune cells to test whether pre-existing IFN-I responsiveness tracks with anti-PD-1 outcome, using a six-gene Interferon Response Capacity signature to split IRC-High and IRC-Low cell states.",
    lead: "Suprokash Chakra Borty",
    team: "Group 3 · 9 members",
    stack: ["Scanpy", "IRC Score", "Enrichr"],
    metrics: [
      { label: "Cells", value: "94,513" },
      { label: "Genes", value: "31,054" },
      { label: "HVGs", value: "2,500" },
    ],
    repo: "https://github.com/Ahmed-Nabil-31/sc-project3-IFN-I",
  },
  {
    id: "cervical-carcinoma",
    number: "Project 04",
    organism: "Cervical Carcinoma",
    title: "Immune Remodeling Across the Cervical Cancer Progression Continuum",
    summary:
      "Reconstruction of the normal cervix–HSIL–carcinoma transcriptional landscape from nine 10x samples, mapping tumor microenvironment remodeling, immune checkpoint activation, and T-cell exhaustion signatures stage by stage.",
    lead: "Dr. Sumaya Khan Mifty",
    team: "3 authors",
    stack: ["Scanpy", "GSEApy", "GSE197461"],
    metrics: [
      { label: "Cells", value: "74,722" },
      { label: "Genes", value: "18,361" },
      { label: "Clusters", value: "27" },
    ],
    repo: "https://github.com/drsumayamifty/sc_rnaseq_immune_remodelling_cervical_carcinoma",
  },
];

const stats = [
  { value: "4", label: "Capstone Projects" },
  { value: "24+", label: "Mentees Involved" },
  { value: "4", label: "Public Repositories" },
  { value: "100%", label: "Mentee-Led" },
];

export default function CohortProjects() {
  return (
    <section id="cohort-projects" className="cp-section">
      <div className="cp-header">
        <p className="res-eyebrow">Cohort 02 Capstone Projects</p>
        <h2 className="cp-heading">Single-Cell Projects Built by Cohort 02</h2>
        <p className="cp-subtext">
          Every BMP mentee team ships a complete, reproducible single-cell
          RNA-seq analysis — raw 10x data to clustering, differential expression,
          and pathway enrichment — published as an open GitHub repository.
        </p>
      </div>

      <div className="cp-stats-row">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`cp-stat-cell ${
              i < stats.length - 1 ? "cp-stat-cell-border" : ""
            }`}
          >
            <div className="cp-stat-value">{s.value}</div>
            <div className="cp-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="cp-grid">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="cp-card"
          >
            <div className="cp-card-top">
              <span className="cp-card-organism">{p.organism}</span>
              <span className="cp-card-number">{p.number}</span>
            </div>

            <h3 className="cp-card-title">{p.title}</h3>
            <p className="cp-card-summary">{p.summary}</p>

            <div className="cp-card-metrics">
              {p.metrics.map((m) => (
                <div key={m.label} className="cp-metric">
                  <div className="cp-metric-value">{m.value}</div>
                  <div className="cp-metric-label">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="cp-card-stack">
              {p.stack.map((t) => (
                <span key={t} className="cp-tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="cp-card-foot">
              <div className="cp-card-team">
                <Users className="cp-icon" aria-hidden="true" />
                <span>
                  <strong>{p.lead}</strong> · {p.team}
                </span>
              </div>
              <span className="cp-card-repo">
                <GithubMark className="cp-icon" />
                View Repo
                <ArrowUpRight className="cp-icon-sm" aria-hidden="true" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
