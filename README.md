# DeepBio Academy — NextGen Drug Discovery with AI

Marketing site for DeepBio Academy's "NextGen Drug Discovery with AI" program — a live online course covering cheminformatics, structural bioinformatics, molecular docking, molecular dynamics, and AI/deep learning for computational drug discovery.

Live at: https://deepbioacademy.github.io

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, static export)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- lucide-react (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/            # App Router entry (layout, page, metadata)
  components/     # Page sections and UI primitives
  lib/data.ts     # All site content (copy, stats, modules, FAQ, team, etc.)
```

Content changes (copy, program details, team bios, FAQ) mostly live in `src/lib/data.ts` rather than the components themselves.

## Build

```bash
npm run build
```

`next.config.ts` sets `output: "export"`, so `npm run build` produces a static site in `out/`.

## Deployment

Deployment to GitHub Pages is automated via `.github/workflows/deploy.yml`: every push to `main` builds the static export and publishes it through GitHub Actions. No manual deploy step is required.

## Scripts

| Command         | Description                        |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the local dev server          |
| `npm run build` | Build the static production export  |
| `npm run start` | Serve the production build locally  |
| `npm run lint`  | Run ESLint                          |
