"use client";

import { useInView } from "@/components/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { patternsText } from "./i18n/patterns";

const patternColors = ["#CB9A76", "#D97757", "#6A9BCC", "#788C5D"];

export default function S3PatternsSection() {
  const { ref, isVisible } = useInView();
  const { ref: cardsRef, isVisible: cardsVisible } = useInView(0.1);
  const { lang } = useLanguage();
  const t = patternsText[lang];

  return (
    <section
      id="s3-patterns"
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
          className={`max-w-2xl mt-6 text-[#B0AEA5] leading-relaxed ${isVisible ? "animate-fade-up stagger-2" : "opacity-0"}`}
        >
          {t.description}
        </p>
      </div>

      {/* Pattern cards */}
      <div ref={cardsRef} className="max-w-7xl mx-auto space-y-10">
        {t.patterns.map((pattern, i) => (
          <div
            key={pattern.name}
            className={cardsVisible ? `animate-fade-up stagger-${i + 1}` : "opacity-0"}
          >
            {/* Description card */}
            <div
              className="glass-card rounded-2xl p-7"
              style={{ borderTop: `2px solid ${patternColors[i]}` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: patternColors[i] }}
                />
                <h3
                  className="text-lg font-serif font-bold"
                  style={{ color: patternColors[i] }}
                >
                  {pattern.name}
                </h3>
              </div>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: patternColors[i] }}
              >
                {pattern.tagline}
              </p>
              <p className="text-sm text-[#B0AEA5] leading-relaxed">
                {pattern.description}
              </p>
            </div>

            {/* Code block card */}
            <div
              className="rounded-2xl p-5 mt-3 font-mono text-xs leading-relaxed text-[#B0AEA5] whitespace-pre-wrap"
              style={{
                background: "#1a1a18",
                border: "1px solid rgba(203,154,118,0.1)",
              }}
            >
              {pattern.example}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
