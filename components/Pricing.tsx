"use client";

import { BadgeCheck, PiggyBank } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { useLang } from "./LanguageProvider";

interface Plan {
  titleTa: string;
  titleEn: string;
  price: string | null;
  priceTa?: string;
  priceEn?: string;
  perTa: string;
  perEn: string;
  popular?: boolean;
  features: { ta: string; en: string }[];
}

const PLANS: Plan[] = [
  {
    titleTa: "தினசரி விளையாட்டு",
    titleEn: "Daily Play",
    price: "₹100",
    perTa: "ஒருவருக்கு / நாள் (குறைந்தது 4 பேர்)",
    perEn: "per head / day · min. 4 people",
    features: [
      { ta: "நுழைவுக் கட்டணம் இல்லை", en: "No admission fee" },
      { ta: "எந்த நாளும் வரலாம்", en: "Walk in any day" },
      { ta: "உள்ளரங்க கோர்ட்", en: "Indoor court" },
    ],
  },
  {
    titleTa: "மாதாந்திர உறுப்பினர்",
    titleEn: "Monthly Membership",
    price: "₹500",
    perTa: "ஒருவருக்கு / மாதம்",
    perEn: "per head / month",
    popular: true,
    features: [
      { ta: "வாரம் முழுவதும் விளையாடலாம்", en: "Play all days of the week" },
      { ta: "காலை & மாலை ஸ்லாட்கள்", en: "Morning & evening slots" },
      { ta: "உள்ளரங்க கோர்ட்", en: "Indoor court" },
    ],
  },
  {
    titleTa: "வார இறுதி மட்டும்",
    titleEn: "Weekends Only",
    price: "₹300",
    perTa: "ஒருவருக்கு / மாதம் (சனி & ஞாயிறு)",
    perEn: "per head / month (Sat & Sun)",
    features: [
      { ta: "சனி & ஞாயிறு விளையாட்டு", en: "Saturday & Sunday play" },
      { ta: "வேலை நாட்களில் பிஸியா? இது உங்களுக்கே!", en: "Busy on weekdays? This one's for you!" },
      { ta: "உள்ளரங்க கோர்ட்", en: "Indoor court" },
    ],
  },
  {
    titleTa: "பேட்மிண்டன் பயிற்சி",
    titleEn: "Badminton Coaching",
    price: "₹800",
    perTa: "ஒருவருக்கு / மாதம்",
    perEn: "per head / month",
    features: [
      { ta: "நுழைவுக் கட்டணம் ₹1,500 (ஒரு முறை மட்டும்)", en: "Admission ₹1,500 (one-time)" },
      { ta: "திங்கள்–வெள்ளி · மாலை 5:00–6:00", en: "Mon–Fri · 5:00–6:00 PM" },
      { ta: "பயிற்சியாளர்: T. எலபரதி", en: "Coach: T. Elabarathi" },
    ],
  },
];

export default function Pricing() {
  const { t } = useLang();

  return (
    <section
      id="pricing"
      className="clip-slant bg-gradient-to-br from-brand-navy via-brand-blue-deep to-brand-pink-dark px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHead
          light
          tagTa="கட்டணம்"
          tagEn="Pricing"
          titleTa="எளிய, நேர்மையான விலை"
          titleEn="Simple, Honest Pricing"
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.titleEn} delay={i * 0.1}>
              <div className="relative h-full overflow-hidden rounded-[20px] bg-white p-8 text-center text-gray-900 transition-all duration-300 hover:-translate-y-2.5 hover:scale-[1.02] hover:shadow-2xl">
                {plan.popular && (
                  <div className="absolute -right-10 top-5 rotate-40 bg-brand-pink px-12 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider text-white">
                    {t("பிரபலம்", "Popular")}
                  </div>
                )}
                <h3 className="text-base font-extrabold uppercase tracking-wider text-brand-blue-deep">
                  {t(plan.titleTa, plan.titleEn)}
                </h3>
                {plan.price ? (
                  <div className="font-display my-4 text-5xl font-extrabold text-brand-pink">
                    {plan.price}
                  </div>
                ) : (
                  <div className="my-5 text-3xl font-extrabold text-brand-pink">
                    {t(plan.priceTa!, plan.priceEn!)}
                  </div>
                )}
                <div className="mb-4 text-sm font-semibold text-gray-500">
                  {t(plan.perTa, plan.perEn)}
                </div>
                <ul className="text-left text-sm">
                  {plan.features.map((f) => (
                    <li
                      key={f.en}
                      className="flex items-start gap-2 border-t border-dashed border-gray-200 py-2"
                    >
                      <BadgeCheck size={16} className="mt-0.5 shrink-0 text-brand-green" aria-hidden />
                      {t(f.ta, f.en)}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-9 flex items-center justify-center gap-3 rounded-xl border-2 border-dashed border-brand-lime bg-brand-lime/15 p-4 text-center font-bold text-brand-lime">
            <PiggyBank size={24} className="shrink-0" aria-hidden />
            {t(
              "உறுப்பினராக சேரும்போது ₹1000 நுழைவுக் கட்டணம் (ஒரு முறை மட்டும்) செலுத்த வேண்டும். தினசரி விளையாட்டுக்கு நுழைவுக் கட்டணம் இல்லை.",
              "A one-time admission fee of ₹1000 is payable when joining as a member. Daily play requires no admission fee.",
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
