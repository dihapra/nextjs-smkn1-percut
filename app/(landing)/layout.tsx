// 🔒 INTI — kerangka semua halaman landing (navbar + footer).
import "./landing.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
