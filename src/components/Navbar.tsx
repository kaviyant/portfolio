"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Track active section and scroll offset
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "hero",
        "about",
        "toolkit",
        "projects",
        "experience",
        "recognition",
        "certifications",
        "competitive",
        "contact",
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Toolkit", href: "#toolkit", id: "toolkit" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Recognition", href: "#recognition", id: "recognition" },
    { label: "Certifications", href: "#certifications", id: "certifications" },
    { label: "Problem Solving", href: "#competitive", id: "competitive" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "py-2 sm:py-3" : "py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <nav
            aria-label="Primary"
            className={`flex items-center justify-between rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-[#101216]/90 backdrop-blur-md border border-white/10 px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-2xl shadow-black/60"
                : "bg-transparent px-1 sm:px-2 py-1"
            }`}
          >
            {/* Left Monogram / Brand */}
            <a
              href="#hero"
              className="group flex items-center gap-2 sm:gap-2.5 focus:outline-none min-w-0"
              aria-label="Kaviyan T. Home"
            >
              <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#16181F] border border-white/10 transition-colors group-hover:border-[#C6FF4D]/60 shrink-0">
                {/* Visual monogram */}
                <span className="font-mono text-xs font-bold tracking-tight text-white group-hover:text-[#C6FF4D] transition-colors">
                  K<span className="text-[#C6FF4D]">T</span>
                </span>
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#C6FF4D] animate-ping opacity-75" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#C6FF4D]" />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="font-display text-xs sm:text-sm font-bold tracking-wider text-white truncate">
                  KAVIYAN<span className="text-[#C6FF4D]">.T</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-[#A1A1AA] hidden md:inline-block truncate">
                  FULL-STACK & APP DEVELOPER
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 bg-[#16181F]/60 border border-white/5 p-1 rounded-full backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-[#08090B]"
                        : "text-[#A1A1AA] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-[#C6FF4D] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2 sm:gap-2.5">
              <a
                href="/Kaviyan_T_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-mono font-medium text-zinc-300 hover:text-white bg-[#16181F]/80 hover:bg-[#16181F] border border-white/10 hover:border-white/20 transition-all duration-200 active:scale-95"
                title="View resume in new browser tab"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#55D6D0]" />
              </a>

              <a
                href="#contact"
                className="relative inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold tracking-wide text-[#08090B] bg-[#C6FF4D] hover:bg-[#d5ff7a] transition-all duration-200 hover:shadow-lg hover:shadow-[#C6FF4D]/20 active:scale-95"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
              <a
                href="#contact"
                className="inline-flex sm:hidden items-center justify-center px-2.5 py-1.5 rounded-full text-[11px] font-semibold text-[#08090B] bg-[#C6FF4D] whitespace-nowrap"
              >
                Let&apos;s Talk
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 sm:p-2.5 rounded-xl bg-[#16181F] border border-white/10 text-[#A1A1AA] hover:text-white focus:outline-none min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-50 lg:hidden bg-[#08090B]/98 backdrop-blur-2xl pt-20 px-4 sm:px-6 pb-6 flex flex-col justify-between overflow-hidden"
          >
            {/* Top close trigger bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C6FF4D] animate-ping" />
                <span className="font-mono text-xs font-semibold text-[#C6FF4D] tracking-widest uppercase">
                  NAVIGATION
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links list */}
            <div className="space-y-1 overflow-y-auto flex-1 overscroll-contain py-2 pr-1">
              {navItems.map((item, idx) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-[#C6FF4D]/10 text-[#C6FF4D] border border-[#C6FF4D]/25 font-semibold"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-zinc-500">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-white/10 pt-4 mt-auto space-y-2.5">
              <div className="flex gap-2">
                <a
                  href="/Kaviyan_T_Resume.pdf"
                  download="Kaviyan_T_Resume.pdf"
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 min-h-[44px]"
                >
                  Download PDF
                </a>
                <a
                  href="/Kaviyan_T_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#16181F] border border-white/10 text-xs font-mono text-[#55D6D0] min-h-[44px]"
                >
                  View Tab
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C6FF4D] text-[#08090B] font-semibold text-sm min-h-[46px]"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
