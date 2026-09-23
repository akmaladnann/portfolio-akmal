import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    title: "SPK Pemilihan Asisten Dosen (HATS Method)",
    role: "Full-Stack Developer",
    desc: "Sistem Pendukung Keputusan berbasis web menggunakan metode Hybrid AHP-TOPSIS-SAW untuk seleksi asisten dosen dengan pembobotan kriteria dan perankingan otomatis.",
    tags: ["Next.js", "React.js", "PostgreSQL", "Prisma ORM"],
    category: "Web App / Thesis",
  },
  {
    title: "Web-Based e-Form System - Bank Lampung",
    role: "IT Staff / UI/UX & System Analyst",
    desc: "Perancangan UI/UX interaktif dan analisis alur transaksi nasabah untuk 6 fitur inti termasuk pengajuan kredit, komplain online, setor/tarik tunai, dan administrasi akun.",
    tags: ["Figma", "UI/UX", "System Analysis", "Usability Testing"],
    category: "Banking System",
  },
  {
    title: "Outpatient Healthcare Information System",
    role: "Frontend Developer",
    desc: "Pengembangan antarmuka sistem informasi layanan rawat jalan digital yang mempermudah navigasi pasien dan simulasi alur rekam medis.",
    tags: ["HTML", "CSS", "Frontend Development"],
    category: "Healthcare",
  },
  {
    title: "stuRENT - Student Laptop Rental Platform",
    role: "UI/UX Designer",
    desc: "Desain sistem platform rental laptop khusus mahasiswa dengan alur sewa terintegrasi dan purwarupa interaktif berbasis riset kebutuhan pengguna.",
    tags: ["Figma", "UI/UX Design", "Wireframing"],
    category: "Product Design",
  },
];

