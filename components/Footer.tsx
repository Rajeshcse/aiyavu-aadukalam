"use client";

import { useLang } from "./LanguageProvider";
import { SITE } from "@/lib/site";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t-4 border-brand-pink bg-brand-navy px-5 py-9 text-center text-white">
      <div className="mb-3 inline-block rounded-md bg-white px-5 py-1 text-2xl font-black">
        <span className="bg-gradient-to-b from-brand-pink to-brand-blue-deep bg-clip-text font-[family-name:var(--font-noto-tamil)] font-black text-transparent">
          அய்யாவு ஆடுகளம்
        </span>
      </div>
      <p className="text-sm opacity-70">
        {t(
          `© அய்யாவு ஆடுகளம் பேட்மிண்டன் கோர்ட் · அரியாங்குப்பம், புதுச்சேரி · ${SITE.phone}`,
          `© ${SITE.nameEn} · Ariyankuppam, Puducherry · ${SITE.phone}`,
        )}
      </p>
    </footer>
  );
}
