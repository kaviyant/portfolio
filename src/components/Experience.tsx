"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-32 bg-[#08090B] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-w-0">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-semibold text-[#C6FF4D] tracking-widest uppercase">
            04 / EXPERIENCE
          </span>
          <div className="h-[1px] w-12 bg-[#C6FF4D]/30" />
        </div>

        {/* Headline */}
        <div className="mb-12 sm:mb-20">
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] max-w-2xl">
            Real industry
            <br />
            <span className="text-[#C6FF4D]">engineering internships.</span>
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base mt-3 max-w-xl">
            Hands-on software development across full-stack systems and Android engineering teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-2.5 sm:ml-8 pl-4 sm:pl-12 space-y-10 sm:space-y-16">
          {PORTFOLIO_DATA.experience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[24px] sm:-left-[55px] top-1.5 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-[#101216] border-2 border-[#C6FF4D] group-hover:scale-125 transition-transform shadow-[0_0_12px_rgba(198,255,77,0.5)]" />
              </div>

              {/* Card */}
              <div className="glass-panel p-4 sm:p-7 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-[#C6FF4D]/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-medium text-[#C6FF4D] bg-[#C6FF4D]/10 border border-[#C6FF4D]/25 mb-2">
                      {item.type}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-2xl text-white">
                      {item.role}
                    </h3>
                    <div className="font-mono text-xs sm:text-sm text-[#55D6D0] font-medium mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-[#A1A1AA] space-y-1 shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C6FF4D] shrink-0" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-500">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-base text-zinc-300 leading-relaxed mb-5 sm:mb-6">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                  {item.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A1A1AA]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C6FF4D] mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-white/5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono bg-white/5 text-zinc-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
