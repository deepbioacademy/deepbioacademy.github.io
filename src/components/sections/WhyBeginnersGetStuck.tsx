const obstacles = [
  {
    icon: "⌨️",
    title: "The Linux command line — before a single analysis even begins",
    body: "Almost every bioinformatics tool runs in a Linux terminal. Most tutorials skip this entirely, assuming you already know it. Most beginners don't — and get stuck immediately.",
  },
  {
    icon: "🔧",
    title: "Tool installation feels like black magic",
    body: "Setting up STAR, featureCounts, or Salmon from scratch involves dependency management, PATH variables, and environment configuration — all opaque to someone just trying to analyze RNA-seq data.",
  },
  {
    icon: "💻",
    title: "The Compute Gap — Personal hardware vs. Production-grade data",
    body: "Modern genomics requires significant RAM and processing power that standard laptops can't provide. We move you beyond local bottlenecks to professional HPC and Cloud environments.",
  },
  {
    icon: "🗂️",
    title: "A maze of file formats with no map",
    body: "FASTQ, BAM, SAM, GTF, BED, VCF — knowing which tool requires which format, and how to convert between them, is genuinely confusing when you're starting out.",
  },
  {
    icon: "📖",
    title: 'Written tutorials have no "start here" arrow',
    body: "Even comprehensive tutorials can overwhelm a beginner who doesn't know which section to read first, what to skip, or how to connect the pieces into a coherent pipeline.",
  },
];

export default function WhyBeginnersGetStuck() {
  return (
    <section className="stuck-section">
      <div className="stuck-inner">
        <p className="stuck-eyebrow">The Real Obstacles</p>

        <h2 className="stuck-heading">The Obstacles</h2>
        <p className="stuck-subtext">
          The biology isn&apos;t the hard part. Here is what actually blocks
          researchers from starting.
        </p>

        <div className="stuck-list">
          {obstacles.map((o, i) => (
            <div
              key={i}
              className={"stuck-obstacle" + (i < obstacles.length - 1 ? " stuck-obstacle-border" : "")}
            >
              <div className="stuck-icon-box">{o.icon}</div>
              <div>
                <h4 className="stuck-obstacle-title">{o.title}</h4>
                <p className="stuck-obstacle-body">{o.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
