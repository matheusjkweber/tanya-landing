"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { PRODUCT } from "@/lib/landing-data";
import { cn } from "@/lib/utils";

type CopyInstallProps = {
  copiedLabel: string;
  runHint: string;
  className?: string;
};

/**
 * The install-command pill. Click anywhere on it to copy `npm i -g …`.
 * Doubles as the hero's primary affordance — the command IS the product entry.
 */
export function CopyInstall({ copiedLabel, runHint, className }: CopyInstallProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(PRODUCT.installCmd);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — no-op, the command is still visible to copy by hand */
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? copiedLabel : `Copy: ${PRODUCT.installCmd}`}
      className={cn(
        "glass-panel terminal-shadow group flex w-full items-center gap-3 rounded-card px-4 py-3.5 text-left transition-colors hover:border-amber/40",
        className,
      )}
    >
      <Terminal className="h-4 w-4 shrink-0 text-amber" aria-hidden />
      <span className="flex-1 truncate font-mono text-sm text-cream">
        <span className="text-muted">$ </span>
        {PRODUCT.installCmd}
      </span>
      <span className="flex shrink-0 items-center gap-1.5 font-mono text-xs font-medium text-cream-dim">
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-verify" aria-hidden />
            <span className="text-verify">{copiedLabel}</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5 transition-colors group-hover:text-amber" aria-hidden />
            <span className="hidden sm:inline">{runHint} {PRODUCT.runCmd}</span>
          </>
        )}
      </span>
    </button>
  );
}
