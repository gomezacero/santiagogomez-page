import type { Lang } from '@/i18n/ui';

export interface SkillGroup {
  title: Record<Lang, string>;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: { es: 'Frontend', en: 'Frontend' },
    items: [
      'React 19',
      'Next.js (App Router)',
      'Astro 5',
      'TypeScript',
      'Tailwind CSS 4',
      'Vite',
      'HTML · CSS · JS',
    ],
  },
  {
    title: { es: 'Backend', en: 'Backend' },
    items: [
      'Node.js',
      'Express',
      'Hono + OpenAPI 3.1',
      'Laravel (PHP)',
      'Prisma',
      'REST APIs',
      'JWT · Auth',
    ],
  },
  {
    title: { es: 'Bases de datos', en: 'Databases' },
    items: [
      'PostgreSQL',
      'Supabase (RLS, Realtime)',
      'MySQL',
      'Triggers · funciones SQL',
      'pgvector · pgmq',
      'IndexedDB (offline-first)',
    ],
  },
  {
    title: { es: 'Cloud & DevOps', en: 'Cloud & DevOps' },
    items: [
      'Docker',
      'Google Cloud Run',
      'Vercel',
      'GitHub Actions (CI/CD)',
      'AWS',
      'Lighthouse CI',
      'Git',
    ],
  },
  {
    title: { es: 'Inteligencia Artificial', en: 'Artificial Intelligence' },
    items: [
      'Claude API',
      'Gemini · Gemini Live',
      'Vertex AI (Imagen, Veo)',
      'OpenAI API',
      'Pipelines multimodales',
      'RAG · embeddings',
    ],
  },
];
