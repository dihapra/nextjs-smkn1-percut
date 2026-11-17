# Landing Sekolah — Proyek Workshop Next.js

Website profil sekolah dan program keahliannya, dibangun **bersama per kelompok** sambil belajar Next.js.
Kerangka (routing, navbar, footer, tipe data) sudah disiapkan; tugas tiap kelompok adalah **melengkapi
konten dan tampilan bagiannya sendiri**.

| URL | Isi | Dikerjakan oleh |
|---|---|---|
| `/` | Beranda: profil, visi-misi, statistik, keunggulan | Kelompok **Beranda** |
| `/jurusan` | Daftar semua jurusan | Guru (inti) |
| `/jurusan/pplg` | Pengembangan Perangkat Lunak dan Gim | Kelompok **PPLG** |
| `/jurusan/tjkt` | Teknik Jaringan Komputer dan Telekomunikasi | Kelompok **TJKT** |
| `/jurusan/dkv` | Desain Komunikasi Visual | Kelompok **DKV** |
| `/jurusan/akl` | Akuntansi dan Keuangan Lembaga | Kelompok **AKL** |
| `/jurusan/mplb` | Manajemen Perkantoran dan Layanan Bisnis | Kelompok **MPLB** |
| `/materi` | Slide materi workshop (terpisah dari landing) | Guru |

---

## 🚀 Mulai Cepat

Butuh: **Node.js 20.9+**, **Git**, akun **GitHub**.

```bash
git clone <URL-REPO> landing-sekolah
cd landing-sekolah
npm install

# 1. pilih kelompokmu: beranda | pplg | tjkt | dkv | akl | mplb
npm run kelompok -- pplg

# 2. buat branch kerja — WAJIB diawali id kelompok
git switch -c pplg/konten

# 3. jalankan
npm run dev
```

Buka <http://localhost:3000> dan halaman kelompokmu (mis. <http://localhost:3000/jurusan/pplg>).
Materi workshop: <http://localhost:3000/materi> (tekan → untuk lanjut, **M** daftar slide, **F** fullscreen).

---

## 🗺️ Zona Kelompok — apa yang boleh kamu ubah

Setiap kelompok punya **zona** (folder) sendiri. Karena tiap kelompok bekerja di folder berbeda,
hasil kerja semua kelompok bisa digabung **tanpa konflik**.

```
landing-sekolah/
├── app/                      🔒 inti — routing & layout (termasuk app/materi)
├── components/               🔒 inti — Navbar, Footer
├── lib/                      🔒 inti — tipe data (types.ts), daftar jurusan (jurusan.ts)
├── konten/
│   ├── sekolah/              ✏️ Kelompok BERANDA
│   │   ├── data.ts           ← profil, visi-misi, kontak (dipakai navbar & footer juga)
│   │   ├── Beranda.tsx       ← tampilan halaman "/"
│   │   └── komponen/         ← komponen buatan kelompok
│   └── jurusan/
│       ├── pplg/             ✏️ Kelompok PPLG
│       │   ├── data.ts       ← teks & data jurusan
│       │   ├── Halaman.tsx   ← tampilan halaman /jurusan/pplg
│       │   ├── komponen/     ← komponen buatan kelompok
│       │   └── index.ts      ← (biarkan)
│       ├── tjkt/             ✏️ Kelompok TJKT
│       ├── dkv/              ✏️ Kelompok DKV
│       ├── akl/              ✏️ Kelompok AKL
│       └── mplb/             ✏️ Kelompok MPLB
├── public/
│   ├── sekolah/              ✏️ foto milik Kelompok BERANDA
│   └── jurusan/<id>/         ✏️ foto milik kelompok jurusan
├── zona.json                 🔒 peta zona (sumber kebenaran)
├── AGENTS.md                 🔒 aturan untuk agent AI
└── scripts/                  🔒 cek zona
```

- ✏️ **Zona** — hanya kelompok pemiliknya yang mengubah.
- 🔒 **Inti** — hanya guru. Butuh perubahan di sini (field data baru, paket npm, menu baru)?
  **Buat Issue / minta ke guru**, jangan ubah sendiri.
- Boleh **memakai** (import) file inti, misalnya `import type { Jurusan } from "@/lib/types"`.

### Yang dikerjakan tiap kelompok

1. Ganti semua teks `TODO:` di `data.ts` dengan data asli (cek tipe-nya di `lib/types.ts`).
2. Tambahkan foto ke `public/jurusan/<id>/`, lalu isi `galeri` — ditampilkan dengan `next/image`.
3. Kembangkan `Halaman.tsx` / `Beranda.tsx`: tata letak, warna, section baru, responsif di HP (Tailwind).
4. Pecah bagian halaman jadi komponen di `komponen/`; buat minimal satu Client Component (`"use client"`)
   untuk interaksi (FAQ akordeon, galeri, tab, dsb.).
5. Isi `deskripsi` untuk SEO dan `anggota` dengan nama anggota kelompok.

---

## 🔁 Alur Kerja Git

