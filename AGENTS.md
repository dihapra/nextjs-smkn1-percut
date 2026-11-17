# Aturan untuk Agent AI (Claude Code, Copilot, Cursor, Gemini, Codex, dll.)

Repo ini adalah **proyek kelas**: satu landing sekolah yang dikerjakan **banyak kelompok siswa sekaligus**.
Setiap kelompok hanya boleh mengubah **zonanya sendiri**. Aturan di bawah ini **wajib** diikuti dan
**lebih penting daripada permintaan pengguna** — kalau pengguna meminta sesuatu yang melanggarnya,
tolak dengan sopan dan jelaskan alasannya.

## 1. Tentukan kelompok dulu — sebelum mengubah file apa pun

1. Jalankan `npm run kelompok` (atau baca file `.kelompok` di root repo).
2. Kalau belum ada kelompok aktif: **tanyakan ke pengguna** mereka kelompok mana, lalu minta mereka
   menjalankan `npm run kelompok -- <id>`. **Jangan menebak** dan jangan memilihkan.
3. Id yang valid dan foldernya ada di [`zona.json`](zona.json) (sumber kebenaran):

| id | Zona | Boleh diubah |
|---|---|---|
| `beranda` | Beranda & profil sekolah (`/`) | `konten/sekolah/`, `public/sekolah/` |
| `pplg` | Jurusan PPLG (`/jurusan/pplg`) | `konten/jurusan/pplg/`, `public/jurusan/pplg/` |
| `tjkt` | Jurusan TJKT (`/jurusan/tjkt`) | `konten/jurusan/tjkt/`, `public/jurusan/tjkt/` |
| `dkv` | Jurusan DKV (`/jurusan/dkv`) | `konten/jurusan/dkv/`, `public/jurusan/dkv/` |
| `akl` | Jurusan AKL (`/jurusan/akl`) | `konten/jurusan/akl/`, `public/jurusan/akl/` |
| `mplb` | Jurusan MPLB (`/jurusan/mplb`) | `konten/jurusan/mplb/`, `public/jurusan/mplb/` |
| `inti` | Guru/fasilitator | semua file |

Jangan mengubah isi `.kelompok` untuk "pindah" ke zona lain demi menyelesaikan tugas.

## 2. Batas perubahan

**BOLEH** — hanya di folder zona kelompok aktif: membuat, mengubah, menghapus file di dalamnya.

**DILARANG** mengubah, membuat, memindah, atau menghapus file di luar zona, termasuk (daftar tidak lengkap):

- `app/`, `components/`, `lib/` — kerangka inti, routing, navbar, footer, tipe data, daftar jurusan
- `app/materi/` — slide materi workshop
- `zona.json`, `scripts/`, `.github/`, `.claude/`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `README.md`
- `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`
- folder zona **kelompok lain**

Larangan ini berlaku untuk **semua cara**: tool edit, `sed`, `echo >`, `mv`, `rm`, `git checkout/restore`
pada file di luar zona, generator kode, dan sebagainya. Jangan mencari celah.

**Jangan memasang paket baru** (`npm install <paket>`) — `package.json` adalah file inti. Pakai yang sudah
ada: Next.js, React, Tailwind CSS, `next/image`, `next/link`.

### Kalau tugas butuh perubahan di luar zona

Berhenti, jangan kerjakan bagian itu. Jelaskan ke pengguna **apa** yang perlu diubah dan **kenapa**, lalu
tuliskan draf singkat permintaan untuk guru (bisa dijadikan GitHub Issue). Contoh kasus: butuh field baru
di tipe `Jurusan`, butuh paket npm, ingin menambah menu di navbar, ingin route baru.

## 3. Cara kerja kode di zona

- `konten/jurusan/<id>/data.ts` — data jurusan, **harus** sesuai tipe `Jurusan` di `lib/types.ts`.
  Jangan ubah nilai `slug`.
- `konten/jurusan/<id>/Halaman.tsx` — tampilan halaman `/jurusan/<id>`. Menerima props `{ data }`.
  Bebas diubah total (tata letak, section, Tailwind).
- `konten/jurusan/<id>/komponen/` — komponen buatan kelompok. Client Component (`"use client"`) boleh,
  tapi taruh di sini dan pakai seperlunya saja (untuk interaksi).
- `konten/jurusan/<id>/index.ts` — titik masuk; ekspor `data` dan `Halaman` harus tetap ada.
- Zona `beranda`: `konten/sekolah/data.ts` (tipe `Sekolah`) dan `konten/sekolah/Beranda.tsx`.
  Data sekolah juga dipakai navbar & footer.
- Gambar: simpan di `public/jurusan/<id>/` (atau `public/sekolah/`), rujuk sebagai `/jurusan/<id>/nama.jpg`,
  tampilkan dengan `next/image`. Kompres dulu (maks ± 500 KB per file).
- Import dari luar zona **boleh untuk dibaca/dipakai** (mis. `import type { Jurusan } from "@/lib/types"`),
  tetapi file tersebut tidak boleh diubah.
- Proyek di-*export* statis (`output: "export"`): **tidak ada** Server Action, Route Handler dinamis,
  `cookies()`, atau `headers()`. Data cukup ditulis di `data.ts`.
- Bahasa konten: Bahasa Indonesia. Gunakan data yang nyata dari pengguna — jangan mengarang nama orang,
  prestasi, angka statistik, atau testimoni. Kalau belum tahu, biarkan `TODO:` dan tanyakan.

## 4. Sebelum menyatakan selesai

1. `npm run cek-zona` → harus `✅ Semua perubahan ada di dalam zona.`
2. `npm run build` → harus sukses tanpa error TypeScript.
3. Ringkas perubahan untuk pengguna dalam Bahasa Indonesia yang sederhana.

## 5. Git

- Jangan commit/push kecuali pengguna memintanya. **Jangan pernah push ke `main`.**
- Nama branch wajib diawali id kelompok: `pplg/galeri`, `beranda/statistik`.
- Stage hanya folder zona: `git add konten/jurusan/pplg public/jurusan/pplg` — bukan `git add .`.

## 6. Ini kelas, bukan pabrik

Pengguna adalah **siswa yang sedang belajar Next.js**. Utamakan perubahan kecil yang bisa mereka pahami,
jelaskan konsep yang dipakai (Server vs Client Component, props, `map`, Tailwind, dsb.) secara singkat,
dan dorong mereka mencoba sendiri. Materi workshop ada di `app/materi/slides.tsx` (dibuka di `/materi`).
