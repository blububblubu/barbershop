"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { useBookingModal } from "./BookingContext";
import { BUSINESS_NAME } from "@/app/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/layanan", label: "Layanan" },
  { href: "/galeri", label: "Galeri" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openBookingModal } = useBookingModal();

  return (
    <header className="sticky top-0 z-40 border-b-2 border-[#111111] bg-[#FFFFFF]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center"
          aria-label={`${BUSINESS_NAME} — Beranda`}
          onClick={() => setMobileOpen(false)}
        >
          <span className="relative block h-14 w-36 overflow-hidden">
            <Image
              src="/images/logo.webp"
              alt={BUSINESS_NAME}
              fill
              priority
              className="object-cover object-center"
              sizes="144px"
            />
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display px-4 py-2 text-sm font-bold tracking-wider uppercase transition-colors duration-150 ${
                  active
                    ? "text-[#E63946] underline decoration-[#E63946] decoration-2 underline-offset-8"
                    : "text-[#111111] hover:text-[#1D3557]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => openBookingModal()}
            className="hidden items-center gap-2 rounded-sm bg-[#E63946] px-4 py-2.5 text-xs font-bold tracking-wider text-[#FFFFFF] uppercase transition-colors duration-150 hover:bg-[#111111] sm:inline-flex"
          >
            <MessageCircle className="h-3.5 w-3.5" strokeWidth={2.5} />
            Booking WA
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-sm border-2 border-[#111111] p-2 text-[#111111] transition-colors duration-150 hover:bg-[#111111] hover:text-[#FFFFFF] md:hidden"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="border-t-2 border-[#111111] bg-[#FFFFFF] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Navigasi mobile">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-display rounded-sm px-3.5 py-2.5 text-base font-bold tracking-wider uppercase transition-colors duration-150 ${
                    active
                      ? "bg-[#111111] text-[#E63946]"
                      : "text-[#111111] hover:bg-zinc-100 hover:text-[#1D3557]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              openBookingModal();
            }}
            className="mt-3 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-sm bg-[#E63946] px-4 py-3 text-sm font-bold tracking-wider text-[#FFFFFF] uppercase transition-colors duration-150 hover:bg-[#111111]"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
            Booking Sekarang via WA
          </button>
        </div>
      )}
    </header>
  );
}
