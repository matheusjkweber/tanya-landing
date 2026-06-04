import { GitFork, Github, HeartHandshake, Scale } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Messages } from "@/i18n/messages/en";
import { PRODUCT } from "@/lib/landing-data";
import { SectionShell } from "./section-shell";
import { Reveal } from "./reveal";

const ICONS: LucideIcon[] = [Scale, GitFork, HeartHandshake];

/**
 * Open-source banner. Replaces the old provider marquee: Tanya is free,
 * always free, and anyone can contribute on GitHub.
 */
export function OpenSource({ dict }: { dict: Messages }) {
  const { openSource } = dict;

  return (
    <SectionShell id="open-source" className="border-y border-line/60 bg-ink-1/40">
      <Reveal>
        <div className="glass-panel terminal-shadow relative overflow-hidden rounded-3xl p-7 sm:p-10 lg:p-12">
          {/* Real brand asset reused as ambient texture */}
          <img
            src="/images/generated/hero-control-room.png"
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.14] mix-blend-screen"
          />
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-verify/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-verify/12 px-3.5 py-1.5 font-mono text-xs font-medium text-verify ring-1 ring-verify/25">
                <span className="h-2 w-2 rounded-full bg-verify" />
                {openSource.badge}
              </span>

              <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-cream sm:text-4xl">
                {openSource.title}
              </h2>

              <p className="max-w-lg text-base leading-relaxed text-cream-dim sm:text-lg">
                {openSource.subtitle}
              </p>

              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <a
                  href={PRODUCT.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-card bg-amber px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-amber-bright sm:w-auto"
                >
                  <Github className="h-4 w-4" aria-hidden />
                  {openSource.ctaPrimary}
                </a>
                <a
                  href={`${PRODUCT.github}#contributing`}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel inline-flex w-full items-center justify-center gap-2 rounded-card px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:text-amber sm:w-auto"
                >
                  <GitFork className="h-4 w-4" aria-hidden />
                  {openSource.ctaSecondary}
                </a>
              </div>
            </div>

            <ul className="grid gap-3 sm:grid-cols-1">
              {openSource.points.map((point, i) => {
                const Icon = ICONS[i] ?? Scale;
                return (
                  <li
                    key={point.title}
                    className="flex items-start gap-4 rounded-2xl border border-line/70 bg-ink/40 p-4 sm:p-5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber/12 text-amber ring-1 ring-amber/25">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-display text-base font-semibold text-cream">{point.title}</h3>
                      <p className="text-sm leading-relaxed text-cream-dim">{point.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
