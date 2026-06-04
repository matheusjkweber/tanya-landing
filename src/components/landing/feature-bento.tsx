import {
  Activity,
  Boxes,
  BrainCircuit,
  Cable,
  GitBranch,
  ShieldCheck,
  SlidersHorizontal,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Messages } from "@/i18n/messages/en";
import { FEATURE_KEYS, type FeatureKey } from "@/lib/landing-data";
import { SCENES } from "@/lib/scenes";
import { SectionHeader, SectionShell } from "./section-shell";
import { Terminal } from "./terminal";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const VERIFY_SCENE = SCENES.find((s) => s.id === "verify")!;

const ICONS: Record<FeatureKey, LucideIcon> = {
  verifier: ShieldCheck,
  providers: Boxes,
  streaming: Activity,
  routing: GitBranch,
  subagents: Users,
  mcp: Cable,
  permissions: SlidersHorizontal,
  memory: BrainCircuit,
};

export function FeatureBento({ dict }: { dict: Messages }) {
  const { features } = dict;

  return (
    <SectionShell id="features">
      <SectionHeader eyebrow={features.eyebrow} title={features.title} subtitle={features.subtitle} />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURE_KEYS.map((key, i) => {
          const f = features.items[key];
          const Icon = ICONS[key];
          const featured = key === "verifier";

          return (
            <Reveal
              key={key}
              delay={(i % 3) * 0.06}
              className={cn(featured && "sm:col-span-2", "h-full")}
            >
              <article
                className={cn(
                  "glass-panel group flex h-full flex-col gap-4 rounded-2xl p-6 transition-colors",
                  featured
                    ? "ring-1 ring-verify/20 sm:flex-row sm:items-stretch sm:gap-6 sm:p-7"
                    : "hover:border-amber/30",
                )}
              >
                <div className={cn("flex flex-col gap-4", featured && "sm:flex-1 sm:justify-center")}>
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1",
                        featured
                          ? "bg-verify/12 text-verify ring-verify/25"
                          : "bg-amber/12 text-amber ring-amber/25",
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span
                      className={cn(
                        "font-mono text-[0.7rem] uppercase tracking-[0.14em]",
                        featured ? "text-verify" : "text-muted",
                      )}
                    >
                      {f.tag}
                    </span>
                  </div>
                  <h3
                    className={cn(
                      "font-display font-semibold text-cream",
                      featured ? "text-xl sm:text-2xl" : "text-lg",
                    )}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-cream-dim">{f.desc}</p>
                </div>

                {featured ? (
                  <Terminal
                    scene={VERIFY_SCENE}
                    title={dict.hero.terminalTitle}
                    live
                    className="sm:w-[46%]"
                    bodyClassName="text-[0.72rem] sm:text-[0.78rem]"
                  />
                ) : null}
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
