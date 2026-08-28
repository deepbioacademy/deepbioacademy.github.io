"use client";
import { useState } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const solutions = [
  {
    icon: "🔬",
    title: "Production-grade Nextflow pipelines",
    body: "Master reproducible bioinformatics with Nextflow. Learn to build and run production-ready pipelines that are standard in international research labs and industry settings.",
    accent: "#2563eb",
    tools: [
      { name: "Nextflow", logo: `${BASE}/img/logos/nextflow.png` },
      { name: "nf-core", logo: `${BASE}/img/logos/nf-core-logo.png` },
    ],
  },
  {
    icon: "📦",
    title: "Conda & Environment Isolation",
    body: "Solve dependency conflicts effortlessly. Learn environment isolation with Conda/Mamba and Bioconda, ensuring your research pipelines are fully reproducible.",
    accent: "#059669",
    tools: [
      { name: "Conda / Mamba", logo: "https://www.vectorlogo.zone/logos/anaconda/anaconda-icon.svg" },
      { name: "GitHub", logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
    ],
  },
  {
    icon: "🤖",
    title: "AI-powered productivity",
    body: "Leverage Claude Code and Gemini CLI to accelerate your bioinformatics workflows. Learn to use LLMs responsibly for code generation, debugging, and data interpretation.",
    accent: "#7c3aed",
    tools: [
      { name: "Claude AI", logo: `${BASE}/img/logos/claude_logo.jpg` },
      { name: "Google Gemini", logo: `${BASE}/img/logos/gemini-cli.jpg` },
    ],
  },
  {
    icon: "🐧",
    title: "Linux & HPC Mastery",
    body: "Go beyond the basics. Master the Linux command line and learn to scale your analyses on High-Performance Computing (HPC) and Cloud environments.",
    accent: "#d97706",
    tools: [
      { name: "Linux", logo: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg" },
      { name: "HPC", logo: `${BASE}/img/logos/hpc.jpg` },
    ],
  },
  {
    icon: "📊",
    title: "Fluent R & Bioconductor",
    body: "Gain deep technical mastery in R and Bioconductor — the premier statistical environment for modern genomics. Master tidyverse, DESeq2, Seurat, and SpatialExperiment.",
    accent: "#2563eb",
    tools: [
      { name: "R Language", logo: "https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg" },
      { name: "Bioconductor", logo: `${BASE}/img/logos/bioconductor.png` },
      { name: "GitHub", logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
    ],
  },
  {
    icon: "✍️",
    title: "Bioinformatics Writing",
    body: "Learn the art of manuscript writing. From data visualization to results interpretation, we guide you through the process of communicating complex findings effectively.",
    accent: "#059669",
    tools: [
      { name: "GitHub", logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
    ],
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
          We built this program to solve every specific bottleneck for beginners.
        </p>

        <div className="sol-grid">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="sol-card"
              style={{
                border: `1px solid ${hoveredIndex === i ? s.accent + "44" : "var(--border)"}`,
                transform: hoveredIndex === i ? "translateY(-3px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="sol-icon-box"
                style={{
                  background: s.accent + "18",
                  border: `1px solid ${s.accent}30`,
                }}
              >
                {s.icon}
              </div>
              <h4 className="sol-card-title">{s.title}</h4>
              <p className="sol-card-body">{s.body}</p>
              <div className="sol-card-tools">
                {s.tools.map((tool) => (
                  <div key={tool.name} className="sol-card-tool" title={tool.name}>
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="sol-card-tool-logo"
                      loading="lazy"
                    />
                    <span className="sol-card-tool-name">{tool.name}</span>
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
