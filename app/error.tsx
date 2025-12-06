"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { RefreshCw } from "lucide-react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card/20 flex items-center justify-center px-4">
      <motion.div
        className="text-center space-y-6 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.h1 className="text-4xl sm:text-5xl font-bold" initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
          <span className="gradient-text">Oops!</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Something went wrong</h2>
          <p className="text-muted-foreground">We encountered an error. Please try again.</p>
        </motion.div>

        <motion.div
          className="flex gap-3 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-smooth"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </motion.button>

          <Link href="/">
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-lg border border-accent/30 font-semibold hover:border-accent/60 transition-smooth"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go Home
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
