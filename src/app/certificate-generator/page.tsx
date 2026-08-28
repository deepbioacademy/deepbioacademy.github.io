"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  Award, 
  Download, 
  Printer, 
  Sparkles, 
  CheckCircle2, 
  QrCode, 
  ShieldCheck, 
  Copy, 
  RefreshCw, 
  GraduationCap,
  Dna,
  Calendar, 
  User, 
  FileText,
  ExternalLink,
  ChevronDown
} from "lucide-react";

interface CertificatePreset {
  id: string;
  programTitle: string;
  programSubtitle: string;
  trackName: string;
  duration: string;
  description: string;
  skills: string[];
  themeColor: string;
  accentGradient: string;
  badgeLabel: string;
}

const certificatePresets: Record<string, CertificatePreset> = {
  bmp: {
    id: "bmp",
    programTitle: "Bioinformatics Mentorship Program (BMP)",
    programSubtitle: "12-Week Intensive Research Cohort & Manuscript Preparation",
    trackName: "Transcriptomics, Nextflow Pipelines & Clinical Genomics",
    duration: "12 Weeks (120+ Practical Lab Hours)",
    description: "for successfully mastering end-to-end bulk & single-cell RNA-seq quantification, reproducible Nextflow/Docker workflows, DESeq2 differential expression modeling, and co-authoring publication-grade computational manuscripts.",
    skills: ["Bulk RNA-Seq", "Single-Cell (Scanpy/Seurat)", "Nextflow & Docker", "DESeq2", "Linux & HPC"],
    themeColor: "#2563EB",
    accentGradient: "linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #0D9488 100%)",
    badgeLabel: "ADVANCED RESEARCH FELLOW"
  },
  drug_discovery: {
    id: "drug_discovery",
    programTitle: "Next-Gen AI Drug Discovery & CADD",
    programSubtitle: "12-Week Computational Therapeutics & Structural Biology Track",
    trackName: "AlphaFold2, Molecular Docking, QSAR & Cheminformatics",
    duration: "12 Weeks (120+ Practical Lab Hours)",
    description: "for demonstrating technical mastery in 3D protein structure prediction with AlphaFold2, high-throughput virtual screening with AutoDock Vina, RDKit molecular featurization, and ADMET toxicity modeling.",
    skills: ["AlphaFold2", "Molecular Docking", "RDKit Cheminformatics", "DeepChem", "GROMACS Dynamics"],
    themeColor: "#4F46E5",
    accentGradient: "linear-gradient(135deg, #3730A3 0%, #4F46E5 50%, #7C3AED 100%)",
    badgeLabel: "COMPUTATIONAL THERAPEUTICS FELLOW"
  },
  nocode_ai: {
    id: "nocode_ai",
    programTitle: "No-Code & Agentic AI for Life Sciences",
    programSubtitle: "4-Week Executive Program on Applied AI Agents in Biology",
    trackName: "Agentic Research Workflows, Prompt Engineering & Bio-Tools",
    duration: "4 Weeks (40+ Intensive Hours)",
    description: "for successfully developing autonomous biological literature synthesizers, deploying custom multimodal research agents, and automating wet-lab data extraction without writing code.",
    skills: ["Agentic AI Workflows", "NotebookLM Synthesis", "PubMed Automation", "Multi-Omics No-Code", "Bio-Prompting"],
    themeColor: "#7C3AED",
    accentGradient: "linear-gradient(135deg, #5B21B6 0%, #7C3AED 50%, #DB2777 100%)",
    badgeLabel: "CERTIFIED LIFE SCIENCE AI PRACTITIONER"
  },
  youth_ai: {
    id: "youth_ai",
    programTitle: "Youth AI Literacy & Computational Thinking",
    programSubtitle: "8-Week National AI Education Initiative",
    trackName: "Foundational Machine Learning, Python & Raspberry Pi",
    duration: "8 Weeks (60+ Hours)",
    description: "for exemplary performance in Python programming, machine learning foundations, computer vision pipelines on edge hardware, and ethical AI development.",
    skills: ["Python Programming", "Machine Learning Fundamentals", "Edge AI (Raspberry Pi)", "Computer Vision", "STEM Ethics"],
    themeColor: "#0D9488",
    accentGradient: "linear-gradient(135deg, #115E59 0%, #0D9488 50%, #0284C7 100%)",
    badgeLabel: "YOUTH AI SCHOLAR"
  }
};

