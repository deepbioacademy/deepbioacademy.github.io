"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import {
  Dna,
  FlaskConical,
  Bot,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  BookOpen,
  FileText,
  Microscope,
  Compass,
  ArrowUpRight
} from "lucide-react";
import { ACADEMY_PROGRAMS } from "@/data/programs";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProgramsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
    setMobileProgramsOpen(false);
  }, [pathname]);

  const getProgramIcon = (id: string) => {
    switch (id) {
      case "bmp":
        return <Dna className="w-5 h-5 text-blue-700" />;
      case "drug-discovery":
        return <FlaskConical className="w-5 h-5 text-teal-700" />;
      case "nocode-ai":
        return <Bot className="w-5 h-5 text-purple-700" />;
      case "youth-ai":
        return <GraduationCap className="w-5 h-5 text-pink-700" />;
      default:
        return <Sparkles className="w-5 h-5 text-slate-700" />;
    }
  };

  const getProgramBadgeStyle = (id: string) => {
    switch (id) {
      case "bmp":
        return "bg-blue-50 text-blue-700 border-blue-200/80";
      case "drug-discovery":
        return "bg-teal-50 text-teal-700 border-teal-200/80";
      case "nocode-ai":
        return "bg-purple-50 text-purple-700 border-purple-200/80";
      case "youth-ai":
        return "bg-pink-50 text-pink-700 border-pink-200/80";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3"
          : "bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3 group cursor-pointer">
            <Logo size={34} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            
            {/* Programs Mega-Dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setProgramsDropdownOpen(true)}
              onMouseLeave={() => setProgramsDropdownOpen(false)}
            >
              <button
                onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                  pathname.startsWith("/programs") || programsDropdownOpen
                    ? "text-blue-700 bg-blue-50/80"
                    : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                }`}
              >
                <span>Programs</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${programsDropdownOpen ? "rotate-180 text-blue-700" : "text-slate-400"}`} />
              </button>

              {/* Mega-Menu Dropdown Container */}
              {programsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-[720px] -ml-16 z-50 animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/15 border border-slate-200/90 overflow-hidden">
                    
                    {/* Header bar */}
                    <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Compass className="w-4 h-4 text-blue-700" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                          DeepBio Academic Curriculum & Tracks
                        </span>
                      </div>
                      <Link 
                        href="/programs" 
                        className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1 transition-colors"
                      >
                        <span>Compare All 4 Tracks</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* 2x2 Grid of Programs */}
                    <div className="p-4 grid grid-cols-2 gap-3 bg-white">
                      {ACADEMY_PROGRAMS.map((program) => (
                        <Link
                          key={program.id}
                          href={program.href}
                          className="group p-4 rounded-2xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50/80 transition-all duration-200 flex items-start gap-3.5"
                        >
                          <div className={`p-2.5 rounded-xl border flex-shrink-0 transition-transform duration-200 group-hover:scale-105 ${getProgramBadgeStyle(program.id)}`}>
                            {getProgramIcon(program.id)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1.5 mb-1">
                              <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-700 transition-colors truncate">
                                {program.shortTitle}
                              </h4>
                              <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-700 opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0" />
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-2">
                              {program.subtitle}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-semibold text-slate-600 px-2 py-0.5 rounded-md bg-slate-100">
                                {program.duration}
                              </span>
                              <span className="text-[10px] font-medium text-slate-400">
                                {program.level.split(' ')[0]}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="px-6 py-3.5 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>Not sure which track fits your background?</span>
                      <Link 
                        href="/apply" 
                        className="font-bold text-slate-900 hover:text-blue-700 flex items-center gap-1"
                      >
                        <span>Admissions & Track Advisor</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link
              href="/tutorials"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname.startsWith("/tutorials")
                  ? "text-blue-700 bg-blue-50/80"
                  : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              }`}
            >
              Tutorials
            </Link>

            <Link
              href="/research"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/research"
                  ? "text-blue-700 bg-blue-50/80"
                  : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              }`}
            >
              Research
            </Link>

            <Link
              href="/alumni"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/alumni"
                  ? "text-blue-700 bg-blue-50/80"
                  : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              }`}
            >
              Alumni
            </Link>

            <Link
              href="/blog"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname.startsWith("/blog")
                  ? "text-blue-700 bg-blue-50/80"
                  : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/resources"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/resources"
                  ? "text-blue-700 bg-blue-50/80"
                  : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              }`}
            >
              Resources
            </Link>

            <Link
              href="/policies"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/policies"
                  ? "text-blue-700 bg-blue-50/80"
                  : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              }`}
            >
              Policies
            </Link>
          </nav>

          {/* Desktop Right CTA Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/apply"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 hover:from-blue-700 hover:via-indigo-700 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>Apply for Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/apply"
              className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold"
            >
              Apply
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
          {/* Programs Section */}
          <div className="space-y-1">
            <button
              onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900 border-b border-slate-100 cursor-pointer"
            >
              <span>Programs & Tracks</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileProgramsOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileProgramsOpen && (
              <div className="pl-2 pr-1 pt-2 space-y-2">
                {ACADEMY_PROGRAMS.map((program) => (
                  <Link
                    key={program.id}
                    href={program.href}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 text-slate-800 text-xs font-medium"
                  >
                    <div className="p-1.5 rounded-md bg-slate-100 flex-shrink-0">
                      {getProgramIcon(program.id)}
                    </div>
                    <div className="truncate">
                      <p className="font-semibold text-slate-900">{program.shortTitle}</p>
                      <p className="text-[10px] text-slate-500">{program.duration}</p>
                    </div>
                  </Link>
                ))}
                <Link
                  href="/programs"
                  className="block py-2 text-xs font-bold text-blue-700 hover:underline"
                >
                  View all 4 programs &rarr;
                </Link>
              </div>
            )}
          </div>

          <div className="space-y-1 pt-1 text-sm font-semibold text-slate-700">
            <Link href="/tutorials" className="block py-2 hover:text-blue-700">
              Tutorials
            </Link>
            <Link href="/research" className="block py-2 hover:text-blue-700">
              Research
            </Link>
            <Link href="/alumni" className="block py-2 hover:text-blue-700">
              Alumni
            </Link>
            <Link href="/blog" className="block py-2 hover:text-blue-700">
              Blog
            </Link>
            <Link href="/resources" className="block py-2 hover:text-blue-700">
              Resources
            </Link>
            <Link href="/policies" className="block py-2 hover:text-blue-700">
              Policies
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/apply"
              className="w-full py-3 rounded-xl bg-slate-900 text-white font-semibold text-center text-sm shadow-md"
            >
              Apply for Next Cohort
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
