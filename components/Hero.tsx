"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, CalendarCheck, Star } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { SITE } from "@/lib/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const { t } = useLang();

  return (
    <header id="top" className="clip-hero relative flex min-h-svh items-center overflow-hidden pb-24 pt-28 text-white">
      {/* Court photo backdrop, loaded eagerly as the LCP image */}
      <Image
        src="/images/hero.jpg"
        alt={t("அய்யாவு ஆடுகளம் உள்ளரங்க கோர்ட்", "Aiyavu Aadukalam indoor court")}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-blue-deep/80 to-brand-pink/55" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-5xl px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={item}
          className="mb-5 inline-block -rotate-2 rounded bg-brand-lime px-4 py-1.5 text-xs font-extrabold uppercase tracking-[2px] text-brand-navy"
        >
          {t("அரியாங்குப்பம், புதுச்சேரி", "Ariyankuppam, Puducherry")}
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-extrabold uppercase leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-b from-brand-pink to-brand-blue bg-clip-text text-transparent drop-shadow-[0_5px_14px_rgba(10,27,42,0.9)]">
            {t("அய்யாவு", "Aiyavu")}
            <br />
            {t("ஆடுகளம்", "Aadukalam")}
          </span>
          <br />
          <span className="text-stroke-lime">
            {t("விளையாடு. வெல்லு.", "Play. Smash. Win.")}
          </span>
        </motion.h1>

        <motion.p variants={item} className="mt-5 max-w-xl text-lg font-semibold opacity-95 sm:text-xl">
          {t(
            "உள்ளரங்க பேட்மிண்டன் கோர்ட் + பயிற்சி. காலை 6 மணி முதல் இரவு 9 மணி வரை. ⭐ 4.6 Google மதிப்பீடு!",
            "Indoor badminton court + coaching. Open 6 AM to 9 PM, every day. ⭐ Rated 4.6 on Google!",
          )}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3.5">
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-pink px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_8px_24px_rgba(229,24,154,0.45)] transition-all hover:-translate-y-1 hover:scale-[1.03] hover:bg-brand-pink-dark"
          >
            <CalendarCheck size={18} aria-hidden />
            {t("இப்போதே பதிவு செய்", "Book a Slot")}
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-brand-navy"
          >
            <Phone size={18} aria-hidden />
            {t("அழைக்க", "Call Us")}
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-11 flex flex-wrap gap-6">
          <div className="border-l-4 border-brand-lime pl-3">
            <b className="block text-2xl">6AM–9PM</b>
            <span className="text-sm opacity-85">{t("தினமும் திறந்திருக்கும்", "Open daily")}</span>
          </div>
          <div className="border-l-4 border-brand-lime pl-3">
            <b className="flex items-center gap-1 text-2xl">
              <Star size={20} className="fill-yellow-400 text-yellow-400" aria-hidden />
              {SITE.rating}
            </b>
            <span className="text-sm opacity-85">
              {t(`${SITE.reviewCount}+ மதிப்புரைகள்`, `${SITE.reviewCount}+ reviews`)}
            </span>
          </div>
          <div className="border-l-4 border-brand-lime pl-3">
            <b className="block text-2xl">
              ₹800<small className="text-base">{t("/மாதம்", "/month")}</small>
            </b>
            <span className="text-sm opacity-85">{t("ஒருவருக்கு / மாதம்", "per head / month")}</span>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
