export const languages = ['es', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    siteTitle: 'Hermanos de cuento — historias para compartir',
    siteDescription:
      'Cuentos infantiles para leer en familia: historias bíblicas, relatos con valores y cuentos tradicionales.',
    navLabel: 'Navegación',
    langLabel: 'Idioma',
    nav: { stories: 'Cuentos', biblicos: 'Bíblicos', valores: 'Valores' },
    categories: { todos: 'Todos', biblicos: 'Bíblicos', valores: 'Valores', tradicionales: 'Tradicionales' },
    eyebrow: 'Un cuento, un momento juntos',
    heroTitle: 'Historias para abrir la',
    heroTitleEm: 'imaginación.',
    heroBody: 'Elige un cuento, acércate un poquito y deja que la lectura haga el resto.',
    heroAlt: 'Dos niños comparten un cuento bajo un árbol nocturno junto a un zorro y un conejo',
    explore: 'Explorar cuentos',
    catalogTitle: '¿Qué leemos hoy?',
    catalogBody: 'Historias cortas para disfrutar a vuestro ritmo.',
    search: 'Buscar un cuento…',
    filtersLabel: 'Filtrar cuentos',
    empty: 'No encontramos cuentos con esa búsqueda. Prueba otra palabra.',
    noteTitle: 'Un rincón para leer con calma',
    noteBody:
      'Los relatos están pensados para compartir en familia. Las historias bíblicas se presentan como relatos de tradición cristiana.',
    noteSmall: 'Lectura sin interrupciones ✨',
    footer: 'Pequeñas historias para grandes momentos · © 2026',
    read: 'Leer cuento →',
    min: 'MIN',
    minutes: 'MIN DE LECTURA',
    years: 'años',
    back: '← Volver a los cuentos',
    again: '← Elegir otro cuento',
    reflection: 'Para conversar después del cuento',
    theEnd: 'Fin',
    formatsLabel: 'Formatos del cuento',
    formatRead: '📖 Leer',
    formatWatch: '▶️ Ver',
    formatListen: '🎧 Escuchar',
    playVideo: 'Reproducir el vídeo',
    notFoundTitle: 'Este cuento se ha perdido',
    notFoundBody: 'No encontramos la página que buscas. Quizá se escondió en otro libro.',
  },
  en: {
    siteTitle: 'Hermanos de cuento — stories to share',
    siteDescription:
      'Children’s stories to read as a family: Bible stories, stories with values and classic tales.',
    navLabel: 'Navigation',
    langLabel: 'Language',
    nav: { stories: 'Stories', biblicos: 'Bible', valores: 'Values' },
    categories: { todos: 'All', biblicos: 'Bible', valores: 'Values', tradicionales: 'Classics' },
    eyebrow: 'One story, one moment together',
    heroTitle: 'Stories to spark the',
    heroTitleEm: 'imagination.',
    heroBody: 'Choose a story, snuggle up, and let reading do the rest.',
    heroAlt: 'Two children share a story under a night-time tree beside a fox and a rabbit',
    explore: 'Explore stories',
    catalogTitle: 'What shall we read today?',
    catalogBody: 'Short stories to enjoy at your own pace.',
    search: 'Search for a story…',
    filtersLabel: 'Filter stories',
    empty: 'No stories match your search. Try another word.',
    noteTitle: 'A quiet corner to read',
    noteBody:
      'These stories are made to share as a family. Bible stories are presented as part of the Christian tradition.',
    noteSmall: 'Reading without interruptions ✨',
    footer: 'Little stories for big moments · © 2026',
    read: 'Read story →',
    min: 'MIN',
    minutes: 'MIN READ',
    years: 'years',
    back: '← Back to stories',
    again: '← Choose another story',
    reflection: 'Talk about the story',
    theEnd: 'The End',
    formatsLabel: 'Story formats',
    formatRead: '📖 Read',
    formatWatch: '▶️ Watch',
    formatListen: '🎧 Listen',
    playVideo: 'Play the video',
    notFoundTitle: 'This story got lost',
    notFoundBody: 'We couldn’t find that page. Maybe it’s hiding in another book.',
  },
} as const;

export type Category = keyof (typeof ui)['es']['categories'];

/** Segmento de la URL de los cuentos en cada idioma. */
const storySegment: Record<Lang, string> = { es: 'cuentos', en: 'stories' };

/** Antepone la ruta base del sitio (BASE_PATH) a una ruta interna. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export const homeUrl = (lang: Lang) => url(`${lang}/`);
export const storyUrl = (lang: Lang, slug: string) => url(`${lang}/${storySegment[lang]}/${slug}/`);
export const categoryUrl = (lang: Lang, category: Category) =>
  url(`${lang}/?categoria=${category}#catalogo`);

export function ageLabel(lang: Lang, [min, max]: readonly [number, number]) {
  return `${min}–${max} ${ui[lang].years}`;
}
