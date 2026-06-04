import type { Metadata } from "next";
import { TermsPage } from "@/components/pages/terms-page";
import { buildMetadata } from "@/lib/metadata";
import { getDictionary } from "@/i18n/dictionaries";

export function generateMetadata(): Metadata {
  return { ...buildMetadata("en", "terms"), title: `${getDictionary("en").terms.title} — Tanya` };
}

export default function Page() {
  return <TermsPage locale="en" />;
}
