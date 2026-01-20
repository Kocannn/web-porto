"use client";

import { motion } from "framer-motion";
import { Stat } from "@/data/stats";

interface StatsCardProps {
  stat: Stat;
  index: number;
}

export default function StatsCard({ stat, index }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl border border-gray-700/50 text-center hover:border-blue-500/50 transition-all cursor-default"
    >
      <div className="text-4xl mb-2">{stat.icon}</div>
      <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
        {stat.number}
      </div>
      <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
    </motion.div>
  );
}
