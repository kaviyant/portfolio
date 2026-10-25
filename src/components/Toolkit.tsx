"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Layout,
  Server,
  Smartphone,
  Wrench,
  Cpu,
  Search,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Toolkit() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const iconMap: Record<string, React.ReactNode> = {
    Terminal: <Terminal className="w-5 h-5" />,
    Layout: <Layout className="w-5 h-5" />,
    Server: <Server className="w-5 h-5" />,
    Smartphone: <Smartphone className="w-5 h-5" />,
    Wrench: <Wrench className="w-5 h-5" />,
    Cpu: <Cpu className="w-5 h-5" />,
  };

  // Filter skills based on selected category & search input
  const categoriesToDisplay = PORTFOLIO_DATA.skills
    .filter((cat) => selectedCategory === "ALL" || cat.title === selectedCategory)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="toolkit" className="relative py-20 sm:py-32 bg-[#08090B] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] rounded-full bg-[#C6FF4D]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-w-0">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-semibold text-[#C6FF4D] tracking-widest uppercase">
            02 / TOOLKIT
          </span>
          <div className="h-[1px] w-12 bg-[#C6FF4D]/30" />
        </div>

        {/* Headline & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
              Tools I use to turn
              <br />
              <span className="text-[#C6FF4D]">ideas into products.</span>
            </h2>
            <p className="text-[#A1A1AA] text-sm sm:text-base mt-3 max-w-xl">
              Carefully organized into engineering disciplines. No arbitrary progress bars — only solid, practical working tools.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717A]" />
            <input
              type="text"
              placeholder="Filter technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#101216] border border-white/10 text-xs font-mono text-white placeholder-[#71717A] focus:outline-none focus:border-[#C6FF4D] transition-colors"
            />
          </div>
        </div>

        {/* Category Pills with smooth horizontal scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar scrollbar-none whitespace-nowrap">
          <button
            type="button"
            onClick={() => setSelectedCategory("ALL")}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all whitespace-nowrap shrink-0 min-h-[38px] ${
              selectedCategory === "ALL"
                ? "bg-[#C6FF4D] text-[#08090B] font-semibold shadow-md shadow-[#C6FF4D]/20"
                : "bg-[#101216] text-[#A1A1AA] border border-white/10 hover:text-white hover:border-white/20"
            }`}
          >
            ALL DISCIPLINES
          </button>
          {PORTFOLIO_DATA.skills.map((cat) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all whitespace-nowrap shrink-0 min-h-[38px] ${
                selectedCategory === cat.title
                  ? "bg-[#C6FF4D] text-[#08090B] font-semibold shadow-md shadow-[#C6FF4D]/20"
                  : "bg-[#101216] text-[#A1A1AA] border border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categoriesToDisplay.map((cat) => (
            <div
              key={cat.title}
              className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-[#16181F] border border-white/10 text-[#C6FF4D] group-hover:scale-105 transition-transform shrink-0">
                      {iconMap[cat.iconName] || <Wrench className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm tracking-wide text-white">
                        {cat.title}
                      </h3>
                      <span className="font-mono text-[10px] text-[#71717A]">
                        {cat.skills.length} TECHNOLOGIES
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#A1A1AA] mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono bg-white/5 text-zinc-300 border border-white/5 hover:border-[#C6FF4D]/40 transition-colors"
                    >
                      {skill.name}
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
