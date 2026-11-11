import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  MapPin,
  MessageCircle,
  Scissors,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import BarberCard from "./components/BarberCard";
import BookingButton from "./components/BookingButton";
import ServiceCard from "./components/ServiceCard";
import TestimonialCard from "./components/TestimonialCard";
import { activeBarbers } from "./data/barbers";
import { galleryItems } from "./data/gallery";
import { services } from "./data/services";
import { testimonials } from "./data/testimonials";
import {
  ADDRESS,
  BUSINESS_NAME,
  OPERATING_HOURS,
  SHORT_ADDRESS,
  TAGLINE,
  WHATSAPP_DISPLAY,
} from "./lib/constants";
import { generateWhatsAppDirectUrl } from "./lib/wa-helper";

export default function HomePage() {
  const featuredServices = services.slice(0, 3);
  const previewGallery = galleryItems;

  return (
    <div>
      {/* Hero Section */}
      <section className="border-b-2 border-[#111111] bg-[#FFFFFF]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-sm border border-[#111111] bg-[#1D3557] px-3.5 py-1 text-xs font-bold tracking-widest text-[#FFFFFF] uppercase">
              <MapPin className="h-3.5 w-3.5 text-[#E63946]" strokeWidth={2.5} />
              <span>{SHORT_ADDRESS}</span>
            </div>

            <h1 className="font-display mt-5 text-5xl font-bold tracking-wide text-[#111111] uppercase sm:text-6xl lg:leading-[1.05]">
              {BUSINESS_NAME}
              <span className="font-sans mt-3 block text-xl font-bold tracking-tight text-[#1D3557] normal-case sm:text-2xl">
                Gaya Rapi, Nyaman, &amp; Presisi.
              </span>
            </h1>

            <div className="divider-slant mt-5" aria-hidden="true" />

            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-700 sm:text-lg">
              {TAGLINE} Pilih layanan dan kapster favorit Anda, lalu konfirmasi jadwal dalam
              hitungan detik langsung via WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BookingButton label="Booking Sekarang" />
              <Link
                href="/layanan"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm border-2 border-[#111111] bg-transparent px-6 py-3 text-sm font-bold tracking-wider text-[#111111] uppercase transition-colors duration-150 hover:bg-[#111111] hover:text-[#FFFFFF]"
              >
                Lihat Daftar Layanan
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>

            {/* Info Strip */}
            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-zinc-200 pt-6 sm:grid-cols-3">
              <div className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#E63946]" strokeWidth={2.5} />
                <div>
                  <p className="text-xs font-bold text-[#111111] uppercase">Buka Selasa–Minggu</p>
                  <p className="text-xs text-zinc-600">11.00–21.00 (Senin Tutup)</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#1D3557]" strokeWidth={2.5} />
                <div>
                  <p className="text-xs font-bold text-[#111111] uppercase">
                    Alat Steril &amp; Higienis
                  </p>
                  <p className="text-xs text-zinc-600">Sanitasi setiap pelanggan</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#E63946]" strokeWidth={2.5} />
                <div>
                  <p className="text-xs font-bold text-[#111111] uppercase">Booking 1-Klik WA</p>
                  <p className="text-xs text-zinc-600">{WHATSAPP_DISPLAY}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-sm border-2 border-[#111111] bg-[#FFFFFF] shadow-[8px_8px_0px_#111111]">
              <div className="relative aspect-[4/4.6] w-full">
                <Image
                  src="/images/hero-barbershop.svg"
                  alt={`Ilustrasi ${BUSINESS_NAME} di ${SHORT_ADDRESS}`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="border-t-2 border-[#111111] bg-[#FFFFFF] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-[#E63946] uppercase">
                      Lokasi Outlet
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-[#111111]">{ADDRESS}</p>
                  </div>
                  <Link
                    href="/kontak"
                    className="shrink-0 rounded-sm border-2 border-[#111111] px-3 py-1.5 text-xs font-bold text-[#111111] uppercase transition-colors duration-150 hover:bg-[#111111] hover:text-[#FFFFFF]"
                  >
                    Peta
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Profil Singkat dengan subtle barber-pole watermark */}
      <section className="barber-pole-watermark border-b border-zinc-200 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-widest text-[#1D3557] uppercase">
              Tentang Kami
            </p>
            <h2 className="font-display mt-1 text-3xl font-bold tracking-wide text-[#111111] uppercase">
              Standar Pelayanan {BUSINESS_NAME}
            </h2>
            <div className="divider-slant mt-3" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-sm border border-[#111111] bg-[#FFFFFF] p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#111111] bg-[#111111] text-[#E63946]">
                <Scissors className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <h3 className="font-display mt-4 text-xl font-bold tracking-wide text-[#111111] uppercase">
                Potongan Presisi Sesuai Karakter
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Setiap sesi dimulai dengan konsultasi singkat agar hasil potongan cocok dengan
                bentuk wajah dan jenis rambut Anda.
              </p>
            </div>
            <div className="rounded-sm border border-[#111111] bg-[#FFFFFF] p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#111111] bg-[#1D3557] text-[#FFFFFF]">
                <Sparkles className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <h3 className="font-display mt-4 text-xl font-bold tracking-wide text-[#111111] uppercase">
                Ruang Bersih &amp; Higienis
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Suasana nyaman, terang, sejuk, serta peralatan yang selalu disterilkan sebelum
                digunakan.
              </p>
            </div>
            <div className="rounded-sm border border-[#111111] bg-[#FFFFFF] p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#111111] bg-[#E63946] text-[#FFFFFF]">
                <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <h3 className="font-display mt-4 text-xl font-bold tracking-wide text-[#111111] uppercase">
                Pemesanan Cepat Tanpa Ribet
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Tidak perlu daftar akun atau unduh aplikasi. Pilih layanan, pilih barber, langsung
                chat WhatsApp admin kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Katalog Layanan Preview (Section Alternatif Barber Blue #1D3557) */}
      <section className="bg-[#1D3557] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold tracking-widest text-[#E63946] uppercase">
                Menu Layanan
              </p>
              <h2 className="font-display mt-1 text-3xl font-bold tracking-wide text-[#FFFFFF] uppercase sm:text-4xl">
                Layanan &amp; Harga Transparan
              </h2>
              <p className="mt-2 max-w-xl text-sm text-zinc-200">
                Pilihan potongan rambut dan perawatan pria dengan harga jelas tanpa biaya
                tersembunyi.
              </p>
            </div>
            <Link
              href="/layanan"
              className="inline-flex items-center gap-1.5 text-sm font-bold tracking-wider text-[#FFFFFF] uppercase underline decoration-[#E63946] decoration-2 underline-offset-4 transition-colors duration-150 hover:text-[#E63946]"
            >
              Lihat Semua Layanan
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Daftar Barber Aktif */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-bold tracking-widest text-[#1D3557] uppercase">
            Tim Kapster Kami
          </p>
          <h2 className="font-display mt-1 text-3xl font-bold tracking-wide text-[#111111] uppercase sm:text-4xl">
            Pilih Barber Favorit Anda
          </h2>
          <div className="divider-slant mt-3" aria-hidden="true" />
          <p className="mt-4 text-sm text-zinc-600">
            Ditangani langsung oleh kapster berpengalaman untuk hasil potongan yang rapi dan nyaman.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {activeBarbers.map((barber) => (
            <BarberCard key={barber.id} barber={barber} />
          ))}
        </div>
      </section>

      {/* Galeri Preview */}
      <section className="border-y border-[#111111] bg-zinc-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold tracking-widest text-[#1D3557] uppercase">
                Portofolio
              </p>
              <h2 className="font-display mt-1 text-3xl font-bold tracking-wide text-[#111111] uppercase sm:text-4xl">
                Hasil Potongan Terbaru
              </h2>
            </div>
            <Link
              href="/galeri"
              className="inline-flex items-center gap-1.5 text-sm font-bold tracking-wider text-[#1D3557] uppercase transition-colors duration-150 hover:text-[#E63946]"
            >
              Buka Galeri Lengkap
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {previewGallery.map((item) => (
              <Link
                key={item.id}
                href="/galeri"
                className="group relative overflow-hidden rounded-sm border border-[#111111] bg-[#FFFFFF] transition-all duration-150 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#111111]"
              >
                <div className="relative aspect-[4/5] w-full border-b border-[#111111] bg-zinc-100">
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
                </div>
                <div className="bg-[#FFFFFF] p-4">
                  <p className="font-display truncate text-lg font-bold tracking-wide text-[#111111] uppercase">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-[#1D3557]">
                    oleh {item.barberName}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni Pelanggan (FR-01, AC-05) */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-bold tracking-widest text-[#1D3557] uppercase">
            Testimoni Pelanggan
          </p>
          <h2 className="font-display mt-1 text-3xl font-bold tracking-wide text-[#111111] uppercase sm:text-4xl">
            Kata Mereka Tentang {BUSINESS_NAME}
          </h2>
          <div className="divider-slant mt-3" aria-hidden="true" />
          <p className="mt-4 text-sm text-zinc-600">
            Pengalaman pelanggan yang sudah mencoba layanan potong rambut dan perawatan kami.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* Jam Operasional & CTA Final */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-sm border-2 border-[#111111] bg-[#1D3557] p-8 text-[#FFFFFF] shadow-[8px_8px_0px_#111111] sm:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold tracking-widest text-[#E63946] uppercase">
                Siap Tampil Lebih Rapi?
              </p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-wide uppercase sm:text-4xl">
                Booking Kursi Anda Sekarang via WhatsApp
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-200">
                Kunjungi outlet kami di {ADDRESS} atau amankan slot lebih dulu melalui chat
                WhatsApp resmi {BUSINESS_NAME}.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <BookingButton
                  label="Pilih Layanan & Barber"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm bg-[#E63946] px-6 py-3 text-sm font-bold tracking-wider text-[#FFFFFF] uppercase transition-colors duration-150 hover:bg-[#111111]"
                />
                <a
                  href={generateWhatsAppDirectUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm border-2 border-[#FFFFFF] bg-transparent px-6 py-3 text-sm font-bold tracking-wider text-[#FFFFFF] uppercase transition-colors duration-150 hover:bg-[#FFFFFF] hover:text-[#111111]"
                >
                  Chat Admin ({WHATSAPP_DISPLAY})
                </a>
              </div>
            </div>

            <div className="rounded-sm border border-[#FFFFFF]/30 bg-[#111111] p-6 lg:col-span-5">
              <h3 className="font-display flex items-center gap-2 text-sm font-bold tracking-widest text-[#FFFFFF] uppercase">
                <Clock className="h-4 w-4 text-[#E63946]" strokeWidth={2.5} />
                Jam Operasional Outlet
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {OPERATING_HOURS.map((item) => (
                  <li
                    key={item.day}
                    className="flex items-center justify-between border-b border-zinc-800 pb-2 last:border-b-0 last:pb-0"
                  >
                    <span className="text-zinc-300">{item.day}</span>
                    <span className="font-semibold text-[#FFFFFF]">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
