"use client";
import { useState } from "react";

const solutions = [
  {
    icon: "⚙️",
    title: "Pre-configured environment — just use it",
    body: "Skip hours of installation headaches and dependency errors. We provide tested, pre-configured computational environments and package setups so you start analyzing from Day 1.",
    accent: "#2563eb",
  },
  {
    icon: "🐧",
    title: "Linux from zero — live, guided practice",
    body: "No prior terminal experience needed. We demystify the Linux command line step-by-step with real-time feedback — covering navigation, file manipulation, and script automation.",
    accent: "#059669",
  },
  {
    icon: "🗂️",
    title: "Real data formats, demystified live",
    body: "Stop guessing what goes into each tool. Work hands-on with authentic genomic file formats — FASTQ, BAM, SAM, GTF, BED, VCF, and count matrices — understanding how they connect.",
    accent: "#d97706",
  },
  {
    icon: "📊",
    title: "Lean R — only what you need for Bulk, Single-Cell and Spatial Transcriptomics",
    body: "We skip generic coding theory to focus strictly on what drives genomics research: tidyverse data wrangling, DESeq2 differential expression, Seurat v5 single-cell workflows, and SpatialExperiment.",
    accent: "#4f46e5",
  },
  {
    icon: "📜",
    title: "Ready-to-use scripts for your own data",
    body: "Take home clean, modular, fully annotated R scripts and Bash pipelines that you can immediately point at your own research laboratory datasets to generate publication-grade figures.",
    accent: "#0d9488",
  },
  {
    icon: "⭐",
    title: "Lifetime recordings + RA Opportunity in active projects",
    body: "Enjoy permanent access to all session recordings and course materials, plus direct eligibility for Research Assistant (RA) opportunities in active projects.",
    accent: "#db2777",
  },
];

export default function Solutions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="sol-section">
      <div className="sol-inner">
        <p className="sol-eyebrow">How This Program Solves It</p>

        <h2 className="sol-heading">
          Our Solution
        </h2>
        <p className="sol-subtext">
          A structured framework designed to eliminate every beginner bottleneck and guide you to independent computational research.
        </p>

        <div className="sol-grid">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="sol-card"
              style={{
                border: `1px solid ${hoveredIndex === i ? s.accent + "55" : "var(--border)"}`,
                transform: hoveredIndex === i ? "translateY(-3px)" : "translateY(0)",
                boxShadow: hoveredIndex === i ? `0 12px 24px -8px ${s.accent}20` : "none",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="sol-icon-box"
                style={{
                  background: s.accent + "14",
                  border: `1px solid ${s.accent}30`,
                }}
              >
                {s.icon}
              </div>
              <h4 className="sol-card-title">{s.title}</h4>
              <p className="sol-card-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
