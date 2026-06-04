#!/usr/bin/env bash
# Speed up the demo GIF playback by scaling per-frame delays with gifsicle.
#
# GIF playback speed is baked into the frame delays inside the file — there is no
# CSS/HTML way to change it — so we re-time the files themselves.
#
# Usage:  scripts/speed-gifs.sh [SPEED]
#   SPEED  playback multiplier, default 2 (2 = twice as fast). e.g. 1.5, 2, 3
#
# Originals are preserved once under public/media/_orig/ so this is repeatable:
# every run re-times from the pristine source, so speeds don't compound.
set -euo pipefail

SPEED="${1:-2}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MEDIA="$ROOT/public/media"
ORIG="$MEDIA/_orig"

command -v gifsicle >/dev/null 2>&1 || { echo "gifsicle not found (brew install gifsicle)"; exit 1; }

mkdir -p "$ORIG"

shopt -s nullglob
for gif in "$MEDIA"/*.gif; do
  base="$(basename "$gif")"
  src="$ORIG/$base"
  # Snapshot the pristine original the first time we touch this file.
  [ -f "$src" ] || cp "$gif" "$src"

  # Scale every frame's delay by 1/SPEED. gifsicle delays are in centiseconds;
  # clamp to a 2cs (==50fps) floor since most renderers ignore sub-20ms delays.
  # When that floor would cap the speed-up (high multipliers push delays below
  # 2cs), drop frames evenly so the clip's total duration still hits orig/SPEED
  # — that's how we realize a true 5x instead of bottoming out around 4x.
  python3 - "$src" "$gif" "$SPEED" <<'PY'
import sys, subprocess, re
src, dst, speed = sys.argv[1], sys.argv[2], float(sys.argv[3])
info = subprocess.check_output(["gifsicle", "--info", src], text=True)
delays = [int(round(float(m) * 100)) for m in re.findall(r"delay ([0-9.]+)s", info)]
n = len(delays)
FLOOR = 2  # centiseconds
target = sum(delays) / speed                      # desired total duration (cs)
# Max frames we can show without dropping below the delay floor.
keep = min(n, max(1, int(target // FLOOR)))
# Pick `keep` frame indices evenly across the clip (always keep the first).
idx = sorted({int(round(i * (n - 1) / (keep - 1))) for i in range(keep)}) if keep > 1 else [0]
per = max(FLOOR, int(round(target / len(idx))))   # even delay across kept frames
keepset = set(idx)
args = ["gifsicle", "--no-warnings", src]
for i in range(n):
    if i in keepset:
        args += [f"#{i}", "-d", str(per)]
args += ["--done", "-o", dst]
subprocess.check_call(args)
PY
  echo "  $base  →  ${SPEED}x"
done

echo "Done. Originals preserved in $ORIG (re-run any time; speeds never compound)."
