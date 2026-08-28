import Image from "next/image";
import Link from "next/link";
import { Award, BookOpen, ExternalLink, GraduationCap, Sparkles } from "lucide-react";

export default function FacultyMentors() {
  const mentors = [
    {
      name: "Md. Jubayer Hossain",
      role: "Founder & Lead Mentor",
      focus: "Bioinformatics, Transcriptomics & AI Drug Discovery",
      bio: "Bioinformatics researcher and educator with years of experience leading international computational biology projects, mentoring 100+ researchers, and authoring peer-reviewed genomics papers.",
      image: "/img/agamiai_mentors/jubayer.jpg",
      tags: ["Bulk RNA-seq", "Single-Cell", "CADD", "Python & R"]
    },
    {
      name: "Adib Hasan",
      role: "Lead Curriculum Advisor",
      focus: "Machine Learning, Deep Learning & Youth AI Literacy",
      bio: "AI researcher dedicated to democratizing computational thinking, machine learning toolkits, and STEM education across Bangladesh.",
      image: "/img/agamiai_mentors/adib.jpg",
      tags: ["Deep Learning", "STEM Education", "Raspberry Pi", "ML Ethics"]
    },
    {
      name: "Fayez Ahmad",
      role: "Research Fellow & Mentor",
      focus: "Computational Biology & Data Science",
      bio: "Co-author on multiple oncology transcriptomic studies, guiding mentees through reproducible differential expression, pathway enrichment, and clinical correlation.",
      image: "/img/agamiai_mentors/Fayez_Ahmad.png",
      tags: ["Genomics", "Bioconductor", "WGCNA", "Clinical Data"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" /> Mentorship That Cares
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Learn Under Experienced Researchers & Mentors
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Direct 1-on-1 code reviews, weekly interactive problem-solving labs, and career guidance for grad school & research fellowships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 border-2 border-indigo-100 flex-shrink-0">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 leading-snug">
                      {mentor.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600">
                      {mentor.role}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {mentor.focus}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {mentor.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {mentor.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
