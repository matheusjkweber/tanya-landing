import { Github, Mail, Sparkles } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import { PRODUCT } from "@/lib/landing-data";
import type { Messages } from "@/i18n/messages/en";

export function Footer({ dict, locale }: { dict: Messages; locale: Locale }) {
  const { footer } = dict;
  const home = localizedPath(locale);
  const anchor = (hash: string) => `${home === "/" ? "" : home}${hash}`;
  const year = 2026;

  const columns = [
    {
      title: footer.product,
      links: [
        { label: footer.links.features, href: anchor("#features") },
        { label: footer.links.pricing, href: anchor("#pricing") },
        { label: footer.links.faq, href: anchor("#faq") },
      ],
    },
    {
      title: footer.resources,
      links: [
        { label: footer.links.github, href: PRODUCT.github, external: true },
        { label: footer.links.npm, href: PRODUCT.npm, external: true },
        { label: footer.links.docs, href: PRODUCT.github, external: true },
      ],
    },
    {
      title: footer.legal,
      links: [
        { label: footer.links.terms, href: localizedPath(locale, "terms") },
        { label: footer.links.support, href: localizedPath(locale, "support") },
        { label: footer.links.contact, href: localizedPath(locale, "contact") },
      ],
    },
  ];

  return (
    <footer className="border-t border-line/60 bg-ink-1/60">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + tagline */}
          <div className="flex flex-col gap-4">
            <a href={home} className="flex items-center gap-2.5 font-display text-lg font-bold text-cream">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber/15 ring-1 ring-amber/30">
                <Sparkles className="h-4 w-4 text-amber" aria-hidden />
              </span>
              Tanya
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-cream-dim">{footer.tagline}</p>
            <div className="flex items-center gap-2">
              <a
                href={PRODUCT.github}
                target="_blank"
                rel="noreferrer"
                aria-label={footer.links.github}
                className="grid h-10 w-10 place-items-center rounded-card border border-line text-cream-dim transition-colors hover:border-amber/40 hover:text-amber"
              >
                <Github className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={`mailto:${PRODUCT.contactEmail}`}
                aria-label={dict.common.emailUs}
                className="grid h-10 w-10 place-items-center rounded-card border border-line text-cream-dim transition-colors hover:border-amber/40 hover:text-amber"
              >
                <Mail className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{col.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      className="text-sm text-cream-dim transition-colors hover:text-amber"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-relaxed text-muted">{footer.honesty}</p>
          <p className="font-mono text-xs text-muted">
            © {year} {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
