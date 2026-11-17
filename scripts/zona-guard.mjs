#!/usr/bin/env node
// 🔒 INTI — hook PreToolUse Claude Code (.claude/settings.json).
// Menolak Edit/Write ke file di luar zona kelompok aktif (.kelompok).
import { readFileSync } from "node:fs";
import { bolehUbah, daftarZona, infoZona, zonaAktif } from "./zona.mjs";

let input = {};
try { input = JSON.parse(readFileSync(0, "utf8")); } catch {}
const file = input.tool_input?.file_path ?? input.tool_input?.notebook_path;
if (!file) process.exit(0);

const id = zonaAktif();
if (!id || !infoZona(id)) {
  console.error(`Kelompok belum dipilih. Tanyakan ke pengguna kelompoknya (${daftarZona.join(", ")}), lalu minta mereka menjalankan: npm run kelompok -- <id>`);
  process.exit(2);
}
if (!bolehUbah(id, file)) {
  console.error(`DITOLAK: ${file} di luar zona kelompok "${id}". Yang boleh diubah: ${infoZona(id).paths.join(", ")}. Baca AGENTS.md — jangan mencoba lewat cara lain; jelaskan ke pengguna perubahan apa yang perlu diminta ke guru.`);
  process.exit(2);
}
