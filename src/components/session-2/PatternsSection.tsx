"use client";

import { useInView } from "@/components/useInView";

const skillExamples = [
  {
    title: "Deployment Skill",
    description:
      "Prevents auto-deploy with disable-model-invocation. Contains exact deploy steps so the agent guides you through the process without executing it autonomously.",
    badge: "disable-model-invocation: true",
    accent: "#C15F3C",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path
          d="M12 16V8m0 0l-3 3m3-3l3 3"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 16.7V7.3c0-.47 0-.71-.08-.92a1 1 0 00-.3-.38c-.18-.14-.42-.22-.9-.38l-6-2c-.2-.07-.3-.1-.4-.11a1 1 0 00-.24 0c-.1.01-.2.04-.4.11l-6 2c-.48.16-.72.24-.9.38a1 1 0 00-.3.38C4 6.59 4 6.83 4 7.3v9.4c0 .47 0 .71.08.92a1 1 0 00.3.38c.18.14.42.22.9.38l6 2c.2.07.3.1.4.11a1 1 0 00.24 0c.1-.01.2-.04.4-.11l6-2c.48-.16.72-.24.9-.38a1 1 0 00.3-.38c.08-.21.08-.45.08-.92z"
          stroke="currentColor"
          strokeWidth={1.5}
        />
      </svg>
    ),
  },
  {
    title: "PR Summary Skill",
    description:
      "Dynamic context injection that pulls PR diff via shell commands, then auto-summarizes changes into a structured summary for your team.",
    badge: "dynamic context injection",
    accent: "#6A9BCC",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path
          d="M6 3v12m0 0a3 3 0 103 3H6m0-3a3 3 0 01-3 3"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 9a3 3 0 100-6 3 3 0 000 6zm0 0v12"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Code Review Skill",
    description:
      "Encodes your team's review checklist into a reusable skill, ensuring consistent quality across every pull request.",
    badge: "team checklist encoded",
    accent: "#CB9A76",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path
          d="M9 11l3 3L22 4"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Onboarding Skill",
    description:
      "Background knowledge about architecture and conventions. Not user-invocable -- Claude auto-loads it when context is relevant.",
    badge: "user-invocable: false",
    accent: "#788C5D",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path
          d="M12 6.25a1 1 0 100-2 1 1 0 000 2zM12 20v-9m-4 9h8"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx={12}
          cy={12}
          r={10}
          stroke="currentColor"
          strokeWidth={1.5}
        />
      </svg>
    ),
  },
];

const bestPractices = [
  "One skill = one concern",
  "Write clear descriptions -- Claude uses them to decide when to invoke",
  "Keep SKILL.md under 500 lines; put detailed reference in separate files",
  "Test your skills before sharing",
  "Version control project skills (commit .claude/skills/ to git)",
];

const ecosystemLayers = [
  {
    label: "Skills",
    detail: "Knowledge and workflow templates",
    color: "#CB9A76",
  },
  {
    label: "MCP Servers",
    detail: "Real-time data and API access",
    color: "#6A9BCC",
  },
  {
    label: "Hooks",
    detail: "Event-driven automation",
    color: "#D97757",
  },
  {
    label: "Memory",
    detail: "CLAUDE.md, auto-memory -- persistent project context",
    color: "#788C5D",
  },
];

const futureItems = [
  "Open standard adoption",
  "Skill marketplaces and community sharing",
  "Enterprise skill management",
  "Skills as primary way teams encode engineering practices",
];

const staggerClasses = ["stagger-1", "stagger-2", "stagger-3", "stagger-4"];

