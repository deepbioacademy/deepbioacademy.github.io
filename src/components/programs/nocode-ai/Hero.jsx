import Image from 'next/image';
import styles from './Hero.module.css';
import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContent} animate-fade-in`}>
        <Image src={`/img/logos/logo.png`} alt="Program Logo" width={80} height={80} className={styles.heroLogo} priority />
        <div className={styles.badge}>Next-Gen Education</div>
        <h1 className={styles.title}>
          No Code & <span className="text-gradient">Agentic AI</span><br />
          for Life Sciences
        </h1>
        <p className={styles.subtitle}>
          Accelerate your biomedical discovery workflow. Learn Generative AI and Agentic AI  —  no coding required.
        </p>
        <div className={styles.ctaGroup}>
          <a href="https://forms.gle/JxCSxh27PVLuLzNz9" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Apply Now</a>
          <a href="https://docs.google.com/spreadsheets/d/1CGZt_bqAOfAu0fv8TIUTpzCBR07KqQMmY0KltUch8dU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Explore Curriculum</a>
        </div>
        <div className={styles.metaData}>
          <div className={styles.metaItem}>
            <strong>Duration</strong>
            <span>4 Weeks</span>
          </div>
          <div className={styles.metaItem}>
            <strong>Format</strong>
            <span>Virtual / Zoom</span>
          </div>
          <div className={styles.metaItem}>
            <strong>Audience</strong>
            <span>All Levels</span>
          </div>
          <div className={styles.metaItem}>
            <strong>Language</strong>
            <span>Bangla</span>
          </div>
        </div>
      </div>
      <ParticleCanvas />
      <div className={styles.backgroundGlow}></div>
    </section>
  );
}

