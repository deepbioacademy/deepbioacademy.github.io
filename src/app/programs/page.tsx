"use client";

import { useState } from "react";
import Link from "next/link";
import { ACADEMY_PROGRAMS, Program } from "@/data/programs";
import { 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  Filter, 
  ShieldCheck, 
  Dna, 
  FlaskConical, 
  Bot, 
  GraduationCap, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

export default function ProgramsDirectoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Bioinformatics", "Drug Discovery", "Generative AI", "AI Literacy"];

  const filteredPrograms = selectedCategory === "All"
    ? ACADEMY_PROGRAMS
    : ACADEMY_PROGRAMS.filter((p) => p.category === selectedCategory);

  const getProgramIcon = (id: string) => {
    switch (id) {
      case "bmp":
        return <Dna className="w-6 h-6 text-blue-700" />;
      case "drug-discovery":
        return <FlaskConical className="w-6 h-6 text-teal-700" />;
      case "nocode-ai":
        return <Bot className="w-6 h-6 text-purple-700" />;
      case "agami-ai":
      case "youth-ai":
        return <GraduationCap className="w-6 h-6 text-pink-700" />;
      default:
        return <Sparkles className="w-6 h-6 text-slate-700" />;
    }
  };

  const getCardAccentLine = (id: string) => {
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

  const getIconBg = (id: string) => {
    switch (id) {
      case "bmp":
        return "bg-blue-50 border-blue-200/80 text-blue-700";
      case "drug-discovery":
        return "bg-teal-50 border-teal-200/80 text-teal-700";
      case "nocode-ai":
        return "bg-purple-50 border-purple-200/80 text-purple-700";
      case "agami-ai":
      case "youth-ai":
        return "bg-pink-50 border-pink-200/80 text-pink-700";
      default:
        return "bg-slate-100 border-slate-200 text-slate-700";
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
    <div className="py-12 lg:py-16 bg-slate-50/70 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" /> Academic Curriculum Directory
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore All 4 DeepBio Tracks
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            From foundational biology & computational drug design to generative AI and youth AI education. Find the exact program suited for your career aspirations.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredPrograms.map((prog) => {
            const statusConfig = getStatusBadge(prog.status);

            return (
            <div
              key={prog.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Top Accent Strip */}
              <div className={`h-1.5 w-full ${getCardAccentLine(prog.id)}`} />

              <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                <div>
                  
                  {/* Top Bar: Icon + Badge + Status */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${getIconBg(prog.id)}`}>
                        {getProgramIcon(prog.id)}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 block leading-tight">
                          {prog.category}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {prog.badge}
                        </span>
                      </div>
                    </div>

                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border flex-shrink-0 ${statusConfig.badgeStyle}`}>
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${statusConfig.dotStyle}`} />
                      <span>{prog.status}</span>
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="text-2xl sm:text-[26px] font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-3">
                    {prog.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {prog.subtitle}
                  </p>

                  {/* Metadata */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 mb-6 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Duration</span>
                      <span className="font-bold text-slate-800 text-xs sm:text-[13px]">{prog.duration}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Format</span>
                      <span className="font-bold text-slate-800 text-xs sm:text-[13px] truncate block">{prog.format.split('+')[0]}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Level</span>
                      <span className="font-bold text-slate-800 text-xs sm:text-[13px] truncate block">{prog.level.split('(')[0]}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Curriculum Highlights
                    </p>
                    <div className="space-y-2">
                      {prog.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Topics */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1.5">
                      {prog.keyTopics.map((topic, i) => (
                        <span 
                          key={i} 
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/60"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 border-t border-slate-100">
                  <Link
                    href={prog.href}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 hover:from-blue-700 hover:via-indigo-700 hover:to-teal-700 text-white font-bold text-sm text-center shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Explore Program & Syllabus</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
