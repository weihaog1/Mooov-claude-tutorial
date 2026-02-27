"use client";

import { useInView } from "@/components/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { demoText } from "./i18n/demo";

const phases = [
  { color: "#6A9BCC", stageIndices: [0, 1, 2] },
  { color: "#D97757", stageIndices: [3, 4, 5], gateIndex: 5 },
  { color: "#788C5D", stageIndices: [6, 7, 8, 9] },
];

const highlightColors = ["#CB9A76", "#D97757", "#788C5D", "#6A9BCC"];

export default function S2DemoSection() {
  const { lang } = useLanguage();
  const t = demoText[lang];
  const { ref, isVisible } = useInView();
  const { ref: challengeRef, isVisible: challengeVisible } = useInView(0.1);
  const { ref: engineRef, isVisible: engineVisible } = useInView(0.1);
  const { ref: pipelineRef, isVisible: pipelineVisible } = useInView(0.1);
  const { ref: highlightRef, isVisible: highlightVisible } = useInView(0.1);
  const { ref: previewRef, isVisible: previewVisible } = useInView(0.1);

  return (
    <section
      id="s2-demo"
      ref={ref}
      className="relative py-32 px-8 lg:px-20"
      style={{ background: "#191919" }}
    >
      {/* Ghost text */}
      <div className="absolute top-20 left-8 lg:left-20 text-[8rem] font-serif font-bold leading-none text-[#D97757]/[0.07] select-none pointer-events-none">
        LIVE
      </div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
          <h2 className="text-5xl lg:text-7xl font-serif font-bold text-[#F4F3EE] tracking-tight">
            {t.title}
          </h2>
          <p className="text-lg text-[#D97757] mt-3 tracking-wider uppercase">
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

      {/* Challenge */}
      <div ref={challengeRef} className="max-w-7xl mx-auto mb-16">
        <div
          className={cn(
            "flex items-center gap-3 mb-6",
            challengeVisible ? "animate-fade-up" : "opacity-0"
          )}
        >
          <span className="h-3 w-3 rounded-full bg-[#C15F3C]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#C15F3C] font-medium">
            {t.challengeLabel}
          </span>
        </div>
        <div
          className={cn(
            "glass-card rounded-2xl p-7",
            challengeVisible ? "animate-fade-up stagger-1" : "opacity-0"
          )}
        >
          <p className="text-sm text-[#B0AEA5] leading-relaxed">
            {t.challengeText}
          </p>
        </div>
      </div>

      {/* Scoring Engine */}
      <div ref={engineRef} className="max-w-7xl mx-auto mb-20">
        <div
          className={cn(
            "flex items-center gap-3 mb-6",
            engineVisible ? "animate-fade-up" : "opacity-0"
          )}
        >
          <span className="h-3 w-3 rounded-full bg-[#6A9BCC]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#6A9BCC] font-medium">
            {t.engineLabel}
          </span>
        </div>
        <div
          className={cn(
            "glass-card rounded-2xl p-7",
            engineVisible ? "animate-fade-up stagger-1" : "opacity-0"
          )}
          style={{ borderLeft: "3px solid rgba(106,155,204,0.3)" }}
        >
          <h3 className="text-lg font-bold text-[#F4F3EE] mb-3">
            {t.engineTitle}
          </h3>
          <p className="text-sm text-[#B0AEA5] leading-relaxed">
            {t.engineDesc}
          </p>
        </div>
      </div>

      {/* Pipeline */}
      <div ref={pipelineRef} className="max-w-7xl mx-auto mb-16">
        <div
          className={cn(
            "flex items-center gap-3 mb-6",
            pipelineVisible ? "animate-fade-up" : "opacity-0"
          )}
        >
          <span className="h-3 w-3 rounded-full bg-[#D97757]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#D97757] font-medium">
            {t.pipelineLabel}
          </span>
        </div>

        <div
          className={cn(
            "mb-8",
            pipelineVisible ? "animate-fade-up stagger-1" : "opacity-0"
          )}
        >
          <h3 className="text-lg font-bold text-[#F4F3EE] mb-3">
            {t.pipelineTitle}
          </h3>
          <p className="text-sm text-[#B0AEA5] leading-relaxed max-w-3xl">
            {t.pipelineDesc}
          </p>
        </div>

        {/* Pipeline phases */}
        <div className="space-y-4">
          {phases.map((phase, pi) => (
            <div
              key={pi}
              className={cn(
                "glass-card rounded-2xl p-6",
                pipelineVisible
                  ? `animate-fade-up stagger-${pi + 2}`
                  : "opacity-0"
              )}
              style={{ borderLeft: `3px solid ${phase.color}40` }}
            >
              <p
                className="text-xs uppercase tracking-[0.2em] font-medium mb-4"
                style={{ color: phase.color }}
              >
                {t.phaseNames[pi]}
              </p>
              <div className="space-y-3">
                {phase.stageIndices.map((si) => (
                  <div key={si} className="flex items-start gap-3">
                    <span className="font-mono text-xs mt-0.5 w-5 shrink-0 text-[#B0AEA5]/50">
                      {String(si + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-bold text-[#F4F3EE]">
                          {t.stageNames[si]}
                        </span>
                        {phase.gateIndex === si && (
                          <span
                            className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-medium"
                            style={{
                              background: `${phase.color}20`,
                              color: phase.color,
                              border: `1px solid ${phase.color}40`,
                            }}
                          >
                            {t.approvalGate}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#B0AEA5] mt-0.5 leading-relaxed">
                        {t.stageDescs[si]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div ref={highlightRef} className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.highlightTitles.map((title, i) => (
            <div
              key={i}
              className={cn(
                "glass-card rounded-2xl p-6",
                highlightVisible
                  ? `animate-fade-up stagger-${i + 1}`
                  : "opacity-0"
              )}
              style={{ borderTop: `2px solid ${highlightColors[i]}30` }}
            >
              <p className="text-sm font-bold text-[#F4F3EE] mb-2">{title}</p>
              <p className="text-xs text-[#B0AEA5] leading-relaxed">
                {t.highlightDescs[i]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Demo preview */}
      <div ref={previewRef} className="max-w-7xl mx-auto">
        <div
          className={cn(
            "flex items-center gap-3 mb-6",
            previewVisible ? "animate-fade-up" : "opacity-0"
          )}
        >
          <span className="h-3 w-3 rounded-full bg-[#CB9A76]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#CB9A76] font-medium">
            {t.previewLabel}
          </span>
        </div>
        <div
          className={cn(
            "rounded-2xl overflow-hidden flex",
            previewVisible ? "animate-fade-up stagger-1" : "opacity-0"
          )}
          style={{
            background: "rgba(25,25,25,0.6)",
            border: "1px solid rgba(203,154,118,0.2)",
          }}
        >
          <div
            className="w-1.5 shrink-0"
            style={{ background: "#CB9A76" }}
          />
          <div className="px-6 py-5">
            <p className="text-sm font-bold text-[#F4F3EE] mb-3">
              {t.previewTitle}
            </p>
            <div className="space-y-2">
              {t.previewItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#CB9A76] shrink-0" />
                  <span className="text-sm text-[#B0AEA5]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
