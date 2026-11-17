/**
 * ✏️ ZONA KELOMPOK BERANDA — isi halaman "/".
 * Bebas diubah: tambah section (berita, galeri, testimoni, PPDB, dll.),
 * pecah jadi komponen di ./komponen/. Daftar jurusan dikirim lewat props.
 */
import Link from "next/link";
import type { Jurusan } from "@/lib/types";
import sekolah from "./data";

export default function Beranda({ jurusan }: { jurusan: Jurusan[] }) {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-blue-700 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <p className="font-mono text-sm uppercase tracking-widest text-blue-200">Selamat datang di</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">{sekolah.nama}</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">{sekolah.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/jurusan" className="rounded-lg bg-white px-5 py-3 font-semibold text-blue-800 hover:bg-blue-50">Lihat Jurusan</Link>
            <a href="#kontak" className="rounded-lg border border-white/40 px-5 py-3 font-semibold hover:bg-white/10">Hubungi Kami</a>
          </div>
        </div>
      </section>

      {/* ── STATISTIK ── */}
      <section className="mx-auto -mt-10 grid max-w-6xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
        {sekolah.statistik.map((s) => (
          <div key={s.label} className="rounded-xl bg-white p-5 text-center shadow-lg">
            <p className="text-3xl font-bold text-blue-700">{s.nilai}</p>
            <p className="text-sm text-slate-500">{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── PROFIL, VISI & MISI ── */}
      <section id="profil" className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Tentang Kami</h2>
          <p className="mt-4 text-slate-600">{sekolah.deskripsi}</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-6">
          <h3 className="font-semibold">Visi</h3>
          <p className="mt-1 text-slate-600">{sekolah.visi}</p>
          <h3 className="mt-4 font-semibold">Misi</h3>
          <ol className="mt-1 list-decimal space-y-1 pl-5 text-slate-600">
            {sekolah.misi.map((m) => <li key={m}>{m}</li>)}
          </ol>
        </div>
      </section>

      {/* ── JURUSAN ── (data dari tiap kelompok jurusan) */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-bold">Program Keahlian</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jurusan.map((j) => (
              <Link key={j.slug} href={`/jurusan/${j.slug}`} className="group rounded-xl border-t-4 bg-white p-6 shadow-sm transition hover:shadow-md" style={{ borderColor: j.warna }}>
                <p className="text-3xl">{j.ikon}</p>
                <p className="mt-3 font-mono text-xs uppercase tracking-widest" style={{ color: j.warna }}>{j.singkatan}</p>
                <h3 className="font-semibold group-hover:underline">{j.nama}</h3>
                <p className="mt-2 text-sm text-slate-600">{j.ringkasan}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEUNGGULAN ── */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold">Kenapa Memilih Kami?</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {sekolah.keunggulan.map((k) => (
            <div key={k.judul}>
              <p className="text-3xl">{k.ikon}</p>
              <h3 className="mt-2 font-semibold">{k.judul}</h3>
              <p className="mt-1 text-slate-600">{k.isi}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TODO: section lain — berita, galeri kegiatan, testimoni alumni, info PPDB, peta lokasi */}

      <p className="mx-auto max-w-6xl px-4 pb-10 text-sm text-slate-500">Beranda dibuat oleh: {sekolah.anggota.join(", ")}</p>
    </>
  );
}
