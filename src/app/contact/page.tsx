import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact-page";
import { buildMetadata } from "@/lib/metadata";
import { getDictionary } from "@/i18n/dictionaries";

export function generateMetadata(): Metadata {
  return { ...buildMetadata("en", "contact"), title: `${getDictionary("en").contact.title} — Tanya` };
}

export default function Page() {
  return <ContactPage locale="en" />;
}
