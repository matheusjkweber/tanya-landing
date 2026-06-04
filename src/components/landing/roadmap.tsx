import type { Messages } from "@/i18n/messages/en";
import { SectionHeader, SectionShell } from "./section-shell";
import { Reveal } from "./reveal";
import { FeatureSuggest } from "./feature-suggest";
import { cn } from "@/lib/utils";

type Status = "shipped" | "next" | "planned" | "later";

/** Dot + pill styling per milestone status, keyed to the site palette. */
const STATUS_STYLES: Record<Status, { dot: string; ring: string; pill: string }> = {
  shipped: { dot: "bg-verify", ring: "ring-verify/40", pill: "bg-verify/12 text-verify ring-verify/25" },
  next: { dot: "bg-amber", ring: "ring-amber/45", pill: "bg-amber/12 text-amber ring-amber/25" },
  planned: { dot: "bg-cream-dim", ring: "ring-line", pill: "bg-cream-dim/10 text-cream-dim ring-cream-dim/20" },
  later: { dot: "bg-muted", ring: "ring-line", pill: "bg-muted/10 text-muted ring-muted/25" },
};

const LEGEND_ORDER: Status[] = ["shipped", "next", "planned", "later"];

/**
 * Roadmap timeline: the milestones already shipped, then what's planned next.
 * A pure-CSS vertical rail with status dots — no client JS, so it renders in the
 * static HTML and animates on first paint via <Reveal>.
 */
export function Roadmap({ dict }: { dict: Messages }) {
  const { roadmap } = dict;
  // The "you are here" marker sits between the last shipped milestone and the
  // first upcoming one — the literal "steps until here" boundary.
  const firstUpcoming = roadmap.milestones.findIndex((m) => m.status !== "shipped");

  return (
    <SectionShell id="roadmap" className="border-y border-line/60 bg-ink-1/40">
      <SectionHeader eyebrow={roadmap.eyebrow} title={roadmap.title} subtitle={roadmap.subtitle} />

      {/* legend */}
      <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {LEGEND_ORDER.map((s) => (
          <span key={s} className="inline-flex items-center gap-2 font-mono text-xs text-cream-dim">
            <span className={cn("h-2 w-2 rounded-full", STATUS_STYLES[s].dot)} />
            {roadmap.legend[s]}
          </span>
        ))}
      </div>

      {/* timeline */}
      <ol className="relative mx-auto mt-12 max-w-3xl">
        {/* vertical rail behind the dots */}
        <span
          aria-hidden
          className="absolute bottom-3 left-[11px] top-3 w-px bg-line/70 sm:left-[15px]"
        />
        {roadmap.milestones.map((m, i) => {
          const st = STATUS_STYLES[m.status];
          const nowMarker =
            i === firstUpcoming ? (
              <li key="now-marker" className="relative pb-8 pl-10 sm:pl-14">
                <span
                  aria-hidden
                  className="absolute left-0 top-0.5 grid h-6 w-6 place-items-center rounded-full bg-amber/15 ring-2 ring-amber/60 sm:h-8 sm:w-8"
                >
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-amber" />
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber/12 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-amber ring-1 ring-amber/30">
                  {roadmap.nowLabel}
                </span>
              </li>
            ) : null;
          const milestone = (
            <li key={`${m.status}-${i}`} className="relative pb-8 pl-10 last:pb-0 sm:pl-14">
              <Reveal delay={Math.min(i, 6) * 0.05}>
                {/* node */}
                <span
                  className={cn(
                    "absolute left-0 top-1.5 grid h-6 w-6 place-items-center rounded-full bg-ink ring-2 sm:h-8 sm:w-8",
                    st.ring,
                  )}
                >
                  <span className={cn("h-2.5 w-2.5 rounded-full", st.dot)} />
                </span>

                <div className="glass-panel rounded-2xl border border-line/70 p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] ring-1",
                        st.pill,
                      )}
                    >
                      {roadmap.legend[m.status]}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-cream">{m.title}</h3>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-cream-dim">{m.desc}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {m.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-md bg-ink/50 px-2.5 py-1 font-mono text-xs text-cream-dim ring-1 ring-line/70"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </li>
          );
          return nowMarker ? [nowMarker, milestone] : milestone;
        })}
      </ol>

      <FeatureSuggest dict={dict} />
    </SectionShell>
  );
}
