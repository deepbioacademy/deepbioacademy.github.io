# DeepBio Academy

The official web platform and learning portal for **DeepBio Academy** — providing advanced training in Bioinformatics, Computational Biology, AI for Drug Discovery, and Multi-omics Research.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router & Static HTML Export)
- **UI & Styling:** [Tailwind CSS v4](https://tailwindcss.com/), [Lucide Icons](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Runtime:** [Node.js](https://nodejs.org/) & [React 19](https://react.dev/)
- **Deployment:** [GitHub Pages](https://pages.github.com/) / [Netlify](https://www.netlify.com/)

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have **Node.js 18+** installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/deepbioacademy/deepbioacademy.github.io.git

# Navigate to the project directory
cd deepbioacademy.github.io

# Install dependencies
npm install
```

### Development

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Export

```bash
# Generate the static production build (output to /out)
npm run build
```

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (Automated via GitHub Actions)

1. Go to your GitHub repository **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push commits to `main` — the workflow in `.github/workflows/deploy.yml` will automatically build and deploy.

### Option 2: Netlify

The repository includes a pre-configured `netlify.toml` file:
- **Build command:** `npm run build`
- **Publish directory:** `out`
- Simply link your repository in Netlify or deploy via Netlify CLI (`netlify deploy --prod`).

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml      # Automated GitHub Actions deployment workflow
├── public/                 # Static assets (images, logos, publications)
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   │   ├── alumni/         # Mentee & alumni showcase
│   │   ├── apply/          # Application & registration flow
│   │   ├── blog/           # Articles and insights
│   │   ├── programs/       # Program-specific landing pages
│   │   ├── research/       # Publications and research output
│   │   └── tutorials/      # Step-by-step bioinformatics guides
│   ├── components/         # Reusable UI components & section layouts
│   ├── content/            # Markdown content and blog posts
│   ├── data/               # Static datasets and curriculum configs
│   ├── lib/                # Utility helpers and markdown parser
│   └── types/              # TypeScript interface definitions
├── netlify.toml            # Netlify deployment & headers configuration
├── next.config.ts          # Static export configuration
├── package.json
└── tsconfig.json
```

---

## 📄 License

This repository is maintained by **DeepBio Academy**. All rights reserved.
