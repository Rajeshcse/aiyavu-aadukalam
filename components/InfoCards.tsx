"use client";

import { Clock, Warehouse, Trophy, Bike } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { useLang } from "./LanguageProvider";

const CARDS = [
  {
    Icon: Clock,
    accent: "border-brand-pink",
    titleTa: "நேரம்",
    titleEn: "Timings",
    bodyTa: "காலை 6:00 முதல் இரவு 9:00 வரை — வாரம் முழுவதும்.",
    bodyEn: "6:00 AM to 9:00 PM — all 7 days of the week.",
  },
  {
    Icon: Warehouse,
    accent: "border-brand-blue",
    titleTa: "உள்ளரங்க கோர்ட்",
    titleEn: "Indoor Court",
    bodyTa: "முழு அளவிலான உள்ளரங்க கோர்ட் — மழை, வெயில் கவலையின்றி விளையாடலாம்.",
    bodyEn: "Full-size covered indoor court — play rain or shine, day or night.",
  },
  {
    Icon: Trophy,
    accent: "border-brand-lime",
    titleTa: "பயிற்சி",
    titleEn: "Coaching",
    bodyTa: "குழந்தைகள் & வளரும் வீரர்களுக்கு பேட்மிண்டன் பயிற்சி. போட்டிகளும் நடத்தப்படும்!",
    bodyEn: "Badminton coaching for kids & rising players. Regular tournaments too!",
  },
  {
    Icon: Bike,
    accent: "border-brand-green",
    titleTa: "பைக் பார்க்கிங்",
    titleEn: "Bike Parking",
    bodyTa: "இருசக்கர வாகனங்களுக்கு இலவச பார்க்கிங் வசதி உள்ளது.",
    bodyEn: "Free two-wheeler parking available right at the court.",
  },
];

export default function InfoCards() {
  const { t } = useLang();

  return (
    <section id="info" className="px-6 pb-16 pt-24">
      <div className="mx-auto max-w-5xl">
        <SectionHead
          tagTa="எங்கள் ஆடுகளம்"
          tagEn="The Court"
          titleTa="விளையாட தயாரா?"
          titleEn="Ready to Play?"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.titleEn} delay={i * 0.08}>
              <div
                className={`h-full rounded-2xl border-b-[6px] ${card.accent} bg-brand-navy p-6 text-white transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1`}
              >
                <card.Icon size={36} className="mb-3 text-brand-lime" aria-hidden />
                <h3 className="mb-2 text-lg font-extrabold text-brand-lime">
                  {t(card.titleTa, card.titleEn)}
                </h3>
                <p className="text-sm leading-relaxed opacity-90">
                  {t(card.bodyTa, card.bodyEn)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
