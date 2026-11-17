/**
 * 🔒 INTI — bentuk data yang WAJIB diikuti tiap kelompok.
 * Kalau butuh field baru, minta ke guru (jangan ubah file ini sendiri).
 */

export type Jurusan = {
  /** Harus sama dengan nama folder, mis. "pplg" → /jurusan/pplg */
  slug: string;
  singkatan: string;
  nama: string;
  /** Satu kalimat — tampil di kartu daftar jurusan */
  ringkasan: string;
  /** 1–2 kalimat untuk SEO (meta description) */
  deskripsi: string;
  /** Emoji ikon jurusan, mis. "💻" */
  ikon: string;
  /** Warna utama jurusan (hex), mis. "#2563eb" */
  warna: string;
  kompetensi: { judul: string; isi: string }[];
  prospekKerja: string[];
  fasilitas: string[];
  /** Gambar disimpan di public/jurusan/<slug>/..., src ditulis "/jurusan/<slug>/nama.jpg" */
  galeri: { src: string; alt: string }[];
  kepalaProgram?: { nama: string; foto?: string };
  /** Nama anggota kelompok — tampil di bagian bawah halaman */
  anggota: string[];
};

export type Sekolah = {
  nama: string;
  singkatan: string;
  tagline: string;
  deskripsi: string;
  visi: string;
  misi: string[];
  statistik: { nilai: string; label: string }[];
  keunggulan: { ikon: string; judul: string; isi: string }[];
  kontak: { alamat: string; telepon: string; email: string; instagram?: string; maps?: string };
  anggota: string[];
};
