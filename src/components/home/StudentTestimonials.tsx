import Image from "next/image";
import { Star, Quote, Sparkles } from "lucide-react";

export default function StudentTestimonials() {
  const testimonials = [
    {
      name: "Sabbir Khan",
      title: "Research Fellow & Graduate Applicant",
      program: "Bioinformatics Mentorship Program",
      quote: "BMP completely changed my research trajectory. From knowing minimal command-line tools to independently building RNA-seq pipelines and co-authoring a manuscript, Jubayer bhai's mentorship is unmatched.",
      avatar: "/img/GSA01/Sabbir_Khan.png",
    },
    {
      name: "Rahnuma Tabassum",
      title: "Biotechnology Graduate",
      program: "BMP & CADD Track",
      quote: "The hands-on guidance on DESeq2, volcano plots, and molecular docking gave me the confidence to apply for international MS and PhD programs with a solid, publication-ready portfolio.",
      avatar: "/img/GSA01/Rahnuma_Tabassum.jpg",
    },
    {
      name: "Fayez Ahmad",
      title: "Genomics Researcher",
      program: "NextGen Drug Discovery & BMP",
      quote: "The rigorous approach to data cleaning, GROMACS simulation stability analysis, and reproducible R scripting prepared me for real biomedical research and international lab collaborations.",
      avatar: "/img/GSA01/Fayez_Ahmad.png",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Mentee Success & Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hear from Our Research Alumni
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Our alumni have gone on to publish peer-reviewed papers, secure funded graduate positions, and lead bioinformatics projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-blue-400/40" />
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 border-2 border-blue-100 flex-shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500">{item.title}</p>
                  <span className="inline-block text-[10px] font-semibold text-blue-600 mt-0.5">
                    {item.program}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
