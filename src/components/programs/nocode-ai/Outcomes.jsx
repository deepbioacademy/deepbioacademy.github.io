import styles from './Outcomes.module.css';

export default function Outcomes() {
  const outcomes = [
    {
      icon: "🤖",
      text: "Design and run multi-step agentic AI workflows for biomedical literature reviews and drug discovery pipelines"
    },
    {
      icon: "🧬",
      text: "Analyze real single-cell RNA-seq and multi-omics datasets using no-code graphical platforms"
    },
    {
      icon: "🔬",
      text: "Evaluate and interpret predictive clinical models without writing a single line of code"
    },
    {
      icon: "📊",
      text: "Execute pathway enrichment and network analysis using industry-standard visual tools"
    },
    {
      icon: "📝",
      text: "Produce a complete, submittable biological research output from raw data to final report"
    },
    {
      icon: "⚡",
      text: "Use Claude, NotebookLM, Google AI Studio, and Colab + Gemini as an integrated research stack"
    },
    {
      icon: "🗺️",
      text: "Navigate the full AI-for-life-sciences tool landscape and select the right tool for any research task"
    },
    {
      icon: "🚀",
      text: "Accelerate your research output and compete at the frontier of computational biology — no coding background required"
    }
  ];

  return (
    <section className={styles.outcomesSection} id="outcomes">
      <div className="container">
        <div className={styles.header}>
          <h2 className="sectionTitle">Program Outcomes</h2>
          <p className={styles.subtitle}>After this program, you will be able to:</p>
        </div>
        <div className={styles.grid}>
          {outcomes.map((outcome, index) => (
            <div key={index} className={styles.outcomeItem}>
              <span className={styles.icon}>{outcome.icon}</span>
              <p className={styles.text}>{outcome.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
