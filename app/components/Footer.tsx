import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, MessageCircle } from "lucide-react";
import {
  ADDRESS,
  BUSINESS_CODE,
  BUSINESS_NAME,
  OPERATING_HOURS,
  PAYMENT_METHODS,
  TAGLINE,
  WHATSAPP_DISPLAY,
} from "@/app/lib/constants";
import { generateWhatsAppDirectUrl } from "@/app/lib/wa-helper";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#FFFFFF]">
      {/* Aksen garis diagonal merah & biru meniru pola logo */}
      <div className="barber-pole-accent h-2 w-full" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <Link
              href="/"
              className="inline-block overflow-hidden rounded-sm border border-zinc-700 bg-[#FFFFFF] px-3 py-1"
              aria-label={BUSINESS_NAME}
            >
              <span className="relative block h-14 w-36 overflow-hidden">
                <Image
                  src="/images/logo.webp"
                  alt={BUSINESS_NAME}
                  fill
                  className="object-cover object-center"
                  sizes="144px"
                />
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-300">{TAGLINE}</p>
            <p className="inline-block rounded-sm border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-[11px] font-bold tracking-wider text-zinc-300 uppercase">
              Kode Outlet: {BUSINESS_CODE}
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-widest text-[#FFFFFF] uppercase">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-300">
              <li>
                <Link href="/" className="transition-colors duration-150 hover:text-[#E63946]">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="transition-colors duration-150 hover:text-[#E63946]"
                >
                  Katalog Layanan &amp; Harga
                </Link>
              </li>
              <li>
                <Link
                  href="/galeri"
                  className="transition-colors duration-150 hover:text-[#E63946]"
                >
                  Galeri Portofolio
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="transition-colors duration-150 hover:text-[#E63946]"
                >
                  Kontak &amp; Lokasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Jam Operasional */}
          <div>
            <h3 className="font-display flex items-center gap-1.5 text-sm font-bold tracking-widest text-[#FFFFFF] uppercase">
              <Clock className="h-4 w-4 text-[#E63946]" strokeWidth={2.5} />
              Jam Operasional
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {OPERATING_HOURS.map((item) => (
                <li key={item.day} className="flex justify-between gap-4">
                  <span>{item.day}</span>
                  <span className="font-semibold text-[#FFFFFF]">{item.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-zinc-400">
              Pembayaran di tempat: {PAYMENT_METHODS.join(" & ")}
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-widest text-[#FFFFFF] uppercase">
              Lokasi &amp; Kontak
            </h3>
            <div className="mt-4 space-y-3 text-sm text-zinc-300">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E63946]" strokeWidth={2.5} />
                <span>{ADDRESS}</span>
              </p>
              <a
                href={generateWhatsAppDirectUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-[#FFFFFF] px-3.5 py-2 text-xs font-bold tracking-wider text-[#FFFFFF] uppercase transition-colors duration-150 hover:border-[#E63946] hover:bg-[#E63946]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-zinc-800 pt-6 text-xs text-zinc-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. Seluruh hak cipta dilindungi.
          </p>
          <p>Tanggul, Jember — Jawa Timur</p>
        </div>
      </div>
    </footer>
  );
}
