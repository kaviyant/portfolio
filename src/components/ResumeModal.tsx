"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-preview-title"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.22 }}
          className="relative w-full max-w-4xl bg-[#101216] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Action Header */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 flex items-center justify-between bg-[#16181F] gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span id="resume-preview-title" className="font-mono text-xs text-[#C6FF4D] font-bold truncate">
                RESUME &middot; KAVIYAN T.
              </span>
              <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline truncate">
                (Verified Credentials &middot; 2024–2028)
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={PORTFOLIO_DATA.personal.resumeFilename}
                download="Kaviyan_T_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg bg-[#C6FF4D] text-[#08090B] font-mono font-semibold text-xs hover:bg-[#d5ff7a] transition-colors min-h-[36px]"
              >
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span>Download PDF</span>
              </a>

              <button
                type="button"
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white font-mono text-xs hover:bg-white/10 transition-colors min-h-[36px]"
                title="Print resume"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                aria-label="Close resume preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Document Paper Preview */}
          <div className="p-4 sm:p-8 sm:p-10 overflow-y-auto space-y-6 sm:space-y-8 bg-[#0B0D11] text-zinc-200 font-sans">
            {/* Resume Header */}
            <div className="border-b border-white/10 pb-5 sm:pb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                    KAVIYAN T.
                  </h1>
                  <p className="text-xs sm:text-sm font-mono text-[#C6FF4D] mt-1">
                    Full-Stack Developer | Android Developer | Cybersecurity Enthusiast
                  </p>
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-zinc-400 space-y-0.5 sm:text-right break-words break-all">
                  <div>Chennai, India &middot; {PORTFOLIO_DATA.personal.phone}</div>
                  <div>{PORTFOLIO_DATA.personal.email}</div>
                  <div>LinkedIn: linkedin.com/in/kaviyant &middot; GitHub: github.com/kaviyant</div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono font-bold tracking-widest text-[#55D6D0] uppercase mb-2.5 sm:mb-3 pb-1 border-b border-white/10">
                EDUCATION
              </h2>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">
                    Chennai Institute of Technology
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-400">
                    B.Tech in Information Technology
                  </div>
                </div>
                <div className="sm:text-right font-mono text-xs text-zinc-400 mt-1 sm:mt-0">
                  <div>2024 – 2028</div>
                  <div className="text-[#C6FF4D] font-bold">CGPA: 8.12 / 10</div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono font-bold tracking-widest text-[#55D6D0] uppercase mb-2.5 sm:mb-3 pb-1 border-b border-white/10">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div>
                  <span className="font-semibold text-white">Languages:</span>{" "}
                  <span className="text-zinc-400 font-mono text-xs">
                    C, C++, Java, Python, JavaScript, TypeScript, Dart, Kotlin, Rust
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-white">Frameworks & Libs:</span>{" "}
                  <span className="text-zinc-400 font-mono text-xs">
                    React, Next.js, Node.js, Express, Flutter, Jetpack Compose, Tailwind CSS
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-white">Databases & Cloud:</span>{" "}
                  <span className="text-zinc-400 font-mono text-xs">
                    PostgreSQL, MongoDB, Supabase, Firebase, AWS, Docker
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-white">Tools & Cyber:</span>{" "}
                  <span className="text-zinc-400 font-mono text-xs">
                    Git, GitHub, Linux, Wireshark, Burp Suite, Nmap, Digital Forensics
                  </span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-mono font-bold tracking-widest text-[#55D6D0] uppercase mb-2.5 sm:mb-3 pb-1 border-b border-white/10">
                EXPERIENCE
              </h2>
              <div className="space-y-4">
                {PORTFOLIO_DATA.experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                      <span className="font-semibold text-white text-sm">
                        {exp.role} &middot;{" "}
                        <span className="text-[#C6FF4D] font-mono text-xs">
                          {exp.company}
                        </span>
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-mono font-bold tracking-widest text-[#55D6D0] uppercase mb-2.5 sm:mb-3 pb-1 border-b border-white/10">
                KEY PROJECTS
              </h2>
              <div className="space-y-4">
                {PORTFOLIO_DATA.projects.map((proj) => (
                  <div key={proj.id}>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                      <span className="font-semibold text-white text-sm">
                        {proj.title} &mdash;{" "}
                        <span className="text-[#55D6D0] text-xs font-mono">
                          {proj.subtitle}
                        </span>
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">
                      {proj.description}
                    </p>
                    <div className="text-[11px] font-mono text-zinc-500 mt-1">
                      Tech: {proj.technologies.join(", ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-xs font-mono font-bold tracking-widest text-[#55D6D0] uppercase mb-2.5 sm:mb-3 pb-1 border-b border-white/10">
                ACHIEVEMENTS & RECOGNITION
              </h2>
              <div className="space-y-2 text-xs text-zinc-400">
                <div>
                  &bull;{" "}
                  <span className="font-semibold text-white">DSCI Cyber Security Challenge:</span>{" "}
                  Shortlisted among top teams for national triage innovation.
                </div>
                <div>
                  &bull;{" "}
                  <span className="font-semibold text-white">CIT Hackathon 2024:</span> First
                  Place Winner for real-time prompt vulnerability firewall.
                </div>
                <div>
                  &bull;{" "}
                  <span className="font-semibold text-white">LeetCode:</span> Knight contender
                  with 550+ problems solved across DP, Graphs, and Data Structures.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
