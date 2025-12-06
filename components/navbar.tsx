"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`sticky top-0 z-50 w-full transition-smooth ${isScrolled ? "glass" : "bg-background/50"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              KT
            </motion.div>
          </Link>

          <div className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className={`relative text-sm transition-smooth ${
                    pathname === item.href ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent" layoutId="activeNav" />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}
