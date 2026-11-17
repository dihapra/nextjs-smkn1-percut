/**
 * ✏️ ZONA KELOMPOK AKL
 * Hanya kelompok AKL yang mengubah folder ini (konten/jurusan/akl/ dan public/jurusan/akl/).
 * Ganti semua teks bertanda TODO dengan data asli jurusan kalian.
 */
import type { Jurusan } from "@/lib/types";

const jurusan: Jurusan = {
  slug: "akl", // jangan diubah
  singkatan: "AKL",
  nama: "Akuntansi dan Keuangan Lembaga",
  ringkasan: "Mengelola pembukuan dan laporan keuangan secara profesional.",
  deskripsi: "TODO: 1–2 kalimat tentang jurusan AKL untuk hasil pencarian Google.",
  ikon: "📊",
  warna: "#16a34a",
  kompetensi: [
    { judul: "TODO: Kompetensi 1", isi: "TODO: jelaskan apa yang dipelajari." },
    { judul: "TODO: Kompetensi 2", isi: "TODO: jelaskan apa yang dipelajari." },
    { judul: "TODO: Kompetensi 3", isi: "TODO: jelaskan apa yang dipelajari." },
  ],
  prospekKerja: [
    "Staf Akuntansi",
    "Kasir / Teller",
    "Staf Pajak",
  ],
  fasilitas: ["TODO: Lab / ruang praktik", "TODO: Peralatan"],
  galeri: [
    // Simpan foto di public/jurusan/akl/ lalu tulis:
    // { src: "/jurusan/akl/lab.jpg", alt: "Suasana lab AKL" },
  ],
  // kepalaProgram: { nama: "TODO", foto: "/jurusan/akl/kaprog.jpg" },
  anggota: ["TODO: Nama Anggota 1", "TODO: Nama Anggota 2"],
};

export default jurusan;
