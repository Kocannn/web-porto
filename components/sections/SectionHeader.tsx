"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  highlightedWord: string;
  description?: string;
}

export default function SectionHeader({ subtitle, title, highlightedWord, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <span className="text-blue-400 text-sm uppercase tracking-widest mb-4 block">{subtitle}</span>
      <h2 className="text-4xl md:text-5xl font-bold">
        {title}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          {highlightedWord}
        </span>
      </h2>
      {description && (
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}
