#!/usr/bin/env node
// 🔒 INTI — logika zona kelompok. Dipakai cek-zona.mjs & zona-guard.mjs.
//   npm run kelompok            → tampilkan kelompok aktif di laptop ini
//   npm run kelompok -- pplg    → set kelompok aktif (disimpan di .kelompok, tidak ikut di-commit)
import { execSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const peta = JSON.parse(readFileSync(join(ROOT, "zona.json"), "utf8"));
export const daftarZona = Object.keys(peta.zona);

function dariBranch() {
  try {
    const b = process.env.GITHUB_HEAD_REF || execSync("git rev-parse --abbrev-ref HEAD", { cwd: ROOT, stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
    const awal = b.split("/")[0];
    return awal === "inti" || daftarZona.includes(awal) ? awal : null;
  } catch {
    return null;
  }
}

/** Urutan: CI (nama branch PR) → env KELOMPOK → file .kelompok → nama branch lokal (mis. "pplg/hero") */
export function zonaAktif() {
  if (process.env.GITHUB_HEAD_REF) return dariBranch() ?? "(branch tidak diawali id kelompok)";
  const env = process.env.KELOMPOK?.trim();
  if (env) return env;
  const f = join(ROOT, ".kelompok");
  if (existsSync(f)) return readFileSync(f, "utf8").trim() || null;
  return dariBranch();
}

export function infoZona(id) {
  return id === "inti" ? peta.inti : peta.zona[id];
}

/** path boleh absolut atau relatif dari root repo */
export function bolehUbah(id, path) {
  const z = infoZona(id);
  if (!z) return false;
  const rel = (path.startsWith("/") ? relative(ROOT, path) : path).replaceAll("\\", "/");
  if (rel.startsWith("..")) return true; // di luar repo — bukan urusan zona
  if (rel === ".kelompok") return true;
  return z.paths.some((p) => p === "*" || rel === p.replace(/\/$/, "") || rel.startsWith(p));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const arg = process.argv[2];
  if (arg) {
    if (arg !== "inti" && !daftarZona.includes(arg)) {
      console.error(`❌ "${arg}" bukan kelompok yang dikenal. Pilihan: ${daftarZona.join(", ")}`);
      process.exit(1);
    }
    writeFileSync(join(ROOT, ".kelompok"), arg + "\n");
  }
  const id = zonaAktif();
  if (!id) {
    console.log(`Belum memilih kelompok. Jalankan: npm run kelompok -- <${daftarZona.join("|")}>`);
    process.exit(1);
  }
  const z = infoZona(id);
  console.log(`✅ Kelompok aktif: ${id} — ${z?.nama ?? "(tidak dikenal!)"}`);
  console.log(`   Boleh mengubah: ${z?.paths.join(", ")}`);
  if (z?.url) console.log(`   Cek hasilnya di: http://localhost:3000${z.url}`);
}
