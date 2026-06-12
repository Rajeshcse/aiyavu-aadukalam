"use client";

const ITEMS = [
  "🏸 SMASH IT",
  "⚡ அய்யாவு ஆடுகளம்",
  "🏆 COACHING AVAILABLE",
  "🔥 OPEN 6AM – 9PM",
];

export default function Marquee() {
  return (
    <div
      className="overflow-hidden border-y-[3px] border-brand-navy bg-brand-lime py-3 text-brand-navy"
      aria-hidden
    >
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-extrabold uppercase tracking-wider">
        {[...ITEMS, ...ITEMS].map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}
