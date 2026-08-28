const forItems = [
  "Serious about building a bioinformatics research career (academia or industry)",
  "Targeting MS/PhD programs in international research labs (USA, Europe)",
  "Ready to contribute to national labs under a university supervisor",
  "Committed to working on real, technically demanding research problems",
  "Willing to dedicate 10+ hours/week to hands-on analysis",
];

const notForItems = [
  "Hobbyists or those exploring bioinformatics casually",
  "Looking for rapid or guaranteed publications",
  "Seeking shortcuts, pre-built results, or just a certificate",
  "Unable to commit to a technically intensive, 12-week environment",
  "Preferring passive learning over independent, mentor-guided research",
];

export default function WhoIsThisFor() {
  return (
    <section className="witf-section">
      <div className="witf-inner">
        <p className="witf-eyebrow">Program Fit</p>
        <h2 className="witf-heading">Is This Program Right for You?</h2>
        <p className="witf-subtext">
          This is a selective, research-grade mentorship — not a general course. Read both columns before applying.
        </p>

        <div className="witf-grid stack-on-mobile">
          {/* For you */}
          <div className="witf-card witf-card-yes">
            <div className="witf-card-header">
              <span className="witf-badge witf-badge-yes">This is for you if</span>
            </div>
            <ul className="witf-list">
              {forItems.map((item, i) => (
                <li key={i} className="witf-item">
                  <div className="witf-icon-wrap witf-icon-yes">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div className="witf-card witf-card-no">
            <div className="witf-card-header">
              <span className="witf-badge witf-badge-no">This is NOT for you if</span>
            </div>
            <ul className="witf-list">
              {notForItems.map((item, i) => (
                <li key={i} className="witf-item">
                  <div className="witf-icon-wrap witf-icon-no">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
