"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card/20 flex items-center justify-center px-4">
      <motion.div
        className="text-center space-y-6 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.h1 className="text-6xl sm:text-7xl font-bold" initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
          <span className="gradient-text">404</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Page Not Found</h2>
          <p className="text-muted-foreground">Sorry, the page you're looking for doesn't exist.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <Link href="/">
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-smooth"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="h-4 w-4" />
              Back Home
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
