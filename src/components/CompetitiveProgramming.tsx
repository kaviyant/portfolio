"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Target, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function CompetitiveProgramming() {
  const { subtitle, leetcode, codechef } = PORTFOLIO_DATA.competitive;

  return (
    <section id="competitive" className="relative py-20 sm:py-32 bg-[#08090B] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-[#C6FF4D]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-w-0">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-semibold text-[#C6FF4D] tracking-widest uppercase">
            07 / PROBLEM SOLVING
          </span>
          <div className="h-[1px] w-12 bg-[#C6FF4D]/30" />
        </div>

        {/* Headline */}
        <div className="mb-12 sm:mb-20">
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] max-w-2xl">
            Logic. Consistency.
            <br />
            <span className="text-[#C6FF4D]">Improvement.</span>
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base mt-3 max-w-xl">
            {subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch min-w-0 w-full">
          {/* Left Column: LeetCode Spotlight (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-[#C6FF4D]/40 transition-all duration-300 flex flex-col justify-between min-w-0 w-full">
            <div>
              <div className="flex items-center justify-between pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-white/10 gap-3">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFA116]/10 border border-[#FFA116]/30 flex items-center justify-center text-[#FFA116] shrink-0">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                      LeetCode
                    </h3>
                    <div className="font-mono text-xs text-[#A1A1AA]">
                      @{leetcode.username}
                    </div>
                  </div>
                </div>

                <a
                  href={leetcode.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 font-mono text-xs text-white transition-colors min-h-[36px]"
                >
                  <span>Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Big Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mb-6 sm:mb-8">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0e1014] border border-white/5">
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#71717A] uppercase tracking-wider block mb-1">
                    Problems Solved
                  </span>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#C6FF4D]">
                    {leetcode.solvedProblems}
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 mt-1 block">
                    Verified on Resume
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0e1014] border border-white/5">
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#71717A] uppercase tracking-wider block mb-1">
                    Global Standing
                  </span>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
                    {leetcode.globalRankTop}
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 mt-1 block">
                    Among Global Contestants
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0e1014] border border-white/5">
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#71717A] uppercase tracking-wider block mb-1">
                    Max Contest Rating
                  </span>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#55D6D0]">
                    {leetcode.maxRating}
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 mt-1 block">
                    Knight Contender Track
                  </span>
                </div>
              </div>

              {/* Difficulty Breakdown Visual */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0e1014] border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#A1A1AA]">
                    Problem Distribution Breakdown:
                  </span>
                  <span className="text-white font-medium">550+ Solved</span>
                </div>

                <div className="w-full h-2.5 sm:h-3 rounded-full bg-white/5 overflow-hidden flex">
                  <div
                    style={{ width: "35%" }}
                    className="h-full bg-emerald-400"
                    title="Easy: 190+"
                  />
                  <div
                    style={{ width: "55%" }}
                    className="h-full bg-amber-400"
                    title="Medium: 310+"
                  />
                  <div
                    style={{ width: "10%" }}
                    className="h-full bg-red-400"
                    title="Hard: 50+"
                  />
                </div>

                <div className="flex flex-wrap sm:flex-nowrap gap-2 justify-between text-[10px] sm:text-[11px] font-mono pt-1">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    Easy: {leetcode.breakdown.easy}
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    Medium: {leetcode.breakdown.medium}
                  </span>
                  <span className="flex items-center gap-1.5 text-red-400">
                    <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                    Hard: {leetcode.breakdown.hard}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 mt-6 sm:mt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[11px] sm:text-xs text-[#71717A]">
              <span>Topic Depth: Dynamic Programming &middot; Trees &middot; Graphs</span>
              <span className="text-[#C6FF4D]">Continuous Practice</span>
            </div>
          </div>

          {/* Right Column: CodeChef Panel (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-[#55D6D0]/40 transition-all duration-300 flex flex-col justify-between min-w-0 w-full">
            <div>
              <div className="flex items-center justify-between pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-white/10 gap-3">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#5B4638]/30 border border-[#8B5A2B]/40 flex items-center justify-center text-[#E59866] shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                      CodeChef
                    </h3>
                    <div className="font-mono text-xs text-[#A1A1AA]">
                      @{codechef.username}
                    </div>
                  </div>
                </div>

                <a
                  href={codechef.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 font-mono text-xs text-white transition-colors min-h-[36px]"
                >
                  <span>Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* CodeChef Stats List */}
              <div className="space-y-3 sm:space-y-4 mb-6">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0e1014] border border-white/5 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-mono text-[10px] sm:text-[11px] text-[#71717A] uppercase tracking-wider block">
                      League & Stars
                    </span>
                    <div className="font-display font-bold text-base sm:text-lg text-white mt-0.5">
                      {codechef.division}
                    </div>
                  </div>
                  <span className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/30 shrink-0">
                    {codechef.stars}
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0e1014] border border-white/5 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-mono text-[10px] sm:text-[11px] text-[#71717A] uppercase tracking-wider block">
                      Max Rating
                    </span>
                    <div className="font-display font-bold text-xl sm:text-2xl text-[#C6FF4D] mt-0.5">
                      {codechef.maxRating}
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono text-zinc-500 shrink-0">
                    Rated Contests
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0e1014] border border-white/5 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-mono text-[10px] sm:text-[11px] text-[#71717A] uppercase tracking-wider block">
                      Contest Rank Peak
                    </span>
                    <div className="font-display font-bold text-xl sm:text-2xl text-[#55D6D0] mt-0.5">
                      Rank #{codechef.contestRank}
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono text-zinc-500 shrink-0">
                    Documented on Resume
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#12141A] border border-white/5 text-xs text-[#A1A1AA] leading-relaxed">
              Demonstrated consistency across timed problem sets, weekly rated contests, and algorithmic challenges.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
