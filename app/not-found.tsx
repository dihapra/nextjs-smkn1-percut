// 🔒 INTI — halaman 404. Sengaja pakai inline style: CSS yang diimpor di sini
// akan ikut termuat di SEMUA halaman (termasuk /materi).
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100dvh", display: "grid", placeItems: "center", textAlign: "center", fontFamily: "system-ui, sans-serif", color: "#0f172a", margin: -8 }}>
      <div>
        <p style={{ fontSize: 64, fontWeight: 700, color: "#cbd5e1", margin: 0 }}>404</p>
        <h1 style={{ fontSize: 24, margin: "16px 0 24px" }}>Halaman tidak ditemukan</h1>
        <Link href="/" style={{ background: "#1d4ed8", color: "#fff", padding: "12px 20px", borderRadius: 8, textDecoration: "none", fontWeight: 600 }}>Kembali ke Beranda</Link>
      </div>
    </div>
  );
}
