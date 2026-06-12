"use client";

import { useLang } from "./LanguageProvider";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "#pricing", ta: "கட்டணம்", en: "Pricing" },
  { href: "#gallery", ta: "படங்கள்", en: "Gallery" },
  { href: "#book", ta: "முன்பதிவு", en: "Book" },
  { href: "#contact", ta: "தொடர்பு", en: "Contact" },
];

export default function Navbar() {
  const { lang, toggle, t } = useLang();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b-[3px] border-brand-pink bg-brand-navy/90 px-5 py-2.5 backdrop-blur-md">
      <a href="#top" className="flex items-center gap-2.5 text-white no-underline">
        <span className="animate-bounce-shuttle text-2xl" aria-hidden>
          🏸
        </span>
        <b className="rounded-md bg-white px-3 py-1 text-lg font-black leading-tight">
          <span className="bg-gradient-to-b from-brand-pink to-brand-blue-deep bg-clip-text font-[family-name:var(--font-noto-tamil)] font-black text-transparent">
            {SITE.nameTa}
          </span>
        </b>
      </a>

      <ul className="flex items-center gap-5">
        {LINKS.map((link) => (
          <li key={link.href} className="hidden md:block">
            <a
              href={link.href}
              className="text-sm font-bold text-white/90 transition-colors hover:text-brand-lime"
            >
              {t(link.ta, link.en)}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={toggle}
            className="cursor-pointer rounded-full border-2 border-brand-lime px-3.5 py-1.5 text-sm font-extrabold text-brand-lime transition-colors hover:bg-brand-lime hover:text-brand-navy"
            aria-label={lang === "ta" ? "Switch to English" : "தமிழுக்கு மாறவும்"}
          >
            {lang === "ta" ? "English" : "தமிழ்"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
