import type { Line, Scene } from "@/lib/scenes";
import { cn } from "@/lib/utils";

const LINE_CLASS: Record<Line["kind"], string> = {
  cmd: "text-cream",
  user: "text-coral",
  tool: "text-amber",
  info: "text-muted",
  ok: "text-verify",
  warn: "text-coral",
  "diff-add": "text-verify",
  "diff-del": "text-coral",
  blank: "",
};

function Prompt() {
  return <span className="select-none text-amber">$ </span>;
}

/**
 * A crisp, always-legible terminal window rendered as DOM (no screenshots).
 * `live` shows the title-bar status dot + a blinking caret on the last line.
 */
export function Terminal({
  scene,
  title,
  caption,
  live = false,
  className,
  bodyClassName,
}: {
  scene: Scene;
  title: string;
  caption?: string;
  live?: boolean;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <figure
      className={cn(
        "glass-panel terminal-shadow flex min-w-0 flex-col overflow-hidden rounded-2xl",
        className,
      )}
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-line/70 bg-ink-2/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-coral/80" />
        <span className="h-3 w-3 rounded-full bg-amber/80" />
        <span className="h-3 w-3 rounded-full bg-verify/80" />
        <span className="ml-3 truncate font-mono text-xs text-muted">{title}</span>
        {live ? (
          <span className="ml-auto flex items-center gap-1.5 font-mono text-[0.65rem] text-verify">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-verify opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-verify" />
            </span>
            live
          </span>
        ) : null}
      </div>

      {/* body */}
      <div
        className={cn(
          "flex-1 overflow-x-auto bg-ink-1/90 px-4 py-4 font-mono text-[0.78rem] leading-relaxed sm:text-sm",
          bodyClassName,
        )}
      >
        <pre className="m-0 whitespace-pre-wrap break-words">
          {scene.lines.map((line, i) => {
            const isLast = i === scene.lines.length - 1;
            if (line.kind === "blank") return <div key={i}>&nbsp;</div>;
            return (
              <div key={i} className={cn(LINE_CLASS[line.kind])}>
                {line.kind === "cmd" ? <Prompt /> : null}
                <span className={cn(live && isLast && "caret-blink")}>{line.text}</span>
              </div>
            );
          })}
        </pre>
      </div>

      {caption ? (
        <figcaption className="flex items-center gap-2 border-t border-line/70 bg-ink-2/80 px-4 py-3 font-mono text-xs text-cream-dim">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
