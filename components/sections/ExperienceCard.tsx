"use client";

import { motion } from "framer-motion";
import { Experience } from "@/data/experiences";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors"
    >
      <div className="text-blue-400 text-sm font-mono whitespace-nowrap">{experience.year}</div>
      <div>
        <h4 className="font-semibold text-white">{experience.title}</h4>
        <p className="text-sm text-gray-400">{experience.company}</p>
      </div>
    </motion.div>
  );
}
