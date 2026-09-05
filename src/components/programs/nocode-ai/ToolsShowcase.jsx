'use client';
import styles from './ToolsShowcase.module.css';

const base = (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_BASE_PATH) || '';

const pythonTools = [
  {
    name: 'Scanpy',
    tag: 'scRNA-seq Analysis',
    logo: `${base}/scanpy.jpg`,
    fallbackColor: '#1a7abf',
  },
  {
    name: 'PyDESeq2',
    tag: 'Differential Expression',
    logo: `${base}/pydeseq2.png`,
    fallbackColor: '#3776ab',
  },
  {
    name: 'pandas',
    tag: 'Data Manipulation',
    logo: `${base}/pandas.png`,
    fallbackColor: '#150458',
  },
  {
    name: 'Matplotlib',
    tag: 'Data Visualization',
    logo: `${base}/matplotlib.png`,
    fallbackColor: '#11557c',
  },
  {
    name: 'PyTorch',
    tag: 'Deep Learning',
    logo: `${base}/pytorch.png`,
    fallbackColor: '#ee4c2c',
  },
  {
    name: 'scikit-learn',
    tag: 'Machine Learning',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
    fallbackColor: '#f89939',
  },
];

const rTools = [
  {
    name: 'Seurat',
    tag: 'Single-Cell Analysis',
    logo: `${base}/seurat.png`,
    fallbackColor: '#1e88e5',
    hex: true,
  },
  {
    name: 'Bioconductor',
    tag: 'Genomics Framework',
    logo: `${base}/bioconductor.png`,
    fallbackColor: '#1a5276',
    hex: false,
  },
  {
    name: 'DESeq2',
    tag: 'Bulk RNA-seq DE',
    logo: 'https://raw.githubusercontent.com/Bioconductor/BiocStickers/devel/DESeq2/DESeq2.png',
    fallbackColor: '#6a0dad',
    hex: true,
  },
  {
    name: 'ggplot2',
    tag: 'Data Visualization',
    logo: 'https://raw.githubusercontent.com/rstudio/hex-stickers/main/SVG/ggplot2.svg',
    fallbackColor: '#2c3e50',
    hex: true,
  },
  {
    name: 'edgeR',
    tag: 'DE Analysis',
    logo: 'https://raw.githubusercontent.com/Bioconductor/BiocStickers/devel/edgeR/edgeR.png',
    fallbackColor: '#c0392b',
    hex: true,
  },
  {
    name: 'limma',
    tag: 'Linear Models',
    logo: 'https://raw.githubusercontent.com/Bioconductor/BiocStickers/devel/limma/limma.png',
    fallbackColor: '#117864',
    hex: true,
  },
];

function ToolCard({ name, tag, logo, fallbackColor, hex, lang }) {
  const handleError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  return (
    <div className={`${styles.card} ${hex ? styles.hexCard : ''}`}>
      <div className={styles.logoBox}>
        <img
          src={logo}
          alt={`${name} logo`}
          className={`${styles.logo} ${hex ? styles.hexLogo : ''}`}
          onError={handleError}
        />
        <div
          className={styles.fallback}
          style={{ background: fallbackColor, display: 'none' }}
        >
          {name.charAt(0)}
        </div>
      </div>
      <div className={styles.cardInfo}>
        <span className={styles.cardName}>{name}</span>
        <span className={styles.cardTag}>{tag}</span>
      </div>
    </div>
  );
}

export default function ToolsShowcase() {
  return (
    <section className={styles.section} id="tools">
      <div className="container">
        <div className={styles.header}>
          <h2 className="sectionTitle">Tools & Packages</h2>
          <p className={styles.subtitle}>
            Industry-standard libraries  —  used through a <strong>no-code workflow</strong>
          </p>
        </div>

        <div className={styles.group}>
          <div className={styles.groupLabel}>
            <img
              src="https://cdn.simpleicons.org/python/ffffff"
              alt="Python"
              className={styles.langIcon}
            />
            Python Packages
          </div>
          <div className={styles.grid}>
            {pythonTools.map((t) => (
              <ToolCard key={t.name} {...t} lang="py" />
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.group}>
          <div className={styles.groupLabel}>
            <img
              src="https://cdn.simpleicons.org/r/ffffff"
              alt="R"
              className={styles.langIcon}
            />
            R Packages
          </div>
          <div className={styles.grid}>
            {rTools.map((t) => (
              <ToolCard key={t.name} {...t} lang="r" />
            ))}
          </div>
        </div>

        <p className={styles.note}>
          âœ¦ No prior coding experience needed  —  all workflows are guided and abstracted
        </p>
      </div>
    </section>
  );
}

