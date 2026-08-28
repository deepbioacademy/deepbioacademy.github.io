export const metadata = {
  title: "Single-Cell Analysis Best Practices | Bioinformatics Mentorship",
  description: "End-to-end tutorial on single-cell RNA sequencing analysis best practices. Learn QC, normalization, clustering, trajectory inference, and more.",
};

export default function SingleCellTutorial() {
  return (
    <article className="prose max-w-none pb-24 font-dm-sans">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm font-semibold text-cyan-600 mb-4 tracking-wider uppercase">
          <span>Tutorial</span>
          <span className="w-1 h-1 rounded-full bg-[var(--border)]"></span>
          <span>Transcriptomics</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-6 font-dm-sans">
          Single-Cell Analysis Best Practices
        </h1>
        <p className="text-xl text-[var(--text-muted)] leading-relaxed">
          A comprehensive guide to processing, visualizing, and modeling single-cell RNA sequencing (scRNA-seq) data. Based on the community-driven standards for single-cell best practices.
        </p>
      </div>

      {/* Section 1 */}
      <section id="introduction" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">1. Introduction to scRNA-seq</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          The human body is a complex machine that heavily relies on the basic units of life - cells. These cells exhibit remarkable diversity, varying in type and function, and can undergo significant transitions during development, in response to disease, or during regenerative processes.
        </p>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          Single-cell RNA sequencing (scRNA-seq) has revolutionized our ability to study cellular heterogeneity. By profiling the transcriptome of individual cells, researchers can uncover complex regulatory mechanisms, identify rare cell populations, and track developmental trajectories.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
          <h4 className="text-blue-900 font-bold mb-2">Why Best Practices Matter</h4>
          <p className="text-blue-800 text-sm">
            With over 1,700 methods dedicated to scRNA-seq analysis alone, navigating the computational landscape is a significant challenge. This tutorial distills the noise, providing a validated, end-to-end framework for reproducible analysis.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="raw-data" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">2. Raw Data Processing</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          Before any meaningful biological insights can be extracted, raw sequencing reads must be transformed into a gene-by-cell count matrix. This step involves:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-[var(--text-muted)] text-lg mb-8">
          <li><strong>Demultiplexing:</strong> Assigning sequencing reads to their original cell barcodes.</li>
          <li><strong>Alignment:</strong> Mapping the reads to a reference genome.</li>
          <li><strong>Quantification:</strong> Counting the number of transcripts (UMIs) per gene for each cell.</li>
        </ul>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed">
          Fundamental data structures, such as `AnnData` in Python (used by Scanpy) or `SingleCellExperiment` in R (used by Bioconductor), are critical for managing these large matrices alongside cell metadata and gene annotations.
        </p>
      </section>

      {/* Section 3 */}
      <section id="preprocessing" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">3. Preprocessing & Visualization</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          Preprocessing ensures that technical noise is minimized while preserving biological signal. This phase is crucial for downstream reliability.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 my-8">
          <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-cyan-600 text-sm">1</span>
              Quality Control
            </h3>
            <p className="text-[var(--text-muted)] text-sm">Filtering out dead/dying cells (high mitochondrial fraction) and empty droplets or doublets. Removing genes expressed in too few cells.</p>
          </div>
          <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-cyan-600 text-sm">2</span>
              Normalization
            </h3>
            <p className="text-[var(--text-muted)] text-sm">Scaling data to account for differences in sequencing depth across cells, making gene expression comparable.</p>
          </div>
          <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-cyan-600 text-sm">3</span>
              Feature Selection
            </h3>
            <p className="text-[var(--text-muted)] text-sm">Identifying highly variable genes (HVGs) that drive biological heterogeneity, reducing the dataset&apos;s dimensionality.</p>
          </div>
          <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-cyan-600 text-sm">4</span>
              Dimensionality Reduction
            </h3>
            <p className="text-[var(--text-muted)] text-sm">Applying PCA, followed by non-linear techniques like UMAP or t-SNE for 2D visualization of the cellular manifold.</p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="cellular-structure" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">4. Identifying Cellular Structure</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          Once the data is preprocessed, the next goal is to define the cellular populations present in the sample.
        </p>
        <ul className="space-y-6 text-[var(--text-muted)]">
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            </div>
            <div>
              <strong className="text-xl text-[var(--text-primary)] block mb-1">Clustering</strong>
              <span className="text-lg">Grouping cells based on transcriptional similarity using graph-based algorithms like Leiden or Louvain community detection.</span>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
               <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
            </div>
            <div>
              <strong className="text-xl text-[var(--text-primary)] block mb-1">Annotation</strong>
              <span className="text-lg">Assigning biological meaning to clusters via marker gene expression, automated label transfer tools, or reference mapping.</span>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
               <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
            </div>
            <div>
              <strong className="text-xl text-[var(--text-primary)] block mb-1">Data Integration</strong>
              <span className="text-lg">Removing batch effects across multiple samples or technologies to enable a unified, global analysis. Tools like scVI or Harmony are industry standards.</span>
            </div>
          </li>
        </ul>
      </section>

      {/* Section 5 */}
      <section id="trajectories" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">5. Inferring Trajectories</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          Cells are dynamic entities. When studying development, differentiation, or disease progression, cells don&apos;t fit neatly into discrete clusters but rather represent continuous states.
        </p>
        <div className="p-8 bg-[var(--bg-alt)] rounded-2xl border border-[var(--border)]">
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Pseudotemporal Ordering</h3>
          <p className="text-lg text-[var(--text-muted)] mb-6">
            Algorithms infer a &apos;pseudotime&apos; — a quantitative measure of progress along a biological process — allowing researchers to order cells mathematically rather than chronologically. Advanced methods like RNA velocity use the ratio of spliced to unspliced transcripts to predict future states of individual cells.
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 bg-white px-4 py-2 rounded-full border border-cyan-100 shadow-sm">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            Key Tools: Monocle3, scVelo, CellRank
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="conditions" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">6. Dealing with Conditions</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          Comparing healthy vs. diseased tissue, or treated vs. control samples, is the core of most translational research.
        </p>
        <ul className="list-disc pl-6 space-y-4 text-[var(--text-muted)] text-lg">
          <li><strong>Differential Gene Expression (DGE):</strong> Identifying genes that change significantly across conditions within specific cell types. Using pseudo-bulk approaches is recommended for robust statistics.</li>
          <li><strong>Compositional Analysis:</strong> Detecting shifts in the abundance or proportion of specific cell types across conditions.</li>
          <li><strong>Pathway Analysis:</strong> Mapping differentially expressed genes to biological pathways (e.g., GSEA) to uncover functional implications.</li>
        </ul>
      </section>

      {/* Section 7 */}
      <section id="mechanisms" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">7. Modeling Mechanisms</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          Moving beyond description to understanding causality and communication.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative p-6 rounded-xl border border-[var(--border)] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">Gene Regulatory Networks</h4>
              <p className="text-[var(--text-muted)]">Inferring transcription factor activity and co-expression modules to understand the drivers of cell state.</p>
            </div>
          </div>
          <div className="relative p-6 rounded-xl border border-[var(--border)] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">Cell-Cell Communication</h4>
              <p className="text-[var(--text-muted)]">Using receptor-ligand databases to predict how different cell types interact and signal to each other within the tissue environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 */}
      <section id="spatial" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">8. Spatial Omics & Multimodal</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          The frontier of single-cell biology involves retaining the spatial context of cells within tissues and capturing multiple molecular layers simultaneously.
        </p>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed">
          Techniques like <strong>Spatial Transcriptomics</strong> allow us to map gene expression directly onto histology slides. This enables neighborhood analysis, identifying spatial domains, and understanding local microenvironments (e.g., the tumor microenvironment). Additionally, <strong>Multimodal Integration</strong> (like CITE-seq or Multiome ATAC+RNA) requires advanced paired integration strategies to leverage the full depth of cellular state.
        </p>
      </section>

      {/* Section 9 */}
      <section id="next-steps" className="scroll-mt-32">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">9. Master These Skills</h2>
          <p className="text-lg text-blue-50 leading-relaxed mb-8 relative z-10 max-w-2xl">
            Reading about best practices is just the beginning. To truly master single-cell analysis, you need hands-on experience with real datasets, dealing with batch effects, and writing robust code.
          </p>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://forms.gle/fSQ81xdwVUkokMnL9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-lg text-blue-700 bg-white hover:bg-blue-50 transition-colors shadow-sm"
            >
              Join the Mentorship Program
            </a>
            <a 
              href="https://docs.google.com/spreadsheets/d/1_1Cj7DarlaLFG2UZq_whijYMnW2HbdDxj4wTewBK3mI/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/30 text-base font-bold rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

    </article>
  );
}
