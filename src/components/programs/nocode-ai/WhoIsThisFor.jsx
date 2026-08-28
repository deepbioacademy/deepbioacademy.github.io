import styles from './WhoIsThisFor.module.css';

export default function WhoIsThisFor() {
  const audiences = [
    {
      title: "Undergraduates",
      description: "Break into the high-demand field of computational biology and gain a massive competitive edge by mastering AI workflows without needing to learn Python or R.",
      icon: "🎓"
    },
    {
      title: "Grad Students & Researchers",
      description: "Accelerate your thesis, literature reviews, and Omics data analysis. Spend less time struggling with code and more time interpreting groundbreaking biological results.",
      icon: "🔬"
    },
    {
      title: "Professionals & Clinicians",
      description: "Integrate powerful Generative and Agentic AI into your drug discovery, clinical research, or daily workflows without the overhead of hiring a dedicated bioinformatics team.",
      icon: "💼"
    }
  ];

  return (
    <section className={styles.whoSection} id="who-is-this-for">
      <div className="container">
        <div className={styles.header}>
          <h2 className="sectionTitle">Who Is This Program For?</h2>
        </div>
        
        <div className={styles.grid}>
          {audiences.map((audience, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{audience.icon}</span>
              </div>
              <h3 className={styles.title}>{audience.title}</h3>
              <p className={styles.description}>{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
