"use client";

import { useInView } from "@/components/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import type { CodeLine } from "./anatomyData";
import { writingText } from "./i18n/writing";
import { renderCodeBlock } from "./renderCodeBlock";

const templateLines: CodeLine[] = [
  [{ text: "---", color: "#D97757" }],
  [{ text: "name: ", color: "#CB9A76" }, { text: "your-skill", color: "#6A9BCC" }],
  [{ text: "description: ", color: "#CB9A76" }, { text: "[...]", color: "#6A9BCC" }],
  [{ text: "---", color: "#D97757" }],
  [{ text: "\u00A0", color: "#B0AEA5" }],
  [{ text: "# Your Skill Name", color: "#D97757" }],
  [{ text: "\u00A0", color: "#B0AEA5" }],
  [{ text: "## Instructions", color: "#D97757" }],
  [{ text: "\u00A0", color: "#B0AEA5" }],
  [{ text: "### Step 1: [First Major Step]", color: "#D97757" }],
  [{ text: "Clear explanation of what happens.", color: "#B0AEA5" }],
  [{ text: "\u00A0", color: "#B0AEA5" }],
  [{ text: "Example:", color: "#B0AEA5" }],
  [{ text: "`python scripts/fetch_data.py --project-id PROJECT_ID`", color: "#788C5D" }],
  [{ text: "Expected output: [describe what success looks like]", color: "#B0AEA5" }],
  [{ text: "\u00A0", color: "#B0AEA5" }],
  [{ text: "(Add more steps as needed)", color: "#B0AEA5" }],
  [{ text: "\u00A0", color: "#B0AEA5" }],
  [{ text: "### Examples", color: "#D97757" }],
  [{ text: "\u00A0", color: "#B0AEA5" }],
  [{ text: "#### Example 1: [common scenario]", color: "#D97757" }],
  [{ text: 'User says: "Set up a new marketing campaign"', color: "#B0AEA5" }],
  [{ text: "Actions:", color: "#B0AEA5" }],
  [{ text: "1. Fetch existing campaigns via MCP", color: "#B0AEA5" }],
  [{ text: "2. Create new campaign with provided parameters", color: "#B0AEA5" }],
  [{ text: "Result: Campaign created with confirmation link", color: "#B0AEA5" }],
  [{ text: "\u00A0", color: "#B0AEA5" }],
  [{ text: "### Troubleshooting", color: "#D97757" }],
  [{ text: "\u00A0", color: "#B0AEA5" }],
  [{ text: "**Error: [Common error message]**", color: "#CB9A76" }],
  [{ text: "**Cause:** [Why it happens]", color: "#CB9A76" }],
  [{ text: "**Solution:** [How to fix]", color: "#CB9A76" }],
];

const practices = [
  {
    good: [
      "Run `python scripts/validate.py --input {filename}` to check data format.",
      "If validation fails, common issues include:",
      "- Missing required fields (add them to the CSV)",
      "- Invalid date formats (use YYYY-MM-DD)",
    ],
    bad: ["Validate the data before proceeding."],
  },
  {
    code: [
      "## Common Issues",
      "",
      "### MCP Connection Failed",
      'If you see "Connection refused":',
      "1. Verify MCP server is running: Check Settings > Extensions",
      "2. Confirm API key is valid",
      "3. Try reconnecting: Settings > Extensions > [Your Service] > Reconnect",
    ],
  },
  {
    code: [
      "Before writing queries, consult `references/api-patterns.md` for:",
      "- Rate limiting guidance",
      "- Pagination patterns",
      "- Error codes and handling",
    ],
  },
  {
    hasProgressiveText: true,
  },
];

const perfLines = [
  "## Performance Notes",
  "- Take your time to do this thoroughly",
  "- Quality is more important than speed",
  "- Do not skip validation steps",
];

