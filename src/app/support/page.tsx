import type { Metadata } from "next";
import { SupportPage } from "@/components/pages/support-page";
import { buildMetadata } from "@/lib/metadata";
import { getDictionary } from "@/i18n/dictionaries";

export function generateMetadata(): Metadata {
  return { ...buildMetadata("en", "support"), title: `${getDictionary("en").support.title} — Tanya` };
}

export default function Page() {
  return <SupportPage locale="en" />;
}
