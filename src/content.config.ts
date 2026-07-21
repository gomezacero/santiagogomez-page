import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      order: z.number(),
      year: z.string(),
      role: z.string(),
      kind: z.enum(['cliente-privado', 'produccion', 'personal', 'academico']),
      stack: z.array(z.string()),
      highlights: z.array(z.object({ metric: z.string(), label: z.string() })),
      links: z
        .object({
          live: z.string().url().optional(),
          repo: z.string().url().optional(),
        })
        .default({}),
      private: z.boolean().default(false),
      cover: image(),
    }),
});

const gallery = defineCollection({
  loader: file('./src/content/gallery/gallery.json'),
  schema: z.object({
    id: z.string(),
    lang: z.enum(['es', 'en']),
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
  }),
});

export const collections = { projects, gallery };
