// 🔒 INTI — route "/". Isi halamannya ada di konten/sekolah/Beranda.tsx (zona Kelompok Beranda).
import { semuaJurusan } from "@/lib/jurusan";
import { Beranda } from "@/konten/sekolah";

export default function Page() {
  return <Beranda jurusan={semuaJurusan} />;
}
