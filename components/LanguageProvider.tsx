"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ta" | "en";

interface LangContextValue {
  lang: Lang;
  toggle: () => void;
  /** Pick the string for the active language. */
  t: (ta: string, en: string) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Render English on the server and first paint; hydrate the saved choice after mount.
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "ta") setLang("ta");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === "ta" ? "en" : "ta";
      localStorage.setItem("lang", next);
      return next;
    });
  }, []);

  const t = useCallback(
    (ta: string, en: string) => (lang === "ta" ? ta : en),
    [lang],
  );

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
