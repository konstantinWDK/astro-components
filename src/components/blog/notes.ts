// src/components/blog/notes.ts
// Localized notes: an English note lives at `src/content/blog/<slug>.md`;
// its translations live at `src/content/blog/<lang>/<slug>.md`. Every locale
// shares the same URL slug and falls back to English when a translation is missing.
import { getCollection, type CollectionEntry } from 'astro:content';

export type NoteLang = 'en' | 'es' | 'ru';
const TRANSLATED: NoteLang[] = ['es', 'ru'];

export interface LocalizedNote {
  /** URL slug, identical across locales. */
  id: string;
  data: CollectionEntry<'blog'>['data'];
  entry: CollectionEntry<'blog'>;
}

type NoteEntry = CollectionEntry<'blog'>;

const isTranslation = (id: string) => TRANSLATED.some((l) => id.startsWith(`${l}/`));

/** Slugs of all notes (one per note, regardless of how many translations it has). */
export async function getNoteSlugs(): Promise<string[]> {
  const all: NoteEntry[] = await getCollection('blog');
  return all.filter((p: NoteEntry) => !isTranslation(p.id)).map((p: NoteEntry) => p.id);
}

/** Notes for a locale, newest first, using the translation when one exists. */
export async function getNotes(lang: NoteLang = 'en'): Promise<LocalizedNote[]> {
  const all: NoteEntry[] = await getCollection('blog');
  const byId = new Map<string, NoteEntry>(all.map((p: NoteEntry) => [p.id, p]));
  return all
    .filter((p: NoteEntry) => !isTranslation(p.id))
    .map((base: NoteEntry): LocalizedNote => {
      const entry = (lang !== 'en' && byId.get(`${lang}/${base.id}`)) || base;
      return { id: base.id, data: entry.data, entry };
    })
    .sort((a: LocalizedNote, b: LocalizedNote) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}
