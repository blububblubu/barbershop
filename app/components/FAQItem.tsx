"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FAQItemData } from "@/app/data/faq";

interface FAQItemProps {
  item: FAQItemData;
  defaultOpen?: boolean;
}

export default function FAQItem({ item, defaultOpen = false }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-sm border border-[#111111] bg-[#FFFFFF]">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex min-h-[48px] w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-150 hover:bg-zinc-50"
      >
        <span className="font-display text-base font-bold tracking-wide text-[#111111] uppercase">
          {item.q}
        </span>
        <ChevronDown
          strokeWidth={2.5}
          className={`h-4 w-4 shrink-0 text-[#E63946] transition-transform duration-150 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="border-t border-[#111111] bg-zinc-50 px-5 py-4 text-sm leading-relaxed text-zinc-700">
          {item.a}
        </div>
      )}
    </div>
  );
}
