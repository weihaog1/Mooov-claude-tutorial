"use client";

import { useInView } from "@/components/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { designText } from "./i18n/design";

export default function S2DesignSection() {
  const { lang } = useLanguage();
  const t = designText[lang];

  const { ref, isVisible } = useInView();
  const { ref: useCaseRef, isVisible: useCaseVisible } = useInView(0.1);

  return (
    <section
      id="s2-design"
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
          className={`max-w-2xl mt-6 text-[#B0AEA5] leading-relaxed ${
            isVisible ? "animate-fade-up stagger-2" : "opacity-0"
          }`}
        >
          {t.description}
        </p>
      </div>

      {/* Start with Use Cases */}
      <div ref={useCaseRef} className="max-w-7xl mx-auto mb-20">
        <div className={useCaseVisible ? "animate-fade-up" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CB9A76]" />
            <span className="text-xs uppercase tracking-widest text-[#CB9A76] font-medium">
              {t.useCasesSublabel}
            </span>
          </div>
          <p className="text-[#B0AEA5] leading-relaxed mb-8">
            {t.useCasesIntro}
          </p>
        </div>

        {/* Use case definition block */}
        <div
          className={`glass-card rounded-2xl p-7 ${useCaseVisible ? "animate-fade-up stagger-2" : "opacity-0"}`}
          style={{ borderLeft: "3px solid #CB9A76" }}
        >
          <div className="font-mono text-sm leading-loose space-y-1">
            <p>
              <span className="text-[#CB9A76] font-medium">{t.useCaseLabel}</span>{" "}
              <span className="text-[#F4F3EE]">{t.useCaseBlock.label}</span>
            </p>
            <p>
              <span className="text-[#D97757] font-medium">{t.triggerLabel}</span>{" "}
              <span className="text-[#F4F3EE]/80">{t.useCaseBlock.trigger}</span>
            </p>
            <div>
              <span className="text-[#F4F3EE] font-medium">{t.stepsLabel}</span>
              <ol className="list-decimal list-inside ml-2 mt-1 space-y-0.5">
                {t.useCaseBlock.steps.map((step, i) => (
                  <li key={i} className="text-[#F4F3EE]/80">{step}</li>
                ))}
              </ol>
            </div>
            <p>
              <span className="text-[#788C5D] font-medium">{t.resultLabel}</span>{" "}
              <span className="text-[#F4F3EE]/80">{t.useCaseBlock.result}</span>
            </p>
          </div>
        </div>

        {/* Ask yourself box */}
        <div
          className={`glass-card rounded-2xl p-7 mt-6 ${useCaseVisible ? "animate-fade-up stagger-3" : "opacity-0"}`}
        >
          <p className="text-sm uppercase tracking-wider text-[#F4F3EE] font-medium mb-4">
            {t.askYourselfTitle}
          </p>
          <ul className="space-y-3">
            {t.askYourselfQuestions.map((q) => (
              <li key={q} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CB9A76] shrink-0" />
                <span className="text-sm text-[#B0AEA5] leading-relaxed">{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
}
