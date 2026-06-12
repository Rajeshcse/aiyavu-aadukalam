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
    titleTa: "மாதாந்திர உறுப்பினர்",
    titleEn: "Monthly Membership",
    price: "₹800",
    perTa: "ஒருவருக்கு / மாதம்",
    perEn: "per head / month",
    popular: true,
    features: [
      { ta: "வாரம் முழுவதும் விளையாடலாம்", en: "Play all days of the week" },
      { ta: "காலை 6 – இரவு 9 மணி", en: "6 AM – 9 PM access" },
      { ta: "உள்ளரங்க கோர்ட்", en: "Indoor court" },
    ],
  },
  {
    titleTa: "வார இறுதி மட்டும்",
    titleEn: "Weekends Only",
    price: "₹500",
    perTa: "ஒருவருக்கு / மாதம்",
    perEn: "per head / month",
    features: [
      { ta: "சனி & ஞாயிறு விளையாட்டு", en: "Saturday & Sunday play" },
      { ta: "வேலை நாட்களில் பிஸியா? இது உங்களுக்கே!", en: "Busy on weekdays? This one's for you!" },
      { ta: "உள்ளரங்க கோர்ட்", en: "Indoor court" },
    ],
  },
  {
    titleTa: "பேட்மிண்டன் பயிற்சி",
    titleEn: "Coaching",
    price: null,
    priceTa: "விசாரிக்கவும்",
    priceEn: "Ask Us",
    perTa: "விவரங்களுக்கு அழைக்கவும்",
    perEn: "call for details",
    features: [
      { ta: "அனுபவமிக்க பயிற்சியாளர்", en: "Experienced coach" },
      { ta: "குழந்தைகள் & பெரியவர்கள்", en: "Kids & adults welcome" },
      { ta: "உள்ளூர் போட்டிகள்", en: "Local tournaments" },
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
        <div className="grid gap-6 md:grid-cols-3">
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
              "சேரும்போது ₹1000 முன்பணம் (Advance) செலுத்த வேண்டும்.",
              "A one-time advance of ₹1000 is payable when you join.",
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
