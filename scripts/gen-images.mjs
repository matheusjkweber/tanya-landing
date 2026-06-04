// Temporary image generator — FLUX schnell via fal.run.
// Reads FAL_KEY from env, writes into public/images/generated/.
// Run: node scripts/gen-images.mjs
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const KEY = process.env.FAL_KEY;
if (!KEY) {
  console.error("FAL_KEY not set");
  process.exit(1);
}

const OUT = path.resolve("public/images/generated");
await mkdir(OUT, { recursive: true });

const BRAND =
  "warm near-black charcoal background #0a0908, glowing amber-gold #f7b733 accents, " +
  "a hint of mint verify-green #5ce6a0, cinematic moody lighting, high detail, " +
  "no text, no words, no letters, no UI labels, premium product art, 8k";

const JOBS = [
  {
    name: "og-tanya.png",
    size: "landscape_16_9",
    prompt:
      "Cinematic hero art of a sleek developer terminal command-line workstation at night, " +
      "abstract floating monospace code glints and a pulsing terminal cursor, " +
      "warm amber light pooling across a dark desk, depth of field, " + BRAND,
  },
  {
    name: "open-source-bg.png",
    size: "landscape_16_9",
    prompt:
      "Abstract open-source community network: a constellation of softly glowing connected nodes " +
      "forming a collaborative graph, warm amber light trails between points on a dark canvas, " +
      "subtle git-branch lines merging, sense of contribution and openness, " + BRAND,
  },
  {
    name: "cta-backdrop.png",
    size: "landscape_16_9",
    prompt:
      "Wide atmospheric warm amber dawn glow rising over an abstract dark terminal grid horizon, " +
      "faint scanlines, calm and inviting, lots of negative space at the top, " + BRAND,
  },
  {
    name: "feature-glow.png",
    size: "landscape_16_9",
    prompt:
      "Abstract macro shot of a deterministic verifier concept: a glowing mint-green checkmark of light " +
      "passing through layered amber circuitry and code streams on dark charcoal, " +
      "precise, trustworthy, technical elegance, " + BRAND,
  },
];

for (const job of JOBS) {
  process.stdout.write(`generating ${job.name} ... `);
  const res = await fetch("https://fal.run/fal-ai/flux/schnell", {
    method: "POST",
    headers: {
      Authorization: `Key ${KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: job.prompt,
      image_size: job.size,
      num_inference_steps: 4,
      num_images: 1,
      enable_safety_checker: false,
    }),
  });
  if (!res.ok) {
    console.error(`FAILED ${res.status}: ${await res.text()}`);
    continue;
  }
  const data = await res.json();
  const url = data?.images?.[0]?.url;
  if (!url) {
    console.error("no image url in response");
    continue;
  }
  const img = await fetch(url);
  const buf = Buffer.from(await img.arrayBuffer());
  await writeFile(path.join(OUT, job.name), buf);
  console.log(`ok (${(buf.length / 1024).toFixed(0)} KB)`);
}
console.log("done");
