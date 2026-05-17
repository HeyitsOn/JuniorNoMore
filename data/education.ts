export interface EducationItem {
  id: string;
  institution: string;
  credential: string;
  period: string;
  description: string;
  color: "gold" | "blue" | "emerald" | "purple";
  tags: string[];
}

export interface CurrentLearning {
  topic: string;
  icon: string;
  progress: number;
  color: string;
}

export const educationItems: EducationItem[] = [
  {
    id: "stellitech",
    institution: "Stellitech",
    credential: "Data Science Programme",
    period: "2024 – 2025",
    description:
      "Applied data science curriculum covering statistical analysis, Python programming, machine learning fundamentals, and business intelligence reporting.",
    color: "gold",
    tags: ["Python", "Data Analysis", "Machine Learning", "Statistics", "Power BI"],
  },
  {
    id: "life-choices",
    institution: "Life Choices Academy",
    credential: "Full Stack Development",
    period: "2023 – 2024",
    description:
      "Intensive full-stack development programme covering front-end technologies (HTML, CSS, JavaScript, Vue.js) and back-end fundamentals with database integration.",
    color: "blue",
    tags: ["Vue.js", "JavaScript", "HTML/CSS", "MySQL", "REST APIs", "Git"],
  },
  {
    id: "open-university",
    institution: "The Open University",
    credential: "Digital Marketing",
    period: "2021 – 2022",
    description:
      "Comprehensive digital marketing curriculum spanning SEO, content strategy, social media management, analytics, and performance marketing.",
    color: "emerald",
    tags: ["SEO", "Content Strategy", "Analytics", "Social Media", "PPC"],
  },
  {
    id: "president-high",
    institution: "President High School",
    credential: "National Senior Certificate (Matric)",
    period: "2019 – 2021",
    description:
      "Completed secondary education with focus on Mathematics and Physical Science, providing a strong analytical foundation for technical studies.",
    color: "purple",
    tags: ["Mathematics", "Physical Science", "Analytical Thinking"],
  },
];

export const currentLearning: CurrentLearning[] = [
  { topic: "Microsoft Azure (AZ-900)", icon: "Cloud", progress: 65, color: "blue" },
  { topic: "DevOps Engineering", icon: "GitBranch", progress: 55, color: "emerald" },
  { topic: "Cybersecurity Fundamentals", icon: "Shield", progress: 40, color: "gold" },
  { topic: "AI & Machine Learning", icon: "Brain", progress: 35, color: "purple" },
  { topic: "Cloud Infrastructure (AWS)", icon: "Server", progress: 30, color: "rose" },
];
