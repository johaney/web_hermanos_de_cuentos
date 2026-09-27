import { getCollection, type CollectionEntry } from 'astro:content';
import { languages, type Lang } from '../i18n/ui';

export type StoryEntry = CollectionEntry<'cuentos'>;

/** Un cuento con su clave (nombre de la carpeta) y sus versiones por idioma. */
export interface Story {
  key: string;
  versions: Record<Lang, StoryEntry>;
}

const SHARED_FIELDS = ['categoria', 'edad', 'minutos', 'emoji', 'color', 'orden'] as const;

let cache: Promise<Story[]> | undefined;

/** Todos los cuentos ordenados por `orden`, validando que ambos idiomas existan y coincidan. */
export function getStories(): Promise<Story[]> {
  cache ??= loadStories();
  return cache;
}

async function loadStories(): Promise<Story[]> {
  const entries = await getCollection('cuentos');
  const byKey = new Map<string, Partial<Record<Lang, StoryEntry>>>();
  for (const entry of entries) {
    const [key, lang] = entry.id.split('/') as [string, Lang];
    byKey.set(key, { ...byKey.get(key), [lang]: entry });
  }

  const stories: Story[] = [];
  for (const [key, versions] of byKey) {
    const missing = languages.filter((lang) => !versions[lang]);
    if (missing.length) throw new Error(`El cuento "${key}" no tiene versión en: ${missing.join(', ')}`);
    const { es, en } = versions as Record<Lang, StoryEntry>;
    for (const field of SHARED_FIELDS) {
      if (JSON.stringify(es.data[field]) !== JSON.stringify(en.data[field])) {
        throw new Error(`El cuento "${key}" tiene distinto "${field}" en es.md y en.md`);
      }
    }
    stories.push({ key, versions: { es, en } });
  }

  for (const lang of languages) {
    const slugs = stories.map((s) => s.versions[lang].data.slug);
    const duplicate = slugs.find((slug, i) => slugs.indexOf(slug) !== i);
    if (duplicate) throw new Error(`Slug repetido en "${lang}": ${duplicate}`);
  }

  return stories.sort((a, b) => a.versions.es.data.orden - b.versions.es.data.orden);
}
