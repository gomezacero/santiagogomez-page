import type { Lang } from '@/i18n/ui';

type L<T = string> = Record<Lang, T>;

export const contact = {
  name: 'Santiago Gómez Acero',
  headline: {
    es: 'Desarrollador Full-Stack · Productos con IA',
    en: 'Full-Stack Developer · AI Products',
  } satisfies L,
  location: { es: 'Bucaramanga, Colombia', en: 'Bucaramanga, Colombia' } satisfies L,
  email: 'gomezacero2805@gmail.com',
  phone: '+57 324 6513682',
  whatsapp: '573246513682',
  github: 'https://github.com/gomezacero',
  linkedin: 'https://www.linkedin.com/in/santiago-g%C3%B3mez-acero-15b7a4367/',
};

export const summary: L = {
  es: 'Desarrollador full-stack con proyectos en producción para clientes reales: plataformas de generación de campañas con IA multimodal, sistemas de certificación con CI/CD y coaches conversacionales en tiempo real. Especializado en React/Next.js, Astro, Node.js, PostgreSQL/Supabase y APIs de IA (Claude, Gemini, Vertex AI). Estudiante de Ingeniería de Sistemas (UNAB, grad. 2027).',
  en: 'Full-stack developer with production projects for real clients: multimodal AI campaign-generation platforms, certification systems with CI/CD and real-time conversational coaches. Specialized in React/Next.js, Astro, Node.js, PostgreSQL/Supabase and AI APIs (Claude, Gemini, Vertex AI). Systems Engineering student (UNAB, grad. 2027).',
};

export interface CvItem {
  title: L;
  org: L;
  period: L;
  bullets: L<string[]>;
}

export const experience: CvItem[] = [
  {
    title: { es: 'Desarrollador Full-Stack (freelance)', en: 'Full-Stack Developer (freelance)' },
    org: { es: 'Cliente confidencial — LaunchPro & Lía', en: 'Confidential client — LaunchPro & Lía' },
    period: { es: '2025 — presente', en: '2025 — present' },
    bullets: {
      es: [
        'Desarrollé una plataforma que automatiza el lanzamiento de campañas en Tonic, Meta y TikTok Ads con generación de contenido por IA (Claude, Vertex AI Imagen y Veo), reduciendo el flujo de horas a minutos. Next.js, PostgreSQL/Prisma, Docker y Cloud Run.',
        'Construí un coach conversacional de inglés con audio bidireccional en tiempo real (Gemini Live) y razonamiento con Claude; suscripciones con Stripe y analítica con PostHog.',
      ],
      en: [
        'Built a platform that automates campaign launches on Tonic, Meta and TikTok Ads with AI-generated content (Claude, Vertex AI Imagen and Veo), cutting the workflow from hours to minutes. Next.js, PostgreSQL/Prisma, Docker and Cloud Run.',
        'Built a conversational English coach with real-time bidirectional audio (Gemini Live) and Claude-powered reasoning; Stripe subscriptions and PostHog analytics.',
      ],
    },
  },
  {
    title: { es: 'Desarrollador Full-Stack', en: 'Full-Stack Developer' },
    org: { es: 'Hilong LCR', en: 'Hilong LCR' },
    period: { es: '2025', en: '2025' },
    bullets: {
      es: [
        'Plataforma de certificación multi-rol bilingüe en producción: React 19, Express y PostgreSQL, con tests unitarios y e2e, GitHub Actions y despliegue continuo en Cloud Run.',
      ],
      en: [
        'Bilingual multi-role certification platform in production: React 19, Express and PostgreSQL, with unit and e2e tests, GitHub Actions and continuous deployment on Cloud Run.',
      ],
    },
  },
  {
    title: { es: 'Desarrollador Web & Diseñador', en: 'Web Developer & Designer' },
    org: { es: 'APROTEVID', en: 'APROTEVID' },
    period: { es: '2025 — presente', en: '2025 — present' },
    bullets: {
      es: [
        'Lideré el sitio institucional de la asociación: 400+ usuarios activos en los primeros meses y coordinación directa con stakeholders no técnicos.',
      ],
      en: [
        'Led the institutional website: 400+ active users in the first months and direct coordination with non-technical stakeholders.',
      ],
    },
  },
  {
    title: { es: 'Desarrollador Web & Diseñador', en: 'Web Developer & Designer' },
    org: { es: 'El Edén Condominio Campestre', en: 'El Edén Condominio Campestre' },
    period: { es: '2023 — presente', en: '2023 — present' },
    bullets: {
      es: [
        'Sitio comercial con captura de leads que contribuyó a la venta de 4 de 16 terrenos disponibles; despliegue y operación en hosting propio con dominio y correo.',
      ],
      en: [
        'Commercial lead-capture site that contributed to selling 4 of 16 available lots; deployed and operated on its own hosting with domain and email.',
      ],
    },
  },
];

export const education: CvItem[] = [
  {
    title: { es: 'Pregrado en Ingeniería de Sistemas', en: 'B.Sc. in Systems Engineering' },
    org: {
      es: 'Universidad Autónoma de Bucaramanga (UNAB)',
      en: 'Universidad Autónoma de Bucaramanga (UNAB)',
    },
    period: { es: '2023 — 2027 (en curso, 7º semestre)', en: '2023 — 2027 (in progress, 7th semester)' },
    bullets: { es: [], en: [] },
  },
  {
    title: { es: 'Bootcamp de Inteligencia Artificial', en: 'Artificial Intelligence Bootcamp' },
    org: { es: 'TalentoTech — MinTIC', en: 'TalentoTech — MinTIC' },
    period: { es: '2024 — 2025', en: '2024 — 2025' },
    bullets: { es: [], en: [] },
  },
];

export const awards: L<string[]> = {
  es: [
    'Premio IngenioTIC 2022 — Concurso de desarrollo de software (app móvil de transporte universitario).',
    'Premio ULIBRO 2019 — Concurso de oratoria del Área Metropolitana.',
  ],
  en: [
    'IngenioTIC Award 2022 — Software development contest (university transport mobile app).',
    'ULIBRO Award 2019 — Metropolitan Area public-speaking contest.',
  ],
};

export const cvSkills: L<Record<string, string>> = {
  es: {
    Frontend: 'React 19, Next.js, Astro 5, TypeScript, Tailwind CSS',
    Backend: 'Node.js, Express, Hono, Laravel (PHP), Prisma, REST',
    'Bases de datos': 'PostgreSQL, Supabase (RLS), MySQL, triggers SQL',
    'Cloud & DevOps': 'Docker, Cloud Run, Vercel, GitHub Actions, AWS, Git',
    IA: 'Claude API, Gemini Live, Vertex AI (Imagen/Veo), OpenAI, RAG',
  },
  en: {
    Frontend: 'React 19, Next.js, Astro 5, TypeScript, Tailwind CSS',
    Backend: 'Node.js, Express, Hono, Laravel (PHP), Prisma, REST',
    Databases: 'PostgreSQL, Supabase (RLS), MySQL, SQL triggers',
    'Cloud & DevOps': 'Docker, Cloud Run, Vercel, GitHub Actions, AWS, Git',
    AI: 'Claude API, Gemini Live, Vertex AI (Imagen/Veo), OpenAI, RAG',
  },
};

export const languagesCv: L<string[]> = {
  es: ['Español: nativo', 'Inglés: avanzado (B2.2)'],
  en: ['Spanish: native', 'English: advanced (B2.2)'],
};
