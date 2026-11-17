// 🔒 INTI — route "/jurusan": daftar semua program keahlian.
import type { Metadata } from "next";
import Link from "next/link";
import { semuaJurusan } from "@/lib/jurusan";

export const metadata: Metadata = { title: "Program Keahlian" };

export default function DaftarJurusan() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold">Program Keahlian</h1>
      <p className="mt-2 text-slate-600">Pilih jurusan untuk melihat kompetensi, fasilitas, dan prospek kerjanya.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {semuaJurusan.map((j) => (
          <Link key={j.slug} href={`/jurusan/${j.slug}`} className="group rounded-xl border border-slate-200 p-6 transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-lg text-2xl" style={{ background: `${j.warna}1a` }}>{j.ikon}</span>
              <span className="font-mono text-sm font-semibold" style={{ color: j.warna }}>{j.singkatan}</span>
            </div>
            <h2 className="mt-4 font-semibold group-hover:underline">{j.nama}</h2>
            <p className="mt-2 text-sm text-slate-600">{j.ringkasan}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
