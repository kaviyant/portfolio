"use client"

import { motion } from "framer-motion"

interface StatCardProps {
  label: string
  value: string
  index?: number
}

export function StatCard({ label, value, index = 0 }: StatCardProps) {
  return (
    <motion.div
      className="glass rounded-lg p-6 border border-accent/20 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4, borderColor: "rgba(180, 85, 255, 0.4)" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-3xl font-bold text-accent mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
      >
        {value}
      </motion.div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  )
}
