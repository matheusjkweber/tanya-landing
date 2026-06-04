"use client";

import { useState } from "react";
import { Github, Menu, Sparkles, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import { PRODUCT } from "@/lib/landing-data";
import type { Messages } from "@/i18n/messages/en";
import { LanguageSwitcher } from "./language-switcher";
import { cn } from "@/lib/utils";

type NavbarProps = { dict: Messages; locale: Locale };

export function Navbar({ dict, locale }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const home = localizedPath(locale);

  const links = [
    { href: `${home === "/" ? "" : home}#features`, label: dict.nav.features },
    { href: `${home === "/" ? "" : home}#how`, label: dict.nav.how },
    { href: `${home === "/" ? "" : home}#roadmap`, label: dict.nav.roadmap },
    { href: `${home === "/" ? "" : home}#faq`, label: dict.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-line/60 bg-ink/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href={home} className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-cream">
            <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-amber/15 ring-1 ring-amber/30">
              <Sparkles className="h-4 w-4 text-amber" aria-hidden />
            </span>
            Tanya
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-card px-3 py-2 text-sm font-medium text-cream-dim transition-colors hover:text-amber"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <div className="hidden md:block">
              <LanguageSwitcher current={locale} />
            </div>
            <a
              href={PRODUCT.github}
              target="_blank"
              rel="noreferrer"
              aria-label={dict.nav.github}
              className="hidden h-11 w-11 items-center justify-center rounded-card text-cream-dim transition-colors hover:text-amber sm:inline-flex"
            >
              <Github className="h-5 w-5" aria-hidden />
            </a>
            <a
              href={PRODUCT.npm}
              target="_blank"
              rel="noreferrer"
              className="hidden h-11 items-center rounded-card bg-amber px-4 text-sm font-semibold text-ink transition-colors hover:bg-amber-bright md:inline-flex"
            >
              {dict.nav.install}
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-card text-cream md:hidden"
            >
              {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          "overflow-hidden border-b border-line/60 bg-ink/95 backdrop-blur-xl transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-card px-3 py-3 text-base font-medium text-cream-dim transition-colors hover:bg-ink-2 hover:text-amber"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PRODUCT.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-card px-3 py-3 text-base font-medium text-cream-dim transition-colors hover:bg-ink-2 hover:text-amber"
          >
            <Github className="h-5 w-5" aria-hidden />
            {dict.nav.github}
          </a>
          <div className="mt-2 flex items-center justify-between gap-3 px-1">
            <LanguageSwitcher current={locale} />
            <a
              href={PRODUCT.npm}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 flex-1 items-center justify-center rounded-card bg-amber px-4 text-sm font-semibold text-ink"
            >
              {dict.nav.install}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
