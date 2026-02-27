"use client";

import React from "react";
import { useInView } from "@/components/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { chainingText } from "./i18n/chaining";

const stepColors = ["#6A9BCC", "#CB9A76", "#D97757", "#788C5D"];

export default function S3ChainingSection() {
  const { ref, isVisible } = useInView();
  const { ref: conceptRef, isVisible: conceptVisible } = useInView(0.1);
  const { ref: chainRef, isVisible: chainVisible } = useInView(0.1);
  const { ref: whenRef, isVisible: whenVisible } = useInView(0.1);
  const { lang } = useLanguage();
  const t = chainingText[lang];

  return (
    <section
      id="s3-chaining"
      ref={ref}
      className="relative py-32 px-8 lg:px-20"
      style={{ background: "#191919" }}
    >
      {/* Ghost number */}
      <div className="absolute top-20 left-8 lg:left-20 text-[8rem] font-serif font-bold leading-none text-[#CB9A76]/[0.07] select-none pointer-events-none">
        02
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

      {/* Subsection A - Concept */}
      <div ref={conceptRef} className="max-w-7xl mx-auto mb-20">
        <div className={conceptVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CB9A76]" />
            <span className="text-xs uppercase tracking-widest text-[#CB9A76] font-medium">
              {t.conceptLabel}
            </span>
          </div>
        </div>

        <div
          className={`glass-card rounded-2xl p-8 mb-8 ${conceptVisible ? "animate-fade-up stagger-1" : "opacity-0"}`}
          style={{ borderLeft: "3px solid #CB9A76" }}
        >
          <p className="text-xl font-serif font-bold text-[#F4F3EE] mb-3">
            {t.conceptDefinition}
          </p>
        </div>

        <div
          className={`glass-card rounded-2xl p-7 ${conceptVisible ? "animate-fade-up stagger-2" : "opacity-0"}`}
          style={{ borderTop: "2px solid #D97757" }}
        >
          <h4 className="text-sm font-bold text-[#D97757] mb-4">
            {t.conceptWhyTitle}
          </h4>
          <ul className="space-y-3">
            {t.conceptWhyItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D97757] shrink-0" />
                <span className="text-sm text-[#B0AEA5] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Subsection B - Chain Example */}
      <div ref={chainRef} className="max-w-7xl mx-auto mb-20">
        <div className={chainVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6A9BCC]" />
            <span className="text-xs uppercase tracking-widest text-[#6A9BCC] font-medium">
              {t.chainLabel}
            </span>
          </div>
          <p className="text-sm text-[#B0AEA5] leading-relaxed mb-8">
            {t.chainIntro}
          </p>
        </div>

        <div className="space-y-4">
          {t.chainSteps.map((step, i) => {
            const color = stepColors[i];
            return (
              <div
                key={step.num}
                className={`glass-card rounded-2xl p-6 flex items-start gap-5 ${chainVisible ? `animate-fade-up stagger-${i + 1}` : "opacity-0"}`}
              >
                {/* Number badge */}
                <div
                  className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-mono text-sm font-bold"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}40`,
                    color,
                  }}
                >
                  {step.num}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h4
                    className="text-base font-serif font-bold mb-1"
                    style={{ color }}
                  >
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#F4F3EE]/80 font-mono leading-relaxed mb-2">
                    &quot;{step.prompt}&quot;
                  </p>
                  <p className="text-xs text-[#B0AEA5] leading-relaxed">
                    {step.output}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Connecting arrows between steps */}
        <div className="flex justify-center mt-2">
          <p className="text-xs text-[#B0AEA5]/50 tracking-widest uppercase">
            output feeds into next step
          </p>
        </div>
      </div>

      {/* Subsection C - When to Chain */}
      <div ref={whenRef} className="max-w-7xl mx-auto">
        <div className={whenVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#788C5D]" />
            <span className="text-xs uppercase tracking-widest text-[#788C5D] font-medium">
              {t.whenLabel}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Single Prompt column */}
          <div
            className={`glass-card rounded-2xl p-7 ${whenVisible ? "animate-fade-up stagger-1" : "opacity-0"}`}
            style={{ borderTop: "2px solid #B0AEA5" }}
          >
            <h4 className="text-lg font-serif font-bold text-[#F4F3EE] mb-1">
              {t.singlePromptTitle}
            </h4>
            <p className="text-xs uppercase tracking-wider text-[#B0AEA5] mb-4">
              {t.singlePromptSubtitle}
            </p>
            <ul className="space-y-3">
              {t.singlePromptItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B0AEA5] shrink-0" />
                  <span className="text-sm text-[#B0AEA5] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chained Prompts column */}
          <div
            className={`glass-card rounded-2xl p-7 ${whenVisible ? "animate-fade-up stagger-2" : "opacity-0"}`}
            style={{ borderTop: "2px solid #788C5D" }}
          >
            <h4 className="text-lg font-serif font-bold text-[#F4F3EE] mb-1">
              {t.chainedPromptTitle}
            </h4>
            <p className="text-xs uppercase tracking-wider text-[#788C5D] mb-4">
              {t.chainedPromptSubtitle}
            </p>
            <ul className="space-y-3">
              {t.chainedPromptItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#788C5D] shrink-0" />
                  <span className="text-sm text-[#F4F3EE]/80 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
