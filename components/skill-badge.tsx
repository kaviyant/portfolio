"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  skill: string
  index?: number
}

export function SkillBadge({ skill, index = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      className="px-4 py-2 glass rounded-full border border-accent/30 text-sm font-medium text-foreground transition-smooth"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.1, borderColor: "rgba(180, 85, 255, 0.6)" }}
      viewport={{ once: true }}
    >
      {skill}
    </motion.div>
  )
}
