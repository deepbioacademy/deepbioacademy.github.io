import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const tools = [
  { name: "Linux", logo: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg" },
  { name: "Conda / Mamba", logo: "https://www.vectorlogo.zone/logos/anaconda/anaconda-icon.svg" },
  { name: "Nextflow", logo: `${BASE}/img/logos/nextflow.png` },
  { name: "nf-core", logo: `${BASE}/img/logos/nf-core-logo.png` },
  { name: "Bioconductor", logo: `${BASE}/img/logos/bioconductor.png` },
  { name: "R Language", logo: "https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg" },
  { name: "Claude AI", logo: `${BASE}/img/logos/claude_logo.jpg` },
  { name: "Google Gemini", logo: `${BASE}/img/logos/gemini-cli.jpg` },
  { name: "HPC", logo: `${BASE}/img/logos/hpc.jpg` },
  { name: "GitHub", logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
  { name: "RStudio / Posit", logo: "https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg" },
];

export default function ToolsCovered() {
  return (
    <section className="tools-section">
      <div className="tools-inner">
        <p className="tools-eyebrow">Technical Stack</p>
        <h2 className="tools-heading">Production-Grade Tools</h2>
        <p className="tools-subtext">
          Master the exact software ecosystem used by international research labs and top-tier biotech companies.
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
