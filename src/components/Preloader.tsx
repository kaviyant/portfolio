"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if user has already seen loader in this session or prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const startTime = performance.now();
    const duration = 1400; // brief and crisp: 1.4 seconds

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawRatio = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const easedRatio = 1 - Math.pow(1 - rawRatio, 3);
      const currentProgress = Math.round(easedRatio * 100);

      setProgress(currentProgress);

      if (rawRatio < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 600);
        }, 150);
      }
    };

    const animFrame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animFrame);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            opacity: 0,
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08090B] text-white selection:bg-[#C6FF4D]"
        >
          {/* Subtle background tech pattern */}
          <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
          <div className="absolute w-[450px] h-[450px] rounded-full bg-[#C6FF4D]/5 blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-6 text-center">
            {/* Custom K/T Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-20 h-20 mb-8 flex items-center justify-center"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 bg-[#101216]/80 backdrop-blur-md" />
              <div className="absolute inset-0 rounded-2xl border border-[#C6FF4D]/30 animate-pulse-glow" />

              {/* Monogram SVG Graphic */}
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10"
              >
                {/* Letter K */}
                <path
                  d="M13 10V34M13 22L23 10M16.5 18L24 34"
                  stroke="#F4F4F5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Letter T accent */}
                <path
                  d="M26 13H36M31 13V34"
                  stroke="#C6FF4D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            {/* Subtitle / System initials */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="font-mono text-xs tracking-[0.25em] text-[#A1A1AA] uppercase mb-5"
            >
              Kaviyan T. / System Init
            </motion.div>

            {/* Thin Progress bar */}
            <div className="w-full bg-white/10 h-[2px] rounded-full overflow-hidden relative mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-[#55D6D0] to-[#C6FF4D]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Counter percentage */}
            <div className="flex items-center justify-between w-full font-mono text-[11px] text-[#A1A1AA]">
              <span>LOADING EXPERIENCE</span>
              <span className="text-[#C6FF4D] font-medium">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
