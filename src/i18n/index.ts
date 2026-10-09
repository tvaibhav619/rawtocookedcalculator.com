import { ui, LOCALES } from './ui';
import type { Locale, TranslationKey } from './ui';
import { getFoodName, getShortFoodName, getFoodPhrase, getFoodPhraseCapitalized } from './food-names';
import { getFoodFaqSet, getFoodFaqById } from './faq';
import type { FaqItem } from './faq';
import type { Food } from '../utils/foods';
import { getSourceKey } from '../utils/foods';

export { LOCALES, LOCALE_NAMES } from './ui';
export type { Locale, TranslationKey };
export type { FaqItem };

export function t(locale: Locale, key: TranslationKey): string {
  return (ui[locale] as Record<string, string>)[key] ?? (ui['en'] as Record<string, string>)[key] ?? key;
}

export function isValidLocale(lang: string): lang is Locale {
  return (LOCALES as readonly string[]).includes(lang);
}

export function getLangPrefix(locale: Locale): string {
  return locale === 'en' ? '' : `/${locale}`;
}

export function getLocalePath(locale: Locale, path: string): string {
  const prefix = getLangPrefix(locale);
  return prefix + (path.startsWith('/') ? path : `/${path}`);
}

/** The character that ends a sentence in this locale. All current locales use the ASCII full stop. */
export function sentenceEnd(_locale: Locale): string {
  return '.';
}

/** Locales that write decimals with a comma. */
const COMMA_DECIMAL: readonly string[] = ['es', 'fr', 'de', 'pt', 'it'];

/** Formats a numeric string with this locale's decimal separator. */
export function formatDecimal(locale: Locale, value: string): string {
  return COMMA_DECIMAL.includes(locale) ? value.replace('.', ',') : value;
}

/** Substitutes {placeholder} tokens in a translated string. */
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, name) =>
    name in vars ? String(vars[name]) : match
  );
}

/** `t` with placeholder substitution. */
export function tf(
  locale: Locale,
  key: TranslationKey,
  vars: Record<string, string | number>
): string {
  return fill(t(locale, key), vars);
}

// ── Food-derived, locale-aware strings ─────────────────────────────────────

/** The values every food-page template can interpolate. */
function foodVars(locale: Locale, food: Food): Record<string, string | number> {
  return {
    food: getFoodPhrase(locale, food.id),
    Food: getFoodPhraseCapitalized(locale, food.id),
    pct: food.yield_percent,
    loss: 100 - food.yield_percent,
    mult: formatDecimal(locale, (food.yield_percent / 100).toFixed(1)),
    // Foods no longer share one source: meat comes from the USDA yield table,
    // most produce and grains from Handbook 102, the rest from FoodData
    // Central (and soy chunks from IFCT). Templates must cite per food.
    source: getFoodSource(locale, food),
  };
}

/** "Loses 25% of its weight when cooked" / "Expands to 3.0× its dry weight…" */
export function getYieldDescription(locale: Locale, food: Food): string {
  return food.yield_percent > 100
    ? tf(locale, 'yield.expands', { n: formatDecimal(locale, (food.yield_percent / 100).toFixed(1)) })
    : tf(locale, 'yield.loses', { loss: 100 - food.yield_percent });
}

/** Translated data-source citation, or the estimate disclosure. */
export function getFoodSource(locale: Locale, food: Food): string {
  const key = getSourceKey(food);
  return key === 'estimate' ? t(locale, 'food.estimateSource') : t(locale, key);
}

/** The FAQ list for a food page, rendered in the requested locale. */
export function getFoodFaqItems(locale: Locale, food: Food): FaqItem[] {
  // English pages prefer a hand-written, food-specific question set when one
  // exists; every other locale, and any food without one, falls through to the
  // templated sets below.
  const perFood = getFoodFaqById(locale, food.id);
  if (perFood) return perFood;

  const set = getFoodFaqSet(locale);
  const vars = foodVars(locale, food);

  let items: FaqItem[];
  if (food.id === 'chicken-breast') {
    items = set.chicken;
  } else if (food.category === 'grains_pasta_legumes') {
    items = food.id === 'white-rice' ? [...set.grains, ...set.rice] : set.grains;
  } else {
    items = food.id === 'spinach' ? [...set.generic, ...set.spinach] : set.generic;
  }

  return items.map(({ q, a }) => ({ q: fill(q, vars), a: fill(a, vars) }));
}

// ── Food-page SEO metadata ─────────────────────────────────────────────────

/**
 * Title and meta description for a food page. The English strings are the
 * hand-tuned SEO copy the site already ranked on; other locales follow the
 * same shape with translated names.
 */
export function getFoodPageMeta(
  locale: Locale,
  food: Food
): { title: string; description: string } {
  const shortName = getShortFoodName(locale, food.id);
  const fullName = getFoodName(locale, food.id);
  const yieldDesc = getYieldDescription(locale, food);
  const multiplier = (food.yield_percent / 100).toFixed(1);

  if (locale === 'en') {
    const yieldStr =
      food.yield_percent > 100 ? `${multiplier}× expansion` : `${food.yield_percent}% yield`;
    
    if (food.id === 'chicken-breast') {
      return {
        title: 'Raw to Cooked Chicken Weight Calculator | USDA Conversion (72%)',
        description:
          'Calculate raw to cooked chicken weight accurately. Convert raw chicken to cooked weight or cooked to raw with official USDA 72% yield, protein macros, and charts.',
      };
    }

    if (food.category === 'meat_poultry_seafood') {
      return {
        title: `${shortName} Raw to Cooked Meat Weight Calculator | USDA ${yieldStr}`,
        description: `Convert raw to cooked meat weight for ${fullName} (${yieldDesc.toLowerCase()}). Accurate raw to cooked meat weight conversion calculator with USDA yields and macros.`,
      };
    }

    return {
      title: `${shortName} Raw to Cooked Weight Calculator | USDA ${yieldStr}`,
      description:
        food.yield_percent > 100
          ? `${fullName} expands to ${multiplier}× its dry weight when cooked. Enter any amount to get the cooked weight plus calories, protein, carbs, and fat — USDA data.`
          : `${fullName} has a ${food.yield_percent}% cooking yield (${yieldDesc.toLowerCase()}). Enter any weight to convert raw ↔ cooked and get full macros — calories, protein, carbs, and fat.`,
    };
  }

  return {
    title: `${shortName} ${t(locale, 'food.rawToCookedCalc')} | USDA ${food.yield_percent}%`,
    description: `${fullName} — ${yieldDesc}${sentenceEnd(locale)} ${t(locale, 'page.homeDescription')}`,
  };
}
