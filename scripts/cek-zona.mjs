#!/usr/bin/env node
// 🔒 INTI — cek apakah semua perubahan (commit + belum commit) ada di zona kelompok.
//   npm run cek-zona                 → bandingkan dengan origin/main (atau main)
//   npm run cek-zona -- --base main  → tentukan base sendiri
import { execSync } from "node:child_process";
import { ROOT, bolehUbah, daftarZona, infoZona, zonaAktif } from "./zona.mjs";

const git = (c) => {
  try { return execSync(`git ${c}`, { cwd: ROOT, stdio: ["ignore", "pipe", "ignore"] }).toString().split("\n").filter(Boolean); }
  catch { return null; }
};

const id = zonaAktif();
if (!id || !infoZona(id)) {
  console.error(`❌ Kelompok belum dipilih / tidak dikenal (${id ?? "-"}).\n   Jalankan: npm run kelompok -- <${daftarZona.join("|")}>`);
  process.exit(1);
}

const i = process.argv.indexOf("--base");
const kandidat = i > 0 ? [process.argv[i + 1]] : ["origin/main", "main"];
const base = kandidat.find((b) => git(`rev-parse --verify --quiet ${b}`));

const berkas = new Set([
  ...(base ? git(`diff --name-only ${base}...HEAD`) ?? [] : []),
  ...(git("diff --name-only HEAD") ?? []),
  ...(git("ls-files --others --exclude-standard") ?? []),
]);

const langgar = [...berkas].filter((f) => !bolehUbah(id, f));
console.log(`Kelompok: ${id} · base: ${base ?? "(tidak ada)"} · ${berkas.size} file berubah`);
if (langgar.length) {
  console.error(`\n❌ ${langgar.length} file di LUAR zona kelompok ${id}:`);
  for (const f of langgar) console.error(`   - ${f}`);
  console.error(`\nKembalikan dengan: git restore --source=${base ?? "HEAD"} -- <file>   (atau hapus file baru)`);
  console.error(`Butuh perubahan di file inti? Minta ke guru / buat issue.`);
  process.exit(1);
}
console.log("✅ Semua perubahan ada di dalam zona.");
