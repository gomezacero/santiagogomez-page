import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Prefija la ruta según el idioma. localizePath('es', '/cv') → '/cv'; ('en','/cv') → '/en/cv' */
export function localizePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/en${clean === '/' ? '' : clean}`;
}

/** Ruta equivalente en el otro idioma, para el LangSwitcher. */
export function alternatePath(url: URL): { lang: Lang; path: string } {
  const lang = getLangFromUrl(url);
  const path = url.pathname;
  if (lang === 'en') {
    const stripped = path.replace(/^\/en/, '') || '/';
    return { lang: 'es', path: stripped.replace('/projects/', '/proyectos/') };
  }
  return { lang: 'en', path: `/en${path === '/' ? '' : path}`.replace('/proyectos/', '/projects/') };
}
