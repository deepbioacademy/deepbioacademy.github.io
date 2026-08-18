import Link from "next/link";
import { Dna, Mail } from "lucide-react";
import { contactEmail, navLinks } from "@/lib/data";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-12 sm:pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-slate-800/80">
          {/* Brand & Mission */}
          <div className="lg:col-span-6 space-y-4">
            <Link
              href="#top"
              className="flex items-center gap-3 cursor-pointer group text-left focus:outline-none"
              aria-label="DeepBio Academy - NextGen Drug Discovery"
            >
              <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white shadow-md shadow-teal-600/20 transition-transform duration-200 group-hover:scale-105">
                <Dna className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.4} />
              </span>
              <span className="leading-tight">
                <span className="block text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-teal-400 transition-colors">
                  DeepBio Academy
                </span>
                <span className="block text-xs sm:text-[13px] font-medium text-slate-400">
                  NextGen Drug Discovery
                </span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-md">
              Training the next generation of computational and AI-driven drug discovery scientists through live hands-on mentorship, reproducible cloud notebooks, and research-grade pipelines.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors cursor-pointer py-1 block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-3 text-xs">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium break-all py-1"
              >
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>{contactEmail}</span>
              </a>

              <div className="pt-1">
                <p className="text-[11px] text-slate-500 font-medium mb-2.5 uppercase tracking-wider">
                  Community &amp; Social
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href="https://facebook.com/deepbioacademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center transition-all hover:text-blue-400 hover:bg-blue-500/10"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="https://linkedin.com/company/deepbioacademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center transition-all hover:text-sky-400 hover:bg-sky-500/10"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="https://github.com/hossainlab"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center transition-all hover:text-white hover:bg-white/10"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href="https://youtube.com/@hossainlab"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center transition-all hover:text-red-400 hover:bg-red-500/10"
                  >
                    <YouTubeIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} DeepBio Academy. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-slate-400 flex-wrap justify-center">
            <span>Powered by</span>
            <span className="text-slate-200 font-semibold">DeepBio Limited</span>
            <span>•</span>
            <span className="text-slate-200 font-semibold">NextGen Drug Discovery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
