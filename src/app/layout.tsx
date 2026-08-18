import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const siteUrl = "https://deepbioacademy.github.io";

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
    "DeepBio Academy",
  ],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
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
  themeColor: "#0d9488",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-teal-600 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-teal-600 focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
