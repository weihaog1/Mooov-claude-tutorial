"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "@/components/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { designText } from "./i18n/design";

export default function S2DesignSection() {
  const { lang } = useLanguage();
  const t = designText[lang];

  const { ref, isVisible } = useInView();
  const { ref: useCaseRef, isVisible: useCaseVisible } = useInView(0.1);
  const { ref: tabsRef, isVisible: tabsVisible } = useInView(0.1);
  const [activeTab, setActiveTab] = useState("document");

  const tabsData = [
    {
      id: "document",
      label: t.tab1Label,
      example: t.tab1Example,
      exampleDesc: t.tab1ExampleDesc,
      techniques: t.tab1Techniques,
      badge: t.tab1Badge,
      badgeColor: "#788C5D",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="7" y="4" width="18" height="24" rx="2" stroke="#CB9A76" strokeWidth="1.5" />
          <line x1="11" y1="11" x2="21" y2="11" stroke="#CB9A76" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="11" y1="15" x2="21" y2="15" stroke="#CB9A76" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="11" y1="19" x2="17" y2="19" stroke="#CB9A76" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "workflow",
      label: t.tab2Label,
      example: t.tab2Example,
      exampleDesc: t.tab2ExampleDesc,
      techniques: t.tab2Techniques,
      badge: t.tab2Badge,
      badgeColor: "#6A9BCC",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="8" cy="16" r="3" stroke="#6A9BCC" strokeWidth="1.5" />
          <circle cx="24" cy="8" r="3" stroke="#6A9BCC" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="3" stroke="#6A9BCC" strokeWidth="1.5" />
          <path d="M11 15L21 9" stroke="#6A9BCC" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M11 17L21 23" stroke="#6A9BCC" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "mcp",
      label: t.tab3Label,
      example: t.tab3Example,
      exampleDesc: t.tab3ExampleDesc,
      techniques: t.tab3Techniques,
      badge: t.tab3Badge,
      badgeColor: "#D97757",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="3" stroke="#D97757" strokeWidth="1.5" />
          <circle cx="7" cy="9" r="2.5" stroke="#D97757" strokeWidth="1.5" />
          <circle cx="25" cy="9" r="2.5" stroke="#D97757" strokeWidth="1.5" />
          <circle cx="7" cy="23" r="2.5" stroke="#D97757" strokeWidth="1.5" />
          <circle cx="25" cy="23" r="2.5" stroke="#D97757" strokeWidth="1.5" />
          <line x1="9" y1="10.5" x2="14" y2="14.5" stroke="#D97757" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="23" y1="10.5" x2="18" y2="14.5" stroke="#D97757" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="9" y1="21.5" x2="14" y2="17.5" stroke="#D97757" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="23" y1="21.5" x2="18" y2="17.5" stroke="#D97757" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const currentTab = tabsData.find((tab) => tab.id === activeTab) ?? tabsData[0];

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

      {/* Tabs */}
      <div ref={tabsRef} className="max-w-7xl mx-auto">
        <div className={tabsVisible ? "animate-fade-up stagger-3" : "opacity-0"}>
          {/* Tab bar */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-5 py-2.5 rounded-full text-sm transition-colors"
                style={{ color: activeTab === tab.id ? "#F4F3EE" : "#B0AEA5" }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeDesignTab"
                    className="absolute inset-0 bg-[#262624] rounded-full border border-[#CB9A76]/20"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="glass-card rounded-2xl p-7"
          >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Icon + example */}
                <div className="lg:col-span-4 flex flex-col items-start gap-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `${currentTab.badgeColor}14` }}
                  >
                    {currentTab.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#B0AEA5] mb-1">
                      {t.exampleLabel}
                    </p>
                    <p className="font-mono text-sm font-bold text-[#F4F3EE]">
                      {currentTab.example}
                    </p>
                    <p className="text-sm text-[#B0AEA5] mt-1 leading-relaxed">
                      {currentTab.exampleDesc}
                    </p>
                  </div>
                  {/* Badge */}
                  <div
                    className="rounded-full px-4 py-1.5 text-xs font-medium"
                    style={{
                      background: `${currentTab.badgeColor}14`,
                      border: `1px solid ${currentTab.badgeColor}33`,
                      color: currentTab.badgeColor,
                    }}
                  >
                    {currentTab.badge}
                  </div>
                </div>

                {/* Techniques */}
                <div className="lg:col-span-8">
                  <p className="text-xs uppercase tracking-wider text-[#B0AEA5] mb-4">
                    {t.keyTechniquesLabel}
                  </p>
                  <ul className="space-y-3">
                    {currentTab.techniques.map((tech) => (
                      <li key={tech} className="flex items-start gap-3">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "#CB9A76" }}
                        />
                        <span className="text-sm text-[#F4F3EE]/80 leading-relaxed">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
}
