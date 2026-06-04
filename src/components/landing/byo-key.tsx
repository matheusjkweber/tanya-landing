import { ArrowUpRight, Gauge, KeyRound } from "lucide-react";
import type { Messages } from "@/i18n/messages/en";
import { PRODUCT } from "@/lib/landing-data";
import { SectionHeader, SectionShell } from "./section-shell";
import { Reveal } from "./reveal";

/**
 * "Bring your own key" — the one honest cost of running Tanya. Tanya itself is
 * free; users mint a DeepSeek API key and pay DeepSeek directly for tokens.
 * The pitch: DeepSeek is among the cheapest models with frontier-class scores.
 */
export function ByoKey({ dict }: { dict: Messages }) {
  const { byoKey } = dict;

  return (
    <SectionShell id="deepseek" className="bg-ink-1/40">
      <SectionHeader eyebrow={byoKey.eyebrow} title={byoKey.title} subtitle={byoKey.subtitle} />

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-stretch">
        {/* Steps to get a key */}
        <Reveal className="min-w-0">
          <ol className="glass-panel flex h-full flex-col gap-5 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-amber/15 text-amber ring-1 ring-amber/30">
                <KeyRound className="h-4 w-4" aria-hidden />
              </span>
              <span className="font-display text-lg font-semibold text-cream">{byoKey.stepsTitle}</span>
            </div>

            <div className="flex flex-col gap-4">
              {byoKey.steps.map((step, i) => (
                <div key={step.title} className="flex items-start gap-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-ink-3 font-mono text-xs font-semibold text-amber ring-1 ring-line">
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-cream">{step.title}</span>
                    <span className="text-sm leading-relaxed text-cream-dim">{step.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={PRODUCT.deepseekKeys}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-card bg-amber px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-amber-bright sm:w-auto sm:self-start"
            >
              {byoKey.cta}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </ol>
        </Reveal>

        {/* Why DeepSeek — benchmark + cost callout */}
        <Reveal delay={0.08} className="min-w-0">
          <div className="glass-panel relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-verify/10 blur-3xl" />

            <div className="relative flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-verify/12 text-verify ring-1 ring-verify/25">
                <Gauge className="h-4 w-4" aria-hidden />
              </span>
              <span className="font-display text-lg font-semibold text-cream">{byoKey.benchTitle}</span>
            </div>

            <p className="relative text-sm leading-relaxed text-cream-dim">{byoKey.benchDesc}</p>

            <dl className="relative mt-auto grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-line/40 sm:grid-cols-3">
              {byoKey.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1 bg-ink-1/90 p-4">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-base font-bold tracking-tight text-cream">{stat.value}</dd>
                  <span className="text-xs leading-snug text-muted">{stat.label}</span>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
