import { Code, Cols, Note, Section, Slide, Tree } from "./ui";

type S = { title: string; Body: () => React.ReactNode };

export const slides: S[] = [
  /* ───────────────────────── PEMBUKA ───────────────────────── */
  {
    title: "Judul",
    Body: () => (
      <section className="slide title-slide">
        <div className="kicker">Workshop · Hands-on</div>
        <h1>
          <span className="grad">Next.js</span>
          <br />
          dari Nol sampai Vercel
        </h1>
        <p className="lead">Membangun <strong>landing sekolah</strong> bersama — tiap kelompok mengerjakan satu bagian, lalu online-kan di Vercel.</p>
        <p className="small" style={{ marginTop: 40 }}>Tekan → / spasi untuk lanjut · M untuk daftar slide · F untuk fullscreen</p>
      </section>
    ),
  },
  {
    title: "Agenda",
    Body: () => (
      <Slide kicker="Hari ini" title="Agenda Workshop">
        <div className="cards" style={{ ["--n" as string]: 3 }}>
          <div className="card"><div className="tag">01</div><h3>Pengenalan</h3>Apa itu Next.js, kenapa dipakai, cara kerja rendering.</div>
          <div className="card"><div className="tag">02</div><h3>Setup Project</h3>create-next-app, struktur folder, menjalankan dev server.</div>
          <div className="card"><div className="tag">03</div><h3>Routing</h3>App Router, layout, dynamic route, navigasi.</div>
          <div className="card"><div className="tag">04</div><h3>Server &amp; Client</h3>Server Components, Client Components, data fetching.</div>
          <div className="card"><div className="tag">05</div><h3>Full-stack</h3>Route Handlers, Server Actions, env, proxy.</div>
          <div className="card"><div className="tag">06</div><h3>Deploy</h3>GitHub → Vercel, domain, preview deployment.</div>
        </div>
        <Note tone="tip">Format: setiap materi langsung dipraktikkan. Di akhir, <strong>landing sekolah</strong> kita online — tiap kelompok mengisi halaman jurusannya.</Note>
      </Slide>
    ),
  },
  {
    title: "Persiapan",
    Body: () => (
      <Slide kicker="Sebelum mulai" title="Yang Perlu Disiapkan">
        <Cols>
          <ul>
            <li><strong>Node.js 20.9+</strong> (disarankan LTS terbaru)</li>
            <li><strong>Git</strong> terpasang &amp; sudah dikonfigurasi</li>
            <li>Akun <strong>GitHub</strong></li>
            <li>Akun <strong>Vercel</strong> (login pakai GitHub)</li>
            <li>Code editor — <strong>VS Code</strong> direkomendasikan</li>
            <li>Dasar <strong>HTML, CSS, JavaScript &amp; React</strong></li>
          </ul>
          <div className="stack">
            <Code lang="bash" file="Terminal — cek instalasi">{`
node -v    # v20.9.0 atau lebih baru
npm -v
git --version
git config --global user.name "Nama Kamu"
git config --global user.email "kamu@email.com"
`}</Code>
          </div>
        </Cols>
      </Slide>
    ),
  },

  /* ───────────────────────── PROYEK ───────────────────────── */
  {
    title: "Proyek: Landing Sekolah",
    Body: () => (
      <Slide kicker="Proyek kita" title="Landing Sekolah & Jurusan">
        <Cols ratio="1.15fr 1fr">
          <table className="t">
            <thead><tr><th>URL</th><th>Isi</th><th>Dikerjakan</th></tr></thead>
            <tbody>
              <tr><td>/</td><td>Beranda: profil, visi-misi, keunggulan</td><td>Kel. Beranda</td></tr>
              <tr><td>/jurusan</td><td>Daftar semua jurusan</td><td>Guru (inti)</td></tr>
              <tr><td>/jurusan/pplg</td><td>Halaman satu jurusan</td><td>Kel. PPLG</td></tr>
              <tr><td>/jurusan/…</td><td>TJKT, DKV, AKL, MPLB</td><td>Kel. masing-masing</td></tr>
              <tr><td>/materi</td><td>Slide ini 👀</td><td>Guru</td></tr>
            </tbody>
          </table>
          <div>
            <p>Satu repo, satu website, <strong>banyak kelompok</strong>.</p>
            <ul>
              <li>Kerangka (navbar, footer, routing) <strong>sudah jadi</strong></li>
              <li>Tiap kelompok <strong>melengkapi</strong> konten &amp; tampilan bagiannya</li>
              <li>Materi di <code>/materi</code> terpisah dari landing</li>
            </ul>
            <Note tone="tip">Setiap materi Next.js langsung dipraktikkan di bagian kelompokmu.</Note>
          </div>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Zona Kelompok",
    Body: () => (
      <Slide kicker="Aturan main" title="Setiap Kelompok Punya Zona">
        <Cols ratio="1.15fr 1fr">
          <Tree>{`
landing-sekolah/
├── app/                 # 🔒 inti — routing & layout
├── components/          # 🔒 inti — Navbar, Footer
├── lib/                 # 🔒 inti — tipe data, daftar jurusan
├── konten/
│   ├── sekolah/         # ✏️ Kelompok Beranda
│   └── jurusan/
│       ├── pplg/        # ✏️ Kelompok PPLG
│       ├── tjkt/        # ✏️ Kelompok TJKT
│       └── …
├── public/jurusan/pplg/ # ✏️ foto milik PPLG
└── zona.json            # 🔒 peta zona
`}</Tree>
          <div>
            <ul>
              <li><strong>✏️ Zona</strong> — hanya kelompok pemiliknya yang mengubah</li>
              <li><strong>🔒 Inti</strong> — hanya guru. Butuh perubahan? Minta, jangan ubah sendiri</li>
              <li>Folder terpisah = <strong>tidak ada konflik</strong> saat digabung</li>
            </ul>
            <Note tone="warn">PR yang mengubah file di luar zona otomatis <strong>gagal dicek</strong> di GitHub.</Note>
          </div>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Kerja Bareng Agent AI",
    Body: () => (
      <Slide kicker="Aturan main" title="Memakai Agent AI dengan Aman">
        <Cols>
          <Code lang="bash" file="Terminal — sekali di awal">{`
# beri tahu repo: kamu kelompok mana
npm run kelompok -- pplg

# sebelum commit / push
npm run cek-zona
npm run build
`}</Code>
          <div>
            <ul>
              <li>Agent (Claude Code, Copilot, Cursor, Gemini, Codex) membaca <code>AGENTS.md</code></li>
              <li>Isinya: agent <strong>hanya boleh</strong> mengubah zona kelompokmu</li>
              <li>Di Claude Code, edit di luar zona <strong>diblokir otomatis</strong> lewat hook</li>
            </ul>
            <Note tone="tip">Agent itu asisten, bukan pengganti. Kamu harus bisa <strong>menjelaskan</strong> setiap baris yang di-commit.</Note>
          </div>
        </Cols>
      </Slide>
    ),
  },

  /* ───────────────────────── 01 PENGENALAN ───────────────────────── */
  { title: "01 · Pengenalan", Body: () => <Section no="01" title="Pengenalan Next.js" sub="Framework React untuk production." /> },
  {
    title: "Apa itu Next.js?",
    Body: () => (
      <Slide kicker="Konsep" title="Apa itu Next.js?">
        <Cols ratio="1.2fr 1fr">
          <div>
            <p><strong>React</strong> adalah library untuk membangun UI. <strong>Next.js</strong> adalah <em>framework</em> di atas React yang menyediakan semua yang dibutuhkan untuk aplikasi siap produksi.</p>
            <ul>
              <li>Routing berbasis file/folder</li>
              <li>Rendering di server (SSR / SSG / streaming)</li>
              <li>Backend dalam satu project (API &amp; Server Actions)</li>
              <li>Optimasi gambar, font, dan bundle otomatis</li>
            </ul>
          </div>
          <div className="stack">
            <div className="card"><div className="tag">Dibuat oleh</div><h3>Vercel</h3>Open source, dipakai oleh Netflix, TikTok, Notion, Nike, dan banyak lagi.</div>
            <div className="card"><div className="tag">Versi saat ini</div><h3>Next.js 16</h3>App Router, React 19, Turbopack sebagai bundler default.</div>
          </div>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "React vs Next.js",
    Body: () => (
      <Slide kicker="Perbandingan" title="React Saja vs Next.js">
        <table className="t">
          <thead><tr><th>Kebutuhan</th><th>React (Vite)</th><th>Next.js</th></tr></thead>
          <tbody>
            <tr><td>Routing</td><td>Pasang library (React Router)</td><td>Bawaan — folder = URL</td></tr>
            <tr><td>Rendering</td><td>Di browser (CSR)</td><td>Server, statis, atau browser — pilih per halaman</td></tr>
            <tr><td>SEO</td><td>HTML awal kosong</td><td>HTML sudah berisi konten</td></tr>
            <tr><td>Backend / API</td><td>Project terpisah</td><td>Route Handlers &amp; Server Actions</td></tr>
            <tr><td>Optimasi</td><td>Manual</td><td><code>next/image</code>, <code>next/font</code>, code splitting</td></tr>
            <tr><td>Deploy</td><td>Static hosting</td><td>Vercel (zero-config), Node server, Docker, static export</td></tr>
          </tbody>
        </table>
      </Slide>
    ),
  },
  {
    title: "Strategi Rendering",
    Body: () => (
      <Slide kicker="Konsep" title="Cara Halaman Dirender">
        <div className="cards" style={{ ["--n" as string]: 2 }}>
          <div className="card"><div className="tag">CSR · Client-Side</div><h3>Dirender di browser</h3>Server kirim HTML kosong + JS. Cocok untuk dashboard interaktif di balik login.</div>
          <div className="card"><div className="tag">SSR · Server-Side</div><h3>Dirender tiap request</h3>HTML dibuat di server saat diminta. Data selalu terbaru, bagus untuk SEO.</div>
          <div className="card"><div className="tag">SSG · Static</div><h3>Dirender saat build</h3>HTML dibuat sekali saat <code>next build</code>. Paling cepat, bisa di-cache CDN.</div>
          <div className="card"><div className="tag">ISR · Revalidate</div><h3>Statis + diperbarui berkala</h3>Halaman statis yang dibangun ulang otomatis setiap N detik atau saat dipicu.</div>
        </div>
        <Note>Di Next.js kamu <strong>tidak perlu memilih satu</strong> — tiap halaman/komponen bisa pakai strategi berbeda.</Note>
      </Slide>
    ),
  },

  /* ───────────────────────── 02 SETUP ───────────────────────── */
  { title: "02 · Setup Project", Body: () => <Section no="02" title="Setup Project" sub="Dari terminal kosong ke halaman pertama." /> },
  {
    title: "create-next-app",
    Body: () => (
      <Slide kicker="Praktik" title="Membuat Project Baru">
        <Cols ratio="1.1fr 1fr">
          <Code lang="bash" file="Terminal">{`
npx create-next-app@latest latihan

# Pilih "Yes, use recommended defaults"
#  ✔ TypeScript
#  ✔ ESLint
#  ✔ Tailwind CSS
#  ✔ App Router
#  ✔ Turbopack

cd latihan
npm run dev
`}</Code>
          <div>
            <p>Buka <code>http://localhost:3000</code> 🎉</p>
            <ul>
              <li><code>npm run dev</code> — dev server + hot reload</li>
              <li><code>npm run build</code> — build produksi</li>
              <li><code>npm start</code> — jalankan hasil build</li>
            </ul>
            <Note tone="tip">Project <code>latihan</code> ini untuk <strong>coba-coba pribadi</strong>. Proyek kelompok memakai repo <code>landing-sekolah</code> →</Note>
          </div>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Struktur Folder",
    Body: () => (
      <Slide kicker="Anatomi" title="Struktur Folder">
        <Cols ratio="1fr 1.2fr">
          <Tree>{`
latihan/
├── app/              # routing ada di sini
│   ├── layout.tsx    # layout root
│   ├── page.tsx      # halaman "/"
│   ├── globals.css
│   └── favicon.ico
├── public/           # file statis
├── next.config.ts
├── package.json
├── tsconfig.json
└── .gitignore
`}</Tree>
          <ul>
            <li><code>app/</code> — setiap folder adalah <strong>segmen URL</strong></li>
            <li><code>page.tsx</code> — membuat route bisa diakses</li>
            <li><code>layout.tsx</code> — UI pembungkus (header, footer)</li>
            <li><code>public/</code> — gambar &amp; aset, diakses dari <code>/nama-file</code></li>
            <li><code>next.config.ts</code> — konfigurasi Next.js</li>
          </ul>
        </Cols>
      </Slide>
    ),
  },

  {
    title: "Clone Repo Proyek",
    Body: () => (
      <Slide kicker="Praktik" title="Clone Repo Landing Sekolah">
        <Cols ratio="1.1fr 1fr">
          <Code lang="bash" file="Terminal">{`
git clone <URL-REPO-DARI-GURU> landing-sekolah
cd landing-sekolah
npm install

# pilih: beranda | pplg | tjkt | dkv | akl | mplb
npm run kelompok -- pplg

# branch kerja, diawali id kelompok
git switch -c pplg/konten

npm run dev
`}</Code>
          <div>
            <ul>
              <li>Buka <code>localhost:3000/jurusan/pplg</code></li>
              <li>Zonamu: <code>konten/jurusan/pplg/</code></li>
              <li><code>data.ts</code> — teks &amp; data</li>
              <li><code>Halaman.tsx</code> — tampilan halaman</li>
              <li><code>komponen/</code> — komponen buatanmu</li>
            </ul>
            <Note tone="info">Kelompok Beranda: <code>konten/sekolah/</code>, cek di <code>localhost:3000</code>.</Note>
          </div>
        </Cols>
      </Slide>
    ),
  },

  /* ───────────────────────── 03 ROUTING ───────────────────────── */
  { title: "03 · Routing", Body: () => <Section no="03" title="App Router" sub="Folder = URL. File = UI." /> },
  {
    title: "File-based Routing",
    Body: () => (
      <Slide kicker="Routing" title="Folder Menjadi URL">
        <Cols>
          <Tree>{`
app/
├── page.tsx              → /
├── profil/
│   └── page.tsx          → /profil
└── jurusan/
    ├── page.tsx          → /jurusan
    └── [slug]/
        └── page.tsx      → /jurusan/pplg
`}</Tree>
          <Code file="app/profil/page.tsx">{`
export default function ProfilPage() {
  return (
    <main>
      <h1>Profil Sekolah</h1>
      <p>Siap kerja, siap kuliah!</p>
    </main>
  );
}
`}</Code>
        </Cols>
        <Note>Komponen di <code>page.tsx</code> wajib di-<code>export default</code>.</Note>
      </Slide>
    ),
  },
  {
    title: "File Khusus",
    Body: () => (
      <Slide kicker="Routing" title="File Khusus di App Router">
        <table className="t">
          <thead><tr><th>File</th><th>Fungsi</th></tr></thead>
          <tbody>
            <tr><td>page.tsx</td><td>UI unik untuk route; membuat route bisa diakses publik</td></tr>
            <tr><td>layout.tsx</td><td>UI pembungkus yang dipakai bersama, tetap ada saat pindah halaman</td></tr>
            <tr><td>loading.tsx</td><td>Tampilan loading otomatis (React Suspense)</td></tr>
            <tr><td>error.tsx</td><td>Menangkap error di segmen tersebut</td></tr>
            <tr><td>not-found.tsx</td><td>Halaman 404</td></tr>
            <tr><td>route.ts</td><td>Endpoint API (Route Handler)</td></tr>
          </tbody>
        </table>
        <p className="small" style={{ marginTop: 16 }}>Plus konvensi folder: <code>[slug]</code> dinamis · <code>(group)</code> grup tanpa URL · <code>_private</code> tidak jadi route.</p>
      </Slide>
    ),
  },
  {
    title: "Layout",
    Body: () => (
      <Slide kicker="Routing" title="Layout">
        <Cols ratio="1.3fr 1fr">
          <Code file="app/layout.tsx">{`
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <nav>
          <Link href="/">Beranda</Link>
          <Link href="/jurusan">Jurusan</Link>
          <Link href="/profil">Profil</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
`}</Code>
          <div>
            <ul>
              <li>Root layout <strong>wajib</strong> dan harus berisi <code>&lt;html&gt;</code> &amp; <code>&lt;body&gt;</code></li>
              <li><code>children</code> = halaman yang sedang aktif</li>
              <li>Layout bisa <strong>bersarang</strong>: <code>app/jurusan/layout.tsx</code> hanya membungkus halaman jurusan</li>
              <li>State layout tidak hilang saat navigasi</li>
            </ul>
          </div>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Navigasi",
    Body: () => (
      <Slide kicker="Routing" title="Navigasi Antar Halaman">
        <Cols>
          <div className="stack">
            <Code file="Komponen <Link>">{`
import Link from "next/link";

<Link href="/jurusan">Lihat Jurusan</Link>
<Link href={"/jurusan/" + j.slug}>
  {j.nama}
</Link>
`}</Code>
            <Code file="Navigasi lewat kode (Client Component)">{`
"use client";
import { useRouter } from "next/navigation";

const router = useRouter();
router.push("/dashboard");
`}</Code>
          </div>
          <ul>
            <li>Pakai <code>&lt;Link&gt;</code>, bukan <code>&lt;a&gt;</code>, untuk link internal</li>
            <li>Navigasi <strong>tanpa reload</strong> halaman penuh</li>
            <li>Halaman tujuan di-<strong>prefetch</strong> otomatis saat link terlihat</li>
            <li><code>useRouter</code>, <code>usePathname</code>, <code>useSearchParams</code> dari <code>next/navigation</code></li>
            <li>Redirect di server: <code>redirect(&quot;/login&quot;)</code></li>
          </ul>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Dynamic Route",
    Body: () => (
      <Slide kicker="Routing" title="Dynamic Route">
        <Cols ratio="1.3fr 1fr">
          <Code file="app/jurusan/[slug]/page.tsx">{`
export default async function JurusanPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <h1>Jurusan: {slug}</h1>;
}
`}</Code>
          <div>
            <ul>
              <li>Folder <code>[slug]</code> menangkap segmen URL apa pun</li>
              <li><code>/jurusan/pplg</code> → <code>slug = &quot;pplg&quot;</code></li>
              <li><code>[...slug]</code> menangkap banyak segmen</li>
            </ul>
            <Note tone="warn">Sejak Next.js 15, <code>params</code> &amp; <code>searchParams</code> adalah <strong>Promise</strong> — wajib di-<code>await</code>.</Note>
          </div>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Praktik: Routing",
    Body: () => (
      <Slide kicker="🛠 Praktik" title="Telusuri Routing Landing Sekolah">
        <ol className="steps">
          <li>Buka <code>app/(landing)/jurusan/[slug]/page.tsx</code> — temukan <code>generateStaticParams</code> &amp; <code>notFound()</code></li>
          <li>Kenapa folder <code>(landing)</code> pakai kurung? (petunjuk: <em>route group</em>, tidak jadi URL)</li>
          <li>Buka <code>/jurusan/ngasal</code> — halaman apa yang muncul &amp; dari file mana?</li>
          <li>Di zonamu, ubah <code>nama</code> &amp; <code>ringkasan</code> di <code>data.ts</code> — navbar, footer &amp; beranda ikut berubah</li>
          <li>Di <code>Halaman.tsx</code>, tambahkan <code>&lt;Link href=&quot;/jurusan&quot;&gt;</code> kembali ke daftar jurusan</li>
        </ol>
        <Note tone="warn">Latihan membuat route baru (<code>app/profil</code>, dsb.) kerjakan di project <code>latihan</code> — <code>app/</code> di repo proyek adalah zona inti 🔒.</Note>
      </Slide>
    ),
  },

  /* ───────────────────────── 04 SERVER & CLIENT ───────────────────────── */
  { title: "04 · Server & Client", Body: () => <Section no="04" title="Server & Client Components" sub="Konsep paling penting di Next.js modern." /> },
  {
    title: "Server vs Client Component",
    Body: () => (
      <Slide kicker="Konsep" title="Server vs Client Components">
        <div className="cards" style={{ ["--n" as string]: 2 }}>
          <div className="card">
            <div className="tag">Default</div><h3>Server Component</h3>
            <ul>
              <li>Dirender di server, JS-nya tidak dikirim ke browser</li>
              <li>Bisa <code>async</code> &amp; akses database / API rahasia langsung</li>
              <li>Tidak bisa pakai <code>useState</code>, <code>onClick</code>, dsb.</li>
            </ul>
          </div>
          <div className="card">
            <div className="tag">&quot;use client&quot;</div><h3>Client Component</h3>
            <ul>
              <li>Interaktif: state, event, effect</li>
              <li>Bisa akses API browser (<code>window</code>, <code>localStorage</code>)</li>
              <li>Tetap di-pre-render di server, lalu &quot;dihidupkan&quot; di browser</li>
            </ul>
          </div>
        </div>
        <Note tone="tip">Aturan praktis: <strong>default Server</strong>. Tambah <code>&quot;use client&quot;</code> hanya di komponen kecil yang butuh interaksi.</Note>
      </Slide>
    ),
  },
  {
    title: "Contoh Client Component",
    Body: () => (
      <Slide kicker="Konsep" title="Menggabungkan Keduanya">
        <Cols>
          <Code file="app/components/LikeButton.tsx">{`
"use client";
import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  return (
    <button onClick={() => setLikes(likes + 1)}>
      ❤️ {likes}
    </button>
  );
}
`}</Code>
          <Code file="app/jurusan/[slug]/page.tsx (Server)">{`
import LikeButton from "@/app/components/LikeButton";

export default async function Page({ params }) {
  const { slug } = await params;
  const j = await getJurusan(slug); // di server

  return (
    <article>
      <h1>{j.nama}</h1>
      <p>{j.ringkasan}</p>
      <LikeButton />  {/* pulau interaktif */}
    </article>
  );
}
`}</Code>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Data Fetching",
    Body: () => (
      <Slide kicker="Data" title="Mengambil Data di Server">
        <Cols ratio="1.6fr 1fr">
          <Code file="app/berita/page.tsx">{`
import Link from "next/link";

type Berita = { id: number; title: string };
const API = "https://jsonplaceholder.typicode.com";

export default async function BeritaPage() {
  const res = await fetch(API + "/posts"); // contoh API berita
  const berita: Berita[] = await res.json();

  return (
    <ul>
      {berita.slice(0, 10).map((b) => (
        <li key={b.id}>
          <Link href={"/berita/" + b.id}>{b.title}</Link>
        </li>
      ))}
    </ul>
  );
}
`}</Code>
          <div>
            <ul>
              <li>Cukup jadikan komponen <code>async</code> lalu <code>await</code></li>
              <li>Tidak perlu <code>useEffect</code> + loading state manual</li>
              <li>Bisa langsung query database (Prisma, Drizzle, dll.)</li>
              <li>API key aman — kode tidak pernah sampai ke browser</li>
            </ul>
          </div>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Caching & Revalidasi",
    Body: () => (
      <Slide kicker="Data" title="Caching & Revalidasi">
        <Cols>
          <div className="stack">
            <Code file="Revalidasi berkala (ISR)">{`
// cache hasil fetch, perbarui tiap 60 detik
const res = await fetch(url, {
  next: { revalidate: 60 },
});
`}</Code>
            <Code file="Revalidasi setelah data berubah">{`
import { revalidatePath } from "next/cache";

revalidatePath("/berita");
`}</Code>
          </div>
          <div>
            <ul>
              <li>Secara default data diambil <strong>setiap request</strong> (dinamis)</li>
              <li>Gunakan <code>revalidate</code> agar hasilnya di-cache &amp; diperbarui berkala</li>
              <li><code>revalidatePath</code> / <code>revalidateTag</code> untuk memperbarui cache sesuai kebutuhan</li>
            </ul>
            <Note>Lanjutan: Next.js 16 punya direktif <code>&quot;use cache&quot;</code> (aktifkan <code>cacheComponents</code> di config) untuk caching per komponen/fungsi.</Note>
          </div>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Loading, Error, 404",
    Body: () => (
      <Slide kicker="UX" title="Loading, Error & Not Found">
        <Cols>
          <div className="stack">
          <Code file="app/berita/loading.tsx">{`
export default function Loading() {
  return <p>Memuat berita...</p>;
}
`}</Code>
          <Code file="app/berita/[id]/page.tsx">{`
import { notFound } from "next/navigation";

const res = await fetch(url);
if (!res.ok) notFound(); // → not-found.tsx
`}</Code>
          </div>
          <Code file="app/berita/error.tsx">{`
"use client";

export default function Error({
  error, reset,
}: { error: Error; reset: () => void }) {
  return (
    <div>
      <p>Ups: {error.message}</p>
      <button onClick={reset}>Coba lagi</button>
    </div>
  );
}
`}</Code>
        </Cols>
        <Note tone="tip"><code>error.tsx</code> wajib Client Component. <code>loading.tsx</code> otomatis membungkus halaman dengan <code>&lt;Suspense&gt;</code>.</Note>
      </Slide>
    ),
  },
  {
    title: "Praktik: Isi Konten",
    Body: () => (
      <Slide kicker="🛠 Praktik" title="Isi Konten Zona Kelompok">
        <ol className="steps">
          <li>Ganti semua <code>TODO</code> di <code>data.ts</code> dengan data asli (kompetensi, prospek kerja, fasilitas, anggota)</li>
          <li>Simpan foto di <code>public/jurusan/&lt;slug&gt;/</code>, isi <code>galeri</code> — tampil lewat <code>next/image</code></li>
          <li>Pecah section di <code>Halaman.tsx</code> jadi komponen di <code>komponen/</code> (Server Component)</li>
          <li>Buat Client Component <code>&quot;use client&quot;</code> di <code>komponen/</code> — mis. FAQ akordeon atau galeri dengan <code>useState</code></li>
          <li>Coba sengaja salah tipe di <code>data.ts</code> — lihat TypeScript menegurmu</li>
        </ol>
      </Slide>
    ),
  },

  /* ───────────────────────── 05 FULL-STACK ───────────────────────── */
  { title: "05 · Full-stack", Body: () => <Section no="05" title="Fitur Full-stack" sub="Backend tanpa project terpisah." /> },
  {
    title: "Route Handlers",
    Body: () => (
      <Slide kicker="Backend" title="Route Handlers (API)">
        <Cols ratio="1.3fr 1fr">
          <Code file="app/api/hello/route.ts">{`
export async function GET() {
  return Response.json({ message: "Halo dari API!" });
}

export async function POST(request: Request) {
  const body = await request.json();
  return Response.json(
    { diterima: body },
    { status: 201 }
  );
}
`}</Code>
          <div>
            <ul>
              <li>File <code>route.ts</code> → endpoint di URL foldernya</li>
              <li>Export fungsi sesuai HTTP method: <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code>…</li>
              <li>Pakai Web API standar: <code>Request</code> &amp; <code>Response</code></li>
              <li>Cocok untuk webhook, integrasi pihak ketiga, aplikasi mobile</li>
            </ul>
            <Note>Coba: <code>http://localhost:3000/api/hello</code></Note>
          </div>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Server Actions",
    Body: () => (
      <Slide kicker="Backend" title="Server Actions">
        <Cols>
          <Code file="app/ppdb/actions.ts">{`
"use server";

export async function daftarPPDB(formData: FormData) {
  const nama = formData.get("nama");
  const jurusan = formData.get("jurusan");

  // simpan ke database, kirim email, dll.
  console.log({ nama, jurusan });
}
`}</Code>
          <Code file="app/ppdb/page.tsx">{`
import { daftarPPDB } from "./actions";

export default function PPDBPage() {
  return (
    <form action={daftarPPDB}>
      <input name="nama" placeholder="Nama" />
      <select name="jurusan">...</select>
      <button type="submit">Daftar</button>
    </form>
  );
}
`}</Code>
        </Cols>
        <Note tone="tip">Fungsi server dipanggil langsung dari form — tanpa membuat endpoint API &amp; tanpa <code>fetch</code> manual. Tetap jalan meski JavaScript belum termuat.</Note>
      </Slide>
    ),
  },
  {
    title: "Styling",
    Body: () => (
      <Slide kicker="UI" title="Styling">
        <Cols>
          <div className="stack">
            <Code file="Tailwind CSS (bawaan create-next-app)">{`
<h1 className="text-3xl font-bold text-blue-600">
  SMKN 1 Percut
</h1>
`}</Code>
            <Code file="CSS Modules — Card.module.css">{`
import styles from "./Card.module.css";

<div className={styles.card}>...</div>
`}</Code>
          </div>
          <ul>
            <li><strong>Tailwind CSS</strong> — utility class, sudah terpasang jika memilih default</li>
            <li><strong>CSS Modules</strong> — class otomatis unik per komponen</li>
            <li><strong>Global CSS</strong> — <code>app/globals.css</code>, di-import di root layout</li>
            <li>Library UI populer: shadcn/ui, Radix, Mantine</li>
          </ul>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Image & Font",
    Body: () => (
      <Slide kicker="Optimasi" title="next/image & next/font">
        <Cols>
          <Code file="Gambar teroptimasi">{`
import Image from "next/image";

<Image
  src="/hero.png"      // dari folder public/
  alt="Hero"
  width={800}
  height={400}
  priority
/>
`}</Code>
          <Code file="app/layout.tsx — Font">{`
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

<body className={inter.className}>
  {children}
</body>
`}</Code>
        </Cols>
        <ul style={{ marginTop: 20 }}>
          <li><code>Image</code>: resize otomatis, format modern (WebP/AVIF), lazy load, mencegah layout shift</li>
          <li><code>next/font</code>: font di-host sendiri saat build — tanpa request ke Google, tanpa kedip</li>
        </ul>
      </Slide>
    ),
  },
  {
    title: "Metadata & SEO",
    Body: () => (
      <Slide kicker="SEO" title="Metadata & SEO">
        <Cols>
          <Code file="Metadata statis">{`
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMKN 1 Percut",
  description: "Siap kerja, siap kuliah",
};
`}</Code>
          <Code file="Metadata dinamis — [slug]/page.tsx">{`
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const j = await getJurusan(slug);
  return { title: j.nama, description: j.deskripsi };
}
`}</Code>
        </Cols>
        <Note>Juga tersedia file khusus: <code>sitemap.ts</code>, <code>robots.ts</code>, <code>opengraph-image.png</code>, <code>icon.png</code>.</Note>
      </Slide>
    ),
  },
  {
    title: "Environment Variables",
    Body: () => (
      <Slide kicker="Konfigurasi" title="Environment Variables">
        <Cols>
          <Code lang="bash" file=".env.local">{`
# hanya bisa dibaca di server
DATABASE_URL="postgres://..."
API_SECRET="rahasia"

# bisa dibaca di browser juga
NEXT_PUBLIC_SITE_NAME="SMKN 1 Percut"
`}</Code>
          <div>
            <ul>
              <li>Akses dengan <code>process.env.NAMA_VARIABEL</code></li>
              <li>Tanpa prefix → <strong>hanya server</strong> (aman untuk rahasia)</li>
              <li>Prefix <code>NEXT_PUBLIC_</code> → ikut ke bundle browser</li>
              <li><code>.env.local</code> sudah ada di <code>.gitignore</code></li>
            </ul>
            <Note tone="warn">Jangan pernah commit secret ke GitHub. Di Vercel, isi lewat <strong>Settings → Environment Variables</strong>.</Note>
          </div>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Proxy (Middleware)",
    Body: () => (
      <Slide kicker="Lanjutan" title="proxy.ts (dulu middleware.ts)">
        <Cols ratio="1.3fr 1fr">
          <Code file="proxy.ts (root project)">{`
import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token");
  if (!token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
`}</Code>
          <ul>
            <li>Berjalan <strong>sebelum</strong> request sampai ke halaman</li>
            <li>Untuk redirect, rewrite, cek login sederhana, header</li>
            <li>Next.js 16 mengganti nama <code>middleware.ts</code> → <code>proxy.ts</code></li>
            <li>Jaga tetap ringan — logika berat taruh di halaman/API</li>
          </ul>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Praktik: Poles & Rilis",
    Body: () => (
      <Slide kicker="🛠 Praktik" title="Poles & Siapkan Rilis">
        <ol className="steps">
          <li>Isi <code>deskripsi</code> di <code>data.ts</code> — cek <code>&lt;meta name=&quot;description&quot;&gt;</code> di view-source (hasil <code>generateMetadata</code>)</li>
          <li>Rapikan dengan Tailwind: responsif di HP (<code>md:</code>, <code>lg:</code>), pakai <code>data.warna</code></li>
          <li>Tambah minimal satu section baru (testimoni alumni, prestasi, video profil, …)</li>
          <li>Jalankan <code>npm run cek-zona</code> — harus ✅</li>
          <li>Jalankan <code>npm run build</code> — harus tanpa error</li>
        </ol>
        <Note tone="info">Route Handler &amp; Server Action dicoba di project <code>latihan</code> — landing sekolah di-<em>export</em> sebagai situs statis.</Note>
      </Slide>
    ),
  },

  /* ───────────────────────── 06 DEPLOY ───────────────────────── */
  { title: "06 · Deploy ke Vercel", Body: () => <Section no="06" title="Deploy ke Vercel" sub="Dari localhost ke internet." /> },
  {
    title: "Build Produksi",
    Body: () => (
      <Slide kicker="Deploy" title="Cek Build Lokal Dulu">
        <Cols>
          <Code lang="bash" file="Terminal">{`
npm run build
npm start
`}</Code>
          <div>
            <p>Output build menampilkan tiap route dan jenisnya:</p>
            <ul>
              <li><code>○</code> <strong>Static</strong> — di-render saat build</li>
              <li><code>ƒ</code> <strong>Dynamic</strong> — di-render saat request</li>
            </ul>
          </div>
        </Cols>
        <Note tone="warn">Jika build gagal di laptop, build di Vercel juga akan gagal. Perbaiki error TypeScript &amp; import dulu.</Note>
      </Slide>
    ),
  },
  {
    title: "Push ke GitHub",
    Body: () => (
      <Slide kicker="Deploy · Langkah 1" title="Push Branch & Pull Request">
        <Cols ratio="1.2fr 1fr">
          <Code lang="bash" file="Terminal">{`
# pastikan hanya zona kelompokmu yang berubah
npm run cek-zona

git add konten/jurusan/pplg public/jurusan/pplg
git commit -m "feat(pplg): isi kompetensi & galeri"

# push branch kelompok (bukan main!)
git push -u origin pplg/konten

# lalu di GitHub: "Compare & pull request"
`}</Code>
          <ul>
            <li>Jangan <code>git add .</code> — tambahkan folder zonamu saja</li>
            <li>Nama branch <strong>diawali id kelompok</strong>: <code>pplg/…</code>, <code>beranda/…</code></li>
            <li>GitHub otomatis menjalankan <strong>Cek Zona</strong> &amp; <strong>build</strong> di PR</li>
            <li>Guru me-review lalu <strong>merge</strong> ke <code>main</code></li>
          </ul>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Import ke Vercel",
    Body: () => (
      <Slide kicker="Deploy · Langkah 2" title="Import Project di Vercel">
        <ol className="steps">
          <li>Buka <strong>vercel.com</strong> → <strong>Sign Up / Log in with GitHub</strong></li>
          <li>Klik <strong>Add New… → Project</strong></li>
          <li>Pilih repo <code>landing-sekolah</code> → <strong>Import</strong> (beri izin akses repo jika diminta)</li>
          <li>Framework Preset terdeteksi otomatis: <strong>Next.js</strong> — build command tidak perlu diubah</li>
          <li>Buka <strong>Environment Variables</strong>, isi variabel dari <code>.env.local</code></li>
          <li>Klik <strong>Deploy</strong> dan tunggu ± 1 menit 🚀</li>
        </ol>
        <Note tone="tip">Hasilnya: URL publik seperti <code>landing-sekolah-xxxx.vercel.app</code>. Cukup <strong>guru</strong> yang import sekali — tiap PR kelompok otomatis dapat <strong>Preview URL</strong>.</Note>
      </Slide>
    ),
  },
  {
    title: "Alur Deploy Otomatis",
    Body: () => (
      <Slide kicker="Deploy · Langkah 3" title="Git Push = Deploy">
        <div className="flow" style={{ marginBottom: 28 }}>
          <span className="box">Edit kode</span><span className="arrow">→</span>
          <span className="box">git push</span><span className="arrow">→</span>
          <span className="box">Vercel build otomatis</span><span className="arrow">→</span>
          <span className="box">Live ✅</span>
        </div>
        <div className="cards" style={{ ["--n" as string]: 2 }}>
          <div className="card"><div className="tag">Branch main</div><h3>Production</h3>Setiap push ke <code>main</code> memperbarui situs utama.</div>
          <div className="card"><div className="tag">Branch lain / Pull Request</div><h3>Preview Deployment</h3>Tiap branch/PR mendapat URL sendiri untuk dicek sebelum di-merge.</div>
        </div>
        <Note>Rollback mudah: di tab <strong>Deployments</strong>, pilih versi lama → <strong>Promote to Production</strong>.</Note>
      </Slide>
    ),
  },
  {
    title: "Vercel CLI",
    Body: () => (
      <Slide kicker="Alternatif" title="Deploy lewat Vercel CLI">
        <Cols>
          <Code lang="bash" file="Terminal">{`
npm i -g vercel

vercel login
vercel          # deploy preview
vercel --prod   # deploy production

# ambil env dari Vercel ke lokal
vercel env pull .env.local
`}</Code>
          <ul>
            <li>Cocok jika tidak ingin lewat GitHub</li>
            <li>Pertama kali jalan, CLI akan bertanya &amp; menautkan project</li>
            <li><code>vercel env pull</code> menyamakan env lokal dengan Vercel</li>
            <li><code>vercel logs</code> untuk melihat log</li>
          </ul>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Custom Domain",
    Body: () => (
      <Slide kicker="Deploy · Opsional" title="Pasang Domain Sendiri">
        <Cols>
          <ol className="steps">
            <li>Project → <strong>Settings → Domains</strong></li>
            <li>Masukkan domain, mis. <code>smk.domainku.com</code></li>
            <li>Tambahkan record DNS yang ditampilkan Vercel di penyedia domain</li>
            <li>Tunggu verifikasi — SSL dibuat otomatis</li>
          </ol>
          <table className="t">
            <thead><tr><th>Jenis</th><th>Contoh record</th></tr></thead>
            <tbody>
              <tr><td>Subdomain</td><td><code>CNAME</code> → nilai dari Vercel<br /><span className="small">(mis. cname.vercel-dns.com)</span></td></tr>
              <tr><td>Apex / root</td><td><code>A</code> → IP dari Vercel</td></tr>
            </tbody>
          </table>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Troubleshooting",
    Body: () => (
      <Slide kicker="Deploy" title="Masalah yang Sering Muncul">
        <table className="t">
          <thead><tr><th>Gejala</th><th>Solusi</th></tr></thead>
          <tbody>
            <tr><td>Build gagal di Vercel</td><td>Jalankan <code>npm run build</code> lokal, baca log di tab Deployments</td></tr>
            <tr><td>Module not found</td><td>Huruf besar/kecil nama file harus sama persis (Linux case-sensitive)</td></tr>
            <tr><td>Env bernilai undefined</td><td>Tambahkan di Vercel lalu <strong>redeploy</strong>; cek prefix <code>NEXT_PUBLIC_</code></td></tr>
            <tr><td>Data tidak berubah</td><td>Halaman di-render statis — pakai <code>revalidate</code> atau <code>revalidatePath</code></td></tr>
            <tr><td>Error hydration</td><td>Output server &amp; client beda (mis. <code>Date.now()</code>, <code>window</code> saat render)</td></tr>
          </tbody>
        </table>
      </Slide>
    ),
  },

  /* ───────────────────────── PENUTUP ───────────────────────── */
  {
    title: "Rangkuman",
    Body: () => (
      <Slide kicker="Recap" title="Yang Sudah Kita Pelajari">
        <div className="cards" style={{ ["--n" as string]: 3 }}>
          <div className="card"><h3>📁 Routing</h3>Folder = URL, <code>page</code>, <code>layout</code>, <code>[slug]</code></div>
          <div className="card"><h3>🖥 Server-first</h3>Server Components, <code>async</code> fetch, <code>&quot;use client&quot;</code> seperlunya</div>
          <div className="card"><h3>⚡ UX</h3><code>loading</code>, <code>error</code>, <code>not-found</code>, Image, Font</div>
          <div className="card"><h3>🔌 Full-stack</h3>Route Handlers &amp; Server Actions</div>
          <div className="card"><h3>🔐 Konfigurasi</h3>Env variables, metadata, <code>proxy.ts</code></div>
          <div className="card"><h3>🚀 Deploy</h3>GitHub → Vercel, preview, domain</div>
        </div>
      </Slide>
    ),
  },
  {
    title: "Langkah Selanjutnya",
    Body: () => (
      <Slide kicker="Next steps" title="Belajar Lebih Lanjut">
        <Cols>
          <ul>
            <li><strong>Database</strong>: Postgres (Neon / Supabase) + Prisma atau Drizzle</li>
            <li><strong>Autentikasi</strong>: Auth.js, Clerk, Better Auth</li>
            <li><strong>UI</strong>: shadcn/ui + Tailwind</li>
            <li><strong>Validasi</strong>: Zod untuk form &amp; Server Actions</li>
            <li><strong>Caching lanjutan</strong>: <code>&quot;use cache&quot;</code> &amp; Cache Components</li>
          </ul>
          <div className="stack">
            <div className="card"><div className="tag">Dokumentasi</div><h3>nextjs.org/docs</h3>Referensi resmi &amp; tutorial lengkap.</div>
            <div className="card"><div className="tag">Kursus gratis</div><h3>nextjs.org/learn</h3>Membangun dashboard full-stack langkah demi langkah.</div>
          </div>
        </Cols>
      </Slide>
    ),
  },
  {
    title: "Terima Kasih",
    Body: () => (
      <section className="slide title-slide">
        <div className="kicker">Selesai 🎉</div>
        <h1><span className="grad">Terima kasih!</span></h1>
        <p className="lead">Landing sekolah kita sudah online. Bagikan Preview URL kelompokmu di grup!</p>
        <p className="small" style={{ marginTop: 40 }}>Slide: nextjs.dihapra.dev/materi · Sesi tanya jawab</p>
      </section>
    ),
  },
];
