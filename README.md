# santiagogomez — portafolio

Portafolio personal de **Santiago Gómez Acero** — desarrollador full-stack especializado en productos con IA. Bilingüe (ES/EN), 100% estático, construido con **Astro 5 + Tailwind CSS 4 + MDX**.

## Comandos

| Comando | Acción |
| --- | --- |
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Previsualiza el build |
| `npm run cv` | Regenera los PDFs del CV (`public/cv/*.pdf`) desde `/cv` y `/en/cv` — requiere `npm run build` previo |
| `npm run shots` | Regenera las portadas de proyectos (screenshots de deploys vivos + portadas generadas) |
| `node scripts/qa-screens.mjs` | Capturas de QA visual en `qa-screens/` |

## Estructura

- `src/data/` — **fuente única de verdad**: `cv.ts` (CV ES/EN, contacto), `skills.ts`, `experience.ts`. La home y la página `/cv` leen de aquí.
- `src/content/projects/{es,en}/` — casos de estudio en MDX (frontmatter validado con Zod en `src/content.config.ts`).
- `src/content/gallery/gallery.json` — tarjetas de la galería secundaria.
- `src/i18n/ui.ts` — todos los strings de interfaz ES/EN.
- `src/assets/projects/<slug>/cover.png` — portadas (regenerables con `npm run shots`).
- `src/assets/retrato.jpg` — *(opcional)* foto para "Sobre mí"; si no existe se muestra un monograma.

## Privacidad

LaunchPro y Lía son proyectos de cliente con repos privados: sus MDX tienen `private: true`, lo que oculta cualquier enlace a repo y muestra el badge de confidencialidad. Tras cada build se puede verificar:

```powershell
Get-ChildItem dist -Recurse -Include *.html | Select-String 'Rjvasquez'   # debe devolver nada
```

## Despliegue

El sitio es `dist/` plano — se publica igual en cualquier proveedor. **Antes de desplegar con dominio definitivo**: actualizar `site` en `astro.config.mjs` y la URL del sitemap en `public/robots.txt`.

- **Vercel** (recomendado): importar el repo en vercel.com → framework "Astro" → deploy. Cero configuración.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **Cloudflare Pages**: framework preset "Astro".
- **GitHub Pages**: publicar `dist/` con la action oficial `withastro/action`.
