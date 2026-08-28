import React from "react";

export default function ResearchAssistant() {
  const cards = [
    {
      step: "01",
      icon: "🎓",
      title: "Academic Requirements",
      items: [
        "Strong motivation for research",
        "Clear plans for future MSc/PhD studies in computational biology or bioinformatics",
      ],
    },
    {
      step: "02",
      icon: "📋",
      title: "Program Enrollment",
      items: [
        "Currently enrolled in or have completed the BMP",
        "Minimum 85% attendance in mentoring sessions (mandatory)",
        "Minimum 85% task / project completion (mandatory)",
      ],
    },
    {
      step: "03",
      icon: "⏰",
      title: "Time Commitment",
      items: [
        "15–20 hours per week",
        "Preferably evenings or weekends",
        "Flexible during exam periods",
      ],
    },
    {
      step: "04",
      icon: "📅",
      title: "Weekly Meetings",
      items: [
        "Attend weekly online meetings every Sunday",
        "Time: 9:00–11:00 PM (BST)",
      ],
    },
    {
      step: "05",
      icon: "🤝",
      title: "Personal Qualities",
      items: [
        "Team-oriented mindset",
        "Dedicated and passionate about data-driven biological research",
      ],
    },
    {
      step: "06",
      icon: "⚖️",
      title: "Ethics & Commitment",
      items: [
        "Uphold research ethics at all times",
        "Maintain 12–18 month commitment to complete assigned projects",
        "Willing to mentor or assist junior researchers during lab activities",
      ],
    },
  ];

  return (
    <section id="research-assistant" className="ra-section">
      <div className="ra-inner">
        <p className="ra-eyebrow">Pathway to Excellence</p>
        <h2 className="ra-heading">
          Join as <span className="ra-heading-gradient">Research Assistant</span>
        </h2>
        <p className="ra-subtext">
          Top-performing participants who successfully complete the SBTP program and its core projects are eligible to join the <strong>Cancer Genomics and Neurogenomics</strong> lab. This position is a gateway for those targeting advanced MSc/PhD degrees.
        </p>

        <div className="ra-eligibility">
          <div className="ra-eligibility-label">Mandatory Eligibility</div>
          <p className="ra-eligibility-text">
            To be eligible to apply as a Research Assistant, a participant must
            meet <strong>both</strong> of the following minimum thresholds:
          </p>
          <div className="ra-eligibility-metrics">
            <div className="ra-eligibility-metric">
              <span className="ra-eligibility-value">≥ 85%</span>
              <span className="ra-eligibility-key">Mentoring session attendance</span>
            </div>
            <div className="ra-eligibility-metric">
              <span className="ra-eligibility-value">≥ 85%</span>
              <span className="ra-eligibility-key">Task / project completion</span>
            </div>
          </div>
          <p className="ra-eligibility-note">
            These are <strong>strict, non-negotiable minimum requirements</strong>.
            Participants who fall below either threshold are <strong>not eligible</strong>
            to apply and applications will not be considered, regardless of other
            qualifications.
          </p>
        </div>

        <div className="ra-grid">
          {cards.map((card) => (
            <div key={card.step} className="ra-card">
              <div className="ra-step-num">{card.step}</div>
              <div className="ra-card-title">
                <div className="ra-card-icon">{card.icon}</div>
                <span>{card.title}</span>
              </div>
              <ul className="ra-list">
                {card.items.map((item, i) => (
                  <li key={i} className="ra-item">
                    <div className="ra-item-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-16 max-w-2xl mx-auto">
          * Becoming a Research Assistant is a serious commitment to high-impact research, designed to accelerate your career and build a world-class research portfolio.
        </p>
      </div>
    </section>
  );
}
