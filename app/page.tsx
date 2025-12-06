"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code2, Smartphone, ShoppingCart, Briefcase } from "lucide-react"
import { staggerContainer, listItem } from "@/components/motion-wrapper"
import { SkillBadge } from "@/components/skill-badge"
import { FloatingStars } from "@/components/floating-stars"

const skills = [
  "HTML5",
  "CSS",
  "JavaScript",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "Flutter",
  "Kotlin",
  "Git",
  "GitHub",
  "UI/UX Design (Figma)",
]

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Full-stack web applications with modern technologies",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Cross-platform mobile apps using Flutter",
  },
  {
    icon: ShoppingCart,
    title: "Competitive Programming",
    description: "Learning Algorithm optimization and data structure ",
  },
  {
    icon: Briefcase,
    title: "Internship: Android App Developer",
    description:
      "Eduskills-Google Android Developer (May–June 2025). Cut app load time ~25%, real-time sync, push notifications & auth.",
  },
]

const stats = []

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingStars />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div className="space-y-8" variants={staggerContainer} initial="initial" animate="animate">
            {/* Greeting */}
            <motion.div variants={listItem} className="space-y-6">
              <div className="flex items-center gap-3">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground">Hello</h1>
                <span className="text-5xl sm:text-6xl lg:text-7xl text-accent">.</span>
              </div>

              <div className="space-y-4">
                <div className="w-20 h-1 bg-accent" />
                <div>
                  <p className="text-2xl sm:text-3xl text-muted-foreground mb-2">I'm</p>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">Kaviyan T</h2>
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Full-Stack Developer</h3>

              <p className="text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
                I transform ideas into elegant, scalable solutions. From web applications to mobile apps, I bring
                technical expertise and creative problem-solving to every project.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={listItem} className="flex flex-wrap gap-4">
              <Link href="/projects">
                <motion.button
                  className="px-8 py-3 bg-accent text-background rounded-lg font-semibold transition-smooth hover:bg-accent/90"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Got a project?
                </motion.button>
              </Link>

              <motion.a
                href="/Kaviyan-T-Resume.pdf"
                download="Kaviyan-T-Resume.pdf"
                target="_blank"
                className="px-8 py-3 glass rounded-lg font-semibold border border-accent/50 transition-smooth hover:border-accent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                rel="noreferrer"
              >
                My resume
              </motion.a>
            </motion.div>

            {/* Skills */}
            <motion.div variants={listItem} className="space-y-6 pt-8">
              <motion.div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} index={0} />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Services Timeline */}
          <motion.div
            className="space-y-8 mt-12 lg:mt-0"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Services Timeline */}
            <div className="space-y-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div key={service.title} variants={listItem} className="flex gap-4">
                    {/* Timeline dot and line */}
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-accent" />
                      {index < services.length - 1 && <div className="w-1 h-16 bg-accent/30 mt-2" />}
                    </div>

                    {/* Content */}
                    <div className="pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-6 w-6 text-accent" />
                        <h4 className="text-xl font-bold text-foreground">{service.title}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {stats.length > 0 &&
            stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center space-y-3"
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-accent">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={listItem}>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">About me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              I started my software journey driven by curiosity and a passion for problem-solving. With expertise in
              full-stack development, mobile app creation, and competitive programming, I build solutions that are not
              only functional but also elegant and scalable. I'm constantly learning, pushing boundaries, and turning
              complex challenges into opportunities for innovation.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Project - QR Phishing Detector */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-accent/10 relative z-10">
        <motion.div
          className="space-y-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={listItem}>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Featured Project</h2>
          </motion.div>

          <motion.div
            variants={listItem}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center glass rounded-2xl p-8 sm:p-12 border border-accent/20"
          >
            {/* Project Image */}
            <motion.div className="flex items-center justify-center" whileHover={{ scale: 1.05 }}>
              <img src="/images/image.png" alt="QR Phishing Detector App" className="w-full max-w-sm rounded-lg" />
            </motion.div>

            {/* Project Details */}
            <motion.div className="space-y-6">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">QR Phishing Detector App</h3>
                <p className="text-muted-foreground text-lg mb-4">
                  A Flutter-based mobile application that detects phishing attempts in QR codes using advanced security
                  APIs.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Key Features:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Detects QR code types (URL, WiFi, Text)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Real-time threat analysis with VirusTotal API
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Integration with Google Safe Browsing API
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Cross-platform iOS and Android support
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "VirusTotal API", "Safe Browsing API"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link href="/projects/qr-phishing-detector">
                <motion.button
                  className="w-full px-6 py-3 bg-accent text-background rounded-lg font-semibold transition-smooth hover:bg-accent/90"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Full Project
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <motion.div
          className="glass rounded-2xl p-8 sm:p-12 border border-accent/30 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Let's Build Something Amazing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's collaborate and create something extraordinary together.
          </p>
          <Link href="/contact">
            <motion.button
              className="mx-auto px-8 py-3 bg-accent text-background rounded-lg font-semibold transition-smooth hover:bg-accent/90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
