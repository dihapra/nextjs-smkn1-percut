/**
 * ✏️ ZONA KELOMPOK PPLG
 * Hanya kelompok PPLG yang mengubah folder ini (konten/jurusan/pplg/ dan public/jurusan/pplg/).
 * Ganti semua teks bertanda TODO dengan data asli jurusan kalian.
 */
import type { Jurusan } from "@/lib/types";

const jurusan: Jurusan = {
  slug: "pplg", // jangan diubah
  singkatan: "PPLG",
  nama: "Pengembangan Perangkat Lunak dan Gim",
  ringkasan: "Membuat aplikasi web, mobile, dan gim dari ide sampai rilis.",
  deskripsi: "TODO: 1–2 kalimat tentang jurusan PPLG untuk hasil pencarian Google.",
  ikon: "💻",
  warna: "#2563eb",
  kompetensi: [
    { judul: "TODO: Kompetensi 1", isi: "TODO: jelaskan apa yang dipelajari." },
    { judul: "TODO: Kompetensi 2", isi: "TODO: jelaskan apa yang dipelajari." },
    { judul: "TODO: Kompetensi 3", isi: "TODO: jelaskan apa yang dipelajari." },
  ],
  prospekKerja: [
    "Programmer / Software Engineer",
    "Web Developer",
    "Game Developer",
  ],
  fasilitas: ["TODO: Lab / ruang praktik", "TODO: Peralatan"],
  galeri: [
    // Simpan foto di public/jurusan/pplg/ lalu tulis:
    // { src: "/jurusan/pplg/lab.jpg", alt: "Suasana lab PPLG" },
  ],
  // kepalaProgram: { nama: "TODO", foto: "/jurusan/pplg/kaprog.jpg" },
  anggota: ["TODO: Nama Anggota 1", "TODO: Nama Anggota 2"],
};

export default jurusan;
