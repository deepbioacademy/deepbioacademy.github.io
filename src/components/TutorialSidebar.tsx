"use client";
import { useEffect, useState } from "react";

export interface TutorialSection {
  id: string;
  title: string;
}

interface TutorialSidebarProps {
  sections: TutorialSection[];
}

export default function TutorialSidebar({ sections }: TutorialSidebarProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio or just take the first one
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // accounting for navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
      <nav className="relative lg:text-sm lg:leading-6 mt-10">
        <div className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          Contents
        </div>
        <ul className="space-y-3 border-l border-slate-200">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block pl-4 -ml-px border-l-2 py-1 transition-colors text-xs sm:text-sm ${
                  activeSection === section.id
                    ? "text-blue-700 border-blue-600 font-bold"
                    : "text-slate-500 border-transparent hover:border-slate-400 hover:text-slate-900 font-medium"
                }`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="mt-10 p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-sm mb-1.5">Master These Skills</h4>
          <p className="text-slate-600 mb-4 text-xs leading-relaxed">Join our 3-month intensive cohorts with 1-on-1 mentor guidance.</p>
          <a
            href="/apply"
            className="block w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-center rounded-xl font-bold text-xs transition-all shadow-2xs"
          >
            Apply for Cohort
          </a>
        </div>
      </nav>
    </div>
  );
}
