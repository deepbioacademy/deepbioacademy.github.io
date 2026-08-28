'use client';

import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Clock, 
  Globe2, 
  Code2, 
  GraduationCap, 
  HeartHandshake,
  MessageSquare
} from 'lucide-react';
import { MENTORS } from '@/data/showcaseData';
import { LinkConfig, MentorProfile } from '@/types';
import { DEFAULT_CONFIG } from '@/utils/config';

import Image from 'next/image';

interface MentorSectionProps {
  onOpenRegistration: (track?: string, eventTitle?: string) => void;
  config?: LinkConfig;
}

const MentorCard: React.FC<{ mentor: MentorProfile }> = ({ mentor }) => {
  const [imgError, setImgError] = useState(false);
  const isMentor = mentor.role === 'Mentor';

  return (
    <div 
      className="bg-white rounded-2xl border border-slate-200/85 shadow-xs hover:shadow-lg hover:shadow-slate-900/5 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group p-3 sm:p-3.5"
    >
      {/* 1. Photo Viewport with Inset Gallery Frame */}
      <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-slate-100 ring-1 ring-slate-900/5 shadow-inner">
        {!imgError && mentor.imageUrl ? (
          <Image 
            src={mentor.imageUrl} 
            alt={mentor.name}
            width={380}
            height={260}
            quality={85}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500 ease-out"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-tr ${mentor.imagePlaceholderColor || 'from-indigo-600 to-violet-700'} text-white font-extrabold text-2xl flex items-center justify-center`}>
            {mentor.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
          </div>
        )}

        {/* Floating Role Badge */}
        <div className="absolute top-2.5 right-2.5">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide backdrop-blur-md shadow-xs border ${
            isMentor 
              ? 'bg-emerald-950/85 text-emerald-300 border-emerald-500/30' 
              : 'bg-slate-950/85 text-indigo-300 border-indigo-500/30'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isMentor ? 'bg-emerald-400' : 'bg-indigo-400'}`} />
            {mentor.role}
          </span>
        </div>

        {/* Bottom Affiliation Pill */}
        <div className="absolute bottom-2.5 left-2.5">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md text-slate-800 text-[10px] font-bold shadow-sm border border-slate-200/80">
            <GraduationCap className="w-3 h-3 text-indigo-600" />
            <span>
              {mentor.affiliation.includes('MIT')
                ? 'MIT'
                : mentor.affiliation.includes('Dhaka') || mentor.affiliation.includes('DU')
                ? 'DU (CSE)'
                : 'agami.ai'}
            </span>
          </span>
        </div>
      </div>

      {/* 2. Content Details */}
      <div className="pt-3 px-1 space-y-1.5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-1.5">
            <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight">
              {mentor.name}
            </h4>
            <div className="w-4 h-4 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0" title="Verified Profile">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>

          <p className="text-xs font-semibold text-indigo-600">
            {mentor.affiliation}
          </p>

          <p className="text-xs text-slate-600 font-normal leading-relaxed mt-1 line-clamp-2">
            {mentor.specialization}
          </p>
        </div>

        {/* Micro Domain Tags */}
        {mentor.tags && mentor.tags.length > 0 && (
          <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
            {mentor.tags.slice(0, 2).map((tag, idx) => (
              <span 
                key={idx}
                className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium border border-slate-200/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const MentorSection: React.FC<MentorSectionProps> = ({
  onOpenRegistration,
  config = DEFAULT_CONFIG
}) => {
  const safeConfig = config || DEFAULT_CONFIG;

  const mentorTracks = [
    {
      icon: Code2,
      title: 'Project & Technical Mentor',
      description: 'Guide student teams through hands-on AI experiments with Python, Google Colab, Teachable Machine, and computer vision models.',
      badge: 'Technical Track'
    },
    {
      icon: GraduationCap,
      title: 'Guest Speaker & Career Guide',
      description: 'Deliver inspiring guest lectures, demystify real-world machine learning careers, and share ethical AI perspectives with school classrooms.',
      badge: 'Outreach Track'
    },
    {
      icon: Award,
      title: 'Showcase Judge & Reviewer',
      description: 'Evaluate creative AI projects during our regional hackathons, science fairs, and national young innovator showcases.',
      badge: 'Showcase Track'
    }
  ];

  const volunteerBenefits = [
    {
      icon: Clock,
      title: 'Flexible & Hybrid',
      desc: 'Contribute just 2-4 hours per month via remote mentoring sessions or weekend regional workshops.'
    },
    {
      icon: Award,
      title: 'Official Recognition',
      desc: 'Receive an official agami.ai Mentor Certificate, verifiable digital credential, and public recognition.'
    },
    {
      icon: Globe2,
      title: 'National Social Impact',
      desc: 'Directly inspire students in underrepresented districts and public schools with foundational future skills.'
    },
    {
      icon: Users,
      title: 'Elite Network',
      desc: 'Connect with a passionate community of AI researchers, industry engineers, and educational innovators.'
    }
  ];

  return (
    <section id="mentors" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-indigo-600" />
            <span>Community & Mentorship Network</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Be a Mentor at agami.ai
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Empower Bangladesh's next generation of AI innovators. Volunteer your expertise to mentor high school and college students, support educators, and shape a thriving, ethical AI ecosystem.
          </p>
        </div>

        {/* 3 Mentor Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentorTracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold">
                      {track.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                      {track.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100">
                  <button
                    onClick={() => onOpenRegistration('Mentor', track.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer group-hover:translate-x-1 transition-transform"
                  >
                    <span>Express Interest</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Mentor With Us (4 Pillars) */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Why Volunteer as an agami.ai Mentor?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Join a structured volunteering framework designed to respect your busy schedule while maximizing student outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="space-y-2.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-9 h-9 rounded-lg bg-indigo-100/70 text-indigo-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Leadership & Mentors */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Mentor Community</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Featured Leadership &amp; Mentors
              </h3>
            </div>
            <button
              onClick={() => onOpenRegistration('Mentor', 'Mentor Application')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 self-start sm:self-auto cursor-pointer"
            >
              <span>Join our mentor roster</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {MENTORS.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}

            {/* Join as Mentor Card */}
            <div 
              onClick={() => onOpenRegistration('Mentor', 'agami.ai Mentor Application')}
              className="rounded-2xl border-2 border-dashed border-slate-200 hover:border-indigo-300 bg-slate-50/60 hover:bg-indigo-50/30 p-5 flex flex-col justify-center items-center text-center transition-all duration-300 cursor-pointer group min-h-[280px]"
            >
              <div className="w-11 h-11 rounded-xl bg-white shadow-xs border border-slate-200/80 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                Join Our Mentor Network
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed max-w-[200px]">
                Share your expertise in AI, biology, or computing with young Bangladeshi learners.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                <span>Apply as Mentor</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Ready to Make an Impact?</span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              Inspire the Next Generation of Bangladeshi AI Innovators
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl">
              Whether you are a software developer, data scientist, graduate researcher, university faculty, or passionate tech educator, your mentorship can open doors for a young student.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenRegistration('Mentor', 'agami.ai Mentor Application')}
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Apply as an agami.ai Mentor</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={`mailto:${safeConfig.contactEmail || 'agamiai@gmail.com'}?subject=Mentor%20Inquiry%20-%20agami.ai`}
                className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <span>Contact Mentorship Team</span>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Open to undergraduate/graduate students & industry professionals
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                100% Volunteer basis with verified certification
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

