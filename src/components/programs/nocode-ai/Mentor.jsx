import Image from 'next/image';
import styles from './Mentor.module.css';

export default function Mentor() {
  const stats = [
    { value: '5+', label: 'Years of Research Experience' },
    { value: '5+', label: 'Years of Mentoring Experience' },
    { value: '3K+', label: 'Students trained since 2020' },
    { value: '20+', label: 'Publications' }
  ];

  return (
    <section className={styles.mentorSection} id="mentor">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageContainer}>
            <div className={styles.imageGlow}></div>
            <div className={styles.imageWrapper}>
              <Image 
                src={`/img/lead/jubayer.jpg`}
                alt="Md. Jubayer Hossain" 
                width={400} 
                height={500} 
                className={styles.image}
                priority
              />
              <div className={styles.nameBadge}>
                <h3 className={styles.name}>Md. Jubayer Hossain</h3>
                <p className={styles.title}>Founder & CEO, DeepBio Ltd</p>
              </div>
            </div>
          </div>
          
          <div className={styles.content}>
            <h2 className={styles.heading}>Meet Your Mentor</h2>
            
            <p className={styles.paragraph}>
              Md. Jubayer Hossain is a bioinformatician and computational biologist with five years of experience spanning both active research and teaching. Since 2020, he has trained over 3,000 students  —  from complete beginners to graduate researchers  —  in the practical skills required to work with real biological data.
            </p>
            
            <p className={styles.paragraph}>
              As Founder & CEO of DeepBio Ltd, Jubayer combines research rigor with a structured approach to education. His teaching is grounded in what he does daily: designing and running computational analyses on real datasets. Every student in this program works directly with him  —  not a TA, not a substitute  —  toward a concrete, submittable research output.
            </p>
            
            <blockquote className={styles.quote}>
              "My role is to accelerate your journey from question to discovery. You bring the curiosity; I bring the roadmap, the tools, and the accountability to ensure you succeed."
            </blockquote>
            
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={`glass ${styles.statCard}`}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

