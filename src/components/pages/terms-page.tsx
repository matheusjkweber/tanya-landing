import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageShell } from "./page-shell";

const LAST_UPDATED = "2026-05-31";

export function TermsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { terms } = dict;

  return (
    <PageShell dict={dict} locale={locale} title={terms.title} intro={terms.intro} updated={LAST_UPDATED}>
      <div className="flex flex-col gap-8">
        {terms.sections.map((section) => (
          <section key={section.h} className="flex flex-col gap-2">
            <h2 className="font-display text-lg font-semibold text-cream">{section.h}</h2>
            <p className="text-sm leading-relaxed text-cream-dim sm:text-base">{section.p}</p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
