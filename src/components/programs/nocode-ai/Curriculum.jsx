import styles from './Curriculum.module.css';

export default function Curriculum() {
  const weeks = [
    {
      week: 1,
      title: "AI Foundations & Prompt Engineering",
      topics: [
        "No-Code Tools Setup & Foundations",
        "Agentic AI Landscape for Life Sciences",
        "Prompt and Context Engineering Frameworks",
        "Plan → Approve → Execute → Iterate Framework"
      ]
    },
    {
      week: 2,
      title: "Literature Search, Review, and Synthesis & Omics Data",
      topics: [
        "Agentic Literature Research Review",
        "PubMed Monitor to Claude Summarizer",
        "Omics Data Analysis — No Code Pipeline (Bulk RNA-seq)",
        "scRNA-seq intro: Seurat/Scanpy workflow"
      ]
    },
    {
      week: 3,
      title: "Deep Learning Prediction Methods",
      topics: [
        "Prepare Claude for AI Workflows",
        "Model Selection and Prompt Engineering",
        "Biomarker Classification",
        "Responsible AI: bias in predictive models"
      ]
    },
    {
      week: 4,
      title: "Drug Discovery & Image Analysis",
      topics: [
        "Target identification with AI (Open Targets)",
        "AlphaFold for drug target structure",
        "Biomedical Image Analysis",
        "AI vs Radiologist Accuracy Case Studies"
      ]
    }
  ];

  return (
    <section className={styles.curriculum} id="curriculum">
      <div className="container">
        <h2 className="sectionTitle">Curriculum</h2>
        <div className={styles.timeline}>
          {weeks.map((week) => (
            <div key={week.week} className={styles.timelineItem}>
              <div className={styles.timelineNumber}>W{week.week}</div>
              <div className={`glass ${styles.timelineContent}`}>
                <h3 className={styles.weekTitle}>{week.title}</h3>
                <ul className={styles.topicList}>
                  {week.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
