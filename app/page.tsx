"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Data imports
import { projects, Project } from "@/data/projects";
import { techStack, additionalSkills } from "@/data/tech-stack";
import { stats } from "@/data/stats";
import { socialLinks } from "@/data/social-links";
import { experiences } from "@/data/experiences";
import { profile } from "@/data/profile";

// Component imports
import LightRays from "@/components/LightRays";
import BlurFade from "@/components/BlurFade";
import ProfileCard from "@/components/ProfileCard";
import {
  Navbar,
  ProjectCard,
  ProjectModal,
  SkillCard,
  StatsCard,
  ExperienceList,
  SocialButton,
  SectionHeader,
  ContactForm,
  Footer,
} from "@/components/sections";

// Navigation items
const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = NAV_ITEMS.map(item => item.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden text-white bg-black">
      {/* === Animated Cursor Follower === */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-blue-400/30 pointer-events-none z-50 mix-blend-screen hidden md:block"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed w-10 h-10 rounded-full border border-blue-400/50 pointer-events-none z-50 hidden md:block"
        animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* === Background === */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.2}
          fadeDistance={8}
          lightSpread={2}
          rayLength={2}
          followMouse
          mouseInfluence={0.2}
          noiseAmount={0.1}
          distortion={0}
          className="opacity-70"
        />
      </div>

      {/* === Floating Particles === */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -500],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* === Navbar === */}
      <Navbar
        isScrolled={isScrolled}
        activeSection={activeSection}
        navItems={NAV_ITEMS}
        cvUrl={profile.cvUrl}
        logo={profile.shortName}
      />

      {/* === Home Section === */}
      <section
        id="home"
        className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 pt-24"
      >
        <div className="flex-1 text-center md:text-left space-y-6">
          <BlurFade delay={0.1} inView>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 mb-4 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20"
            >
              ✨ {profile.tagline}
            </motion.div>
          </BlurFade>
          
          <BlurFade delay={0.2} inView>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-gradient">
                  {profile.name.split(" ").slice(0, 2).join(" ")}
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
            </h1>
          </BlurFade>
          
          <BlurFade delay={0.3} inView>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
              {profile.bio.short}
            </p>
          </BlurFade>
          
          <BlurFade delay={0.4} inView>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <motion.a 
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-medium overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  🚀 Lihat Proyek
                </span>
              </motion.a>
              <motion.a 
                href="#contact"
                className="px-8 py-4 border-2 border-blue-400/50 rounded-xl font-medium hover:bg-blue-400/10 hover:border-blue-400 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                💬 Hubungi Saya
              </motion.a>
            </div>
          </BlurFade>

          {/* Quick Stats */}
          <BlurFade delay={0.5} inView>
            <div className="flex flex-wrap justify-center md:justify-start gap-8 pt-8">
              {stats.slice(0, 3).map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-400">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </BlurFade>
        </div>

        <div className="flex-1 flex justify-center mt-12 md:mt-0">
          <BlurFade delay={0.4} inView>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <ProfileCard
                name={profile.name}
                title={profile.title}
                handle={profile.handle}
                status="Online"
                contactText="Contact Me"
                avatarUrl={profile.avatarUrl}
                miniAvatarUrl={profile.miniAvatarUrl}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
              />
            </motion.div>
          </BlurFade>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* === About Section === */}
      <section id="about" className="relative z-10 px-6 md:px-20 py-24">
        <BlurFade delay={0.1} inView>
          <SectionHeader
            subtitle="Tentang Saya"
            title="Siapa"
            highlightedWord="Saya?"
          />
        </BlurFade>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left - About Text */}
          <BlurFade delay={0.2} inView>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                {profile.bio.long.map((paragraph, index) => (
                  <p key={index} className={`${index === 0 ? 'text-lg text-gray-300' : 'mt-4 text-gray-400'} leading-relaxed`}>
                    {index === 0 ? (
                      <>
                        {paragraph.split(profile.name)[0]}
                        <span className="text-blue-300 font-semibold">{profile.name}</span>
                        {paragraph.split(profile.name)[1]}
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>

              {/* Experience Timeline */}
              <ExperienceList experiences={experiences} initialShow={3} />
            </div>
          </BlurFade>

          {/* Right - Stats Grid */}
          <BlurFade delay={0.3} inView>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <StatsCard key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* === Skills Section === */}
      <section id="skills" className="relative z-10 px-6 md:px-20 py-24 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <BlurFade delay={0.1} inView>
          <SectionHeader
            subtitle="Keahlian"
            title="Tech"
            highlightedWord="Stack"
            description="Teknologi dan tools yang saya gunakan untuk membangun aplikasi modern"
          />
        </BlurFade>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((tech, index) => (
            <BlurFade key={tech.name} delay={0.1 + index * 0.05} inView>
              <SkillCard tech={tech} index={index} />
            </BlurFade>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <BlurFade delay={0.5} inView>
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">Juga familiar dengan:</p>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {additionalSkills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-400 border border-gray-700/50 hover:border-blue-500/30 hover:text-blue-400 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      {/* === Projects Section === */}
      <section id="projects" className="relative z-10 px-6 md:px-20 py-24">
        <BlurFade delay={0.1} inView>
          <SectionHeader
            subtitle="Portfolio"
            title="Featured"
            highlightedWord="Projects"
            description="Beberapa proyek terbaik yang telah saya kerjakan"
          />
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <BlurFade key={project.id} delay={0.1 + index * 0.1} inView>
              <ProjectCard
                project={project}
                index={index}
                onViewDetail={setSelectedProject}
              />
            </BlurFade>
          ))}
        </div>

        {/* View More Button */}
        <BlurFade delay={0.5} inView>
          <div className="text-center mt-12">
            <motion.a
              href={profile.githubUrl}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-400/50 rounded-xl font-medium hover:bg-blue-400/10 hover:border-blue-400 transition-all"
            >
              Lihat Semua Proyek di GitHub →
            </motion.a>
          </div>
        </BlurFade>
      </section>

      {/* === Project Detail Modal === */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* === Contact Section === */}
      <section id="contact" className="relative z-10 px-6 md:px-20 py-24 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <BlurFade delay={0.1} inView>
          <SectionHeader
            subtitle="Kontak"
            title="Mari"
            highlightedWord="Bekerja Sama"
            description="Punya proyek menarik? Atau hanya ingin say hi? Jangan ragu untuk menghubungi saya!"
          />
        </BlurFade>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <BlurFade delay={0.2} inView>
            <div className="space-y-6">
              <div className="p-6 bg-gray-900/60 rounded-2xl border border-gray-700/50">
                <h3 className="text-xl font-semibold mb-4">Info Kontak</h3>
                <div className="space-y-4">
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-4 text-gray-400 hover:text-blue-400 transition-colors">
                    <span className="text-2xl">✉️</span>
                    <span>{profile.email}</span>
                  </a>
                  <div className="flex items-center gap-4 text-gray-400">
                    <span className="text-2xl">📍</span>
                    <span>{profile.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 bg-gray-900/60 rounded-2xl border border-gray-700/50">
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <SocialButton key={social.name} social={social} />
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full animate-pulse ${
                    profile.availability.status === 'available' ? 'bg-green-500' :
                    profile.availability.status === 'busy' ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                  <span className={`font-medium ${
                    profile.availability.status === 'available' ? 'text-green-400' :
                    profile.availability.status === 'busy' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {profile.availability.message}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  {profile.availability.responseTime}
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Contact Form */}
          <BlurFade delay={0.3} inView>
            <ContactForm />
          </BlurFade>
        </div>
      </section>

      {/* === Footer === */}
      <Footer
        name={profile.name}
        tagline={`${profile.title} based in Indonesia`}
        socialLinks={socialLinks}
      />
    </div>
  );
}
