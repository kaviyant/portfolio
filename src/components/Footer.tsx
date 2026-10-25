"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#08090B] border-t border-white/10 pt-12 sm:pt-16 pb-10 sm:pb-12 overflow-hidden">
      {/* Subtle animated gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C6FF4D]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 pb-10 sm:pb-12 border-b border-white/5">
          {/* Brand & Editorial Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-display text-base sm:text-lg font-bold tracking-wider text-white">
                KAVIYAN<span className="text-[#C6FF4D]">.T</span>
              </span>
              <span className="text-zinc-600">&middot;</span>
              <span className="font-mono text-xs text-[#55D6D0]">
                STUDENT & DEVELOPER
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-sm">
              Designed with intention. Built with code. Focused on high-performance systems and cybersecurity.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-white hover:border-white/20 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-[#FFA116] hover:border-[#FFA116]/30 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="LeetCode profile"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-[#55D6D0] hover:border-[#55D6D0]/30 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#A1A1AA] hover:text-[#C6FF4D] hover:border-[#C6FF4D]/30 transition-colors group min-h-[44px]"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & tech note */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 font-mono text-[11px] sm:text-xs text-[#71717A] text-center sm:text-left">
          <div>
            &copy; {currentYear} Kaviyan T. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span>Chennai, India</span>
            <span>&middot;</span>
            <span className="text-zinc-500">Next.js &middot; Three.js &middot; Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
