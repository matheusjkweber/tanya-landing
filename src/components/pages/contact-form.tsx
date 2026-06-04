"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { CONTACT_ENDPOINT, PRODUCT, toLandingContactPayload } from "@/lib/landing-data";
import type { Messages } from "@/i18n/messages/en";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Real, working contact form. Static export has no server, so we POST straight
 * to the CosmoHQ landing-contact endpoint (CONTACT_ENDPOINT). If that request
 * fails — offline, off-platform, or the endpoint isn't live yet — we fall back
 * to a pre-filled mail draft so the message always has a way out, and surface
 * the direct address. Either way the user gets clear inline feedback.
 */
export function ContactForm({ dict }: { dict: Messages }) {
  const { contact } = dict;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function openMailDraft() {
    const subject = encodeURIComponent(`Tanya — ${name || "contact"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
    window.location.href = `mailto:${PRODUCT.contactEmail}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          toLandingContactPayload({
            name,
            email,
            message,
            projectType: "Tanya — contact",
            source: "tanya-landing",
            pageUrl: typeof window !== "undefined" ? window.location.href : "",
          }),
        ),
      });
      if (!res.ok) throw new Error(`Bad status ${res.status}`);
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      // Endpoint unreachable — hand off to the user's mail client so nothing is lost.
      setStatus("error");
      openMailDraft();
    }
  }

  if (status === "sent") {
    return (
      <div className="glass-panel flex flex-col items-center gap-4 rounded-2xl p-8 text-center sm:p-10">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-verify/12 text-verify ring-1 ring-verify/25">
          <CheckCircle2 className="h-7 w-7" aria-hidden />
        </span>
        <h3 className="font-display text-xl font-semibold text-cream">{contact.successTitle}</h3>
        <p className="max-w-sm text-sm leading-relaxed text-cream-dim">{contact.successBody}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-amber transition-colors hover:text-amber-bright"
        >
          {contact.sendAnother}
        </button>
      </div>
    );
  }

  const field =
    "w-full rounded-card border border-line bg-ink-1/70 px-4 py-3 text-sm text-cream placeholder:text-muted transition-colors focus:border-amber/50 focus:outline-none disabled:opacity-60";
  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="glass-panel flex flex-col gap-5 rounded-2xl p-6 sm:p-7">
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-cream-dim">{contact.nameLabel}</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={contact.namePlaceholder}
          className={field}
          disabled={sending}
          required
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-cream-dim">{contact.emailLabel}</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={contact.emailPlaceholder}
          className={field}
          disabled={sending}
          required
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-cream-dim">{contact.messageLabel}</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={contact.messagePlaceholder}
          rows={5}
          className={`${field} resize-y`}
          disabled={sending}
          required
          minLength={10}
        />
      </label>

      {status === "error" ? (
        <p className="flex items-start gap-2 rounded-card border border-coral/30 bg-coral/10 px-4 py-3 text-sm leading-relaxed text-cream-dim">
          <Mail className="mt-0.5 h-4 w-4 shrink-0 text-coral" aria-hidden />
          {contact.errorBody}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center gap-2 rounded-card bg-amber px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-amber-bright disabled:cursor-not-allowed disabled:opacity-70"
      >
        {sending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            {contact.sending}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden />
            {contact.submit}
          </>
        )}
      </button>
    </form>
  );
}
