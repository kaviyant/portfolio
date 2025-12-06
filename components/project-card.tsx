"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { fadeInScale } from "./motion-wrapper"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        className="group glass rounded-lg overflow-hidden cursor-pointer transition-smooth"
        variants={fadeInScale}
        initial="initial"
        animate="animate"
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
      >
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/20 to-blue-500/20">
          <motion.div
            className="h-full w-full bg-gradient-to-br from-accent/30 to-blue-500/30"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-center text-sm font-semibold text-white/60">{project.image || "Project"}</p>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-lg font-bold text-foreground flex-1">{project.name}</h3>
            {project.featured && (
              <span className="text-xs font-semibold px-2.5 py-1 bg-accent/20 text-accent rounded-full">Featured</span>
            )}
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-card/50 text-muted-foreground rounded border border-border/50"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs px-2 py-1 text-muted-foreground">+{project.tags.length - 3}</span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
