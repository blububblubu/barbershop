"use client";

import Image from "next/image";
import { useState } from "react";
import { Film, MessageCircle, X } from "lucide-react";
import { useBookingModal } from "./BookingContext";
import { GalleryCategory, GalleryItem, galleryItems } from "@/app/data/gallery";

const GALLERY_CATEGORIES: GalleryCategory[] = ["Semua", "Fade", "Classic"];

export default function GaleriGrid() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("Semua");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const { openBookingModal } = useBookingModal();

  const filteredItems =
    selectedCategory === "Semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="border-b-2 border-[#111111] pb-8">
        <p className="text-xs font-bold tracking-widest text-[#1D3557] uppercase">
          Portofolio Hasil Potongan
        </p>
        <h1 className="font-display mt-1 text-4xl font-bold tracking-wide text-[#111111] uppercase">
          Galeri SETARA Barbershop
        </h1>
        <div className="divider-slant mt-3" aria-hidden="true" />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
          Hasil potongan asli dari tim barber kami. Klik foto atau video untuk melihat detail dan
          langsung booking barber terkait via WhatsApp.
        </p>
      </div>

      {/* Filter */}
      <div className="mt-8 flex flex-wrap gap-2">
        {GALLERY_CATEGORIES.map((category) => {
          const active = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`font-display rounded-sm border px-4 py-2 text-sm font-bold tracking-wider uppercase transition-colors duration-150 ${
                active
                  ? "border-[#E63946] bg-[#E63946] text-[#FFFFFF]"
                  : "border-[#111111] bg-[#FFFFFF] text-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-sm border border-[#111111] bg-[#FFFFFF] transition-all duration-150 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#111111]"
          >
            <button
              type="button"
              onClick={() => setLightboxItem(item)}
              className="relative block aspect-[4/4.5] w-full overflow-hidden border-b border-[#111111] bg-zinc-100 text-left"
              aria-label={`Lihat detail ${item.title}`}
            >
              {item.mediaType === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}
              <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-sm border border-[#111111] bg-[#FFFFFF] px-2.5 py-1 text-[11px] font-bold tracking-wider text-[#111111] uppercase">
                {item.mediaType === "video" && (
                  <Film className="h-3 w-3 text-[#E63946]" strokeWidth={2.5} />
                )}
                {item.category}
              </span>
            </button>

            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-display text-xl font-bold tracking-wide text-[#111111] uppercase">
                  {item.title}
                </h2>
                <span className="shrink-0 rounded-sm bg-[#1D3557] px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-[#FFFFFF] uppercase">
                  {item.barberName}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600">{item.caption}</p>
              <button
                type="button"
                onClick={() => openBookingModal({ barberName: item.barberName })}
                className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-sm border-2 border-[#111111] bg-transparent px-3.5 py-2.5 text-xs font-bold tracking-wider text-[#111111] uppercase transition-colors duration-150 hover:bg-[#111111] hover:text-[#FFFFFF]"
              >
                <MessageCircle className="h-3.5 w-3.5" strokeWidth={2.5} />
                Booking Gaya Ini ({item.barberName})
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/80 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-sm border-2 border-[#111111] bg-[#FFFFFF] shadow-[8px_8px_0px_#111111]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/4] w-full border-b-2 border-[#111111] bg-[#111111]">
              {lightboxItem.mediaType === "video" ? (
                <video
                  src={lightboxItem.src}
                  autoPlay
                  loop
                  controls
                  playsInline
                  className="h-full w-full object-contain"
                />
              ) : (
                <Image
                  src={lightboxItem.src}
                  alt={lightboxItem.title}
                  fill
                  className="object-cover"
                />
              )}
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="absolute top-3 right-3 rounded-sm border border-[#111111] bg-[#FFFFFF] p-2 text-[#111111] transition-colors duration-150 hover:bg-[#E63946] hover:text-[#FFFFFF]"
                aria-label="Tutup preview"
              >
                <X className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-2xl font-bold tracking-wide text-[#111111] uppercase">
                  {lightboxItem.title}
                </h3>
                <span className="rounded-sm bg-[#1D3557] px-3 py-1 text-xs font-bold tracking-wider text-[#FFFFFF] uppercase">
                  Barber: {lightboxItem.barberName}
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-600">{lightboxItem.caption}</p>
              <button
                type="button"
                onClick={() => {
                  const barberName = lightboxItem.barberName;
                  setLightboxItem(null);
                  openBookingModal({ barberName });
                }}
                className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-sm bg-[#E63946] px-4 py-3 text-sm font-bold tracking-wider text-[#FFFFFF] uppercase transition-colors duration-150 hover:bg-[#111111]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                Pesan Gaya Ini dengan {lightboxItem.barberName}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
