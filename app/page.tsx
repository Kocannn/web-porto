"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const { scrollYProgress: projectsScrollProgress } = useScroll({
    target: projectsRef,
    offset: ["start end", "end start"],
  })

  const heroY = useTransform(heroScrollProgress, [0, 1], [0, -200])
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.8], [1, 0])
  const projectsY = useTransform(projectsScrollProgress, [0, 1], [100, -100])

  const skills = [
    { name: "JavaScript", icon: Code, level: 95 },
    { name: "TypeScript", icon: Code, level: 90 },
    { name: "Go", icon: Server, level: 85 },
    { name: "PHP", icon: Code, level: 88 },
    { name: "React/Next.js", icon: Smartphone, level: 92 },
    { name: "Node.js", icon: Server, level: 90 },
    { name: "Laravel", icon: Server, level: 87 },
    { name: "Database", icon: Database, level: 85 },
  ]

  const projects = [
    {
      title: "SIAKAD Website",
      description:
        "Sistem akademik berbasis web untuk universitas dengan fitur lengkap manajemen mahasiswa, dosen, dan kurikulum.",
      tech: ["Laravel", "Blade", "MySQL", "Bootstrap"],
      link: "#",
    },
    {
      title: "Top Anime Website",
      description: "Platform komunitas untuk penggemar anime & manga dengan sistem rating, review, dan diskusi.",
      tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Online Mentoring Platform",
      description: "Platform mentoring online dengan integrasi Zoom untuk video call dan Midtrans untuk pembayaran.",
      tech: ["Next.js", "OAuth", "Midtrans", "PostgreSQL"],
      link: "#",
    },
    {
      title: "E-Commerce API",
      description:
        "RESTful API backend untuk e-commerce dengan fitur autentikasi, manajemen produk, dan order processing.",
      tech: ["Golang", "GORM", "JWT", "PostgreSQL"],
      link: "#",
    },
  ]

  const experiences = [
    {
      title: "Freelance Fullstack Developer",
      company: "Lunar Interactive",
      period: "2024 - 2025",
      description:
        "Mengembangkan aplikasi web full-stack untuk berbagai klien dengan fokus pada performa dan user experience.",
    },
    {
      title: "Backend Developer",
      company: "Hammercode Palu",
      period: "2025 - Present",
      description:
        "Bertanggung jawab dalam pengembangan API backend dan integrasi database untuk aplikasi web perusahaan.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager at Lunar Interactive",
      content:
        "Dwi adalah developer yang sangat profesional dan detail. Proyeknya selalu selesai tepat waktu dengan kualitas tinggi.",
      rating: 5,
    },
    {
      name: "Ahmad Rizki",
      role: "CTO at Hammercode Palu",
      content:
        "Kemampuan problem solving Dwi sangat baik. Dia mampu menangani tantangan teknis yang kompleks dengan solusi yang elegant.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      role: "Startup Founder",
      content: "Bekerja dengan Dwi adalah pengalaman yang luar biasa. Komunikasi yang baik dan hasil yang memuaskan.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Dwi Candra Andika
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gray-800 border-t border-gray-700"
          >
            <div className="px-4 py-2 space-y-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 hover:text-blue-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section with Advanced Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Layers */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          {/* Layer 1 - Slowest moving background */}
          <motion.div
            style={{ y: useTransform(heroScrollProgress, [0, 1], [0, -50]) }}
            className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30"
          />

          {/* Layer 2 - Medium speed geometric shapes */}
          <motion.div style={{ y: useTransform(heroScrollProgress, [0, 1], [0, -100]) }} className="absolute inset-0"> <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
            <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-lg" />
            <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Layer 3 - Fastest moving elements */}
          <motion.div style={{ y: useTransform(heroScrollProgress, [0, 1], [0, -200]) }} className="absolute inset-0">
            <div className="absolute top-32 right-1/4 w-16 h-16 bg-blue-400/20 rotate-45 blur-sm" />
            <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-purple-400/20 rotate-12 blur-sm" />
          </motion.div>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern with Parallax */}
        <motion.div
          style={{
            y: useTransform(heroScrollProgress, [0, 1], [0, -150]),
            opacity: useTransform(heroScrollProgress, [0, 0.5], [0.1, 0]),
          }}
          className="absolute inset-0 opacity-10"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
      `,
              backgroundSize: "50px 50px",
            }}
          />
        </motion.div>

        {/* Main Content with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-4 relative"
        >
          {/* Glowing orb behind text */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl -z-10"
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
          >
            Dwi Candra Andika
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block"
            >
              Fullstack Web Developer
            </motion.span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="/cv.pdf" download>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <Download className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10">Download CV</span>
                </Button>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10">View Projects</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full p-1">
                  <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                    <div className="w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 absolute" />
                    <img
                      src="/profile.jpeg"
                      alt="Profile"
                      className="w-72 h-72 rounded-full object-cover z-10 relative"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Saya adalah developer dengan keahlian dalam JavaScript, Go, PHP, dan TypeScript. Terampil dalam
                menggunakan Node.js, Laravel, React, dan Next.js untuk membuat aplikasi web yang aman dan scalable.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Dengan pengalaman dalam pengembangan full-stack, saya fokus pada pembuatan solusi web yang tidak hanya
                fungsional tetapi juga memberikan pengalaman pengguna yang optimal.
              </p>

              <div className="flex items-center space-x-4 text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Palu, Indonesia</span>
              </div>

              <div className="flex items-center space-x-4 text-gray-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>dwicandraandika4@gmail.com</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <skill.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Enhanced Parallax */}
      <section ref={projectsRef} id="projects" className="py-20 px-4 relative overflow-hidden">
        {/* Multi-layer parallax background */}
        <motion.div
          style={{ y: useTransform(projectsScrollProgress, [0, 1], [0, -50]) }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-purple-900/5"
        />

        {/* Floating geometric shapes */}
        <motion.div
          style={{ y: useTransform(projectsScrollProgress, [0, 1], [50, -100]) }}
          className="absolute inset-0"
        >
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl" />
        </motion.div>

        {/* Moving code symbols */}
        <motion.div
          style={{ y: useTransform(projectsScrollProgress, [0, 1], [100, -150]) }}
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute top-32 left-1/4 text-6xl text-blue-400/20 font-mono">{"<>"}</div>
          <div className="absolute bottom-40 right-1/4 text-4xl text-purple-400/20 font-mono">{"{ }"}</div>
          <div className="absolute top-1/2 left-10 text-5xl text-cyan-400/20 font-mono">{"</>"}</div>
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Rest of projects content remains the same */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group"
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden relative">
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>

                  <CardContent className="p-6 relative z-10">
                    <motion.h3
                      className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30 cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400 mb-1">{exp.title}</h3>
                      <p className="text-lg text-gray-300">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Hire Me Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Saya siap membantu mewujudkan proyek web impian Anda dengan teknologi terdepan dan pengalaman yang telah
              teruji.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-5 w-5" />
                Hire Me Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
              >
                <a href="/cv.pdf" download className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Tertarik untuk berkolaborasi? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk proyek
                  menarik dan peluang kerja sama yang saling menguntungkan.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">dwicandraandika4@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">Palu, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="https://www.github.com/Kocannn">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-transparent border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/dwi-candra-andika-a121b0324/">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-transparent border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 p-6">
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);

                  // Send the form data to our API endpoint
                  fetch('/api/contact', {
                    method: 'POST',
                    body: JSON.stringify({
                      name: formData.get('name'),
                      email: formData.get('email'),
                      message: formData.get('message')
                    }),
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  })
                    .then(response => {
                      if (response.ok) return response.json();
                      throw new Error('Failed to send message');
                    })
                    .then(() => {
                      alert('Message sent successfully!');
                      e.currentTarget.reset(); // Clear the form
                    })
                    .catch(error => {
                      alert('Error sending message. Please try again.');
                      console.error(error);
                    });
                }}>
                  <div>
                    <label className="block text-sm text-white font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={5}
                      name="message"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div >
      </section >

      {/* Footer */}
      < footer className="py-8 px-4 bg-gray-900 border-t border-gray-800" >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Dwi Candra Andika. All rights reserved.</p>
        </div>
      </footer >
    </div >
  )
}
