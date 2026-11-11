"use client";

import Image from "next/image";
import { Calendar, MessageCircle } from "lucide-react";
import { BarberItem } from "@/app/data/barbers";
import { useBookingModal } from "./BookingContext";

interface BarberCardProps {
  barber: BarberItem;
}

export default function BarberCard({ barber }: BarberCardProps) {
  const { openBookingModal } = useBookingModal();

  return (
    <article className="flex flex-col overflow-hidden rounded-sm border border-[#111111] bg-[#FFFFFF] transition-all duration-150 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#111111]">
      <div className="relative aspect-[4/4.3] w-full overflow-hidden border-b border-[#111111] bg-zinc-100">
        <Image
          src={barber.photo}
          alt={`Barber ${barber.name}`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <span className="absolute top-3 left-3 rounded-sm border border-[#111111] bg-[#FFFFFF] px-3 py-1 text-[11px] font-bold tracking-wider text-[#111111] uppercase">
          {barber.experience}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-display text-2xl font-bold tracking-wide text-[#111111] uppercase">
                {barber.name}
              </h3>
              <p className="text-xs font-bold tracking-widest text-[#1D3557] uppercase">
                {barber.role}
              </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-sm border border-[#111111] bg-zinc-50 px-2.5 py-1 text-[11px] font-semibold text-[#111111]">
              <Calendar className="h-3 w-3 text-[#E63946]" strokeWidth={2.5} />
              {barber.schedule}
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-zinc-600">{barber.bio}</p>
        </div>

        <button
          type="button"
          onClick={() => openBookingModal({ barberName: barber.name })}
          className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-sm border-2 border-[#111111] bg-transparent px-4 py-3 text-sm font-bold tracking-wider text-[#111111] uppercase transition-colors duration-150 hover:bg-[#111111] hover:text-[#FFFFFF]"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
          Pilih {barber.name} via WA
        </button>
      </div>
    </article>
  );
}
