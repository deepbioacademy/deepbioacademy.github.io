import Link from "next/link";
import { ACADEMY_PROGRAMS } from "@/data/programs";
import { 
  ArrowRight, 
  Sparkles, 
  Dna, 
  FlaskConical, 
  Bot, 
  GraduationCap, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

interface BlogProgramsCTAProps {
  currentAuthor?: string;
}

export default function BlogProgramsCTA({ currentAuthor }: BlogProgramsCTAProps) {
  const getProgramIcon = (id: string) => {
    switch (id) {
      case "bmp":
        return <Dna className="w-5 h-5 text-blue-600" />;
      case "drug-discovery":
        return <FlaskConical className="w-5 h-5 text-teal-600" />;
      case "nocode-ai":
        return <Bot className="w-5 h-5 text-purple-600" />;
      case "agami-ai":
      case "youth-ai":
        return <GraduationCap className="w-5 h-5 text-pink-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-slate-600" />;
    }
  };

  const getCardAccent = (id: string) => {
    switch (id) {
      case "bmp":
        return "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500";
      case "drug-discovery":
        return "bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-500";
      case "nocode-ai":
        return "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600";
      case "agami-ai":
      case "youth-ai":
        return "bg-gradient-to-r from-pink-600 via-rose-500 to-orange-400";
      default:
        return "bg-gradient-to-r from-slate-600 to-slate-400";
    }
  };

  const getIconContainerStyle = (id: string) => {
    switch (id) {
      case "bmp":
        return "bg-blue-50 text-blue-600 border-blue-200/80";
      case "drug-discovery":
        return "bg-teal-50 text-teal-600 border-teal-200/80";
      case "nocode-ai":
        return "bg-purple-50 text-purple-600 border-purple-200/80";
      case "agami-ai":
      case "youth-ai":
        return "bg-pink-50 text-pink-600 border-pink-200/80";
      default:
        return "bg-slate-50 text-slate-600 border-slate-200";
    }
  };

  const getStatusBadge = (status: string) => {
    if (status.includes("Open")) {
      return {
        badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200/90 shadow-2xs",
        dotStyle: "bg-emerald-500 animate-pulse",
      };
    }
    if (status === "Running") {
      return {
        badgeStyle: "bg-amber-50 text-amber-800 border-amber-200/90 shadow-2xs",
        dotStyle: "bg-amber-500",
      };
    }
    if (status === "Admission Closed") {
      return {
        badgeStyle: "bg-rose-50 text-rose-700 border-rose-200/90 shadow-2xs",
        dotStyle: "bg-rose-500",
      };
    }
    if (status.includes("Soon")) {
      return {
        badgeStyle: "bg-indigo-50 text-indigo-700 border-indigo-200/90 shadow-2xs",
        dotStyle: "bg-indigo-500",
      };
    }
    return {
      badgeStyle: "bg-slate-100 text-slate-700 border-slate-200/90",
      dotStyle: "bg-slate-400",
    };
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[var(--bg)] via-slate-50 to-slate-100/80 border-t border-[var(--border)] font-dm-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Start Your Own Journey
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {currentAuthor ? (
              <>
                Inspired by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{currentAuthor}&apos;s</span> Story?
              </>
            ) : (
              <>
                Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Research Track</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            DeepBio Academy offers specialized tracks from foundational biology & computational drug design to generative AI agents and youth AI education.
          </p>
        </div>

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ACADEMY_PROGRAMS.map((prog) => {
            const statusConfig = getStatusBadge(prog.status);

            return (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Accent Line */}
                <div className={`h-1.5 w-full ${getCardAccent(prog.id)}`} />

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top row: Icon & Status Badge */}
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${getIconContainerStyle(prog.id)}`}>
                        {getProgramIcon(prog.id)}
                      </div>
                      <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full border leading-none ${statusConfig.badgeStyle}`}>
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${statusConfig.dotStyle}`} />
                        <span>{prog.status}</span>
                      </span>
                    </div>

                    {/* Program Category / Badge */}
                    <div className="mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                        {prog.badge}
                      </span>
                    </div>

                    {/* Program Title */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2">
                      {prog.title}
                    </h3>

                    {/* Subtitle / Excerpt */}
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {prog.subtitle}
                    </p>

                    {/* Meta Chips */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-5 text-[11px] font-semibold text-slate-500">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        ⏱ {prog.duration}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {prog.level.split(" ")[0]}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                      {prog.highlights.slice(0, 2).map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-2 leading-tight">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <Link
                      href={prog.href}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs group/btn"
                    >
                      <span>View Curriculum</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>

                    {prog.status.includes("Open") ? (
                      <Link
                        href={prog.applyUrl}
                        target={prog.applyUrl.startsWith("http") ? "_blank" : undefined}
                        rel={prog.applyUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="w-full py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center gap-1 border border-emerald-300 transition-colors"
                      >
                        <span>Apply for Cohort 03</span>
                        <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                      </Link>
                    ) : prog.status === "Running" ? (
                      <Link
                        href={prog.applyUrl}
                        className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1 border border-slate-200 transition-colors"
                      >
                        <span>Join Next Cohort Waitlist</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-400" />
                      </Link>
                    ) : prog.status === "Admission Closed" ? (
                      <Link
                        href={prog.applyUrl}
                        className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 font-medium text-xs flex items-center justify-center gap-1 border border-slate-200 transition-colors"
                      >
                        <span>Join Waitlist for Next Batch</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-400" />
                      </Link>
                    ) : (
                      <Link
                        href={prog.applyUrl}
                        className="w-full py-2 px-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold text-xs flex items-center justify-center gap-1 border border-indigo-200 transition-colors"
                      >
                        <span>Pre-Register / Learn More</span>
                        <ArrowUpRight className="w-3 h-3 text-indigo-500" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with directory link and questions info */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900">
              Not sure which track fits your background best?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              Browse our complete curriculum syllabus directory or explore other inspiring mentee stories.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/programs"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-sm flex items-center gap-1.5"
            >
              <span>Explore All 4 Programs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors border border-slate-200"
            >
              ← More Mentee Stories
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
