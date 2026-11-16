import Link from "next/link";

const schedule = [
  { label: "Program Duration", value: "12 weeks" },
  { label: "Contact Hours", value: "50 hrs lectures + 10 hrs mentoring" },
  { label: "Independent Work", value: "10–12 hours/week" },
  { label: "Cohort Size", value: "~40 seats" },
];

const criteria = [
  { icon: "🎯", label: "Career Alignment", desc: "Committed to MS/PhD or research career path." },
  { icon: "⏰", label: "Punctual", desc: "Attend sessions on time. Submit work by deadlines." },
  { icon: "🤝", label: "Team player", desc: "Collaborate and support peers in a professional setting." },
  { icon: "📚", label: "10+ hrs/week", desc: "Willingness to dedicate significant time to research." },
];

const steps = [
  { n: "1", title: "Enrollment Agreement", desc: "Review program terms and sign the Cohort 04 enrollment agreement form" },
  { n: "2", title: "Seat Confirmation", desc: "Pay 510 BDT seat confirmation fee to secure your spot (~40 seats)" },
  { n: "3", title: "Orientation", desc: "Thursday, December 31, 2026" },
  { n: "4", title: "Cohort Start", desc: "Friday, January 1, 2027 — Fri & Sat, 9:00–11:00 AM (BD Time)" },
];

export default function EnrollCTA() {
  return (
    <section id="enroll" className="enroll-section">
      <div className="enroll-inner">
        <p className="enroll-eyebrow">Enrollment</p>

        <h2 className="enroll-heading">
          Start Your <span className="enroll-heading-gradient">Journey</span>
        </h2>

        <p className="enroll-subtext">
          This is an intensive, hands-on program for serious researchers. Limited to approximately 40 participants to ensure personalized mentorship and accountability.
        </p>

        {/* Selection Criteria */}
        <div className="enroll-criteria-block">
          <p className="enroll-criteria-label">Selection Criteria</p>
          <div className="enroll-criteria-grid">
            {criteria.map((c) => (
              <div key={c.label} className="enroll-criteria-card">
                <div className="enroll-criteria-icon">{c.icon}</div>
                <div className="enroll-criteria-title">{c.label}</div>
                <div className="enroll-criteria-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule grid */}
        <div className="enroll-schedule-row">
          {schedule.map((s) => (
            <div key={s.label} className="enroll-schedule-chip">
              <div className="enroll-chip-label">{s.label}</div>
              <div className="enroll-chip-value">{s.value}</div>
            </div>
          ))}
        </div>

        <p className="enroll-schedule-note">
          Cohort 04 runs January – March 2027. Live sessions every Friday &amp; Saturday, 9:00 – 11:00 AM (Bangladesh Time). Project mentoring Zoom links are announced before each session.
        </p>

        {/* Pricing */}
        <div className="enroll-pricing-grid stack-on-mobile">
          {/* Monthly fee */}
          <div className="enroll-fee-card border-indigo-200 bg-indigo-50/50 relative overflow-hidden flex flex-col items-center justify-center p-8">
            <div className="absolute top-0 right-0">
              <div className="bg-indigo-600 text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-bl-lg">
                50% OFF
              </div>
            </div>
            
            <div className="text-indigo-600 font-mono text-[10px] uppercase tracking-widest mb-2 font-bold">
              Monthly Mentorship Fee
            </div>
            
            <div className="flex flex-col items-center gap-1 mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-indigo-600 text-4xl font-black">5,100 BDT</span>
                <span className="text-slate-500 font-medium text-sm">/ month</span>
              </div>
              <div className="text-slate-400 line-through text-sm font-medium">
                Was 10,200 BDT
              </div>
            </div>

            <div className="bg-white/80 border border-indigo-100 rounded-full px-4 py-1.5 mb-2">
              <p className="text-[11px] text-indigo-700 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
                Pay by 5th of each month
              </p>
            </div>
            
            <p className="text-[10px] text-slate-500 font-medium italic">
              Includes bKash charges · Total 15,300 BDT (3 months)
            </p>
          </div>

          {/* Commitment */}
          <div className="enroll-commit-card">
            <div className="enroll-commit-body">
              <div className="enroll-commit-title">12-week commitment</div>
              <div className="enroll-commit-sub">
                A serious investment in your research career
              </div>
              <div className="enroll-commit-note">
                Seat confirmation fee: 510 BDT
              </div>
              <div className="enroll-commit-note">
                ⚠ Non-refundable once month commences
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-500 text-sm mt-6 max-w-2xl mx-auto italic font-medium">
          Fee is non-negotiable.
        </p>

        {/* Enrollment Timeline */}
        <div className="enroll-timeline-block">
          <p className="enroll-timeline-label">Enrollment Process</p>
          <div className="enroll-timeline-steps">
            {steps.map((s, i) => (
              <div key={s.n} className="enroll-timeline-step">
                <div className="enroll-timeline-num">{s.n}</div>
                <div className="enroll-timeline-content">
                  <div className="enroll-timeline-title">{s.title}</div>
                  <div className="enroll-timeline-desc">{s.desc}</div>
                </div>
                {i < steps.length - 1 && <div className="enroll-timeline-connector" />}
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div className="enroll-cta-block">
          <p className="enroll-cta-note">
            Sign the enrollment agreement and confirm your seat (510 BDT) before the December 31, 2026 orientation.
          </p>
          <a
            href="https://forms.gle/azXaFGdXXNEB93qa7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 hover:from-blue-700 hover:via-indigo-700 hover:to-teal-700 text-white font-bold text-base shadow-md shadow-blue-500/20 hover:shadow-lg transition-all"
          >
            <span>Sign Cohort 04 Enrollment Agreement &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
