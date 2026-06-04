import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
};

/**
 * Lightweight entrance reveal.
 *
 * Implemented as a pure CSS animation (see `.reveal` in globals.css) rather than
 * a JS/IntersectionObserver effect on purpose: the content is part of the static
 * HTML and animates on first paint, so a slow hydration, a disabled observer, or
 * a static capture can never leave a section stuck invisible. prefers-reduced-
 * motion zeroes the duration globally, snapping straight to the resting state.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const style: CSSProperties | undefined =
    delay > 0 ? { animationDelay: `${delay}s` } : undefined;

  return (
    <div className={cn("reveal", className)} style={style}>
      {children}
    </div>
  );
}
