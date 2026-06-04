import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

/** Consistent eyebrow → title → subtitle stack used at the top of sections. */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "font-mono text-xs uppercase tracking-[0.2em] text-amber",
            align === "center" && "mx-auto",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-cream sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base leading-relaxed text-cream-dim sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

/** Page-width section wrapper with consistent vertical rhythm and gutters. */
export function SectionShell({ id, children, className, innerClassName }: SectionShellProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-20 py-20 sm:py-28", className)}>
      <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
