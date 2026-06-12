# Reusable Prompt — Sports Academy / Court Website

Fill in the `[BRACKETS]`, attach 5–10 real photos (or a Google Maps PDF/link to extract them from), and paste.

---

Build a wild, stunning, production-ready website for a local sports facility.

## Business details
- Name: [BUSINESS NAME in English] / [NAME in local language — e.g. Tamil]
- Sport/type: [badminton court / cricket academy / turf / gym]
- Location: [full street address, city, PIN]
- Google Maps link: [maps.app.goo.gl/...] and Plus Code: [XXXX+XX]
- Phone: [number]
- Hours: [e.g. 6 AM – 9 PM, daily]
- Google rating: [4.6 ⭐ (60 reviews)] — show as social proof
- Facilities: [number of courts, coaching available?, tournaments?]
- Amenities: [bike parking / drinking water / changing room — list only what exists]
- Pricing: [₹800/head/month regular, ₹500/head/month weekends-only, ₹1000 one-time advance, coaching = "ask us"]

## Tech requirements
- Next.js 15 App Router + TypeScript (strict), Tailwind CSS v4, Framer Motion, Lucide React icons
- Fully static prerender, production `next build` must pass clean
- Responsive, mobile-first
- SEO: full metadata export, Open Graph + Twitter cards, JSON-LD structured data
  (`SportsActivityLocation` schema with address, openingHoursSpecification, aggregateRating, priceRange, amenityFeature)
- Lazy-loaded images via next/image; hero image is `priority` (LCP)
- Booking: Cal.com inline embed (`@calcom/embed-react`) with a clearly marked placeholder
  calLink + a "prefer to book by phone?" fallback link under it
- Google Map: **click-to-load** (styled placeholder button that injects the iframe on click —
  never load the Maps iframe on page load; it can hang/slow the page).
  Use the keyless embed: `https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1s[URL-ENCODED BUSINESS NAME + AREA]`

## Bilingual
- Languages: [English + Tamil] — every string in both
- Default: [English]; toggle button in navbar; choice saved to localStorage
- React context provider with a `t(local, english)` helper; render default lang on server,
  hydrate saved choice after mount (avoid hydration mismatch)
- Exception: the brand name in navbar logo + footer badge ALWAYS stays in the local language

## Design system — "energetic local sports club"
- Palette: take colors from the facility's actual signboard/photos.
  Ours: magenta `#E5189A`, deep blue `#0B6E92`, bright blue `#1BA9D6`, navy `#0A1B2A`,
  lime accent `#C8F31D`. Define as Tailwind `@theme` tokens (`--color-brand-*`).
- Fonts (next/font/google): a display font for English headings (Archivo Black),
  a local-script font with heavy weights (Anek Tamil 400–800), AND load a true 900 weight
  (Noto Sans Tamil 900) for the brand badges — synthesized bold looks weak.
- Signboard badge motif: brand name on a white rounded badge with a **top-to-bottom**
  pink→blue gradient on the TEXT (`bg-gradient-to-b bg-clip-text text-transparent`, weight 900).
  Use it in the navbar logo and footer.
- Energetic touches: diagonal `clip-path` section edges (softer angles on mobile),
  scrolling marquee strip (lime bg, repeating taglines), outlined hero text
  (`-webkit-text-stroke` in lime), bouncing shuttle/ball emoji in nav,
  hover lift+tilt on cards, 14px solid offset shadow on photos.
- Hero: real facility photo as full-bleed background + navy→blue→pink gradient overlay,
  staggered Framer Motion entrance, big gradient brand name with dark drop-shadow
  (gradient text needs the shadow to stay legible over the photo).

## Page sections (single homepage)
1. Fixed navbar — brand badge, anchor links, language toggle pill
2. Hero — location chip (lime, rotated), huge name + tagline ("Play. Smash. Win." style),
   Book + Call CTAs, stat badges (hours / rating / starting price)
3. Marquee strip
4. Info cards (4): timings, facility, coaching, amenities — navy cards, colored bottom borders
5. Pricing — white cards on a diagonal gradient section, "Popular" corner ribbon,
   dashed-border highlight box for the advance/deposit note
6. Coaching/tournaments — text + photo with offset shadow, zap-icon bullet list, call CTA
7. Gallery — grid of real photos, Framer Motion fullscreen lightbox on click
8. Booking — Cal.com embed on navy section
9. Contact — gradient info card (phone tap-to-call, address, plus code, hours, directions
   button) + click-to-load map
10. Footer — brand badge + one-line copyright

## Structure
- All business facts in one `lib/site.ts` constant — phone, pricing, links, calLink, URL —
  so future edits touch one file
- Reusable `Reveal` (whileInView fade-up) and `SectionHead` (tag + title) components
- One component file per section

## Verify before delivering
- `npm run build` passes with zero errors, all routes static
- Check both languages render, the toggle persists, JSON-LD is present in the page,
  and images lazy-load. Screenshot hero, pricing, gallery, contact.

---

### Per-project changes checklist (after generating)
1. `lib/site.ts` → real `calLink` (owner creates free Cal.com account + event type) and real domain `url`
2. Replace photos in `public/images/`
3. Adjust palette tokens in `app/globals.css` to the new facility's signboard colors
