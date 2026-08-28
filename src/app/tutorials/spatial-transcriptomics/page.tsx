export const metadata = {
  title: "Spatial Transcriptomics | Bioinformatics Mentorship",
  description: "Learn how to map gene expression to tissue architecture using spatial transcriptomics data analysis.",
};

export default function SpatialTutorial() {
  return (
    <article className="prose max-w-none pb-24 font-dm-sans">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 mb-4 tracking-wider uppercase">
          <span>Tutorial</span>
          <span className="w-1 h-1 rounded-full bg-[var(--border)]"></span>
          <span>Spatial Omics</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-6 font-dm-sans">
          Spatial Transcriptomics Analysis
        </h1>
        <p className="text-xl text-[var(--text-muted)] leading-relaxed">
          The next frontier in single-cell biology. Learn how to analyze spatially resolved transcriptomics data to understand cellular organization within tissues.
        </p>
      </div>

      <section id="introduction" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">1. Intro to Spatial Omics</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          Traditional single-cell RNA sequencing requires tissues to be dissociated, leading to a complete loss of spatial context. Spatial transcriptomics solves this by capturing both the gene expression profile and the physical location of cells within a tissue section, allowing us to map biology directly onto histology.
        </p>
      </section>

      <section id="technologies" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">2. Key Technologies</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          There are broadly two categories of spatial technologies, each requiring different analytical approaches:
        </p>
        <ul className="space-y-4 text-[var(--text-muted)] text-lg">
          <li><strong>Sequencing-based (e.g., Visium):</strong> Uses barcoded spots on a slide. Typically lower resolution (spots contain 1-10 cells) but captures the whole transcriptome unbiasedly.</li>
          <li><strong>Imaging-based (e.g., Xenium, MERFISH, CosMx):</strong> Uses in situ hybridization and fluorescence. Offers true single-cell or sub-cellular resolution, but usually targeted to a specific panel of genes (e.g., 500-5000 genes).</li>
        </ul>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mt-4">
          Data representation uses frameworks like `SpatialData` (Python) or `SpatialExperiment` (R) to handle the complexities of images, coordinates, and count matrices simultaneously.
        </p>
      </section>

      <section id="quality-control" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">3. Quality Control</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          QC in spatial transcriptomics involves both standard count-based metrics and image-based checks:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-muted)] text-lg">
          <li>Filtering out spots/cells with low total counts or few detected genes.</li>
          <li>Removing spots that fall outside the actual tissue boundary on the image.</li>
          <li>Checking for spatial artifacts or edge effects introduced during tissue sectioning or permeabilization.</li>
        </ul>
      </section>

      <section id="spatial-domains" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">4. Spatial Domains</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          Similar to clustering in scRNA-seq, we want to identify distinct regions within the tissue (e.g., tumor core, invasive margin, healthy stroma).
        </p>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed">
          However, advanced spatial clustering algorithms (like SpaGCN or Seurat&apos;s spatial features) incorporate both transcriptional similarity <em>and</em> spatial proximity, ensuring that the identified domains form coherent physical regions on the slide.
        </p>
      </section>

      <section id="deconvolution" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">5. Cell Type Deconvolution</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          For technologies where spots capture multiple cells (like 10x Visium), we cannot directly assign a single cell type to a spot. Instead, we use <strong>Deconvolution</strong> algorithms.
        </p>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed">
          These tools (e.g., Cell2location, RCTD) use an annotated single-cell reference atlas to estimate the proportion or absolute abundance of different cell types within each spatial spot. This maps high-resolution cell type definitions onto the lower-resolution spatial map.
        </p>
      </section>

      <section id="neighborhood" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">6. Neighborhood Analysis</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          Once we have single-cell resolution (either natively or via deconvolution), we can ask complex biological questions about the microenvironment:
        </p>
        <div className="grid sm:grid-cols-2 gap-6 my-8">
          <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Co-localization</h3>
            <p className="text-[var(--text-muted)] text-sm">Identifying pairs of cell types that frequently reside close to each other (e.g., T-cells and dendritic cells) using spatial statistics like Ripley&apos;s K-function.</p>
          </div>
          <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Cell-Cell Communication</h3>
            <p className="text-[var(--text-muted)] text-sm">Validating inferred receptor-ligand interactions by ensuring the sending and receiving cells are actually physically adjacent in the tissue.</p>
          </div>
        </div>
      </section>

      <section id="next-steps" className="scroll-mt-32">
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">7. Master These Skills</h2>
          <p className="text-lg text-purple-50 leading-relaxed mb-8 relative z-10 max-w-2xl">
            Spatial data analysis requires robust computational skills. Join our mentorship program to work on cutting-edge spatial transcriptomics projects under expert guidance.
          </p>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://forms.gle/fSQ81xdwVUkokMnL9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-lg text-purple-700 bg-white hover:bg-purple-50 transition-colors shadow-sm"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
