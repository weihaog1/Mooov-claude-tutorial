"use client";

import { useInView } from "@/components/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { troubleshootingText } from "./i18n/troubleshooting";

type T = (typeof troubleshootingText)["en"] | (typeof troubleshootingText)["zh"];

/* ---------- SubLabel ---------- */

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

/* ---------- Error Card ---------- */

function ErrorCard({
  error,
  cause,
  causeLabel,
  children,
}: {
  error: string;
  cause: string;
  causeLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="glass-card rounded-2xl p-7"
      style={{ borderLeft: "3px solid #D97757" }}
    >
      <p className="text-sm font-mono text-[#D97757]">{error}</p>
      <p className="text-sm text-[#B0AEA5] mt-2">
        <span className="text-[#F4F3EE] font-medium">{causeLabel}</span>
        {cause}
      </p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

/* ---------- Cause Card (2x2 grid) ---------- */

function CauseCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass-card rounded-2xl p-6">
      <h5 className="text-sm font-bold text-[#F4F3EE] mb-3">{title}</h5>
      {children}
    </div>
  );
}

/* ---------- Upload Errors Subsection ---------- */

function UploadErrors({ isVisible, t }: { isVisible: boolean; t: T }) {
  return (
    <div className="mb-24">
      <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
        <SubLabel color="#D97757" text={t.uploadSublabel} />
      </div>

      <div className="space-y-6">
        {/* Error 1 */}
        <div className={isVisible ? "animate-fade-up stagger-1" : "opacity-0"}>
          <ErrorCard
            error={t.error1Msg}
            cause={t.error1Cause}
            causeLabel={t.causeLabel}
          >
            <p className="text-sm text-[#B0AEA5]">
              <span className="text-[#F4F3EE] font-medium">{t.solutionLabel}</span>
              {t.error1Solution}
            </p>
            <div className="bg-[#1a1a18] rounded-lg p-3 mt-2 font-mono text-sm text-[#6A9BCC]">
              ls -la
              <span className="text-[#B0AEA5]"> {t.error1Verify} </span>
              SKILL.md
            </div>
          </ErrorCard>
        </div>

        {/* Error 2 */}
        <div className={isVisible ? "animate-fade-up stagger-2" : "opacity-0"}>
          <ErrorCard
            error={t.error2Msg}
            cause={t.error2Cause}
            causeLabel={t.causeLabel}
          >
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#C15F3C] mb-2">
                  {t.error2Wrong1}
                </p>
                <pre className="bg-[#1a1a18] rounded-lg p-3 font-mono text-sm text-[#B0AEA5] overflow-x-auto">
{`name: my-skill
description: Does things`}
                </pre>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#C15F3C] mb-2">
                  {t.error2Wrong2}
                </p>
                <pre className="bg-[#1a1a18] rounded-lg p-3 font-mono text-sm text-[#B0AEA5] overflow-x-auto">
{`---
name: my-skill
description: "Does things
---`}
                </pre>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#788C5D] mb-2">
                  {t.error2Correct}
                </p>
                <pre className="bg-[#1a1a18] rounded-lg p-3 font-mono text-sm text-[#B0AEA5] overflow-x-auto">
{`---
name: my-skill
description: Does things
---`}
                </pre>
              </div>
            </div>
          </ErrorCard>
        </div>

        {/* Error 3 */}
        <div className={isVisible ? "animate-fade-up stagger-3" : "opacity-0"}>
          <ErrorCard
            error={t.error3Msg}
            cause={t.error3Cause}
            causeLabel={t.causeLabel}
          >
            <div className="flex items-center gap-3 flex-wrap font-mono text-sm">
              <span className="text-[#C15F3C]">Wrong: My Cool Skill</span>
              <span className="text-[#CB9A76]">{"-->"}</span>
              <span className="text-[#788C5D]">Correct: my-cool-skill</span>
            </div>
          </ErrorCard>
        </div>
      </div>
    </div>
  );
}

/* ---------- Triggering Issues Subsection ---------- */

