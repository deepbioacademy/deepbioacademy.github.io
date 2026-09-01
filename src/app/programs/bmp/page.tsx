import Hero from "@/components/programs/bmp/Hero";
import ProgramDetails from "@/components/programs/bmp/ProgramDetails";
import WhatYouWillLearn from "@/components/programs/bmp/WhatYouWillLearn";
import ProgramOutcomes from "@/components/programs/bmp/ProgramOutcomes";
import AIPerspective from "@/components/programs/bmp/AIPerspective";
import WhyBeginnersGetStuck from "@/components/programs/bmp/WhyBeginnersGetStuck";
import Solutions from "@/components/programs/bmp/Solutions";
import TakeHomeToolkit from "@/components/programs/bmp/TakeHomeToolkit";
import HowProgramRuns from "@/components/programs/bmp/HowProgramRuns";
import WhoIsThisFor from "@/components/programs/bmp/WhoIsThisFor";
import MenteesFeedback from "@/components/programs/bmp/MenteesFeedback";
import Publications from "@/components/programs/bmp/Publications";
import InstructorBio from "@/components/programs/bmp/InstructorBio";
import TeachingAssistants from "@/components/programs/bmp/TeachingAssistants";
import EnrollCTA from "@/components/programs/bmp/EnrollCTA";

export default function BMPProgramPage() {
  return (
    <main>
      <Hero />
      <ProgramDetails />
      <WhatYouWillLearn />
      <ProgramOutcomes />
      <AIPerspective />
      <WhyBeginnersGetStuck />
      <Solutions />
      <TakeHomeToolkit />
      <HowProgramRuns />
      <WhoIsThisFor />
      <MenteesFeedback />
      <Publications />
      <InstructorBio />
      <TeachingAssistants />
      <EnrollCTA />
    </main>
  );
}
