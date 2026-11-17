// 🔒 INTI — layout materi workshop (slide). Terpisah dari landing, CSS-nya juga terpisah.
import type { Metadata, Viewport } from "next";
import "./deck.css";

export const metadata: Metadata = {
  title: { absolute: "Materi Workshop Next.js — Landing Sekolah" },
  description: "Slide workshop Next.js: App Router, Server Components, Tailwind, sampai deploy — sambil membangun landing sekolah per kelompok.",
};
export const viewport: Viewport = { themeColor: "#0a0a0a" };

export default function MateriLayout({ children }: { children: React.ReactNode }) {
  return children;
}
