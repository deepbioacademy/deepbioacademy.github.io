export const metadata = {
  title: "Bulk RNA-Seq Pipeline | Bioinformatics Mentorship",
  description: "Learn the standard bulk RNA-seq pipeline: QC, alignment, DESeq2 differential expression, and pathway enrichment.",
};

export default function BulkRnaSeqTutorial() {
  return (
    <article className="prose max-w-none pb-24 font-dm-sans">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 mb-4 tracking-wider uppercase">
          <span>Tutorial</span>
          <span className="w-1 h-1 rounded-full bg-[var(--border)]"></span>
          <span>Transcriptomics</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-6 font-dm-sans">
          Bulk RNA-Seq Pipeline
        </h1>
        <p className="text-xl text-[var(--text-muted)] leading-relaxed">
          The foundational method for measuring gene expression across entire populations of cells. Learn the gold-standard pipeline from fastq files to differential expression and functional enrichment.
        </p>
      </div>

      <section id="introduction" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">1. Introduction to Bulk RNA-seq</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          Unlike single-cell RNA-seq, bulk RNA sequencing measures the average expression level of each gene across a large population of cells. This approach provides deep sequencing coverage, making it highly robust for identifying differentially expressed genes between conditions (e.g., tumor vs. normal, treated vs. untreated).
        </p>
      </section>

      <section id="quality-control" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">2. Quality Control & Trimming</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          Before analyzing the data, we must ensure the sequencing reads are of high quality. We use tools like FastQC to assess sequence quality, GC content, and adapter contamination.
        </p>
        <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
          <h4 className="text-[var(--text-primary)] font-bold mb-2">Key Tools:</h4>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-muted)]">
            <li><strong>FastQC:</strong> Generates quality reports for raw fastq files.</li>
            <li><strong>MultiQC:</strong> Aggregates reports across many samples into a single dashboard.</li>
            <li><strong>Trimmomatic / fastp:</strong> Removes adapter sequences and low-quality read ends.</li>
          </ul>
        </div>
      </section>

      <section id="alignment" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">3. Alignment & Quantification</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          Reads must be mapped to a reference genome or transcriptome. Modern pipelines often use pseudoaligners for speed, or splice-aware aligners when novel transcripts are of interest.
        </p>
        <ul className="space-y-4 text-[var(--text-muted)] text-lg">
          <li><strong>STAR / HISAT2:</strong> Splice-aware aligners that generate BAM files. Require tools like `featureCounts` to generate a count matrix.</li>
          <li><strong>Salmon / Kallisto:</strong> Pseudo-aligners that quantify transcript abundance directly without generating large alignment files, offering extreme speed and accuracy.</li>
        </ul>
      </section>

      <section id="differential-expression" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">4. Differential Expression (DESeq2)</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          The core of bulk RNA-seq is Differential Gene Expression (DGE) analysis. DESeq2 (in R) is the industry standard for modeling count data using a negative binomial distribution.
        </p>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          Key steps include filtering low-count genes, estimating size factors (normalization), estimating dispersions, and applying the Wald test to find genes with significant log2 fold changes.
        </p>
      </section>

      <section id="pathway-analysis" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">5. Pathway & Enrichment Analysis</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          A list of differentially expressed genes is just the start. We map these genes to biological pathways to understand the broader functional changes in the system.
        </p>
        <ul className="list-disc pl-6 space-y-4 text-[var(--text-muted)] text-lg">
          <li><strong>Gene Ontology (GO) Enrichment:</strong> Identifying over-represented biological processes.</li>
          <li><strong>Gene Set Enrichment Analysis (GSEA):</strong> Analyzing the entire ranked list of genes to detect small but coordinated changes in pathways (e.g., KEGG, Reactome).</li>
        </ul>
      </section>

      <section id="visualization" className="scroll-mt-32 mb-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 pb-2 border-b border-[var(--border)]">6. Publication-Ready Visualization</h2>
        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
          Communicating your results effectively requires high-quality visualizations. Key plots generated in a standard bulk RNA-seq pipeline include:
        </p>
        <div className="grid sm:grid-cols-2 gap-6 my-8">
          <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">PCA Plots</h3>
            <p className="text-[var(--text-muted)] text-sm">Visualize sample-level variance to check for batch effects and group clustering.</p>
          </div>
          <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Volcano Plots</h3>
            <p className="text-[var(--text-muted)] text-sm">Highlight the most significant and highly differentially expressed genes.</p>
          </div>
          <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Heatmaps</h3>
            <p className="text-[var(--text-muted)] text-sm">Display expression patterns of top genes across all samples.</p>
          </div>
        </div>
      </section>

      <section id="next-steps" className="scroll-mt-32">
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">7. Master These Skills</h2>
          <p className="text-lg text-emerald-50 leading-relaxed mb-8 relative z-10 max-w-2xl">
            Want to run this pipeline yourself? Our mentorship program provides raw data from real publications and guides you step-by-step through the R and command-line code.
          </p>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://forms.gle/fSQ81xdwVUkokMnL9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-lg text-emerald-700 bg-white hover:bg-emerald-50 transition-colors shadow-sm"
            >
              Join the Mentorship Program
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
