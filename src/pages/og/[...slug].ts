import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const projects = await getCollection('projects');

const pages: Record<string, { title: string; description: string }> = {
  'es/home': {
    title: 'Santiago Gómez Acero',
    description: 'Convierto ideas en realidades digitales.',
  },
  'en/home': {
    title: 'Santiago Gómez Acero',
    description: 'I turn ideas into digital realities.',
  },
  'es/cv': { title: 'CV — Santiago Gómez Acero', description: 'Ingeniero de Producto Digital · IA' },
  'en/cv': { title: 'Resume — Santiago Gómez Acero', description: 'Digital Product Engineer · AI' },
};

for (const project of projects) {
  const [lang, slug] = project.id.split('/');
  const prefix = lang === 'es' ? 'es/proyectos' : 'en/projects';
  pages[`${prefix}/${slug}`] = {
    title: project.data.title,
    description: project.data.tagline,
  };
}

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'slug',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[12, 14, 17]],
    border: { color: [224, 120, 74], width: 14, side: 'inline-start' },
    padding: 72,
    font: {
      title: { size: 64, families: ['Inter'], weight: 'SemiBold', color: [233, 234, 236] },
      description: { size: 30, families: ['Inter'], color: [154, 160, 168], lineHeight: 1.4 },
    },
  }),
});
