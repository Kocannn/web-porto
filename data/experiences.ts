export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    year: "2025 - Now",
    title: "Backend Developer",
    company: "Hammercode Palu",
    description:
      "Membangun dan mengelola backend Learning Management System (LMS) untuk 200+ pengguna aktif. Bertanggung jawab atas arsitektur API, desain database relasional (10+ tabel), workflow migrasi menggunakan Goose, serta kolaborasi intens dengan tim frontend untuk memastikan integrasi REST API yang stabil dan scalable.",
  },
  {
    year: "2025 - Now",
    title: "Web Development Mentor",
    company: "Programming Tadulako",
    description:
      "Membimbing 10 mahasiswa dalam dasar web development (HTML, CSS, JavaScript). Seluruh peserta berhasil membangun dan men-deploy website mereka sendiri. Aktif melakukan code review dan memberikan feedback teknis untuk membentuk best practice sejak tahap awal belajar.",
  },
  {
    year: "2025",
    title: "Full Stack Software Engineer (Freelance)",
    company: "Elavera",
    description:
      "Mengembangkan sistem manajemen klinik dermatologi (ANS Derma) berbasis Golang dan Next.js. Menerapkan Clean Architecture dan Domain-Driven Design (DDD), membangun billing engine kompleks untuk obat racikan, sistem RBAC & JWT security, serta fitur real-time menggunakan WebSocket.",
  },
  {
    year: "2025",
    title: "DevOps & Fullstack Engineer",
    company: "Orca Dental Studio (FloinHub)",
    description:
      "Mengembangkan dan men-deploy sistem web klinik ke Linux VPS. Mengonfigurasi Nginx reverse proxy, firewall, serta CI/CD pipeline untuk memastikan deployment aman, stabil, dan minim downtime.",
  },
  {
    year: "2024 - 2025",
    title: "Fullstack Developer (Freelance)",
    company: "Lunar Interactive",
    description:
      "Membangun dashboard interaktif dengan visualisasi data kompleks menggunakan React dan Laravel. Berhasil mengoptimasi performa aplikasi dengan menurunkan waktu load dari ±4 detik menjadi <1 detik melalui optimasi query dan manajemen state.",
  },
  {
    year: "2023 - Now",
    title: "Bachelor of Informatics Engineering",
    company: "Universitas Tadulako",
    description:
      "Mahasiswa Teknik Informatika dengan fokus pada algoritma, struktur data, web development, RESTful API, database, dan computer networks. Aktif mengerjakan proyek nyata dan freelance selama masa studi.",
  },
];
