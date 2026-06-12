"use client";

import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

export default function SectionHead({
  tagTa,
  tagEn,
  titleTa,
  titleEn,
  light = false,
}: {
  tagTa: string;
  tagEn: string;
  titleTa: string;
  titleEn: string;
  light?: boolean;
}) {
  const { t } = useLang();
  return (
    <Reveal className="mb-10">
      <span
        className={`text-xs font-extrabold uppercase tracking-[3px] ${
          light ? "text-brand-lime" : "text-brand-pink"
        }`}
      >
        {t(tagTa, tagEn)}
      </span>
      <h2 className="mt-1 text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
        {t(titleTa, titleEn)}
      </h2>
    </Reveal>
  );
}
