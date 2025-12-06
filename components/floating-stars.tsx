"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface Star {
  id: number
  left: number
  top: number
  size: number
  duration: number
  delay: number
}

export function FloatingStars() {
  const [windowHeight, setWindowHeight] = useState(1000)

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  }, [])

  // Generate random floating stars
  const floatingStars: Star[] = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 0.5,
  }))

  const fallingStars: Star[] = Array.from({ length: 30 }, (_, i) => ({
    id: i + 100,
    left: Math.random() * 100,
    top: -10,
    size: Math.random() * 2.5 + 0.5,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 2,
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating stars with bob animation */}
      {floatingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-accent/30"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            boxShadow: `0 0 ${star.size * 2}px rgba(180, 85, 255, 0.6)`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Falling stars for depth and movement */}
      {fallingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-accent/20"
          style={{
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
            boxShadow: `0 0 ${star.size * 1.5}px rgba(180, 85, 255, 0.4)`,
          }}
          animate={{
            y: [0, windowHeight + 100],
            opacity: [0, 0.6, 0],
            x: [0, Math.random() * 50 - 25],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
