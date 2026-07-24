import { tr } from './tr';
import { en } from './en';
import type { Dictionary } from './tr';

const dictionaries: Record<string, Dictionary> = { tr, en };

export function getDictionary(locale: string | undefined): Dictionary {
  return dictionaries[locale ?? 'tr'] ?? tr;
}

export type { Dictionary };
