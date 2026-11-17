/**
 * ✏️ ZONA KELOMPOK TJKT
 * Hanya kelompok TJKT yang mengubah folder ini (konten/jurusan/tjkt/ dan public/jurusan/tjkt/).
 * Ganti semua teks bertanda TODO dengan data asli jurusan kalian.
 */
import type { Jurusan } from "@/lib/types";

const jurusan: Jurusan = {
  slug: "tjkt", // jangan diubah
  singkatan: "TJKT",
  nama: "Teknik Jaringan Komputer dan Telekomunikasi",
  ringkasan: "Merancang, memasang, dan mengamankan jaringan komputer.",
  deskripsi: "TODO: 1–2 kalimat tentang jurusan TJKT untuk hasil pencarian Google.",
  ikon: "🌐",
  warna: "#0891b2",
  kompetensi: [
    { judul: "TODO: Kompetensi 1", isi: "TODO: jelaskan apa yang dipelajari." },
    { judul: "TODO: Kompetensi 2", isi: "TODO: jelaskan apa yang dipelajari." },
    { judul: "TODO: Kompetensi 3", isi: "TODO: jelaskan apa yang dipelajari." },
  ],
  prospekKerja: [
    "Network Engineer",
    "Teknisi Fiber Optik",
    "IT Support",
  ],
  fasilitas: ["TODO: Lab / ruang praktik", "TODO: Peralatan"],
  galeri: [
    // Simpan foto di public/jurusan/tjkt/ lalu tulis:
    // { src: "/jurusan/tjkt/lab.jpg", alt: "Suasana lab TJKT" },
  ],
  // kepalaProgram: { nama: "TODO", foto: "/jurusan/tjkt/kaprog.jpg" },
  anggota: ["TODO: Nama Anggota 1", "TODO: Nama Anggota 2"],
};

export default jurusan;
