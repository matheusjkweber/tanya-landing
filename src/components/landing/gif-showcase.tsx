"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Film } from "lucide-react";
import type { Messages } from "@/i18n/messages/en";
import { DEMO_CLIPS, DEMO_SEQUENCE } from "@/lib/landing-data";
import { cn } from "@/lib/utils";

/**
 * Featured-viewer for the real "tanya builds a calculator" recording.
 *
 * It plays ONE continuous, looping file (`DEMO_SEQUENCE`) — the six beats
 * stitched together — with native `autoplay` + `loop` and ZERO JavaScript
 * auto-advance. This is the approach that proved reliable: a per-clip JS
 * carousel (swapping `src` / remounting and advancing on `ended`) repeatedly
 * got stuck on clip 1 behind the CosmoHQ media proxy, where a tiny muted clip's
 * `ended` event never fires — leaving only its last frame on screen (the
 * "carousel won't change / only shows the last few seconds" bug). One looping
 * file can't get stuck: the browser plays it through and loops it forever.
 *
 * The chapter rail still works — clicking a beat SEEKS into the single file
 * (`currentTime`), which is robust because there's no remount. Playback drives
 * the active highlight via `timeupdate`.
 */
export function GifShowcase({ dict }: { dict: Messages }) {
  const { gallery } = dict;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [active, setActive] = useState(0);
  // Seconds-per-chapter, learned from the file once its metadata loads.
  const chapterLenRef = useRef(0);

  const n = DEMO_CLIPS.length;

  const seekTo = useCallback((i: number) => {
    const v = videoRef.current;
    const len = chapterLenRef.current;
    setActive(i);
    if (v && len > 0) {
      v.currentTime = i * len + 0.01; // nudge past the boundary
      void v.play().catch(() => {});
    }
  }, []);

  // Muted autoplay can still be refused behind a proxy / on first hydration —
  // kick it ourselves. If refused, the poster (clip 1's first frame) shows and
  // any chapter click starts playback.
  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <div className="glass-panel overflow-hidden rounded-2xl">
      {/* chrome */}
      <div className="flex items-center gap-2 border-b border-line/70 bg-ink-2/80 px-4 py-2.5">
        <Film className="h-4 w-4 text-amber" aria-hidden />
        <span className="font-mono text-xs text-cream-dim">{gallery.realLabel}</span>
        <span className="ml-auto font-mono text-[0.65rem] text-muted">{gallery.note}</span>
      </div>

      {/* featured stage — one looping file that plays the whole build */}
      <div className="relative aspect-video bg-ink-1">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster={DEMO_SEQUENCE.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={gallery.caption}
          onLoadedMetadata={(e) => {
            chapterLenRef.current = e.currentTarget.duration / n;
          }}
          onTimeUpdate={(e) => {
            const len = chapterLenRef.current;
            if (len > 0) {
              const i = Math.min(n - 1, Math.floor(e.currentTarget.currentTime / len));
              setActive((prev) => (prev === i ? prev : i));
            }
          }}
        >
          <source src={DEMO_SEQUENCE.webm} type="video/webm" />
          <source src={DEMO_SEQUENCE.mp4} type="video/mp4" />
        </video>

        {/* timecode of the active chapter */}
        <span className="absolute left-3 top-3 rounded bg-ink/85 px-2 py-1 font-mono text-[0.7rem] text-amber ring-1 ring-amber/20">
          {DEMO_CLIPS[active].stamp}
        </span>

        {/* progress dots — position in the full sequence; tappable too */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {DEMO_CLIPS.map((c, i) => (
            <button
              key={`dot-${c.id}`}
              type="button"
              onClick={() => seekTo(i)}
              aria-label={`${gallery.caption} — ${c.stamp}`}
              aria-pressed={i === active}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === active ? "w-5 bg-amber" : "w-1.5 bg-cream-dim/40 hover:bg-cream-dim/70",
              )}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink/70 to-transparent" />
      </div>

      {/* chapter rail — click a thumbnail to jump to that beat */}
      <div className="flex gap-2 overflow-x-auto p-3 sm:gap-3 sm:p-4">
        {DEMO_CLIPS.map((c, i) => (
          <button
            key={`t-${c.id}`}
            type="button"
            onClick={() => seekTo(i)}
            aria-pressed={i === active}
            aria-label={`${gallery.caption} — ${c.stamp}`}
            className={cn(
              "relative grid aspect-video w-28 shrink-0 cursor-pointer place-items-stretch overflow-hidden rounded-lg ring-1 transition-all sm:w-32",
              i === active
                ? "opacity-100 ring-2 ring-amber"
                : "opacity-60 ring-line hover:opacity-90",
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.poster}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-1 left-1 rounded bg-ink/85 px-1 py-0.5 font-mono text-[0.55rem] text-cream-dim">
              {c.stamp}
            </span>
          </button>
        ))}
      </div>

      <p className="border-t border-line/70 px-4 py-3 text-sm leading-relaxed text-cream-dim">
        {gallery.caption}
      </p>
    </div>
  );
}
