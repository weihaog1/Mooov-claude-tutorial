"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="relative flex items-center rounded-full p-0.5 transition-colors"
      style={{
        background: "rgba(203,154,118,0.1)",
        border: "1px solid rgba(203,154,118,0.2)",
      }}
      aria-label={`Switch to ${lang === "en" ? "Chinese" : "English"}`}
    >
      <span
        className="relative z-10 px-2.5 py-1 text-xs font-medium rounded-full transition-colors"
        style={{
          color: lang === "en" ? "#191919" : "#B0AEA5",
          background: lang === "en" ? "#CB9A76" : "transparent",
        }}
      >
        EN
      </span>
      <span
        className="relative z-10 px-2.5 py-1 text-xs font-medium rounded-full transition-colors"
        style={{
          color: lang === "zh" ? "#191919" : "#B0AEA5",
          background: lang === "zh" ? "#CB9A76" : "transparent",
        }}
      >
        ZH
      </span>
    </button>
  );
}
