import styles from './Pricing.module.css';

export default function Pricing() {
  const actualPrice = '5,100';

  const plans = [
    {
      label: 'Student',
      price: '2,040',
      currency: 'BDT',
      discount: '60% OFF',
      description: 'For undergraduate and graduate students',
      features: [
        '4 weeks live sessions',
        'Direct mentorship',
        'Hands-on projects',
        'Certificate of completion',
        'Community access',
      ],
      cta: 'Apply as Student',
      featured: false,
      badgeText: null,
    },
    {
      label: 'Professional',
      price: '3,060',
      currency: 'BDT',
      discount: '40% OFF',
      description: 'For researchers, clinicians & industry professionals',
      features: [
        '4 weeks live sessions',
        'Direct mentorship',
        'Hands-on projects',
        'Certificate of completion',
        'Community access',
        'Priority Q&A access',
      ],
      cta: 'Apply as Professional',
      featured: true,
      badgeText: 'Most Popular',
    },
    {
      label: 'DeepBio Lab Member',
      price: '1,020',
      currency: 'BDT',
      discount: '80% OFF',
      description: 'Exclusive for DeepBio Lab Members (RA, Ambassador)',
      features: [
        '4 weeks live sessions',
        'Direct mentorship',
        'Hands-on projects',
        'Certificate of completion',
        'Community access',
        'Priority Q&A access',
        'Member-exclusive support',
      ],
      cta: 'Apply as Member',
      featured: false,
      badgeText: 'Best Value',
    },
  ];

  return (
    <section className={styles.pricingSection} id="pricing">
      <div className="container">
        <div className={styles.header}>
          <h2 className="sectionTitle">Enroll Now</h2>
        </div>
        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.label}
              className={`${styles.card} ${plan.featured ? styles.featured : ''} ${plan.badgeText && !plan.featured ? styles.valueFeatured : ''}`}
            >
              {plan.badgeText && (
                <div className={`${styles.badge} ${!plan.featured ? styles.badgeValue : ''}`}>{plan.badgeText}</div>
              )}
              <div className={styles.planLabel}>{plan.label}</div>
              <div className={styles.priceRow}>
                <span className={styles.currency}>{plan.currency}</span>
                <span className={styles.price}>{plan.price}</span>
              </div>
              <div className={styles.originalPriceRow}>
                <span className={styles.originalPrice}>{plan.currency} {actualPrice}</span>
                <span className={styles.discountBadge}>{plan.discount}</span>
              </div>
              <p className={styles.description}>{plan.description}</p>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://forms.gle/JxCSxh27PVLuLzNz9"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'} ${styles.ctaButton}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
