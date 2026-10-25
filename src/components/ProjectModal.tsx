"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Shield, AlertTriangle, Image as ImageIcon } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { ProjectItem } from "@/data/portfolioData";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

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
          aria-labelledby="modal-project-title"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#101216] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 sm:p-8 border-b border-white/10 flex items-start justify-between bg-[#16181F]/60 gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                <span className="font-mono text-xs font-semibold text-[#C6FF4D] tracking-widest shrink-0">
                  PROJECT {project.number}
                </span>
                <span className="text-zinc-600">&middot;</span>
                <span className="font-mono text-xs text-[#55D6D0] uppercase truncate">
                  {project.category}
                </span>
              </div>
              <h3 id="modal-project-title" className="font-display font-bold text-xl sm:text-2xl sm:text-3xl text-white">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1 font-mono">
                {project.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-full bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors focus:outline-none shrink-0 min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-4 sm:p-6 sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto">
            {/* Overview */}
            <div>
              <h4 className="font-mono text-xs text-[#71717A] uppercase tracking-wider mb-2">
                PROJECT OVERVIEW
              </h4>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Challenge & Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0c0e12] border border-white/5">
                <div className="flex items-center gap-2 mb-2.5 sm:mb-3 text-amber-400">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider">
                    The Challenge
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#0c0e12] border border-white/5">
                <div className="flex items-center gap-2 mb-2.5 sm:mb-3 text-[#C6FF4D]">
                  <Shield className="w-4 h-4 shrink-0" />
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider">
                    The Approach
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="font-mono text-xs text-[#71717A] uppercase tracking-wider mb-3">
                KEY CAPABILITIES & IMPLEMENTATION
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {project.keyFeatures.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C6FF4D] mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-mono text-xs text-[#71717A] uppercase tracking-wider mb-3">
                TECHNOLOGY STACK
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-3 py-1 rounded-lg text-xs font-mono bg-[#16181F] text-white border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-[#16181F]/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            <span className="font-mono text-[11px] sm:text-xs text-[#71717A]">
              Architecture: Verified Open / Academic Source
            </span>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-colors min-h-[42px]"
              >
                <GithubIcon className="w-4 h-4 shrink-0" />
                <span>View Repository</span>
              </a>

              {project.screenshotsUrl && (
                <a
                  href={project.screenshotsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#55D6D0] transition-colors min-h-[42px]"
                >
                  <ImageIcon className="w-4 h-4 shrink-0" />
                  <span>Screenshots</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#C6FF4D] hover:bg-[#d5ff7a] text-xs font-mono font-semibold text-[#08090B] transition-colors min-h-[42px]"
                >
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  <span>Launch Interface</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
