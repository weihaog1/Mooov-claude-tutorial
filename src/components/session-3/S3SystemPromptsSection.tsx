"use client";

import React from "react";
import { useInView } from "@/components/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { systemPromptsText } from "./i18n/systemprompts";

const componentColors = ["#CB9A76", "#D97757", "#6A9BCC", "#788C5D"];

export default function S3SystemPromptsSection() {
  const { ref, isVisible } = useInView();
  const { ref: whatRef, isVisible: whatVisible } = useInView(0.1);
  const { ref: beforeAfterRef, isVisible: beforeAfterVisible } =
    useInView(0.1);
  const { lang } = useLanguage();
  const t = systemPromptsText[lang];

  return (
    <section
      id="s3-system-prompts"
      ref={ref}
      className="relative py-32 px-8 lg:px-20"
      style={{ background: "#191919" }}
    >
      {/* Ghost number */}
      <div className="absolute top-20 left-8 lg:left-20 text-[8rem] font-serif font-bold leading-none text-[#CB9A76]/[0.07] select-none pointer-events-none">
        01
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

      {/* Subsection A - What System Prompts Are */}
      <div ref={whatRef} className="max-w-7xl mx-auto mb-20">
        <div className={whatVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CB9A76]" />
            <span className="text-xs uppercase tracking-widest text-[#CB9A76] font-medium">
              {t.whatLabel}
            </span>
          </div>
        </div>

        <div
          className={`glass-card rounded-2xl p-8 mb-8 ${whatVisible ? "animate-fade-up stagger-1" : "opacity-0"}`}
          style={{ borderLeft: "3px solid #CB9A76" }}
        >
          <p className="text-xl font-serif font-bold text-[#F4F3EE] mb-3">
            {t.whatDefinition}
          </p>
          <p className="text-sm text-[#B0AEA5] leading-relaxed">
            {t.whatExplanation}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.components.map((comp, i) => (
            <div
              key={comp.title}
              className={`glass-card rounded-xl p-5 ${whatVisible ? `animate-fade-up stagger-${i + 2}` : "opacity-0"}`}
              style={{ borderTop: `2px solid ${componentColors[i]}` }}
            >
              <h4
                className="text-sm font-bold mb-2"
                style={{ color: componentColors[i] }}
              >
                {comp.title}
              </h4>
              <p className="text-xs text-[#B0AEA5] leading-relaxed">
                {comp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subsection B - Before/After */}
      <div ref={beforeAfterRef} className="max-w-7xl mx-auto">
        <div
          className={beforeAfterVisible ? "animate-fade-up" : "opacity-0"}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D97757]" />
            <span className="text-xs uppercase tracking-widest text-[#D97757] font-medium">
              {t.beforeAfterLabel}
            </span>
          </div>
        </div>

        {/* Without vs With comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div
            className={`glass-card rounded-2xl p-7 opacity-80 ${beforeAfterVisible ? "animate-fade-up stagger-1" : "opacity-0"}`}
            style={{ borderTop: "2px solid #C15F3C" }}
          >
            <h4 className="text-lg font-serif font-bold text-[#F4F3EE] mb-4">
              {t.withoutTitle}
            </h4>
            <ul className="space-y-3">
              {t.withoutBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C15F3C] shrink-0" />
                  <span className="text-sm text-[#B0AEA5] leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`glass-card rounded-2xl p-7 ${beforeAfterVisible ? "animate-fade-up stagger-2" : "opacity-0"}`}
            style={{ borderTop: "2px solid #788C5D" }}
          >
            <h4 className="text-lg font-serif font-bold text-[#F4F3EE] mb-4">
              {t.withTitle}
            </h4>
            <ul className="space-y-3">
              {t.withBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#788C5D] shrink-0" />
                  <span className="text-sm text-[#F4F3EE]/80 leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Code example */}
        <div
          className={`glass-card rounded-2xl p-8 ${beforeAfterVisible ? "animate-fade-up stagger-3" : "opacity-0"}`}
          style={{ borderLeft: "3px solid #6A9BCC" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{ background: "#6A9BCC15", color: "#6A9BCC" }}
            >
              {"<>"}
            </span>
            <span className="text-sm font-medium text-[#F4F3EE]">
              {t.codeExampleLabel}
            </span>
          </div>
          <pre className="text-sm text-[#B0AEA5] leading-relaxed font-mono whitespace-pre-wrap overflow-x-auto">
            {t.codeExample}
          </pre>
        </div>
      </div>
    </section>
  );
}
