/**
 * ✏️ ZONA KELOMPOK MPLB
 * Hanya kelompok MPLB yang mengubah folder ini (konten/jurusan/mplb/ dan public/jurusan/mplb/).
 * Ganti semua teks bertanda TODO dengan data asli jurusan kalian.
 */
import type { Jurusan } from "@/lib/types";

const jurusan: Jurusan = {
  slug: "mplb", // jangan diubah
  singkatan: "MPLB",
  nama: "Manajemen Perkantoran dan Layanan Bisnis",
  ringkasan: "Mengelola administrasi kantor dan layanan pelanggan modern.",
  deskripsi: "TODO: 1–2 kalimat tentang jurusan MPLB untuk hasil pencarian Google.",
  ikon: "🗂️",
  warna: "#9333ea",
  kompetensi: [
    { judul: "TODO: Kompetensi 1", isi: "TODO: jelaskan apa yang dipelajari." },
    { judul: "TODO: Kompetensi 2", isi: "TODO: jelaskan apa yang dipelajari." },
    { judul: "TODO: Kompetensi 3", isi: "TODO: jelaskan apa yang dipelajari." },
  ],
  prospekKerja: [
    "Staf Administrasi",
    "Sekretaris",
    "Customer Service",
  ],
  fasilitas: ["TODO: Lab / ruang praktik", "TODO: Peralatan"],
  galeri: [
    // Simpan foto di public/jurusan/mplb/ lalu tulis:
    // { src: "/jurusan/mplb/lab.jpg", alt: "Suasana lab MPLB" },
  ],
  // kepalaProgram: { nama: "TODO", foto: "/jurusan/mplb/kaprog.jpg" },
  anggota: ["TODO: Nama Anggota 1", "TODO: Nama Anggota 2"],
};

export default jurusan;
