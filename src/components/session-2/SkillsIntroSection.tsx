"use client";

import { useInView } from "@/components/useInView";

const cards = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
        />
      </svg>
    ),
    title: "The Problem Skills Solve",
    bullets: [
      "AI agents are general-purpose but don't know YOUR specific workflows",
      "Example: your team deploys with a 3-step process, but the agent doesn't know that",
      "Skills = a way to teach an agent reusable knowledge and workflows",
      "Analogy: the internal docs and SOPs you hand a new hire on day one",
    ],
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z"
        />
      </svg>
    ),
    title: "Core Concept - What Is a Skill",
    bullets: [
      "A set of instructions that an agent loads on demand",
      "Tells the agent WHAT to do, WHEN to do it, HOW to do it",
      "NOT code that runs - context/instructions the agent reads and follows",
      "Key distinction: Plugins = deterministic code | Skills = natural language instructions",
    ],
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
    title: "Why Skills Matter",
    bullets: [
      "Consistent: follow the same process every time",
      "Shareable: team uses the same workflows",
      "Composable: combine small skills into complex workflows",
      "Auditable: you can read exactly what the agent will do",
    ],
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
    title: "The Open Standard",
    bullets: [
      "Skills follow an open format (agentskills.io)",
      "Not locked to one vendor",
      "Goal: portable agent knowledge across platforms",
      "Analogy: 'muscle memory' for AI agents",
    ],
  },
];

const staggerClasses = ["stagger-1", "stagger-2", "stagger-3", "stagger-4"];

export default function SkillsIntroSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="s2-part1"
      ref={ref}
      className="py-32 px-8 lg:px-20"
      style={{ background: "#191919" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="relative">
          <span
            className="font-serif text-[8rem] font-black leading-none absolute top-0 left-0 select-none pointer-events-none"
            style={{ color: "rgba(217,119,87,0.12)" }}
          >
            01
          </span>
          <div className="relative pt-10">
            <h2
              className="font-serif text-4xl font-bold"
              style={{ color: "#F4F3EE" }}
            >
              Skills
            </h2>
            <p
              className="text-xs uppercase mt-2"
              style={{ letterSpacing: "0.25em", color: "#B0AEA5" }}
            >
              What Are Agentic Skills?
            </p>
            <p
              className="text-base mt-4 max-w-2xl"
              style={{ color: "rgba(244,243,238,0.7)" }}
            >
              Skills turn general-purpose AI agents into specialized teammates
              by teaching them your exact workflows, processes, and best
              practices.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`group relative glass-card rounded-2xl p-7 overflow-hidden ${
                isVisible
                  ? `animate-fade-up ${staggerClasses[index]}`
                  : "opacity-0"
              }`}
            >
              {/* Icon area */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(217,119,87,0.1)",
                  color: "#D97757",
                }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold mb-4"
                style={{ color: "#F4F3EE" }}
              >
                {card.title}
              </h3>

              {/* Bullet points */}
              <ul className="space-y-2.5">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 w-1 h-1 rounded-full shrink-0"
                      style={{ background: "#CB9A76" }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(244,243,238,0.75)" }}
                    >
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "#D97757" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
