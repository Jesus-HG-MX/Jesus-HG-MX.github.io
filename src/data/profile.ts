import { siteConfig } from "../config/site";
export const profile = { ...siteConfig, title: siteConfig.role };
export const copy = {
  nav: [
    { label: "Inicio", id: "home" },
    { label: "Perfil", id: "profile" },
    { label: "Experiencia", id: "experience" },
    { label: "Competencias", id: "skills" },
    { label: "Trayectoria", id: "highlights" },
    { label: "Educación", id: "education" },
    { label: "Contacto", id: "contact" },
  ],
  intro:
    "Ingeniero Industrial con más de 14 años de experiencia en manufactura automotriz y procesos industriales. Especialista en liderazgo de equipos, Lean Manufacturing, mejora continua, SAP, KPIs, calidad y seguridad.",
  about:
    "Ingeniero Industrial con más de 14 años de experiencia en manufactura automotriz y procesos industriales. Especialista en liderazgo de equipos sindicalizados, Lean Manufacturing, mejora continua, 5S, SAP, KPIs, control de producción e inventarios.",
  focus:
    "Enfocado en productividad, calidad, seguridad y desarrollo de equipos de alto desempeño.",
  statement:
    "Comprometido con la construcción de operaciones de manufactura más seguras, eficientes y enfocadas en las personas.",
  contact:
    "Disponible para oportunidades en supervisión de producción, liderazgo de manufactura, operaciones industriales y mejora continua.",
  areas: "Manufactura · Producción · Mejora Continua · Liderazgo Operativo",
  metrics: [
    {
      value: "14+",
      suffix: " AÑOS",
      label: "Experiencia en manufactura",
      icon: "factory",
    },
    {
      value: "TIER 1",
      suffix: " AUTOMOTRIZ",
      label: "Benteler · Tenneco · INNOFA",
      icon: "gear",
    },
    {
      value: ">90%",
      suffix: "",
      label: "Cumplimiento del plan de producción",
      icon: "chart",
    },
    {
      value: "LIDERAZGO",
      suffix: " OPERATIVO",
      label: "Producción · Calidad · Seguridad · Personas",
      icon: "people",
    },
  ],
  experience: [
    {
      date: "2025 – 2026",
      company: "INNOFA de México",
      role: "Supervisor de Producción",
      description: [
        "Supervisión de operaciones.",
        "Seguimiento al cumplimiento de objetivos de producción.",
        "Gestión de personal.",
        "Seguimiento de indicadores de productividad.",
        "Seguimiento de indicadores de calidad.",
        "Seguimiento de indicadores de seguridad.",
      ],
      tags: ["Producción", "Gestión de personal"],
    },
    {
      date: "2024 – 2025",
      company: "La Josefina",
      role: "Ingeniero de Procesos",
      description: [
        "Análisis de procesos industriales.",
        "Mejora de procesos orientada a eficiencia.",
        "Mejora de procesos orientada a estandarización.",
        "Seguimiento de indicadores.",
        "Identificación de oportunidades de mejora continua.",
      ],
      tags: ["Eficiencia", "Estandarización"],
    },
    {
      date: "2021 – 2024",
      company: "Tenneco",
      role: "Líder de Manufactura",
      description: [
        "Liderazgo de operaciones de manufactura automotriz.",
        "Coordinación de personal sindicalizado.",
        "Gestión de KPIs.",
        "Gestión de OEE.",
        "Implementación y seguimiento de 5S.",
        "Kaizen.",
        "Acciones enfocadas en reducir tiempos muertos.",
      ],
      tags: ["Manufactura automotriz", "OEE · Kaizen"],
    },
    {
      date: "2012 – 2021",
      company: "Benteler de México",
      role: "Líder de Línea",
      description: [
        "Coordinación de líneas de producción.",
        "Seguimiento al cumplimiento de planes diarios.",
        "Balanceo de líneas.",
        "Trabajo estandarizado.",
        "5S.",
        "Control y seguimiento de inventarios.",
        "Resolución de problemas.",
      ],
      tags: ["Producción", "Inventarios"],
    },
  ],
  skills: [
    {
      title: "Producción y Operaciones",
      icon: "factory",
      items: [
        "Control de Producción",
        "Balanceo de Líneas",
        "Trabajo Estandarizado",
        "Inventarios",
        "SAP Producción",
      ],
    },
    {
      title: "Lean Manufacturing",
      icon: "cycle",
      items: ["Lean Manufacturing", "5S", "Kaizen", "OEE", "Mejora Continua"],
    },
    {
      title: "Liderazgo y Personas",
      icon: "people",
      items: [
        "Gestión de Personal",
        "Equipos Sindicalizados",
        "Capacitación de Personal",
        "Desarrollo de Equipos",
      ],
    },
    {
      title: "Calidad y Seguridad",
      icon: "shield",
      items: [
        "Calidad",
        "Seguridad Industrial",
        "KPIs",
        "Resolución de Problemas",
      ],
    },
  ],
  highlights: [
    {
      title: "14+ Años en Manufactura",
      text: "Experiencia en manufactura automotriz y procesos industriales.",
      icon: "factory",
    },
    {
      title: "Experiencia Tier 1",
      text: "Benteler · Tenneco · INNOFA",
      icon: "gear",
    },
    {
      title: "Liderazgo de Personas",
      text: "Experiencia en coordinación de operaciones y personal sindicalizado.",
      icon: "people",
    },
    {
      title: "Excelencia Operativa",
      text: "Lean Manufacturing · OEE · 5S · Kaizen · SAP · Productividad · Calidad · Seguridad",
      icon: "chart",
    },
  ],
  certifications: [
    "Lean Six Sigma Yellow Belt",
    "ISO 9001:2015",
    "Seguridad Industrial",
    "Capacitación de Personal",
  ],
  education: {
    degree: "Ingeniería Industrial",
    school: "Universidad de los Ángeles",
    credential: "Título y Cédula Profesional",
  },
};
