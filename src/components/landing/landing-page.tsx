import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { OpenSource } from "./open-source";
import { ValueProof } from "./value-proof";
import { FeatureBento } from "./feature-bento";
import { DemoGallery } from "./demo-gallery";
import { Roadmap } from "./roadmap";
import { ByoKey } from "./byo-key";
import { Pricing } from "./pricing";
import { Faq } from "./faq";
import { FinalCta } from "./final-cta";
import { Footer } from "./footer";

/** Full one-page landing, locale-driven. Root "/" renders this with `en`. */
export function LandingPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <Navbar dict={dict} locale={locale} />
      <main>
        <Hero dict={dict} />
        <OpenSource dict={dict} />
        <ValueProof dict={dict} />
        <FeatureBento dict={dict} />
        <DemoGallery dict={dict} />
        <Roadmap dict={dict} />
        <Pricing dict={dict} />
        <ByoKey dict={dict} />
        <Faq dict={dict} />
        <FinalCta dict={dict} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
