import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.brand}>
          <Image src={`/img/logos/logo.png`} alt="Program Logo" width={50} height={50} className={styles.brandLogo} />
          <div>
            <h3 className={styles.logoText}>No Code & Agentic AI</h3>
            <p className={styles.tagline}>Empowering Life Sciences</p>
          </div>
        </div>
        <div className={styles.links}>
          <a href="#overview">Overview</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#sessions">Materials</a>
          <a href="#">Apply Now</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Md. Jubayer Hossain. All rights reserved.</p>
      </div>
    </footer>
  );
}

