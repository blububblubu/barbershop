import type { Metadata } from "next";
import { Inter, Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "./components/BookingContext";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  ADDRESS,
  BUSINESS_NAME,
  GOOGLE_MAPS_LINK,
  MAP_COORDINATES,
  SHORT_ADDRESS,
  TAGLINE,
  WHATSAPP_NUMBER,
} from "./lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://setarabarbershop.my.id"),
  title: {
    default: `${BUSINESS_NAME} — ${SHORT_ADDRESS}`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: `${BUSINESS_NAME} di ${SHORT_ADDRESS}. ${TAGLINE} Cek katalog layanan, pilih barber favorit, dan booking cepat langsung via WhatsApp.`,
  icons: {
    icon: "/images/logo.webp",
  },
  openGraph: {
    title: `${BUSINESS_NAME} — ${SHORT_ADDRESS}`,
    description: `${TAGLINE} Booking potong rambut dan perawatan pria di ${SHORT_ADDRESS} langsung via WhatsApp.`,
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/mid-fade.webp",
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} — ${SHORT_ADDRESS}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: BUSINESS_NAME,
    image: "/images/logo.webp",
    description: `${BUSINESS_NAME} di ${SHORT_ADDRESS}. ${TAGLINE}`,
    telephone: `+${WHATSAPP_NUMBER}`,
    priceRange: "Rp 20.000 - Rp 75.000",
    hasMap: GOOGLE_MAPS_LINK,
    geo: {
      "@type": "GeoCoordinates",
      latitude: MAP_COORDINATES.latitude,
      longitude: MAP_COORDINATES.longitude,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS,
      addressLocality: "Tanggul",
      addressRegion: "Jawa Timur",
      postalCode: "68155",
      addressCountry: "ID",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "13:00",
        closes: "21:00",
      },
    ],
  };

  return (
    <html
      lang="id"
      className={`${inter.variable} ${oswald.variable} ${playfair.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-[#FFFFFF] text-[#111111] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <BookingProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </BookingProvider>
      </body>
    </html>
  );
}
