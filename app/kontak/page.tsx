import type { Metadata } from "next";
import { Clock, CreditCard, ExternalLink, MapPin, MessageCircle } from "lucide-react";
import BookingButton from "@/app/components/BookingButton";
import FAQItem from "@/app/components/FAQItem";
import { faqs } from "@/app/data/faq";
import {
  ADDRESS,
  BUSINESS_NAME,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_LINK,
  OPERATING_HOURS,
  PAYMENT_METHODS,
  SHORT_ADDRESS,
  WHATSAPP_DISPLAY,
} from "@/app/lib/constants";
import { generateWhatsAppDirectUrl } from "@/app/lib/wa-helper";

export const metadata: Metadata = {
  title: "Kontak & Lokasi",
  description: `Alamat lengkap, jam operasional, peta Google Maps, dan kontak WhatsApp resmi ${BUSINESS_NAME} di ${SHORT_ADDRESS}.`,
};

export default function KontakPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="border-b-2 border-[#111111] pb-8">
        <p className="text-xs font-bold tracking-widest text-[#1D3557] uppercase">
          Kunjungi Kami
        </p>
        <h1 className="font-display mt-1 text-4xl font-bold tracking-wide text-[#111111] uppercase">
          Kontak &amp; Lokasi Outlet
        </h1>
        <div className="divider-slant mt-3" aria-hidden="true" />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
          Temukan lokasi {BUSINESS_NAME} di {SHORT_ADDRESS} atau hubungi admin kami langsung
          melalui WhatsApp untuk tanya jadwal maupun booking kursi.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Info Cards */}
        <div className="space-y-6 lg:col-span-5">
          <div className="rounded-sm border border-[#111111] bg-[#FFFFFF] p-6">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#111111] text-[#E63946]">
                <MapPin className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <div>
                <h2 className="font-display text-xl font-bold tracking-wide text-[#111111] uppercase">
                  Alamat Outlet
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">{ADDRESS}</p>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#1D3557] uppercase underline decoration-[#E63946] decoration-2 underline-offset-4 transition-colors duration-150 hover:text-[#E63946]"
                >
                  Buka di Google Maps
                  <ExternalLink className="h-3.5 w-3.5" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-[#111111] bg-[#FFFFFF] p-6">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#1D3557] text-[#FFFFFF]">
                <Clock className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <div className="w-full">
                <h2 className="font-display text-xl font-bold tracking-wide text-[#111111] uppercase">
                  Jam Operasional
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {OPERATING_HOURS.map((item) => (
                    <li
                      key={item.day}
                      className="flex items-center justify-between border-b border-zinc-200 pb-2 last:border-b-0 last:pb-0"
                    >
                      <span className="text-zinc-600">{item.day}</span>
                      <span className="font-bold text-[#111111]">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-[#111111] bg-[#FFFFFF] p-6">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#E63946] text-[#FFFFFF]">
                <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <div className="w-full">
                <h2 className="font-display text-xl font-bold tracking-wide text-[#111111] uppercase">
                  WhatsApp Admin Resmi
                </h2>
                <p className="mt-1 text-sm text-zinc-600">
                  Nomor aktif: <strong className="text-[#111111]">{WHATSAPP_DISPLAY}</strong>
                </p>
                <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                  <BookingButton
                    label="Booking Format Otomatis"
                    className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-sm bg-[#E63946] px-4 py-3 text-xs font-bold tracking-wider text-[#FFFFFF] uppercase transition-colors duration-150 hover:bg-[#111111]"
                  />
                  <a
                    href={generateWhatsAppDirectUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-sm border-2 border-[#111111] bg-transparent px-4 py-3 text-xs font-bold tracking-wider text-[#111111] uppercase transition-colors duration-150 hover:bg-[#111111] hover:text-[#FFFFFF]"
                  >
                    Chat Bebas via WA
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-[#111111] bg-zinc-50 p-5">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#111111] uppercase">
              <CreditCard className="h-4 w-4 text-[#1D3557]" strokeWidth={2.5} />
              Metode Pembayaran di Tempat
            </div>
            <p className="mt-1.5 text-xs text-zinc-600">
              {PAYMENT_METHODS.join(" • ")} (dibayarkan setelah sesi selesai di outlet).
            </p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-sm border-2 border-[#111111] bg-[#FFFFFF] shadow-[6px_6px_0px_#111111]">
            <div className="border-b-2 border-[#111111] bg-[#1D3557] px-5 py-3.5">
              <p className="font-display text-sm font-bold tracking-wider text-[#FFFFFF] uppercase">
                Peta Lokasi — {BUSINESS_NAME} ({SHORT_ADDRESS})
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full bg-zinc-100 lg:aspect-[16/12]">
              <iframe
                title={`Peta Lokasi ${BUSINESS_NAME}`}
                src={GOOGLE_MAPS_EMBED_URL}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section FAQ (FR-05, AC-05) */}
      <section className="mt-16 border-t-2 border-[#111111] pt-12" aria-labelledby="faq-heading">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-widest text-[#1D3557] uppercase">
            Pertanyaan Umum
          </p>
          <h2
            id="faq-heading"
            className="font-display mt-1 text-3xl font-bold tracking-wide text-[#111111] uppercase"
          >
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="divider-slant mt-3" aria-hidden="true" />
          <p className="mt-4 text-sm text-zinc-600">
            Informasi cepat seputar jam operasional, parkir, metode pembayaran, dan layanan di{" "}
            {BUSINESS_NAME}.
          </p>
        </div>

        <div className="mt-6 space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.id} item={faq} defaultOpen={index === 0} />
          ))}
        </div>
      </section>
    </div>
  );
}
