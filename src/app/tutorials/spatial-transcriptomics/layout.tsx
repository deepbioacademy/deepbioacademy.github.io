import TutorialSidebar from "@/components/TutorialSidebar";

const SECTIONS = [
  { id: "introduction", title: "1. Introduction to Spatial Omics" },
  { id: "technologies", title: "2. Spatial Technologies & Data" },
  { id: "quality-control", title: "3. Spatial QC & Preprocessing" },
  { id: "cell-typing", title: "4. Spatial Deconvolution" },
  { id: "spatial-domains", title: "5. Spatial Domain Identification" },
  { id: "cell-cell-contact", title: "6. Cell-Cell Interaction" },
  { id: "next-steps", title: "7. Next Steps" }
];

export default function SpatialTranscriptomicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-50/60 min-h-screen py-10">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        <TutorialSidebar sections={SECTIONS} />
        <div className="lg:pl-[19.5rem]">
          <main className="max-w-3xl mx-auto pt-4 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
