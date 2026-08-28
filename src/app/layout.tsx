import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import FacebookPixel from "@/components/layout/FacebookPixel";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  title: "DeepBio Academy — Bioinformatics, Computational Biology & Life Science AI",
  description:
    "The premier academy for modern Bioinformatics, Next-Gen AI Drug Discovery, No-Code Agentic AI for Life Sciences, and National AI Literacy. Mentorship, real-world research, and production-grade computational biology toolkits.",
  keywords: [
    "Bioinformatics Mentorship",
    "Computational Biology",
    "AI in Drug Discovery",
    "CADD",
    "GROMACS Molecular Dynamics",
    "Single-Cell RNA-seq",
    "Bulk RNA-seq",
    "Spatial Transcriptomics",
    "No-Code AI for Life Sciences",
    "DeepBio Academy",
    "agami.ai"
  ],
  authors: [{ name: "DeepBio Academy" }],
  openGraph: {
    title: "DeepBio Academy — Bioinformatics, Computational Biology & Life Science AI",
    description:
      "Empowering the next generation of life scientists and computational researchers with cutting-edge bioinformatics, AI drug design, and agentic workflows.",
    siteName: "DeepBio Academy",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        <SmoothScroll />
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
