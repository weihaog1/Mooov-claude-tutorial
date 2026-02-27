"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import GradientText from "@/components/GradientText";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { heroText } from "./i18n/hero";

const promptLines = [
  { text: "system:", color: "#CB9A76" },
  { text: "  You are an expert code reviewer.", color: "#6A9BCC" },
  { text: "  Always check for security issues", color: "#6A9BCC" },
  { text: "  and suggest improvements.", color: "#6A9BCC" },
  { text: "", color: "transparent" },
  { text: "user:", color: "#D97757" },
  { text: "  Review this authentication", color: "#B0AEA5" },
  { text: "  function for vulnerabilities:", color: "#B0AEA5" },
  { text: "", color: "transparent" },
  { text: "  ```python", color: "#788C5D" },
  { text: "  def login(user, pwd):", color: "#F4F3EE" },
  { text: "    return db.query(user, pwd)", color: "#F4F3EE" },
  { text: "  ```", color: "#788C5D" },
];

export default function S3HeroSection() {
  const { lang } = useLanguage();
  const t = heroText[lang];

  return (
    <section
      id="s3-hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ background: "#191919" }}
    >
      <BackgroundBeams className="z-0" />

      {/* Floating gradient blobs */}
      <div
        className="pointer-events-none absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(203,154,118,0.12) 0%, transparent 70%)",
          animation: "floatGlow 8s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] right-[10%] w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(217,119,87,0.08) 0%, transparent 70%)",
          animation: "floatGlow 8s ease-in-out infinite",
          animationDelay: "3s",
        }}
      />

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Left side */}
        <div className="lg:col-span-3">
          {/* Session badge */}
          <div className="inline-block rounded-full border border-[#CB9A76]/30 px-4 py-1.5 mb-8 animate-hero-reveal">
            <span className="text-xs tracking-[0.3em] uppercase text-[#CB9A76]">
              {t.sessionBadge}
            </span>
          </div>

          {/* Main title */}
          <h1 className="font-serif font-black leading-[1.05] text-6xl lg:text-8xl mb-8">
            <span className="block text-[#F4F3EE] animate-hero-reveal stagger-1">
              {t.titleLine1}
            </span>
            <span className="block animate-hero-reveal stagger-2">
              <GradientText
                colors={["#CB9A76", "#D97757", "#C15F3C", "#CB9A76"]}
                animationSpeed={6}
                direction="horizontal"
              >
                {t.titleLine2}
              </GradientText>
            </span>
            <span className="block text-[#F4F3EE] animate-hero-reveal stagger-3">
              {t.titleLine3}
            </span>
          </h1>

          {/* Subtitle */}
          <div className="animate-hero-reveal stagger-4">
            <TextGenerateEffect
              key={lang}
              words={t.subtitle}
              className="font-normal"
              duration={0.4}
            />
          </div>

          {/* Divider */}
          <div
            className="h-[1px] w-24 mt-8 mb-6"
            style={{
              background: "linear-gradient(to right, #D97757, transparent)",
              transformOrigin: "left",
              animation:
                "lineGrow 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both",
            }}
          />

          {/* Meta info */}
          <div className="flex items-center gap-6 animate-fade-up stagger-5">
            <span className="inline-block rounded-full border border-[#D97757]/30 px-3 py-1 text-xs tracking-wider uppercase text-[#D97757]">
              {t.badge1}
            </span>
            <span className="text-sm tracking-[0.2em] uppercase text-[#B0AEA5]">
              {t.badge2}
            </span>
          </div>
        </div>

        {/* Right side - prompt preview card */}
        <div className="lg:col-span-2 hidden lg:block">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="glass-card rounded-2xl p-6 relative"
              style={{
                transform: "perspective(800px) rotateY(-3deg) rotateX(2deg)",
              }}
            >
              {/* Card header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#CB9A76]/10">
                <div className="w-2.5 h-2.5 rounded-full bg-[#C15F3C]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#CB9A76]/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#788C5D]/40" />
                <span className="ml-2 text-xs text-[#B0AEA5]/50 font-mono">
                  prompt.yml
                </span>
              </div>

              {/* Prompt content */}
              <div className="font-mono text-sm leading-relaxed space-y-0.5">
                {promptLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.08, duration: 0.4 }}
                  >
                    {line.text === "" ? (
                      <div className="h-4" />
                    ) : (
                      <div style={{ color: line.color }}>{line.text}</div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Cursor blink */}
              <motion.div
                className="inline-block w-2 h-4 bg-[#CB9A76]/60 mt-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <svg
          className="w-5 h-5"
          style={{
            color: "rgba(203,154,118,0.4)",
            animation: "scrollBounce 2s ease-in-out infinite",
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
