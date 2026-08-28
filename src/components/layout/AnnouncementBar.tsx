"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-teal-700 text-white text-xs py-2 px-4 shadow-xs z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex-1 flex items-center justify-center gap-2 text-center font-medium">
          <span className="hidden sm:inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-amber-300" /> Admissions Open
          </span>
          <span>
            Upcoming Cohorts in Bioinformatics, AI Drug Discovery & No-Code Life Sciences AI are now accepting applications!
          </span>
          <Link
            href="/apply"
            className="underline hover:text-cyan-200 font-bold ml-1 inline-flex items-center gap-0.5"
          >
            Apply Now <ArrowRight className="w-3 h-3 inline" />
          </Link>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-white/80 hover:text-white p-1 rounded transition-colors flex-shrink-0"
          aria-label="Dismiss Announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
