"use client"

import { motion } from "framer-motion"
import { SkillBadge } from "@/components/skill-badge"
import { staggerContainer, listItem } from "@/components/motion-wrapper"

const skills = {
  languages: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS"],
  frameworks: ["React", "Next.js", "Flutter", "Tailwind CSS"],
  tools: ["Git", "Linux", "VSCode", "Figma"],
}

const education = [
  {
    year: "2024-2028",
    title: "B.Tech Information Technology",
    organization: "Chennai Institute of Technology",
    description: "Currently pursuing Bachelor of Engineering in Information Technology",
  },
  {
    year: "2024",
    title: "12th Grade",
    organization: "Kongu Matric Higher Secondary School",
    location: "Dharmapuri",
    marks: "93%",
    description: "Completed 12th standard with 93% marks",
  },
]

const experience = [
  {
    year: "2023-Present",
    title: "Competitive Programmer",
    organization: "LeetCode, CodeChef, HackerRank",
    description:
      "Active in competitive programming with 350+ problems solved. Strong focus on data structures, algorithms, and optimization techniques.",
  },
  {
    year: "May-June 2025",
    title: "Android App Developer Intern",
    organization: "Eduskills + Google",
    description: "Developed mobile applications and learned Android development best practices",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card/20 pt-20 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="mb-16 space-y-4" variants={staggerContainer} initial="initial" animate="animate">
          <motion.h1 variants={listItem} className="text-4xl sm:text-5xl font-bold">
            About Me
          </motion.h1>
          <motion.p variants={listItem} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I'm a passionate full-stack developer dedicated to creating elegant, efficient, and user-centric solutions.
            With a strong foundation in competitive programming, I approach every project with problem-solving at its
            core.
          </motion.p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          className="mb-16 grid gap-8 md:grid-cols-2"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={listItem} className="space-y-4">
            <h2 className="text-2xl font-bold">Background</h2>
            <p className="text-muted-foreground leading-relaxed">
              I started my programming journey in competitive programming, which shaped my approach to building robust
              and efficient software. Over time, I've expanded my skills to full-stack development, combining
              algorithmic thinking with modern web technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I'm pursuing my Bachelor's degree in Information Technology while actively developing projects
              and contributing to the tech community. I believe in continuous learning and staying updated with the
              latest industry trends.
            </p>
          </motion.div>

          <motion.div variants={listItem} className="glass rounded-lg p-8 border border-accent/20">
            <h3 className="text-lg font-bold mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Email:</span>
                <a href="mailto:kaviyanthennarasu@gmail.com" className="text-accent hover:underline">
                  kaviyanthennarasu@gmail.com
                </a>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Phone:</span>
                <a href="tel:+918668115816" className="text-accent hover:underline">
                  +91 8668115816
                </a>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">GitHub:</span>
                <a
                  href="https://github.com/kaviyant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  github.com/kaviyant
                </a>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">LinkedIn:</span>
                <a
                  href="https://linkedin.com/in/kaviyant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  linkedin.com/in/kaviyant
                </a>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Location:</span>
                <span>Chennai, India</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mb-16 space-y-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 variants={listItem} className="text-3xl font-bold">
            Technical Skills
          </motion.h2>

          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div key={category} variants={listItem} className="space-y-3">
                <h3 className="text-lg font-semibold capitalize text-accent">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, index) => (
                    <SkillBadge key={skill} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mb-16 space-y-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 variants={listItem} className="text-3xl font-bold">
            Education
          </motion.h2>

          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-transparent opacity-30" />

            {education.map((item, index) => (
              <motion.div key={index} variants={listItem} className="relative pl-16 sm:pl-24" whileHover={{ x: 8 }}>
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-card border-2 border-accent flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                </div>

                <div className="glass rounded-lg p-6 border border-accent/20">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <span className="text-sm text-accent font-semibold">{item.marks || item.year}</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{item.organization}</p>
                  {item.location && <p className="text-xs text-muted-foreground mb-2">{item.location}</p>}
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 variants={listItem} className="text-3xl font-bold">
            Experience
          </motion.h2>

          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-transparent opacity-30" />

            {experience.map((item, index) => (
              <motion.div key={index} variants={listItem} className="relative pl-16 sm:pl-24" whileHover={{ x: 8 }}>
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-card border-2 border-accent flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                </div>

                <div className="glass rounded-lg p-6 border border-accent/20">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <span className="text-sm text-accent font-semibold">{item.year}</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">{item.organization}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
