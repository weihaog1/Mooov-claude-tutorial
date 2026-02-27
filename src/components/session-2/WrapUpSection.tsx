"use client";

import { useInView } from "@/components/useInView";

const takeaways = [
  "Skills = markdown files that teach agents reusable workflows",
  "No code required -- just natural language instructions",
  "Three levels: project (team), personal (you), enterprise (org)",
  "Claude can auto-invoke skills or you trigger manually",
  "Skills make AI agents consistent, shareable, and auditable",
  "Start simple: one skill solving one real problem today",
];

const resources = [
  {
    title: "Claude Code Documentation",
    url: "https://docs.anthropic.com/en/docs/claude-code",
    description: "Official docs for Claude Code setup, configuration, and usage",
  },
  {
    title: "Agent Skills Open Standard",
    url: "https://agentskills.io",
    description: "The open specification for agentic skills",
  },
  {
    title: "Skill Examples",
    url: "",
    description:
      "Browse .claude/skills/ in any Claude Code project for real-world examples",
    isLocal: true,
  },
];

const nextSteps = [
  "Identify one repetitive workflow you do today",
  "Write a SKILL.md for it (10 minutes max)",
  "Test it in Claude Code",
  "Share it with your team by committing to your repo",
];

export default function WrapUpSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useInView(0.05);
  const { ref: takeawaysRef, isVisible: takeawaysVisible } = useInView(0.1);
  const { ref: resourcesRef, isVisible: resourcesVisible } = useInView(0.1);
  const { ref: stepsRef, isVisible: stepsVisible } = useInView(0.1);

  return (
    <section
      id="s2-part5"
      ref={sectionRef}
      className="py-32 px-8 lg:px-20 relative"
      style={{ background: "#191919" }}
    >
      {/* Gradient divider at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(203,154,118,0.3), rgba(217,119,87,0.2), transparent)",
        }}
      />

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
            style={{ color: "rgba(217,119,87,0.12)" }}
          >
            05
          </p>
          <h2
            className="font-serif text-4xl font-bold -mt-10"
            style={{ color: "#F4F3EE" }}
          >
            Wrap-Up
          </h2>
          <p
            className="text-xs uppercase mt-2"
            style={{ letterSpacing: "0.25em", color: "#B0AEA5" }}
          >
            Key Takeaways & Next Steps
          </p>
          <p
            className="text-base mt-4 max-w-2xl"
            style={{ color: "rgba(244,243,238,0.7)" }}
          >
            Everything you need to remember and the actions to take right after
            this session.
          </p>
        </div>

        {/* Key Takeaways */}
        <div ref={takeawaysRef} className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <span
              className="h-3 w-3 rounded-full inline-block"
              style={{ backgroundColor: "#CB9A76" }}
            />
            <span
              className="text-xs uppercase"
              style={{
                letterSpacing: "0.2em",
                color: "rgba(244,243,238,0.5)",
              }}
            >
              Key Takeaways
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {takeaways.map((item, index) => (
              <div
                key={index}
                className={`glass-card rounded-xl px-5 py-4 flex items-start gap-4 ${
                  takeawaysVisible
                    ? `animate-fade-up stagger-${index + 1}`
                    : "opacity-0"
                }`}
              >
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "rgba(203,154,118,0.12)",
                    color: "#CB9A76",
                  }}
                >
                  {index + 1}
                </span>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(244,243,238,0.85)" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div ref={resourcesRef} className="mt-24">
          <div className="flex items-center gap-3 mb-8">
            <span
              className="h-3 w-3 rounded-full inline-block"
              style={{ backgroundColor: "#6A9BCC" }}
            />
            <span
              className="text-xs uppercase"
              style={{
                letterSpacing: "0.2em",
                color: "rgba(244,243,238,0.5)",
              }}
            >
              Resources
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {resources.map((resource, index) => (
              <div
                key={resource.title}
                className={`group glass-card rounded-2xl p-6 relative overflow-hidden ${
                  resourcesVisible
                    ? `animate-fade-up stagger-${index + 1}`
                    : "opacity-0"
                }`}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(106,155,204,0.12)",
                    color: "#6A9BCC",
                  }}
                >
                  {resource.isLocal ? (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>

                <h4
                  className="text-base font-bold"
                  style={{ color: "#F4F3EE" }}
                >
                  {resource.title}
                </h4>

                <p
                  className="text-xs leading-relaxed mt-2"
                  style={{ color: "rgba(244,243,238,0.6)" }}
                >
                  {resource.description}
                </p>

                {resource.url && (
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold mt-4 transition-opacity hover:opacity-80"
                    style={{ color: "#6A9BCC" }}
                  >
                    Visit
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                )}

                {resource.isLocal && (
                  <p
                    className="text-xs font-mono mt-4"
                    style={{ color: "#788C5D" }}
                  >
                    .claude/skills/
                  </p>
                )}

                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "#6A9BCC" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div ref={stepsRef} className="mt-24">
          <div className="flex items-center gap-3 mb-8">
            <span
              className="h-3 w-3 rounded-full inline-block"
              style={{ backgroundColor: "#D97757" }}
            />
            <span
              className="text-xs uppercase"
              style={{
                letterSpacing: "0.2em",
                color: "rgba(244,243,238,0.5)",
              }}
            >
              Next Steps
            </span>
          </div>

          <div className="max-w-2xl">
            {nextSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start gap-5 ${
                  index < nextSteps.length - 1 ? "mb-6" : ""
                } ${
                  stepsVisible
                    ? `animate-fade-up stagger-${index + 1}`
                    : "opacity-0"
                }`}
              >
                {/* Step number */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: "rgba(217,119,87,0.15)",
                      color: "#D97757",
                      border: "1px solid rgba(217,119,87,0.3)",
                    }}
                  >
                    {index + 1}
                  </span>
                  {index < nextSteps.length - 1 && (
                    <div
                      className="w-px h-6 mt-2"
                      style={{ background: "rgba(217,119,87,0.2)" }}
                    />
                  )}
                </div>

                {/* Step text */}
                <p
                  className="text-base leading-relaxed pt-2"
                  style={{ color: "rgba(244,243,238,0.85)" }}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div
            className={`mt-16 glass-card rounded-2xl p-8 text-center max-w-xl mx-auto ${
              stepsVisible ? "animate-fade-up stagger-6" : "opacity-0"
            }`}
            style={{
              borderColor: "rgba(203,154,118,0.2)",
            }}
          >
            <p
              className="font-serif text-xl font-bold"
              style={{ color: "#F4F3EE" }}
            >
              Start with one skill. Ship it today.
            </p>
            <p
              className="text-sm mt-3"
              style={{ color: "rgba(244,243,238,0.6)" }}
            >
              The best way to learn skills is to build one for a workflow you
              already repeat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
