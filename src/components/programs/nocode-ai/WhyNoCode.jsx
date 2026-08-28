import styles from './WhyNoCode.module.css';

export default function WhyNoCode() {
  const advantages = [
    {
      icon: "🚀",
      title: "Accelerate Discovery",
      description: "Eliminate the coding barrier to rapidly deploy AI solutions for target identification and biomarker classification."
    },
    {
      icon: "💰",
      title: "Lower Costs and Risks",
      description: "Validate biological hypotheses quickly using standardized, no-code analytical pipelines before expensive lab investments."
    },
    {
      icon: "⚡",
      title: "Enable Rapid Prototyping",
      description: "Quickly build and test agentic workflows for literature synthesis without waiting on bioinformatics cores."
    },
    {
      icon: "🤖",
      title: "Tap into Agentic AI",
      description: "Leverage autonomous agents that can plan, decide, and act to synthesize complex biomedical literature independently."
    },
    {
      icon: "🧬",
      title: "Bridge the Biology-Computation Gap",
      description: "Empower domain experts—biologists and clinicians—to interact directly with Omics data and experiment with AI."
    }
  ];

  return (
    <section className={styles.whyNoCode} id="why-no-code">
      <div className="container">
        
        <div className={styles.header}>
          <h2 className="sectionTitle">Why No Code?</h2>
        </div>

        <div className={styles.contentSection}>
          <p className={styles.introText}>
            In today's fast-evolving AI landscape, the power to analyze complex biological data and automate literature reviews is no longer limited to computational experts. No-code platforms are democratizing bioinformatics by enabling researchers, clinicians, and students to harness advanced Agentic AI, Generative AI, and ML without any coding expertise.
          </p>

          <div className={styles.advantageList}>
            {advantages.map((item, idx) => (
              <div key={idx} className={styles.advantageItem}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{item.icon}</span>
                </div>
                <div className={styles.content}>
                  <h4 className={styles.advantageTitle}>{item.title}</h4>
                  <p className={styles.advantageDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
