import * as Accordion from "@radix-ui/react-accordion";
import { Mail, Plus } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PRODUCT } from "@/lib/landing-data";
import { PageShell } from "./page-shell";

export function SupportPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { support } = dict;

  return (
    <PageShell dict={dict} locale={locale} title={support.title} intro={support.intro}>
      <a
        href={`mailto:${PRODUCT.contactEmail}`}
        className="glass-panel flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-amber/40"
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber/12 text-amber ring-1 ring-amber/25">
          <Mail className="h-5 w-5" aria-hidden />
        </span>
        <span className="flex flex-col">
          <span className="text-sm text-muted">{support.primaryChannel}</span>
          <span className="font-display text-base font-semibold text-cream">{PRODUCT.contactEmail}</span>
        </span>
      </a>

      <h2 className="mt-12 font-display text-xl font-semibold text-cream">{support.faqTitle}</h2>
      <Accordion.Root type="single" collapsible className="mt-4 flex flex-col gap-3">
        {support.items.map((item, i) => (
          <Accordion.Item
            key={i}
            value={`item-${i}`}
            className="glass-panel overflow-hidden rounded-2xl data-[state=open]:border-amber/30"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                <span className="font-display text-base font-semibold text-cream">{item.q}</span>
                <Plus
                  className="h-5 w-5 shrink-0 text-amber transition-transform duration-300 group-data-[state=open]:rotate-45"
                  aria-hidden
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=closed]:animate-acc-up data-[state=open]:animate-acc-down">
              <p className="px-5 pb-4 text-sm leading-relaxed text-cream-dim">{item.a}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </PageShell>
  );
}
