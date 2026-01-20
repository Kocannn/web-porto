"use client";

import { motion } from "framer-motion";
import { SocialLink } from "@/data/social-links";

interface FooterProps {
  name: string;
  tagline: string;
  socialLinks: SocialLink[];
}

export default function Footer({ name, tagline, socialLinks }: FooterProps) {
  return (
    <footer className="relative z-10 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-blue-400">&lt;</span>
              {name}
              <span className="text-blue-400">/&gt;</span>
            </h3>
            <p className="text-gray-500 text-sm">{tagline}</p>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-500 hover:text-blue-400 transition-colors text-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs mt-2">
            Built with 💙 using Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
