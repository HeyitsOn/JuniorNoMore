# Onika Sileku — Portfolio Website

Premium modern portfolio website for a DevOps & IT Systems professional. Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and a premium dark UI aesthetic.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter + Fira Code (Google Fonts) |
| Deployment | Vercel |

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm / yarn / pnpm

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
JuniorNoMore/
├── app/
│   ├── globals.css          # Global styles, Tailwind directives
│   ├── layout.tsx           # Root layout with metadata & SEO
│   └── page.tsx             # Main page — assembles all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky responsive navbar
│   │   └── Footer.tsx       # Footer with links
│   ├── sections/
│   │   ├── Hero.tsx         # Hero with terminal + CTA
│   │   ├── About.tsx        # About section with traits
│   │   ├── Stats.tsx        # Animated counter stats
│   │   ├── Skills.tsx       # Tabbed skills dashboard
│   │   ├── Experience.tsx   # Alternating timeline
│   │   ├── Projects.tsx     # Filterable project cards
│   │   ├── Education.tsx    # Education + currently learning
│   │   └── Contact.tsx      # Contact form + links
│   └── shared/
│       ├── SectionWrapper.tsx
│       ├── AnimatedBackground.tsx
│       ├── Terminal.tsx
│       └── LoadingScreen.tsx
├── data/                    # All content data
├── lib/utils.ts
├── constants/index.ts
└── tailwind.config.ts
```

## Customisation

- **Personal info**: edit `constants/index.ts`
- **Content**: edit files in `data/`
- **CV download**: place PDF at `public/cv.pdf`
- **Colors**: modify `tailwind.config.ts` color tokens

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) — it auto-detects Next.js.