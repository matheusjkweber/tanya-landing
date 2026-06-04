import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { HTML_LANG, LOCALES, localizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const SITE_URL = "https://tanyahq.com";
const OG_IMAGE = "/images/generated/og-tanya.png";

export function buildMetadata(locale: Locale, path = ""): Metadata {
  const dict = getDictionary(locale);
  const url = `${SITE_URL}${localizedPath(locale, path)}`;

  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[HTML_LANG[l]] = `${SITE_URL}${localizedPath(l, path)}`;
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: "Tanya",
    keywords: [
      "coding agent",
      "terminal",
      "CLI",
      "DeepSeek",
      "DeepSeek coding agent",
      "OpenAI-compatible",
      "Claude Code alternative",
      "open source",
      "free coding agent",
      "AI pair programmer",
    ],
    authors: [{ name: "Tanya" }],
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      url,
      siteName: "Tanya",
      title: dict.meta.title,
      description: dict.meta.description,
      locale: HTML_LANG[locale],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: dict.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}
