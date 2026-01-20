"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Experience } from "@/data/experiences";
import ExperienceCard from "./ExperienceCard";

interface ExperienceListProps {
  experiences: Experience[];
  initialShow?: number;
}

export default function ExperienceList({ experiences, initialShow = 3 }: ExperienceListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const shouldCollapse = experiences.length > initialShow;
  const displayedExperiences = isExpanded ? experiences : experiences.slice(0, initialShow);
  const hiddenCount = experiences.length - initialShow;

  return (
    <div className="space-y-4">
      <AnimatePresence mode="sync">
        {displayedExperiences.map((exp, index) => (
          <motion.div
            key={exp.title + exp.company}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <ExperienceCard experience={exp} index={index} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Show More/Less Button */}
      {shouldCollapse && (
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full py-3 mt-2 text-sm font-medium text-gray-400 hover:text-blue-400 bg-gray-800/30 hover:bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all flex items-center justify-center gap-2"
        >
          {isExpanded ? (
            <>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                ↑
              </motion.span>
              Tampilkan Lebih Sedikit
            </>
          ) : (
            <>
              <motion.span
                initial={{ rotate: 180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
              Tampilkan {hiddenCount} Lainnya
            </>
          )}
        </motion.button>
      )}
    </div>
  );
}
