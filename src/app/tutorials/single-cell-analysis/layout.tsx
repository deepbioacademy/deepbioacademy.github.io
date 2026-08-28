import TutorialSidebar from "@/components/TutorialSidebar";

const SECTIONS = [
  { id: "introduction", title: "1. Introduction to scRNA-seq" },
  { id: "raw-data", title: "2. Raw Data Processing" },
  { id: "preprocessing", title: "3. Preprocessing & Visualization" },
  { id: "cellular-structure", title: "4. Identifying Cellular Structure" },
  { id: "trajectories", title: "5. Inferring Trajectories" },
  { id: "conditions", title: "6. Dealing with Conditions" },
  { id: "mechanisms", title: "7. Modeling Mechanisms" },
  { id: "spatial", title: "8. Spatial Omics" },
  { id: "next-steps", title: "9. Next Steps" }
];

export default function SingleCellTutorialLayout({
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
