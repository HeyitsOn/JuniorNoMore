# Onika Sileku — Portfolio Website

This is my personal portfolio website. It is a full professional portfolio built to showcase my skills, work experience, projects, and education as an IT Support and DevOps professional based in Cape Town, South Africa.

The site is designed to look like a premium tech product — dark theme, gold accents, smooth animations, and a clean modern layout — targeting recruiters, startups, and enterprise companies in the cloud and DevOps space.

---

## What This Website Does

The website is a single-page application made up of 8 sections that tell the full story of who I am professionally:

### 1. Loading Screen
When you first open the site, a short animated loading screen appears with a terminal-style intro. It fades away after 2 seconds and reveals the main page.

### 2. Navbar
A sticky navigation bar fixed to the top of the page. It:
- Highlights the current section as you scroll
- Collapses into a hamburger menu on mobile
- Has a Download CV button that downloads my CV as a PDF

### 3. Hero Section (First Page)
The first thing visitors see. It includes:
- My name (Onika Sileku) in large bold text
- A professional headline describing my role
- My profile photo in a circular frame with a gold glow border, spinning decorative rings, and floating tech chips (Azure, SQL) that animate
- Four role badges: IT Support Professional, Junior DevOps Engineer, Data Support Specialist, Cloud & Infrastructure
- Three call-to-action buttons: View Projects, Download CV, Contact Me
- Technology pills listing my core skills
- An animated terminal window that types out my skills and status automatically
- A stats row showing 2+ Years Experience, 5+ Live Projects, and Azure as my cloud platform
- An animated grid background with floating particles and a horizontal scan line

### 4. Stats Strip
A row of four animated number counters that count up when you scroll to them:
- 2+ Years Enterprise Experience (SA Bullion — Azure & DevOps)
- 5+ Live Projects Delivered
- 40% Workflow Time Saved (SQL & VBA automation)
- 4 Credentials & Programmes

### 5. About Section
A detailed about section that explains who I am professionally. It includes:
- A written bio covering my background, what I do at SA Bullion, my skills mix, and my goals
- A side panel with quick facts: location, availability status, languages, focus areas, and experience
- Six trait cards explaining my key professional qualities: Operations-Focused, Database Expertise, Full-Stack Capable, Troubleshooting Mindset, Cloud & DevOps Journey, and Versatile Communicator

### 6. Skills Section
A dashboard-style skills section grouped into 7 categories. You click the category tabs to switch between them:
- DevOps & Cloud (Azure, CI/CD, Git, System Monitoring)
- Databases (MySQL, SQL, Access Database, VBA)
- IT Operations (IT Support, Troubleshooting, Incident Resolution)
- Development (JavaScript, Vue.js, HTML/CSS, TypeScript, WordPress)
- Data & Analytics (Data Analysis, SQL Reporting, Power BI, Python)
- UI/UX & Design (UI/UX, Figma, Responsive Design, SEO)
- Collaboration (Cross-functional Teams, Technical Documentation, Content Writing)

Each skill has a progress bar that animates when the category loads. Below the tabs, all skills are shown as coloured badges.

### 7. Experience Timeline
A vertical alternating timeline showing all four of my work roles:
1. **Junior DevOps & IT Support — SA Bullion** (2024–Present): Azure DB admin, MySQL debugging, SQL/VBA automation, DevOps support, IT helpdesk
2. **Web Development Intern — LC Studio** (March–July 2024): WordPress fixes, front-end debugging, SEO, CMS maintenance
3. **Climate Awareness Advocate — African Climate Alliance** (Jan 2023–May 2024): Event organisation, public speaking, community engagement
4. **Content Writer & Editor — Fundza Literacy** (April–November 2024): Educational content creation and editing

Each role card has the company name, dates, bullet points describing what I did, and colour-coded tags for technologies used.

### 8. Projects Section
A filterable grid of project cards. You can filter by category: All, Full Stack, Data & Analytics, Cloud & DevOps, Automation, IT Operations. Each card shows:
- Project title and subtitle
- Short description
- Technology tags
- Click to expand for a longer description, business value, and key metrics
- Links to demo and GitHub (where available)

The five featured projects are:
1. **TaxFlow** — automated tax processing platform (Vue.js, SQL, MySQL)
2. **Nile.ag Market Optimization Dashboard** — agricultural market intelligence (SQL, REST API, Power BI)
3. **Azure Database Administration** — cloud DB management at SA Bullion (Azure, MySQL, monitoring)
4. **SQL & VBA Automation Suite** — internal reporting automation (SQL, VBA, MS Access)
5. **IT Support Operations Portfolio** — end-to-end helpdesk and infrastructure work

### 9. Education Section
Four education cards showing my qualifications:
- Stellitech — Data Science (2024–2025)
- Life Choices Academy — Full Stack Development (2023–2024)
- The Open University — Digital Marketing (2021–2022)
- President High School — Matric (2019–2021)

