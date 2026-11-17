// 🔒 INTI — footer landing. Kontak diambil dari konten/sekolah/data.ts.
import Link from "next/link";
import { semuaJurusan } from "@/lib/jurusan";
import { sekolah } from "@/konten/sekolah";

export default function Footer() {
  const k = sekolah.kontak;
  return (
    <footer id="kontak" className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">{sekolah.nama}</p>
          <p className="mt-2 text-sm">{sekolah.tagline}</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Kontak</p>
          <p className="mt-2">{k.alamat}</p>
          <p>Telp. {k.telepon}</p>
          <p>{k.email}</p>
          {k.instagram && <a className="hover:text-white" href={`https://instagram.com/${k.instagram}`}>@{k.instagram}</a>}
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Program Keahlian</p>
          <ul className="mt-2 space-y-1">
            {semuaJurusan.map((j) => (
              <li key={j.slug}><Link className="hover:text-white" href={`/jurusan/${j.slug}`}>{j.nama}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {sekolah.nama} · Dibuat siswa dalam Workshop Next.js · {/* <a> biasa: /materi punya CSS sendiri */}
        <a href="/materi" className="underline hover:text-slate-300">Materi workshop</a>
      </div>
    </footer>
  );
}
