"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { staggerContainer, listItem } from "@/components/motion-wrapper"
import type { Project } from "@/data/projects"

interface ProjectDetailPageClientProps {
  project: Project
}

export function ProjectDetailPageClient({ project }: ProjectDetailPageClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card/20 pt-20 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-smooth font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Banner */}
        <motion.div
          className="mb-12 h-80 rounded-lg bg-gradient-to-br from-accent/30 to-blue-500/30 overflow-hidden"
          layoutId={`project-${project.slug}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Header */}
        <motion.div className="mb-12 space-y-4" variants={staggerContainer} initial="initial" animate="animate">
          <motion.h1 variants={listItem} className="text-4xl sm:text-5xl font-bold">
            {project.name}
          </motion.h1>

          <motion.p variants={listItem} className="text-lg text-muted-foreground">
            {project.longDescription}
          </motion.p>

          {/* Tech Stack */}
          <motion.div variants={listItem} className="flex flex-wrap gap-2 pt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full font-medium">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div variants={listItem} className="flex flex-wrap gap-3 pt-6">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg border border-accent/30 hover:border-accent/60 transition-smooth"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-smooth"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </motion.div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid gap-12 md:grid-cols-2"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Overview */}
          <motion.div variants={listItem} className="glass rounded-lg p-8 border border-accent/20">
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{project.details.overview}</p>
          </motion.div>

          {/* Challenge */}
          <motion.div variants={listItem} className="glass rounded-lg p-8 border border-accent/20">
            <h2 className="text-xl font-bold mb-4">Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">{project.details.challenge}</p>
          </motion.div>

          {/* Solution */}
          <motion.div variants={listItem} className="glass rounded-lg p-8 border border-accent/20">
            <h2 className="text-xl font-bold mb-4">Solution</h2>
            <p className="text-muted-foreground leading-relaxed">{project.details.solution}</p>
          </motion.div>

          {/* Results */}
          <motion.div variants={listItem} className="glass rounded-lg p-8 border border-accent/20">
            <h2 className="text-xl font-bold mb-4">Results</h2>
            <ul className="space-y-2">
              {project.details.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-accent mt-1">→</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
