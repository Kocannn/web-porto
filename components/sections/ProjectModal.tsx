"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const statusColors = {
    "Completed": "bg-green-500/90",
    "In Development": "bg-yellow-500/90",
    "Active Development": "bg-blue-500/90"
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
          >
            ✕
          </button>

          {/* Header Image */}
          <div className="relative h-64 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            
            {/* Project Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                  {project.status}
                </span>
                <span className="text-gray-400 text-sm">{project.duration}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h2>
              <p className="text-blue-400 mt-1">{project.role}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Overview */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">📋</span> Overview
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.overview}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-blue-500/10 rounded-full text-sm text-blue-400 border border-blue-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">✨</span> Fitur Utama
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50"
                  >
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack Details */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🛠️</span> Tech Stack
              </h3>
              <div className="space-y-3">
                {project.techDetails.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col md:flex-row md:items-center gap-2 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                  >
                    <span className="font-semibold text-blue-400 md:min-w-[150px]">{item.tech}</span>
                    <span className="text-gray-400 text-sm">{item.detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Challenges & Results */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Challenges */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> Tantangan
                </h3>
                <div className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-orange-500/10 rounded-lg border border-orange-500/20"
                    >
                      <span className="text-orange-400">⚡</span>
                      <span className="text-gray-300 text-sm">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">📈</span> Hasil
                </h3>
                <div className="space-y-2">
                  {project.results.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20"
                    >
                      <span className="text-green-400">🏆</span>
                      <span className="text-gray-300 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-700">
              {project.isPrivate ? (
                <div className="flex-1 py-3 bg-gray-800/50 rounded-xl font-medium text-center text-gray-500 flex items-center justify-center gap-2 cursor-not-allowed border border-gray-700">
                  🔒 Private Repository
                </div>
              ) : (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-medium text-center transition-all flex items-center justify-center gap-2"
                >
                  🐙 Lihat di GitHub
                </motion.a>
              )}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-medium text-center hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Tutup
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
