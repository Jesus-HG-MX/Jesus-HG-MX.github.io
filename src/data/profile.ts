import { siteConfig } from "../config/site";
export type Locale = "en";
export const defaultLocale: Locale = "en";
export const profile = { ...siteConfig, title: siteConfig.role };
export const content = {
  en: {
    nav: [
      { label: "Home", id: "home" },
      { label: "Experience", id: "experience" },
      { label: "Skills", id: "skills" },
      { label: "Highlights", id: "highlights" },
      { label: "Education", id: "education" },
      { label: "Contact", id: "contact" },
    ],
    intro:
      "Industrial Engineer with 14+ years of experience in automotive manufacturing and industrial operations. Specialized in production leadership, Lean Manufacturing, continuous improvement, SAP, KPIs, quality and safety.",
    about:
      "Industrial Engineer with more than 14 years of experience in automotive manufacturing and industrial processes. Specialist in team leadership, unionized workforce management, Lean Manufacturing, continuous improvement, 5S, SAP, KPIs, production and inventory control.",
    focus:
      "Focused on productivity, quality, safety and the development of high-performance teams.",
    statement:
      "Committed to building safer, more efficient and people-centered manufacturing operations.",
    contact:
      "Open to opportunities in production supervision, manufacturing leadership, industrial operations and continuous improvement.",
    experience: [
      {
        date: "2025 – 2026",
        company: "INNOFA de México",
        role: "Production Supervisor",
        description: [
          "Supervision of operations and follow-up on production targets.",
          "Personnel management and monitoring of productivity, quality and safety indicators.",
        ],
        tags: ["Production", "People leadership"],
      },
      {
        date: "2024 – 2025",
        company: "La Josefina",
        role: "Process Engineer",
        description: [
          "Analysis and improvement of industrial processes focused on efficiency and standardization.",
          "Follow-up on indicators and continuous improvement opportunities.",
        ],
        tags: ["Process efficiency", "Standardization"],
      },
      {
        date: "2021 – 2024",
        company: "Tenneco",
        role: "Manufacturing Leader",
        description: [
          "Leadership of automotive manufacturing operations and coordination of unionized personnel.",
          "Management of KPIs, OEE, 5S, Kaizen and actions focused on reducing downtime.",
        ],
        tags: ["Automotive", "OEE & Kaizen"],
      },
      {
        date: "2012 – 2021",
        company: "Benteler de México",
        role: "Line Leader",
        description: [
          "Coordination of production lines and follow-up on daily production plans.",
          "Line balancing, standardized work, 5S, inventory management and problem resolution.",
        ],
        tags: ["Line leadership", "Production planning"],
      },
    ],
    skills: [
      {
        title: "Production & Operations",
        icon: "factory",
        items: [
          "Production Control",
          "Line Balancing",
          "Standardized Work",
          "Inventory Management",
          "SAP Production",
        ],
      },
      {
        title: "Lean Manufacturing",
        icon: "cycle",
        items: [
          "Lean Manufacturing",
          "5S",
          "Kaizen",
          "OEE",
          "Continuous Improvement",
        ],
      },
      {
        title: "Leadership & People",
        icon: "people",
        items: [
          "Personnel Management",
          "Unionized Teams",
          "Training & Development",
          "High-Performance Teams",
        ],
      },
      {
        title: "Quality & Safety",
        icon: "shield",
        items: [
          "Quality",
          "Industrial Safety",
          "KPI Management",
          "Problem Solving",
          "Operational Excellence",
        ],
      },
    ],
    highlights: [
      {
        title: "14+ Years in Manufacturing",
        text: "Automotive and industrial production experience.",
        icon: "factory",
      },
      {
        title: "Tier 1 Automotive",
        text: "Benteler · Tenneco · INNOFA",
        icon: "gear",
      },
      {
        title: "People Leadership",
        text: "Experience coordinating manufacturing operations and unionized personnel.",
        icon: "people",
      },
      {
        title: "Operational Excellence",
        text: "Lean Manufacturing · OEE · 5S · Kaizen · SAP · Productivity · Quality · Safety",
        icon: "chart",
      },
    ],
    certifications: [
      "Lean Six Sigma Yellow Belt",
      "ISO 9001:2015",
      "Industrial Safety",
      "Personnel Training",
    ],
    education: {
      degree: "Industrial Engineering",
      school: "Universidad de los Ángeles",
      credential: "Professional Degree and License",
    },
  },
};
export const copy = content[defaultLocale];
