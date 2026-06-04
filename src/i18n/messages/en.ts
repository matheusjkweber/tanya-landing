import type { FaqKey, FeatureKey } from "@/lib/landing-data";

type FeatureCopy = { tag: string; title: string; desc: string };
type FaqCopy = { q: string; a: string };

export type Messages = {
  meta: { title: string; description: string; ogAlt: string };
  nav: {
    features: string;
    how: string;
    roadmap: string;
    faq: string;
    docs: string;
    github: string;
    install: string;
    openMenu: string;
    closeMenu: string;
  };
  beta: string;
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    titleTail: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    copied: string;
    runHint: string;
    terminalTitle: string;
    terminalCaption: string;
  };
  scenes: {
    steps: Record<
      "connect" | "plan" | "edit" | "verify" | "cost",
      { label: string; caption: string }
    >;
  };
  openSource: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    points: { title: string; desc: string }[];
  };
  proof: {
    eyebrow: string;
    title: string;
    subtitle: string;
    points: { title: string; desc: string }[];
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Record<FeatureKey, FeatureCopy>;
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    caption: string;
    note: string;
    realLabel: string;
    prev: string;
    next: string;
    loadError: string;
  };
  byoKey: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stepsTitle: string;
    steps: { title: string; desc: string }[];
    cta: string;
    benchTitle: string;
    benchDesc: string;
    stats: { value: string; label: string }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    planName: string;
    price: string;
    priceNote: string;
    includes: string[];
    cta: string;
    secondary: string;
    finePrint: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Record<FaqKey, FaqCopy>;
  };
  finalCta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  footer: {
    tagline: string;
    product: string;
    resources: string;
    legal: string;
    links: {
      features: string;
      pricing: string;
      faq: string;
      github: string;
      npm: string;
      docs: string;
      terms: string;
      support: string;
      contact: string;
    };
    honesty: string;
    rights: string;
  };
  roadmap: {
    eyebrow: string;
    title: string;
    subtitle: string;
    nowLabel: string;
    legend: { shipped: string; next: string; planned: string; later: string };
    milestones: {
      status: "shipped" | "next" | "planned" | "later";
      title: string;
      desc: string;
      items: string[];
    }[];
  };
  featureSuggest: {
    title: string;
    subtitle: string;
    placeholder: string;
    emailPlaceholder: string;
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string;
    errorBody: string;
  };
  common: {
    backHome: string;
    lastUpdated: string;
    comingSoon: string;
    emailUs: string;
  };
  terms: {
    title: string;
    intro: string;
    sections: { h: string; p: string }[];
  };
  support: {
    title: string;
    intro: string;
    primaryChannel: string;
    faqTitle: string;
    items: FaqCopy[];
  };
  contact: {
    title: string;
    intro: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string;
    sendAnother: string;
    errorBody: string;
    directLabel: string;
    githubLabel: string;
    githubDesc: string;
  };
};

