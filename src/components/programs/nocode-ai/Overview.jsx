import styles from './Overview.module.css';

export default function Overview() {
  const tools = [
    { name: 'Claude', desc: 'Advanced reasoning and coding agent', icons: ['https://cdn.simpleicons.org/anthropic/D97757'] },
    { name: 'NotebookLM', desc: 'Multi-document synthesis and research', icons: ['https://cdn.simpleicons.org/notebooklm/4285F4'] },
    { name: 'Google Colab + Gemini', desc: 'AI-assisted coding and analysis', icons: ['https://cdn.simpleicons.org/googlecolab/F9AB00', 'https://cdn.simpleicons.org/googlegemini/8E75B2'] }
  ];

  return (
    <section className={styles.overview} id="overview">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>Why this program?</h2>
            <p className={styles.paragraph}>
              The evolution of AI from Machine Learning to Deep Learning, and now to Generative and Agentic AI, is transforming the Life Sciences. This program bridges the gap.
            </p>
            <p className={styles.paragraph}>
              Designed for undergraduates, graduate students, and early-career professionals, you will learn to build multi-step agentic systems, automate literature reviews, and analyze Omics data—<strong>all without writing a single line of code</strong>.
            </p>
          </div>
          <div className={styles.toolsContent}>
            <h3 className={styles.subheading}>Tools You Will Master</h3>
            <div className={styles.toolList}>
              {tools.map(tool => (
                <div key={tool.name} className={`glass ${styles.toolCard}`}>
                  <div className={styles.toolIconContainer}>
                    {tool.icons.map((iconUrl, idx) => (
                      <div key={idx} className={styles.toolIcon}>
                        <img src={iconUrl} alt={`${tool.name} logo ${idx + 1}`} className={styles.toolImage} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className={styles.toolName}>{tool.name}</h4>
                    <p className={styles.toolDesc}>{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
