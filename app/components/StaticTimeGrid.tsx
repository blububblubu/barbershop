import { AlertCircle, Clock } from "lucide-react";
import { STATIC_TIME_SLOTS } from "@/app/lib/constants";

/**
 * Grid Jam Statis (FR-06, BR-05, AC-03):
 * - Interval 40 menit dari jam operasional
 * - Semua jam ditampilkan dengan warna sama
 * - Tidak bisa diklik (hanya panduan visual)
 * - Warning eksplisit di bawah grid
 */
export default function StaticTimeGrid() {
  return (
    <section
      aria-labelledby="static-time-grid-heading"
      className="mt-12 rounded-sm border border-[#111111] bg-[#FFFFFF] p-6 sm:p-8"
    >
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-bold tracking-widest text-[#1D3557] uppercase">
            Panduan Jam Layanan (Interval 40 Menit)
          </p>
          <h2
            id="static-time-grid-heading"
            className="font-display mt-1 text-2xl font-bold tracking-wide text-[#111111] uppercase"
          >
            Jadwal Jam Operasional
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-[#111111]">
          <span className="rounded-sm border border-[#111111] bg-zinc-50 px-3 py-1.5 font-bold">
            Selasa–Minggu: 11:00–21:00
          </span>
          <span className="rounded-sm border border-[#111111] bg-zinc-50 px-3 py-1.5 font-bold">
            Jumat: 13:00–21:00
          </span>
          <span className="rounded-sm border border-[#111111] bg-zinc-50 px-3 py-1.5 font-bold">
            Senin: Tutup
          </span>
        </div>
      </div>

      {/* Non-clickable static slots with uniform color */}
      <div
        className="mt-6 grid grid-cols-3 gap-2.5 sm:grid-cols-5 md:grid-cols-8"
        aria-label="Daftar jam operasional statis"
      >
        {STATIC_TIME_SLOTS.map((slot) => (
          <div
            key={slot}
            className="flex cursor-default select-none items-center justify-center gap-1.5 rounded-sm border border-[#111111] bg-zinc-50 px-3 py-2.5 text-sm font-bold text-[#111111]"
          >
            <Clock className="h-3.5 w-3.5 text-[#1D3557]" strokeWidth={2.5} />
            <span>{slot}</span>
          </div>
        ))}
      </div>

      {/* Required warning below the grid (FR-06, AC-03) */}
      <div className="mt-5 flex items-start gap-2.5 rounded-sm border-2 border-[#E63946] bg-[#FFFFFF] px-4 py-3 text-xs text-[#111111] sm:text-sm">
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#E63946]" strokeWidth={2.5} />
        <p className="font-semibold">
          Ketersediaan jam belum real-time. Silakan konfirmasi ke admin via WhatsApp.
        </p>
      </div>
    </section>
  );
}
