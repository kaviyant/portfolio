"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"
import { staggerContainer, listItem } from "@/components/motion-wrapper"

type Category = "All" | "web" | "mobile" | "ml" | "tools"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")

  const categories: Category[] = ["All", "web", "mobile", "ml", "tools"]

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card/20 pt-20 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="mb-12 space-y-4" variants={staggerContainer} initial="initial" animate="animate">
          <motion.h1 variants={listItem} className="text-4xl sm:text-5xl font-bold">
            Projects
          </motion.h1>
          <motion.p variants={listItem} className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects I've built and worked on. Each project represents a unique challenge and learning
            opportunity.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div className="mb-12 flex flex-wrap gap-3" variants={listItem} initial="initial" animate="animate">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-smooth ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "glass border border-accent/30 text-foreground hover:border-accent/60"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === "All" ? "All Projects" : category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid gap-6 sm:grid-cols-2"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div className="text-center py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-muted-foreground">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
