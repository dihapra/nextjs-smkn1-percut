// 🔒 INTI — route "/jurusan/[slug]". Tampilan tiap jurusan ada di konten/jurusan/<slug>/Halaman.tsx.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cariJurusan, semuaJurusan } from "@/lib/jurusan";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return semuaJurusan.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const j = cariJurusan((await params).slug);
  return j ? { title: j.data.nama, description: j.data.deskripsi } : {};
}

export default async function HalamanJurusan({ params }: Props) {
  const j = cariJurusan((await params).slug);
  if (!j) notFound();
  return <j.Halaman data={j.data} />;
}
