import styles from './Landscape.module.css';

export default function Landscape() {
  const pillars = [
    {
      title: "Agentic AI",
      description: "Design autonomous workflows that handle complex, multi-step tasks such as orchestrating Omics pipelines, literature synthesis, and experimental planning.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      )
    },
    {
      title: "Generative AI",
      description: "Automatically generate comprehensive research summaries, draft clinical protocols, or design novel molecular structures using state-of-the-art foundation models.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      )
    },
    {
      title: "Machine Learning",
      description: "Predict clinical outcomes, discover novel biomarkers, segment single-cell populations, and optimize drug targeting with no-code ML prediction platforms.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
          <line x1="2" y1="20" x2="22" y2="20"></line>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.landscapeSection} id="landscape">
      <div className="container">
        <div className={styles.header}>
          <h2 className="sectionTitle">No Code AI Landscape</h2>
        </div>
        
        <div className={styles.grid}>
          {pillars.map((pillar, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {pillar.icon}
              </div>
              <h3 className={styles.title}>{pillar.title}</h3>
              <p className={styles.description}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
