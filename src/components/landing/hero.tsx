import { ArrowUpRight, Github } from "lucide-react";
import type { Messages } from "@/i18n/messages/en";
import { PRODUCT } from "@/lib/landing-data";
import { HERO_SCENE } from "@/lib/scenes";
import { CopyInstall } from "./copy-install";
import { Reveal } from "./reveal";
import { Terminal } from "./terminal";

export function Hero({ dict }: { dict: Messages }) {
  const { hero, beta } = dict;

  return (
    <section className="bg-control-room relative overflow-hidden">
      {/* Generated backdrop — real asset under public/images/generated/ */}
      <img
        src="/images/generated/hero-control-room.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18] mix-blend-screen"
      />
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-8 lg:pb-28 lg:pt-14">
        {/* Left: the promise */}
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <span className="glass-panel inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-cream-dim">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-verify opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-verify" />
              </span>
              {beta}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber sm:text-sm">
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-[2.6rem] font-bold leading-[1.04] tracking-tight text-cream sm:text-6xl lg:text-[4rem]">
              {hero.titleLead}{" "}
              <span className="text-gradient-amber">{hero.titleAccent}</span>{" "}
              {hero.titleTail}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="max-w-xl text-base leading-relaxed text-cream-dim sm:text-lg">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="w-full max-w-md">
            <CopyInstall copiedLabel={hero.copied} runHint={hero.runHint} />
          </Reveal>

          <Reveal delay={0.25} className="w-full">
            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <a
                href={PRODUCT.npm}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-card bg-amber px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-amber-bright sm:w-auto"
              >
                {hero.ctaPrimary}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={PRODUCT.github}
                target="_blank"
                rel="noreferrer"
                className="glass-panel inline-flex w-full items-center justify-center gap-2 rounded-card px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:text-amber sm:w-auto"
              >
                <Github className="h-4 w-4" aria-hidden />
                {hero.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: a crisp, hand-rendered live session (no screenshot) */}
        <Reveal delay={0.2} className="w-full min-w-0">
          <Terminal
            scene={HERO_SCENE}
            title={hero.terminalTitle}
            caption={hero.terminalCaption}
            live
          />
        </Reveal>
      </div>
    </section>
  );
}
