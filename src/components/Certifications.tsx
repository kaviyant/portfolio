"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Server, Database, CheckCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    "Cybersecurity & Networking",
    "Cloud & DB",
    "AI & ML",
    "Data Science",
  ];

  const filteredCerts = PORTFOLIO_DATA.certifications.filter((cert) =>
    selectedCategory === "ALL" ? true : cert.category === selectedCategory
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Cybersecurity & Networking":
        return <ShieldCheck className="w-4 h-4 text-[#C6FF4D]" />;
      case "Cloud & DB":
        return <Server className="w-4 h-4 text-[#55D6D0]" />;
      case "AI & ML":
        return <Database className="w-4 h-4 text-amber-400" />;
      case "Data Science":
        return <Award className="w-4 h-4 text-purple-400" />;
      default:
        return <Award className="w-4 h-4 text-[#C6FF4D]" />;
    }
  };

  return (
    <section id="certifications" className="relative py-20 sm:py-32 bg-[#08090B] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-w-0">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-semibold text-[#C6FF4D] tracking-widest uppercase">
            06 / CERTIFICATIONS
          </span>
          <div className="h-[1px] w-12 bg-[#C6FF4D]/30" />
        </div>

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
              Verified knowledge &
              <br />
              <span className="text-[#C6FF4D]">technical foundations.</span>
            </h2>
            <p className="text-[#A1A1AA] text-sm sm:text-base mt-3 max-w-xl">
              Professional and academic credentials issued by IBM, Cisco, AWS, MongoDB, and NPTEL.
            </p>
          </div>

          {/* Category Selector with smooth touch scroll */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar scrollbar-none whitespace-nowrap max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap shrink-0 min-h-[34px] ${
                  selectedCategory === cat
                    ? "bg-[#C6FF4D] text-[#08090B] font-semibold"
                    : "bg-[#101216] text-[#A1A1AA] border border-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-[#C6FF4D]/30 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-[#16181F] border border-white/10 shrink-0">
                    {getCategoryIcon(cert.category)}
                  </div>
                  <span className="font-mono text-[10px] text-[#71717A] bg-white/5 px-2 py-0.5 rounded">
                    {cert.year}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-base sm:text-lg text-white mb-1.5 group-hover:text-[#C6FF4D] transition-colors break-words">
                  {cert.name}
                </h3>
                <div className="font-mono text-xs text-[#55D6D0] font-medium">
                  {cert.issuer}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                <span className="truncate max-w-[140px] sm:max-w-none">{cert.category}</span>
                <span className="flex items-center gap-1 text-[#C6FF4D] shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
