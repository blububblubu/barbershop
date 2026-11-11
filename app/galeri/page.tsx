import type { Metadata } from "next";
import GaleriGrid from "@/app/components/GaleriGrid";
import { BUSINESS_NAME, SHORT_ADDRESS } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Galeri Portofolio",
  description: `Koleksi hasil potongan rambut terbaik dari tim barber ${BUSINESS_NAME} di ${SHORT_ADDRESS}.`,
};

export default function GaleriPage() {
  return <GaleriGrid />;
}
