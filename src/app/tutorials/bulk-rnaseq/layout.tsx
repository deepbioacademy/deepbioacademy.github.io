import TutorialSidebar from "@/components/TutorialSidebar";

const SECTIONS = [
  { id: "introduction", title: "1. Introduction to Bulk RNA-seq" },
  { id: "quality-control", title: "2. Quality Control & Trimming" },
  { id: "alignment", title: "3. Alignment & Quantification" },
  { id: "differential-expression", title: "4. Differential Expression (DESeq2)" },
  { id: "pathway-analysis", title: "5. Pathway & Enrichment Analysis" },
  { id: "visualization", title: "6. Publication-Ready Visualization" },
  { id: "next-steps", title: "7. Next Steps" }
];

export default function BulkRnaSeqTutorialLayout({
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
