import Image from 'next/image';
import { Great_Vibes } from 'next/font/google';
import styles from './Certificate.module.css';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

export default function Certificate() {
  return (
    <section className={styles.section} id="certificate">
      <div className="container">
        <div className={styles.header}>
          <h2 className="sectionTitle">Certificate of Completion</h2>
          <p className={styles.subtitle}>Awarded to every participant who completes the program</p>
        </div>

        <div className={styles.certWrapper}>
          <div className={styles.cert}>
            {/* Corner ornaments */}
            <span className={`${styles.corner} ${styles.tl}`} />
            <span className={`${styles.corner} ${styles.tr}`} />
            <span className={`${styles.corner} ${styles.bl}`} />
            <span className={`${styles.corner} ${styles.br}`} />

            <div className={styles.certInner}>
              <div className={styles.logoRow}>
                <Image
                  src={`/img/logos/logo.png`}
                  alt="Program Logo"
                  width={56}
                  height={56}
                />
                <span className={styles.orgName}>No Code &amp; Agentic AI for Life Sciences</span>
              </div>

              <p className={styles.certLabel}>CERTIFICATE OF COMPLETION</p>

              <p className={styles.presented}>This is to certify that</p>

              <div className={styles.recipientLine}>
                <span className={styles.recipientName}>Your Name Here</span>
              </div>

              <p className={styles.body}>
                has successfully completed the <strong>4-Week Live Program</strong> on<br />
                <em>No Code &amp; Agentic AI for Life Sciences</em>,<br />
                demonstrating proficiency in Generative AI, Agentic Workflows,<br />
                and AI-powered biomedical research tools.
              </p>

              <div className={styles.sigRow}>
                <div className={styles.sigBlock}>
                  <p className={`${styles.sigCursive} ${greatVibes.className}`}>Jubayer</p>
                  <div className={styles.sigLine} />
                  <p className={styles.sigName}>Md. Jubayer Hossain</p>
                  <p className={styles.sigTitle}>Founder &amp; CEO, DeepBio Ltd</p>
                </div>
                <div className={styles.sigBlock}>
                  <p className={styles.sigDate}>June 30, 2025</p>
                  <div className={styles.sigLine} />
                  <p className={styles.sigName}>Date of Completion</p>
                  <p className={styles.sigTitle}>Sample date</p>
                </div>
              </div>
            </div>
          </div>

          <p className={styles.note}>* Sample certificate  —  recipient name and date filled upon completion</p>
        </div>
      </div>
    </section>
  );
}

