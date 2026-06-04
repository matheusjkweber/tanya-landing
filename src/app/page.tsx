import { LandingPage } from "@/components/landing/landing-page";
import { LocaleRedirect } from "@/components/landing/locale-redirect";

/** Root route "/" — served in the default locale (en), unprefixed. */
export default function Home() {
  return (
    <>
      <LocaleRedirect />
      <LandingPage locale="en" />
    </>
  );
}
