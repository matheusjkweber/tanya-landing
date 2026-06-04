import type { Locale } from "./config";
import en, { type Messages } from "./messages/en";
import ptBR from "./messages/pt-BR";
import es from "./messages/es";

const DICTS: Record<Locale, Messages> = {
  en,
  "pt-BR": ptBR,
  es,
};

export function getDictionary(locale: Locale): Messages {
  return DICTS[locale] ?? en;
}

export type { Messages };
