"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bot,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Users,
  Award,
  Layers,
  FileText,
  Dna,
  Cpu,
  Brain,
  Search,
  ExternalLink,
  ChevronDown,
  ShieldCheck,
  BookOpen,
  Zap,
  Globe
} from "lucide-react";

export default function NoCodeAIPage() {
  const [activeTab, setActiveTab] = useState<"all" | "ai" | "omics" | "discovery">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sessions = [
    {
      id: "01",
      week: "Week 1 · Day 1",
      title: "No-Code Tools Setup & Foundations",
      category: "ai",
      desc: "Setting up essential no-code environments, understanding generative AI models, tokens, multimodal capabilities, and foundations of Agentic AI in Life Sciences.",
      deliverable: "Environment config + AI workspace",
    },
    {
      id: "02",
      week: "Week 1 · Day 2",
      title: "Prompt & Context Engineering (RTFC & P-A-E-I)",
      category: "ai",
      desc: "Structuring high-precision biological directives using the RTFC framework, managing context windows, few-shot prompting, and deploying the P-A-E-I workflow for wet-lab protocols.",
      deliverable: "Custom prompt repository",
    },
    {
      id: "03",
      week: "Week 2 · Day 1",
      title: "Agentic Literature Review & Systematic Synthesis",
      category: "ai",
      desc: "Building autonomous research pipelines with PubMed monitors, Consensus, Elicit, SciSpace, and source-grounded synthesis using NotebookLM.",
      deliverable: "Automated systematic review matrix",
    },
    {
      id: "04",
      week: "Week 2 · Day 2",
      title: "No-Code Omics Data Analysis: Bulk RNA-Seq",
      category: "omics",
      desc: "No-code RNA-seq pipelines from raw count matrices to differential expression with DESeq2, volcano plots, and agentic biological pathway interpretation (GSEA).",
      deliverable: "Complete DE analysis report",
    },
    {
      id: "05",
      week: "Week 3 · Day 1",
      title: "Single-Cell (scRNA-Seq) & Spatial Exploration",
      category: "omics",
      desc: "Exploring cell-level heterogeneity with Scanpy and Seurat web apps, quality control, dimensional reduction, cell-type annotation, and spatial marker mapping.",
      deliverable: "Cell cluster identification report",
    },
    {
      id: "06",
      week: "Week 3 · Day 2",
      title: "Deep Learning: Biomarker & Clinical Prediction",
      category: "discovery",
      desc: "Intuitive neural network architectures, tabular clinical modeling, biomarker classification without code, and evaluating ROC-AUC and model interpretability.",
      deliverable: "Biomarker prediction model",
    },
    {
      id: "07",
      week: "Week 4 · Day 1",
      title: "AI in Drug Discovery & Target Validation",
      category: "discovery",
      desc: "Accelerating discovery pipelines with Open Targets, ChEMBL bioactivity filters, AlphaFold 3D structure visualization, and generative molecular design.",
      deliverable: "Target-to-lead workflow",
    },
    {
      id: "08",
      week: "Week 4 · Day 2",
      title: "Biomedical Image Analysis & Capstone Presentations",
      category: "discovery",
      desc: "Computer vision intuition for microscopy and pathology imaging, AI triage workflows, and final project defense with live peer and mentor review.",
      deliverable: "Final Capstone Project Defense",
    },
  ];

  const filteredSessions = activeTab === "all" ? sessions : sessions.filter((s) => s.category === activeTab);

  const tools = [
    { name: "ChatGPT & GPT-4o", cat: "Agentic Reasoning", role: "Protocol design & workflow reasoning" },
    { name: "Claude 3.5 Sonnet", cat: "Coding & Logic", role: "Complex analytical pipelines & document synthesis" },
    { name: "NotebookLM", cat: "Source-Grounded AI", role: "Multi-paper citation & query answering" },
    { name: "Consensus & Elicit", cat: "Scientific Search", role: "Evidence extraction from 200M+ papers" },
    { name: "Scanpy Web GUI", cat: "Single-Cell Omics", role: "scRNA-seq clustering & visual explorer" },
    { name: "PyDESeq2 / Galaxy", cat: "Transcriptomics", role: "Differential expression & volcano plotting" },
    { name: "AlphaFold DB", cat: "Structural Biology", role: "3D protein structure analysis" },
    { name: "Open Targets", cat: "Drug Discovery", role: "Genomic target validation & genetics evidence" },
  ];

  const faqs = [
    {
      q: "Do I need any programming experience in Python or R?",
      a: "No! This accelerator is designed specifically for biologists, medical doctors, pharmacists, and life scientists with zero coding background. Every workflow is taught using intuitive visual interfaces, agentic AI directives, and guided web toolkits.",
    },
    {
      q: "How are classes conducted?",
      a: "Classes are held live on Zoom (8 intensive sessions across 4 weeks), with interactive hands-on lab exercises. All sessions are recorded and made available immediately in your student dashboard.",
    },
    {
      q: "Will I receive a verified certificate?",
      a: "Yes. Upon completing the 8 sessions and submitting your Capstone Project, you will receive a verifiable DeepBio Academy Certificate of Completion with a unique digital credential ID.",
    },
    {
      q: "What tools and compute resources are provided?",
      a: "You will receive step-by-step tool access guides, prompt repositories, pre-configured cloud notebooks, and curated real-world datasets from GEO and TCGA.",
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/40 via-white to-slate-50/50 pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-slate-200/80">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none -z-10 overflow-hidden opacity-60">
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-purple-300/25 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-12 right-1/4 w-80 h-80 bg-indigo-300/25 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200 shadow-2xs">
                <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse" />
                <span className="text-xs font-bold text-slate-800 tracking-wide">
                  4-Week Intensive Skill Accelerator · Next Cohort Open
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                No-Code & Agentic AI for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                  Life Sciences
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Master state-of-the-art Generative AI, autonomous research agents, transcriptomics pipelines, and AI drug target discovery — <strong className="text-slate-900">without writing a single line of code</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                <Link
                  href="/apply?track=nocode-ai"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white font-bold text-sm shadow-md shadow-purple-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Enroll in Next Cohort</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href="#curriculum"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-2xs transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore 8-Session Syllabus</span>
                </a>
              </div>

              {/* Quick Metrics */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-slate-600 border-t border-slate-200/80">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>4 Weeks (8 Sessions)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span>Live Virtual + Zoom</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>10+ AI Tools Covered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Verified Certificate</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-900/5 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                      Interactive Live Track
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Cohort Overview & Timeline
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                    Registration Open
                  </span>
                </div>

                <div className="space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-50 text-purple-600 flex-shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Schedule</p>
                      <p>2 Sessions/Week · 8:30 PM – 10:30 PM (BDT)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 flex-shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Cohort Size</p>
                      <p>Limited to 35 interactive seats for personalized review</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Capstone Project</p>
                      <p>Complete end-to-end biological research workflow</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <Link
                    href="/apply?track=nocode-ai"
                    className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm text-center block shadow-xs transition-colors"
                  >
                    Reserve Your Seat &rarr;
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Three Pillars of the Accelerator */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" /> Core Learning Pillars
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Transform Your Research with No-Code AI
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Three interconnected pillars designed to empower wet-lab scientists with computational superpowers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-200/60">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                1. Generative AI & Prompt Engineering
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Master the RTFC framework (Role, Task, Format, Context) and the P-A-E-I workflow to generate bulletproof experiment protocols, statistical summaries, and publication drafts.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-200/60">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                2. Autonomous Literature Agents
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Deploy AI agents with PubMed monitors and NotebookLM to synthesize 100+ papers, extract gene-disease associations, and generate meta-analysis matrices in minutes.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200/60">
                <Dna className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                3. No-Code Omics & Target Discovery
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Execute end-to-end RNA-seq, single-cell clustering, biomarker machine learning, and AlphaFold 3D drug target validations through visual GUI workflows.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Detailed 8-Session Curriculum */}
      <section id="curriculum" className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" /> 8 Intensive Sessions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              4-Week Curriculum & Practical Roadmap
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Each session combines conceptual foundations with hands-on live walkthroughs and concrete research deliverables.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                  activeTab === "all"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                All 8 Sessions
              </button>
              <button
                onClick={() => setActiveTab("ai")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                  activeTab === "ai"
                    ? "bg-purple-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Generative & Agentic AI
              </button>
              <button
                onClick={() => setActiveTab("omics")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                  activeTab === "omics"
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Transcriptomics & scRNA
              </button>
              <button
                onClick={() => setActiveTab("discovery")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                  activeTab === "discovery"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Drug Discovery & Imaging
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSessions.map((s) => (
              <div
                key={s.id}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 hover:bg-white transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 border border-purple-200/60">
                      {s.week}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      #{s.id}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-700">
                  <span className="font-semibold text-slate-500">Deliverable:</span>
                  <span className="font-bold text-purple-700">{s.deliverable}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Tools & Ecosystem Showcase */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" /> Toolkit & Platforms
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tools You Will Master in Hands-On Labs
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Industry-standard life science software and cutting-edge generative AI models.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((t, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all space-y-2"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 block">
                  {t.cat}
                </span>
                <h4 className="font-bold text-base text-slate-900">
                  {t.name}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t.role}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Mentor Profile */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-12 border border-slate-200/90 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-slate-200 border-2 border-purple-200 flex-shrink-0 shadow-md">
              <Image
                src="/img/agamiai_mentors/jubayer.jpg"
                alt="Md. Jubayer Hossain"
                fill
                sizes="(max-width: 640px) 160px, 192px"
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                  Lead Instructor & Program Director
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Md. Jubayer Hossain
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Founder, DeepBio Academy · Lead AI & Computational Biology Mentor
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Jubayer has mentored over 3,000+ researchers, medical doctors, and students across 20+ universities in Bioinformatics, AI Drug Discovery, and Data Science. His research spans transcriptomics, cancer genomics, and applied AI in biomedical discovery.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://mdjubayerhossain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:underline"
                >
                  <span>Personal Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://www.linkedin.com/in/hossainmj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:underline"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14 space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-600">
              Everything you need to know about the No-Code AI for Life Sciences cohort.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors cursor-pointer"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      openFaq === idx ? "rotate-180 text-purple-600" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Final Enrollment CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-purple-50/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" /> Fast-Track Skill Accelerator
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ready to Supercharge Your Life Science Research?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join the upcoming cohort to gain practical, publication-ready AI tools, 1-on-1 mentor feedback, and verifiable certification.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/apply?track=nocode-ai"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white font-bold text-base shadow-lg shadow-purple-500/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>Apply for No-Code AI Cohort</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href="/programs"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-300 shadow-2xs transition-all flex items-center justify-center gap-2"
            >
              <span>Compare All 4 Programs</span>
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-500 border-t border-slate-200/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified Certificate
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-purple-600" /> Interactive Hands-on Labs
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" /> Direct Mentor Guidance
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
