import Image from "next/image";
import { Users, CheckCircle2, Award, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import { instructors, preRegisterUrl } from "@/lib/data";

export function Instructor() {
  return (
    <section id="faculty" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-teal-600" />
              <span>Program Leadership &amp; Faculty</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Leadership &amp; Mentors
            </h2>
            <p className="text-slate-600 text-xs sm:text-base font-normal leading-relaxed max-w-2xl">
              Learn directly from experienced bioinformaticians, computational chemists, and AI researchers guiding every live session.
            </p>
          </div>

          <a
            href={preRegisterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 self-start sm:self-auto cursor-pointer"
          >
            <span>Pre-Register with Mentors</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mentor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {instructors.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl border border-slate-200/85 shadow-xs hover:shadow-lg hover:shadow-slate-900/5 hover:border-teal-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group p-3 sm:p-3.5"
            >
              {/* Photo Area */}
              <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden bg-slate-100 ring-1 ring-slate-900/5 shadow-inner">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Bio & Details */}
              <div className="pt-3 px-1 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1.5">
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors tracking-tight">
                      {member.name}
                    </h4>
                    <div
                      className="w-4 h-4 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0"
                      title="Verified Instructor"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-teal-700">{member.role}</p>
                  <p className="text-[11px] font-medium text-slate-500">{member.organization}</p>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed mt-1 line-clamp-2">
                    {member.specialty}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lead Mentor Metrics & Quote Banner */}
        <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Direct Mentorship · Research Rigor
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Every student works directly with the lead instructor on live coding, weekly assignments, and publication-grade capstone projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="space-y-2 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs text-center">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mx-auto">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-900">5+ Years</h4>
              <p className="text-xs text-slate-600 font-medium">Research in CADD &amp; Cheminformatics</p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs text-center">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-900">3,000+</h4>
              <p className="text-xs text-slate-600 font-medium">Students &amp; Researchers Trained</p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs text-center">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center mx-auto">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-900">20+</h4>
              <p className="text-xs text-slate-600 font-medium">Peer-Reviewed Scientific Publications</p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs text-center">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mx-auto">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-900">RA Pathway</h4>
              <p className="text-xs text-slate-600 font-medium">Direct Lab Recruitment for High Performers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
