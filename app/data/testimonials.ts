export interface TestimonialItem {
  id: number;
  name: string;
  review: string;
  rating: number;
  serviceUsed?: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Wira Ireng",
    review: "Hasil potongannya rapi, pelayanannya ramah!",
    rating: 5,
    serviceUsed: "Potong Rambut",
  },
  {
    id: 2,
    name: "Bapak Bebun",
    review: "Tempatnya bersih dan nyaman. Recommended!",
    rating: 5,
    serviceUsed: "Cuci + Potong",
  },
];
