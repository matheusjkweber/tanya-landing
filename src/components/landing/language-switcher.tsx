"use client";

import { useState } from "react";
import { Check, Globe } from "lucide-react";
import { LOCALES, LOCALE_LABELS, localizedPath, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

/**
 * Locale picker. We only switch the home route here — keeping it simple and
 * robust for a static export, where re-deriving the current sub-path per locale
 * would add fragile client routing for little gain on a one-page site.
 */
export function LanguageSwitcher({ current }: { current: Locale }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex h-11 items-center gap-1.5 rounded-card px-3 font-mono text-xs font-medium text-cream-dim transition-colors hover:text-amber"
      >
        <Globe className="h-4 w-4" aria-hidden />
        {LOCALE_LABELS[current]}
      </button>

      {open ? (
        <div
          role="menu"
          className="glass-panel terminal-shadow absolute right-0 top-full z-50 mt-1 w-36 overflow-hidden rounded-card p-1"
        >
          {LOCALES.map((l) => (
            <a
              key={l}
              href={localizedPath(l)}
              role="menuitem"
              className={cn(
                "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-ink-3",
                l === current ? "text-amber" : "text-cream-dim",
              )}
            >
              {LOCALE_LABELS[l]}
              {l === current ? <Check className="h-3.5 w-3.5" aria-hidden /> : null}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
