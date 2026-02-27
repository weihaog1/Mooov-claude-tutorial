"use client";

import React from "react";
import { useInView } from "@/components/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { contextText } from "./i18n/context";

const cardColors = ["#CB9A76", "#D97757", "#6A9BCC", "#788C5D"];

const codeExample = `<context>
We are building a React dashboard for financial data.
Tech stack: Next.js 14, TypeScript, Tailwind CSS, Recharts.
</context>

<examples>
// Example component structure we follow:
export function MetricCard({ title, value, trend }) { ... }
</examples>

<instructions>
Create a new chart component that displays monthly revenue.
Follow the existing component patterns shown in examples.
</instructions>`;

export default function S3ContextSection() {
  const { ref, isVisible } = useInView();
  const { ref: structRef, isVisible: structVisible } = useInView(0.1);
  const { ref: compRef, isVisible: compVisible } = useInView(0.1);
  const { lang } = useLanguage();
  const t = contextText[lang];

  return (
    <section
      id="s3-context"
      ref={ref}
      className="relative py-32 px-8 lg:px-20"
      style={{ background: "#191919" }}
    >
      {/* Ghost number */}
      <div className="absolute top-20 left-8 lg:left-20 text-[8rem] font-serif font-bold leading-none text-[#CB9A76]/[0.07] select-none pointer-events-none">
        03
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

      {/* Subsection A - Context as Strategy */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className={isVisible ? "animate-fade-up stagger-3" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CB9A76]" />
            <span className="text-xs uppercase tracking-widest text-[#CB9A76] font-medium">
              {t.strategyLabel}
            </span>
          </div>
        </div>

        <div
          className={`glass-card rounded-2xl p-8 ${isVisible ? "animate-fade-up stagger-4" : "opacity-0"}`}
          style={{ borderLeft: "3px solid #CB9A76" }}
        >
          <p className="text-xl font-serif font-bold text-[#F4F3EE] mb-3">
            {t.strategyDefinition}
          </p>
          <p className="text-sm text-[#B0AEA5] leading-relaxed">
            {t.strategyInsight}
          </p>
        </div>
      </div>

      {/* Subsection B - Structure and Include */}
      <div ref={structRef} className="max-w-7xl mx-auto mb-20">
        <div className={structVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D97757]" />
            <span className="text-xs uppercase tracking-widest text-[#D97757] font-medium">
              {t.structureLabel}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {t.structureCards.map((card, i) => (
            <div
              key={card.title}
              className={`glass-card rounded-xl p-5 ${structVisible ? `animate-fade-up stagger-${i + 1}` : "opacity-0"}`}
              style={{ borderTop: `2px solid ${cardColors[i]}` }}
            >
              <h4
                className="text-sm font-bold mb-2"
                style={{ color: cardColors[i] }}
              >
                {card.title}
              </h4>
              <p className="text-xs text-[#B0AEA5] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Code block card */}
        <div
          className={`rounded-2xl p-6 ${structVisible ? "animate-fade-up stagger-5" : "opacity-0"}`}
          style={{
            background: "#1a1a18",
            border: "1px solid rgba(203,154,118,0.1)",
          }}
        >
          <p className="text-xs uppercase tracking-widest text-[#CB9A76] font-medium mb-4">
            {t.codeBlockTitle}
          </p>
          <pre className="font-mono text-xs text-[#B0AEA5] leading-relaxed whitespace-pre-wrap overflow-x-auto">
            {codeExample}
          </pre>
        </div>
      </div>

      {/* Subsection C - Good vs Bad */}
      <div ref={compRef} className="max-w-7xl mx-auto">
        <div className={compVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6A9BCC]" />
            <span className="text-xs uppercase tracking-widest text-[#6A9BCC] font-medium">
              {t.comparisonLabel}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Bad context */}
          <div
            className={`glass-card rounded-2xl p-7 ${compVisible ? "animate-fade-up stagger-1" : "opacity-0"}`}
            style={{ borderLeft: "1px solid #C15F3C" }}
          >
            <h4 className="text-lg font-serif font-bold text-[#C15F3C] mb-4">
              {t.badLabel}
            </h4>
            <ul className="space-y-3">
              {t.badItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C15F3C] shrink-0" />
                  <span className="text-sm text-[#B0AEA5] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Good context */}
          <div
            className={`glass-card rounded-2xl p-7 ${compVisible ? "animate-fade-up stagger-2" : "opacity-0"}`}
            style={{ borderLeft: "1px solid #788C5D" }}
          >
            <h4 className="text-lg font-serif font-bold text-[#788C5D] mb-4">
              {t.goodLabel}
            </h4>
            <ul className="space-y-3">
              {t.goodItems.map((item) => (
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
