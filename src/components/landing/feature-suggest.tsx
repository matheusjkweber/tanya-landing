"use client";

import { useState } from "react";
import { CheckCircle2, Lightbulb, Loader2, Send } from "lucide-react";
import { CONTACT_ENDPOINT, PRODUCT, toLandingContactPayload } from "@/lib/landing-data";
import type { Messages } from "@/i18n/messages/en";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * "Suggest a feature" form at the bottom of the roadmap. POSTs to the CosmoHQ
 * landing-contact endpoint (source = "tanya-feature-request"), which emails the
 * CosmoHQ inbox. Includes a honeypot field; on any failure it falls back to a
 * pre-filled mail draft so an idea is never lost.
 */
export function FeatureSuggest({ dict }: { dict: Messages }) {
  const t = dict.featureSuggest;
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function openMailDraft() {
    const subject = encodeURIComponent("Tanya — feature request");
    const body = encodeURIComponent(`${message}${email ? `\n\n— ${email}` : ""}`);
    window.location.href = `mailto:${PRODUCT.contactEmail}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending" || !message.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          toLandingContactPayload({
            email,
            message,
            projectType: "Tanya — feature request",
            source: "tanya-feature-request",
            pageUrl: typeof window !== "undefined" ? window.location.href : "",
          }),
        ),
      });
      if (!res.ok) throw new Error(`Bad status ${res.status}`);
      setStatus("sent");
      setMessage("");
      setEmail("");
    } catch {
      setStatus("error");
      openMailDraft();
    }
  }

  if (status === "sent") {
    return (
      <div className="glass-panel mx-auto mt-12 flex max-w-2xl flex-col items-center gap-3 rounded-2xl p-8 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-verify/12 text-verify ring-1 ring-verify/25">
          <CheckCircle2 className="h-6 w-6" aria-hidden />
        </span>
        <h3 className="font-display text-lg font-semibold text-cream">{t.successTitle}</h3>
        <p className="max-w-sm text-sm leading-relaxed text-cream-dim">{t.successBody}</p>
      </div>
    );
  }

  const field =
    "w-full rounded-card border border-line bg-ink-1/70 px-4 py-3 text-sm text-cream placeholder:text-muted transition-colors focus:border-amber/50 focus:outline-none disabled:opacity-60";
  const sending = status === "sending";

  return (
    <div className="mx-auto mt-14 max-w-2xl">
      <div className="mb-5 flex flex-col items-center gap-2 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-amber/12 px-3 py-1 font-mono text-xs font-medium text-amber ring-1 ring-amber/25">
          <Lightbulb className="h-3.5 w-3.5" aria-hidden />
          {t.title}
        </span>
        <p className="max-w-lg text-sm leading-relaxed text-cream-dim">{t.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="glass-panel flex flex-col gap-4 rounded-2xl p-5 sm:p-6">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.placeholder}
          rows={3}
          className={`${field} resize-y`}
          disabled={sending}
          required
          minLength={10}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.emailPlaceholder}
          className={field}
          disabled={sending}
        />
        {status === "error" ? (
          <p className="text-sm leading-relaxed text-cream-dim">{t.errorBody}</p>
        ) : null}

        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center gap-2 self-start rounded-card bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-bright disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              {t.sending}
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden />
              {t.submit}
            </>
          )}
        </button>
      </form>
    </div>
  );
}
