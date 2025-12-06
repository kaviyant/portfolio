"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { staggerContainer, listItem } from "./motion-wrapper"

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {submitted && (
        <motion.div
          className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          Message sent successfully! I'll get back to you soon.
        </motion.div>
      )}

      <motion.div variants={listItem}>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={`w-full px-4 py-3 rounded-lg glass border ${
            errors.name ? "border-red-500" : "border-border/50"
          } focus:outline-none focus:ring-2 focus:ring-accent transition-smooth`}
        />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
      </motion.div>

      <motion.div variants={listItem}>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className={`w-full px-4 py-3 rounded-lg glass border ${
            errors.email ? "border-red-500" : "border-border/50"
          } focus:outline-none focus:ring-2 focus:ring-accent transition-smooth`}
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
      </motion.div>

      <motion.div variants={listItem}>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows={5}
          className={`w-full px-4 py-3 rounded-lg glass border ${
            errors.message ? "border-red-500" : "border-border/50"
          } focus:outline-none focus:ring-2 focus:ring-accent transition-smooth resize-none`}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </motion.div>

      <motion.button
        type="submit"
        className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold transition-smooth hover:bg-accent/90"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  )
}
