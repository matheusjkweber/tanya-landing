export const LOCALES = ["en", "pt-BR", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

// The default locale is served from the unprefixed root ("/"). The other two
// locales live under /pt-BR and /es. We still expose /en as an explicit alias.
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  "pt-BR": "PT-BR",
  es: "ES",
};

export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  "pt-BR": "pt-BR",
  es: "es",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Prefix a path with the locale segment, leaving the default locale unprefixed. */
export function localizedPath(locale: Locale, path = ""): string {
  const clean = path.startsWith("/") ? path : path ? `/${path}` : "";
  if (locale === DEFAULT_LOCALE) return clean || "/";
  return `/${locale}${clean}`;
}
