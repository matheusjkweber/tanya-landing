"use client";

import { useState } from "react";
import type { Messages } from "@/i18n/messages/en";
import { SCENES } from "@/lib/scenes";
import { SectionHeader, SectionShell } from "./section-shell";
import { Terminal } from "./terminal";
import { Reveal } from "./reveal";
import { GifShowcase } from "./gif-showcase";
import { cn } from "@/lib/utils";

export function DemoGallery({ dict }: { dict: Messages }) {
  const { gallery, scenes } = dict;
  const [active, setActive] = useState(0);
  const scene = SCENES[active];
  const step = scenes.steps[scene.key];

  return (
    <SectionShell id="demo" className="bg-ink-1/40">
      <SectionHeader eyebrow={gallery.eyebrow} title={gallery.title} subtitle={gallery.subtitle} />

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-[260px_1fr] lg:items-start">
        {/* Step rail — clicking visibly swaps the terminal on the right */}
        <ol className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
          {SCENES.map((s, i) => {
            const label = scenes.steps[s.key];
            const isActive = i === active;
            return (
              <li key={s.id} className="min-w-[44%] sm:min-w-[30%] lg:min-w-0">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-colors lg:p-4",
                    isActive
                      ? "border-amber/50 bg-amber/10"
                      : "border-line/70 bg-ink/30 hover:border-amber/30 hover:bg-ink-2/50",
                  )}
                >
                  <span
                    className={cn(
                      "grid h-7 w-7 shrink-0 place-items-center rounded-lg font-mono text-xs font-semibold",
                      isActive
                        ? "bg-amber text-ink"
                        : "bg-ink-3 text-cream-dim",
                    )}
                  >
                    {i + 1}
                  </span>
                  <span className="flex flex-col">
                    <span
                      className={cn(
                        "text-sm font-semibold",
                        isActive ? "text-cream" : "text-cream-dim",
                      )}
                    >
                      {label.label}
                    </span>
                    <span className="mt-0.5 hidden text-xs leading-snug text-muted lg:block">
                      {label.caption}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* Active scene */}
        <div className="min-w-0">
          <Terminal
            key={scene.id}
            scene={scene}
            title={dict.hero.terminalTitle}
            caption={step.caption}
            live
            bodyClassName="min-h-[15rem]"
          />
          <p className="mt-3 text-sm leading-relaxed text-cream-dim lg:hidden">{step.caption}</p>
        </div>
      </div>

      {/* The real recording — honesty proof, an interactive featured gallery */}
      <Reveal>
        <div className="mx-auto mt-10 max-w-4xl">
          <GifShowcase dict={dict} />
        </div>
      </Reveal>
    </SectionShell>
  );
}
