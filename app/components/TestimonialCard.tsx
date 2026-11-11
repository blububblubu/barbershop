import { Star } from "lucide-react";
import { TestimonialItem } from "@/app/data/testimonials";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-sm border border-[#111111] bg-[#FFFFFF] p-6">
      <div>
        <div className="flex items-center gap-1" aria-label={`Rating ${testimonial.rating} dari 5`}>
          {Array.from({ length: 5 }).map((_, idx) => {
            const filled = idx < testimonial.rating;
            return (
              <Star
                key={idx}
                className={`h-4 w-4 ${
                  filled
                    ? "fill-[#E63946] text-[#E63946]"
                    : "fill-zinc-100 text-zinc-300"
                }`}
              />
            );
          })}
          <span className="ml-1.5 text-xs font-bold text-[#111111]">
            {testimonial.rating}.0
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[#111111]">
          &ldquo;{testimonial.review}&rdquo;
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-zinc-200 pt-4">
        <span className="font-display text-base font-bold tracking-wider text-[#111111] uppercase">
          {testimonial.name}
        </span>
        {testimonial.serviceUsed && (
          <span className="rounded-sm border border-[#1D3557] px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-[#1D3557] uppercase">
            {testimonial.serviceUsed}
          </span>
        )}
      </div>
    </article>
  );
}
