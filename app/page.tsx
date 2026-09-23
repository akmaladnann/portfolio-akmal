import Image from "next/image";
import {
  ExternalLink,
  FileDown,
  Layers,
  ArrowUpRight,
} from "lucide-react";

// Komponen Ikon GitHub bawaan SVG
function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const PROJECTS = [
  {
    title: "SPK Pemilihan Asisten Dosen (HATS Method)",
    role: "Full-Stack Developer",
    desc: "Sistem Pendukung Keputusan berbasis web menggunakan metode Hybrid AHP-TOPSIS-SAW untuk seleksi asisten dosen dengan pembobotan kriteria dan perankingan otomatis.",
    image: "/projects/spk-asdos.png",
    tags: ["Next.js", "React.js", "PostgreSQL", "Prisma ORM"],
    category: "Web App / Thesis",
    demoUrl: "", // Isi dengan link demo kamu
    githubUrl: "", // Isi dengan link repo jika ada
  },
  {
    title: "Web-Based e-Form System - Bank Lampung",
    role: "IT Staff / UI/UX & System Analyst",
    desc: "Perancangan UI/UX interaktif dan analisis alur transaksi nasabah untuk 6 fitur inti termasuk pengajuan kredit, komplain online, setor/tarik tunai, dan administrasi akun.",
    image: "/projects/bank-lampung.png",
    tags: ["Figma", "UI/UX", "System Analysis", "Usability Testing"],
    category: "Banking System",
    demoUrl: "https://www.figma.com/design/aJMt6cqNJzEcCSbYhH2C5W/e-Form-Web?node-id=0-1&p=f&t=9BXJy53K6anIo0sz-0",
    githubUrl: "",
  },
  {
    title: "Outpatient Healthcare Information System",
    role: "Frontend Developer",
    desc: "Pengembangan antarmuka sistem informasi layanan rawat jalan digital yang mempermudah navigasi pasien dan simulasi alur rekam medis.",
    image: "/projects/healthcare.png",
    tags: ["HTML", "CSS", "Frontend Development"],
    category: "Healthcare",
    demoUrl: "https://www.figma.com/design/dUmVUUfpOdcIfQ9U8PkFbx/Desain-UI-ADSI-Kelompok-5?node-id=0-1&p=f&t=miIrdmBMv76Yf2NE-0",
    githubUrl: "",
  },
  {
    title: "stuRENT - Student Laptop Rental Platform",
    role: "UI/UX Designer",
    desc: "Desain sistem platform rental laptop khusus mahasiswa dengan alur sewa terintegrasi dan purwarupa interaktif berbasis riset kebutuhan pengguna.",
    image: "/projects/sturent.png",
    tags: ["Figma", "UI/UX Design", "Wireframing"],
    category: "Product Design",
    demoUrl: "https://www.figma.com/design/64kwlY9cDrzH4lX7JIUmAJ/UI-DESIGN-STUDENT-RENTAL?node-id=0-1&p=f&t=sTkgJp0hEzgDX6ph-0",
    githubUrl: "",
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

      {/* Navigation (Diperbaiki Responsivitasnya untuk Mobile) */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0F17]/85 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
          >
            Akmal<span className="text-blue-500">.dev</span>
          </a>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Menu Navigasi Teks: Tersembunyi di HP kecil (hidden), Muncul rapi di Layar Tablet/Desktop (md:flex) */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
              <a href="#about" className="hover:text-blue-400 transition-colors">
                Tentang
              </a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">
                Proyek
              </a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">
                Keahlian
              </a>
            </nav>

            {/* Tombol Kontak: Selalu Tampil Rapi & Proporsional di Semua Ukuran Layar */}
            <a
              href="mailto:akmaladnan594@gmail.com"
              className="px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors text-xs font-semibold shadow-sm shadow-blue-500/20"
            >
              Kontak
            </a>
          </div>
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
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-500/20 inline-flex items-center gap-2"
            >
              Lihat Portofolio
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/akmal-adnan-djayasinga"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-300 font-medium text-sm transition-all inline-flex items-center gap-2"
            >
              LinkedIn Profile
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="/cv-akmal.pdf"
              download
              className="px-5 py-2.5 rounded-lg border border-slate-700/80 bg-slate-900/30 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm transition-all inline-flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 text-blue-400" />
              Download CV
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
              sizes="(max-width: 768px) 256px, 288px"
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
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            Showcase Proyek
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Proyek Pilihan</h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Implementasi nyata sistem web, arsitektur database relasional, dan perancangan antarmuka pengguna interaktif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-[#161B26] border border-white/5 hover:border-blue-500/40 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              {/* Thumbnail Proyek */}
              <div className="relative w-full h-52 sm:h-56 bg-[#0E131F] overflow-hidden border-b border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Konten Card */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-blue-400 font-mono mb-2">
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">{project.category}</span>
                    <span className="text-slate-500">{project.role}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mt-3 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Tombol Tautan (Jika ada link demo / github) */}
                  <div className="flex items-center gap-3 pt-1">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded-md transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 px-3 py-1.5 rounded-md transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        Repository
                      </a>
                    ) : null}
                  </div>
                </div>
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