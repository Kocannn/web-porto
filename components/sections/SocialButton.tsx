"use client";

import { motion } from "framer-motion";
import { SocialLink } from "@/data/social-links";

interface SocialButtonProps {
  social: SocialLink;
  size?: "sm" | "md" | "lg";
}

export default function SocialButton({ social, size = "md" }: SocialButtonProps) {
  const sizeClasses = {
    sm: "w-10 h-10 text-lg",
    md: "w-12 h-12 text-xl",
    lg: "w-14 h-14 text-2xl"
  };

  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`${sizeClasses[size]} flex items-center justify-center bg-gray-800 rounded-xl hover:bg-blue-500/20 border border-gray-700 hover:border-blue-500/50 transition-all`}
      title={social.name}
    >
      {social.icon}
    </motion.a>
  );
}
