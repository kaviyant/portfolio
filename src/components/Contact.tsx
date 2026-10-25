"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Send,
  Copy,
  Check,
  Code2,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Loader2,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // hidden anti-spam trap
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successInfo, setSuccessInfo] = useState<{ name: string; email: string } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    if (PORTFOLIO_DATA.personal.phone) {
      navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Please provide your name (at least 2 characters).";
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errors.subject = "Please enter a subject line (at least 3 characters).";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Please write a message with at least 10 characters.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus("success");
        setSuccessInfo({ name: formData.name, email: formData.email });
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
        setFieldErrors({});

        // Trigger celebratory confetti burst on successful delivery
        try {
          confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.75 },
            colors: ["#C6FF4D", "#55D6D0", "#FFFFFF"],
          });
        } catch {
          // ignore if canvas-confetti unsupported
        }
      } else {
        setStatus("error");
        setErrorMessage(
          data.error || "The email service could not deliver your message. Please try again."
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage("Network connection error. Please verify your connection and try again.");
    }
  };

  const handleResetForm = () => {
    setStatus("idle");
    setErrorMessage("");
    setFieldErrors({});
    setSuccessInfo(null);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-[#08090B] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[#C6FF4D]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-w-0">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-semibold text-[#C6FF4D] tracking-widest uppercase">
            08 / CONTACT
          </span>
          <div className="h-[1px] w-12 bg-[#C6FF4D]/30" />
        </div>

        {/* Headline */}
        <div className="mb-10 sm:mb-20">
          <h2 className="font-display font-extrabold text-[clamp(2.2rem,7vw,4.5rem)] text-white tracking-tight leading-[0.98] uppercase max-w-4xl break-words">
            HAVE AN IDEA?
            <br />
            <span className="text-[#C6FF4D] drop-shadow-[0_0_30px_rgba(198,255,77,0.25)]">
              LET&apos;S BUILD IT.
            </span>
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-2xl leading-relaxed">
            Interested in software engineering, innovative products, or collaborating on meaningful technical projects? Send an instant message directly to my inbox below.
          </p>
        </div>

        {/* Split Grid: Details & Channels (Left) + Functional Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start min-w-0 w-full">
          {/* Left Column: Direct info, copy email, verified platforms */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 min-w-0 w-full">
            {/* Direct Email Card with One-Click Copy */}
            <div className="glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-[#C6FF4D]/30 transition-all">
              <span className="font-mono text-xs text-[#71717A] uppercase tracking-wider block mb-2">
                DIRECT INBOX
              </span>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm sm:text-base text-white truncate">
                  {PORTFOLIO_DATA.personal.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  data-cursor="COPY"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-[#C6FF4D] hover:bg-[#C6FF4D]/10 transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#C6FF4D]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <div className="text-[11px] font-mono text-[#C6FF4D] mt-2 flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  Copied email address to clipboard!
                </div>
              )}
            </div>

            {/* Direct Phone / WhatsApp Card */}
            <div className="glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-[#55D6D0]/30 transition-all">
              <span className="font-mono text-xs text-[#71717A] uppercase tracking-wider block mb-2">
                PHONE & WHATSAPP
              </span>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm sm:text-base text-white">
                  {PORTFOLIO_DATA.personal.phone}
                </span>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  data-cursor="COPY"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-[#55D6D0] hover:bg-[#55D6D0]/10 transition-colors shrink-0"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-[#55D6D0]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedPhone && (
                <div className="text-[11px] font-mono text-[#55D6D0] mt-2 flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  Copied phone number to clipboard!
                </div>
              )}
            </div>

            {/* Location & Academic Base Card */}
            <div className="glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10">
              <span className="font-mono text-xs text-[#71717A] uppercase tracking-wider block mb-2">
                LOCATION & TIMEZONE
              </span>
              <div className="flex items-center gap-2.5 text-white font-medium text-sm">
                <MapPin className="w-4 h-4 text-[#55D6D0] shrink-0" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
                <span className="font-mono text-xs text-zinc-500">(IST · UTC+5:30)</span>
              </div>
              <div className="text-xs text-[#A1A1AA] mt-1 font-mono">
                {PORTFOLIO_DATA.personal.institution}
              </div>
            </div>

            {/* Social Verification Hub */}
            <div className="glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 space-y-2.5 sm:space-y-3">
              <span className="font-mono text-xs text-[#71717A] uppercase tracking-wider block mb-2">
                VERIFIED PLATFORMS
              </span>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-mono text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                  <span>GitHub: kaviyant</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#C6FF4D]" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-mono text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <span>LeetCode: kaviyant7</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#C6FF4D]" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-mono text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#55D6D0]" />
                  <span>LinkedIn: kaviyant</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#C6FF4D]" />
              </a>
            </div>
          </div>

          {/* Right Column: Functional In-Page Contact Form */}
          <div className="lg:col-span-7 min-w-0 w-full">
            <div className="glass-panel p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-white/10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* Premium Inline Success State (Visitor remains on page) */
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="py-8 sm:py-12 flex flex-col items-center text-center space-y-6"
                  >
                    {/* Animated Pulsing Icon */}
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#C6FF4D]/10 border border-[#C6FF4D]/30 shadow-[0_0_50px_rgba(198,255,77,0.25)]">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                      >
                        <CheckCircle2 className="w-10 h-10 text-[#C6FF4D]" />
                      </motion.div>
                      <span className="absolute inset-0 rounded-full border border-[#C6FF4D]/40 animate-ping opacity-50" />
                    </div>

                    <div className="space-y-2 max-w-md">
                      <span className="font-mono text-xs font-bold text-[#C6FF4D] tracking-widest uppercase">
                        TRANSMISSION ACCEPTED
                      </span>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                        Message Dispatched!
                      </h3>
                      <p className="text-sm text-[#A1A1AA] leading-relaxed">
                        Thank you{successInfo?.name ? `, ${successInfo.name}` : ""}! Your message has been routed to{" "}
                        <span className="text-white font-mono">kaviyanthennarasu@gmail.com</span> via Resend.
                      </p>
                      <p className="text-xs text-zinc-500 font-mono">
                        A reply will be sent directly to{" "}
                        <span className="text-[#55D6D0]">{successInfo?.email}</span>.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#16181F] hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-all hover:border-[#C6FF4D]/40 min-h-[44px] w-full sm:w-auto"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-[#C6FF4D]" />
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Active Form View */
                  <motion.form
                    key="active-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    {/* Security Subhead */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/5 text-[11px] font-mono text-zinc-500">
                      <span className="flex items-center gap-1.5 text-zinc-400">
                        <Sparkles className="w-3.5 h-3.5 text-[#C6FF4D]" />
                        Direct End-to-End Relay via Resend
                      </span>
                      <span className="text-[#C6FF4D]">TLS ENCRYPTED</span>
                    </div>

                    {/* Spam Honeypot (Hidden from human users) */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="contact-honeypot">Leave blank</label>
                      <input
                        id="contact-honeypot"
                        type="text"
                        name="honeypot"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      />
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block font-mono text-xs text-[#A1A1AA] uppercase tracking-wider mb-2"
                        >
                          Your Name <span className="text-[#C6FF4D]">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          disabled={status === "loading"}
                          placeholder="e.g. Maya Lin"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: "" });
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-[#0c0e12] border text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors ${
                            fieldErrors.name
                              ? "border-red-500/80 focus:border-red-500"
                              : "border-white/10 focus:border-[#C6FF4D]"
                          }`}
                        />
                        {fieldErrors.name && (
                          <p className="mt-1.5 text-[11px] font-mono text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            {fieldErrors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block font-mono text-xs text-[#A1A1AA] uppercase tracking-wider mb-2"
                        >
                          Your Email <span className="text-[#C6FF4D]">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          disabled={status === "loading"}
                          placeholder="e.g. maya@company.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: "" });
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-[#0c0e12] border text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors ${
                            fieldErrors.email
                              ? "border-red-500/80 focus:border-red-500"
                              : "border-white/10 focus:border-[#C6FF4D]"
                          }`}
                        />
                        {fieldErrors.email && (
                          <p className="mt-1.5 text-[11px] font-mono text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            {fieldErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block font-mono text-xs text-[#A1A1AA] uppercase tracking-wider mb-2"
                      >
                        Subject <span className="text-[#C6FF4D]">*</span>
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        disabled={status === "loading"}
                        placeholder="e.g. Software Engineering Opportunity / Collaboration"
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value });
                          if (fieldErrors.subject) setFieldErrors({ ...fieldErrors, subject: "" });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#0c0e12] border text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors ${
                          fieldErrors.subject
                            ? "border-red-500/80 focus:border-red-500"
                            : "border-white/10 focus:border-[#C6FF4D]"
                        }`}
                      />
                      {fieldErrors.subject && (
                        <p className="mt-1.5 text-[11px] font-mono text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {fieldErrors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block font-mono text-xs text-[#A1A1AA] uppercase tracking-wider mb-2"
                      >
                        Message <span className="text-[#C6FF4D]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        disabled={status === "loading"}
                        rows={5}
                        placeholder="Tell me about your project, timeline, engineering role, or idea..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: "" });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#0c0e12] border text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors resize-none ${
                          fieldErrors.message
                            ? "border-red-500/80 focus:border-red-500"
                            : "border-white/10 focus:border-[#C6FF4D]"
                        }`}
                      />
                      {fieldErrors.message && (
                        <p className="mt-1.5 text-[11px] font-mono text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {fieldErrors.message}
                        </p>
                      )}
                    </div>

                    {/* Inline Error Alert with Retry */}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-300 flex items-start gap-3"
                      >
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <div className="font-semibold text-red-200">Delivery Error</div>
                          <div>{errorMessage}</div>
                        </div>
                      </motion.div>
                    )}

                    {/* Actions: Submit Button with animated loader (No external redirects) */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        data-cursor="SEND"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#C6FF4D] hover:bg-[#d5ff7a] text-[#08090B] font-semibold text-sm font-mono tracking-wide transition-all shadow-lg shadow-[#C6FF4D]/20 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-[#08090B]" />
                            <span>Transmitting Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-[#08090B]" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
