/**
 * 🔒 INTI — daftar semua jurusan. Urutan di sini = urutan di menu & beranda.
 * Kelompok TIDAK perlu mengubah file ini; cukup isi folder konten/jurusan/<slug>/.
 */
import * as akl from "@/konten/jurusan/akl";
import * as dkv from "@/konten/jurusan/dkv";
import * as mplb from "@/konten/jurusan/mplb";
import * as pplg from "@/konten/jurusan/pplg";
import * as tjkt from "@/konten/jurusan/tjkt";

const modul = [pplg, tjkt, dkv, akl, mplb];

export const semuaJurusan = modul.map((m) => m.data);

export function cariJurusan(slug: string) {
  return modul.find((m) => m.data.slug === slug);
}
