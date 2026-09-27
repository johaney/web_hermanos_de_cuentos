import type { Lang } from './i18n/ui';

/**
 * Programa de Afiliados de Amazon por idioma.
 * `tag` es tu ID de afiliado de cada tienda (p. ej. "hermanosdecuento-21" en amazon.es).
 * Mientras esté vacío, los enlaces funcionan pero no generan comisión.
 */
export const affiliate: Record<Lang, { store: string; tag: string }> = {
  es: { store: 'https://www.amazon.es', tag: '' },
  en: { store: 'https://www.amazon.com', tag: '' },
};

export function bookUrl(lang: Lang, book: { asin?: string; url?: string }): string {
  if (book.url) return book.url;
  const { store, tag } = affiliate[lang];
  return `${store}/dp/${book.asin}${tag ? `?tag=${encodeURIComponent(tag)}` : ''}`;
}
