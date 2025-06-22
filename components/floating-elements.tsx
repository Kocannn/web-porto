"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Smartphone } from "lucide-react"

const icons = [Code, Database, Server, Smartphone]

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => {
        const Icon = icons[i % icons.length]
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + ((i * 15) % 80)}%`,
              top: `${10 + ((i * 20) % 80)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + (i % 4),
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          >
            <Icon size={20 + (i % 3) * 10} className="text-blue-400/20" />
          </motion.div>
        )
      })}
    </div>
  )
}
