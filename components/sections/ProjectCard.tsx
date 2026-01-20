"use client";

import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetail: (project: Project) => void;
}

export default function ProjectCard({ project, index, onViewDetail }: ProjectCardProps) {
  const statusColors = {
    "Completed": "bg-green-500/90",
    "In Development": "bg-yellow-500/90",
    "Active Development": "bg-blue-500/90"
  };

  return (
    <SpotlightCard 
      className="group h-full p-0 bg-gray-900/60 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all overflow-hidden cursor-pointer"
      spotlightColor="rgba(59, 130, 246, 0.15)"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/90 rounded-full text-xs font-medium">
            ⭐ Featured
          </div>
        )}

        {/* Status Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
          {project.status}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-blue-500/10 rounded-md text-xs text-blue-400 border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs text-gray-500">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.button
            onClick={() => onViewDetail(project)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-sm font-medium text-center hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            📖 Lihat Detail
          </motion.button>
          {project.isPrivate ? (
            <div
              className="px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium text-gray-500 bg-gray-800/50 flex items-center gap-2 cursor-not-allowed"
            >
              🔒 Private
            </div>
          ) : (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium hover:border-gray-500 hover:bg-gray-800 transition-all"
            >
              🐙 GitHub
            </motion.a>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}
