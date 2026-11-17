/**
 * ✏️ ZONA KELOMPOK BERANDA — profil sekolah.
 * Data ini juga dipakai navbar & footer (nama, kontak), jadi isi dengan benar.
 */
import type { Sekolah } from "@/lib/types";

const sekolah: Sekolah = {
  nama: "SMK Negeri 1 Percut Sei Tuan", // cek penulisan resmi
  singkatan: "SMKN 1 Percut",
  tagline: "Siap Kerja, Siap Kuliah, Siap Berwirausaha", // TODO
  deskripsi: "TODO: 2–3 kalimat tentang sekolah — sejarah singkat, akreditasi, keunggulan.",
  visi: "TODO: visi sekolah.",
  misi: ["TODO: misi 1", "TODO: misi 2", "TODO: misi 3"],
  statistik: [
    { nilai: "5", label: "Program Keahlian" },
    { nilai: "TODO", label: "Siswa Aktif" },
    { nilai: "TODO", label: "Mitra Industri" },
    { nilai: "TODO", label: "Lulusan Terserap" },
  ],
  keunggulan: [
    { ikon: "🏭", judul: "TODO: Kerja sama industri", isi: "TODO: jelaskan." },
    { ikon: "🏆", judul: "TODO: Prestasi", isi: "TODO: jelaskan." },
    { ikon: "🧪", judul: "TODO: Fasilitas praktik", isi: "TODO: jelaskan." },
  ],
  kontak: {
    alamat: "TODO: Jl. Contoh No. 1, Kota",
    telepon: "TODO: (021) 000000",
    email: "info@contoh.sch.id", // TODO
    instagram: "", // TODO: tanpa @, mis. "smknusantara"
  },
  anggota: ["TODO: Nama Anggota 1", "TODO: Nama Anggota 2"],
};

export default sekolah;
