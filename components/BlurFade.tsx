"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  delay?: number;
  inView?: boolean;
  className?: string;
}

export default function BlurFade({
  children,
  delay = 0,
  inView = true,
  className = "",
}: BlurFadeProps) {
  const { ref, inView: visible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      animate={
        visible && inView
          ? { opacity: 1, filter: "blur(0px)", y: 0 }
          : { opacity: 0, filter: "blur(10px)", y: 20 }
      }
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
