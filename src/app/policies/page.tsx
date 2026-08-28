import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Scale, 
  Clock, 
  GraduationCap, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight,
  ClipboardCheck,
  Calendar,
  Sparkles,
  FileText
} from 'lucide-react';

export const metadata = {
  title: 'Academy Policies & Academic Standards — DeepBio Academy',
  description: 'Official academic standards, research ethics, and policies applicable across all DeepBio Academy programs.',
};

export default function PoliciesPage() {
  const raRequirements = [
    {
      step: '01',
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
      title: 'Academic Background',
      desc: 'Strong intrinsic motivation for computational biology and biomedical research, with clear plans for international MS/PhD applications or industry R&D positions.'
    },
    {
      step: '02',
      icon: <ClipboardCheck className="w-5 h-5 text-teal-600" />,
      title: 'Program Completion',
      desc: 'Enrolled in or graduated from DeepBio Mentorship programs (BMP, Drug Discovery, or No-Code AI), demonstrating mastery of reproducible pipelines.'
    },
    {
      step: '03',
      icon: <Clock className="w-5 h-5 text-indigo-600" />,
      title: 'Time Commitment',
      desc: '15–20 hours per week devoted to reproducible coding and data analysis with scheduled weekly project milestones.'
    },
    {
      step: '04',
      icon: <Calendar className="w-5 h-5 text-blue-600" />,
      title: 'Weekly Lab Standups',
      desc: 'Active participation in weekly online lab meetings (Sundays), presenting pipeline code, progress updates, and troubleshooting.'
    },
    {
      step: '05',
      icon: <Users className="w-5 h-5 text-purple-600" />,
      title: 'Collaborative Mindset',
      desc: 'Proactive peer communication on GitHub and Discord, receptiveness to constructive feedback, and mutual respect during code reviews.'
    },
    {
      step: '06',
      icon: <Scale className="w-5 h-5 text-amber-600" />,
      title: 'Research Ethics & Duration',
      desc: 'Uncompromising adherence to academic integrity and data reproducibility, maintaining a 12–18 month commitment to complete assigned lab projects.'
    }
  ];

  const policySections = [
    {
      id: 'conduct',
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: 'Professional Conduct & Punctuality',
      points: [
        'Live Session Punctuality: Participants must attend all scheduled live mentoring sessions on time. Regular tardiness disrupts the collaborative workflow of the cohort.',
        'Professional Communication: All correspondence across Academy channels (Discord, GitHub, Email, Zoom) must remain respectful, constructive, and research-focused.',
        'Zero Plagiarism Policy: Plagiarism, unauthorized copying of code/manuscripts, or claiming others’ computational pipelines as your own will result in immediate and permanent expulsion.'
      ]
    },
    {
      id: 'technical',
      icon: <Clock className="w-5 h-5 text-indigo-600" />,
      title: 'Technical Commitment & Workload',
      points: [
        'Dedicated Weekly Hours: Participants are expected to dedicate 10–15 hours per week toward independent pipeline execution, script debugging, and literature review.',
        'Milestone Submissions: Weekly progress updates and code check-ins are mandatory. Missing two consecutive milestones without prior written notice triggers an academic Fit Review.',
        'Reproducible Computational Environment: Participants must maintain a working computational environment (Linux / WSL2 / macOS with conda/R/Python) as configured in Week 1.'
      ]
    },
    {
      id: 'ethics',
      icon: <Scale className="w-5 h-5 text-teal-600" />,
      title: 'Publication & Authorship Ethics',
      points: [
        'ICMJE Authorship Guidelines: Authorship on mentor-led or collaborative lab manuscripts is strictly earned through significant intellectual and technical contribution, following international ICMJE standards.',
        'Zero Pay-for-Authorship: We do not sell, gift, or guarantee authorship based on enrollment fees. Any attempt to purchase authorship is strictly prohibited.',
        'Independent Portfolio Ownership: Intellectual property for independent research projects remains 100% with the mentee, provided proper citations to open repositories and tools are maintained.'
      ]
    },
    {
      id: 'financial',
      icon: <FileText className="w-5 h-5 text-amber-600" />,
      title: 'Tuition & Financial Policies',
      points: [
        'Transparent Program Fees: Tuition fees cover live 1-on-1 mentorship, curriculum access, pipeline code repositories, and computational review.',
        'Timely Payment Clearance: Monthly tuition must be cleared by the 5th of each calendar month to maintain uninterrupted access to cloud and repo resources.',
        'Non-Refundable Monthly Fee: Once a mentorship month commences, the fee for that month is non-refundable. Mid-month withdrawals do not qualify for prorated refunds.'
      ]
    },
    {
      id: 'credentials',
      icon: <Award className="w-5 h-5 text-purple-600" />,
      title: 'Program Completion & Certification',
      points: [
        'Graduation Requirements: Official DeepBio Academy Certificates of Completion are awarded only to participants who complete all core project milestones and maintain ≥ 80% attendance.',
        'GitHub Verification: Mentees must submit a public, fully documented, and reproducible GitHub research repository to pass final evaluation.',
        'Letters of Recommendation: Detailed, personalized academic recommendation letters for graduate school applications (MS/PhD) are provided exclusively to high-performing participants who demonstrate exceptional rigour.'
      ]
    },
    {
      id: 'termination',
      icon: <AlertCircle className="w-5 h-5 text-red-600" />,
      title: 'Fit Review & Termination of Enrollment',
      points: [
        'Institutional Discretion: The Academy leadership reserves the right to terminate enrollment for serious breaches of code of conduct, persistent non-participation, or academic dishonesty.',
        'Disciplinary Forfeiture: In the event of termination due to ethical misconduct or plagiarism, all program access and credentials will be revoked without refund.'
      ]
    }
  ];

  return (
    <div className="bg-slate-50/70 min-h-screen py-12 lg:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-4 h-4" /> Institutional Governance
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Academy Policies &amp; Academic Standards
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Transparency, academic rigour, and uncompromised research integrity form the foundation of DeepBio Academy. These institutional policies govern all learners and research fellows across our programs.
          </p>
        </div>

        {/* Core Principles Summary Banner */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <h3 className="text-2xl font-black text-slate-900">Zero Plagiarism</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Strict Code of Ethics</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-black text-blue-600">ICMJE Standards</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Earned Authorship Only</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-black text-teal-600">100% Open Code</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Reproducible GitHub Portfolios</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-black text-indigo-600">All 4 Programs</h3>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Unified Quality Assurance</p>
          </div>
        </div>

        {/* Section: General Academic Policies */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">General Regulations</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Universal Program Policies
            </h2>
            <p className="text-sm text-slate-600">
              Applicable to Bioinformatics Mentorship (BMP), Next-Gen Drug Discovery with AI, No-Code AI for Life Sciences, and Youth AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policySections.map((sec) => (
              <div
                key={sec.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-2xs">
                      {sec.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {sec.title}
                    </h3>
                  </div>

                  <ul className="space-y-3 pt-2 border-t border-slate-100">
                    {sec.points.map((point, pIdx) => {
                      const [prefix, ...rest] = point.split(': ');
                      return (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-slate-900 font-semibold">{prefix}:</strong> {rest.join(': ')}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Research Assistant (RA) Recruitment & Lab Fellowship Policy */}
        <section className="space-y-8 pt-8 border-t border-slate-200/80">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Advanced Lab Recruitment
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Research Assistant (RA) Recruitment Pathway
            </h2>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              DeepBio Academy is not merely an educational platform; it is a strategic vetting and incubation ground to identify outstanding researchers and recruit them as Research Assistants (RAs) into our active laboratories.
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
                <p className="text-xs text-slate-500">Non-negotiable minimums required to apply for Research Assistant recruitment</p>
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
                  <p className="text-xs text-slate-500">Task &amp; pipeline completion rate</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed font-medium bg-slate-50 p-4 rounded-xl border border-slate-200/60">
              These strict thresholds guarantee that all admitted lab fellows possess the foundational discipline and computational rigour required to conduct high-impact, reproducible science.
            </p>
          </div>

          {/* RA Requirements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {raRequirements.map((req, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-2xs mb-4 group-hover:scale-105 transition-transform">
                    {req.icon}
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {req.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {req.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Acknowledgment & CTA Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-xl shadow-blue-600/10">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Ready to Begin with Clarity &amp; Confidence?
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto leading-relaxed">
            By enrolling in any DeepBio Academy track, you join an international community committed to high-impact research, reproducible coding, and academic excellence.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/apply"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Apply for Next Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/programs"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-700/60 hover:bg-blue-700 text-white font-semibold text-xs border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore All 4 Programs</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
