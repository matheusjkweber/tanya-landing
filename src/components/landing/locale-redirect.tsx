"use client";

import { useEffect } from "react";

/**
 * First-visit language match. Only fires on the unprefixed root ("/"), only
 * once per browser (guarded by localStorage), and only when the visitor's
 * language clearly prefers pt-BR or es. English speakers and return visitors
 * stay put — no redirect loops, no fighting an explicit choice.
 */
export function LocaleRedirect() {
  useEffect(() => {
    try {
      if (window.location.pathname !== "/") return;
      if (localStorage.getItem("tanya-locale-routed")) return;
      localStorage.setItem("tanya-locale-routed", "1");

      const lang = (navigator.language || "").toLowerCase();
      if (lang.startsWith("pt")) window.location.replace("/pt-BR");
      else if (lang.startsWith("es")) window.location.replace("/es");
    } catch {
      /* storage blocked — skip the redirect entirely */
    }
  }, []);

  return null;
}