function TriggeringIssues({ isVisible, t }: { isVisible: boolean; t: T }) {
  return (
    <div className="mb-24">
      <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
        <SubLabel color="#6A9BCC" text={t.triggerSublabel} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Doesn't Trigger */}
        <div
          className={`glass-card rounded-2xl p-7 ${
            isVisible ? "animate-fade-up stagger-1" : "opacity-0"
          }`}
          style={{ borderTop: "3px solid #6A9BCC" }}
        >
          <h4 className="text-base font-bold text-[#F4F3EE]">
            {t.noTriggerTitle}
          </h4>
          <p className="text-sm text-[#B0AEA5] mt-2">
            <span className="text-[#F4F3EE] font-medium">{t.symptomLabel}</span>
            {t.noTriggerSymptom}
          </p>
          <p className="text-sm text-[#B0AEA5] mt-2">
            <span className="text-[#F4F3EE] font-medium">{t.fixLabel}</span>
            {t.noTriggerFix}
          </p>

          <div className="mt-4 space-y-2">
            <p className="text-xs uppercase tracking-wider text-[#B0AEA5]/60 mb-2">
              {t.quickChecklistLabel}
            </p>
            {t.checklistItems.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="text-[#6A9BCC] mt-0.5 flex-shrink-0">-</span>
                <span className="text-sm text-[#B0AEA5]">{item}</span>
              </div>
            ))}
          </div>

          <div
            className="mt-5 rounded-xl p-4"
            style={{
              background: "rgba(106,155,204,0.06)",
              border: "1px solid rgba(106,155,204,0.15)",
            }}
          >
            <p className="text-xs uppercase tracking-wider text-[#6A9BCC] mb-2">
              {t.debugLabel}
            </p>
            <p className="text-sm text-[#B0AEA5]">
              {t.debugText}
            </p>
          </div>
        </div>

        {/* Triggers Too Often */}
        <div
          className={`glass-card rounded-2xl p-7 ${
            isVisible ? "animate-fade-up stagger-2" : "opacity-0"
          }`}
          style={{ borderTop: "3px solid #C15F3C" }}
        >
          <h4 className="text-base font-bold text-[#F4F3EE]">
            {t.overTriggerTitle}
          </h4>
          <p className="text-sm text-[#B0AEA5] mt-2">
            <span className="text-[#F4F3EE] font-medium">{t.symptomLabel}</span>
            {t.overTriggerSymptom}
          </p>
          <p className="text-xs uppercase tracking-wider text-[#B0AEA5]/60 mt-5 mb-3">
            {t.solutionsLabel}
          </p>

          {/* Solution 1 */}
          <div className="mb-4">
            <p className="text-sm text-[#F4F3EE] font-medium mb-2">
              {t.solution1Title}
            </p>
            <pre className="bg-[#1a1a18] rounded-lg p-3 font-mono text-xs text-[#B0AEA5] overflow-x-auto whitespace-pre-wrap">
{`description: Advanced data analysis for CSV files. Use for statistical modeling, regression, clustering. Do NOT use for simple data exploration (use data-viz skill instead).`}
            </pre>
          </div>

          {/* Solution 2 */}
          <div className="mb-4">
            <p className="text-sm text-[#F4F3EE] font-medium mb-2">
              {t.solution2Title}
            </p>
            <div className="space-y-1 font-mono text-xs">
              <p className="text-[#C15F3C]">
                {t.tooBroad} description: Processes documents
              </p>
              <p className="text-[#788C5D]">
                {t.better} description: Processes PDF legal documents for contract
                review
              </p>
            </div>
          </div>

          {/* Solution 3 */}
          <div>
            <p className="text-sm text-[#F4F3EE] font-medium mb-2">
              {t.solution3Title}
            </p>
            <pre className="bg-[#1a1a18] rounded-lg p-3 font-mono text-xs text-[#B0AEA5] overflow-x-auto whitespace-pre-wrap">
{`description: PayFlow payment processing for e-commerce. Use specifically for online payment workflows, not for general financial queries.`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- MCP Connection Issues Subsection ---------- */

function MCPConnectionIssues({ isVisible, t }: { isVisible: boolean; t: T }) {
  return (
    <div className="mb-24">
      <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
        <SubLabel color="#CB9A76" text={t.mcpSublabel} />
      </div>

      <div className={isVisible ? "animate-fade-up stagger-1" : "opacity-0"}>
        <p className="text-sm text-[#B0AEA5] mb-6">
          <span className="text-[#F4F3EE] font-medium">{t.symptomLabel}</span>
          {t.mcpSymptom}
        </p>

        <div className="glass-card rounded-2xl p-7 space-y-5">
          {t.mcpSteps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-mono text-sm font-bold"
                style={{
                  background: "rgba(203,154,118,0.1)",
                  border: "1px solid rgba(203,154,118,0.2)",
                  color: "#CB9A76",
                }}
              >
                {i + 1}
              </div>
              <div>
                <p className="text-sm font-bold text-[#F4F3EE]">
                  {step.title}
                </p>
                <p className="text-sm text-[#B0AEA5] mt-1">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Instructions Not Followed Subsection ---------- */

function InstructionsNotFollowed({ isVisible, t }: { isVisible: boolean; t: T }) {
  return (
    <div>
      <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
        <SubLabel color="#788C5D" text={t.instrSublabel} />
        <p className="text-sm text-[#B0AEA5] mb-6">
          <span className="text-[#F4F3EE] font-medium">{t.symptomLabel}</span>
          {t.instrSymptom}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Too Verbose */}
        <div className={isVisible ? "animate-fade-up stagger-1" : "opacity-0"}>
          <CauseCard title={t.cause1Title}>
            <ul className="space-y-2 text-sm text-[#B0AEA5]">
              {t.cause1Items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CauseCard>
        </div>

        {/* Instructions Buried */}
        <div className={isVisible ? "animate-fade-up stagger-2" : "opacity-0"}>
          <CauseCard title={t.cause2Title}>
            <ul className="space-y-2 text-sm text-[#B0AEA5]">
              {t.cause2Items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CauseCard>
        </div>

        {/* Ambiguous Language */}
        <div className={isVisible ? "animate-fade-up stagger-3" : "opacity-0"}>
          <CauseCard title={t.cause3Title}>
            <div className="space-y-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#C15F3C] mb-1">
                  Bad
                </p>
                <p className="text-sm text-[#B0AEA5] font-mono">
                  {t.cause3Bad}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#788C5D] mb-1">
                  Good
                </p>
                <p className="text-sm text-[#B0AEA5] font-mono">
                  {t.cause3Good}
                </p>
              </div>
            </div>
          </CauseCard>
        </div>

        {/* Large Context Issues */}
        <div className={isVisible ? "animate-fade-up stagger-4" : "opacity-0"}>
          <CauseCard title={t.cause4Title}>
            <ul className="space-y-2 text-sm text-[#B0AEA5]">
              {t.cause4Items.map((item, i) => (
                <li key={i}>
                  {i === 2 && (
                    <span className="text-[#F4F3EE] font-medium">{t.solutionLabel}</span>
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </CauseCard>
        </div>
      </div>
    </div>
  );
}

/* ---------- Main Component ---------- */

export default function S2TroubleshootingSection() {
  const { lang } = useLanguage();
  const t = troubleshootingText[lang];
  const { ref: sectionRef, isVisible: sectionVisible } = useInView(0.02);
  const { ref: uploadRef, isVisible: uploadVisible } = useInView(0.1);
  const { ref: triggerRef, isVisible: triggerVisible } = useInView(0.1);
  const { ref: mcpRef, isVisible: mcpVisible } = useInView(0.1);
  const { ref: instrRef, isVisible: instrVisible } = useInView(0.1);

  return (
    <section
      id="s2-troubleshooting"
      ref={sectionRef}
      className="relative py-32 px-8 lg:px-20"
      style={{ background: "#191919" }}
    >
      {/* Ghost number */}
      <div className="absolute top-20 left-8 lg:left-20 text-[8rem] font-serif font-bold leading-none text-[#CB9A76]/[0.07] select-none pointer-events-none">
        06
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
        <div ref={uploadRef}>
          <UploadErrors isVisible={uploadVisible} t={t} />
        </div>

        <div ref={triggerRef}>
          <TriggeringIssues isVisible={triggerVisible} t={t} />
        </div>

        <div ref={mcpRef}>
          <MCPConnectionIssues isVisible={mcpVisible} t={t} />
        </div>

        <div ref={instrRef}>
          <InstructionsNotFollowed isVisible={instrVisible} t={t} />
        </div>
      </div>
    </section>
  );
}
