"use client";

import { useInView } from "@/components/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { patternsText } from "./i18n/patterns";

const categoryColors = ["#CB9A76", "#D97757", "#6A9BCC"];

export default function S2PatternsSection() {
  const { ref, isVisible } = useInView(0.02);
  const { ref: approachRef, isVisible: approachVisible } = useInView(0.1);
  const { ref: catRef, isVisible: catVisible } = useInView(0.1);
  const { lang } = useLanguage();
  const t = patternsText[lang];

  return (
    <section
      id="s2-patterns"
      ref={ref}
      className="relative py-32 px-8 lg:px-20"
      style={{ background: "#191919" }}
    >
      {/* Ghost number */}
      <div className="absolute top-20 left-8 lg:left-20 text-[8rem] font-serif font-bold leading-none text-[#CB9A76]/[0.07] select-none pointer-events-none">
        05
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
          className={cn(
            "max-w-2xl mt-6 text-[#B0AEA5] leading-relaxed",
            isVisible ? "animate-fade-up stagger-2" : "opacity-0"
          )}
        >
          {t.description}
        </p>
      </div>

      {/* Choosing Your Approach */}
      <div ref={approachRef} className="max-w-7xl mx-auto mb-24">
        <div
          className={cn(
            "flex items-center gap-3 mb-8",
            approachVisible ? "animate-fade-up" : "opacity-0"
          )}
        >
          <span className="h-3 w-3 rounded-full bg-[#CB9A76]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[rgba(244,243,238,0.5)] font-medium">
            {t.approachSublabel}
          </span>
        </div>

        <p
          className={cn(
            "max-w-3xl text-[#B0AEA5] leading-relaxed mb-8",
            approachVisible ? "animate-fade-up stagger-1" : "opacity-0"
          )}
        >
          {t.approachAnalogy}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className={cn(
              "glass-card rounded-2xl p-7",
              approachVisible ? "animate-fade-up stagger-2" : "opacity-0"
            )}
            style={{ borderTop: "3px solid #CB9A76" }}
          >
            <h4 className="text-base font-bold text-[#F4F3EE]">
              {t.problemFirstTitle}
            </h4>
            <p className="text-sm text-[#B0AEA5] mt-3 leading-relaxed">
              {t.problemFirstDesc}
            </p>
          </div>
          <div
            className={cn(
              "glass-card rounded-2xl p-7",
              approachVisible ? "animate-fade-up stagger-3" : "opacity-0"
            )}
            style={{ borderTop: "3px solid #6A9BCC" }}
          >
            <h4 className="text-base font-bold text-[#F4F3EE]">
              {t.toolFirstTitle}
            </h4>
            <p className="text-sm text-[#B0AEA5] mt-3 leading-relaxed">
              {t.toolFirstDesc}
            </p>
          </div>
        </div>

        <p
          className={cn(
            "text-sm text-[#B0AEA5] mt-6",
            approachVisible ? "animate-fade-up stagger-4" : "opacity-0"
          )}
        >
          {t.approachNote}
        </p>
      </div>

      {/* Categories intro */}
      <div className="max-w-7xl mx-auto mb-12">
        <p
          className={cn(
            "max-w-3xl text-[#B0AEA5] leading-relaxed",
            isVisible ? "animate-fade-up stagger-3" : "opacity-0"
          )}
        >
          {t.categoriesIntro}
        </p>
      </div>

      {/* Category cards */}
      <div ref={catRef} className="max-w-7xl mx-auto space-y-6">
        {t.categoryNames.map((name, i) => (
          <div
            key={i}
            className={cn(
              "glass-card rounded-2xl p-7",
              catVisible
                ? `animate-fade-up stagger-${i + 1}`
                : "opacity-0"
            )}
            style={{ borderTop: `3px solid ${categoryColors[i]}` }}
          >
            <h4 className="text-lg font-bold text-[#F4F3EE]">{name}</h4>
            <p className="text-sm text-[#B0AEA5] mt-2 leading-relaxed">
              {t.categoryDescs[i]}
            </p>

            {/* Example */}
            <div
              className="mt-5 rounded-xl p-4"
              style={{
                background: "#1a1a18",
                border: `1px solid ${categoryColors[i]}15`,
              }}
            >
              <p
                className="text-xs uppercase tracking-[0.15em] font-medium mb-2"
                style={{ color: categoryColors[i] }}
              >
                {t.exampleLabel}
              </p>
              <p className="text-sm font-bold text-[#F4F3EE]">
                {t.categoryExampleNames[i]}
              </p>
              <p className="text-xs text-[#B0AEA5] mt-1">
                {t.categoryExampleDescs[i]}
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: `${categoryColors[i]}99` }}
              >
                {t.categoryExampleNotes[i]}
              </p>
            </div>

            {/* Key Techniques */}
            <div className="mt-4">
              <p className="text-xs uppercase tracking-[0.15em] text-[#B0AEA5]/60 font-medium mb-2">
                {t.techniquesLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.categoryTechniques[i].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      background: `${categoryColors[i]}10`,
                      color: categoryColors[i],
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