export default function S2WritingSection() {
  const { lang } = useLanguage();
  const t = writingText[lang];
  const { ref, isVisible } = useInView();
  const { ref: structRef, isVisible: structVisible } = useInView(0.1);
  const { ref: practRef, isVisible: practVisible } = useInView(0.1);
  const { ref: lazyRef, isVisible: lazyVisible } = useInView(0.1);

  return (
    <section
      id="s2-writing"
      ref={ref}
      className="relative py-32 px-8 lg:px-20"
      style={{ background: "#191919" }}
    >
      {/* Ghost number */}
      <div className="absolute top-20 left-8 lg:left-20 text-[8rem] font-serif font-bold leading-none text-[#CB9A76]/[0.07] select-none pointer-events-none">
        04
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

      {/* Subsection A: Recommended Structure */}
      <div ref={structRef} className="max-w-7xl mx-auto mb-20">
        <div
          className={cn(
            "flex items-center gap-3 mb-6",
            structVisible ? "animate-fade-up" : "opacity-0"
          )}
        >
          <span className="h-3 w-3 rounded-full bg-[#CB9A76]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#CB9A76] font-medium">
            {t.structSublabel}
          </span>
        </div>

        <div
          className={cn(
            "rounded-2xl overflow-hidden",
            structVisible ? "animate-fade-up stagger-1" : "opacity-0"
          )}
          style={{
            background: "#1a1a18",
            border: "1px solid rgba(203,154,118,0.1)",
          }}
        >
          {/* Tab bar */}
          <div
            className="flex items-center"
            style={{
              background: "#151513",
              borderBottom: "1px solid rgba(203,154,118,0.1)",
            }}
          >
            <div className="px-5 py-3 text-xs font-mono text-[#F4F3EE]">
              SKILL.md
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-1.5 pr-4">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "rgba(203,154,118,0.2)" }}
              />
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "rgba(203,154,118,0.15)" }}
              />
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "rgba(203,154,118,0.1)" }}
              />
            </div>
          </div>

          {/* Code content */}
          <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto">
            {renderCodeBlock(templateLines)}
          </div>
        </div>
      </div>

      {/* Subsection B: Best Practices */}
      <div ref={practRef} className="max-w-7xl mx-auto mb-20">
        <div
          className={cn(
            "flex items-center gap-3 mb-6",
            practVisible ? "animate-fade-up" : "opacity-0"
          )}
        >
          <span className="h-3 w-3 rounded-full bg-[#6A9BCC]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#6A9BCC] font-medium">
            {t.practicesSublabel}
          </span>
        </div>

        <div className="space-y-6">
          {practices.map((p, idx) => (
            <div
              key={idx}
              className={cn(
                "glass-card rounded-2xl p-7",
                practVisible
                  ? `animate-fade-up stagger-${idx + 1}`
                  : "opacity-0"
              )}
            >
              <p className="text-sm font-bold text-[#F4F3EE] mb-4">
                {t.practicesTitles[idx]}
              </p>

              {/* Practice 1: Good vs Bad */}
              {p.good && p.bad && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className="rounded-xl overflow-hidden flex"
                    style={{
                      background: "rgba(25,25,25,0.6)",
                      border: "1px solid rgba(120,140,93,0.15)",
                    }}
                  >
                    <div
                      className="w-1 shrink-0"
                      style={{ background: "#788C5D" }}
                    />
                    <div className="px-4 py-3.5">
                      <p className="text-xs uppercase tracking-wider text-[#788C5D] mb-2 font-medium">
                        {t.goodLabel}
                      </p>
                      <div className="font-mono text-xs leading-relaxed text-[#B0AEA5]">
                        {p.good.map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-xl overflow-hidden flex"
                    style={{
                      background: "rgba(25,25,25,0.6)",
                      border: "1px solid rgba(193,95,60,0.15)",
                    }}
                  >
                    <div
                      className="w-1 shrink-0"
                      style={{ background: "#C15F3C" }}
                    />
                    <div className="px-4 py-3.5">
                      <p className="text-xs uppercase tracking-wider text-[#C15F3C] mb-2 font-medium">
                        {t.badLabel}
                      </p>
                      <div className="font-mono text-xs leading-relaxed text-[#B0AEA5]">
                        {p.bad.map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Practice 2/3: Code block */}
              {p.code && !p.good && (
                <div
                  className="rounded-xl p-4 font-mono text-xs leading-relaxed text-[#B0AEA5]"
                  style={{
                    background: "#1a1a18",
                    border: "1px solid rgba(203,154,118,0.1)",
                  }}
                >
                  {p.code.map((line, i) => (
                    <div key={i}>
                      {line.startsWith("##") ? (
                        <span className="text-[#D97757]">{line}</span>
                      ) : line.startsWith("`") ? (
                        <span className="text-[#788C5D]">{line}</span>
                      ) : (
                        line || "\u00A0"
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Practice 4: Text */}
              {p.hasProgressiveText && (
                <p className="text-sm text-[#B0AEA5] leading-relaxed">
                  {t.progressiveText}
                </p>
              )}
            </div>
          ))}

          {/* Advanced technique note */}
          <div
            className={cn(
              "rounded-2xl overflow-hidden flex",
              practVisible ? "animate-fade-up stagger-5" : "opacity-0"
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
              <p className="text-xs uppercase tracking-wider text-[#CB9A76] mb-2 font-medium">
                {t.advancedLabel}
              </p>
              <p className="text-sm text-[#B0AEA5] leading-relaxed">
                {t.advancedText}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subsection C: Combating Model Laziness */}
      <div ref={lazyRef} className="max-w-7xl mx-auto">
        <div
          className={cn(
            "flex items-center gap-3 mb-6",
            lazyVisible ? "animate-fade-up" : "opacity-0"
          )}
        >
          <span className="h-3 w-3 rounded-full bg-[#788C5D]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#788C5D] font-medium">
            {t.perfSublabel}
          </span>
        </div>

        <div
          className={cn(
            "glass-card rounded-2xl p-7",
            lazyVisible ? "animate-fade-up stagger-1" : "opacity-0"
          )}
        >
          <p className="text-sm text-[#F4F3EE] font-bold mb-4">
            {t.perfIntro}
          </p>
          <div
            className="rounded-xl p-4 font-mono text-xs leading-relaxed text-[#B0AEA5] mb-5"
            style={{
              background: "#1a1a18",
              border: "1px solid rgba(203,154,118,0.1)",
            }}
          >
            {perfLines.map((line, i) => (
              <div key={i}>
                {line.startsWith("##") ? (
                  <span className="text-[#D97757]">{line}</span>
                ) : (
                  line
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-[#CB9A76] leading-relaxed">
            {t.perfNote}
          </p>
        </div>
      </div>
    </section>
  );
}