Below the cards is a "Currently Learning" section with animated progress bars showing my progress on: Azure (AZ-900), DevOps Engineering, Cybersecurity, AI & Machine Learning, and AWS Cloud Infrastructure. There is also a goal statement about achieving Azure AZ-104 certification.

### 10. Contact Section
A two-column contact section with:
- Left side: availability status card, and clickable links for email, phone, location, GitHub, and LinkedIn
- Right side: a full contact form with fields for name, email, subject, and message. When submitted, it shows an animated success state.

### 11. Footer
A simple footer with navigation links, contact details, social icons, and a scroll-to-top button.

---

## Design

The website uses a premium dark UI aesthetic inspired by cloud infrastructure dashboards and cybersecurity platforms.

- **Background**: deep graphite black (`#060810`)
- **Cards**: dark navy glass with blur effect (glassmorphism)
- **Primary accent**: gold (`#d4af37`) — used on names, headings, highlights
- **Secondary accent**: electric blue (`#3b82f6`) — used on technical elements
- **Success / availability**: emerald green (`#10b981`)
- **Typography**: Inter (body) + Fira Code (monospace/terminal elements)
- **Animations**: Framer Motion — all sections animate in on scroll, counters count up, particles float, terminal types itself out

---

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

---

## Project Structure

```
JuniorNoMore/
├── app/
│   ├── globals.css          # Global styles, custom utilities, glassmorphism
│   ├── layout.tsx           # Root layout — SEO metadata, OpenGraph tags
│   └── page.tsx             # Main page — imports and orders all sections
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky navbar, active section tracking, mobile menu
│   │   └── Footer.tsx       # Footer links, social icons, scroll-to-top
│   │
│   ├── sections/            # One file per page section
│   │   ├── Hero.tsx         # Photo, name, headline, terminal, CTAs, tech pills
│   │   ├── About.tsx        # Bio, quick facts panel, six trait cards
│   │   ├── Stats.tsx        # Animated CountUp statistics strip
│   │   ├── Skills.tsx       # Tabbed skills dashboard with animated progress bars
│   │   ├── Experience.tsx   # Alternating vertical timeline of all 4 roles
│   │   ├── Projects.tsx     # Filterable project cards with expand/collapse detail
│   │   ├── Education.tsx    # Education cards + currently learning progress bars
│   │   └── Contact.tsx      # Contact form + direct contact links
│   │
│   └── shared/              # Reusable components used across sections
│       ├── SectionWrapper.tsx      # Consistent section padding and header component
│       ├── AnimatedBackground.tsx  # Grid, glow orbs, floating particles, scan line
│       ├── Terminal.tsx            # Self-typing terminal animation in the hero
│       └── LoadingScreen.tsx       # Animated intro overlay on first load
│
├── data/                    # All website content lives here — edit to update
│   ├── skills.ts            # Skill categories, names, and proficiency levels
│   ├── experience.ts        # Work history, bullet points, tags
│   ├── projects.ts          # Project cards, descriptions, metrics, links
│   └── education.ts         # Education history and currently learning items
│
├── lib/
│   └── utils.ts             # cn() helper for combining Tailwind class names
│
├── constants/
│   └── index.ts             # SITE_CONFIG (name, email, phone, socials, URL)
│
├── public/
│   ├── cv.pdf               # CV download file
│   └── avatar.png           # Profile photo backup
│
├── tailwind.config.ts       # Full design token system (colors, shadows, animations)
├── next.config.ts           # Next.js config
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies
```

---

## How to Run Locally

**Requirements:** Node.js 18 or later

```bash
# 1. Clone the repo
git clone https://github.com/HeyitsOn/JuniorNoMore.git
cd JuniorNoMore

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build
npm start
```

---

## How to Update Content

All content is separated from the code so it is easy to edit:

| What to change | Where to edit |
|---|---|
| Name, email, phone, social links | `constants/index.ts` |
| Skills and proficiency levels | `data/skills.ts` |
| Work experience and bullet points | `data/experience.ts` |
| Projects, descriptions, links | `data/projects.ts` |
| Education history | `data/education.ts` |
| CV download file | Replace `public/cv.pdf` |
| Profile photo | Replace `public/avatar.png` or update `AVATAR_URL` in `Hero.tsx` |
| Color theme | Edit color values in `tailwind.config.ts` |

---

## Deployment

The site is deployed on Vercel. Every push to the `main` branch on GitHub triggers an automatic redeploy.

To deploy manually:

```bash
npm install -g vercel
vercel
```

Or go to [vercel.com](https://vercel.com), click New Project, import the GitHub repo, and click Deploy. Vercel auto-detects Next.js with zero configuration needed.