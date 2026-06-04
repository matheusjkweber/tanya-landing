import { Check, Github, Sparkles } from "lucide-react";
import type { Messages } from "@/i18n/messages/en";
import { PRODUCT } from "@/lib/landing-data";
import { CopyInstall } from "./copy-install";
import { SectionHeader, SectionShell } from "./section-shell";
import { Reveal } from "./reveal";

/**
 * Free-forever callout. This app has no paid tier, so per the data rules we
 * substitute a single honest "$0" card instead of a multi-tier pricing grid.
 */
export function Pricing({ dict }: { dict: Messages }) {
  const { pricing, hero } = dict;

  return (
    <SectionShell id="pricing">
      <SectionHeader eyebrow={pricing.eyebrow} title={pricing.title} subtitle={pricing.subtitle} />

      <Reveal className="mx-auto mt-14 w-full max-w-xl">
        <div className="glass-panel terminal-shadow relative overflow-hidden rounded-2xl p-7 sm:p-9">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber/10 blur-3xl" />

          <div className="relative flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-amber/15 text-amber ring-1 ring-amber/30">
                  <Sparkles className="h-4 w-4" aria-hidden />
                </span>
                <span className="font-display text-lg font-semibold text-cream">{pricing.planName}</span>
              </div>
              <span className="rounded-full bg-verify/12 px-3 py-1 font-mono text-xs font-medium text-verify ring-1 ring-verify/25">
                Free forever
              </span>
            </div>

            <div className="flex items-end gap-2">
              <span className="font-display text-5xl font-bold tracking-tight text-cream">{pricing.price}</span>
              <span className="mb-2 text-sm text-muted">{pricing.priceNote}</span>
            </div>

            <ul className="flex flex-col gap-3">
              {pricing.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-cream-dim">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-verify" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <CopyInstall copiedLabel={hero.copied} runHint={hero.runHint} />

            <a
              href={PRODUCT.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-card border border-line px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-amber/40 hover:text-amber"
            >
              <Github className="h-4 w-4" aria-hidden />
              {pricing.secondary}
            </a>

            <p className="text-center text-xs leading-relaxed text-muted">{pricing.finePrint}</p>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
