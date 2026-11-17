/**
 * ✏️ ZONA KELOMPOK DKV — tampilan halaman /jurusan/dkv
 * Bebas diubah: tata letak, warna, tambah section, pecah jadi komponen di ./komponen/.
 * Data diambil dari ./data.ts (lewat props `data`).
 */
import Image from "next/image";
import type { Jurusan } from "@/lib/types";

export default function Halaman({ data }: { data: Jurusan }) {
  return (
    <article>
      {/* ── HERO ── */}
      <section className="text-white" style={{ background: `linear-gradient(135deg, ${data.warna}, #0f172a)` }}>
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-5xl">{data.ikon}</p>
          <p className="mt-4 font-mono text-sm uppercase tracking-widest opacity-80">Program Keahlian · {data.singkatan}</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">{data.nama}</h1>
          <p className="mt-4 max-w-2xl text-lg opacity-90">{data.ringkasan}</p>
        </div>
      </section>

      {/* ── KOMPETENSI ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">Apa yang Dipelajari</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {data.kompetensi.map((k) => (
            <div key={k.judul} className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold">{k.judul}</h3>
              <p className="mt-2 text-slate-600">{k.isi}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROSPEK KERJA & FASILITAS ── */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Prospek Kerja</h2>
            <ul className="mt-4 space-y-2">
              {data.prospekKerja.map((p) => <li key={p}>✅ {p}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Fasilitas</h2>
            <ul className="mt-4 space-y-2">
              {data.fasilitas.map((f) => <li key={f}>🏫 {f}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ── GALERI ── (muncul kalau data.galeri diisi) */}
      {data.galeri.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Galeri</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
            {data.galeri.map((g) => (
              <Image key={g.src} src={g.src} alt={g.alt} width={600} height={400} className="aspect-[3/2] w-full rounded-xl object-cover" />
            ))}
          </div>
        </section>
      )}

      {/* TODO: tambahkan section lain — testimoni alumni, prestasi, FAQ, video profil, dll. */}

      {/* ── PEMBUAT ── */}
      <section className="mx-auto max-w-6xl px-4 pb-16 text-sm text-slate-500">
        Halaman ini dibuat oleh: {data.anggota.join(", ")}
      </section>
    </article>
  );
}
