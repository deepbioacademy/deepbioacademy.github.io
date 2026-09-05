import React from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  ClipboardCheck, 
  Clock, 
  Calendar, 
  Users, 
  Scale, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function ResearchAssistant() {
  const cards = [
    {
      step: "01",
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
      title: "Academic Background",
      items: [
        "Strong intrinsic motivation for computational biology & biomedical research",
        "Clear aspirations for international MS/PhD applications or industry R&D positions",
      ],
    },
    {
      step: "02",
      icon: <ClipboardCheck className="w-5 h-5 text-teal-600" />,
      title: "Program Completion",
      items: [
        "Enrolled in or graduated from DeepBio Mentorship programs (BMP or Drug Discovery)",
        "Demonstrated mastery of reproducible pipelines in R & Linux",
      ],
    },
    {
      step: "03",
      icon: <Clock className="w-5 h-5 text-indigo-600" />,
      title: "Time Commitment",
      items: [
        "15–20 hours per week devoted to reproducible coding and data analysis",
        "Flexible working hours with scheduled weekly project milestones",
      ],
    },
    {
      step: "04",
      icon: <Calendar className="w-5 h-5 text-blue-600" />,
      title: "Weekly Lab Meetings",
      items: [
        "Active participation in online lab standups and manuscript review sessions",
        "Live presentation of progress, code walkthroughs, and pipeline troubleshooting",
      ],
    },
    {
      step: "05",
      icon: <Users className="w-5 h-5 text-purple-600" />,
      title: "Collaborative Mindset",
      items: [
        "Collaborative spirit and proactive peer communication on GitHub and Discord",
        "Receptiveness to constructive academic feedback and rigorous code reviews",
      ],
    },
    {
      step: "06",
      icon: <Scale className="w-5 h-5 text-amber-600" />,
      title: "Research Ethics",
      items: [
        "Uncompromising adherence to academic integrity and data reproducibility",
        "12–18 month project commitment through final manuscript preparation",
      ],
    },
  ];

  return (
    <section id="research-assistant" className="py-16 lg:py-20 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" /> Pathway to Lab Fellowship
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Join as a Research Assistant
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Top-performing participants who complete their mentorship projects with distinction are invited to join active research initiatives in cancer genomics, neurogenomics, and AI therapeutics.
          </p>
        </div>

        {/* Mandatory Eligibility Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-200/60 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Mandatory Eligibility Thresholds</h3>
              <p className="text-xs text-slate-500">Criteria required for consideration as a DeepBio Research Assistant</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-4">
              <span className="text-3xl font-black text-blue-600">≥ 85%</span>
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Attendance Rate</h4>
                <p className="text-xs text-slate-500">Mentoring session attendance</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-4">
              <span className="text-3xl font-black text-teal-600">≥ 85%</span>
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Project Execution</h4>
                <p className="text-xs text-slate-500">Task & pipeline completion rate</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed font-medium bg-slate-50 p-4 rounded-xl border border-slate-200/60">
            These thresholds ensure all lab members possess the foundational discipline and computational rigour required to conduct high-impact, reproducible science.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div 
              key={card.step} 
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="text-xs font-black text-slate-300">
                    {card.step}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-3">
                  {card.title}
                </h4>

                <ul className="space-y-2">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Application Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-white text-center space-y-5 shadow-xl shadow-blue-600/10">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Begin Your Research Career?
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Enroll in our flagship mentorship cohorts to build your technical foundation, analyze real-world datasets, and qualify for lab research positions.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/apply"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Apply for Upcoming Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/programs"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-700/60 hover:bg-blue-700 text-white font-semibold text-xs border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Programs &amp; Syllabus</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
