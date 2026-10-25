"use client";

import React, { useState } from "react";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Toolkit from "@/components/Toolkit";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import CompetitiveProgramming from "@/components/CompetitiveProgramming";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      {/* Short refined loading sequence */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Interactive Desktop Custom Cursor */}
      <CustomCursor />

      {/* Main Experience Layout */}
      <div className={`relative min-h-screen w-full max-w-full overflow-x-clip bg-[#08090B] ${loading ? "opacity-0" : "opacity-100 transition-opacity duration-700"}`}>
        <Navbar />

        <main id="main-content" className="w-full max-w-full overflow-x-clip">
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <About />
          <Toolkit />
          <Projects />
          <Experience />
          <Achievements />
          <Certifications />
          <CompetitiveProgramming />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Global Resume Viewer & Downloader Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
