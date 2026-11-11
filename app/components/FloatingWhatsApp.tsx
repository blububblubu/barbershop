import { MessageCircle } from "lucide-react";
import { WHATSAPP_DISPLAY } from "@/app/lib/constants";
import { generateWhatsAppBookingUrl } from "@/app/lib/wa-helper";

export default function FloatingWhatsApp() {
  const waUrl = generateWhatsAppBookingUrl({
    serviceName: "Potong Rambut",
    barberName: "Barber Tersedia",
    dateLabel: "Hari ini",
    timeSlot: "Jam tersedia",
  });

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat WhatsApp Admin SETARA Barbershop (${WHATSAPP_DISPLAY})`}
      title={`Booking via WhatsApp (${WHATSAPP_DISPLAY})`}
      className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1EBE5D] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
