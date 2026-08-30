import { ImageResponse } from "next/og";

export const alt = "DeepBio Academy — Bioinformatics, Computational Biology & Life Science AI";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#090d16",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.3) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(13, 148, 136, 0.25) 0%, transparent 40%)",
          padding: "60px 70px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top bar: Brand badge & domain */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #2563eb, #0d9488)",
              color: "#ffffff",
              fontSize: "26px",
              fontWeight: "bold",
            }}
          >
            🧬
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "30px",
                fontWeight: "800",
                color: "#ffffff",
                letterSpacing: "-0.5px",
              }}
            >
              DeepBio Academy
            </span>
            <span
              style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "#38bdf8",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              deepbioacademy.com
            </span>
          </div>
        </div>

        {/* Main headline and description */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "1000px" }}>
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "900",
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            Accelerating Life Science with{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #38bdf8, #2dd4bf)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Bioinformatics & AI
            </span>
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              lineHeight: 1.45,
              margin: 0,
              maxWidth: "880px",
            }}
          >
            Comprehensive training in Single-Cell & Bulk RNA-seq, AI Drug Discovery (CADD),
            GROMACS Molecular Dynamics, and Multi-Omics Research.
          </p>
        </div>

        {/* Bottom tags */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {[
            "Single-Cell RNA-seq",
            "AI Drug Discovery",
            "Nextflow Workflows",
            "Publications Mentorship",
          ].map((tag, idx) => (
            <div
              key={idx}
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#e2e8f0",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
