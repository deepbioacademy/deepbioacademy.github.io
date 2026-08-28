import styles from './Benefits.module.css';

export default function Benefits() {
  const benefits = [
    {
      title: "Live Mentorship from an Industry Expert",
      description: "Work directly with Md. Jubayer Hossain (Founder & CEO, DeepBio Ltd) throughout all 4 weeks—no teaching assistants, no substitutes.",
      icon: "👨‍🏫"
    },
    {
      title: "Concrete Research Output",
      description: "Move from curiosity to discovery with a highly structured roadmap designed to yield a concrete, submittable biological research output.",
      icon: "📄"
    },
    {
      title: "100% No-Code Architecture",
      description: "Master state-of-the-art tools like Claude, NotebookLM, and Google Colab + Gemini without needing to write a single line of code.",
      icon: "⚡"
    },
    {
      title: "Hands-On Omics & Clinical Projects",
      description: "Analyze real scRNA-seq datasets, evaluate predictive clinical models, and execute pathway analysis using industry-standard graphical platforms.",
      icon: "🔬"
    },
    {
      title: "Accelerated Biomedical Discovery",
      description: "Learn to build automated, multi-step agentic workflows that drastically accelerate literature reviews and drug discovery pipelines.",
      icon: "🧬"
    }
  ];

  return (
    <section className={styles.benefitsSection} id="benefits">
      <div className="container">
        <div className={styles.header}>
          <h2 className="sectionTitle">Program Benefits</h2>
        </div>
        <div className={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitItem}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{benefit.icon}</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{benefit.title}</h3>
                <p className={styles.description}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
