/**
 * ✏️ ZONA KELOMPOK DKV
 * Hanya kelompok DKV yang mengubah folder ini (konten/jurusan/dkv/ dan public/jurusan/dkv/).
 * Ganti semua teks bertanda TODO dengan data asli jurusan kalian.
 */
import type { Jurusan } from "@/lib/types";

const jurusan: Jurusan = {
  slug: "dkv", // jangan diubah
  singkatan: "DKV",
  nama: "Desain Komunikasi Visual",
  ringkasan: "Menyampaikan pesan lewat desain grafis, fotografi, dan video.",
  deskripsi: "TODO: 1–2 kalimat tentang jurusan DKV untuk hasil pencarian Google.",
  ikon: "🎨",
  warna: "#db2777",
  kompetensi: [
    { judul: "TODO: Kompetensi 1", isi: "TODO: jelaskan apa yang dipelajari." },
    { judul: "TODO: Kompetensi 2", isi: "TODO: jelaskan apa yang dipelajari." },
    { judul: "TODO: Kompetensi 3", isi: "TODO: jelaskan apa yang dipelajari." },
  ],
  prospekKerja: [
    "Desainer Grafis",
    "Ilustrator",
    "Videografer",
  ],
  fasilitas: ["TODO: Lab / ruang praktik", "TODO: Peralatan"],
  galeri: [
    // Simpan foto di public/jurusan/dkv/ lalu tulis:
    // { src: "/jurusan/dkv/lab.jpg", alt: "Suasana lab DKV" },
  ],
  // kepalaProgram: { nama: "TODO", foto: "/jurusan/dkv/kaprog.jpg" },
  anggota: ["TODO: Nama Anggota 1", "TODO: Nama Anggota 2"],
};

export default jurusan;
