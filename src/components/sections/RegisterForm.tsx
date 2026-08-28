"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const leadFired = useRef(false);

  // Fire ViewContent when user reaches the apply form — helps Facebook optimize for intent.
  // Pixel script loads afterInteractive, so fbq may not exist on first mount — retry until ready.
  useEffect(() => {
    let tries = 0;
    const fire = () => {
      const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
      if (fbq) {
        fbq('track', 'ViewContent', {
          content_name: 'BMP Application Page',
          content_category: 'Mentorship',
        });
        return;
      }
      if (tries++ < 20) setTimeout(fire, 300); // give up after ~6s
    };
    if (typeof window !== 'undefined') fire();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    // One eventID shared by browser pixel + server CAPI (sent via Apps Script) so Meta dedups to one Lead.
    const eventID = `lead_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const getCookie = (name: string) =>
      document.cookie.split('; ').find((c) => c.startsWith(name + '='))?.split('=')[1] || '';

    // Pass Meta matching signals to Apps Script (it runs CAPI server-side and holds the token).
    data.fb_event_id = eventID;
    data.fb_source_url = window.location.href;
    data.fb_fbp = getCookie('_fbp');
    data.fb_fbc = getCookie('_fbc');
    data.fb_user_agent = navigator.userAgent;

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxwu5X0SbE6ODDomRtT6qD5KjbACRQPFmleDXdMu2gFbJKYxc1nkpmcpZBbH6Qj0g4/exec", {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Track Facebook Lead Event in the browser — fire exactly once per successful submission.
      if (!leadFired.current) {
        if (typeof window !== 'undefined' && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
          (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('track', 'Lead', {
            content_name: 'BMP Cohort 02 Application',
            content_category: 'Mentorship',
          }, { eventID });
        }
        leadFired.current = true;
      }

      // Since mode is 'no-cors', we won't get a standard response object
      // But we can assume success if no error is thrown
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your application. Please try again or contact us directly.");
    } finally {
      setPending(false);
    }
  }

  if (success) {
    return (
      <div className="reg-success-card">
        <div className="reg-success-icon">✓</div>
        <h2 className="reg-success-title">Application Received</h2>
        <p className="reg-success-text">
          Thank you for applying to the Bioinformatics Mentorship Program (Cohort 02). 
          Our team will review your research interests and academic background within 7 days.
        </p>
        <p className="reg-success-next">
          Shortlisted candidates will receive an invitation for a 30-minute info session via email.
        </p>
        <Link href="/" className="reg-success-btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="reg-form">
      <div className="reg-form-grid">
        {/* Basic Info */}
        <div className="reg-form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required placeholder="Jane" />
        </div>
        
        <div className="reg-form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required placeholder="Doe" />
        </div>

        <div className="reg-form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required placeholder="jane.doe@university.edu" />
        </div>

        <div className="reg-form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required placeholder="+880 1XXX XXXXXX" />
        </div>

        {/* Academic Info */}
        <div className="reg-form-group full-width">
          <label htmlFor="university">University</label>
          <input type="text" id="university" name="university" required placeholder="e.g. University of Dhaka" />
        </div>

        <div className="reg-form-group">
          <label htmlFor="department">Department</label>
          <input type="text" id="department" name="department" required placeholder="e.g. Biochemistry / CSE" />
        </div>

        <div className="reg-form-group">
          <label htmlFor="year">Year of Study</label>
          <select id="year" name="year" required>
            <option value="">Select Year</option>
            <option value="Undergrad 1st">Undergrad 1st Year</option>
            <option value="Undergrad 2nd">Undergrad 2nd Year</option>
            <option value="Undergrad 3rd">Undergrad 3rd Year</option>
            <option value="Undergrad 4th">Undergrad 4th Year</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
            <option value="Professional">Professional / Researcher</option>
          </select>
        </div>

        {/* Research Info */}
        <div className="reg-form-group full-width">
          <label htmlFor="researchArea">Primary Research Area</label>
          <input type="text" id="researchArea" name="researchArea" required placeholder="e.g. Cancer Genomics, Plant Genomics, Structural Bio" />
        </div>

        <div className="reg-form-group full-width">
          <label htmlFor="plans">PhD/MS Plan in Bioinformatics/Computational Biology</label>
          <textarea 
            id="plans" 
            name="plans" 
            required 
            rows={4} 
            placeholder="Briefly describe your goals for graduate school and how this mentorship aligns with your research career."
          ></textarea>
        </div>
      </div>

      <div className="reg-form-footer">
        <label className="reg-policy-checkbox">
          <input 
            type="checkbox" 
            checked={agreed} 
            onChange={(e) => setAgreed(e.target.checked)} 
            required 
          />
          <span>
            I have read and agree to the <Link href="/policies" target="_blank" className="reg-policy-link">Mentorship Policies</Link>, including the 12-week commitment and ethical standards.
          </span>
        </label>
        <button type="submit" disabled={pending || !agreed} className="reg-submit-btn">
          {pending ? "Processing Application..." : "Submit Application →"}
        </button>
      </div>
    </form>
  );
}
