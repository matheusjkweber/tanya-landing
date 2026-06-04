import { Github, Mail } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PRODUCT } from "@/lib/landing-data";
import { PageShell } from "./page-shell";
import { ContactForm } from "./contact-form";

export function ContactPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { contact } = dict;

  return (
    <PageShell dict={dict} locale={locale} title={contact.title} intro={contact.intro}>
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <ContactForm dict={dict} />

        <div className="flex flex-col gap-4">
          <a
            href={`mailto:${PRODUCT.contactEmail}`}
            className="glass-panel flex items-start gap-4 rounded-2xl p-5 transition-colors hover:border-amber/40"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber/12 text-amber ring-1 ring-amber/25">
              <Mail className="h-5 w-5" aria-hidden />
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-sm text-muted">{contact.directLabel}</span>
              <span className="font-display text-base font-semibold text-cream">{PRODUCT.contactEmail}</span>
            </span>
          </a>

          <a
            href={PRODUCT.github}
            target="_blank"
            rel="noreferrer"
            className="glass-panel flex items-start gap-4 rounded-2xl p-5 transition-colors hover:border-amber/40"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cream/8 text-cream ring-1 ring-line">
              <Github className="h-5 w-5" aria-hidden />
            </span>
            <span className="flex flex-col gap-1">
              <span className="font-display text-base font-semibold text-cream">{contact.githubLabel}</span>
              <span className="text-sm leading-relaxed text-cream-dim">{contact.githubDesc}</span>
            </span>
          </a>
        </div>
      </div>
    </PageShell>
  );
}
