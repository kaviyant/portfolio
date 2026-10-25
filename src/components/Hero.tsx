"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import Hero3D from "./Hero3D";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-12 overflow-hidden bg-[#08090B]"
    >
      {/* Background grids and glowing radial lights */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/4 -left-20 sm:-left-48 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] rounded-full bg-[#C6FF4D]/8 blur-[100px] sm:blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/3 -right-20 sm:-right-48 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] rounded-full bg-[#55D6D0]/8 blur-[100px] sm:blur-[120px] pointer-events-none z-0" />

      {/* Full-Screen 3D Rotating Planet in Background (runs on BOTH mobile and desktop) */}
      <Hero3D />

      {/* Hero Content Container (Sits cleanly ABOVE the 3D rotating planet) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0 z-10 my-auto relative">
        <div className="max-w-3xl flex flex-col justify-center">
          {/* Introductory Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101216]/90 backdrop-blur-md border border-white/10 w-fit mb-4 sm:mb-6 max-w-full"
          >
            <span className="w-2 h-2 rounded-full bg-[#C6FF4D] animate-ping shrink-0" />
            <span className="font-mono text-[10px] sm:text-[11px] font-medium tracking-widest text-[#A1A1AA] uppercase truncate">
              {PORTFOLIO_DATA.personal.introTag}
            </span>
          </motion.div>

          {/* Oversized Cinematic Headline with Staggered Line Reveals */}
          <h1 className="font-display font-extrabold text-[clamp(2.4rem,8.5vw,5.5rem)] tracking-tight leading-[0.95] text-white uppercase mb-5 sm:mb-8 break-words drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              BUILDING
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[#A1A1AA]"
            >
              WHAT&apos;S
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[#C6FF4D] drop-shadow-[0_0_35px_rgba(198,255,77,0.35)]"
            >
              NEXT.
            </motion.span>
          </h1>

          {/* Supporting Bio Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-[#D4D4D8] max-w-xl font-normal leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
          >
            {PORTFOLIO_DATA.personal.subheadline}
          </motion.p>

          {/* Availability Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center gap-2 mb-6 sm:mb-8"
          >
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55D6D0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#55D6D0]"></span>
            </span>
            <span className="font-mono text-xs text-zinc-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              {PORTFOLIO_DATA.personal.status}
            </span>
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            {/* Primary button: Download Resume */}
            <a
              href="/Kaviyan_T_Resume.pdf"
              download="Kaviyan_T_Resume.pdf"
              data-cursor="DOWNLOAD"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wide bg-[#C6FF4D] text-[#08090B] hover:bg-[#d5ff7a] transition-all duration-200 hover:shadow-xl hover:shadow-[#C6FF4D]/25 active:scale-95 min-h-[46px] w-full sm:w-auto"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>Download Resume</span>
            </a>

            {/* Secondary button: View Resume */}
            <a
              href="/Kaviyan_T_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="VIEW"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium text-xs sm:text-sm text-[#F4F4F5] bg-[#101216]/90 backdrop-blur-md border border-white/10 hover:border-white/25 hover:bg-[#16181F] transition-all duration-200 active:scale-95 min-h-[46px] w-full sm:w-auto"
            >
              <ExternalLink className="w-4 h-4 text-[#55D6D0] shrink-0" />
              <span>View Resume</span>
            </a>

            {/* Work Anchor */}
            <a
              href="#projects"
              data-cursor="EXPLORE"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium text-xs sm:text-sm text-zinc-300 hover:text-white bg-[#101216]/50 backdrop-blur-md border border-white/5 hover:border-white/15 transition-all duration-200 active:scale-95 min-h-[46px] w-full sm:w-auto"
            >
              <Code2 className="w-4 h-4 text-[#A1A1AA] shrink-0" />
              <span>Explore Selected Work</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Indicators */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-6 sm:pt-12 relative">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-t border-white/10 pt-4 text-[11px] font-mono text-[#71717A]">
          <div className="flex items-center gap-2 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF4D]" />
            <span>CHENNAI INSTITUTE OF TECHNOLOGY &middot; CLASS OF 2028</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-500">
            <span>SCROLL TO EXPLORE</span>
            <span>&darr;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
