"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, ShieldAlert, Award, Globe2, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Achievements() {
  const iconMap: Record<string, React.ReactNode> = {
    "01": <ShieldAlert className="w-5 h-5 text-[#C6FF4D]" />,
    "02": <Trophy className="w-5 h-5 text-amber-400" />,
    "03": <Award className="w-5 h-5 text-[#55D6D0]" />,
    "04": <Globe2 className="w-5 h-5 text-purple-400" />,
  };

  return (
    <section id="recognition" className="relative py-20 sm:py-32 bg-[#08090B] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] rounded-full bg-[#C6FF4D]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-w-0">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-semibold text-[#C6FF4D] tracking-widest uppercase">
            05 / RECOGNITION
          </span>
          <div className="h-[1px] w-12 bg-[#C6FF4D]/30" />
        </div>

        {/* Headline */}
        <div className="mb-12 sm:mb-20">
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] max-w-2xl">
            Progress measured by
            <br />
            <span className="text-[#C6FF4D]">what I build.</span>
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base mt-3 max-w-xl">
            Competitive hackathons, national security challenges, and technological ideathons.
          </p>
        </div>

        {/* 4 Editorial Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {PORTFOLIO_DATA.achievements.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-5 sm:p-7 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Number & Standing Badge */}
                <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#71717A]">
                      {item.number}
                    </span>
                    <div className="p-2 rounded-xl bg-[#16181F] border border-white/10 shrink-0">
                      {iconMap[item.number]}
                    </div>
                  </div>

                  <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-semibold text-[#08090B] bg-[#C6FF4D] shrink-0 text-center">
                    {item.standing}
                  </span>
                </div>

                {/* Title & Organizer */}
                <h3 className="font-display font-bold text-lg sm:text-2xl text-white mb-1 group-hover:text-[#C6FF4D] transition-colors">
                  {item.title}
                </h3>
                <div className="font-mono text-xs text-[#55D6D0] mb-4">
                  Organized by: {item.organizer}
                </div>

                {/* Project Focus */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#12141A] border border-white/5 mb-4">
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#71717A] uppercase tracking-wider block mb-1">
                    PROJECT PRESENTED:
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white break-words">
                    {item.project}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/5 flex items-center justify-between font-mono text-[11px] sm:text-xs text-[#71717A]">
                <span>{item.badge}</span>
                <span className="text-[#C6FF4D] opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Verified Result
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
