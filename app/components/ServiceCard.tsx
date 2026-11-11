"use client";

import { Check, Clock, MessageCircle } from "lucide-react";
import { ServiceItem } from "@/app/data/services";
import { formatRupiah } from "@/app/lib/wa-helper";
import { useBookingModal } from "./BookingContext";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { openBookingModal } = useBookingModal();

  return (
    <article className="flex h-full flex-col justify-between rounded-sm border border-[#111111] bg-[#FFFFFF] p-6 transition-all duration-150 hover:-translate-y-1 hover:border-2 hover:shadow-[4px_4px_0px_#111111]">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-sm border border-[#1D3557] px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-[#1D3557] uppercase">
            {service.category}
          </span>
          {service.popular && (
            <span className="rounded-sm bg-[#E63946] px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-[#FFFFFF] uppercase">
              Favorit
            </span>
          )}
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl font-bold tracking-wide text-[#111111] uppercase">
            {service.name}
          </h3>
          <span className="font-display shrink-0 text-xl font-bold text-[#E63946]">
            {formatRupiah(service.price)}
          </span>
        </div>

        <div className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#1D3557]">
          <Clock className="h-3.5 w-3.5 text-[#E63946]" strokeWidth={2.5} />
          <span>Estimasi {service.duration} menit</span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-zinc-600">{service.description}</p>

        <ul className="mt-4 space-y-1.5 border-t border-zinc-200 pt-4">
          {service.includes.map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs text-zinc-700">
              <Check className="h-3.5 w-3.5 shrink-0 text-[#1D3557]" strokeWidth={2.5} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => openBookingModal({ serviceName: service.name })}
        className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-sm bg-[#E63946] px-4 py-3 text-sm font-bold tracking-wider text-[#FFFFFF] uppercase transition-colors duration-150 hover:bg-[#111111]"
      >
        <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
        Pesan via WA
      </button>
    </article>
  );
}
