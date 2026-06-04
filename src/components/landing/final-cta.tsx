import { ArrowUpRight, BookText } from "lucide-react";
import type { Messages } from "@/i18n/messages/en";
import { PRODUCT } from "@/lib/landing-data";
import { CopyInstall } from "./copy-install";
import { Reveal } from "./reveal";

export function FinalCta({ dict }: { dict: Messages }) {
  const { finalCta, hero } = dict;

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="bg-control-room pointer-events-none absolute inset-0" />
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <Reveal className="relative mx-auto max-w-2xl px-5 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream-dim sm:text-lg">
          {finalCta.subtitle}
        </p>

        <div className="mx-auto mt-8 w-full max-w-md">
          <CopyInstall copiedLabel={hero.copied} runHint={hero.runHint} />
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={PRODUCT.npm}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-card bg-amber px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-amber-bright sm:w-auto"
          >
            {finalCta.primary}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={PRODUCT.github}
            target="_blank"
            rel="noreferrer"
            className="glass-panel inline-flex w-full items-center justify-center gap-2 rounded-card px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:text-amber sm:w-auto"
          >
            <BookText className="h-4 w-4" aria-hidden />
            {finalCta.secondary}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
