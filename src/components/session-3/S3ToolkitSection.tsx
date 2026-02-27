"use client";

import React from "react";
import { useInView } from "@/components/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { toolkitText } from "./i18n/toolkit";

const cardColors = [
  "#CB9A76",
  "#D97757",
  "#6A9BCC",
  "#788C5D",
  "#C15F3C",
  "#CB9A76",
];

export default function S3ToolkitSection() {
  const { ref, isVisible } = useInView();
  const { ref: gridRef, isVisible: gridVisible } = useInView(0.1);
  const { ref: templatesRef, isVisible: templatesVisible } = useInView(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useInView(0.1);
  const { lang } = useLanguage();
  const t = toolkitText[lang];

  return (
    <section
      id="s3-toolkit"
      ref={ref}
      className="relative py-32 px-8 lg:px-20"
      style={{ background: "#191919" }}
    >
      {/* Ghost number */}
      <div className="absolute top-20 left-8 lg:left-20 text-[8rem] font-serif font-bold leading-none text-[#CB9A76]/[0.07] select-none pointer-events-none">
        06
      </div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
          <h2 className="text-5xl lg:text-7xl font-serif font-bold text-[#F4F3EE] tracking-tight">
            {t.title}
          </h2>
          <p className="text-lg text-[#CB9A76] mt-3 tracking-wider uppercase">
            {t.subtitle}
          </p>
        </div>
        <p
          className={`max-w-2xl mt-6 text-[#B0AEA5] leading-relaxed ${isVisible ? "animate-fade-up stagger-2" : "opacity-0"}`}
        >
          {t.description}
        </p>
      </div>

      {/* Quick Reference Grid */}
      <div ref={gridRef} className="max-w-7xl mx-auto mb-20">
        <div className={gridVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CB9A76]" />
            <span className="text-xs uppercase tracking-widest text-[#CB9A76] font-medium">
              {t.quickRefLabel}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.techniques.map((tech, i) => (
            <div
              key={tech.title}
              className={`glass-card rounded-xl p-5 ${gridVisible ? `animate-fade-up stagger-${i + 1}` : "opacity-0"}`}
              style={{ borderTop: `2px solid ${cardColors[i]}` }}
            >
              <h4
                className="text-sm font-bold mb-2"
                style={{ color: cardColors[i] }}
              >
                {tech.title}
              </h4>
              <p className="text-xs text-[#B0AEA5] leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Prompt Templates */}
      <div ref={templatesRef} className="max-w-7xl mx-auto mb-20">
        <div className={templatesVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D97757]" />
            <span className="text-xs uppercase tracking-widest text-[#D97757] font-medium">
              {t.templatesLabel}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div
            className={templatesVisible ? "animate-fade-up stagger-1" : "opacity-0"}
          >
            <h4 className="text-sm font-bold text-[#CB9A76] mb-3">
              {t.analysisTemplateTitle}
            </h4>
            <div
              className="rounded-xl p-5 font-mono text-xs text-[#B0AEA5] leading-relaxed whitespace-pre-wrap"
              style={{
                background: "#1a1a18",
                border: "1px solid rgba(203, 154, 118, 0.1)",
              }}
            >
              {t.analysisTemplate}
            </div>
          </div>

          <div
            className={templatesVisible ? "animate-fade-up stagger-2" : "opacity-0"}
          >
            <h4 className="text-sm font-bold text-[#D97757] mb-3">
              {t.reviewTemplateTitle}
            </h4>
            <div
              className="rounded-xl p-5 font-mono text-xs text-[#B0AEA5] leading-relaxed whitespace-pre-wrap"
              style={{
                background: "#1a1a18",
                border: "1px solid rgba(203, 154, 118, 0.1)",
              }}
            >
              {t.reviewTemplate}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div ref={ctaRef} className="max-w-7xl mx-auto">
        <div
          className={`rounded-2xl p-8 text-center ${ctaVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{
            border: "1px solid transparent",
            background:
              "linear-gradient(#191919, #191919) padding-box, linear-gradient(135deg, #CB9A76, #D97757, #C15F3C) border-box",
          }}
        >
          <h3 className="text-2xl font-serif font-bold text-[#F4F3EE] mb-3">
            {t.ctaHeading}
          </h3>
          <p className="text-sm text-[#B0AEA5] leading-relaxed max-w-xl mx-auto">
            {t.ctaText}
          </p>
        </div>
      </div>
    </section>
  );
}
