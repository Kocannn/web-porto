"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface ParallaxBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function ParallaxBackground({ children, className = "" }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Layer 1 - Slowest */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 -z-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Layer 2 - Medium */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 -z-20">
        <div className="absolute top-40 right-40 w-32 h-32 bg-cyan-500/20 rotate-45 blur-xl" />
        <div className="absolute bottom-40 left-40 w-24 h-24 bg-pink-500/20 rotate-12 blur-lg" />
      </motion.div>

      {/* Layer 3 - Fastest */}
      <motion.div style={{ y: y3 }} className="absolute inset-0 -z-10">
        <div className="absolute top-60 left-60 w-16 h-16 bg-yellow-500/30 rounded-full blur-sm" />
        <div className="absolute bottom-60 right-60 w-20 h-20 bg-green-500/30 rounded-full blur-sm" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
