"use client";

import { motion } from "framer-motion";
import { TechItem } from "@/data/tech-stack";

interface SkillCardProps {
  tech: TechItem;
  index: number;
}

export default function SkillCard({ tech, index }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative p-6 bg-gray-900/60 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all text-center"
    >
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"
        style={{ backgroundColor: tech.color }}
      />
      <div className="text-4xl mb-3">{tech.icon}</div>
      <h3 className="font-semibold text-white mb-2">{tech.name}</h3>
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${tech.level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full rounded-full"
          style={{ backgroundColor: tech.color }}
        />
      </div>
      <span className="text-xs text-gray-400 mt-2 block">{tech.level}%</span>
    </motion.div>
  );
}
