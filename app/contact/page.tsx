"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { staggerContainer, listItem } from "@/components/motion-wrapper"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "kaviyanthennarasu@gmail.com",
    href: "mailto:kaviyanthennarasu@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8668115816",
    href: "tel:+918668115816",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    href: "#",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card/20 pt-20 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="mb-16 space-y-4" variants={staggerContainer} initial="initial" animate="animate">
          <motion.h1 variants={listItem} className="text-4xl sm:text-5xl font-bold">
            Get in Touch
          </motion.h1>
          <motion.p variants={listItem} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Have a project in mind, a question to ask, or just want to say hello? I'd love to hear from you. Feel free
            to reach out using the form below or through any of my contact channels.
          </motion.p>
        </motion.div>

        <div className="grid gap-12 md:gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  variants={listItem}
                  className="glass rounded-lg p-6 border border-accent/20 hover:border-accent/50 transition-smooth group cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-accent/10 p-3 group-hover:bg-accent/20 transition-smooth flex-shrink-0">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-muted-foreground">{method.label}</p>
                      <p className="text-base font-semibold text-foreground break-words">{method.value}</p>
                    </div>
                  </div>
                </motion.a>
              )
            })}

            {/* Social Links */}
            <motion.div variants={listItem} className="pt-6 border-t border-border">
              <h3 className="text-sm font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/kaviyant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-lg border border-accent/20 hover:border-accent/50 transition-smooth hover:bg-accent/10"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/kaviyant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-lg border border-accent/20 hover:border-accent/50 transition-smooth hover:bg-accent/10"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.735-2.004 1.445-.103.252-.129.604-.129.957v5.403h-3.554v-10.66h3.417v1.456h.05c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v5.599zM5.337 8.855c-1.144 0-2.083-.931-2.083-2.077 0-1.148.92-2.083 2.083-2.083 1.141 0 2.077.935 2.077 2.083 0 1.146-.936 2.077-2.077 2.077zm1.782 11.597H3.555v-10.66h3.564v10.66zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass rounded-lg p-8 border border-accent/20">
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
              <ContactForm />
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
      </div>
    </div>
  )
}
