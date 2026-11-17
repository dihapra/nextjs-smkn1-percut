// 🔒 INTI — navbar landing. Nama sekolah diambil dari konten/sekolah/data.ts.
import Link from "next/link";
import { semuaJurusan } from "@/lib/jurusan";
import { sekolah } from "@/konten/sekolah";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="font-bold">{sekolah.nama}</Link>
        <div className="flex items-center gap-1 text-sm">
          <Link href="/" className="rounded-md px-3 py-2 hover:bg-slate-100">Beranda</Link>
          <details className="group relative">
            <summary className="cursor-pointer list-none rounded-md px-3 py-2 hover:bg-slate-100">Jurusan ▾</summary>
            <div className="absolute right-0 mt-1 w-72 rounded-lg border border-slate-200 bg-white p-1 shadow-lg">
              {semuaJurusan.map((j) => (
                <Link key={j.slug} href={`/jurusan/${j.slug}`} className="flex gap-2 rounded-md px-3 py-2 hover:bg-slate-100">
                  <span>{j.ikon}</span>
                  <span><b className="font-semibold">{j.singkatan}</b> <span className="text-slate-500">· {j.nama}</span></span>
                </Link>
              ))}
              <Link href="/jurusan" className="block rounded-md px-3 py-2 text-blue-700 hover:bg-slate-100">Semua jurusan →</Link>
            </div>
          </details>
          <Link href="/#kontak" className="rounded-md px-3 py-2 hover:bg-slate-100">Kontak</Link>
        </div>
      </nav>
    </header>
  );
}
