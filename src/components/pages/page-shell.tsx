import type { ReactNode } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import type { Messages } from "@/i18n/messages/en";
import { Footer } from "@/components/landing/footer";

type PageShellProps = {
  dict: Messages;
  locale: Locale;
  title: string;
  intro: string;
  children: ReactNode;
  /** Optional last-updated date string for legal pages. */
  updated?: string;
};

/** Lightweight chrome for the Terms / Support / Contact sub-pages. */
export function PageShell({ dict, locale, title, intro, children, updated }: PageShellProps) {
  const home = localizedPath(locale);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5 sm:px-6">
          <a href={home} className="flex items-center gap-2.5 font-display text-lg font-bold text-cream">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber/15 ring-1 ring-amber/30">
              <Sparkles className="h-4 w-4 text-amber" aria-hidden />
            </span>
            Tanya
          </a>
          <a
            href={home}
            className="inline-flex items-center gap-2 rounded-card px-3 py-2 text-sm font-medium text-cream-dim transition-colors hover:text-amber"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {dict.common.backHome}
          </a>
        </nav>
      </header>

      <main className="bg-control-room relative min-h-[60vh]">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20">
          <h1 className="font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl">{title}</h1>
          {updated ? (
            <p className="mt-3 font-mono text-xs text-muted">
              {dict.common.lastUpdated}: {updated}
            </p>
          ) : null}
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream-dim sm:text-lg">{intro}</p>
          <div className="mt-12">{children}</div>
        </div>
      </main>

      <Footer dict={dict} locale={locale} />
    </>
  );
}
