"use client";

import { useState } from "react";
import { Phone, MapPin, Compass, Clock, Map as MapIcon, Navigation } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { useLang } from "./LanguageProvider";
import { SITE } from "@/lib/site";

export default function Contact() {
  const { t } = useLang();
  // Click-to-load keeps the page fast and stops a slow Maps iframe from blocking anything.
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHead
          tagTa="தொடர்பு"
          tagEn="Contact"
          titleTa="எங்களை கண்டுபிடியுங்கள்"
          titleEn="Find Us"
        />
        <div className="grid items-stretch gap-9 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[20px] bg-gradient-to-br from-brand-pink to-brand-blue-deep p-8 text-white">
              <h3 className="mb-4 text-2xl font-extrabold uppercase">
                {t(SITE.nameTa, "Aiyavu Aadukalam")}
              </h3>

              <div className="flex items-center gap-3.5 border-t border-white/25 py-3 font-semibold">
                <Phone size={22} className="shrink-0" aria-hidden />
                <a href={SITE.phoneHref} className="text-lg font-extrabold hover:underline">
                  {SITE.phone}
                </a>
              </div>

              <div className="flex items-start gap-3.5 border-t border-white/25 py-3 font-semibold">
                <MapPin size={22} className="mt-0.5 shrink-0" aria-hidden />
                <span>{t(SITE.addressTa, SITE.addressEn)}</span>
              </div>

              <div className="flex items-center gap-3.5 border-t border-white/25 py-3 font-semibold">
                <Compass size={22} className="shrink-0" aria-hidden />
                <span>Plus Code: {SITE.plusCode}</span>
              </div>

              <div className="flex items-start gap-3.5 border-t border-white/25 py-3 font-semibold">
                <Clock size={22} className="mt-0.5 shrink-0" aria-hidden />
                <div className="space-y-0.5">
                  <div>{t("காலை 7:30–8:30, 8:30–9:30 | மாலை 7:00–8:00", "7:30–8:30 AM · 8:30–9:30 AM · 7:00–8:00 PM")}</div>
                  <div className="text-xs font-normal opacity-80">{t("பெண்களுக்கு மட்டும்: 9:30 AM–12:30 PM (சலுகை)", "Women-only: 9:30 AM–12:30 PM (discounts)")}</div>
                </div>
              </div>

              <a
                href={SITE.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-extrabold uppercase tracking-wider transition-colors hover:bg-white hover:text-brand-navy"
              >
                <Navigation size={17} aria-hidden />
                {t("வழிகாட்டி பெற", "Get Directions")}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full min-h-[380px] overflow-hidden rounded-[20px] border-4 border-brand-navy">
              {mapLoaded ? (
                <iframe
                  title={t("அய்யாவு ஆடுகளம் இடம்", "Aiyavu Aadukalam Badminton Court location map")}
                  src={SITE.mapsEmbed}
                  className="h-full min-h-[380px] w-full border-0"
                />
              ) : (
                <button
                  onClick={() => setMapLoaded(true)}
                  className="flex h-full min-h-[380px] w-full cursor-pointer flex-col items-center justify-center gap-3 bg-gradient-to-br from-sky-50 to-pink-50 font-extrabold text-brand-blue-deep transition-colors hover:from-sky-100 hover:to-pink-100"
                >
                  <MapIcon size={48} aria-hidden />
                  {t("வரைபடத்தை காண இங்கே கிளிக் செய்யவும்", "Click here to load the map")}
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
