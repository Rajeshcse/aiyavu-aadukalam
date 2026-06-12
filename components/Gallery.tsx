"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { useLang } from "./LanguageProvider";

const PHOTOS = [
  { src: "/images/hero.jpg", altTa: "உள்ளரங்க கோர்ட்", altEn: "Aiyavu Aadukalam indoor court" },
  { src: "/images/gallery2.jpg", altTa: "போட்டி வெற்றியாளர்கள்", altEn: "Tournament winners group photo" },
  { src: "/images/gallery3.jpg", altTa: "பரிசு வழங்கும் விழா", altEn: "Prize distribution on court" },
  { src: "/images/gallery4.jpg", altTa: "கோப்பையுடன் இளம் வீரர்கள்", altEn: "Young winners with trophies" },
  { src: "/images/gallery5.jpg", altTa: "வீரர்கள் & பயிற்சியாளர்கள்", altEn: "Players and coaches at the court" },
  { src: "/images/gallery1.jpg", altTa: "கோப்பை விழா", altEn: "Trophy ceremony" },
];

export default function Gallery() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="px-6 pb-24">
      <div className="mx-auto max-w-5xl">
        <SectionHead
          tagTa="படத்தொகுப்பு"
          tagEn="Gallery"
          titleTa="ஆடுகளத்தின் தருணங்கள்"
          titleEn="Moments From The Court"
        />
        <Reveal>
          <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-3">
            {PHOTOS.map((photo, i) => (
              <button
                key={`${photo.src}-${i}`}
                onClick={() => setOpen(i)}
                className="group cursor-zoom-in overflow-hidden rounded-2xl"
                aria-label={t(photo.altTa, photo.altEn)}
              >
                <Image
                  src={photo.src}
                  alt={t(photo.altTa, photo.altEn)}
                  width={640}
                  height={360}
                  loading="lazy"
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-110 sm:h-56"
                />
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[200] flex cursor-zoom-out items-center justify-center bg-brand-navy/95 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <button
              className="absolute right-5 top-5 cursor-pointer text-white/80 hover:text-white"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative h-full w-full max-w-4xl"
            >
              <Image
                src={PHOTOS[open].src}
                alt={t(PHOTOS[open].altTa, PHOTOS[open].altEn)}
                fill
                sizes="100vw"
                className="rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
