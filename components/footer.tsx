"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/kaviyant",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/kaviyant",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:kaviyanthennarasu@gmail.com",
    label: "Email",
  },
  {
    icon: Phone,
    href: "tel:+918668115816",
    label: "Phone",
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 backdrop-blur-md">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 Kaviyan T. All rights reserved.</p>

          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-smooth hover:text-accent"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