const en: Messages = {
  meta: {
    title: "Tanya — a live coding agent for the terminal",
    description:
      "Tanya is a free, open-source CLI coding agent that brings Claude Code-style flow to DeepSeek — then verifies the result so a cheap model's confidence never ships a broken build. Free today, free forever.",
    ogAlt: "Tanya running in a terminal, editing files and verifying the result",
  },
  nav: {
    features: "Features",
    how: "How it works",
    roadmap: "Roadmap",
    faq: "FAQ",
    docs: "Docs",
    github: "GitHub",
    install: "Install",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  beta: "Public beta · v0.7.0 · free forever",
  hero: {
    eyebrow: "Open-source CLI · built for DeepSeek",
    titleLead: "Real coding agent.",
    titleAccent: "DeepSeek prices.",
    titleTail: "Verified output.",
    subtitle:
      "Tanya brings Claude Code-style flow to DeepSeek — then checks the final state itself, so a cheap model's confidence never becomes your 2 a.m. bug. Free, open-source, and it stays that way.",
    ctaPrimary: "Copy install command",
    ctaSecondary: "Star on GitHub",
    copied: "Copied to clipboard",
    runHint: "then run",
    terminalTitle: "tanya — live session",
    terminalCaption: "✓ verdict: DONE — Tanya checked the build itself",
  },
  scenes: {
    steps: {
      connect: {
        label: "Connect",
        caption: "Drop in your DeepSeek key and Tanya is live in one command.",
      },
      plan: {
        label: "Plan",
        caption: "Tanya turns your one-line ask into an ordered plan before touching code.",
      },
      edit: {
        label: "Edit live",
        caption: "Watch files change as it types — streaming edits, never a black box.",
      },
      verify: {
        label: "Verify",
        caption: "The moat: Tanya runs the build and checks the result before saying it's done.",
      },
      cost: {
        label: "Count the cost",
        caption: "DeepSeek tokens cost pennies. Tanya itself is free, forever.",
      },
    },
  },
  openSource: {
    badge: "Free forever · open-source",
    title: "Built in the open. Free today, free always.",
    subtitle:
      "Tanya is open-source on GitHub and there's no paid tier waiting in the wings. Read every line, file an issue, or ship a pull request — the project gets better because builders like you push it forward.",
    ctaPrimary: "Star on GitHub",
    ctaSecondary: "Contribute",
    points: [
      {
        title: "$0, and it stays $0",
        desc: "No subscription, no seats, no \"pro\" wall later. The only thing you ever pay for is your own DeepSeek tokens.",
      },
      {
        title: "Fork it, bend it, ship it",
        desc: "The full source lives at github.com/matheusjkweber/tanya under an open license. Make it yours.",
      },
      {
        title: "Contributions welcome",
        desc: "Bugs, ideas, skill-packs, docs — open an issue or a PR. Every contributor shapes where Tanya goes next.",
      },
    ],
  },
  proof: {
    eyebrow: "Why Tanya is different",
    title: "Cheap models hallucinate. Tanya checks their work.",
    subtitle:
      "Every other budget-friendly agent ships whatever the model claims it did. Tanya runs a deterministic verifier on the final state before it tells you the task is done.",
    points: [
      {
        title: "Affordable to run all day",
        desc: "Point Tanya at DeepSeek and keep it running — routine work gets done without a frontier-model bill.",
      },
      {
        title: "A verdict you can trust",
        desc: "Per-task validators plus a final-state verifier mean \"done\" means done — not \"the model said so.\"",
      },
      {
        title: "Routes the hard steps",
        desc: "Tanya keeps deepseek-chat on the grunt work and escalates the genuinely tricky steps to deepseek-reasoner — automatically.",
      },
    ],
  },
  features: {
    eyebrow: "What's inside",
    title: "Claude Code ergonomics, tuned for DeepSeek",
    subtitle:
      "Everything you expect from a serious terminal agent — streaming edits, sub-agents, MCP, permissions — tuned for a cheap model that needs a second pair of eyes.",
    items: {
      verifier: {
        tag: "The moat",
        title: "Deterministic final-state verifier",
        desc: "Tanya re-checks the repo after it works and prints a real verdict. No more trusting a cheap model's word that the build passes.",
      },
      providers: {
        tag: "Bring your own key",
        title: "Built for DeepSeek",
        desc: "Tanya talks to DeepSeek over its OpenAI-compatible endpoint. Drop in your DeepSeek key and start coding — no glue, no wrappers.",
      },
      streaming: {
        tag: "Live by default",
        title: "Watch every edit as it happens",
        desc: "Streaming tool execution shows files changing and commands running in real time — never a silent black box.",
      },
      routing: {
        tag: "Spend where it counts",
        title: "deepseek-chat ↔ reasoner routing",
        desc: "Keep deepseek-chat on the grunt work and route the genuinely hard steps to deepseek-reasoner, automatically.",
      },
      subagents: {
        tag: "Divide and conquer",
        title: "Sub-agent task tool",
        desc: "Hand big jobs to focused sub-agents that plan, dispatch and report back — with optional TDD and auto-fix loops.",
      },
      mcp: {
        tag: "Connected",
        title: "MCP server support",
        desc: "Plug in Model Context Protocol servers to give Tanya your tools, data and APIs — the same ecosystem you already use.",
      },
      permissions: {
        tag: "Stay in control",
        title: "Permissions & spend rules",
        desc: "Approve risky actions, cap token spend and set guardrails so an over-eager run never surprises you.",
      },
      memory: {
        tag: "Gets smarter",
        title: "Golden-task memory & repo map",
        desc: "A structural repo map and golden-task memory help Tanya find its footing fast in code it has seen before.",
      },
    },
  },
  gallery: {
    eyebrow: "Watch it work",
    title: "Empty folder to working app, one step at a time",
    subtitle:
      "Tap through a real Tanya run: connect to DeepSeek, plan, edit files live, then verify the build before it ever says \"done.\"",
    caption: "Tanya building and verifying a calculator app, end to end.",
    note: "real run · sped up 2×",
    realLabel: "The actual recording",
    prev: "Previous clip",
    next: "Next clip",
    loadError: "This clip couldn't load. Serve the site from its web root so /media resolves.",
  },
  byoKey: {
    eyebrow: "Bring your own key",
    title: "Tanya is free. You just bring a DeepSeek key.",
    subtitle:
      "Tanya never touches your card — you pay DeepSeek directly for the tokens you use. The good part: DeepSeek is one of the cheapest models out there, with coding and reasoning scores in the same league as the big frontier models. Top-tier output, pocket-change bills.",
    stepsTitle: "Get running in three steps",
    steps: [
      {
        title: "Create a DeepSeek account",
        desc: "Sign up at platform.deepseek.com — a minute, an email, done.",
      },
      {
        title: "Mint an API key & add credit",
        desc: "Open the API keys page, generate a key, and top up a few dollars — that lasts a long way.",
      },
      {
        title: "Hand it to Tanya",
        desc: "Set DEEPSEEK_API_KEY (or paste it on first run) and you're coding.",
      },
    ],
    cta: "Get your DeepSeek API key",
    benchTitle: "Why DeepSeek?",
    benchDesc:
      "Frontier-class benchmarks at a fraction of the token price — exactly the cheap-but-capable model Tanya's verifier was built to keep honest. You get near-frontier coding without the frontier invoice.",
    stats: [
      { value: "~$0.02", label: "typical cost per task" },
      { value: "OpenAI-compatible", label: "drop-in endpoint" },
      { value: "chat + reasoner", label: "auto-routed for you" },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Free, and open-source forever",
    subtitle:
      "Tanya itself costs nothing and always will. The only thing you pay for is your own DeepSeek tokens — and keeping that bill tiny is the whole point.",
    planName: "Tanya CLI",
    price: "$0",
    priceNote: "open-source · no account · free forever",
    includes: [
      "The full agent — verifier, routing, sub-agents, MCP",
      "Built for DeepSeek — drop in your API key and go",
      "Slash commands, permissions and spend caps",
      "You only ever pay DeepSeek for the tokens you use",
    ],
    cta: "Copy install command",
    secondary: "View source on GitHub",
    finePrint: "No subscription, no seats, no telemetry paywall. Install from npm and go.",
  },
  faq: {
    eyebrow: "Questions",
    title: "The honest FAQ",
    subtitle: "Tanya is a public beta. Here's exactly what that means.",
    items: {
      cost: {
        q: "Is Tanya really free?",
        a: "Yes — free today and free forever. Tanya is open-source and costs nothing to install or run, with no paid tier planned. You only pay DeepSeek for the tokens you use, and because Tanya is built around a cheap model, that bill stays small.",
      },
      models: {
        q: "Which model does Tanya use?",
        a: "DeepSeek. Tanya connects to DeepSeek's OpenAI-compatible endpoint — you supply your own DeepSeek key and run. It uses deepseek-chat for everyday work and can escalate the hardest steps to deepseek-reasoner automatically.",
      },
      verifier: {
        q: "What does the verifier actually do?",
        a: "After Tanya finishes a task, a deterministic verifier inspects the final state of your repo and per-task validators check the specific goal. You get a real pass/fail verdict instead of trusting that the model did what it claimed.",
      },
      openSource: {
        q: "Where's the source code?",
        a: "On GitHub at matheusjkweber/tanya, published to npm as @matheuskrumenauer/tanya. Issues and skill-pack contributions are welcome.",
      },
      platforms: {
        q: "What do I need to run it?",
        a: "Node.js and a terminal on macOS, Linux or Windows. Install globally with npm, set your DeepSeek API key, and run tanya. A hosted web playground is on the way.",
      },
      claudeCode: {
        q: "How is this different from Claude Code?",
        a: "Same ergonomics — live chat, slash commands, sub-agents, MCP — but built for DeepSeek, with a deterministic verifier as the headline feature because a cheaper model needs that check more, not less. And it's free and open-source.",
      },
    },
  },
  finalCta: {
    title: "Spin up Tanya in one command",
    subtitle: "Open a terminal, install from npm, point it at DeepSeek. That's the whole setup — and it's free.",
    primary: "Copy install command",
    secondary: "Read the docs",
  },
  footer: {
    tagline: "The coding agent that runs on what you can afford — and proves it worked.",
    product: "Product",
    resources: "Resources",
    legal: "Legal",
    links: {
      features: "Features",
      pricing: "Pricing",
      faq: "FAQ",
      github: "GitHub",
      npm: "npm package",
      docs: "Documentation",
      terms: "Terms of Service",
      support: "Support",
      contact: "Contact",
    },
    honesty:
      "Public beta. No fake installs, ratings or reviews on this page — just the product.",
    rights: "Tanya. Open-source, made for builders.",
  },
  roadmap: {
    eyebrow: "Roadmap",
    title: "Where Tanya has been — and where it's going",
    subtitle:
      "Tanya already does the hard part: a real coding agent that works on cheap models. Here's the path so far and what we're building next, toward Claude-Code-grade power on your own keys.",
    nowLabel: "You are here",
    legend: { shipped: "Shipped", next: "In progress", planned: "Planned", later: "Later" },
    milestones: [
      {
        status: "shipped",
        title: "A coding agent that survives DeepSeek",
        desc: "Permissive tool-call parsing, retry-with-correction, schema flattening and reasoning-model support — the groundwork that makes cheap models usable.",
        items: ["Tool-call recovery", "Streaming REPL", "Reasoning models"],
      },
      {
        status: "shipped",
        title: "The verifier moat",
        desc: "A deterministic verifier, platform validators and a forbidden-pattern gate catch the hallucinations and shipping bugs cheap models would otherwise sneak past.",
        items: ["Verifier", "Apple / Android / Go / Prisma validators", "Forbidden-pattern gate"],
      },
      {
        status: "shipped",
        title: "Spend less, route smarter",
        desc: "Per-step multi-provider routing with a token-fit cost cascade, plus a live token + USD counter so the bill never surprises you.",
        items: ["Multi-model routing", "Cost cascade", "Live cost counter"],
      },
      {
        status: "shipped",
        title: "An agent you can extend",
        desc: "MCP client and server, slash commands, skill packs, project memory and bounded sub-agents — with session resume so long work survives.",
        items: ["MCP client + server", "Slash commands", "Skills", "Sub-agents", "Session resume"],
      },
      {
        status: "next",
        title: "Extensibility core",
        desc: "The features that turn Tanya from an agent into a platform you can shape to your own workflow.",
        items: ["Lifecycle hooks", "Named sub-agents", "Slash-command templating"],
      },
      {
        status: "planned",
        title: "Daily-feel parity",
        desc: "The interactions that make a coding agent feel effortless every day.",
        items: ["Interactive plan mode", "Hierarchical memory + imports", "Web tools", "Background shells"],
      },
      {
        status: "planned",
        title: "Power-user & trust",
        desc: "Deeper control and safety for people who live in the terminal.",
        items: ["Checkpoint / rewind", "Unified settings", "Context view + statusline", "Output styles"],
      },
      {
        status: "later",
        title: "Ecosystem",
        desc: "Reach beyond the CLI once the core is rock-solid.",
        items: ["Git / PR automation", "OS sandbox", "Image input", "SDK"],
      },
    ],
  },
  featureSuggest: {
    title: "Have something we should build?",
    subtitle: "The roadmap is shaped by what builders actually need. Tell us what would make Tanya better — it lands straight in our inbox.",
    placeholder: "I wish Tanya could…",
    emailPlaceholder: "you@email.com (optional, if you want a reply)",
    submit: "Send suggestion",
    sending: "Sending…",
    successTitle: "Got it — thank you!",
    successBody: "Your idea is in our inbox. The best ones make it onto the roadmap above.",
    errorBody: "We couldn't send that automatically, so we opened a pre-filled email draft for you.",
  },
  common: {
    backHome: "Back to home",
    lastUpdated: "Last updated",
    comingSoon: "Coming soon",
    emailUs: "Email us",
  },
  terms: {
    title: "Terms of Service",
    intro:
      "Tanya is open-source software provided for free. By installing or using it, you agree to the terms below. Plain language, no surprises.",
    sections: [
      {
        h: "1. The software",
        p: "Tanya is a command-line coding agent distributed as the npm package @matheuskrumenauer/tanya and on GitHub. It is provided as-is, as a public beta that is still evolving.",
      },
      {
        h: "2. No account, no fees",
        p: "Using Tanya requires no account and costs nothing. Any charges you incur come from DeepSeek, whose API key you supply. That relationship is governed by DeepSeek's own terms.",
      },
      {
        h: "3. Your code and data",
        p: "Tanya runs locally on your machine and acts on the files and commands you direct it to. Prompts and code you send to DeepSeek are subject to DeepSeek's data policies. We do not operate a server that stores your repositories.",
      },
      {
        h: "4. Acceptable use",
        p: "Use Tanya lawfully. You are responsible for the actions it takes on your behalf, including any code it writes, commands it runs, and money you spend on model tokens. Review changes before relying on them.",
      },
      {
        h: "5. Intellectual property & license",
        p: "Tanya's source is open. Code you write with Tanya is yours. Third-party model output is governed by the relevant provider's terms.",
      },
      {
        h: "6. Warranty & liability",
        p: "Tanya is provided without warranty of any kind. To the maximum extent permitted by law, the maintainers are not liable for damages arising from its use, including lost data or DeepSeek spend. The verifier is a strong safety net, not a guarantee of correctness.",
      },
      {
        h: "7. Governing law",
        p: "These terms are governed by the laws of the maintainer's jurisdiction [placeholder — to be finalized before general availability]. If any clause is unenforceable, the rest remains in effect.",
      },
      {
        h: "8. Changes",
        p: "We may update these terms as Tanya moves from beta to a stable release. Material changes will be reflected by the date above and in the GitHub repository.",
      },
    ],
  },
  support: {
    title: "Support",
    intro:
      "Tanya is a small open-source project in public beta. The fastest way to get help is below — we read everything.",
    primaryChannel: "Email us at",
    faqTitle: "Common questions",
    items: [
      {
        q: "Tanya can't reach DeepSeek — what now?",
        a: "Run `tanya providers test` to validate your DeepSeek API key and endpoint. Most issues are a missing environment variable or a base URL that doesn't point at DeepSeek's OpenAI-compatible endpoint.",
      },
      {
        q: "How do I report a bug or request a feature?",
        a: "Open an issue on GitHub at matheusjkweber/tanya. Include the command you ran and the output. Beta feedback genuinely shapes the roadmap.",
      },
      {
        q: "The agent did something I didn't expect.",
        a: "Use the permission layer and spend rules to require approval for risky actions, and `/verify` to re-check the result. If something slipped through, please file an issue with the session details.",
      },
      {
        q: "Is there documentation?",
        a: "Yes — the README and docs in the GitHub repository cover providers, routing, the token economy and the verifier. More guides land as the beta matures.",
      },
    ],
  },
  contact: {
    title: "Contact",
    intro:
      "Questions, partnership ideas, or beta feedback? Send a note — it reaches the people building Tanya.",
    nameLabel: "Your name",
    emailLabel: "Your email",
    messageLabel: "Message",
    namePlaceholder: "Ada Lovelace",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "Tell us what you're building with Tanya…",
    submit: "Send message",
    sending: "Sending…",
    successTitle: "Message sent",
    successBody: "Thanks for reaching out — it landed with the people building Tanya. We'll reply to the email you gave us.",
    sendAnother: "Send another message",
    errorBody:
      "We couldn't send that automatically, so we opened a pre-filled email draft for you. If nothing popped up, write us directly at contato@tanyahq.com.",
    directLabel: "Prefer your own mail client?",
    githubLabel: "Found a bug?",
    githubDesc: "Open an issue on GitHub — it's the fastest path to a fix.",
  },
};

export default en;
