import Link from "next/link";
import { Dna, Mail } from "lucide-react";
import { navLinks } from "@/lib/data";

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

const footerLinks = {
  Company: [
    { label: "About", href: "#program" },
    { label: "Programs", href: "#modules" },
    { label: "Faculty", href: "#instructor" },
    { label: "Contact", href: "mailto:hello@deepbio.academy" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="relative border-t border-slate-900/10 bg-white py-16 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#top" className="flex items-center gap-2.5 font-bold tracking-tight">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-white">
                <Dna size={18} strokeWidth={2.4} />
              </span>
              <span className="text-slate-900 dark:text-white">DeepBio Academy</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Training the next generation of computational and AI-driven drug discovery
              scientists.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/deepbioacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-900/10 text-slate-600 transition-colors hover:border-blue-600/40 hover:text-blue-600 dark:border-white/10 dark:text-slate-300"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/deepbioacademy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-900/10 text-slate-600 transition-colors hover:border-blue-600/40 hover:text-blue-600 dark:border-white/10 dark:text-slate-300"
              >
                <LinkedInIcon />
              </a>
              <a
                href="mailto:hello@deepbio.academy"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-900/10 text-slate-600 transition-colors hover:border-blue-600/40 hover:text-blue-600 dark:border-white/10 dark:text-slate-300"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Explore
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Legal
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.Legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-900/10 pt-8 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} DeepBio Academy. All rights reserved.</p>
          <p>NextGen Drug Discovery with AI</p>
        </div>
      </div>
    </footer>
  );
}
