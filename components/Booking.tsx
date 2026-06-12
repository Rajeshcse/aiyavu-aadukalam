"use client";

import Cal from "@calcom/embed-react";
import { Phone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { useLang } from "./LanguageProvider";
import { SITE } from "@/lib/site";

export default function Booking() {
  const { t } = useLang();

  return (
    <section id="book" className="clip-slant-top bg-brand-navy px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <SectionHead
          light
          tagTa="முன்பதிவு"
          tagEn="Booking"
          titleTa="உங்கள் நேரத்தை பதிவு செய்யுங்கள்"
          titleEn="Reserve Your Slot"
        />
        <Reveal>
          <div className="min-h-[560px] overflow-hidden rounded-[20px] bg-white">
            <Cal
              calLink={SITE.calLink}
              config={{ layout: "month_view" }}
              style={{ width: "100%", height: "560px", overflow: "auto" }}
            />
          </div>
        </Reveal>
        <p className="mt-6 text-center font-semibold">
          {t("ஆன்லைன் பதிவு வேலை செய்யவில்லையா? நேரடியாக அழைக்கவும்:", "Prefer to book by phone? Call us directly:")}{" "}
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-1 font-extrabold text-brand-lime hover:underline"
          >
            <Phone size={16} aria-hidden />
            {SITE.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