const SKILLS = {
  Languages: ["TypeScript", "JavaScript", "PHP", "Python", "C++", "Java"],
  Frameworks: ["Next.js", "React.js", "Node.js", "Laravel"],
  Databases: ["PostgreSQL", "Prisma ORM", "MySQL", "MongoDB"],
  Tools_Expertise: ["Git/GitHub", "Figma", "System Analysis", "UI/UX Design"],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Background Subtle Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-blue-600/10 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0F17]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight text-white">
            Akmal<span className="text-blue-500">.dev</span>
          </span>
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">Tentang</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Proyek</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Keahlian</a>
            <a
              href="mailto:akmaladnan594@gmail.com"
              className="px-4 py-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors text-xs font-semibold"
            >
              Kontak
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:py-28 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open for Opportunities
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Akmal Adnan Djayasinga</span>.
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed">
            Sarjana Ilmu Komputer (IPK 3.47) Universitas Lampung dengan fokus pada Full-Stack Web Development, System Analysis, dan UI/UX Design.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-500/20"
            >
              Lihat Portofolio
            </a>
            <a
              href="https://linkedin.com/in/akmal-adnan-djayasinga"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-300 font-medium text-sm transition-all"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Pas Foto Profile Card */}
        <div className="relative group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-30 group-hover:opacity-60 blur transition duration-500" />
          <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/10 bg-[#161B26]">
            <Image
              src="/akmal.png"
              alt="Akmal Adnan Djayasinga"
              fill
              className="object-cover object-top filter brightness-95 contrast-105"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            Professional Profile
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">Tentang Saya</h2>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl">
            Menghubungkan logika rekayasa perangkat lunak dengan rancangan antarmuka yang fungsional dan berorientasi pada pengguna.
          </p>
        </div>

        {/* Narrative & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
            <p>
              Halo! Saya <span className="text-white font-semibold">Akmal Adnan Djayasinga</span>, lulusan Ilmu Komputer dari Universitas Lampung dengan minat mendalam pada ekosistem rekayasa web modern dan analisis sistem.
            </p>
            <p>
              Fokus utama saya terletak pada arsitektur web berbasis <span className="text-blue-400 font-mono text-xs px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">Next.js</span>, relasional database menggunakan <span className="text-blue-400 font-mono text-xs px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">PostgreSQL & Prisma</span>, serta perancangan antarmuka interaktif di Figma. Saya terbiasa menyusun sistem dari tahap analisis kebutuhan awal, perancangan database relasional, hingga implementasi kode dan deployment.
            </p>
            <p>
              Selain pengembangan teknis, pengalaman memimpin tim dan menjadi asisten laboratorium mengasah kemampuan komunikasi, problem solving, dan kepemimpinan saya dalam mengeksekusi proyek multi-divisi.
            </p>
          </div>

          {/* Metric Highlights */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#161B26] border border-white/5 flex flex-col justify-between">
              <span className="text-3xl font-extrabold text-white">3.47</span>
              <div>
                <p className="text-xs font-semibold text-slate-200">IPK Kelulusan</p>
                <p className="text-[11px] text-slate-400">Universitas Lampung</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-[#161B26] border border-white/5 flex flex-col justify-between">
              <span className="text-3xl font-extrabold text-blue-400">90+</span>
              <div>
                <p className="text-xs font-semibold text-slate-200">Mahasiswa Dibimbing</p>
                <p className="text-[11px] text-slate-400">Di 3 Praktikum Inti</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-[#161B26] border border-white/5 flex flex-col justify-between">
              <span className="text-3xl font-extrabold text-indigo-400">10+</span>
              <div>
                <p className="text-xs font-semibold text-slate-200">Event Koordinator</p>
                <p className="text-[11px] text-slate-400">HIMAKOM Unila</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-[#161B26] border border-white/5 flex flex-col justify-between">
              <span className="text-3xl font-extrabold text-emerald-400">6 Modul</span>
              <div>
                <p className="text-xs font-semibold text-slate-200">Fitur e-Form Perbankan</p>
                <p className="text-[11px] text-slate-400">Bank Lampung</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Pengalaman & Rekam Jejak
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bank Lampung */}
            <div className="p-5 rounded-xl bg-[#161B26]/60 border border-white/5 hover:border-blue-500/20 transition-all">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-blue-400">Bank Lampung</span>
                <span className="text-slate-500 font-mono">Des 2024 – Feb 2025</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-2">IT Staff (e-Form System Project)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mengkoordinasikan tim pengembang 4 orang, menganalisis kebutuhan sistem, dan merancang prototipe interaktif UI/UX di Figma untuk 6 fitur transaksi perbankan.
              </p>
            </div>

            {/* Asisten Dosen */}
            <div className="p-5 rounded-xl bg-[#161B26]/60 border border-white/5 hover:border-blue-500/20 transition-all">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-blue-400">Universitas Lampung</span>
                <span className="text-slate-500 font-mono">2023 – 2025</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-2">Teaching Assistant (3 Mata Kuliah)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Menyusun modul praktikum dan membimbing 30–35 mahasiswa per semester pada mata kuliah Analisis & Perancangan Sistem, Pemrograman Terstruktur (C++), dan OOP (Java).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">
        <div className="space-y-3 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Proyek Pilihan</h2>
          <p className="text-sm text-slate-400">Koleksi implementasi sistem web, algoritma DSS, dan perancangan UI/UX.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#161B26] border border-white/5 hover:border-blue-500/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-blue-400 font-mono">
                  <span>{project.category}</span>
                  <span className="text-slate-500">{project.role}</span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-8">Keahlian & Teknologi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(SKILLS).map(([category, items], idx) => (
            <div key={idx} className="p-5 rounded-xl bg-[#161B26] border border-white/5">
              <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">{category.replace('_', ' & ')}</h3>
              <ul className="space-y-2">
                {items.map((item, iIdx) => (
                  <li key={iIdx} className="text-sm text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Akmal Adnan Djayasinga. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:akmaladnan594@gmail.com" className="hover:text-slate-300">Email</a>
            <a href="https://linkedin.com/in/akmal-adnan-djayasinga" target="_blank" rel="noreferrer" className="hover:text-slate-300">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}