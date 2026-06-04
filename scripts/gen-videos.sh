#!/usr/bin/env bash
# Re-cut the demo clips from the high-resolution master as real HTML video.
#
# Why video instead of GIF: a GIF is locked to 256 colours with dithering, which
# turns crisp coloured terminal text into noisy mush, and the files are heavy.
# H.264/VP9 give true colour, sharp text, smooth playback and SMALLER files. The
# gallery (<video> with mp4+webm sources) gets a genuine quality jump that no
# amount of GIF tuning could reach.
#
# Framing matches the old gen-clips.sh "zoom on the text": crop the macOS/tmux
# tab bar off the top, land on a true 16:9 frame, keep the full width (the
# conversation wraps edge-to-edge, so we must never clip the sides), then scale
# to a retina-friendly 1920x1080. The featured gallery renders at max-w-4xl
# (896px CSS), which is 1792px on a 2x retina display — encoding at 1920 wide
# gives real retina headroom so the terminal text stays crisp instead of being
# upscaled (the softness an earlier 1440px encode showed).
#
# Speed: a real 5x via ffmpeg setpts (no frame-dropping); output is a smooth
# 30fps — far smoother than the old 12fps GIFs. We capture 6-second windows, so
# at 5x each clip is a tight ~1.2s beat. A single 1.2s clip on its own would read
# as a "stuck"/frozen flash, so we DON'T loop clips individually — we concatenate
# all six into one ~7.2s sequence that plays the whole build start-to-finish and
# loops. The gallery plays that one file, so the story always advances with zero
# JavaScript (no hydration dependency that a preview proxy could break).
#
# For each clip we emit: <base>.mp4 (H.264), <base>.webm (VP9), <base>.jpg
# (poster / thumbnail still). We also stitch a <prefix>_sequence.{mp4,webm,jpg}
# that the featured viewer loops. Run once; no separate speed step needed.
#
# Usage:  scripts/gen-videos.sh [SPEED]   (default 5)
set -euo pipefail

SPEED="${1:-3}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MEDIA="$ROOT/public/media"
MP4="$(ls "$MEDIA"/*calculator.mp4 2>/dev/null | head -1)"

command -v ffmpeg >/dev/null 2>&1 || { echo "ffmpeg not found (brew install ffmpeg)"; exit 1; }
[ -f "$MP4" ] || { echo "source mp4 not found in $MEDIA"; exit 1; }

# clip <name-substring> <start-seconds> <duration-seconds>
# 6s windows show real progression instead of a sub-second flash. clip6 starts
# at 169.5 (not 173) because the 175.5s master only leaves ~2.5s after 173 —
# 169.5 captures the full 6s and lands the loop on the "BUILD SUCCEEDED" beat.
CLIPS=(
  "clip1 9     6.0"
  "clip2 42    6.0"
  "clip3 74    6.0"
  "clip4 107   6.0"
  "clip5 140   6.0"
  "clip6 169.5 6.0"
)

# Vertical-only zoom + retina scale; speed via setpts. Keep full width.
VF="crop=2100:1181:0:360,scale=1920:1080:flags=lanczos,setpts=PTS/${SPEED}"

MP4_LIST=()
WEBM_LIST=()
PREFIX=""

for entry in "${CLIPS[@]}"; do
  read -r tag start dur <<<"$entry"
  # Resolve the canonical base name from whatever clipN gif/mp4 already exists.
  ref="$(ls "$MEDIA"/*"${tag}"*.gif 2>/dev/null | head -1 || true)"
  [ -n "$ref" ] || ref="$(ls "$MEDIA"/*"${tag}"*_lm_*.mp4 2>/dev/null | head -1 || true)"
  base="$(basename "${ref%.*}")"
  [ -n "$base" ] || { echo "no clip matching $tag"; exit 1; }

  out="$MEDIA/$base"

  # H.264 / MP4 — yuv420p + faststart for universal browser + Safari support.
  # crf 16 + 60fps keeps the coloured terminal text crisp AND the 5x scroll
  # smooth (the 120fps master has the frames to spare; 30fps showed judder).
  ffmpeg -v error -y -ss "$start" -t "$dur" -i "$MP4" \
    -vf "$VF" -an -r 60 \
    -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 16 -preset veryslow \
    -movflags +faststart "$out.mp4"

  # VP9 / WebM — better compression, served first where supported.
  ffmpeg -v error -y -ss "$start" -t "$dur" -i "$MP4" \
    -vf "$VF" -an -r 60 \
    -c:v libvpx-vp9 -pix_fmt yuv420p -crf 22 -b:v 0 -row-mt 1 "$out.webm"

  # Poster / thumbnail still from the last frame of the clip (most text on screen).
  ffmpeg -v error -y -ss "$(LC_ALL=C awk "BEGIN{print $start + $dur - 0.1}")" -i "$MP4" \
    -vf "crop=2100:1181:0:360,scale=1920:1080:flags=lanczos" \
    -frames:v 1 -q:v 3 "$out.jpg"

  echo "  $base  →  mp4 $(du -h "$out.mp4"|cut -f1) · webm $(du -h "$out.webm"|cut -f1) · jpg $(du -h "$out.jpg"|cut -f1)"

  MP4_LIST+=("$out.mp4")
  WEBM_LIST+=("$out.webm")
  # Canonical prefix shared by every clip (strip the trailing _clipN_lm_...).
  [ -n "$PREFIX" ] || PREFIX="${base%%_clip*}"
done

# --- Stitch the six clips into one looping sequence ------------------------
# All clips share identical codec/params (same VF, same encoder settings), so a
# stream copy via the concat demuxer is lossless and instant. The featured
# viewer loops THIS file, so the full build always plays through — no per-clip
# JS auto-advance that a broken-hydration preview could leave stuck on clip 1.
SEQ="$MEDIA/${PREFIX}_sequence"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

: > "$TMP/mp4.txt"
for f in "${MP4_LIST[@]}"; do echo "file '$f'" >> "$TMP/mp4.txt"; done
ffmpeg -v error -y -f concat -safe 0 -i "$TMP/mp4.txt" -c copy -movflags +faststart "$SEQ.mp4"

: > "$TMP/webm.txt"
for f in "${WEBM_LIST[@]}"; do echo "file '$f'" >> "$TMP/webm.txt"; done
ffmpeg -v error -y -f concat -safe 0 -i "$TMP/webm.txt" -c copy "$SEQ.webm"

# Sequence poster = first clip's first frame (what shows before autoplay kicks in).
ffmpeg -v error -y -i "$SEQ.mp4" -frames:v 1 -q:v 3 "$SEQ.jpg"

SEQDUR="$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$SEQ.mp4")"
echo "  ${PREFIX}_sequence  →  mp4 $(du -h "$SEQ.mp4"|cut -f1) · webm $(du -h "$SEQ.webm"|cut -f1) · ${SEQDUR}s loop"

echo "Done. ${SPEED}x video (mp4+webm) + poster jpg + stitched _sequence loop written to $MEDIA."
