#!/usr/bin/env bash
# Re-cut the demo GIFs from the high-resolution source recording.
#
# The platform shipped 640x402 GIFs downscaled from a 3024x1898 @120fps screen
# recording (public/media/*calculator.mp4). At 640px the terminal text is an
# unreadable blur. This re-cuts each clip straight from that master at 1280x720
# with a per-clip optimised 256-colour palette, so the text is crisp.
#
# Framing ("zoom on the text"): we crop the macOS/tmux tab bar off the top and
# the empty band off the bottom, landing on a true 16:9 frame. That fills the
# gallery's aspect-video stage edge-to-edge (no more object-cover trim) and
# enlarges the terminal content, WITHOUT clipping the conversation text — which
# wraps to the full terminal width, so the sides must stay intact.
#
# Output goes to public/media/_orig/ (the pristine 12fps masters). Run
# scripts/speed-gifs.sh afterwards to produce the sped-up display GIFs.
#
# Usage:  scripts/gen-clips.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MEDIA="$ROOT/public/media"
ORIG="$MEDIA/_orig"
MP4="$(ls "$MEDIA"/*calculator.mp4 | head -1)"

command -v ffmpeg >/dev/null 2>&1 || { echo "ffmpeg not found (brew install ffmpeg)"; exit 1; }
[ -f "$MP4" ] || { echo "source mp4 not found in $MEDIA"; exit 1; }

mkdir -p "$ORIG"

# clip <name-substring> <start-seconds> <duration-seconds>
# Start/duration match the platform's original auto-cut clips (12fps cadence).
CLIPS=(
  "clip1 9   3.16"
  "clip2 42  2.75"
  "clip3 74  2.75"
  "clip4 107 2.50"
  "clip5 140 3.16"
  "clip6 173 2.50"
)

# Crop: full width (text wraps edge-to-edge, never clip it); drop the top 40px
# tab bar and trim to a 1701px-tall 16:9 slice, then scale to a crisp 1280x720.
CROP="crop=3024:1701:0:40,scale=1280:720:flags=lanczos"
FPS=12

for entry in "${CLIPS[@]}"; do
  read -r tag start dur <<<"$entry"
  out="$(ls "$ORIG"/*"${tag}"*.gif 2>/dev/null | head -1 || true)"
  [ -n "$out" ] || out="$(ls "$MEDIA"/*"${tag}"*.gif | head -1)"
  out="$ORIG/$(basename "$out")"

  ffmpeg -v error -y -ss "$start" -t "$dur" -i "$MP4" \
    -vf "fps=${FPS},${CROP},split[s0][s1];[s0]palettegen=max_colors=256:stats_mode=full[p];[s1][p]paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle" \
    -loop 0 "$out"
  echo "  $(basename "$out")  →  1280x720 @ ${FPS}fps  ($(du -h "$out" | cut -f1))"
done

echo "Done. HQ 12fps masters written to $ORIG."
echo "Next: run scripts/speed-gifs.sh 5 to produce the sped-up display GIFs."
