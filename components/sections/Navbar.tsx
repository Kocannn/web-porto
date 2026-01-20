"use client";

import { motion } from "framer-motion";

interface NavbarProps {
  isScrolled: boolean;
  activeSection: string;
  navItems: string[];
  cvUrl: string;
  logo: string;
}

export default function Navbar({ isScrolled, activeSection, navItems, cvUrl, logo }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 z-40 transition-all duration-500 ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-blue-500/5" 
          : "bg-transparent"
      }`}
    >
      <motion.h1 
        className="text-xl md:text-2xl font-bold tracking-wide"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-blue-400">&lt;</span>
        {logo}
        <span className="text-blue-400">/&gt;</span>
      </motion.h1>
      <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className={`relative py-2 transition-colors hover:text-blue-400 ${
                activeSection === item.toLowerCase() ? "text-blue-400" : ""
              }`}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
      <motion.a
        href={cvUrl}
        download
        className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        📄 Download CV
      </motion.a>
    </motion.nav>
  );
}
