export type GalleryCategory = "Semua" | "Fade" | "Classic";

export interface GalleryItem {
  id: number;
  title: string;
  category: Exclude<GalleryCategory, "Semua">;
  barberName: string;
  mediaType: "image" | "video";
  src: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Mid Fade",
    category: "Fade",
    barberName: "Eko",
    mediaType: "image",
    src: "/images/mid-fade.webp",
    caption: "Hasil potongan Mid Fade dengan gradasi rapi oleh Eko.",
  },
  {
    id: 2,
    title: "Fade",
    category: "Fade",
    barberName: "Eko",
    mediaType: "video",
    src: "/images/fade.mp4",
    caption: "Detail hasil potongan Fade bersih dan presisi oleh Eko.",
  },
  {
    id: 3,
    title: "Classic",
    category: "Classic",
    barberName: "Nuril",
    mediaType: "video",
    src: "/images/clasic.mp4",
    caption: "Hasil potongan gaya Classic rapi dan natural oleh Nuril.",
  },
];
