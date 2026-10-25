"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Determine whether device supports precise pointer (mouse) vs touch/small screen
    const evaluateDevice = () => {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsTouchDevice(isCoarse || hasTouch || isSmallScreen);
    };

    evaluateDevice();

    const handleResize = () => {
      evaluateDevice();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    if (isTouchDevice) {
      return () => window.removeEventListener("resize", handleResize);
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select");
      const cursorTarget = target.closest("[data-cursor]");

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else if (interactive) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Central precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C6FF4D] pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate3d(${mousePosition.x - 4}px, ${mousePosition.y - 4}px, 0)`,
        }}
      />

      {/* Outer reactive follower / ring */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center transition-opacity duration-200 ${
          isHovered
            ? "border border-[#C6FF4D]/80 bg-[#C6FF4D]/10 backdrop-blur-[1px]"
            : "border border-white/20 bg-transparent"
        } rounded-full`}
        animate={{
          x: mousePosition.x - (cursorText ? 40 : isHovered ? 24 : 16),
          y: mousePosition.y - (cursorText ? 40 : isHovered ? 24 : 16),
          width: cursorText ? 80 : isHovered ? 48 : 32,
          height: cursorText ? 80 : isHovered ? 48 : 32,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 300,
          mass: 0.5,
        }}
      >
        {cursorText && (
          <span className="font-mono text-[9px] font-bold tracking-widest text-[#C6FF4D] uppercase select-none px-1 text-center">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}
