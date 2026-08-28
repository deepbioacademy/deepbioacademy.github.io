"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, Dna, Menu, X } from "lucide-react";
import { navLinks, preRegisterUrl } from "@/lib/data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 sm:py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Lockup */}
          <Link
            href="#top"
            className="flex items-center gap-3 cursor-pointer group text-left focus:outline-none"
            aria-label="DeepBio Academy - NextGen Drug Discovery"
          >
            <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white shadow-md shadow-teal-600/20 transition-transform duration-200 group-hover:scale-105">
              <Dna className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.4} />
            </span>
            <span className="leading-tight">
              <span className="block text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
                DeepBio Academy
              </span>
              <span className="block text-xs sm:text-[13px] font-medium text-slate-500">
                NextGen Drug Discovery
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-teal-700 hover:bg-teal-50/60 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={preRegisterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold text-xs sm:text-sm shadow-sm shadow-teal-600/20 hover:shadow-md transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Pre-Register Free</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-teal-500/20"
              aria-label="Toggle Navigation Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        inert={!open}
        className={`grid overflow-clip transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <nav className="mx-4 mb-3 mt-3 flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-teal-50 hover:text-teal-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href={preRegisterUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-teal-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-teal-700 flex items-center justify-center gap-1.5"
            >
              <span>Pre-Register Free</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
