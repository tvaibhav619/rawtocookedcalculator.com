import type { Locale } from '../ui';
import type { GuideContent } from './types';
import { enGuide } from './en';
import { esGuide } from './es';
import { frGuide } from './fr';
import { deGuide } from './de';
import { ptGuide } from './pt';
import { itGuide } from './it';

export type { GuideContent, TableRow, DonenessRow } from './types';

const GUIDES: Record<Locale, GuideContent> = {
  en: enGuide,
  es: esGuide,
  fr: frGuide,
  de: deGuide,
  pt: ptGuide,
  it: itGuide,
};

export function getGuide(locale: Locale): GuideContent {
  return GUIDES[locale] ?? GUIDES.en;
}
