"use client";
import { useState } from "react";

const cards = [
  {
    num: "01",
    label: "Strategic Roadmap",
    title: "A Career Path for Global Research",
    body: "Receive a complete bioinformatics roadmap tailored for career advancement in international academia and industry. Understand exactly what you need to master to be competitive in USA and European graduate programs.",
    accent: "#2563eb",
  },
  {
    num: "02",
    label: "Publication Pathway",
    title: "Independent Research Excellence",
    body: "The program prepares every participant for independent publication. While there is no authorship guarantee, you will master the manuscript writing and data standards required to lead your own research projects.",
    accent: "#059669",
  },
  {
    num: "03",
    label: "Reproducible Portfolio",
    title: "GitHub-Ready Research Assets",
    body: "Build a complete, end-to-end research portfolio hosted on GitHub. Demonstrate your technical mastery with reproducible code, Nextflow pipelines, and production-grade visualizations to prospective supervisors and employers.",
    accent: "#7c3aed",
  },
];

const ngsCards = [
  {
    num: "01",
    label: "Academia",
    title: "You understand the biology — take ownership of the data",
    body: "RNA-seq is now routine across labs of every scale, yet most researchers still outsource the analysis. No collaborator shares your depth of knowledge about experimental controls, design rationale, or underlying biology. Handling your own data leads to faster turnarounds and more hypothesis-driven, accurate findings.",
    accent: "#2563eb",
  },
  {
    num: "02",
    label: "Industry",
    title: "Bridging bench and computation is a genuine career edge",
    body: "Pharmaceutical and biotech teams increasingly hire researchers who move fluidly between wet and dry lab work. This profile remains rare — and it reflects directly in compensation and the scope of roles available. Specialists anchored to only one side consistently find fewer doors open to them.",
    accent: "#059669",
  },
  {
    num: "03",
    label: "Career",
    title: "The field has shifted — computational literacy is now the floor",
    body: "NGS data spans every corner of life sciences today. Research groups without in-house analysis capability are waiting on collaborators, slipping on deadlines, and falling behind in competitive publication landscapes. Working fluently with sequencing data is no longer a differentiator — it's a baseline expectation.",
    accent: "#7c3aed",
  },
];

export default function WhyThisMatters() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="wtm-section">
      <div className="wtm-inner">
        {/* Label */}
        <p className="wtm-eyebrow">Program Outcomes</p>

        <h2 className="wtm-heading">Research Independence</h2>
        <p className="wtm-subtext">
          Computational skills are now a baseline requirement for modern life sciences research.
        </p>

        {/* Cards */}
        <div className="wtm-grid">
          {cards.map((c) => (
            <div
              key={c.num}
              className="wtm-card"
              style={{
                border: `1px solid ${hoveredCard === c.num ? c.accent + "55" : "var(--border)"}`,
                transform: hoveredCard === c.num ? "translateY(-3px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredCard(c.num)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="wtm-card-header">
                <span
                  className="wtm-badge"
                  style={{
                    color: c.accent,
                    background: c.accent + "18",
                    border: `1px solid ${c.accent}33`,
                  }}
                >
                  {c.num} / {c.label}
                </span>
              </div>
              <h3 className="wtm-card-title">{c.title}</h3>
              <p className="wtm-card-body">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="wtm-divider" />

        {/* NGS sub-section */}
        <p className="wtm-eyebrow">Why This Matters</p>
        <h2 className="wtm-heading">Critical Skills</h2>
        <p className="wtm-subtext">
          The question is no longer if your research involves NGS data, but whether you can analyze it directly.
        </p>

        <div className="wtm-grid">
          {ngsCards.map((c) => (
            <div
              key={"ngs-" + c.num}
              className="wtm-card"
              style={{
                border: `1px solid ${hoveredCard === "ngs-" + c.num ? c.accent + "55" : "var(--border)"}`,
                transform: hoveredCard === "ngs-" + c.num ? "translateY(-3px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredCard("ngs-" + c.num)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="wtm-card-header">
                <span
                  className="wtm-badge"
                  style={{
                    color: c.accent,
                    background: c.accent + "18",
                    border: `1px solid ${c.accent}33`,
                  }}
                >
                  {c.num} / {c.label}
                </span>
              </div>
              <h3 className="wtm-card-title">{c.title}</h3>
              <p className="wtm-card-body">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
