import { Hero } from "@/components/programs/drug-discovery/hero";
import { About } from "@/components/programs/drug-discovery/about";
import { Modules } from "@/components/programs/drug-discovery/modules";
import { ColabShowcase } from "@/components/programs/drug-discovery/colab-showcase";
import { Projects } from "@/components/programs/drug-discovery/projects";
import { TechStack } from "@/components/programs/drug-discovery/tech-stack";
import { Audience } from "@/components/programs/drug-discovery/audience";
import { ProgramDetails } from "@/components/programs/drug-discovery/program-details";
import { Outcomes } from "@/components/programs/drug-discovery/outcomes";
import { Instructor } from "@/components/programs/drug-discovery/instructor";
import { Certificate } from "@/components/programs/drug-discovery/certificate";
import { Faq } from "@/components/programs/drug-discovery/faq";
import { FinalCta } from "@/components/programs/drug-discovery/final-cta";

export default function DrugDiscoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-teal-600 selection:text-white">
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
    </div>
  );
}
