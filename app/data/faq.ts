export interface FAQItemData {
  id: number;
  q: string;
  a: string;
}

export const faqs: FAQItemData[] = [
  {
    id: 1,
    q: "Jam berapa barbershop buka?",
    a: "Kami buka Selasa–Minggu jam 11:00–21:00 (khusus Jumat 13:00–21:00). Senin tutup.",
  },
  {
    id: 2,
    q: "Apakah bisa booking untuk anak?",
    a: "Bisa, kami melayani potong rambut untuk anak-anak.",
  },
  {
    id: 3,
    q: "Apakah ada parkir?",
    a: "Ya, tersedia area parkir gratis di depan toko.",
  },
  {
    id: 4,
    q: "Metode pembayaran apa saja?",
    a: "Kami menerima tunai dan QRIS.",
  },
  {
    id: 5,
    q: "Berapa lama durasi potong rambut?",
    a: "Sekitar 40 menit per sesi.",
  },
];

