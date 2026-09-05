import Image from "next/image";
import Link from "next/link";

const keywords = [
  { text: "RNA-seq", top: "12%", left: "5%", rotate: "-15deg" },
  { text: "DESeq2", top: "25%", left: "2%", rotate: "8deg" },
  { text: "volcano plot", top: "38%", left: "7%", rotate: "-5deg" },
  { text: "heatmap", top: "55%", left: "3%", rotate: "12deg" },
  { text: "FASTQ", top: "68%", left: "8%", rotate: "-8deg" },
  { text: "Seurat", top: "20%", left: "15%", rotate: "10deg" },
  { text: "Bioconductor", top: "45%", left: "18%", rotate: "-12deg" },
  { text: "TCGA", top: "18%", right: "4%", rotate: "10deg" },
  { text: "Salmon", top: "32%", right: "6%", rotate: "-12deg" },
  { text: "GO enrichment", top: "48%", right: "2%", rotate: "6deg" },
  { text: "PCA", top: "62%", right: "7%", rotate: "-10deg" },
  { text: "CellRanger", top: "30%", right: "18%", rotate: "15deg" },
  { text: "Visium HD", top: "70%", right: "15%", rotate: "-5deg" },
  { text: "p-value", top: "75%", right: "3%", rotate: "15deg" },
  { text: "GTEx", top: "82%", left: "12%", rotate: "5deg" },
  { text: "STAR", top: "78%", right: "12%", rotate: "-7deg" },
  { text: "featureCounts", top: "8%", left: "18%", rotate: "4deg" },
  { text: "limma", top: "85%", left: "25%", rotate: "-3deg" },
  { text: "SpatialExperiment", top: "88%", left: "5%", rotate: "8deg" },
  { text: "GEO", top: "10%", right: "18%", rotate: "-6deg" },
  { text: "ggplot2", top: "88%", right: "22%", rotate: "8deg" },
];

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Floating keywords background */}
      <div className="hero-keywords" aria-hidden="true">
        {/* Glowing Orbs */}
        <div 
          className="absolute rounded-full pointer-events-none opacity-[0.08] animate-float-slow"
          style={{ top: "-10%", left: "-10%", width: "50vw", height: "50vw", minWidth: "400px", minHeight: "400px", background: "var(--accent-blue)", filter: "blur(120px)" }}
        />
        <div 
          className="absolute rounded-full pointer-events-none opacity-[0.08] animate-float-slow"
          style={{ bottom: "-10%", right: "-10%", width: "60vw", height: "50vw", minWidth: "400px", minHeight: "400px", background: "var(--accent-green)", filter: "blur(120px)", animationDelay: "2s" }}
        />

        {keywords.map((kw, i) => (
          <span
            key={kw.text}
            style={{
              top: kw.top,
              left: kw.left,
              right: kw.right,
              transform: `rotate(${kw.rotate})`,
            }}
          >
            <span 
              className="inline-block animate-float-slow" 
              style={{ animationDelay: `${(i % 5) * 1.5}s` }}
            >
              {kw.text}
            </span>
          </span>
        ))}
      </div>

      <div className="hero-inner">
        {/* Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold tracking-wide border border-slate-200 shadow-sm transition-all hover:shadow hover:bg-slate-50 hover:border-slate-300 font-dm-sans">
            Over 3,000 researchers trained
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold shadow-2xs font-dm-sans">
            <span>🗣️ Medium of Instruction:</span>
            <span className="text-amber-950 font-extrabold underline decoration-amber-400">Bangla (বাংলা)</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="hero-heading">
          Launch Your <span className="hero-heading-highlight">Bioinformatics</span> Research Career.
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          A selective, <strong>intensive mentorship</strong> for researchers targeting international PhD programs and high-impact careers in genomics. Go beyond basics to master production-grade pipelines and research independence.
        </p>

        {/* Mentor */}
        <div className="hero-mentor">
          <Image
            src={`${BASE}/img/lead/jubayer.jpg`}
            alt="Md. Jubayer Hossain"
            width={120}
            height={120}
            className="hero-mentor-photo"
            priority
          />
          <span>
            Mentored by <strong>Md. Jubayer Hossain</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
