"use client";

import { useInView } from "@/components/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { launchText } from "./i18n/launch";

/* ---------- constants: colors not stored in translations ---------- */

const testingCardBorders = ["#788C5D", "#6A9BCC"];
const iterationBorders = ["#D97757", "#C15F3C", "#6A9BCC"];
const checklistAccents = ["#CB9A76", "#D97757", "#6A9BCC", "#788C5D"];

/* ---------- Subsection Label ---------- */

function SubLabel({ color, text }: { color: string; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span
        className="h-3 w-3 rounded-full inline-block"
        style={{ backgroundColor: color }}
      />
      <span
        className="text-xs uppercase font-medium"
        style={{ letterSpacing: "0.2em", color: "rgba(244,243,238,0.5)" }}
      >
        {text}
      </span>
    </div>
  );
}

/* ---------- Check Item ---------- */

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 mt-3">
      <span
        className="flex-shrink-0 mt-0.5 w-4 h-4 rounded border"
        style={{ borderColor: "rgba(203,154,118,0.3)" }}
      />
      <span className="text-sm text-[#B0AEA5]">{text}</span>
    </div>
  );
}

/* ---------- Main Component ---------- */

export default function S2LaunchSection() {
  const { lang } = useLanguage();
  const t = launchText[lang];

  const { ref: sectionRef, isVisible: sectionVisible } = useInView(0.02);
  const { ref: testRef, isVisible: testVisible } = useInView(0.1);
  const { ref: creatorRef, isVisible: creatorVisible } = useInView(0.1);
  const { ref: iterRef, isVisible: iterVisible } = useInView(0.1);
  const { ref: checkRef, isVisible: checkVisible } = useInView(0.1);
  const { ref: nextRef, isVisible: nextVisible } = useInView(0.1);

  return (
    <section
      id="s2-launch"
      ref={sectionRef}
      className="relative py-32 px-8 lg:px-20"
      style={{ background: "#191919" }}
    >
      {/* Ghost number */}
      <div className="absolute top-20 left-8 lg:left-20 text-[8rem] font-serif font-bold leading-none text-[#CB9A76]/[0.07] select-none pointer-events-none">
        07
      </div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className={sectionVisible ? "animate-fade-up" : "opacity-0"}>
          <h2 className="text-5xl lg:text-7xl font-serif font-bold text-[#F4F3EE] tracking-tight">
            {t.title}
          </h2>
          <p className="text-lg text-[#CB9A76] mt-3 tracking-wider uppercase">
            {t.subtitle}
          </p>
        </div>
        <p
          className={`max-w-2xl mt-6 text-[#B0AEA5] leading-relaxed ${
            sectionVisible ? "animate-fade-up stagger-2" : "opacity-0"
          }`}
        >
          {t.description}
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ========== TESTING APPROACH ========== */}
        <div ref={testRef} className="mb-24">
          <div className={testVisible ? "animate-fade-up" : "opacity-0"}>
            <SubLabel color="#788C5D" text={t.testSublabel} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.testingCards.map((card, i) => (
              <div
                key={card.title}
                className={`glass-card rounded-2xl p-7 ${
                  testVisible ? `animate-fade-up stagger-${i + 1}` : "opacity-0"
                }`}
                style={{ borderTop: `3px solid ${testingCardBorders[i]}` }}
              >
                <h4 className="text-base font-bold text-[#F4F3EE]">
                  {card.title}
                </h4>
                <p className="text-sm text-[#B0AEA5] mt-2">
                  {card.description}
                </p>
                <div className="mt-4">
                  {card.items.map((item) => (
                    <CheckItem key={item} text={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== SKILL CREATOR ========== */}
        <div ref={creatorRef} className="mb-24">
          <div className={creatorVisible ? "animate-fade-up" : "opacity-0"}>
            <SubLabel color="#CB9A76" text={t.creatorSublabel} />
          </div>

          <p
            className={`max-w-3xl text-[#B0AEA5] leading-relaxed mb-8 ${
              creatorVisible ? "animate-fade-up stagger-1" : "opacity-0"
            }`}
          >
            {t.creatorIntro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.skillCreatorCards.map((card, i) => (
              <div
                key={card.title}
                className={`glass-card rounded-2xl p-7 ${
                  creatorVisible
                    ? `animate-fade-up stagger-${i + 2}`
                    : "opacity-0"
                }`}
              >
                <h4 className="text-base font-bold text-[#F4F3EE] mb-4">
                  {card.title}
                </h4>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[#B0AEA5]"
                    >
                      <span className="text-[#CB9A76] mt-0.5 flex-shrink-0">
                        -
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className={`mt-6 rounded-xl p-4 ${
              creatorVisible ? "animate-fade-up stagger-5" : "opacity-0"
            }`}
            style={{
              background: "rgba(203,154,118,0.06)",
              border: "1px solid rgba(203,154,118,0.15)",
            }}
          >
            <p className="text-sm text-[#B0AEA5]">
              <span className="text-[#F4F3EE] font-medium">{t.usageLabel}</span>
              {t.usageText}
            </p>
            <p className="text-xs text-[#B0AEA5]/60 mt-2">
              {t.usageNote}
            </p>
          </div>
        </div>

        {/* ========== ITERATION SIGNALS ========== */}
        <div ref={iterRef} className="mb-24">
          <div className={iterVisible ? "animate-fade-up" : "opacity-0"}>
            <SubLabel color="#D97757" text={t.iterSublabel} />
          </div>

          <p
            className={`max-w-3xl text-[#B0AEA5] leading-relaxed mb-8 ${
              iterVisible ? "animate-fade-up stagger-1" : "opacity-0"
            }`}
          >
            {t.iterIntro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.iterationSignals.map((signal, i) => (
              <div
                key={signal.title}
                className={`glass-card rounded-2xl p-7 ${
                  iterVisible
                    ? `animate-fade-up stagger-${i + 2}`
                    : "opacity-0"
                }`}
                style={{ borderLeft: `3px solid ${iterationBorders[i]}` }}
              >
                <h4 className="text-base font-bold text-[#F4F3EE] mb-3">
                  {signal.title}
                </h4>
                <ul className="space-y-2 mb-4">
                  {signal.symptoms.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 text-sm text-[#B0AEA5]"
                    >
                      <span className="text-[#B0AEA5]/40 mt-0.5 flex-shrink-0">
                        -
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
                <div
                  className="rounded-lg p-3"
                  style={{
                    background: "rgba(25,25,25,0.6)",
                    border: "1px solid rgba(203,154,118,0.08)",
                  }}
                >
                  <p className="text-xs uppercase tracking-wider text-[#CB9A76] mb-1">
                    {t.solutionLabel}
                  </p>
                  <p className="text-sm text-[#B0AEA5]">{signal.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== PRE-FLIGHT CHECKLIST ========== */}
        <div ref={checkRef} className="mb-24">
          <div className={checkVisible ? "animate-fade-up" : "opacity-0"}>
            <SubLabel color="#788C5D" text={t.checkSublabel} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.checklistGroups.map((group, i) => (
              <div
                key={group.title}
                className={`glass-card rounded-2xl p-7 ${
                  checkVisible
                    ? `animate-fade-up stagger-${i + 1}`
                    : "opacity-0"
                }`}
              >
                <h4
                  className="text-base font-bold mb-4"
                  style={{ color: checklistAccents[i] }}
                >
                  {group.title}
                </h4>
                <div className="space-y-0">
                  {group.items.map((item) => (
                    <CheckItem key={item} text={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== NEXT STEPS ========== */}
        <div ref={nextRef}>
          <div className={nextVisible ? "animate-fade-up" : "opacity-0"}>
            <SubLabel color="#D97757" text={t.nextSublabel} />
          </div>

          <div
            className={`rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 ${
              nextVisible ? "animate-fade-up stagger-1" : "opacity-0"
            }`}
            style={{
              border: "1px solid transparent",
              background:
                "linear-gradient(#191919, #191919) padding-box, linear-gradient(135deg, #CB9A76, #D97757, #C15F3C) border-box",
            }}
          >
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-[#F4F3EE] leading-tight max-w-md">
              {t.nextCTA}
            </h3>

            <div className="flex flex-col gap-4">
              {t.resourceLinks.map((link) => (
                <a
                  key={link.label}
                  href="#"
                  className="group flex items-center gap-3 text-[#6A9BCC] hover:underline transition-colors"
                >
                  <span className="text-sm font-medium">{link.label}</span>
                  <span className="text-xs text-[#6A9BCC]/60 group-hover:text-[#6A9BCC] transition-colors">
                    {"-->"}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <p
            className={`text-center mt-8 italic text-[#B0AEA5] text-sm ${
              nextVisible ? "animate-fade-up stagger-3" : "opacity-0"
            }`}
          >
            {t.nextClosing}
          </p>
        </div>
      </div>
    </section>
  );
}
