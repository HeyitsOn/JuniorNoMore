export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  color: "gold" | "blue" | "emerald" | "purple";
  bullets: string[];
  tags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "sa-bullion",
    role: "Junior DevOps & IT Support",
    company: "SA Bullion",
    period: "2024 – Present",
    type: "Full-Time",
    location: "Cape Town, South Africa",
    color: "gold",
    bullets: [
      "Administered and maintained Azure-hosted databases, ensuring high availability and consistent performance across production environments.",
      "Diagnosed and resolved critical MySQL and Microsoft Access database issues, reducing system downtime and maintaining operational continuity.",
      "Authored and optimised complex SQL queries and VBA automation scripts, accelerating routine reporting workflows and reducing manual processing time by 40%.",
      "Identified, escalated, and resolved DevOps-related pipeline and infrastructure issues, contributing to improved system reliability and CI/CD stability.",
      "Delivered in-house IT support across hardware, software, and connectivity domains, maintaining SLA compliance for internal stakeholders.",
      "Collaborated with senior engineers to document system architecture, incident reports, and operational runbooks.",
    ],
    tags: ["Azure", "MySQL", "SQL", "VBA", "DevOps", "IT Support", "Access DB"],
  },
  {
    id: "lc-studio",
    role: "Web Development Intern",
    company: "LC Studio",
    period: "March 2024 – July 2024",
    type: "Internship",
    location: "Cape Town, South Africa",
    color: "blue",
    bullets: [
      "Contributed to live production projects, diagnosing and resolving front-end bugs on the LC Studio WordPress platform.",
      "Enhanced site performance and UX by implementing targeted fixes, improving page load efficiency and visual consistency.",
      "Conducted cross-browser and cross-device testing to identify responsive design failures and implement corrective solutions.",
      "Maintained and updated content management systems, ensuring accuracy, accessibility, and SEO compliance across all pages.",
      "Collaborated with senior developers in an agile environment, participating in code reviews and sprint planning sessions.",
    ],
    tags: ["WordPress", "HTML/CSS", "JavaScript", "SEO", "CMS", "Debugging"],
  },
  {
    id: "african-climate",
    role: "Climate Awareness Advocate & Organiser",
    company: "African Climate Alliance",
    period: "January 2023 – May 2024",
    type: "Advocacy & Organising",
    location: "Cape Town, South Africa",
    color: "emerald",
    bullets: [
      "Planned and executed community-facing climate awareness events, coordinating logistics for engagements reaching 200+ attendees.",
      "Represented the organisation at regional forums and panels, delivering presentations on African climate vulnerability and sustainable development.",
      "Produced compelling written and digital communications materials to drive engagement and stakeholder alignment.",
      "Built and maintained relationships with community partners, NGOs, and advocacy networks across Southern Africa.",
    ],
    tags: ["Event Management", "Public Speaking", "Community Engagement", "Communications"],
  },
  {
    id: "fundza",
    role: "Content Writer & Editor",
    company: "Fundza Literacy Trust",
    period: "April 2024 – November 2024",
    type: "Contract",
    location: "Remote, South Africa",
    color: "purple",
    bullets: [
      "Created and edited high-quality educational content — including stories, articles, and blog posts — targeting youth literacy development.",
      "Maintained editorial standards across all published materials, ensuring accuracy, clarity, and audience-appropriate tone.",
      "Collaborated with the editorial team to develop content calendars and meet publishing deadlines consistently.",
      "Contributed to digital literacy initiatives by producing engaging content that resonated with diverse young readerships.",
    ],
    tags: ["Content Writing", "Editing", "Educational Content", "Digital Literacy"],
  },
];
