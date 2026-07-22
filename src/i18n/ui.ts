export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'meta.title': 'Santiago Gómez Acero — Ingeniero de Producto Digital · IA',
    'meta.description':
      'Convierto ideas en realidades digitales: plataformas con IA, productos SaaS y soluciones a la medida para negocios que quieren crecer. Bucaramanga, Colombia.',

    'nav.projects': 'Proyectos',
    'nav.skills': 'Skills',
    'nav.path': 'Trayectoria',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.cv': 'CV',
    'nav.menu.open': 'Abrir menú',
    'nav.menu.close': 'Cerrar menú',

    'hero.kicker': 'Santiago Gómez Acero — Ingeniero de producto digital · IA',
    'hero.title.1': 'Convierto ideas en',
    'hero.title.2': 'realidades digitales.',
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

    'ai.index': '04',
    'ai.title': 'IA en mi flujo de trabajo',
    'ai.subtitle':
      'No solo construyo productos con IA — construyo con IA. Agentes de código, ecosistema multi-modelo y modelos open source son parte de mi caja de herramientas diaria.',
    'ai.c1.title': 'Agentes de código',
    'ai.c1.body':
      'Claude Code y Codex como pares de programación: dirijo agentes que escriben, prueban y refactorizan bajo mi criterio. Multiplican la velocidad de entrega sin sacrificar calidad — cada línea pasa por mi revisión.',
    'ai.c2.title': 'Ecosistema multi-modelo',
    'ai.c2.body':
      'Claude, GPT, Gemini: cada tarea tiene su modelo ideal según razonamiento, multimodalidad, ventana de contexto y costo. Saber elegir es parte del oficio.',
    'ai.c3.title': 'Open source y local',
    'ai.c3.body':
      'Llama, Whisper y modelos locales vía Ollama cuando el caso pide soberanía de datos o costo cero por token. La IA no siempre vive en una API de pago.',
    'ai.c4.title': 'De herramienta a producto',
    'ai.c4.body':
      'Lo que aprendo usando estas herramientas se convierte en features: pipelines de generación, agentes, RAG y automatizaciones que ya viven en los proyectos de arriba.',

    'path.index': '05',
    'path.title': 'Trayectoria',

    'about.index': '06',
    'about.title': 'Sobre mí',
    'about.p1':
      'Soy Santiago, ingeniero de producto digital de Bucaramanga, Colombia. En los últimos años pasé de construir sitios institucionales a idear, diseñar y lanzar productos completos con IA: plataformas de generación de contenido multimodal, coaches conversacionales en tiempo real y sistemas de certificación que hoy usan empresas reales.',
    'about.p2':
      'Termino Ingeniería de Sistemas en la UNAB en 2027 mientras construyo para clientes reales. No me conformo con que algo funcione: me obsesiona que genere resultados, con usuarios de verdad, métricas y calidad medible. Si tienes una idea que quieres volver realidad, hablemos.',

    'contact.index': '07',
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
    'meta.title': 'Santiago Gómez Acero — Digital Product Engineer · AI',
    'meta.description':
      'I turn ideas into digital realities: AI platforms, SaaS products and tailor-made solutions for businesses that want to grow. Bucaramanga, Colombia.',

    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.path': 'Journey',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cv': 'Resume',
    'nav.menu.open': 'Open menu',
    'nav.menu.close': 'Close menu',

    'hero.kicker': 'Santiago Gómez Acero — Digital product engineer · AI',
    'hero.title.1': 'I turn ideas into',
    'hero.title.2': 'digital realities.',
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

    'ai.index': '04',
    'ai.title': 'AI in my workflow',
    'ai.subtitle':
      "I don't just build AI products — I build with AI. Coding agents, a multi-model ecosystem and open-source models are part of my everyday toolbox.",
    'ai.c1.title': 'Coding agents',
    'ai.c1.body':
      'Claude Code and Codex as pair programmers: I direct agents that write, test and refactor under my judgement. They multiply delivery speed without sacrificing quality — every line goes through my review.',
    'ai.c2.title': 'Multi-model ecosystem',
    'ai.c2.body':
      'Claude, GPT, Gemini: every task has its ideal model depending on reasoning, multimodality, context window and cost. Knowing how to choose is part of the craft.',
    'ai.c3.title': 'Open source & local',
    'ai.c3.body':
      'Llama, Whisper and local models via Ollama when the case demands data sovereignty or zero cost per token. AI does not always live behind a paid API.',
    'ai.c4.title': 'From tool to product',
    'ai.c4.body':
      'What I learn using these tools becomes features: generation pipelines, agents, RAG and automations that already live in the projects above.',

    'path.index': '05',
    'path.title': 'Journey',

    'about.index': '06',
    'about.title': 'About me',
    'about.p1':
      "I'm Santiago, a digital product engineer from Bucaramanga, Colombia. Over the last few years I went from building institutional websites to conceiving, designing and launching complete AI products: multimodal content-generation platforms, real-time conversational coaches and certification systems that real companies use today.",
    'about.p2':
      "I finish my Systems Engineering degree at UNAB in 2027 while building for real clients. I'm not satisfied with something merely working: I'm obsessed with it delivering results — real users, metrics and measurable quality. If you have an idea you want to turn into reality, let's talk.",

    'contact.index': '07',
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
