export interface TechDetail {
  tech: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  isPrivate: boolean;
  featured: boolean;
  overview: string;
  features: string[];
  techDetails: TechDetail[];
  role: string;
  duration: string;
  status: "Completed" | "In Development" | "Active Development";
  challenges: string[];
  results: string[];
}

export const projects: Project[] = [
  // =======================
  // INVERTAMIND
  // =======================
  {
    id: "invertamind",
    title: "InvertaMind",
    description:
      "Platform AI untuk mengevaluasi dan meningkatkan ide pengguna menggunakan meta-reasoning dan prompt engineering.",
    image: "/invertamind.png",
    tags: ["Next.js", "Golang", "AI", "LLM", "Ollama", "PostgreSQL"],
    github: "https://github.com/Kocannn/inverta-mind",
    isPrivate: false,
    featured: true,
    overview:
      "InvertaMind memungkinkan pengguna memasukkan ide bebas dan menerima kritik AI mendalam berupa skor orisinalitas, skalabilitas, dan feasibility. Fokus utama proyek ini adalah eksplorasi prompt engineering lanjutan dan AI self-evaluation.",
    features: [
      "AI-generated critique dan scoring ide",
      "Fitur 'Defend This Idea'",
      "Fitur 'Make It Better'",
      "Advanced prompt engineering",
      "Local LLM inference dengan Ollama",
      "State management multi-step interaction"
    ],
    techDetails: [
      { tech: "Next.js", detail: "Frontend interaktif dan responsif" },
      { tech: "Golang", detail: "Backend API dan orchestration logic" },
      { tech: "Ollama", detail: "Local LLM deployment" },
      { tech: "PostgreSQL", detail: "Database utama" },
      { tech: "Zustand", detail: "State management kompleks" }
    ],
    role: "Fullstack Developer & AI Engineer",
    duration: "September 2024 - Sekarang",
    status: "In Development",
    challenges: [
      "Merancang prompt AI yang objektif",
      "Menghindari output inkonsisten",
      "Menjaga latency tetap rendah"
    ],
    results: [
      "Feedback AI terasa lebih kritis dan terstruktur",
      "User dapat melakukan iterasi ide dengan cepat"
    ]
  },

  // =======================
  // ONLINE MENTORING
  // =======================
  {
    id: "online-mentoring",
    title: "Online Mentoring Platform",
    description:
      "Platform web yang menghubungkan mentee dengan mentor profesional dengan sistem booking, pembayaran, dan video meeting.",
    image: "/online-mentoring.png",
    tags: ["Next.js", "Midtrans", "Zoom API", "OAuth", "PostgreSQL"],
    github: "https://github.com/Kocannn/Online-Mentoring",
    isPrivate: false,
    featured: true,
    overview:
      "Platform ini memfasilitasi sesi mentoring online terstruktur dengan sistem booking terintegrasi, pembayaran aman, dan sesi video langsung.",
    features: [
      "Booking sesi mentoring",
      "Zoom meeting terintegrasi",
      "Midtrans payment gateway",
      "OAuth login Google",
      "Dashboard mentor & mentee"
    ],
    techDetails: [
      { tech: "Next.js", detail: "Fullstack framework" },
      { tech: "Midtrans", detail: "Payment gateway" },
      { tech: "Zoom API", detail: "Video conference" },
      { tech: "OAuth 2.0", detail: "Autentikasi user" },
      { tech: "PostgreSQL", detail: "Data persistence" }
    ],
    role: "Fullstack Developer",
    duration: "2025",
    status: "Completed",
    challenges: [
      "Sinkronisasi jadwal dengan Zoom",
      "Keamanan pembayaran",
      "Manajemen autentikasi"
    ],
    results: [
      "Sistem booking berjalan stabil",
      "Pengalaman user mentoring yang seamless"
    ]
  },

  // =======================
  // Elavera (MEDICAL SYSTEM)
  // =======================
  {
    id: "elavera",
    title: "Elavera Medical Management System",
    description:
      "Sistem manajemen klinik dermatologi dengan multi-role access, billing kompleks, dan real-time queue.",
    image: "/elavera.png",
    tags: ["Golang", "Next.js", "DDD", "RBAC", "WebSocket"],
    github: "",
    isPrivate: true,
    featured: true,
    overview:
      "Elavera adalah sistem manajemen klinik dengan 5 role pengguna, dirancang menggunakan Clean Architecture dan Domain-Driven Design.",
    features: [
      "Multi-role system (Admin, Doctor, Pharmacist, Cashier, Manager)",
      "Billing engine obat racikan",
      "RBAC & JWT security",
      "Real-time queue via WebSocket",
      "Stock management otomatis"
    ],
    techDetails: [
      { tech: "Golang", detail: "Backend dengan DDD & Clean Architecture" },
      { tech: "Next.js 14", detail: "Frontend type-safe" },
      { tech: "JWT + RBAC", detail: "Security layer" },
      { tech: "WebSocket", detail: "Real-time features" }
    ],
    role: "Fullstack Software Engineer",
    duration: "Agustus 2025 - Desember 2025",
    status: "Completed",
    challenges: [
      "Domain medis yang kompleks",
      "Billing logic dinamis",
      "Keamanan data pasien"
    ],
    results: [
      "Mengurangi kesalahan billing",
      "Workflow klinik lebih efisien"
    ]
  },

  // =======================
  // LMS BACKEND (HAMMERCODE)
  // =======================
  {
    id: "lms-backend",
    title: "LMS Backend System",
    description:
      "Backend system untuk Learning Management System dengan 200+ pengguna aktif.",
    image: "/lms.png",
    tags: ["Golang", "REST API", "Database Design"],
    github: "https://github.com/hammercode-dev/lms-be",
    isPrivate: false,
    featured: false,
    overview:
      "Backend LMS ini dibangun untuk memastikan scalability, reliability, dan integrasi yang mulus dengan frontend.",
    features: [
      "RESTful API untuk LMS",
      "Database schema kompleks (10+ tabel)",
      "Migration workflow dengan Goose",
      "High availability backend"
    ],
    techDetails: [
      { tech: "Golang", detail: "Core backend logic" },
      { tech: "Goose", detail: "Database migration" },
      { tech: "Cobra", detail: "CLI tooling" }
    ],
    role: "Backend Developer",
    duration: "April 2025 - Sekarang",
    status: "Active Development",
    challenges: [
      "Data consistency",
      "Scaling API",
      "Collaboration dengan frontend"
    ],
    results: [
      "Melayani 200+ active users",
      "API stabil dan reliable"
    ]
  },

  // =======================
  // E-COMMERCE API
  // =======================
  {
    id: "ecommerce-api",
    title: "E-Commerce REST API",
    description:
      "REST API e-commerce dengan JWT authentication dan Clean Architecture.",
    image: "/ecommerce-api.png",
    tags: ["Golang", "Gin", "GORM", "JWT", "MySQL"],
    github: "https://github.com/Kocannn/e-commerce-api",
    isPrivate: false,
    featured: false,
    overview:
      "API e-commerce ini dirancang modular dan scalable menggunakan Clean Architecture.",
    features: [
      "JWT authentication",
      "Role-based access",
      "Product & order management",
      "Secure endpoint"
    ],
    techDetails: [
      { tech: "Gin", detail: "HTTP framework" },
      { tech: "GORM", detail: "ORM" },
      { tech: "MySQL", detail: "Relational database" }
    ],
    role: "Backend Developer",
    duration: "2024",
    status: "Completed",
    challenges: [
      "Security API",
      "Scalable architecture"
    ],
    results: [
      "API mudah dikembangkan",
      "Performa query optimal"
    ]
  },

  // =======================
  // ORCA DENTAL (DEVOPS)
  // =======================
  {
    id: "orca-dental",
    title: "Orca Dental Clinic System",
    description:
      "Web system untuk klinik dengan deployment dan DevOps setup di Linux VPS.",
    image: "/orca-dental.png",
    tags: ["DevOps", "Linux", "Nginx", "CI/CD"],
    github: "",
    isPrivate: true,
    featured: false,
    overview:
      "Project ini mencakup development sekaligus deployment production-ready system untuk klinik.",
    features: [
      "Nginx reverse proxy",
      "Firewall configuration",
      "CI/CD pipeline",
      "Production deployment"
    ],
    techDetails: [
      { tech: "Linux VPS", detail: "Server environment" },
      { tech: "Nginx", detail: "Reverse proxy" },
      { tech: "CI/CD", detail: "Automated deployment" }
    ],
    role: "DevOps & Fullstack Engineer",
    duration: "September 2025 - November 2025",
    status: "Completed",
    challenges: [
      "Production security",
      "Zero downtime deployment"
    ],
    results: [
      "Deployment stabil",
      "Maintenance lebih mudah"
    ]
  },

  // =======================
  // LUNAR INTERACTIVE
  // =======================
  {
    id: "lunar-dashboard",
    title: "Interactive Dashboard System",
    description:
      "Dashboard dengan visualisasi data kompleks dan performa tinggi.",
    image: "/lunar-dashboard.png",
    tags: ["React", "Laravel", "Performance Optimization"],
    github: "",
    isPrivate: true,
    featured: false,
    overview:
      "Dashboard interaktif untuk monitoring data dengan optimasi performa ekstrem.",
    features: [
      "Complex data visualization",
      "Real-time data handling",
      "Optimized queries"
    ],
    techDetails: [
      { tech: "React", detail: "Frontend dashboard" },
      { tech: "Laravel", detail: "Backend API" }
    ],
    role: "Fullstack Developer",
    duration: "Desember 2024 - Februari 2025",
    status: "Completed",
    challenges: [
      "Load time tinggi",
      "Memory usage"
    ],
    results: [
      "Load time turun dari 4s ke <1s",
      "Memory usage jauh lebih efisien"
    ]
  }
];
