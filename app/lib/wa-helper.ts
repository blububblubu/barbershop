import { WHATSAPP_NUMBER } from "./constants";

export interface BookingMessageParams {
  customerName?: string;
  serviceName: string;
  barberName: string;
  dateLabel: string;
  timeSlot?: string;
}

/**
 * Format angka menjadi mata uang Rupiah (IDR) dengan pemisah ribuan.
 * Contoh: 30000 -> "Rp 30.000" (BR-01)
 */
export function formatRupiah(amount: number): string {
  return `Rp ${amount.toLocaleString("id-ID")}`;
}

/**
 * Format tanggal YYYY-MM-DD menjadi label bahasa Indonesia, misal: "Rabu, 12 November 2026".
 */
export function formatIndonesianDate(dateString: string): string {
  if (!dateString) return "Hari ini";

  const parsed = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

/**
 * Menyusun pesan WhatsApp sesuai format FR-08 pada PRD v3.1.0:
 * "Halo Admin SETARA Barbershop, saya ingin booking layanan [Nama Layanan] dengan barber [Nama Barber] untuk hari [Hari/Tanggal] jam [Jam yang dipilih]. Apakah slotnya tersedia?"
 */
export function buildWhatsAppBookingMessage({
  customerName,
  serviceName,
  barberName,
  dateLabel,
  timeSlot,
}: BookingMessageParams): string {
  const cleanName = customerName?.trim();
  const cleanService = serviceName.trim() || "Potong Rambut";
  const cleanBarber = barberName.trim() || "Barber Tersedia";
  const cleanDate = dateLabel.trim() || "Hari ini";
  const cleanTime = timeSlot?.trim() || "11:00";

  const intro = cleanName
    ? `Halo Admin SETARA Barbershop, saya ${cleanName} ingin booking layanan`
    : "Halo Admin SETARA Barbershop, saya ingin booking layanan";

  return `${intro} ${cleanService} dengan barber ${cleanBarber} untuk hari ${cleanDate} jam ${cleanTime}. Apakah slotnya tersedia?`;
}

/**
 * Menghasilkan URL WhatsApp deep link (wa.me) dengan URL encoding yang rapi (BR-03).
 */
export function generateWhatsAppBookingUrl(params: BookingMessageParams): string {
  const message = buildWhatsAppBookingMessage(params);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Menghasilkan URL WhatsApp untuk pertanyaan umum atau konsultasi langsung.
 */
export function generateWhatsAppDirectUrl(customMessage?: string): string {
  const message =
    customMessage?.trim() ||
    "Halo Admin SETARA Barbershop, saya ingin bertanya mengenai layanan dan jadwal potong rambut hari ini.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
