"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { fundamentalsText } from "./i18n/fundamentals";
import { fileTreeLines, platforms } from "./s2-fundamentals-data";

export function SkillStructureCard({ isVisible }: { isVisible: boolean }) {
  const { lang } = useLanguage();
  const t = fundamentalsText[lang];

  const annotationMap: Record<string, string> = {
    "(required)": t.annotationRequired,
    "(optional)": t.annotationOptional,
  };

  return (
    <div
      className={`glass-card rounded-2xl p-7 border-t-2 border-[#CB9A76] md:col-span-2 flex flex-col justify-between ${isVisible ? "animate-fade-up stagger-3" : "opacity-0"}`}
    >
      <div>
        <h3 className="text-xl font-serif font-bold text-[#F4F3EE] mb-1">{t.skillStructureTitle}</h3>
        <p className="text-sm text-[#B0AEA5] mb-5">{t.skillStructureDesc}</p>
      </div>
      <div className="font-mono text-sm leading-loose">
        {fileTreeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
            style={{ paddingLeft: `${line.indent * 1.5}rem` }}
          >
            <span style={{ color: line.isFolder ? "#CB9A76" : "#F4F3EE" }}>
              {line.isFolder ? (line.indent === 0 ? "" : "|- ") : "|- "}
              {line.text}
            </span>
            {line.annotation && (
              <span className="ml-3 text-[#788C5D] text-xs">
                {annotationMap[line.annotation] ?? line.annotation}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ProgressiveDisclosureCard({ isVisible }: { isVisible: boolean }) {
  const { lang } = useLanguage();
  const t = fundamentalsText[lang];

  return (
    <div
      className={`glass-card rounded-2xl p-7 border-t-2 border-[#D97757] flex flex-col justify-between ${isVisible ? "animate-fade-up stagger-4" : "opacity-0"}`}
    >
      <div>
        <h3 className="text-xl font-serif font-bold text-[#F4F3EE] mb-1">{t.progressiveTitle}</h3>
        <p className="text-sm text-[#B0AEA5] mb-5">{t.progressiveDesc}</p>
      </div>
      <div className="relative flex-1 flex flex-col justify-center gap-3">
        {t.layers.map((layer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 8, y: 8 }}
            animate={isVisible ? { opacity: 1 - i * 0.15, x: i * 4, y: i * 2 } : {}}
            transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
            className="glass-card rounded-lg px-4 py-3 flex items-center justify-between"
            style={{ borderLeft: `3px solid ${layer.color}` }}
          >
            <span className="text-sm font-medium text-[#F4F3EE]">{layer.label}</span>
            <span className="text-xs" style={{ color: layer.color }}>{layer.desc}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ComposabilityCard({ isVisible }: { isVisible: boolean }) {
  const { lang } = useLanguage();
  const t = fundamentalsText[lang];

  return (
    <div
      className={`glass-card rounded-2xl p-7 border-t-2 border-[#788C5D] md:col-span-3 flex flex-col justify-between ${isVisible ? "animate-fade-up stagger-5" : "opacity-0"}`}
    >
      <h3 className="text-xl font-serif font-bold text-[#F4F3EE] mb-5">{t.composabilityTitle}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            {[1, 2, 3].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + n * 0.12, duration: 0.4 }}
                className="w-9 h-9 rounded-lg border border-[#788C5D]/30 bg-[#788C5D]/10 flex items-center justify-center text-xs font-mono text-[#788C5D]"
                style={{ marginLeft: n > 1 ? "-0.5rem" : 0, zIndex: 4 - n }}
              >
                S{n}
              </motion.div>
            ))}
          </div>
          <p className="text-sm font-medium text-[#F4F3EE] mb-1">{t.composabilityLabel}</p>
          <p className="text-xs text-[#B0AEA5] leading-relaxed">
            {t.composabilityDesc}
          </p>
        </div>
        <div className="hidden sm:block absolute left-1/2 top-[4.5rem] bottom-7 w-px bg-[#CB9A76]/10" />
        <div>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {platforms.map((p, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + i * 0.12, duration: 0.4 }}
                className="text-xs px-2.5 py-1 rounded-full border border-[#6A9BCC]/25 text-[#6A9BCC] bg-[#6A9BCC]/5"
              >
                {p.label}
              </motion.span>
            ))}
          </div>
          <p className="text-sm font-medium text-[#F4F3EE] mb-1">{t.portabilityLabel}</p>
          <p className="text-xs text-[#B0AEA5] leading-relaxed">
            {t.portabilityDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
