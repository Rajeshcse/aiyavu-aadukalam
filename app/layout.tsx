import type { Metadata } from "next";
import { Anek_Tamil, Archivo_Black, Noto_Sans_Tamil } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SITE } from "@/lib/site";
import "./globals.css";

const anekTamil = Anek_Tamil({
  subsets: ["tamil", "latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-anek-tamil",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-tamil",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.nameEn} | ${SITE.nameTa} | Ariyankuppam, Puducherry`,
    template: `%s | ${SITE.nameEn}`,
  },
  description:
    "Indoor badminton court & coaching in Ariyankuppam, Puducherry. Open 6 AM – 9 PM daily. ₹800/head/month, weekends ₹500. Bike parking available. Call 085258 95844.",
  keywords: [
    "badminton court Puducherry",
    "badminton Ariyankuppam",
    "indoor badminton Pondicherry",
    "badminton coaching Puducherry",
    "Aiyavu Aadukalam",
    "அய்யாவு ஆடுகளம்",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.nameEn,
    title: `${SITE.nameEn} — Play. Smash. Win.`,
    description:
      "Indoor badminton court & coaching in Ariyankuppam, Puducherry. Open 6 AM – 9 PM daily. Rated 4.6 ⭐ on Google.",
    locale: "ta_IN",
    alternateLocale: "en_IN",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Aiyavu Aadukalam indoor badminton court",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.nameEn} — Play. Smash. Win.`,
    description:
      "Indoor badminton court & coaching in Ariyankuppam, Puducherry. Open 6 AM – 9 PM daily.",
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

/** Schema.org structured data for local-business rich results. */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: SITE.nameEn,
  alternateName: SITE.nameTa,
  description:
    "Indoor badminton court and coaching academy in Ariyankuppam, Puducherry.",
  url: SITE.url,
  telephone: "+91 85258 95844",
  image: `${SITE.url}/images/hero.jpg`,
  priceRange: "₹500–₹800 per month",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rajiv Gandhi St, RK Nagar, Ariyankuppam",
    addressLocality: "Puducherry",
    postalCode: "605007",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "06:00",
    closes: "21:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating,
    reviewCount: SITE.reviewCount,
  },
  hasMap: SITE.mapsLink,
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Bike Parking",
      value: true,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${anekTamil.variable} ${archivoBlack.variable} ${notoSansTamil.variable} font-sans text-gray-900 antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
