"use client";

import { MessageCircle } from "lucide-react";
import { useBookingModal } from "./BookingContext";

interface BookingButtonProps {
  label?: string;
  serviceName?: string;
  barberName?: string;
  className?: string;
}

export default function BookingButton({
  label = "Booking Sekarang",
  serviceName,
  barberName,
  className = "",
}: BookingButtonProps) {
  const { openBookingModal } = useBookingModal();

  return (
    <button
      type="button"
      onClick={() => openBookingModal({ serviceName, barberName })}
      className={
        className ||
        "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm bg-[#E63946] px-6 py-3 text-sm font-bold tracking-wider text-[#FFFFFF] uppercase transition-colors duration-150 hover:bg-[#111111]"
      }
    >
      <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
      {label}
    </button>
  );
}
