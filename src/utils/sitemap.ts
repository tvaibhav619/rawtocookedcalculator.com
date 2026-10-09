import { SLUG_TO_ID } from './foods';
import { LOCALES } from '../i18n';
import { foodPageHasFullContent } from '../i18n/food-content';

/**
 * Shared sitemap generation. Consumed by:
 *   - src/pages/sitemap.xml.ts          full URL set (every locale)
 *   - src/pages/sitemap-[locale].xml.ts one URL set per locale
 *   - src/pages/sitemap-index.xml.ts    index pointing at the per-locale files
 */

export const BASE = 'https://rawtocookedcalculator.com';

// Bump this (ISO YYYY-MM-DD) whenever site content changes materially.
export const LASTMOD = '2026-09-09';

export type ChangeFreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

/** A page that exists in every locale, keyed by its path after the locale prefix. */
interface Page {
  /** Path after the locale prefix; '' is the homepage. */
  path: string;
  /** Priority for the English (root) URL. */
  priority: string;
  /** Priority for each localized copy. */
  localizedPriority: string;
  changefreq: ChangeFreq;
  /** English-only page: emit just the root URL, no localized copies. */
  enOnly?: boolean;
  /**
   * Restrict this page to a subset of locales — both the emitted `<url>`s and
   * the hreflang alternate block. Used for food pages, whose localized copies
   * are `noindex`'d (thin templated content) until translated. Omit to mean
   * "every locale".
   */
  locales?: readonly string[];
}

/** Absolute URL for `path` in `locale`, matching the canonical URLs the pages emit. */
function locURL(locale: string, path: string): string {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const suffix = path === '' ? '/' : `/${path}`;
  return `${BASE}${prefix}${suffix}`;
}

function urlEntry(
  loc: string,
  priority: string,
  changefreq: ChangeFreq,
  alternates: string
): string {
  return `  <url>
    <loc>${loc}</loc>
${alternates}
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function pages(): Page[] {
  const foodSlugs = Object.keys(SLUG_TO_ID);

  return [
    // Homepage — highest value page on the site
    { path: '', priority: '1.0', localizedPriority: '0.6', changefreq: 'weekly' },

    // Food calculator pages (chicken is the flagship). Localized copies are
    // noindex'd until their long-form content is translated, so the sitemap
    // lists only the locales that carry the full content.
    ...foodSlugs.map((slug) => ({
      path: slug,
      priority: slug === 'chicken' ? '0.9' : '0.8',
      localizedPriority: '0.5',
      changefreq: 'monthly' as ChangeFreq,
      locales: LOCALES.filter(foodPageHasFullContent),
    })),

    // Blog / guides
    { path: 'blog', priority: '0.8', localizedPriority: '0.5', changefreq: 'weekly', enOnly: true },
    { path: 'blog/how-do-i-convert-raw-weight-to-cooked-weight', priority: '0.8', localizedPriority: '0.5', changefreq: 'monthly', enOnly: true },

    // Company / info pages
    { path: 'about', priority: '0.4', localizedPriority: '0.3', changefreq: 'yearly' },
    { path: 'methodology', priority: '0.4', localizedPriority: '0.3', changefreq: 'yearly', enOnly: true },
    { path: 'contact', priority: '0.4', localizedPriority: '0.3', changefreq: 'yearly' },
    { path: 'privacy', priority: '0.3', localizedPriority: '0.2', changefreq: 'yearly' },
    { path: 'terms', priority: '0.3', localizedPriority: '0.2', changefreq: 'yearly' },
  ];
}

/**
 * `<url>` entries for the sitemap. Pass a locale to emit only that locale's
 * URLs (each still carries the full hreflang alternate block, per the spec);
 * omit it for every locale.
 */
export function urlEntries(onlyLocale?: string): string {
  const locales = onlyLocale ? [onlyLocale] : [...LOCALES];

  return pages()
    .flatMap((page) => {
      // English-only pages: a single <url>, no alternates beyond x-default → self.
      if (page.enOnly) {
        if (onlyLocale && onlyLocale !== 'en') return [];
        const alternates = [
          `    <xhtml:link rel="alternate" hreflang="en" href="${locURL('en', page.path)}"/>`,
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${locURL('en', page.path)}"/>`,
        ].join('\n');
        return [urlEntry(locURL('en', page.path), page.priority, page.changefreq, alternates)];
      }

      // A page may be limited to a subset of locales (e.g. food pages, whose
      // other locales are noindex'd until translated).
      const pageLocales = page.locales ?? LOCALES;

      // Every locale variant of a page shares the same hreflang alternate block.
      const alternates = [
        ...pageLocales.map(
          (l) =>
            `    <xhtml:link rel="alternate" hreflang="${l}" href="${locURL(l, page.path)}"/>`
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${locURL('en', page.path)}"/>`,
      ].join('\n');

      return locales
        .filter((l) => pageLocales.includes(l))
        .map((l) =>
          urlEntry(
            locURL(l, page.path),
            l === 'en' ? page.priority : page.localizedPriority,
            page.changefreq,
            alternates
          )
        );
    })
    .join('\n');
}

/** Wrap `<url>` entries in a complete urlset document. */
export function urlset(entries: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>`;
}

/** The sitemap index: one `<sitemap>` per locale file. */
export function sitemapIndex(): string {
  const entries = LOCALES.map(
    (l) => `  <sitemap>
    <loc>${BASE}/sitemap-${l}.xml</loc>
    <lastmod>${LASTMOD}</lastmod>
  </sitemap>`
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;
}

export const XML_HEADERS = {
  'Content-Type': 'application/xml; charset=utf-8',
} as const;
