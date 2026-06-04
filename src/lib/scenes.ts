/**
 * Hand-authored terminal "scenes" rendered as crisp DOM (not screenshots),
 * so the hero and demo gallery stay razor-sharp and legible at any size.
 *
 * Terminal output is universal/code, so the line content is locale-agnostic.
 * The human-facing step labels + captions are translated in src/i18n/messages.
 */

export type LineKind =
  | "cmd" // shell prompt line
  | "user" // the human's request to the agent
  | "tool" // a tool Tanya invokes
  | "info" // dim status output
  | "ok" // verify / success (green)
  | "warn" // caution (coral)
  | "diff-add"
  | "diff-del"
  | "blank";

export type Line = { kind: LineKind; text?: string };

export type Scene = {
  id: string;
  /** translation key under messages.scenes.steps */
  key: "connect" | "plan" | "edit" | "verify" | "cost";
  lines: Line[];
};

export const SCENES: Scene[] = [
  {
    id: "connect",
    key: "connect",
    lines: [
      { kind: "cmd", text: "tanya" },
      { kind: "info", text: "→ connecting to deepseek-chat" },
      { kind: "ok", text: "✓ connected · OpenAI-compatible endpoint" },
      { kind: "info", text: "→ indexing repo · 218 files mapped" },
      { kind: "ok", text: "✓ ready · type a task or /help" },
      { kind: "blank" },
      { kind: "cmd", text: "tanya is listening_" },
    ],
  },
  {
    id: "plan",
    key: "plan",
    lines: [
      { kind: "user", text: "› build a SwiftUI calculator, no deps, iOS 17+" },
      { kind: "blank" },
      { kind: "tool", text: "▌ plan" },
      { kind: "info", text: "  1. scaffold the Xcode project" },
      { kind: "info", text: "  2. model arithmetic with Decimal" },
      { kind: "info", text: "  3. wire the keypad + display" },
      { kind: "info", text: "  4. build & verify the result" },
      { kind: "ok", text: "✓ plan ready · 4 steps" },
    ],
  },
  {
    id: "edit",
    key: "edit",
    lines: [
      { kind: "tool", text: "▌ write Calculator/ContentView.swift" },
      { kind: "diff-add", text: "+ struct ContentView: View {" },
      { kind: "diff-add", text: "+   @State private var display = \"0\"" },
      { kind: "diff-add", text: "+   var body: some View { Keypad(...) }" },
      { kind: "diff-add", text: "+ }" },
      { kind: "info", text: "→ streaming · 3 files changed, +142 −0" },
      { kind: "ok", text: "✓ edits applied live" },
    ],
  },
  {
    id: "verify",
    key: "verify",
    lines: [
      { kind: "tool", text: "▌ run_shell · xcodebuild -scheme Calculator" },
      { kind: "info", text: "  Compiling 6 files…" },
      { kind: "info", text: "  ** BUILD SUCCEEDED **" },
      { kind: "blank" },
      { kind: "tool", text: "▌ verify · final-state check" },
      { kind: "ok", text: "✓ build passes" },
      { kind: "ok", text: "✓ keypad wired · decimals correct" },
      { kind: "ok", text: "✓ verdict: DONE — not \"the model said so\"" },
    ],
  },
  {
    id: "cost",
    key: "cost",
    lines: [
      { kind: "cmd", text: "/cost" },
      { kind: "info", text: "  model        deepseek-chat" },
      { kind: "info", text: "  tokens       38.1k in · 9.4k out" },
      { kind: "ok", text: "  this task    $0.018" },
      { kind: "blank" },
      { kind: "ok", text: "✓ Tanya itself: $0 — free forever" },
      { kind: "info", text: "  you only ever pay DeepSeek for tokens" },
    ],
  },
];

/** The single scene that leads the hero. */
export const HERO_SCENE = SCENES.find((s) => s.id === "verify")!;
