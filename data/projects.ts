export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  color: "gold" | "blue" | "emerald" | "purple" | "rose";
  category: string;
  featured: boolean;
  links: {
    demo?: string;
    github?: string;
  };
  metrics?: string[];
}

export const projects: Project[] = [
  {
    id: "taxflow",
    title: "TaxFlow",
    subtitle: "Automated Tax Processing Platform",
    description:
      "A full-stack tax management platform automating data capture, validation, and reporting workflows for SME clients.",
    longDescription:
      "TaxFlow addresses the complexity of SME tax compliance by automating data ingestion, multi-source validation, and regulatory report generation. The platform integrates SQL-backed data pipelines with a Vue.js frontend, enabling accountants to reduce manual effort by over 60% while maintaining audit-trail compliance.",
    tags: ["Vue.js", "SQL", "MySQL", "JavaScript", "REST API", "Automation"],
    color: "gold",
    category: "Full Stack",
    featured: true,
    links: {
      demo: "#",
      github: "#",
    },
    metrics: ["60% reduction in manual data entry", "Multi-source data validation", "Automated compliance reporting"],
  },
  {
    id: "nile-dashboard",
    title: "Nile.ag Market Optimization Dashboard",
    subtitle: "Agricultural Market Intelligence Platform",
    description:
      "A data analytics dashboard delivering real-time market insights and supply chain optimization intelligence for agricultural producers.",
    longDescription:
      "Built for Nile.ag, this dashboard aggregates and visualises complex agricultural market data, enabling producers to make data-driven decisions on pricing, supply, and demand. Leverages SQL-driven data processing, REST APIs for live market feeds, and an interactive analytics front end for stakeholder reporting.",
    tags: ["Data Analytics", "SQL", "REST API", "Vue.js", "Dashboard", "Power BI"],
    color: "emerald",
    category: "Data & Analytics",
    featured: true,
    links: {
      demo: "#",
      github: "#",
    },
    metrics: ["Real-time market data integration", "Interactive data visualisation", "Supply chain trend analysis"],
  },
  {
    id: "azure-db-admin",
    title: "Azure Database Administration",
    subtitle: "Cloud Database Management & Optimisation",
    description:
      "Managed, monitored, and optimised Azure-hosted database infrastructure for a live financial services organisation.",
    longDescription:
      "Administered a suite of Azure cloud databases for SA Bullion, encompassing performance tuning, automated backup configuration, query optimisation, and incident response. Implemented monitoring alerts and resolved critical bottlenecks that directly impacted trading operations and data integrity.",
    tags: ["Azure", "Cloud", "MySQL", "Performance Tuning", "Backup", "Monitoring"],
    color: "blue",
    category: "Cloud & DevOps",
    featured: true,
    links: {
      github: "#",
    },
    metrics: ["Production Azure DB management", "Zero data-loss incident response", "Automated backup & recovery"],
  },
  {
    id: "sql-automation",
    title: "SQL & VBA Automation Suite",
    subtitle: "Internal Reporting & Workflow Automation",
    description:
      "Designed and deployed a suite of SQL queries and VBA macros to automate internal reporting, reducing processing time by 40%.",
    longDescription:
      "Developed a comprehensive automation library for a financial services environment, comprising parameterised SQL reports, Access Database automation macros, and scheduled data transformation scripts. Eliminated repetitive manual operations and delivered reliable, reproducible outputs across finance, compliance, and operations teams.",
    tags: ["SQL", "VBA", "MS Access", "Automation", "Reporting", "Optimisation"],
    color: "purple",
    category: "Automation",
    featured: false,
    links: {
      github: "#",
    },
    metrics: ["40% reduction in report processing time", "10+ automated workflows", "Zero manual errors post-deployment"],
  },
  {
    id: "it-support-ops",
    title: "IT Support Operations Portfolio",
    subtitle: "Helpdesk, Infrastructure & Incident Management",
    description:
      "End-to-end IT support operations covering hardware setup, software troubleshooting, network diagnostics, and SLA-bound incident management.",
    longDescription:
      "Delivered comprehensive IT support operations across internal staff and infrastructure at SA Bullion. Managed hardware provisioning, resolved connectivity and software incidents, maintained system documentation, and supported DevOps workflows. Built internal knowledge base articles to reduce repeat ticket volume.",
    tags: ["IT Support", "Helpdesk", "Networking", "Windows", "SLA", "Documentation"],
    color: "rose",
    category: "IT Operations",
    featured: false,
    links: {
      github: "#",
    },
    metrics: ["SLA-compliant incident resolution", "Reduced repeat ticket rate", "Full hardware/software lifecycle management"],
  },
];
