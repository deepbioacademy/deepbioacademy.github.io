import Image from "next/image";
import { BookOpen, ExternalLink, Sparkles, Award } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const publications = [
  {
    id: "cct5",
    journal: "Scientific Reports (Nature)",
    title: "Pan-cancer analysis reveals immunological and prognostic significance of CCT5 in human tumors",
    year: "2024",
    slug: "cct5",
    url: "https://www.nature.com/articles/s41598-025-88339-z",
    badge: "Nature Portfolio",
    doi: "10.1038/s41598-025-88339-z"
  },
  {
    id: "meta",
    journal: "BMC Genomics (Springer)",
    title: "Meta-Analysis of Genomic Variants Using Integrative Computational Methods",
    year: "2023",
    slug: "meta",
    url: "https://link.springer.com/article/10.1186/s12864-025-12127-2",
    badge: "BMC Series",
    doi: "10.1186/s12864-025-12127-2"
  },
  {
    id: "wnt",
    journal: "Scientific Reports (Nature)",
    title: "Comprehensive bioinformatics analysis reveals prognostic significance and immunological roles of WNT gene family in breast cancer",
    year: "2023",
    slug: "wnt",
    url: "https://www.nature.com/articles/s41598-025-13315-6",
    badge: "Nature Portfolio",
    doi: "10.1038/s41598-025-13315-6"
  },
];

function pageUrl(slug: string, pageNum: number) {
  const paddedPage = pageNum.toString().padStart(4, '0');
  return `${BASE}/publications/${slug}/${slug}_page-${paddedPage}.jpg`;
}

export default function Publications() {
  return (
    <section className="py-16 bg-white border-t border-b border-slate-200/80" id="publications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" /> Peer-Reviewed Research
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Selected Lab Publications
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Peer-reviewed research and reproducible computational pipelines at the intersection of cancer transcriptomics, functional genomics, and precision oncology.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <a
              key={pub.id}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Paper Preview Graphic */}
                <div className="relative h-48 w-full bg-slate-200/60 rounded-xl overflow-hidden mb-6 flex items-center justify-center p-4 border border-slate-200">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image 
                      src={pageUrl(pub.slug, 3)} 
                      alt={`${pub.title} pg 3`} 
                      width={120} 
                      height={160} 
                      className="absolute left-4 top-2 rounded shadow-md transform -rotate-6 opacity-75 border border-white" 
                      quality={85} 
                    />
                    <Image 
                      src={pageUrl(pub.slug, 2)} 
                      alt={`${pub.title} pg 2`} 
                      width={120} 
                      height={160} 
                      className="absolute right-4 top-2 rounded shadow-md transform rotate-6 opacity-75 border border-white" 
                      quality={85} 
                    />
                    <Image 
                      src={pageUrl(pub.slug, 1)} 
                      alt={`${pub.title} pg 1`} 
                      width={130} 
                      height={175} 
                      className="relative z-10 rounded shadow-lg border-2 border-white group-hover:scale-105 transition-transform" 
                      quality={95} 
                      priority 
                    />
                  </div>
                </div>

                {/* Journal & Year */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md">
                    {pub.journal}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {pub.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-blue-700 transition-colors mb-3">
                  {pub.title}
                </h3>
              </div>

              {/* Action link */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                <span>Read Full Article</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center pt-2">
          <a
            href="https://mdjubayerhossain.com/publications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold text-xs shadow-2xs hover:shadow transition-all"
          >
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>View Complete Publications Archive on Lead Mentor Website</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
