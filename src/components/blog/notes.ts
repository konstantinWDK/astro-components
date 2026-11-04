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

/**
 * Extracts a [major, minor, patch] version tuple from note slug or title.
 */
function parseVersion(note: LocalizedNote): [number, number, number] | null {
  // Check slug: e.g. v0-5-1, v0-4-1
  const slugMatch = note.id.match(/^v?(\d+)[-_.](\d+)[-_.](\d+)/i);
  if (slugMatch) {
    return [parseInt(slugMatch[1], 10), parseInt(slugMatch[2], 10), parseInt(slugMatch[3], 10)];
  }
  // Check title: e.g. v0.5.1, v0.4.1
  const titleMatch = note.data.title.match(/v?(\d+)\.(\d+)\.(\d+)/i);
  if (titleMatch) {
    return [parseInt(titleMatch[1], 10), parseInt(titleMatch[2], 10), parseInt(titleMatch[3], 10)];
  }
  return null;
}

/**
 * Compares two notes so that higher versions and newer dates appear first.
 */
export function compareNotes(a: LocalizedNote, b: LocalizedNote): number {
  const vA = parseVersion(a);
  const vB = parseVersion(b);

  // If both have versions, sort descending by version number (e.g. 0.5.1 > 0.4.1 > 0.4.0)
  if (vA && vB) {
    if (vB[0] !== vA[0]) return vB[0] - vA[0];
    if (vB[1] !== vA[1]) return vB[1] - vA[1];
    if (vB[2] !== vA[2]) return vB[2] - vA[2];
  }

  // Compare by date descending
  const timeA = new Date(a.data.date).getTime();
  const timeB = new Date(b.data.date).getTime();
  if (timeB !== timeA) {
    return timeB - timeA;
  }

  // If dates are identical and only one has a version, the versioned post comes first
  if (vA && !vB) return -1;
  if (!vA && vB) return 1;

  return b.id.localeCompare(a.id);
}

/** Slugs of all notes, sorted newest/highest version first. */
export async function getNoteSlugs(): Promise<string[]> {
  const notes = await getNotes('en');
  return notes.map((p) => p.id);
}

/** Notes for a locale, newest first (by version and date), using the translation when one exists. */
export async function getNotes(lang: NoteLang = 'en'): Promise<LocalizedNote[]> {
  const all: NoteEntry[] = await getCollection('blog');
  const byId = new Map<string, NoteEntry>(all.map((p: NoteEntry) => [p.id, p]));
  return all
    .filter((p: NoteEntry) => !isTranslation(p.id))
    .map((base: NoteEntry): LocalizedNote => {
      const entry = (lang !== 'en' && byId.get(`${lang}/${base.id}`)) || base;
      return { id: base.id, data: entry.data, entry };
    })
    .sort(compareNotes);
}
