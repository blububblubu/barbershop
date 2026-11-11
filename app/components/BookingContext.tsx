"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import { Calendar, Check, Clock, ExternalLink, Scissors, User, UserRound, X } from "lucide-react";
import { activeBarbers } from "@/app/data/barbers";
import { services } from "@/app/data/services";
import { BUSINESS_NAME, STATIC_TIME_SLOTS, WHATSAPP_DISPLAY } from "@/app/lib/constants";
import {
  buildWhatsAppBookingMessage,
  formatIndonesianDate,
  formatRupiah,
  generateWhatsAppBookingUrl,
} from "@/app/lib/wa-helper";

interface BookingOptions {
  serviceName?: string;
  barberName?: string;
}

interface BookingContextValue {
  openBookingModal: (options?: BookingOptions) => void;
}

const BookingContext = createContext<BookingContextValue | undefined>(undefined);

function getTodayIsoDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getTomorrowIsoDate(): string {
  const next = new Date();
  next.setDate(next.getDate() + 1);
  const year = next.getFullYear();
  const month = String(next.getMonth() + 1).padStart(2, "0");
  const day = String(next.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [customerName, setCustomerName] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>(services[0]?.name ?? "Potong Rambut");
  const [selectedBarber, setSelectedBarber] = useState<string>(activeBarbers[0]?.name ?? "Eko");
  const [selectedDate, setSelectedDate] = useState<string>(getTodayIsoDate());
  const [selectedTime, setSelectedTime] = useState<string>(STATIC_TIME_SLOTS[0] ?? "11:00");

  const openBookingModal = (options?: BookingOptions) => {
    if (options?.serviceName) {
      setSelectedService(options.serviceName);
    }
    if (options?.barberName) {
      setSelectedBarber(options.barberName);
    }
    setIsOpen(true);
  };

  const todayIso = useMemo(() => getTodayIsoDate(), []);
  const tomorrowIso = useMemo(() => getTomorrowIsoDate(), []);

  const dateLabel = useMemo(() => formatIndonesianDate(selectedDate), [selectedDate]);

  const previewMessage = useMemo(
    () =>
      buildWhatsAppBookingMessage({
        customerName,
        serviceName: selectedService,
        barberName: selectedBarber,
        dateLabel,
        timeSlot: selectedTime,
      }),
    [customerName, selectedService, selectedBarber, dateLabel, selectedTime]
  );

  const whatsappUrl = useMemo(
    () =>
      generateWhatsAppBookingUrl({
        customerName,
        serviceName: selectedService,
        barberName: selectedBarber,
        dateLabel,
        timeSlot: selectedTime,
      }),
    [customerName, selectedService, selectedBarber, dateLabel, selectedTime]
  );

  return (
    <BookingContext.Provider value={{ openBookingModal }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#111111]/70 p-0 backdrop-blur-xs sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-sm border-2 border-[#111111] bg-[#FFFFFF] p-6 shadow-[8px_8px_0px_#111111] sm:rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b-2 border-[#111111] pb-4">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#E63946] uppercase">
                  WhatsApp Direct Booking
                </p>
                <h2
                  id="booking-modal-title"
                  className="font-display mt-1 text-2xl font-bold tracking-wide text-[#111111] uppercase"
                >
                  Pesan Jadwal di {BUSINESS_NAME}
                </h2>
                <p className="mt-1 text-xs text-zinc-600">
                  Isi nama, layanan, barber, tanggal, dan jam. Anda akan diarahkan ke WhatsApp Admin
                  ({WHATSAPP_DISPLAY}).
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-sm border-2 border-[#111111] p-2 text-[#111111] transition-colors duration-150 hover:bg-[#111111] hover:text-[#FFFFFF]"
                aria-label="Tutup modal booking"
              >
                <X className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>

            <div className="mt-5 space-y-5">
              {/* Step 1: Isi Nama */}
              <div>
                <label
                  htmlFor="booking-customer-name"
                  className="mb-2 flex items-center gap-2 text-sm font-bold text-[#111111]"
                >
                  <UserRound className="h-4 w-4 text-[#1D3557]" strokeWidth={2.5} />
                  1. Nama Anda
                </label>
                <input
                  id="booking-customer-name"
                  type="text"
                  autoComplete="name"
                  maxLength={60}
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Masukkan nama Anda (contoh: Budi)"
                  className="w-full rounded-sm border border-[#111111] bg-[#FFFFFF] px-3.5 py-2.5 text-sm text-[#111111] placeholder:text-zinc-400 outline-none transition focus:border-[#1D3557] focus:ring-2 focus:ring-[#1D3557]/20"
                />
              </div>

              {/* Step 2: Pilih Layanan */}
              <div>
                <label
                  htmlFor="booking-service"
                  className="mb-2 flex items-center gap-2 text-sm font-bold text-[#111111]"
                >
                  <Scissors className="h-4 w-4 text-[#E63946]" strokeWidth={2.5} />
                  2. Pilih Layanan
                </label>
                <select
                  id="booking-service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full rounded-sm border border-[#111111] bg-[#FFFFFF] px-3.5 py-2.5 text-sm text-[#111111] outline-none transition focus:border-[#1D3557] focus:ring-2 focus:ring-[#1D3557]/20"
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.name}>
                      {service.name} — {formatRupiah(service.price)} ({service.duration} mnt)
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Pilih Barber */}
              <div>
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-[#111111]">
                  <User className="h-4 w-4 text-[#1D3557]" strokeWidth={2.5} />
                  3. Pilih Barber Spesifik
                </span>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {activeBarbers.map((barber) => {
                    const isSelected = selectedBarber === barber.name;
                    return (
                      <button
                        key={barber.id}
                        type="button"
                        onClick={() => setSelectedBarber(barber.name)}
                        className={`flex items-center justify-between rounded-sm border px-3.5 py-2.5 text-left transition-colors duration-150 ${
                          isSelected
                            ? "border-[#111111] bg-[#111111] text-[#FFFFFF]"
                            : "border-[#111111] bg-[#FFFFFF] text-[#111111] hover:bg-zinc-100"
                        }`}
                      >
                        <div>
                          <div className="font-display text-base font-bold tracking-wide uppercase">
                            {barber.name}
                          </div>
                          <div
                            className={`text-xs ${
                              isSelected ? "text-zinc-300" : "text-zinc-600"
                            }`}
                          >
                            {barber.role}
                          </div>
                        </div>
                        {isSelected && <Check className="h-4 w-4 text-[#E63946]" strokeWidth={2.5} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4 & 5: Pilih Hari / Tanggal & Jam */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="booking-date"
                    className="mb-2 flex items-center gap-2 text-sm font-bold text-[#111111]"
                  >
                    <Calendar className="h-4 w-4 text-[#E63946]" strokeWidth={2.5} />
                    4. Hari / Tanggal
                  </label>
                  <div className="mb-2 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDate(todayIso)}
                      className={`rounded-sm border px-3 py-1 text-xs font-bold uppercase transition-colors duration-150 ${
                        selectedDate === todayIso
                          ? "border-[#1D3557] bg-[#1D3557] text-[#FFFFFF]"
                          : "border-[#111111] bg-[#FFFFFF] text-[#111111] hover:bg-zinc-100"
                      }`}
                    >
                      Hari Ini
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDate(tomorrowIso)}
                      className={`rounded-sm border px-3 py-1 text-xs font-bold uppercase transition-colors duration-150 ${
                        selectedDate === tomorrowIso
                          ? "border-[#1D3557] bg-[#1D3557] text-[#FFFFFF]"
                          : "border-[#111111] bg-[#FFFFFF] text-[#111111] hover:bg-zinc-100"
                      }`}
                    >
                      Besok
                    </button>
                  </div>
                  <input
                    id="booking-date"
                    type="date"
                    min={todayIso}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full rounded-sm border border-[#111111] bg-[#FFFFFF] px-3.5 py-2.5 text-sm text-[#111111] outline-none transition focus:border-[#1D3557] focus:ring-2 focus:ring-[#1D3557]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-time"
                    className="mb-2 flex items-center gap-2 text-sm font-bold text-[#111111]"
                  >
                    <Clock className="h-4 w-4 text-[#1D3557]" strokeWidth={2.5} />
                    5. Jam Kunjungan
                  </label>
                  <p className="mb-2 text-[11px] text-zinc-600">
                    Selasa–Minggu 11:00–21:00 (Senin Tutup)
                  </p>
                  <select
                    id="booking-time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full rounded-sm border border-[#111111] bg-[#FFFFFF] px-3.5 py-2.5 text-sm text-[#111111] outline-none transition focus:border-[#1D3557] focus:ring-2 focus:ring-[#1D3557]/20"
                  >
                    {STATIC_TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot} WIB
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preview Format Pesan FR-08 */}
              <div className="rounded-sm border border-[#111111] bg-zinc-50 p-3.5">
                <p className="text-[11px] font-bold tracking-wider text-[#1D3557] uppercase">
                  Preview Pesan WhatsApp Otomatis
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#111111]">{previewMessage}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-sm bg-[#E63946] px-5 py-3 text-sm font-bold tracking-wider text-[#FFFFFF] uppercase transition-colors duration-150 hover:bg-[#111111]"
              >
                Kirim ke WhatsApp
                <ExternalLink className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="min-h-[48px] rounded-sm border-2 border-[#111111] bg-transparent px-5 py-3 text-sm font-bold tracking-wider text-[#111111] uppercase transition-colors duration-150 hover:bg-[#111111] hover:text-[#FFFFFF]"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}

export function useBookingModal() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used inside BookingProvider");
  }
  return ctx;
}
