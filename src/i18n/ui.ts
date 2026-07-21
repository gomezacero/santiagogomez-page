export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'meta.title': 'Santiago Gómez Acero — Desarrollador Full-Stack · Productos con IA',
    'meta.description':
      'Desarrollo productos web con IA que llegan a producción: plataformas de ads, coaches conversacionales, CMS editoriales y más. Bucaramanga, Colombia.',

    'nav.projects': 'Proyectos',
    'nav.skills': 'Skills',
    'nav.path': 'Trayectoria',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.cv': 'CV',

    'hero.kicker': 'Santiago Gómez Acero — Ingeniero de sistemas en formación · Full-stack en producción',
    'hero.title.1': 'Desarrollo productos web con IA',
    'hero.title.2': 'que llegan a producción.',
    'hero.meta': 'Bucaramanga, CO · GMT-5 · disponible',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.cv': 'Descargar CV',

    'featured.index': '01',
    'featured.title': 'Proyectos destacados',
    'featured.subtitle':
      'Seis casos de estudio: contexto, decisiones técnicas y resultados medibles.',
    'featured.readCase': 'Leer caso de estudio',
    'featured.private': 'Proyecto de cliente · repo privado',
    'featured.visit': 'Ver en producción',
    'featured.repo': 'Código',

    'gallery.index': '02',
    'gallery.title': 'Más proyectos',
    'gallery.subtitle': 'Sitios, herramientas y experimentos que también cuentan la historia.',

    'skills.index': '03',
    'skills.title': 'Skills',
    'skills.subtitle': 'Stacks con los que trabajo a diario.',
    'skills.soft.title': 'Más allá del código',
    'skills.soft.body':
      'Orador premiado (ULIBRO 2019) y desarrollador reconocido en IngenioTIC 2022. Lidero proyectos de punta a punta: levanto requisitos con stakeholders no técnicos, comunico decisiones con claridad y entrego bajo presión. Inglés B2.2 — trabajo cómodo en equipos internacionales.',

    'path.index': '04',
    'path.title': 'Trayectoria',

    'about.index': '05',
    'about.title': 'Sobre mí',
    'about.p1':
      'Soy Santiago, desarrollador full-stack de Bucaramanga, Colombia. En los últimos años pasé de construir sitios institucionales a diseñar y desplegar plataformas completas con IA: pipelines de generación de contenido multimodal, coaches conversacionales en tiempo real y sistemas de certificación en producción con CI/CD.',
    'about.p2':
      'Termino Ingeniería de Sistemas en la UNAB en 2027 mientras construyo para clientes reales. Me obsesiona que las cosas lleguen a producción: con tests, con métricas y con usuarios de verdad. Si algo de lo que viste te sirve para tu equipo o tu proyecto, hablemos.',

    'contact.index': '06',
    'contact.title': 'Contacto',
    'contact.recruiter.title': '¿Reclutas?',
    'contact.recruiter.body': 'CV en PDF (ES/EN) y perfil completo en LinkedIn.',
    'contact.recruiter.cv': 'Descargar CV (PDF)',
    'contact.recruiter.linkedin': 'Ver LinkedIn',
    'contact.freelance.title': '¿Tienes un proyecto?',
    'contact.freelance.body':
      'Cuéntame qué necesitas construir y te respondo con una propuesta concreta.',
    'contact.freelance.whatsapp': 'Escribir por WhatsApp',
    'contact.freelance.email': 'Copiar email',
    'contact.freelance.emailCopied': '¡Copiado!',
    'contact.whatsappMsg':
      'Hola Santiago, vi tu portafolio y me gustaría hablar sobre un proyecto.',

    'footer.built': 'hecho con Astro',
    'footer.coords': 'Bucaramanga · 7°08′N 73°07′W',

    'case.back': 'Volver a proyectos',
    'case.role': 'Rol',
    'case.year': 'Año',
    'case.stack': 'Stack',
    'case.next': 'Siguiente proyecto',

    'cv.download': 'Descargar PDF',
    'cv.print': 'Imprimir',

    'notfound.title': 'Página no encontrada',
    'notfound.body': 'La ruta que buscas no existe o fue movida.',
    'notfound.back': 'Volver al inicio',

    'theme.toggle': 'Cambiar tema',
    'lang.switch': 'Switch to English',
  },
  en: {
    'meta.title': 'Santiago Gómez Acero — Full-Stack Developer · AI Products',
    'meta.description':
      'I build AI-powered web products that ship: ad platforms, real-time conversational coaches, editorial CMSs and more. Bucaramanga, Colombia.',

    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.path': 'Journey',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cv': 'Resume',

    'hero.kicker': 'Santiago Gómez Acero — Systems engineering student · Full-stack in production',
    'hero.title.1': 'I build AI-powered web products',
    'hero.title.2': 'that ship.',
    'hero.meta': 'Bucaramanga, CO · GMT-5 · available',
    'hero.cta.projects': 'View projects',
    'hero.cta.cv': 'Download resume',

    'featured.index': '01',
    'featured.title': 'Featured projects',
    'featured.subtitle':
      'Six case studies: context, technical decisions and measurable results.',
    'featured.readCase': 'Read case study',
    'featured.private': 'Client project · private repo',
    'featured.visit': 'View live',
    'featured.repo': 'Code',

    'gallery.index': '02',
    'gallery.title': 'More projects',
    'gallery.subtitle': 'Sites, tools and experiments that also tell the story.',

    'skills.index': '03',
    'skills.title': 'Skills',
    'skills.subtitle': 'The stacks I work with every day.',
    'skills.soft.title': 'Beyond the code',
    'skills.soft.body':
      'Award-winning public speaker (ULIBRO 2019) and recognized developer at IngenioTIC 2022. I lead projects end to end: gathering requirements with non-technical stakeholders, communicating decisions clearly and delivering under pressure. English B2.2 — comfortable in international teams.',

    'path.index': '04',
    'path.title': 'Journey',

    'about.index': '05',
    'about.title': 'About me',
    'about.p1':
      "I'm Santiago, a full-stack developer from Bucaramanga, Colombia. Over the last few years I went from building institutional websites to designing and shipping full platforms with AI: multimodal content-generation pipelines, real-time conversational coaches and certification systems running in production with CI/CD.",
    'about.p2':
      "I finish my Systems Engineering degree at UNAB in 2027 while building for real clients. I'm obsessed with getting things to production: with tests, with metrics and with real users. If anything you saw here could help your team or your project, let's talk.",

    'contact.index': '06',
    'contact.title': 'Contact',
    'contact.recruiter.title': 'Hiring?',
    'contact.recruiter.body': 'Resume as PDF (ES/EN) and full profile on LinkedIn.',
    'contact.recruiter.cv': 'Download resume (PDF)',
    'contact.recruiter.linkedin': 'View LinkedIn',
    'contact.freelance.title': 'Have a project?',
    'contact.freelance.body':
      "Tell me what you need to build and I'll get back to you with a concrete proposal.",
    'contact.freelance.whatsapp': 'Chat on WhatsApp',
    'contact.freelance.email': 'Copy email',
    'contact.freelance.emailCopied': 'Copied!',
    'contact.whatsappMsg':
      "Hi Santiago, I saw your portfolio and I'd like to talk about a project.",

    'footer.built': 'built with Astro',
    'footer.coords': 'Bucaramanga · 7°08′N 73°07′W',

    'case.back': 'Back to projects',
    'case.role': 'Role',
    'case.year': 'Year',
    'case.stack': 'Stack',
    'case.next': 'Next project',

    'cv.download': 'Download PDF',
    'cv.print': 'Print',

    'notfound.title': 'Page not found',
    'notfound.body': 'The route you are looking for does not exist or was moved.',
    'notfound.back': 'Back home',

    'theme.toggle': 'Toggle theme',
    'lang.switch': 'Cambiar a español',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];
