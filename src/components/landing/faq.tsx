import { Plus } from "lucide-react";
import type { Messages } from "@/i18n/messages/en";
import { FAQ_KEYS } from "@/lib/landing-data";
import { SectionHeader, SectionShell } from "./section-shell";

/**
 * FAQ built on the native <details>/<summary> disclosure element — zero
 * JavaScript. It opens and closes purely in the browser, so it works even when
 * React never hydrates (the failure mode a preview proxy was causing by
 * corrupting the inline hydration payload). No "use client", no Radix.
 */
export function Faq({ dict }: { dict: Messages }) {
  const { faq } = dict;

  return (
    <SectionShell id="faq">
      <SectionHeader eyebrow={faq.eyebrow} title={faq.title} subtitle={faq.subtitle} />

      <div className="mx-auto mt-12 flex w-full max-w-3xl flex-col gap-3">
        {FAQ_KEYS.map((key) => {
          const item = faq.items[key];
          return (
            <details
              key={key}
              name="faq"
              className="faq-item glass-panel overflow-hidden rounded-2xl"
            >
              <summary className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6">
                <span className="font-display text-base font-semibold text-cream sm:text-lg">
                  {item.q}
                </span>
                <Plus
                  className="faq-plus h-5 w-5 shrink-0 text-amber transition-transform duration-300"
                  aria-hidden
                />
              </summary>
              <p className="faq-answer px-5 pb-5 text-sm leading-relaxed text-cream-dim sm:px-6 sm:text-base">
                {item.a}
              </p>
            </details>
          );
        })}
      </div>
    </SectionShell>
  );
}
