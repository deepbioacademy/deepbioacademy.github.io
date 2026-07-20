import Link from "next/link";
import { Code2, Dna, Link2, Mail } from "lucide-react";
import { navLinks } from "@/lib/data";

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
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-900/10 text-slate-600 transition-colors hover:border-blue-600/40 hover:text-blue-600 dark:border-white/10 dark:text-slate-300"
              >
                <Link2 size={16} />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-900/10 text-slate-600 transition-colors hover:border-blue-600/40 hover:text-blue-600 dark:border-white/10 dark:text-slate-300"
              >
                <Code2 size={16} />
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
