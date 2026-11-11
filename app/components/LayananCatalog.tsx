"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import ServiceCard from "./ServiceCard";
import StaticTimeGrid from "./StaticTimeGrid";
import { useBookingModal } from "./BookingContext";
import { ServiceCategory, services } from "@/app/data/services";

const CATEGORIES: ("Semua" | ServiceCategory)[] = ["Semua", "Haircut", "Package", "Grooming"];

export default function LayananCatalog() {
  const [activeCategory, setActiveCategory] = useState<"Semua" | ServiceCategory>("Semua");
  const { openBookingModal } = useBookingModal();

  const filteredServices =
    activeCategory === "Semua"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="flex flex-col justify-between gap-6 border-b-2 border-[#111111] pb-8 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold tracking-widest text-[#1D3557] uppercase">
            Katalog Layanan
          </p>
          <h1 className="font-display mt-1 text-4xl font-bold tracking-wide text-[#111111] uppercase">
            Layanan &amp; Daftar Harga
          </h1>
          <div className="divider-slant mt-3" aria-hidden="true" />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            Semua harga transparan dalam Rupiah dengan estimasi durasi pengerjaan. Klik{" "}
            <strong className="font-semibold text-[#111111]">Pesan via WA</strong> untuk memilih
            barber dan tanggal kunjungan Anda.
          </p>
        </div>

        <button
          type="button"
          onClick={() => openBookingModal()}
          className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-sm bg-[#E63946] px-5 py-3 text-sm font-bold tracking-wider text-[#FFFFFF] uppercase transition-colors duration-150 hover:bg-[#111111]"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
          Booking Custom via WA
        </button>
      </div>

      {/* Category Filter */}
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter kategori layanan">
        {CATEGORIES.map((category) => {
          const isSelected = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveCategory(category)}
              className={`font-display rounded-sm border px-4 py-2 text-sm font-bold tracking-wider uppercase transition-colors duration-150 ${
                isSelected
                  ? "border-[#E63946] bg-[#E63946] text-[#FFFFFF]"
                  : "border-[#111111] bg-[#FFFFFF] text-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Service Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Grid Jam Statis (FR-06) */}
      <StaticTimeGrid />
    </div>
  );
}
