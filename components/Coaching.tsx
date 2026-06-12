"use client";

import Image from "next/image";
import { Zap, Phone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { useLang } from "./LanguageProvider";
import { SITE } from "@/lib/site";

const POINTS = [
  { ta: "குழந்தைகளுக்கான சிறப்பு பயிற்சி வகுப்புகள்", en: "Dedicated coaching batches for kids" },
  { ta: "பரிசுகளுடன் வழக்கமான உள்ளூர் போட்டிகள்", en: "Regular local tournaments with prizes" },
  {
    ta: "அனைத்து நிலை வீரர்களும் வரவேற்கப்படுகிறார்கள்",
    en: "All skill levels welcome — beginner to advanced",
  },
];

export default function Coaching() {
  const { t } = useLang();

  return (
    <section id="coaching" className="px-6 py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-11 md:grid-cols-2">
        <div>
          <SectionHead
            tagTa="பயிற்சி & போட்டிகள்"
            tagEn="Coaching & Tournaments"
            titleTa="சாம்பியன்கள் இங்கே உருவாகிறார்கள்"
            titleEn="Champions Are Made Here"
          />
          <Reveal>
            <p className="text-base leading-relaxed">
              {t(
                "அய்யாவு ஆடுகளத்தில் வெறும் விளையாட்டு மட்டும் இல்லை — முறையான பேட்மிண்டன் பயிற்சியும், கோப்பைகளுடன் கூடிய உள்ளூர் போட்டிகளும் நடக்கின்றன. உங்கள் குழந்தையின் திறமையை அடுத்த நிலைக்கு கொண்டு செல்லுங்கள்!",
                "Aiyavu Aadukalam is more than just a court — we run structured badminton coaching and local tournaments with trophies and prizes. Take your game (or your kid's game) to the next level!",
              )}
            </p>
            <ul className="mt-5">
              {POINTS.map((p) => (
                <li key={p.en} className="flex items-start gap-3 py-2.5 font-semibold">
                  <Zap size={18} className="mt-1 shrink-0 fill-brand-pink text-brand-pink" aria-hidden />
                  {t(p.ta, p.en)}
                </li>
              ))}
            </ul>
            <a
              href={SITE.phoneHref}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-pink px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_8px_24px_rgba(229,24,154,0.35)] transition-all hover:-translate-y-1 hover:bg-brand-pink-dark"
            >
              <Phone size={18} aria-hidden />
              {t("பயிற்சி பற்றி கேளுங்கள்", "Ask About Coaching")}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <Image
            src="/images/gallery1.jpg"
            alt={t("கோப்பை வழங்கும் விழா", "Trophy presentation at Aiyavu Aadukalam")}
            width={760}
            height={500}
            loading="lazy"
            className="-rotate-1 rounded-[20px] shadow-[14px_14px_0_var(--color-brand-pink)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
