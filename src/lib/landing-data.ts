/**
 * Single source of truth for Tanya's product facts.
 * Everything user-visible and translatable lives in src/i18n/messages/*.
 * This file holds locale-agnostic constants: links, install commands, media.
 */

export const PRODUCT = {
  name: "Tanya",
  pkg: "@matheuskrumenauer/tanya",
  version: "0.7.0-beta.0",
  installCmd: "npm i -g @matheuskrumenauer/tanya",
  runCmd: "tanya",
  github: "https://github.com/matheusjkweber/tanya",
  npm: "https://www.npmjs.com/package/@matheuskrumenauer/tanya",
  contactEmail: "contato@tanyahq.com",
  /** Where users sign up for and mint the DeepSeek key Tanya runs on. */
  deepseek: "https://platform.deepseek.com/",
  deepseekKeys: "https://platform.deepseek.com/api_keys",
} as const;

/**
 * Contact + feature-suggestion submissions POST here — the SAME shared CosmoHQ
 * landing-contact service the cosmohq.org landing uses (`/api/public/contact` on
 * the CosmoHQ backend; mirrors cosmohq-landing's getBackendEndpoint). It
 * validates the payload, emails the team via Brevo from contato@cosmohq.org,
 * logs the lead, and sends CORS `*` so cross-origin posts from tanyahq.com work.
 * Schema: { name, projectType, objective, email?, phone?, source?, pageUrl? } —
 * see toLandingContactPayload().
 *
 * The backend host defaults to the CosmoHQ production API (api.cosmohq.org) and
 * is overridable with NEXT_PUBLIC_COSMOHQ_BACKEND_URL (host) or
 * NEXT_PUBLIC_CONTACT_ENDPOINT (full URL). NOTE: as of this writing
 * api.cosmohq.org is not yet deployed, so — exactly like cosmohq.org today —
 * submissions fall back to a pre-filled mail draft until the backend is live.
 */
const COSMOHQ_BACKEND_URL = (
  process.env.NEXT_PUBLIC_COSMOHQ_BACKEND_URL?.trim() || "https://cosmohq-api.azurewebsites.net"
).replace(/\/+$/, "");

export const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ??
  `${COSMOHQ_BACKEND_URL}/api/public/contact`;

/**
 * Map the landing's simple {name, email, message} into the CosmoHQ
 * landing-contact schema. `objective` must be >= 10 chars and `name`/`projectType`
 * non-empty server-side; short messages will fail validation and fall back to a
 * mail draft, which is fine.
 */
export function toLandingContactPayload(input: {
  name?: string;
  email?: string;
  message: string;
  projectType: string;
  source: string;
  pageUrl?: string;
}) {
  return {
    name: (input.name && input.name.trim()) || input.projectType,
    projectType: input.projectType,
    objective: input.message,
    email: input.email ?? "",
    source: input.source,
    pageUrl: input.pageUrl ?? "",
  };
}

/** Slash commands available inside the live REPL (M2). */
export const SLASH_COMMANDS = [
  "/help",
  "/skills",
  "/verify",
  "/cost",
  "/memory",
  "/clear",
] as const;

/**
 * Demo clips cut from the live "tanya builds a calculator" session.
 *
 * Served as real HTML video (H.264 mp4 + VP9 webm) re-encoded from the 3024px
 * master at 1440x810 — true colour, sharp terminal text, smooth 30fps, 5x speed.
 * GIF was dropped because 256-colour dithering blurred the coloured text; the
 * `poster` jpg is the still shown before playback and as the thumbnail rail
 * image. Regenerate with `scripts/gen-videos.sh`.
 *
 * The featured viewer plays ONE clip at a time and auto-advances to the next
 * when it ends, so the whole build plays as a story; clicking a thumbnail jumps
 * to that beat. Each clip drives both the featured stage and its chapter rail
 * thumbnail (the `poster` still).
 */
// IMPORTANT: every media URL below is a COMPLETE literal string, not built by
// concatenation (no `${BASE}/…` template). The CosmoHQ landing-preview proxy
// rewrites finished URL strings so assets resolve through it; a concatenated
// URL (`"/media" + "_clipN.mp4"`) can't be rewritten in the client bundle,
// which made the SSR HTML (rewritten) disagree with the hydrated client
// (original) and threw a React hydration mismatch. Whole literals get rewritten
// identically on both sides. Keep them literal. Regenerate with
// scripts/gen-videos.sh (file names are stable; only the bytes change).

export const DEMO_CLIPS = [
  {
    id: "clip1",
    mp4: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip1_lm_9b68c4e5aee0f65abfd6bce4.mp4",
    webm: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip1_lm_9b68c4e5aee0f65abfd6bce4.webm",
    poster: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip1_lm_9b68c4e5aee0f65abfd6bce4.jpg",
    stamp: "00:09",
  },
  {
    id: "clip2",
    mp4: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip2_lm_21456ae79db975a23bde2b70.mp4",
    webm: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip2_lm_21456ae79db975a23bde2b70.webm",
    poster: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip2_lm_21456ae79db975a23bde2b70.jpg",
    stamp: "00:42",
  },
  {
    id: "clip3",
    mp4: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip3_lm_0c10e4233ddd3955407726e3.mp4",
    webm: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip3_lm_0c10e4233ddd3955407726e3.webm",
    poster: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip3_lm_0c10e4233ddd3955407726e3.jpg",
    stamp: "01:14",
  },
  {
    id: "clip4",
    mp4: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip4_lm_47826bc5eb58d155e09d733a.mp4",
    webm: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip4_lm_47826bc5eb58d155e09d733a.webm",
    poster: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip4_lm_47826bc5eb58d155e09d733a.jpg",
    stamp: "01:47",
  },
  {
    id: "clip5",
    mp4: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip5_lm_a3c9bab7d26bde424e0159aa.mp4",
    webm: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip5_lm_a3c9bab7d26bde424e0159aa.webm",
    poster: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip5_lm_a3c9bab7d26bde424e0159aa.jpg",
    stamp: "02:20",
  },
  {
    id: "clip6",
    mp4: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip6_lm_7ab96a0a44e121b8a6e5180f.mp4",
    webm: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip6_lm_7ab96a0a44e121b8a6e5180f.webm",
    poster: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_clip6_lm_7ab96a0a44e121b8a6e5180f.jpg",
    stamp: "02:53",
  },
] as const;

/**
 * The six clips stitched into ONE continuous, looping video. The featured
 * viewer plays this single file (autoplay + loop, zero JavaScript advance), so
 * the whole build always plays start-to-finish even behind a media proxy that
 * can break per-clip hydration. The chapter rail seeks into it. Regenerate with
 * scripts/gen-videos.sh. (Whole literals — see the note above DEMO_CLIPS.)
 */
export const DEMO_SEQUENCE = {
  mp4: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_sequence.mp4",
  webm: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_sequence.webm",
  poster: "/media/lm_58c38b78e5f7f6aa529851e2_tanya_calculator_sequence.jpg",
} as const;

/** Feature keys — copy comes from translations, icon + accent live here. */
export const FEATURE_KEYS = [
  "verifier",
  "providers",
  "streaming",
  "routing",
  "subagents",
  "mcp",
  "permissions",
  "memory",
] as const;
export type FeatureKey = (typeof FEATURE_KEYS)[number];

export const FAQ_KEYS = ["cost", "models", "verifier", "openSource", "platforms", "claudeCode"] as const;
export type FaqKey = (typeof FAQ_KEYS)[number];
