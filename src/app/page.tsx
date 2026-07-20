import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Roadmap } from "@/components/roadmap";
import { About } from "@/components/about";
import { Modules } from "@/components/modules";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { Outcomes } from "@/components/outcomes";
import { Audience } from "@/components/audience";
import { ProgramDetails } from "@/components/program-details";
import { Instructor } from "@/components/instructor";
import { Certificate } from "@/components/certificate";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <Roadmap />
        <About />
        <Modules />
        <Projects />
        <TechStack />
        <Outcomes />
        <Audience />
        <ProgramDetails />
        <Instructor />
        <Certificate />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
