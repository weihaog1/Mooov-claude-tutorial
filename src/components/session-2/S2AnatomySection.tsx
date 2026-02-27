"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "@/components/useInView";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { anatomyText } from "./i18n/anatomy";
import { frontmatterLines, instructionLines } from "./anatomyData";
import { renderCodeBlock } from "./renderCodeBlock";

const fieldMeta = [
  { name: "name" as const, accent: "#CB9A76", required: true },
  { name: "description" as const, accent: "#D97757", required: true },
  { name: "license" as const, accent: "#6A9BCC", required: false },
  { name: "compatibility" as const, accent: "#C15F3C", required: false },
  { name: "metadata" as const, accent: "#788C5D", required: false },
];

const namingRuleIcons = [true, false, true];

export default function S2AnatomySection() {
  const { lang } = useLanguage();
  const t = anatomyText[lang];
  const { ref, isVisible } = useInView();
  const { ref: panelRef, isVisible: panelVisible } = useInView(0.1);
  const { ref: rulesRef, isVisible: rulesVisible } = useInView(0.1);
  const { ref: descRef, isVisible: descVisible } = useInView(0.1);
  const { ref: secRef, isVisible: secVisible } = useInView(0.1);
  const [activeCodeTab, setActiveCodeTab] = useState<"frontmatter" | "instructions">("frontmatter");

  return (
    <section
      id="s2-anatomy"
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
          className={`max-w-2xl mt-6 text-[#B0AEA5] leading-relaxed ${
            isVisible ? "animate-fade-up stagger-2" : "opacity-0"
          }`}
        >
          {t.description}
        </p>
      </div>

      {/* Split panel */}
      <div
        ref={panelRef}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8"
      >
        {/* Left panel - Code block */}
        <div
          className={`lg:col-span-7 ${
            panelVisible ? "animate-slide-left stagger-1" : "opacity-0"
          }`}
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#1a1a18",
              border: "1px solid rgba(203,154,118,0.1)",
            }}
          >
            {/* Tab bar */}
            <div
              className="flex"
              style={{
                background: "#151513",
                borderBottom: "1px solid rgba(203,154,118,0.1)",
              }}
            >
              {(["frontmatter", "instructions"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCodeTab(tab)}
                  className="relative px-5 py-3 text-xs font-mono transition-colors"
                  style={{
                    color:
                      activeCodeTab === tab
                        ? "#F4F3EE"
                        : "rgba(176,174,165,0.5)",
                  }}
                >
                  {tab === "frontmatter" ? t.frontmatterTab : t.instructionsTab}
                  {activeCodeTab === tab && (
                    <motion.div
                      layoutId="activeCodeTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ background: "#CB9A76" }}
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        duration: 0.4,
                      }}
                    />
                  )}
                </button>
              ))}
              <div className="flex-1" />
              <div className="flex items-center gap-1.5 pr-4">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "rgba(203,154,118,0.2)" }}
                />
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "rgba(203,154,118,0.15)" }}
                />
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "rgba(203,154,118,0.1)" }}
                />
              </div>
            </div>

            {/* Code content */}
            <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCodeTab}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeCodeTab === "frontmatter"
                    ? renderCodeBlock(frontmatterLines)
                    : renderCodeBlock(instructionLines)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right panel - Field cards */}
        <div className="lg:col-span-5 space-y-3">
          <p
            className={`text-xs uppercase tracking-wider text-[#B0AEA5] mb-4 ${
              panelVisible ? "animate-fade-up stagger-1" : "opacity-0"
            }`}
          >
            {t.keyFieldsLabel}
          </p>
          {fieldMeta.map((field, i) => {
            const fieldT = t.fields[field.name];
            return (
              <div
                key={field.name}
                className={`glass-card rounded-xl overflow-hidden flex ${
                  panelVisible
                    ? `animate-fade-up stagger-${i + 2}`
                    : "opacity-0"
                }`}
              >
                <div
                  className="w-1 shrink-0"
                  style={{ background: field.accent }}
                />
                <div className="px-4 py-3.5">
                  <div className="flex items-center gap-2 mb-1">
                    <p
                      className="font-mono text-sm font-bold"
                      style={{ color: field.accent }}
                    >
                      {field.name}
                    </p>
                    <span
                      className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full"
                      style={
                        field.required
                          ? {
                              background: "rgba(120,140,93,0.15)",
                              color: "#788C5D",
                              border: "1px solid rgba(120,140,93,0.25)",
                            }
                          : {
                              background: "rgba(176,174,165,0.1)",
                              color: "#B0AEA5",
                              border: "1px solid rgba(176,174,165,0.15)",
                            }
                      }
                    >
                      {field.required ? t.requiredLabel : t.optionalLabel}
                    </span>
                  </div>
                  <p className="text-xs text-[#B0AEA5] mt-1 leading-relaxed">
                    {fieldT.description}
                  </p>
                  {"when" in fieldT && (
                    <p className="text-xs text-[#CB9A76]/70 mt-1.5 leading-relaxed italic">
                      {t.addWhenPrefix} {fieldT.when}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Naming Rules bar */}
      <div ref={rulesRef} className="max-w-7xl mx-auto mt-10">
        <div
          className={`glass-card rounded-2xl px-7 py-5 flex flex-wrap items-center gap-6 ${
            rulesVisible ? "animate-fade-up stagger-1" : "opacity-0"
          }`}
        >
          <p className="text-xs uppercase tracking-wider text-[#CB9A76] font-medium">
            {t.namingRulesLabel}
          </p>
          <div className="h-4 w-px bg-[#CB9A76]/20 hidden sm:block" />
          {t.namingRules.map((ruleText, i) => (
            <div key={ruleText} className="flex items-center gap-2">
              {namingRuleIcons[i] ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7L6 10L11 4" stroke="#788C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M4 4L10 10M10 4L4 10" stroke="#C15F3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              <span className="text-sm text-[#F4F3EE]/70">{ruleText}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Good vs Bad Descriptions */}
      <div ref={descRef} className="max-w-7xl mx-auto mt-20">
        {/* Subsection label */}
        <div
          className={cn(
            "flex items-center gap-3 mb-6",
            descVisible ? "animate-fade-up" : "opacity-0"
          )}
        >
          <span className="h-3 w-3 rounded-full bg-[#D97757]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#D97757] font-medium">
            {t.descFieldSublabel}
          </span>
        </div>

        <p
          className={cn(
            "max-w-3xl text-[#B0AEA5] leading-relaxed mb-8",
            descVisible ? "animate-fade-up stagger-1" : "opacity-0"
          )}
        >
          {t.descFieldExplanation}
        </p>

        {/* Formula */}
        <div
          className={cn(
            "glass-card rounded-2xl px-7 py-5 mb-10",
            descVisible ? "animate-fade-up stagger-2" : "opacity-0"
          )}
        >
          <p className="text-xs uppercase tracking-wider text-[#B0AEA5] mb-3">
            {t.structureLabel}
          </p>
          <p className="font-mono text-base text-[#F4F3EE]">
            <span className="text-[#CB9A76]">[</span>{t.whatItDoes}
            <span className="text-[#CB9A76]">]</span>
            <span className="text-[#D97757] mx-2">+</span>
            <span className="text-[#CB9A76]">[</span>{t.whenToUse}
            <span className="text-[#CB9A76]">]</span>
            <span className="text-[#D97757] mx-2">+</span>
            <span className="text-[#CB9A76]">[</span>{t.keyCapabilities}
            <span className="text-[#CB9A76]">]</span>
          </p>
        </div>

        {/* Good / Bad grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Good examples */}
          <div>
            <p
              className={cn(
                "text-xs uppercase tracking-wider text-[#788C5D] mb-4 font-medium",
                descVisible ? "animate-fade-up stagger-3" : "opacity-0"
              )}
            >
              {t.goodLabel}
            </p>
            <div className="space-y-3">
              {t.goodExamples.map((ex, i) => (
                <div
                  key={ex.label}
                  className={cn(
                    "glass-card rounded-xl overflow-hidden flex",
                    descVisible
                      ? `animate-fade-up stagger-${i + 4}`
                      : "opacity-0"
                  )}
                >
                  <div
                    className="w-1 shrink-0"
                    style={{ background: "#788C5D" }}
                  />
                  <div className="px-4 py-3.5">
                    <p className="text-sm font-bold text-[#F4F3EE] mb-1.5">
                      {ex.label}
                    </p>
                    <p className="font-mono text-xs leading-relaxed">
                      <span className="text-[#CB9A76]">description: </span>
                      <span className="text-[#6A9BCC]">{ex.value}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bad examples */}
          <div>
            <p
              className={cn(
                "text-xs uppercase tracking-wider text-[#C15F3C] mb-4 font-medium",
                descVisible ? "animate-fade-up stagger-3" : "opacity-0"
              )}
            >
              {t.badLabel}
            </p>
            <div className="space-y-3">
              {t.badExamples.map((ex, i) => (
                <div
                  key={ex.label}
                  className={cn(
                    "glass-card rounded-xl overflow-hidden flex",
                    descVisible
                      ? `animate-fade-up stagger-${i + 4}`
                      : "opacity-0"
                  )}
                >
                  <div
                    className="w-1 shrink-0"
                    style={{ background: "#C15F3C" }}
                  />
                  <div className="px-4 py-3.5">
                    <p className="text-sm font-bold text-[#F4F3EE] mb-1.5">
                      {ex.label}
                    </p>
                    <p className="font-mono text-xs leading-relaxed">
                      <span className="text-[#CB9A76]">description: </span>
                      <span className="text-[#C15F3C]">{ex.value}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Security Restrictions */}
      <div ref={secRef} className="max-w-7xl mx-auto mt-20">
        {/* Subsection label */}
        <div
          className={cn(
            "flex items-center gap-3 mb-6",
            secVisible ? "animate-fade-up" : "opacity-0"
          )}
        >
          <span className="h-3 w-3 rounded-full bg-[#C15F3C]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#C15F3C] font-medium">
            {t.securitySublabel}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Forbidden */}
          <div
            className={cn(
              "glass-card rounded-2xl p-7",
              secVisible ? "animate-fade-up stagger-1" : "opacity-0"
            )}
          >
            <p className="text-sm font-bold text-[#C15F3C] mb-4">
              {t.forbiddenTitle}
            </p>
            <div className="space-y-4">
              {t.forbiddenItems.map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="mt-0.5 shrink-0"
                  >
                    <path
                      d="M4 4L10 10M10 4L4 10"
                      stroke="#C15F3C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <p className="text-sm text-[#F4F3EE]">{item.text}</p>
                    <p className="text-xs text-[#B0AEA5] mt-0.5">
                      {item.why}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-5 pt-4"
              style={{ borderTop: "1px solid rgba(193,95,60,0.15)" }}
            >
              <p className="text-xs text-[#B0AEA5] leading-relaxed">
                {t.forbiddenNote}
              </p>
            </div>
          </div>

          {/* Right - Allowed */}
          <div
            className={cn(
              "glass-card rounded-2xl p-7",
              secVisible ? "animate-fade-up stagger-2" : "opacity-0"
            )}
          >
            <p className="text-sm font-bold text-[#788C5D] mb-4">
              {t.allowedTitle}
            </p>
            <div className="space-y-3">
              {t.allowedItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M3 7L6 10L11 4"
                      stroke="#788C5D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm text-[#F4F3EE]/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
