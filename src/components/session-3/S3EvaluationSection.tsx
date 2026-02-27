"use client";

import React from "react";
import { useInView } from "@/components/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { evaluationText } from "./i18n/evaluation";

const failureModeColors = ["#C15F3C", "#D97757", "#6A9BCC", "#CB9A76"];

export default function S3EvaluationSection() {
  const { ref, isVisible } = useInView();
  const { ref: failRef, isVisible: failVisible } = useInView(0.1);
  const { ref: refineRef, isVisible: refineVisible } = useInView(0.1);
  const { ref: rubricRef, isVisible: rubricVisible } = useInView(0.1);
  const { lang } = useLanguage();
  const t = evaluationText[lang];

  return (
    <section
      id="s3-evaluation"
      ref={ref}
      className="relative py-32 px-8 lg:px-20"
      style={{ background: "#191919" }}
    >
      {/* Ghost number */}
      <div className="absolute top-20 left-8 lg:left-20 text-[8rem] font-serif font-bold leading-none text-[#CB9A76]/[0.07] select-none pointer-events-none">
        04
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

      {/* Subsection A - Common Failure Modes */}
      <div ref={failRef} className="max-w-7xl mx-auto mb-24">
        <div className={failVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C15F3C]" />
            <span className="text-xs uppercase tracking-widest text-[#C15F3C] font-medium">
              {t.failureModesLabel}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {t.failureModes.map((mode, i) => (
            <div
              key={mode.title}
              className={`glass-card rounded-2xl p-7 ${failVisible ? `animate-fade-up stagger-${i + 1}` : "opacity-0"}`}
              style={{ borderTop: `2px solid ${failureModeColors[i]}` }}
            >
              <h4
                className="text-lg font-serif font-bold mb-2"
                style={{ color: failureModeColors[i] }}
              >
                {mode.title}
              </h4>
              <p className="text-sm text-[#B0AEA5] leading-relaxed mb-3">
                {mode.description}
              </p>
              <p
                className="text-xs font-medium leading-relaxed"
                style={{ color: failureModeColors[i] }}
              >
                {mode.fix}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subsection B - Iterative Refinement */}
      <div ref={refineRef} className="max-w-7xl mx-auto mb-24">
        <div className={refineVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D97757]" />
            <span className="text-xs uppercase tracking-widest text-[#D97757] font-medium">
              {t.refinementLabel}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {t.refinementSteps.map((step, i) => (
            <div
              key={step.num}
              className={`glass-card rounded-xl p-5 flex items-start gap-5 ${refineVisible ? `animate-fade-up stagger-${i + 1}` : "opacity-0"}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#D97757]/10 border border-[#D97757]/20 flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-[#D97757] font-mono">
                  {step.num}
                </span>
              </div>
              <div>
                <h4 className="text-base font-serif font-bold text-[#F4F3EE] mb-1">
                  {step.title}
                </h4>
                <p className="text-sm text-[#B0AEA5] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`glass-card rounded-2xl p-6 mt-6 ${refineVisible ? "animate-fade-up stagger-6" : "opacity-0"}`}
          style={{ borderLeft: "3px solid #D97757" }}
        >
          <p className="text-sm text-[#F4F3EE] leading-relaxed">
            {t.refinementCallout}
          </p>
        </div>
      </div>

      {/* Subsection C - Building Rubrics */}
      <div ref={rubricRef} className="max-w-7xl mx-auto">
        <div className={rubricVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#788C5D]" />
            <span className="text-xs uppercase tracking-widest text-[#788C5D] font-medium">
              {t.rubricsLabel}
            </span>
          </div>
          <p className="text-sm text-[#B0AEA5] leading-relaxed mb-8 max-w-2xl">
            {t.rubricsDescription}
          </p>
        </div>

        <div
          className={`glass-card rounded-2xl p-8 ${rubricVisible ? "animate-fade-up stagger-1" : "opacity-0"}`}
          style={{ borderTop: "2px solid #788C5D" }}
        >
          <div className="space-y-5">
            {t.rubricItems.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-start gap-3 ${rubricVisible ? `animate-fade-up stagger-${i + 2}` : "opacity-0"}`}
              >
                <span className="mt-0.5 w-4 h-4 rounded border border-[#788C5D]/40 bg-[#788C5D]/10 shrink-0" />
                <div>
                  <span className="text-sm font-bold text-[#F4F3EE]">
                    {item.label}
                  </span>
                  <span className="text-sm text-[#B0AEA5] ml-2">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
