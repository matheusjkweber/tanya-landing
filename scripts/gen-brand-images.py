#!/usr/bin/env python3
"""
Brand image generator for the Tanya landing page.

FAL image generation is unavailable (exhausted balance), so instead of shipping
blurry gradient blobs we render crisp, on-brand assets in code:
  - public/images/generated/og-tanya.png        social/OG card (1200x630)
  - public/images/generated/hero-control-room.png  warm ambient backdrop (1600x1000)
  - public/images/generated/grid-texture.png    faint circuit/grid texture (1600x1000)

Design system: warm near-black charcoal, amber-gold brand, verify-green accent.
"""
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

OUT = "public/images/generated"

INK   = (10, 9, 8)
INK2  = (22, 19, 15)
LINE  = (42, 36, 29)
CREAM = (246, 241, 231)
DIM   = (205, 195, 178)
MUTE  = (147, 138, 123)
AMBER = (247, 183, 51)
AMBERB= (255, 201, 85)
CORAL = (255, 107, 90)
VERIFY= (92, 230, 160)

MONO = "/System/Library/Fonts/SFNSMono.ttf"
SANS = "/System/Library/Fonts/SFNS.ttf"

def font(path, size):
    return ImageFont.truetype(path, size)

def radial(size, cx, cy, radius, color, max_alpha):
    """Return an RGBA layer with a soft radial glow."""
    w, h = size
    layer = Image.new("L", size, 0)
    px = layer.load()
    r2 = radius * radius
    for y in range(h):
        for x in range(w):
            d2 = (x - cx) ** 2 + (y - cy) ** 2
            if d2 < r2:
                t = 1 - math.sqrt(d2) / radius
                px[x, y] = int(max_alpha * (t ** 1.8))
    glow = Image.new("RGBA", size, color + (0,))
    glow.putalpha(layer)
    return glow

def base_canvas(w, h, glow_scale=1.0):
    img = Image.new("RGBA", (w, h), INK + (255,))
    # warm amber glow top-right, coral hint left, verify hint bottom
    img.alpha_composite(radial((w, h), int(w * 0.82), int(-h * 0.05),
                               int(w * 0.7 * glow_scale), AMBER, 70))
    img.alpha_composite(radial((w, h), int(w * 0.04), int(h * 0.12),
                               int(w * 0.45 * glow_scale), CORAL, 32))
    img.alpha_composite(radial((w, h), int(w * 0.5), int(h * 1.08),
                               int(w * 0.55 * glow_scale), VERIFY, 26))
    return img

def draw_grid(img, step=56, color=(246, 241, 231), alpha=10):
    w, h = img.size
    grid = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(grid)
    for x in range(0, w, step):
        d.line([(x, 0), (x, h)], fill=color + (alpha,), width=1)
    for y in range(0, h, step):
        d.line([(0, y), (w, y)], fill=color + (alpha,), width=1)
    img.alpha_composite(grid)

def rounded(draw, box, radius, fill=None, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)

# --------------------------------------------------------------------------- #
# 1. OG / social card
# --------------------------------------------------------------------------- #
def gen_og():
    w, h = 1200, 630
    img = base_canvas(w, h)
    draw_grid(img, step=48, alpha=8)
    d = ImageDraw.Draw(img)

    pad = 72
    # eyebrow pill
    eb = "OPEN-SOURCE CLI  ·  BUILT FOR DEEPSEEK"
    f_eb = font(MONO, 22)
    ebw = d.textlength(eb, font=f_eb)
    rounded(d, [pad, pad, pad + ebw + 44, pad + 46], 23,
            fill=(22, 19, 15, 230), outline=(60, 50, 30, 255), width=1)
    d.ellipse([pad + 18, pad + 18, pad + 30, pad + 30], fill=VERIFY)
    d.text((pad + 40, pad + 11), eb, font=f_eb, fill=AMBER)

    # wordmark + headline
    f_brand = font(SANS, 132)
    d.text((pad - 4, pad + 78), "Tanya", font=f_brand, fill=CREAM)

    f_h = font(SANS, 52)
    d.text((pad, pad + 232), "Real coding agent.", font=f_h, fill=CREAM)
    lead = "Real coding agent. "
    leadw = d.textlength(lead, font=f_h)
    d.text((pad, pad + 296), "DeepSeek prices.", font=f_h, fill=AMBER)
    dsw = d.textlength("DeepSeek prices. ", font=f_h)
    d.text((pad + dsw, pad + 296), "Verified.", font=f_h, fill=VERIFY)

    # mini terminal card bottom
    tx0, ty0, tx1, ty1 = pad, h - 150, w - pad, h - pad
    rounded(d, [tx0, ty0, tx1, ty1], 16, fill=(15, 13, 11, 235),
            outline=(50, 42, 33, 255), width=1)
    for i, c in enumerate([CORAL, AMBER, VERIFY]):
        d.ellipse([tx0 + 22 + i * 22, ty0 + 18, tx0 + 22 + i * 22 + 12, ty0 + 30], fill=c)
    f_m = font(MONO, 21)
    d.text((tx0 + 24, ty0 + 50), "$ tanya", font=f_m, fill=CREAM)
    d.text((tx0 + 24 + d.textlength("$ tanya  ", font=f_m), ty0 + 50),
           "→ connecting to deepseek-chat", font=f_m, fill=DIM)
    d.text((tx0 + 24, ty0 + 84), "✓ verify", font=f_m, fill=VERIFY)
    d.text((tx0 + 24 + d.textlength("✓ verify  ", font=f_m), ty0 + 84),
           "build passed · 0 errors · free forever", font=f_m, fill=MUTE)

    img.convert("RGB").save(f"{OUT}/og-tanya.png", quality=92)
    print("wrote og-tanya.png")

# --------------------------------------------------------------------------- #
# 2. Ambient backdrop (replaces the blurry blob)
# --------------------------------------------------------------------------- #
def gen_backdrop():
    w, h = 1600, 1000
    img = base_canvas(w, h, glow_scale=1.1)
    draw_grid(img, step=64, alpha=12)
    # diagonal "scanline" streaks for texture
    streaks = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    sd = ImageDraw.Draw(streaks)
    for i in range(-h, w, 90):
        sd.line([(i, 0), (i + h, h)], fill=AMBER + (6,), width=2)
    img.alpha_composite(streaks)
    img.convert("RGB").save(f"{OUT}/hero-control-room.png", quality=88)
    print("wrote hero-control-room.png")

# --------------------------------------------------------------------------- #
# 3. Faint grid/circuit texture for section backgrounds
# --------------------------------------------------------------------------- #
def gen_grid_texture():
    w, h = 1600, 1000
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw_grid(img, step=44, alpha=16)
    d = ImageDraw.Draw(img)
    # a few "nodes" where lines meet, amber dots
    for gx in range(220, w, 308):
        for gy in range(180, h, 264):
            d.ellipse([gx - 3, gy - 3, gx + 3, gy + 3], fill=AMBER + (60,))
    img.save(f"{OUT}/grid-texture.png")
    print("wrote grid-texture.png")

if __name__ == "__main__":
    gen_og()
    gen_backdrop()
    gen_grid_texture()
    print("done")
