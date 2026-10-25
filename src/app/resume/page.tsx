"use client";

import React from "react";
import Link from "next/link";
import { Download, ExternalLink, ArrowLeft, Printer, FileText } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-white flex flex-col">
      {/* Top Navigation Bar */}
      <header className="h-16 border-b border-white/10 bg-[#101216]/90 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between z-10 shrink-0">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] hover:text-[#C6FF4D] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <span className="text-white/20 hidden sm:inline">|</span>

          <div className="hidden sm:flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#C6FF4D]" />
            <span className="font-mono text-xs font-semibold text-white">
              Kaviyan_T_Resume.pdf
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <a
            href="/Kaviyan_T_Resume.pdf"
            download="Kaviyan_T_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C6FF4D] hover:bg-[#d5ff7a] text-[#08090B] font-mono font-semibold text-xs transition-colors shadow-lg shadow-[#C6FF4D]/20 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>

          <a
            href="/Kaviyan_T_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 transition-colors"
            title="Open native PDF viewer in browser tab"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#55D6D0]" />
            <span className="hidden sm:inline">New Tab</span>
          </a>
        </div>
      </header>

      {/* Embedded PDF Viewer */}
      <main className="flex-1 w-full bg-[#0c0e12] relative overflow-hidden flex flex-col items-center justify-center p-2 sm:p-6">
        <div className="w-full max-w-5xl h-full min-h-[80vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white">
          <iframe
            src="/Kaviyan_T_Resume.pdf#toolbar=1"
            className="w-full h-full min-h-[82vh] border-0"
            title="Kaviyan T. Resume PDF"
          />
        </div>
      </main>
    </div>
  );
}
