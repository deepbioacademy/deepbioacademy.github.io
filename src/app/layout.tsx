import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeScript } from "@/components/theme-script";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://nextgen-drug-discovery.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NextGen Drug Discovery with AI | DeepBio Academy",
    template: "%s | NextGen Drug Discovery with AI",
  },
  description:
    "Master Computational Drug Discovery through Cheminformatics, Structural Bioinformatics, Molecular Modeling, Molecular Dynamics, and Artificial Intelligence. 3-month live online program with 72+ hours of training, hands-on projects, and a certificate.",
  keywords: [
    "computational drug discovery",
    "cheminformatics",
    "structural bioinformatics",
    "molecular dynamics",
    "molecular docking",
    "AI drug discovery",
    "RDKit",
    "GROMACS",
    "AutoDock Vina",
    "drug discovery course",
  ],
  openGraph: {
    title: "NextGen Drug Discovery with AI",
    description:
      "Master Computational Drug Discovery through Cheminformatics, Structural Bioinformatics, Molecular Modeling, Molecular Dynamics, and Artificial Intelligence.",
    url: siteUrl,
    siteName: "DeepBio Academy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGen Drug Discovery with AI",
    description:
      "Master Computational Drug Discovery through Cheminformatics, Structural Bioinformatics, Molecular Modeling, Molecular Dynamics, and Artificial Intelligence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full dark`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100 selection:bg-violet-600 selection:text-white">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-blue-600 focus:px-5 focus:py-3 focus:text-white"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
