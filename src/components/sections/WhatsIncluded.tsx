"use client";
import { useState } from "react";


const items = [
  {
    title: "Complete Bioinformatics Roadmap",
    sub: "A strategic career path for international academia and industry research roles",
  },
  {
    title: "Reproducible Research Portfolio",
    sub: "End-to-end projects hosted on GitHub demonstrating production-grade code",
  },
  {
    title: "Conda & Environment Isolation",
    sub: "Full training on reproducible Conda/Mamba environments and package management",
  },
  {
    title: "Publication Pathway Guidance",
    sub: "Rigorous preparation for independent publication and earned authorship on projects",
  },
  {
    title: "AI Productivity Training",
    sub: "Hands-on mastery of Claude Code and Gemini CLI for accelerated research",
  },
  {
    title: "Grad Program Readiness",
    sub: "Strategic preparation for MS/PhD applications in USA and European labs",
  },
  {
    title: "Production-Quality Figures",
    sub: "Suite of reproducible visualizations meeting international journal standards",
  },
  {
    title: "Professional Credentials",
    sub: "Certificate of completion recognized for its technical intensity and rigor",
  },
];

export default function WhatsIncluded() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="wi-section">
      <div className="wi-inner">
        <p className="wi-eyebrow">What&apos;s Included</p>

        <h2 className="wi-heading">
          What&apos;s Included
        </h2>
        <p className="wi-subtext">
          One enrollment covers the full program experience — tools, support, and materials.
        </p>

        <div className="wi-grid">
          {items.map((item, i) => (
            <div
              key={i}
              className="wi-item"
              style={{
                border: `1px solid ${hoveredIndex === i ? "#05966933" : "var(--border)"}`,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="wi-check-box">
                <svg 
                  className="wi-check-icon" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <div className="wi-item-title">{item.title}</div>
                <div className="wi-item-sub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