export default function PatternsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useInView(0.05);
  const { ref: cardsRef, isVisible: cardsVisible } = useInView(0.1);
  const { ref: practicesRef, isVisible: practicesVisible } = useInView(0.1);
  const { ref: ecosystemRef, isVisible: ecosystemVisible } = useInView(0.1);
  const { ref: futureRef, isVisible: futureVisible } = useInView(0.1);

  return (
    <section
      id="s2-part4"
      ref={sectionRef}
      className="py-32 px-8 lg:px-20"
      style={{ background: "#191919" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`transition-all duration-700 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="font-serif text-[8rem] font-black leading-none select-none"
            style={{ color: "rgba(203,154,118,0.12)" }}
          >
            04
          </p>
          <h2
            className="font-serif text-4xl font-bold -mt-10"
            style={{ color: "#F4F3EE" }}
          >
            Patterns
          </h2>
          <p
            className="text-xs uppercase mt-2"
            style={{ letterSpacing: "0.25em", color: "#B0AEA5" }}
          >
            Real-World Patterns & Ecosystem
          </p>
          <p
            className="text-base mt-4 max-w-2xl"
            style={{ color: "rgba(244,243,238,0.7)" }}
          >
            See how skills work in practice. From deployment safeguards to
            automated PR summaries, skills encode your team's workflows into
            reusable, shareable templates.
          </p>
        </div>

        {/* Practical Skill Examples - 2x2 grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {skillExamples.map((item, index) => (
            <div
              key={item.title}
              className={`group relative glass-card rounded-2xl p-7 overflow-hidden ${
                cardsVisible
                  ? `animate-fade-up ${staggerClasses[index]}`
                  : "opacity-0"
              }`}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: `${item.accent}18`,
                  color: item.accent,
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold mt-4"
                style={{ color: "#F4F3EE" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mt-3"
                style={{ color: "rgba(244,243,238,0.75)" }}
              >
                {item.description}
              </p>

              {/* Config badge */}
              <div className="mt-5">
                <span
                  className="rounded-full px-3 py-1.5 text-xs font-mono inline-block"
                  style={{
                    background: `${item.accent}14`,
                    border: `1px solid ${item.accent}30`,
                    color: item.accent,
                  }}
                >
                  {item.badge}
                </span>
              </div>

              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: item.accent }}
              />
            </div>
          ))}
        </div>

        {/* Best Practices */}
        <div ref={practicesRef} className="mt-24">
          <div
            className={`transition-all duration-700 ${
              practicesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <span
                className="h-3 w-3 rounded-full inline-block"
                style={{ backgroundColor: "#CB9A76" }}
              />
              <span
                className="text-xs uppercase"
                style={{ letterSpacing: "0.2em", color: "rgba(244,243,238,0.5)" }}
              >
                Skill Design Best Practices
              </span>
            </div>

            <div className="space-y-4">
              {bestPractices.map((practice, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 ${
                    practicesVisible
                      ? `animate-fade-up stagger-${index + 1}`
                      : "opacity-0"
                  }`}
                >
                  <span
                    className="mt-1 flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "rgba(203,154,118,0.12)",
                      color: "#CB9A76",
                    }}
                  >
                    {index + 1}
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(244,243,238,0.8)" }}
                  >
                    {practice}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Agentic Ecosystem Diagram */}
        <div ref={ecosystemRef} className="mt-24">
          <div
            className={`transition-all duration-700 ${
              ecosystemVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="h-3 w-3 rounded-full inline-block"
                style={{ backgroundColor: "#D97757" }}
              />
              <span
                className="text-xs uppercase"
                style={{ letterSpacing: "0.2em", color: "rgba(244,243,238,0.5)" }}
              >
                The Bigger Picture
              </span>
            </div>
            <h3
              className="font-serif text-2xl font-bold"
              style={{ color: "#F4F3EE" }}
            >
              Agentic Ecosystem
            </h3>
            <p
              className="text-sm mt-3 max-w-xl"
              style={{ color: "rgba(244,243,238,0.6)" }}
            >
              These layers compose together -- a skill can reference MCP tools,
              trigger hooks, and read from memory.
            </p>
          </div>

          {/* Layer diagram */}
          <div className="mt-10 max-w-2xl mx-auto">
            {ecosystemLayers.map((layer, index) => (
              <div
                key={layer.label}
                className={`relative ${
                  ecosystemVisible
                    ? `animate-fade-up stagger-${index + 1}`
                    : "opacity-0"
                }`}
              >
                <div
                  className="glass-card rounded-xl px-6 py-4 flex items-center justify-between"
                  style={{
                    borderLeft: `3px solid ${layer.color}`,
                    marginBottom: index < ecosystemLayers.length - 1 ? "2px" : 0,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: layer.color }}
                    />
                    <span
                      className="text-sm font-bold"
                      style={{ color: "#F4F3EE" }}
                    >
                      {layer.label}
                    </span>
                  </div>
                  <span
                    className="text-xs"
                    style={{ color: "rgba(244,243,238,0.55)" }}
                  >
                    {layer.detail}
                  </span>
                </div>
                {index < ecosystemLayers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div
                      className="w-px h-3"
                      style={{ background: "rgba(203,154,118,0.2)" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Where Skills Are Headed */}
        <div ref={futureRef} className="mt-24">
          <div
            className={`transition-all duration-700 ${
              futureVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="h-3 w-3 rounded-full inline-block"
                style={{ backgroundColor: "#788C5D" }}
              />
              <span
                className="text-xs uppercase"
                style={{ letterSpacing: "0.2em", color: "rgba(244,243,238,0.5)" }}
              >
                Where Skills Are Headed
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {futureItems.map((item, index) => (
                <div
                  key={index}
                  className={`glass-card rounded-xl px-5 py-4 ${
                    futureVisible
                      ? `animate-fade-up stagger-${index + 1}`
                      : "opacity-0"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "#788C5D" }}
                    >
                      <path
                        d="M5 12h14m-7-7v14"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span
                      className="text-sm"
                      style={{ color: "rgba(244,243,238,0.8)" }}
                    >
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
