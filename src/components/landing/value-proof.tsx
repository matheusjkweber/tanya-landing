import { BadgeCheck, Gauge, Wallet } from "lucide-react";
import type { Messages } from "@/i18n/messages/en";
import { SectionHeader, SectionShell } from "./section-shell";
import { Reveal } from "./reveal";

const ICONS = [Wallet, BadgeCheck, Gauge] as const;

/** The "why Tanya" argument: cheap to run, verified output, frontier on demand. */
export function ValueProof({ dict }: { dict: Messages }) {
  const { proof } = dict;

  return (
    <SectionShell id="how">
      <SectionHeader eyebrow={proof.eyebrow} title={proof.title} subtitle={proof.subtitle} />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {proof.points.map((point, i) => {
          const Icon = ICONS[i] ?? BadgeCheck;
          const isVerifier = i === 1;
          return (
            <Reveal key={point.title} delay={i * 0.08} className="h-full">
              <article className="glass-panel flex h-full flex-col gap-4 rounded-2xl p-6 sm:p-7">
                <span
                  className={
                    isVerifier
                      ? "grid h-11 w-11 place-items-center rounded-xl bg-verify/12 text-verify ring-1 ring-verify/25"
                      : "grid h-11 w-11 place-items-center rounded-xl bg-amber/12 text-amber ring-1 ring-amber/25"
                  }
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-display text-lg font-semibold text-cream">{point.title}</h3>
                <p className="text-sm leading-relaxed text-cream-dim">{point.desc}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
