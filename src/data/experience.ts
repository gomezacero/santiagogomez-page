import type { Lang } from '@/i18n/ui';

export interface Milestone {
  period: string;
  title: Record<Lang, string>;
  body: Record<Lang, string>;
  highlight?: boolean;
}

export const milestones: Milestone[] = [
  {
    period: '2022',
    title: { es: 'Premio IngenioTIC — Desarrollo de software', en: 'IngenioTIC Award — Software development' },
    body: {
      es: 'Reconocimiento por una app móvil de transporte para estudiantes universitarios: detectar una necesidad real de movilidad y resolverla con código.',
      en: 'Recognized for a mobile transport app for university students: spotting a real mobility need and solving it with code.',
    },
  },
  {
    period: '2023 — presente',
    title: { es: 'El Edén Condominio — sitio comercial', en: 'El Edén Condominio — commercial site' },
    body: {
      es: 'Sitio con captura de leads que contribuyó a la venta de 4 de 16 terrenos disponibles. Astro + backend de leads en PHP/MySQL.',
      en: 'Lead-capture website that contributed to selling 4 of 16 available lots. Astro + PHP/MySQL lead backend.',
    },
  },
  {
    period: '2024 — 2025',
    title: { es: 'Bootcamp de IA — TalentoTech (MinTIC)', en: 'AI Bootcamp — TalentoTech (MinTIC)' },
    body: {
      es: 'Formación en inteligencia artificial del Ministerio de Tecnologías de Colombia.',
      en: "AI training program by Colombia's Ministry of Technology.",
    },
  },
  {
    period: '2025 — presente',
    title: { es: 'APROTEVID — desarrollador web', en: 'APROTEVID — web developer' },
    body: {
      es: 'Sitio institucional para asociación campesina: 400+ usuarios activos en los primeros meses, coordinación directa con stakeholders.',
      en: 'Institutional site for a rural association: 400+ active users in the first months, direct stakeholder coordination.',
    },
  },
  {
    period: '2025',
    title: { es: 'Hilong LCR en producción', en: 'Hilong LCR in production' },
    body: {
      es: 'Plataforma de certificación multi-rol desplegada en producción con tests, e2e y CI/CD — deploy automático en cada push a main.',
      en: 'Multi-role certification platform live in production with tests, e2e and CI/CD — automatic deploy on every push to main.',
    },
    highlight: true,
  },
  {
    period: '2025 — 2026',
    title: { es: 'LaunchPro & Lenguas — productos con IA', en: 'LaunchPro & Lenguas — AI products' },
    body: {
      es: 'Plataformas para clientes: campañas de ads generadas con IA multimodal y un coach de inglés con conversación de voz en tiempo real.',
      en: 'Client platforms: ad campaigns generated with multimodal AI and an English coach with real-time voice conversation.',
    },
    highlight: true,
  },
  {
    period: '2027',
    title: { es: 'Ingeniería de Sistemas — UNAB', en: 'Systems Engineering — UNAB' },
    body: {
      es: 'Graduación prevista: mayo de 2027, Universidad Autónoma de Bucaramanga.',
      en: 'Expected graduation: May 2027, Universidad Autónoma de Bucaramanga.',
    },
  },
];
