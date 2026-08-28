import AcademyHero from "@/components/home/AcademyHero";
import ProgramsShowcase from "@/components/home/ProgramsShowcase";
import AcademyStats from "@/components/home/AcademyStats";
import MenteesFeedback from "@/components/programs/bmp/MenteesFeedback";
import AcademyFaq from "@/components/home/AcademyFaq";
import AcademyCta from "@/components/home/AcademyCta";

export default function HomePage() {
  return (
    <main>
      <AcademyHero />
      <AcademyStats />
      <ProgramsShowcase />
      <MenteesFeedback />
      <AcademyFaq />
      <AcademyCta />
    </main>
  );
}
