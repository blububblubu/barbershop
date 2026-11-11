export type ServiceCategory = "Haircut" | "Package" | "Grooming";

export interface ServiceItem {
  id: number;
  name: string;
  category: ServiceCategory;
  price: number;
  duration: number;
  description: string;
  popular?: boolean;
  includes: string[];
}

export const services: ServiceItem[] = [
  {
    id: 1,
    name: "Potong Rambut",
    category: "Haircut",
    price: 30000,
    duration: 40,
    popular: true,
    description:
      "Potong rambut pria presisi dengan konsultasi bentuk wajah, detailing area telinga & tengkuk, serta styling ringan.",
    includes: ["Konsultasi gaya rambut", "Precision haircut", "Finishing & hair tonic"],
  },
  {
    id: 2,
    name: "Cuci + Potong",
    category: "Package",
    price: 45000,
    duration: 50,
    popular: true,
    description:
      "Paket lengkap cuci rambut menyegarkan sebelum atau sesudah potong rambut, dilengkapi pijat kepala ringan dan styling pomade.",
    includes: ["Potong rambut presisi", "Hair wash & pijat kepala", "Blow dry & styling pomade"],
  },
  {
    id: 3,
    name: "Potong Rambut Anak",
    category: "Haircut",
    price: 25000,
    duration: 30,
    description:
      "Potongan rapi dan nyaman untuk anak usia di bawah 12 tahun dengan pendekatan sabar dari kapster berpengalaman.",
    includes: ["Potongan rapi & aman", "Pembersihan rambut halus", "Styling ringan"],
  },
  {
    id: 4,
    name: "Cukur Jenggot & Kumis",
    category: "Grooming",
    price: 20000,
    duration: 25,
    description:
      "Perapihan kumis, jenggot, dan jambang dengan teknik cukur bersih, handuk hangat, serta aftershave menenangkan.",
    includes: ["Hot towel compress", "Detailing pisau cukur higienis", "Soothing aftershave"],
  },
  {
    id: 5,
    name: "Hair Spa & Creambath Pria",
    category: "Grooming",
    price: 55000,
    duration: 45,
    description:
      "Perawatan kulit kepala dan batang rambut untuk mengurangi ketombe serta menjaga kelembapan rambut tetap sehat.",
    includes: ["Deep scalp cleansing", "Vitamin & krim perawatan", "Pijat relaksasi kepala & bahu"],
  },
  {
    id: 6,
    name: "Setara Signature Full Grooming",
    category: "Package",
    price: 75000,
    duration: 75,
    popular: true,
    description:
      "Pengalaman grooming menyeluruh: cuci rambut, potong presisi, cukur jenggot dengan handuk hangat, dan hair tonic.",
    includes: ["Cuci + Potong presisi", "Cukur jenggot & hot towel", "Hair tonic & styling premium"],
  },
];

