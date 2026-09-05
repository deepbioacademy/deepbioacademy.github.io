import styles from './Sessions.module.css';

export default function Sessions() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const sessions = [
    {
      id: "01",
      title: "No-Code Tools Setup & Foundations",
      date: "Session 01",
      description: "Getting started with the course environment, setting up essential no-code tools, and understanding the foundations of Agentic AI in Life Sciences.",
      link: `${basePath}/session-01/index.html`,
      type: "Presentation"
    },
    {
      id: "02",
      title: "Prompt and Context Engineering",
      date: "Session 02",
      description: "Mastering the art of structuring directives using the RTFC framework, managing context windows, and implementing the P-A-E-I workflow.",
      link: `${basePath}/session-02/index.html`,
      type: "Presentation"
    },
    {
      id: "03",
      title: "Agentic Literature Review",
      date: "Session 03",
      description: "Building autonomous systematic review pipelines using AI agents, PubMed monitors, and source-grounded synthesis with NotebookLM.",
      link: `${basePath}/session-03/index.html`,
      type: "Presentation"
    },
    {
      id: "04",
      title: "Omics Data Analysis: RNA-Seq",
      date: "Session 04",
      description: "No-code RNA-seq pipelines from raw reads to count matrices, followed by DESeq2 analysis and agentic interpretation of results.",
      link: `${basePath}/session-04/index.html`,
      type: "Presentation"
    },
    {
      id: "05",
      title: "Omics Data Analysis: scRNA-Seq",
      date: "Session 05",
      description: "Exploring cell-level resolution with Seurat and Scanpy, covering pre-processing, clustering, trajectory inference, and cell-cell communication.",
      link: `${basePath}/session-05/index.html`,
      type: "Presentation"
    },
    {
      id: "06",
      title: "Deep Learning: Prediction Methods",
      date: "Session 06",
      description: "Implementing biomarker classification models, understanding neural network intuition, and exploring responsible AI in clinical prediction.",
      link: `${basePath}/session-06/index.html`,
      type: "Presentation"
    },
    {
      id: "07",
      title: "Deep Learning: Drug Discovery",
      date: "Session 07",
      description: "Accelerating the discovery pipeline using Open Targets, ChEMBL, and AlphaFold structure prediction through agentic workflows.",
      link: `${basePath}/session-07/index.html`,
      type: "Presentation"
    },
    {
      id: "08",
      title: "Biomedical Image Analysis",
      date: "Session 08",
      description: "Mastering CNN intuition for medical imaging, exploring AI triage workflows in radiology, and analyzing the CheXNet breakthrough.",
      link: `${basePath}/session-08/index.html`,
      type: "Presentation"
    }
  ];

  return (
    <section className={styles.sessions} id="sessions">
      <div className="container">
        <h2 className="sectionTitle">Course Materials</h2>
        <p className={styles.intro}>Access presentations and resources from each session.</p>
        
        <div className={styles.grid}>
          {sessions.map((session) => (
            <div key={session.id} className={`glass ${styles.card}`}>
              <div className={styles.cardHeader}>
                <span className={styles.sessionId}>#{session.id}</span>
                <span className={styles.sessionType}>{session.type}</span>
              </div>
              <h3 className={styles.sessionTitle}>{session.title}</h3>
              <p className={styles.description}>{session.description}</p>
              <div className={styles.footer}>
                <span className={styles.date}>{session.date}</span>
                <a href={session.link} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.btn}`}>
                  View Slides
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