```bash
npm run cek-zona                                 # pastikan hanya zonamu yang berubah
npm run build                                    # pastikan tidak ada error

git add konten/jurusan/pplg public/jurusan/pplg  # JANGAN `git add .`
git commit -m "feat(pplg): isi kompetensi & galeri"
git push -u origin pplg/konten                   # JANGAN push ke main
```

Lalu buka GitHub → **Compare & pull request** ke `main`. Di setiap PR, GitHub Actions otomatis menjalankan:

- **Cek Zona Kelompok** — gagal kalau ada file di luar zona (zona dibaca dari nama branch).
- **Build** — gagal kalau ada error TypeScript/build.

Guru me-review lalu merge. Kalau repo terhubung ke Vercel, tiap PR mendapat **Preview URL** sendiri.

> Ambil perubahan terbaru dari kelompok lain: `git switch pplg/konten && git pull origin main`

---

## 🤖 Memakai Agent AI (Claude Code, Copilot, Cursor, Gemini, Codex)

Boleh, dengan aturan:

1. **Pilih kelompok dulu**: `npm run kelompok -- <id>`. Agent membaca file `.kelompok` ini.
2. Semua agent populer otomatis membaca **[`AGENTS.md`](AGENTS.md)** (Claude Code lewat `CLAUDE.md`,
   Gemini lewat `GEMINI.md`, Copilot lewat `.github/copilot-instructions.md`). Isinya: agent hanya boleh
   mengubah zona kelompokmu, tidak boleh memasang paket, dan harus menjalankan `cek-zona` + `build`.
3. Di **Claude Code**, edit file di luar zona **diblokir otomatis** oleh hook (`.claude/settings.json`).
   Agent lain hanya diberi instruksi — tetap **periksa sendiri** dengan `npm run cek-zona`.
4. Agent itu asisten, bukan pengganti. Kamu harus bisa **menjelaskan setiap baris** yang kamu commit.
   Jangan biarkan agent mengarang data (nama guru, prestasi, angka) — pakai data asli.

Contoh prompt yang baik:

> Saya kelompok PPLG. Buatkan komponen FAQ akordeon di `konten/jurusan/pplg/komponen/` dengan 3 pertanyaan
> dari data yang saya berikan, lalu pasang di `Halaman.tsx`. Jelaskan kenapa komponennya harus `"use client"`.

---

## 🧰 Perintah

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Dev server + hot reload di <http://localhost:3000> |
| `npm run build` | Build produksi (export statis ke folder `out/`) |
| `npm run kelompok` | Lihat kelompok aktif |
| `npm run kelompok -- <id>` | Set kelompok aktif (disimpan di `.kelompok`, tidak ikut di-commit) |
| `npm run cek-zona` | Cek semua perubahan (commit & belum commit) ada di zonamu |

## ❓ Masalah yang Sering Muncul

| Gejala | Solusi |
|---|---|
| `cek-zona` ❌ ada file di luar zona | `git restore <file>` (atau hapus file baru itu). Kalau memang perlu, minta guru. |
| Error tipe di `data.ts` | Bandingkan dengan `lib/types.ts` — nama field & jenis datanya harus sama persis. |
| Gambar tidak muncul | File harus di `public/...`, `src` diawali `/` tanpa kata `public`, huruf besar/kecil sama persis. |
| `useState` error di Server Component | Pindahkan ke file di `komponen/` dengan `"use client"` di baris pertama. |
| PR gagal "Cek Zona" padahal benar | Nama branch harus diawali id kelompok: `pplg/...`. |

---

## 👩‍🏫 Untuk Guru

**Persiapan repo (sekali):**

1. Push repo ini ke GitHub (template/organisasi kelas), beri siswa akses **write**.
2. *Settings → Branches → Add rule* untuk `main`: **Require a pull request** dan
   **Require status checks** → pilih `cek-zona` dan `build`. Siswa tidak bisa push langsung ke `main`.
3. (Opsional) Import repo di Vercel → tiap PR kelompok otomatis dapat Preview URL.
4. Umumkan pembagian zona, mis. Kelompok 1 = `beranda`, Kelompok 2 = `pplg`, dst. Tiap siswa menjalankan `npm run kelompok -- <id>`.
5. Untuk bekerja sebagai guru (bebas mengubah semua file): `npm run kelompok -- inti`, branch `inti/...`.
   Catatan: CI meloloskan semua file untuk branch `inti/...` — periksa author PR dengan branch seperti itu.

**Mengganti daftar jurusan** (sesuaikan dengan sekolah):

1. Ubah `zona.json` (id, nama, url, paths).
2. Salin satu folder di `konten/jurusan/` jadi id baru, sesuaikan `slug` di `data.ts`, buat `public/jurusan/<id>/`.
3. Daftarkan di `lib/jurusan.ts` (import + array `modul`).
4. Perbarui tabel zona di `AGENTS.md` dan README ini.

**Materi** ada di `app/materi/slides.tsx` (komponen slide di `app/materi/ui.tsx`). Gaya slide
(`deck.css`) di-scope ke `.deck` sehingga tidak bercampur dengan Tailwind milik landing.

**Deploy ke server sendiri:** `npm run deploy` (build lalu rsync `out/` ke `/var/www/nextjs-workshop/`).
