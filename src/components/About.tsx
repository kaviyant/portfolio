"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, ShieldCheck, Terminal, Copy, Check } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const [activeTab, setActiveTab] = useState<"profile" | "spec" | "manifest">("profile");
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    profile: `// Identity & Academic Standing
export const developerProfile = {
  name: "Kaviyan T.",
  institution: "Chennai Institute of Technology",
  degree: "B.Tech Information Technology",
  graduationCohort: 2028,
  academicScore: {
    cgpa: "8.12 / 10",
    verified: true,
  },
  domains: [
    "Full-Stack Web Engineering",
    "Android Applications (Kotlin / Flutter)",
    "Cyber Forensic Triage & Security Tools",
    "Competitive Algorithmic Problem Solving"
  ],
  contact: {
    email: "kaviyanthennarasu@gmail.com",
    phone: "+91 86681 15816",
    linkedin: "https://www.linkedin.com/in/kaviyant/"
  },
  status: "Available for Software Engineering Internships"
};`,
    spec: `// System Specifications & Focus
interface EngineeringFocus {
  systemArchitecture: "High-performance Tauri + Rust desktop apps";
  apiStandards: "RESTful microservices & OpenAPI contracts";
  forensicPipeline: "Rapid metadata scanning & IOC detection";
  codeConsistency: "550+ algorithmic challenges solved";
  globalStanding: "Top 11.96% LeetCode rating";
}`,
    manifest: `// Engineering Principles
1. Build tools that solve tangible technical problems.
2. Optimize for zero unnecessary dependencies.
3. Validate security boundaries early (OWASP & Threat Models).
4. Combine rigorous data structures with clean interfaces.`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative py-20 sm:py-32 bg-[#08090B] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-semibold text-[#C6FF4D] tracking-widest uppercase">
            01 / ABOUT
          </span>
          <div className="h-[1px] w-12 bg-[#C6FF4D]/30" />
        </div>

        {/* Headline */}
        <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-10 sm:mb-16 max-w-4xl">
          Curiosity turns into code.
          <br />
          <span className="text-[#A1A1AA]">Code turns into impact.</span>
        </h2>

        {/* Split Layout: Bio & Academic Grid (Left) + Interactive Code Panel (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start min-w-0 w-full">
          {/* Left Column: Bio & Compact Info Cards */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 min-w-0 w-full">
            <p className="text-sm sm:text-base md:text-lg text-[#A1A1AA] leading-relaxed">
              {PORTFOLIO_DATA.personal.aboutBio}
            </p>

            {/* Compact Information Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div className="glass-panel p-4 sm:p-5 rounded-2xl glass-panel-hover">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2 text-[#C6FF4D]">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                    Degree & Major
                  </span>
                </div>
                <div className="font-medium text-white text-sm">
                  {PORTFOLIO_DATA.personal.degree}
                </div>
                <div className="text-xs text-[#A1A1AA] mt-1">
                  {PORTFOLIO_DATA.personal.institution}
                </div>
              </div>

              <div className="glass-panel p-4 sm:p-5 rounded-2xl glass-panel-hover">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2 text-[#55D6D0]">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                    Academic Standing
                  </span>
                </div>
                <div className="font-medium text-white text-sm flex items-center gap-2">
                  <span>CGPA: {PORTFOLIO_DATA.personal.cgpa}</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#55D6D0]/10 text-[#55D6D0] border border-[#55D6D0]/30 font-mono">
                    Verified
                  </span>
                </div>
                <div className="text-xs text-[#A1A1AA] mt-1">
                  Graduation: {PORTFOLIO_DATA.personal.graduation}
                </div>
              </div>

              <div className="glass-panel p-4 sm:p-5 rounded-2xl sm:col-span-2 glass-panel-hover">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3 text-[#C6FF4D]">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                    Core Technical Interests
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {PORTFOLIO_DATA.personal.coreInterests.map((interest) => (
                    <span
                      key={interest}
                      className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-[#F4F4F5] border border-white/10"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Inspector Panel */}
          <div className="lg:col-span-6 w-full min-w-0">
            <div className="rounded-2xl border border-white/10 bg-[#101216] overflow-hidden shadow-2xl">
              {/* Terminal Title Bar */}
              <div className="px-3.5 sm:px-4 py-3 bg-[#16181F] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="ml-2 sm:ml-3 font-mono text-xs text-[#A1A1AA] flex items-center gap-1.5 truncate">
                    <Terminal className="w-3.5 h-3.5 text-[#C6FF4D] shrink-0" />
                    <span className="truncate">kaviyan-runtime-v1.0</span>
                  </span>
                </div>

                {/* Copy button */}
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA] hover:text-[#C6FF4D] transition-colors p-1.5 rounded shrink-0 min-h-[36px]"
                  title="Copy code snippet"
                  aria-label="Copy code snippet"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#C6FF4D]" />
                      <span className="text-[#C6FF4D]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Tabs with horizontal touch scroll */}
              <div className="flex border-b border-white/5 bg-[#12141A] px-2 overflow-x-auto no-scrollbar scrollbar-none whitespace-nowrap">
                {[
                  { id: "profile", label: "profile.config.ts" },
                  { id: "spec", label: "engineering.spec.ts" },
                  { id: "manifest", label: "principles.md" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`px-3 py-2 text-xs font-mono border-b-2 transition-colors shrink-0 ${
                      activeTab === tab.id
                        ? "border-[#C6FF4D] text-[#C6FF4D] bg-[#16181F]"
                        : "border-transparent text-[#71717A] hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Code display with clean horizontal scrolling */}
              <div className="p-3.5 sm:p-5 font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto leading-relaxed bg-[#0c0e12] min-h-[260px] sm:min-h-[300px] w-full max-w-full">
                <pre className="overflow-x-auto max-w-full whitespace-pre-wrap sm:whitespace-pre break-all sm:break-normal">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Status footer bar */}
              <div className="px-3.5 sm:px-4 py-2 bg-[#12141A] border-t border-white/5 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-[#71717A]">
                <span>Status: 200 OK</span>
                <span className="text-[#C6FF4D]">UTF-8 &middot; TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
