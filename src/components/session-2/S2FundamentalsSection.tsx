"use client";

import React from "react";
import { useInView } from "@/components/useInView";
import { BentoGrid } from "@/components/ui/bento-grid";
import { useLanguage } from "@/contexts/LanguageContext";
import { fundamentalsText } from "./i18n/fundamentals";
import {
  SkillStructureCard,
  ProgressiveDisclosureCard,
  ComposabilityCard,
} from "./S2FundamentalsCards";

const useCaseColors = ["#CB9A76", "#D97757", "#6A9BCC", "#788C5D"];
const personaColors = ["#CB9A76", "#D97757", "#6A9BCC"];
const pathColors = ["#CB9A76", "#6A9BCC"];
const serviceColors = ["#CB9A76", "#D97757", "#6A9BCC", "#788C5D"];

export default function S2FundamentalsSection() {
  const { ref, isVisible } = useInView();
  const { ref: coreRef, isVisible: coreVisible } = useInView(0.1);
  const { ref: whoRef, isVisible: whoVisible } = useInView(0.1);
  const { ref: pathsRef, isVisible: pathsVisible } = useInView(0.1);
  const { ref: mcpIntroRef, isVisible: mcpIntroVisible } = useInView(0.1);
  const { ref: mcpRef, isVisible: mcpVisible } = useInView(0.1);
  const { lang } = useLanguage();
  const t = fundamentalsText[lang];

  return (
    <section
      id="s2-fundamentals"
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

      {/* The Core Idea */}
      <div ref={coreRef} className="max-w-7xl mx-auto mb-20">
        <div className={coreVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CB9A76]" />
            <span className="text-xs uppercase tracking-widest text-[#CB9A76] font-medium">
              {t.coreIdeaLabel}
            </span>
          </div>
        </div>

        <div
          className={`glass-card rounded-2xl p-8 mb-8 ${coreVisible ? "animate-fade-up stagger-1" : "opacity-0"}`}
          style={{ borderLeft: "3px solid #CB9A76" }}
        >
          <p className="text-xl font-serif font-bold text-[#F4F3EE] mb-3">
            {t.coreIdeaDefinition}
          </p>
          <p className="text-sm text-[#B0AEA5] leading-relaxed">
            {t.coreIdeaExplanation}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.useCases.map((useCase, i) => (
            <div
              key={useCase.title}
              className={`glass-card rounded-xl p-5 ${coreVisible ? `animate-fade-up stagger-${i + 2}` : "opacity-0"}`}
              style={{ borderTop: `2px solid ${useCaseColors[i]}` }}
            >
              <h4
                className="text-sm font-bold mb-2"
                style={{ color: useCaseColors[i] }}
              >
                {useCase.title}
              </h4>
              <p className="text-xs text-[#B0AEA5] leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bento grid - 3 cards */}
      <BentoGrid className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:auto-rows-[20rem] md:grid-cols-3">
        <SkillStructureCard isVisible={isVisible} />
        <ProgressiveDisclosureCard isVisible={isVisible} />
        <ComposabilityCard isVisible={isVisible} />
      </BentoGrid>

      {/* Who This Is For */}
      <div ref={whoRef} className="max-w-7xl mx-auto mt-24">
        <div className={whoVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CB9A76]" />
            <span className="text-xs uppercase tracking-widest text-[#CB9A76] font-medium">
              {t.whoSublabel}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.personas.map((persona, i) => (
            <div
              key={persona.title}
              className={`glass-card rounded-2xl p-7 ${whoVisible ? `animate-fade-up stagger-${i + 2}` : "opacity-0"}`}
              style={{ borderTop: `2px solid ${personaColors[i]}` }}
            >
              <h4 className="text-lg font-serif font-bold text-[#F4F3EE] mb-2">
                {persona.title}
              </h4>
              <p className="text-sm text-[#B0AEA5] leading-relaxed">
                {persona.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Two Paths */}
      <div ref={pathsRef} className="max-w-7xl mx-auto mt-24">
        <div className={pathsVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D97757]" />
            <span className="text-xs uppercase tracking-widest text-[#D97757] font-medium">
              {t.pathsSublabel}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.twoPaths.map((path, i) => (
            <div
              key={path.title}
              className={`glass-card rounded-2xl p-7 ${pathsVisible ? `animate-fade-up stagger-${i + 2}` : "opacity-0"}`}
              style={{ borderLeft: `3px solid ${pathColors[i]}` }}
            >
              <h4 className="text-lg font-serif font-bold text-[#F4F3EE] mb-2">
                {path.title}
              </h4>
              <p className="text-sm text-[#B0AEA5] leading-relaxed">
                {path.description}
              </p>
            </div>
          ))}
        </div>

        <p
          className={`text-sm text-[#B0AEA5] leading-relaxed mt-6 ${pathsVisible ? "animate-fade-up stagger-4" : "opacity-0"}`}
        >
          {t.pathsNote}
        </p>

        <div
          className={`glass-card rounded-2xl p-6 mt-6 ${pathsVisible ? "animate-fade-up stagger-5" : "opacity-0"}`}
          style={{ borderLeft: "3px solid #788C5D" }}
        >
          <p className="text-sm text-[#F4F3EE] leading-relaxed">
            {t.pathsCallout}
          </p>
        </div>
      </div>

      {/* What is MCP? */}
      <div ref={mcpIntroRef} className="max-w-7xl mx-auto mt-24">
        <div className={mcpIntroVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6A9BCC]" />
            <span className="text-xs uppercase tracking-widest text-[#6A9BCC] font-medium">
              {t.whatIsMcpLabel}
            </span>
          </div>
        </div>

        <div
          className={`glass-card rounded-2xl p-8 ${mcpIntroVisible ? "animate-fade-up stagger-1" : "opacity-0"}`}
          style={{ borderTop: "2px solid #6A9BCC" }}
        >
          <h3 className="text-2xl font-serif font-bold text-[#F4F3EE] mb-2">
            {t.whatIsMcpTitle}
          </h3>
          <p className="text-sm text-[#B0AEA5] leading-relaxed mb-6">
            {t.whatIsMcpDesc}
          </p>

          {/* Service icons */}
          <div className="flex flex-wrap gap-4 mb-6">
            {t.mcpServices.map((service, i) => (
              <div
                key={service.label}
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{
                  background: `${serviceColors[i]}0a`,
                  border: `1px solid ${serviceColors[i]}25`,
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{
                    background: `${serviceColors[i]}15`,
                    color: serviceColors[i],
                  }}
                >
                  {service.label.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F4F3EE]">
                    {service.label}
                  </p>
                  <p className="text-[10px] text-[#B0AEA5]">
                    {service.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#B0AEA5] leading-relaxed">
            {t.whatIsMcpExplanation}
          </p>
        </div>
      </div>

      {/* MCP + Skills Together */}
      <div ref={mcpRef} className="max-w-7xl mx-auto mt-16">
        <div className={mcpVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CB9A76]" />
            <span className="text-xs uppercase tracking-widest text-[#CB9A76] font-medium">
              {t.mcpSkillsLabel}
            </span>
          </div>
        </div>

        {/* Kitchen analogy */}
        <div
          className={`glass-card rounded-2xl p-8 mb-8 ${mcpVisible ? "animate-fade-up stagger-1" : "opacity-0"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl border border-[#6A9BCC]/30 bg-[#6A9BCC]/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#6A9BCC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.11A2 2 0 015 10.225V6.82a2 2 0 011.036-1.753l5.384-3.11a2 2 0 011.96 0l5.384 3.11A2 2 0 0119.8 6.82v3.405a2 2 0 01-1.036 1.753l-5.384 3.11a2 2 0 01-1.96 0z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-serif font-bold text-[#6A9BCC]">
                  {t.kitchenMcp}
                </p>
                <p className="text-xs uppercase tracking-wider text-[#B0AEA5] mb-2">
                  {t.kitchenMcpRole}
                </p>
                <p className="text-sm text-[#B0AEA5] leading-relaxed">
                  {t.kitchenMcpDesc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl border border-[#CB9A76]/30 bg-[#CB9A76]/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#CB9A76]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-serif font-bold text-[#CB9A76]">
                  {t.kitchenSkills}
                </p>
                <p className="text-xs uppercase tracking-wider text-[#B0AEA5] mb-2">
                  {t.kitchenSkillsRole}
                </p>
                <p className="text-sm text-[#B0AEA5] leading-relaxed">
                  {t.kitchenSkillsDesc}
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-[#F4F3EE]/70 leading-relaxed mt-6 pt-6 border-t border-[#F4F3EE]/5">
            {t.kitchenSummary}
          </p>
        </div>

        {/* Comparison table */}
        <div className={`glass-card rounded-2xl overflow-hidden ${mcpVisible ? "animate-fade-up stagger-2" : "opacity-0"}`}>
          <div className="grid grid-cols-2">
            <div className="px-6 py-4 border-b border-[#F4F3EE]/5">
              <span className="text-xs uppercase tracking-widest text-[#6A9BCC] font-medium">
                {t.mcpConnectivity}
              </span>
            </div>
            <div className="px-6 py-4 border-b border-[#F4F3EE]/5">
              <span className="text-xs uppercase tracking-widest text-[#CB9A76] font-medium">
                {t.skillsKnowledge}
              </span>
            </div>
            {t.mcpVsSkillsRows.map((row, i) => (
              <React.Fragment key={i}>
                <div className="px-6 py-4 border-b border-[#F4F3EE]/5">
                  <p className="text-sm text-[#B0AEA5] leading-relaxed">{row.mcp}</p>
                </div>
                <div className="px-6 py-4 border-b border-[#F4F3EE]/5">
                  <p className="text-sm text-[#F4F3EE]/80 leading-relaxed">{row.skills}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Without vs With Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          <div
            className={`glass-card rounded-2xl p-7 opacity-80 ${mcpVisible ? "animate-fade-up stagger-3" : "opacity-0"}`}
            style={{ borderTop: "2px solid #C15F3C" }}
          >
            <h4 className="text-lg font-serif font-bold text-[#F4F3EE] mb-4">
              {t.withoutSkillsTitle}
            </h4>
            <ul className="space-y-3">
              {t.withoutSkillsBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C15F3C] shrink-0" />
                  <span className="text-sm text-[#B0AEA5] leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`glass-card rounded-2xl p-7 ${mcpVisible ? "animate-fade-up stagger-4" : "opacity-0"}`}
            style={{ borderTop: "2px solid #788C5D" }}
          >
            <h4 className="text-lg font-serif font-bold text-[#F4F3EE] mb-4">
              {t.withSkillsTitle}
            </h4>
            <ul className="space-y-3">
              {t.withSkillsBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#788C5D] shrink-0" />
                  <span className="text-sm text-[#F4F3EE]/80 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
