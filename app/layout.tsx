// 🔒 INTI — root layout untuk SEMUA route (landing & /materi). CSS dimuat di layout masing-masing.
import type { Metadata } from "next";
import { sekolah } from "@/konten/sekolah";

export const metadata: Metadata = {
  title: { default: sekolah.nama, template: `%s · ${sekolah.nama}` },
  description: sekolah.deskripsi,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
