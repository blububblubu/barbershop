export interface BarberItem {
  id: number;
  name: string;
  role: string;
  experience: string;
  bio: string;
  photo: string;
  schedule: string;
  active: boolean;
}

export const barbers: BarberItem[] = [
  {
    id: 1,
    name: "Eko",
    role: "Barber",
    experience: "Berpengalaman",
    bio: "Siap melayani potongan rambut rapi, nyaman, dan sesuai permintaan Anda.",
    photo: "/images/profil.jpg",
    schedule: "Selasa – Minggu",
    active: true,
  },
  {
    id: 2,
    name: "Nuril",
    role: "Barber",
    experience: "Berpengalaman",
    bio: "Mengutamakan kerapihan detail dan kenyamanan di setiap sesi potong rambut.",
    photo: "/images/profil.jpg",
    schedule: "Selasa – Minggu",
    active: true,
  },
  {
    id: 3,
    name: "Dimas",
    role: "Barber (Cuti)",
    experience: "Berpengalaman",
    bio: "Sedang tidak aktif bertugas.",
    photo: "/images/profil.jpg",
    schedule: "Sedang tidak aktif",
    active: false, // AC-02: Data barber yang tidak aktif tidak ditampilkan
  },
];

export const activeBarbers = barbers.filter((barber) => barber.active);
