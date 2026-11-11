import type { Metadata } from "next";
import LayananCatalog from "@/app/components/LayananCatalog";
import { BUSINESS_NAME, SHORT_ADDRESS } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Layanan & Harga",
  description: `Daftar lengkap menu potong rambut, cuci rambut, cukur jenggot, dan paket grooming di ${BUSINESS_NAME}, ${SHORT_ADDRESS}.`,
};

export default function LayananPage() {
  return <LayananCatalog />;
}
