import styles from './Enroll.module.css';

export default function Enroll() {
  const includes = [
    "4 weeks of live mentorship sessions via Zoom",
    "Hands-on omics & clinical AI projects",
    "Access to all session recordings",
    "Guided literature review & agentic workflow labs",
    "Certificate of completion",
  ];

  const plans = [
    {
      badge: 'Student',
      amount: '3,060',
      note: 'For undergraduate & graduate students',
      cta: 'Enroll as Student',
      featured: false,
    },
    {
      badge: 'Professional',
      amount: '4,080',
      note: 'For researchers, clinicians & industry professionals',
      cta: 'Enroll as Professional',
      featured: true,
    },
  ];

  return (
    <section className={styles.enrollSection} id="enroll">
      <div className="container">
        <div className={styles.header}>
          <h2 className="sectionTitle">Enroll Now</h2>
          <p className={styles.subtitle}>Secure your seat before the cohort fills up.</p>
        </div>

        <div className={styles.cardWrapper}>
          {plans.map((plan) => (
            <div key={plan.badge} className={`${styles.card} ${plan.featured ? styles.featuredCard : ''}`}>
              {plan.featured && <div className={styles.popularBadge}>Most Popular</div>}
              <div className={styles.badge}>{plan.badge}</div>

              <div className={styles.pricing}>
                <div className={styles.discountedPrice}>
                  <span className={styles.currency}>৳</span>
                  <span className={styles.amount}>{plan.amount}</span>
                </div>
              </div>

              <p className={styles.pricingNote}>{plan.note}</p>

              <ul className={styles.includesList}>
                {includes.map((item, index) => (
                  <li key={index} className={styles.includesItem}>
                    <svg className={styles.check} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="https://forms.gle/JxCSxh27PVLuLzNz9" target="_blank" rel="noopener noreferrer" className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'} ${styles.ctaButton}`}>
                {plan.cta}
              </a>

              <p className={styles.disclaimer}>One-time payment · No recurring charges</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.glow}></div>
    </section>
  );
}
