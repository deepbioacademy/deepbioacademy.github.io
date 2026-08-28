import Image from "next/image";


const stats = [
  { value: "5+", label: "Years of Research Experience" },
  { value: "5+", label: "Years of Mentoring Experience" },
  { value: "3K+", label: "Students trained since 2020" },
  { value: "20+", label: "Publications" }
];

export default function InstructorBio() {
  return (
    <section className="bio-section">
      <div className="bio-inner">
        <p className="bio-eyebrow">About the Mentor</p>

        <div className="bio-grid stack-on-mobile">
          {/* Left: image + stats + name */}
          <div>
            <div className="bio-photo-wrap">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/img/lead/jubayer.jpg`}
                alt="Md. Jubayer Hossain"
                width={400}
                height={400}
                className="bio-photo"
              />
            </div>
            <div className="bio-stats-row">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="bio-stat-value">{s.value}</div>
                  <div className="bio-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <h2 className="bio-name">Md. Jubayer Hossain</h2>
            <p className="bio-title">Founder & CEO, DeepBio Ltd</p>
          </div>

          {/* Right: bio */}
          <div className="bio-text">
            <p>
              Md. Jubayer Hossain is a bioinformatician and computational biologist with five years of experience spanning both active research and teaching. Since 2020, he has trained over 3,000 students — from complete beginners to graduate researchers — in the practical skills required to work with real biological data.
            </p>
            <p>
              As Founder & CEO of DeepBio Ltd, Jubayer combines research rigor with a structured approach to education. His teaching is grounded in what he does daily: designing and running computational analyses on real datasets. Every student in this program works directly with him — not a TA, not a substitute — toward a concrete, submittable research output.
            </p>
            <p className="bio-quote">
              &quot;My role is to accelerate your journey from question to discovery. You bring the curiosity; I bring the roadmap, the tools, and the accountability to ensure you succeed.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
