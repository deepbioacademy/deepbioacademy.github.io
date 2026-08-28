# DeepBio Academy

The official web platform and learning portal for **DeepBio Academy** — providing advanced training in Bioinformatics, Computational Biology, AI for Drug Discovery, and Multi-omics Research.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI & Styling:** [Tailwind CSS v4](https://tailwindcss.com/), [Lucide Icons](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Runtime:** [Node.js](https://nodejs.org/) & [React 19](https://react.dev/)
- **Deployment:** [Vercel](https://vercel.com/) (Recommended) / [Netlify](https://www.netlify.com/) / [GitHub Pages](https://pages.github.com/)

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

### Build

```bash
# Run production build
npm run build
```

---

## 🚀 Deploying to Vercel (Recommended)

### Step 1: Import Project to Vercel
1. Go to **[vercel.com](https://vercel.com)** and sign in with your GitHub account.
2. Click **"Add New..."** > **"Project"**.
3. Select this repository (`deepbioacademy.github.io`) and click **Import**.
4. Leave all default settings (Framework: Next.js) and click **Deploy**.

---

## 🌐 Connecting a Custom Domain on Vercel

### Step 1: Add your domain in Vercel
1. In your project dashboard on Vercel, go to **Settings** > **Domains**.
2. Enter your custom domain (e.g. `deepbioacademy.com` or `www.deepbioacademy.com`) and click **Add**.
3. Vercel will ask how you want to redirect (recommended: redirect root domain `deepbioacademy.com` to `www.deepbioacademy.com` or vice versa).

### Step 2: Configure DNS at your Domain Registrar
Log in to your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.) and add the following DNS records:

| Type | Name / Host | Value / Points to | Note |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | Points apex domain to Vercel |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Points www subdomain to Vercel |

*(If using a custom subdomain like `app.deepbioacademy.com`, add a `CNAME` with Host = `app` and Value = `cname.vercel-dns.com`)*

### Step 3: SSL / HTTPS Verification
- Vercel will automatically verify DNS records within 1–10 minutes and provision a free, auto-renewing SSL certificate (HTTPS).

---

## 📁 Project Structure

```
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
├── next.config.ts          # Next.js configuration & Edge security headers
├── package.json
└── tsconfig.json
```

---

## 📄 License

This repository is maintained by **DeepBio Academy**. All rights reserved.
