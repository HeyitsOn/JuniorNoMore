export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: "gold" | "blue" | "emerald" | "purple" | "rose" | "cyan" | "orange";
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "devops-cloud",
    title: "DevOps & Cloud",
    icon: "Cloud",
    color: "blue",
    skills: [
      { name: "Microsoft Azure", level: 70 },
      { name: "Azure Database Admin", level: 72 },
      { name: "CI/CD Pipelines", level: 55 },
      { name: "DevOps Principles", level: 65 },
      { name: "System Monitoring", level: 68 },
      { name: "Git & Version Control", level: 75 },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    color: "gold",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "SQL (T-SQL/MS SQL)", level: 82 },
      { name: "Access Database", level: 85 },
      { name: "VBA Automation", level: 78 },
      { name: "Database Debugging", level: 80 },
      { name: "Query Optimization", level: 72 },
    ],
  },
  {
    id: "it-operations",
    title: "IT Operations",
    icon: "Settings",
    color: "emerald",
    skills: [
      { name: "IT Support & Helpdesk", level: 88 },
      { name: "System Troubleshooting", level: 85 },
      { name: "Network Diagnostics", level: 68 },
      { name: "Hardware/Software Config", level: 80 },
      { name: "Process Optimization", level: 75 },
      { name: "Incident Resolution", level: 82 },
    ],
  },
  {
    id: "development",
    title: "Development",
    icon: "Code2",
    color: "purple",
    skills: [
      { name: "JavaScript (ES6+)", level: 78 },
      { name: "Vue.js", level: 72 },
      { name: "HTML5 & CSS3", level: 85 },
      { name: "TypeScript", level: 60 },
      { name: "WordPress", level: 82 },
      { name: "REST APIs", level: 65 },
    ],
  },
  {
    id: "data-science",
    title: "Data & Analytics",
    icon: "BarChart3",
    color: "cyan",
    skills: [
      { name: "Data Analysis", level: 68 },
      { name: "SQL Reporting", level: 78 },
      { name: "Excel & Power BI", level: 72 },
      { name: "Python (Learning)", level: 45 },
      { name: "Data Visualization", level: 62 },
    ],
  },
  {
    id: "uiux",
    title: "UI/UX & Design",
    icon: "Palette",
    color: "rose",
    skills: [
      { name: "UI/UX Design", level: 75 },
      { name: "Figma", level: 65 },
      { name: "Responsive Design", level: 82 },
      { name: "SEO Optimization", level: 75 },
      { name: "Digital Marketing", level: 72 },
    ],
  },
  {
    id: "collaboration",
    title: "Collaboration",
    icon: "Users",
    color: "orange",
    skills: [
      { name: "Cross-functional Teams", level: 88 },
      { name: "Technical Documentation", level: 78 },
      { name: "Content Writing", level: 85 },
      { name: "Stakeholder Comms", level: 80 },
    ],
  },
];

export const techBadges = [
  "Azure", "MySQL", "SQL", "VBA", "JavaScript", "Vue.js",
  "TypeScript", "WordPress", "Git", "HTML5", "CSS3", "Python",
  "REST APIs", "Power BI", "Figma", "SEO", "Linux",
];
