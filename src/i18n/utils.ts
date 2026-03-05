import pl from './pl.json';
import en from './en.json';

const translations = { pl, en } as const;

export type Lang = keyof typeof translations;
export const defaultLang: Lang = 'pl';
export const languages = { pl: 'PL', en: 'EN' } as const;

export function t(lang: Lang, key: string): string {
  const keys = key.split('.');
  let value: unknown = translations[lang];
  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
  }
  return (value as string) ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, base, langSegment] = url.pathname.split('/');
  // If base path is "portfolio", check next segment
  if (base === 'portfolio' && langSegment === 'en') return 'en';
  if (base === 'en') return 'en';
  return defaultLang;
}

export function getLocalizedPath(lang: Lang, base: string): string {
  const prefix = base.endsWith('/') ? base : base + '/';
  return lang === 'en' ? `${prefix}en/` : prefix;
}