export default function CertificateGeneratorPage() {
  const [selectedTrack, setSelectedTrack] = useState<string>("bmp");
  const [recipientName, setRecipientName] = useState<string>("Rahnuma Tabassum");
  const [affiliation, setAffiliation] = useState<string>("Jagannath University · Dept. of Biochemistry & Molecular Biology");
  const [issueDate, setIssueDate] = useState<string>("August 26, 2026");
  const [credentialId, setCredentialId] = useState<string>("DBA-BMP-2026-0842");
  const [gradeHonors, setGradeHonors] = useState<string>("With Highest Distinction");
  const [instructorName, setInstructorName] = useState<string>("Md. Jubayer Hossain");
  const [instructorTitle, setInstructorTitle] = useState<string>("Founder & Lead Research Mentor, DeepBio Academy");
  const [copied, setCopied] = useState<boolean>(false);

  const certRef = useRef<HTMLDivElement>(null);
  const preset = certificatePresets[selectedTrack] || certificatePresets.bmp;

  // Generate random fresh ID on track change
  const handleTrackChange = (trackKey: string) => {
    setSelectedTrack(trackKey);
    const year = new Date().getFullYear();
    const rand = Math.floor(1000 + Math.random() * 9000);
    const prefix = trackKey.toUpperCase();
    setCredentialId(`DBA-${prefix}-${year}-${rand}`);
  };

  const copyCredentialLink = () => {
    const url = `https://deepbio.academy/verify?id=${credentialId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12 lg:py-16">
      {/* Print Specific CSS */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-certificate, #printable-certificate * {
            visibility: visible;
          }
          #printable-certificate {
            position: fixed;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
            border: none;
            box-shadow: none;
            background: white !important;
            color: #0f172a !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          @page {
            size: A4 landscape;
            margin: 0;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" /> Official Academic Credential System
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Executive Certificate Generator
            </h1>
            <p className="text-sm text-slate-400">
              Generate tamper-verifiable, high-resolution certificates of completion and research distinction.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4 text-blue-400" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={copyCredentialLink}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all flex items-center gap-2 shadow-md shadow-blue-600/30 cursor-pointer"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Verification Link Copied!" : "Copy Verify URL"}</span>
            </button>
          </div>
        </div>

        {/* Generator Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Controls Panel (4 Cols) */}
          <div className="lg:col-span-4 bg-slate-950 rounded-3xl p-6 sm:p-7 border border-slate-800 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-400" /> Credential Parameters
              </h2>
              <span className="text-[11px] font-mono text-slate-500">Live Sync</span>
            </div>

            {/* Select Academic Program */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Select Academic Program
              </label>
              <select
                value={selectedTrack}
                onChange={(e) => handleTrackChange(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="bmp">Bioinformatics Mentorship Program (BMP)</option>
                <option value="drug_discovery">Next-Gen AI Drug Discovery & CADD</option>
                <option value="nocode_ai">No-Code & Agentic AI for Life Sciences</option>
                <option value="youth_ai">Youth AI Literacy & Computational Thinking</option>
              </select>
            </div>

            {/* Recipient Full Name */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Recipient Full Name
              </label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="e.g. Rahnuma Tabassum"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Institutional Affiliation */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                University / Academic Affiliation
              </label>
              <input
                type="text"
                value={affiliation}
                onChange={(e) => setAffiliation(e.target.value)}
                placeholder="e.g. University of Dhaka · Dept. of Biochemistry"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Honors / Distinction Level */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Honors &amp; Distinction Level
              </label>
              <select
                value={gradeHonors}
                onChange={(e) => setGradeHonors(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="With Highest Distinction">With Highest Distinction (Top 5% Cohort Output)</option>
                <option value="With Honors & Research Publication">With Honors &amp; Research Publication</option>
                <option value="Certificate of Excellence">Certificate of Excellence</option>
                <option value="Certificate of Completion">Certificate of Completion</option>
              </select>
            </div>

            {/* Issue Date & Credential ID */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Issue Date
                </label>
                <input
                  type="text"
                  value={issueDate}
                  onChange={(e) => setIssueDate(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Credential ID
                </label>
                <input
                  type="text"
                  value={credentialId}
                  onChange={(e) => setCredentialId(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono font-semibold text-blue-400 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Lead Signatory */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Authorized Signatory
              </label>
              <input
                type="text"
                value={instructorName}
                onChange={(e) => setInstructorName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs font-semibold text-white focus:outline-none focus:border-blue-500 mb-2"
              />
              <input
                type="text"
                value={instructorTitle}
                onChange={(e) => setInstructorTitle(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-[11px] text-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/40 space-y-2 text-xs text-blue-200">
              <div className="flex items-center gap-2 font-bold text-blue-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Tamper-Proof Cryptographic Hash
              </div>
              <p className="text-[11px] text-blue-300/80 leading-relaxed font-mono">
                Verification hash: SHA-256:{credentialId.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}...
              </p>
            </div>
          </div>

          {/* RIGHT: Live High-Resolution Certificate Canvas (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col items-center space-y-4">
            
            <div className="w-full flex items-center justify-between px-2 text-xs text-slate-400">
              <span className="font-bold uppercase tracking-wider flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 text-amber-400" /> High-Resolution Landscape Canvas (A4 / 16:9)
              </span>
              <span className="text-[11px] text-emerald-400 font-mono">● 300 DPI Print Ready</span>
            </div>

            {/* ================= ACTUAL CERTIFICATE FRAME ================= */}
            <div 
              id="printable-certificate"
              ref={certRef}
              className="w-full bg-white text-slate-900 rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl border-8 border-slate-100 flex flex-col justify-between aspect-[1.414/1] min-h-[580px]"
              style={{
                backgroundImage: "radial-gradient(circle at 50% 50%, #ffffff 0%, #f8fafc 100%)",
                boxShadow: "0 25px 60px -15px rgba(0,0,0,0.5), inset 0 0 0 2px #cbd5e1, inset 0 0 0 8px #f1f5f9, inset 0 0 0 10px #e2e8f0"
              }}
            >
              {/* Luxury Guilloche Geometric Corner Accents */}
              <div className="absolute top-4 left-4 w-24 h-24 border-t-2 border-l-2 border-slate-300 pointer-events-none"></div>
              <div className="absolute top-4 right-4 w-24 h-24 border-t-2 border-r-2 border-slate-300 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 border-b-2 border-l-2 border-slate-300 pointer-events-none"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 border-b-2 border-r-2 border-slate-300 pointer-events-none"></div>

              {/* Faint Center Academic Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.035] pointer-events-none flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>

              {/* ================= 1. CERTIFICATE HEADER ================= */}
              <div className="relative z-10 flex items-start justify-between gap-6 pb-6 border-b border-slate-200">
                {/* Logo & Institute Header */}
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 flex items-center justify-center shadow-md p-2.5">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-blue-400" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-black text-xl sm:text-2xl text-slate-900 tracking-tight leading-none uppercase">
                      DEEPBIO <span className="text-blue-700">ACADEMY</span>
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                      Division of Computational Biology &amp; Life Science AI
                    </p>
                  </div>
                </div>

                {/* Distinction Pill Badge */}
                <div className="text-right flex flex-col items-end">
                  <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-2xs">
                    {gradeHonors}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 mt-1">
                    ID: {credentialId}
                  </span>
                </div>
              </div>

              {/* ================= 2. CERTIFICATE BODY ================= */}
              <div className="relative z-10 my-auto text-center space-y-4 sm:space-y-5 py-4">
                
                {/* Certificate Title */}
                <div className="space-y-1">
                  <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-slate-400">
                    ACADEMIC CREDENTIAL OF RESEARCH DISTINCTION
                  </p>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase">
                    Certificate of Completion
                  </h2>
                </div>

                {/* Recipient Attribution */}
                <p className="text-xs sm:text-sm font-serif italic text-slate-500">
                  This official academic certificate is proudly conferred upon
                </p>

                {/* Recipient Full Name */}
                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight underline decoration-blue-500/40 decoration-2 underline-offset-8">
                    {recipientName || "Recipient Name"}
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold text-blue-700 pt-1">
                    {affiliation}
                  </p>
                </div>

                {/* Program Description */}
                <div className="max-w-2xl mx-auto text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  <span>has successfully completed the intensive curriculum for </span>
                  <strong className="text-slate-900 font-bold">{preset.programTitle}</strong>
                  <span> ({preset.duration}), {preset.description}</span>
                </div>

                {/* Skills Badges Line */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                  {preset.skills.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-bold">
                      #{s}
                    </span>
                  ))}
                </div>

              </div>

              {/* ================= 3. FOOTER SIGNATURE & SEAL ================= */}
              <div className="relative z-10 grid grid-cols-3 items-end pt-6 border-t border-slate-200 gap-4">
                
                {/* Left: Signature Block */}
                <div className="text-left space-y-1">
                  <div className="font-serif italic text-xl sm:text-2xl text-slate-800 pb-1 border-b border-slate-300 w-44">
                    Jubayer Hossain
                  </div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">
                    {instructorName}
                  </p>
                  <p className="text-[10px] text-slate-500 leading-tight">
                    {instructorTitle}
                  </p>
                </div>

                {/* Center: Official Golden Seal */}
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full border-4 border-amber-400/80 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 p-1.5 shadow-md flex items-center justify-center text-center">
                    <div className="w-full h-full rounded-full border border-dashed border-amber-700/40 flex flex-col items-center justify-center p-1 bg-amber-400 text-amber-950">
                      <Sparkles className="w-4 h-4 text-amber-900 mb-0.5" />
                      <span className="text-[7px] font-black uppercase tracking-tighter leading-none">
                        OFFICIAL SEAL
                      </span>
                      <span className="text-[6px] font-extrabold uppercase tracking-tighter text-amber-900 mt-0.5">
                        DEEPBIO
                      </span>
                    </div>
                  </div>
                  <span className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase mt-1">
                    VERIFIED &amp; SEALED
                  </span>
                </div>

                {/* Right: QR Code & Issue Date */}
                <div className="text-right flex flex-col items-end space-y-1">
                  <div className="p-1.5 rounded-xl border border-slate-200 bg-white shadow-2xs">
                    {/* Visual QR Code Pattern */}
                    <div className="w-14 h-14 bg-slate-900 p-1 rounded-lg flex items-center justify-center">
                      <QrCode className="w-full h-full text-white" />
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-slate-700">
                    Issued: {issueDate}
                  </p>
                  <p className="text-[9px] font-mono text-slate-400">
                    verify.deepbio.academy
                  </p>
                </div>

              </div>

            </div>

            {/* Quick Helper Note */}
            <p className="text-[11px] text-slate-400 text-center">
              💡 Click <strong>Print / Save as PDF</strong> above to download the high-resolution A4 vector document directly.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}
