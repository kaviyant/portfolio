"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Shield,
  Binary,
  Cpu,
  QrCode,
  AlertOctagon,
  CheckCircle,
  FileSearch,
  Scan,
  Maximize2,
  Navigation,
  BellRing,
  Radio,
  Image as ImageIcon,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#08090B] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] rounded-full bg-[#55D6D0]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-semibold text-[#C6FF4D] tracking-widest uppercase">
            03 / SELECTED WORK
          </span>
          <div className="h-[1px] w-12 bg-[#C6FF4D]/30" />
        </div>

        {/* Headline */}
        <div className="mb-14 sm:mb-20">
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] max-w-3xl">
            Built to solve
            <br />
            <span className="text-[#C6FF4D]">real problems.</span>
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base mt-3 max-w-xl">
            From cyber forensic triage tools to LLM security proxies and mobile phishing defenders.
          </p>
        </div>

        {/* Projects Showcase Cards */}
        <div className="space-y-12 sm:space-y-20">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 p-4 sm:p-8 lg:p-10 relative overflow-hidden group w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-w-0">
                {/* Left: Project Metadata & Copy */}
                <div className="lg:col-span-6 flex flex-col justify-between min-w-0">
                  <div>
                    {/* Project Number & Category */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold text-[#C6FF4D] tracking-widest px-2.5 py-1 rounded-md bg-[#C6FF4D]/10 border border-[#C6FF4D]/25">
                        PROJECT {project.number}
                      </span>
                      <span className="font-mono text-xs text-[#55D6D0] uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-2">
                      {project.title}
                    </h3>

                    {/* Subtitle / Tagline */}
                    <p className="font-mono text-xs sm:text-sm text-[#C6FF4D] mb-4">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key features bullets */}
                    <div className="space-y-2 mb-8">
                      {project.keyFeatures.slice(0, 3).map((feat) => (
                        <div
                          key={feat}
                          className="flex items-center gap-2 text-xs font-mono text-zinc-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF4D]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Chips */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#16181F] text-zinc-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      data-cursor="SPECS"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#C6FF4D] text-[#08090B] font-semibold text-xs font-mono tracking-wide hover:bg-[#d5ff7a] transition-all min-h-[44px] w-full sm:w-auto"
                    >
                      <Maximize2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Inspect Details & Specs</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#16181F] border border-white/10 text-xs font-mono text-white hover:border-white/30 transition-colors min-h-[44px] w-full sm:w-auto"
                    >
                      <GithubIcon className="w-4 h-4 shrink-0" />
                      <span>Repository</span>
                    </a>

                    {project.screenshotsUrl && (
                      <a
                        href={project.screenshotsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#55D6D0] hover:bg-white/10 transition-colors min-h-[44px] w-full sm:w-auto"
                      >
                        <ImageIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>Screenshots</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Custom High-Tech Mockup Visual Interface (Desktop only) */}
                <div className="hidden lg:block lg:col-span-6 min-w-0 w-full">
                  <div className="rounded-2xl border border-white/15 bg-[#0A0C0F] p-4 sm:p-5 relative shadow-2xl overflow-hidden group-hover:border-[#C6FF4D]/30 transition-colors">
                    {/* Top simulated window bar */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 font-mono text-[10px] sm:text-[11px] text-[#71717A]">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 shrink-0" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 shrink-0" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 shrink-0" />
                        <span className="ml-1 sm:ml-2 text-zinc-400 truncate max-w-[140px] xs:max-w-[200px] sm:max-w-none">
                          {project.id === "fortrix"
                            ? "fortrix-triage-daemon --port 8080"
                            : project.id === "secureprompt-ai"
                            ? "secureprompt-proxy:active-filter"
                            : project.id === "qr-phishing-detector"
                            ? "qr-shield-runtime://android-v14"
                            : "sleepstop-geofence://live-transit-guard"}
                        </span>
                      </div>
                      <span className="text-[#C6FF4D] text-[10px] uppercase shrink-0 font-bold">
                        ONLINE
                      </span>
                    </div>

                    {/* If an image is configured in project.imageUrl, display it with hover zoom; otherwise display interactive UI mockup */}
                    {project.imageUrl ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black/40 border border-white/5">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0F] via-transparent to-transparent opacity-50" />
                      </div>
                    ) : (
                      <>
                        {/* Conditional Mockup UI */}
                        {project.id === "fortrix" && (
                          <div className="space-y-3 font-mono text-xs">
                            {/* Scan progress & status */}
                            <div className="p-3 rounded-xl bg-[#12141A] border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <FileSearch className="w-4 h-4 text-[#C6FF4D] animate-pulse" />
                            <div>
                              <div className="text-white text-xs font-semibold">
                                /dev/nvme0n1p2 [Triage Scan]
                              </div>
                              <div className="text-[10px] text-zinc-500">
                                Scanned: 184,920 files &middot; 42.8 GB
                              </div>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] bg-[#C6FF4D]/10 text-[#C6FF4D] border border-[#C6FF4D]/30">
                            ANALYSIS COMPLETE
                          </span>
                        </div>

                        {/* Evidence Items Table */}
                        <div className="bg-[#0e1014] rounded-xl p-3 border border-white/5 space-y-2">
                          <div className="text-[10px] text-zinc-500 uppercase tracking-wider flex justify-between">
                            <span>Artifact / Target</span>
                            <span>Classification</span>
                          </div>

                          <div className="flex items-center justify-between p-2 rounded bg-white/5 text-[11px] gap-2 min-w-0">
                            <span className="text-zinc-200 truncate">
                              NTFS::$LogFile_anomaly.bin
                            </span>
                            <span className="text-red-400 font-semibold text-[10px] shrink-0">
                              HIGH PRIORITY
                            </span>
                          </div>

                          <div className="flex items-center justify-between p-2 rounded bg-white/5 text-[11px] gap-2 min-w-0">
                            <span className="text-zinc-200 truncate">
                              powershell_history_obfuscated.txt
                            </span>
                            <span className="text-amber-400 font-semibold text-[10px] shrink-0">
                              SUSPICIOUS
                            </span>
                          </div>

                          <div className="flex items-center justify-between p-2 rounded bg-white/5 text-[11px] gap-2 min-w-0">
                            <span className="text-zinc-200 truncate">
                              registry_shimcache_timewarp.reg
                            </span>
                            <span className="text-amber-400 font-semibold text-[10px] shrink-0">
                              TIMESTOMP FLAG
                            </span>
                          </div>
                        </div>

                        {/* Hex Preview */}
                        <div className="p-2.5 rounded-xl bg-[#090a0d] border border-white/5 text-[10px] text-zinc-500 overflow-hidden">
                          <div className="text-[#55D6D0] mb-1 font-semibold">
                            Sector 0x004F3B20 Header:
                          </div>
                          <div className="text-zinc-400 break-all leading-relaxed">
                            4D 5A 90 00 03 00 00 00 04 00 00 00 FF FF 00 00
                            b8 00 00 00 00 00 00 00 40 00 00 00
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === "secureprompt-ai" && (
                      <div className="space-y-3 font-mono text-xs">
                        {/* Prompt Inspection Header */}
                        <div className="p-3 rounded-xl bg-[#12141A] border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <Shield className="w-4 h-4 text-[#55D6D0]" />
                            <div>
                              <div className="text-white text-xs font-semibold">
                                Real-Time Prompt Redactor
                              </div>
                              <div className="text-[10px] text-zinc-500">
                                Model: LLM-Gateway-Proxy
                              </div>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] bg-red-500/20 text-red-400 border border-red-500/40 font-bold">
                            LEAK PREVENTED
                          </span>
                        </div>

                        {/* Input vs Redacted Result */}
                        <div className="space-y-2">
                          <div className="p-2.5 rounded-lg bg-red-500/5 border border-red-500/20 text-[11px]">
                            <span className="text-red-400 text-[10px] block mb-1">
                              RAW INCOMING PROMPT:
                            </span>
                            <span className="text-zinc-300">
                              &quot;Deploy this with sk-proj-83921... and database password
                              P@ssw0rd2025&quot;
                            </span>
                          </div>

                          <div className="p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-[11px]">
                            <span className="text-emerald-400 text-[10px] block mb-1">
                              SANITIZED FORWARDED PROMPT:
                            </span>
                            <span className="text-zinc-300">
                              &quot;Deploy this with [REDACTED_API_KEY] and database password
                              [REDACTED_SECRET]&quot;
                            </span>
                          </div>
                        </div>

                        {/* Risk Metrics */}
                        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                          <div className="p-2 rounded bg-white/5 border border-white/5">
                            <div className="text-zinc-500">Risk Score</div>
                            <div className="text-red-400 font-bold text-xs mt-0.5">
                              94 / 100
                            </div>
                          </div>
                          <div className="p-2 rounded bg-white/5 border border-white/5">
                            <div className="text-zinc-500">Latency</div>
                            <div className="text-[#55D6D0] font-bold text-xs mt-0.5">
                              12 ms
                            </div>
                          </div>
                          <div className="p-2 rounded bg-white/5 border border-white/5">
                            <div className="text-zinc-500">Tokens Filtered</div>
                            <div className="text-[#C6FF4D] font-bold text-xs mt-0.5">
                              4 Secrets
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === "qr-phishing-detector" && (
                      <div className="space-y-3 font-mono text-xs">
                        {/* QR Scanner Frame */}
                        <div className="p-3 rounded-xl bg-[#12141A] border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <QrCode className="w-4 h-4 text-amber-400" />
                            <div>
                              <div className="text-white text-xs font-semibold">
                                Optical QR Stream Intercept
                              </div>
                              <div className="text-[10px] text-zinc-500">
                                Target: https://bank-login-secure.xyz
                              </div>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] bg-red-500/20 text-red-400 border border-red-500/40 font-bold">
                            MALICIOUS URL
                          </span>
                        </div>

                        {/* Cloud Threat Intel Feeds */}
                        <div className="space-y-2 bg-[#0e1014] p-3 rounded-xl border border-white/5">
                          <div className="flex flex-col xs:flex-row xs:items-center justify-between text-[11px] gap-1">
                            <span className="text-zinc-400">
                              Google Safe Browsing:
                            </span>
                            <span className="text-red-400 font-bold text-[10px] shrink-0">
                              FLAGGED (Social Eng)
                            </span>
                          </div>

                          <div className="flex flex-col xs:flex-row xs:items-center justify-between text-[11px] gap-1">
                            <span className="text-zinc-400">
                              VirusTotal Engines:
                            </span>
                            <span className="text-amber-400 font-bold text-[10px] shrink-0">
                              18/92 Engines Flagged
                            </span>
                          </div>

                          <div className="flex flex-col xs:flex-row xs:items-center justify-between text-[11px] gap-1">
                            <span className="text-zinc-400">
                              Homograph Heuristic:
                            </span>
                            <span className="text-red-400 font-bold text-[10px] shrink-0">
                              Cyrillic &apos;a&apos; Detected
                            </span>
                          </div>
                        </div>

                        {/* Mobile Status Shield */}
                        <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3">
                          <AlertOctagon className="w-5 h-5 text-red-400 shrink-0" />
                          <div className="text-[11px] text-red-200">
                            Auto-redirect blocked. Destination was quarantined
                            prior to webview invocation.
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === "sleepstop" && (
                      <div className="space-y-3 font-mono text-xs">
                        {/* Transit GPS Header */}
                        <div className="p-3 rounded-xl bg-[#12141A] border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <Navigation className="w-4 h-4 text-[#C6FF4D]" />
                            <div>
                              <div className="text-white text-xs font-semibold">
                                Live Journey: Stop Approaching
                              </div>
                              <div className="text-[10px] text-zinc-500">
                                Destination: Guindy Hub &middot; 350m remaining
                              </div>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] bg-[#C6FF4D]/10 text-[#C6FF4D] border border-[#C6FF4D]/30 font-bold">
                            GEOFENCE ARMED
                          </span>
                        </div>

                        {/* 4-Stage Escalating Alarm Matrix */}
                        <div className="space-y-2 bg-[#0e1014] p-3 rounded-xl border border-white/5">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-zinc-400">Escalating Multi-Stage Alarm:</span>
                            <span className="text-[#C6FF4D] font-bold text-[10px]">
                              STAGE 2 ACTIVE
                            </span>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center text-[10px]">
                            <div className="p-1.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                              1. Vibration
                            </div>
                            <div className="p-1.5 rounded bg-[#C6FF4D]/20 border border-[#C6FF4D]/50 text-[#C6FF4D] font-bold">
                              2. Sound
                            </div>
                            <div className="p-1.5 rounded bg-white/5 border border-white/5 text-zinc-500">
                              3. Flashlight
                            </div>
                            <div className="p-1.5 rounded bg-white/5 border border-white/5 text-zinc-500">
                              4. Siren SOS
                            </div>
                          </div>
                        </div>

                        {/* Family Safety & Multi-lingual voice badge */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                            <Radio className="w-3.5 h-3.5 text-red-400 shrink-0 animate-pulse" />
                            <div>
                              <span className="text-zinc-400 block">Family SOS Link</span>
                              <span className="text-white font-medium">Live GPS Sharing ON</span>
                            </div>
                          </div>

                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                            <BellRing className="w-3.5 h-3.5 text-[#55D6D0] shrink-0" />
                            <div>
                              <span className="text-zinc-400 block">Voice Announcements</span>
                              <span className="text-white font-medium">தமிழ் &middot; Eng &middot; हिंदी</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
