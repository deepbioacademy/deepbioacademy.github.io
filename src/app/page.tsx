import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Modules } from "@/components/modules";
import { ColabShowcase } from "@/components/colab-showcase";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { Audience } from "@/components/audience";
import { ProgramDetails } from "@/components/program-details";
import { Outcomes } from "@/components/outcomes";
import { Instructor } from "@/components/instructor";
import { Certificate } from "@/components/certificate";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-teal-600 selection:text-white">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Modules />
        <ColabShowcase />
        <Projects />
        <TechStack />
        <Audience />
        <ProgramDetails />
        <Outcomes />
        <Instructor />
        <Certificate />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
