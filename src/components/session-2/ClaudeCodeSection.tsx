"use client";

import { useInView } from "@/components/useInView";

const extensionMechanisms = [
  {
    mechanism: "Skills",
    description: "Teach agent workflows/knowledge",
    analogy: "Employee handbook",
    accent: "#CB9A76",
  },
  {
    mechanism: "MCP Tools",
    description: "Connect to external services",
    analogy: "Phone line to another dept",
    accent: "#D97757",
  },
  {
    mechanism: "Hooks",
    description: "Automate on specific events",
    analogy: "Automatic door sensor",
    accent: "#C15F3C",
  },
  {
    mechanism: "Subagents",
    description: "Delegate isolated tasks",
    analogy: "Assigning task to colleague",
    accent: "#6A9BCC",
  },
];

const skillLocations = [
  { level: "Enterprise", path: "Managed centrally for org", priority: 1 },
  { level: "Personal", path: "~/.claude/skills/", priority: 2 },
  { level: "Project", path: ".claude/skills/", priority: 3 },
  { level: "Plugins", path: "Bundled with third-party packages", priority: 4 },
];

const triggerModes = [
  {
    mode: "Manual",
    description: "Type /skill-name in Claude Code",
    accent: "#CB9A76",
  },
  {
    mode: "Automatic",
    description: "Claude reads descriptions, decides when relevant",
    accent: "#D97757",
  },
  {
    mode: "Programmatic",
    description: "Claude's Skill tool invokes during workflow",
    accent: "#C15F3C",
  },
];

export default function ClaudeCodeSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useInView(0.05);
  const { ref: mechRef, isVisible: mechVisible } = useInView(0.1);
  const { ref: locationRef, isVisible: locationVisible } = useInView(0.1);
  const { ref: triggerRef, isVisible: triggerVisible } = useInView(0.1);

  return (
    <section
      id="s2-part2"
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
            style={{ color: "rgba(217,119,87,0.12)" }}
          >
            02
          </p>
          <h2
            className="font-serif text-4xl font-bold -mt-10"
            style={{ color: "#F4F3EE" }}
          >
            Claude Code
          </h2>
          <p
            className="text-xs uppercase mt-2"
            style={{ letterSpacing: "0.25em", color: "#B0AEA5" }}
          >
            Skills Deep Dive
          </p>
          <p
            className="text-base mt-4 max-w-2xl"
            style={{ color: "rgba(244,243,238,0.7)" }}
          >
            Claude Code is Anthropic&apos;s agentic coding assistant that lives
            in your terminal. Skills extend what it knows and can do - think of
            them as reusable knowledge packets.
          </p>
        </div>

        {/* What Is Claude Code */}
        <div
          className={`mt-16 ${
            sectionVisible ? "animate-fade-up stagger-2" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-3 w-3 rounded-full inline-block"
              style={{ backgroundColor: "#CB9A76" }}
            />
            <span
              className="text-xs uppercase font-medium"
              style={{ letterSpacing: "0.2em", color: "rgba(244,243,238,0.5)" }}
            >
              What Is Claude Code
            </span>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <ul className="space-y-3">
              {[
                "Anthropic's official CLI tool for Claude",
                "Runs in terminal, reads/writes files, runs commands",
                "An agentic coding assistant -- takes actions, not just answers",
                "Skills extend what Claude Code knows and can do",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 inline-block"
                    style={{ backgroundColor: "#CB9A76" }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(244,243,238,0.8)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Extension Mechanisms */}
        <div ref={mechRef} className="mt-16">
          <div
            className={`flex items-center gap-3 mb-5 ${
              mechVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <span
              className="h-3 w-3 rounded-full inline-block"
              style={{ backgroundColor: "#D97757" }}
            />
            <span
              className="text-xs uppercase font-medium"
              style={{ letterSpacing: "0.2em", color: "rgba(244,243,238,0.5)" }}
            >
              Extension Mechanisms
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {extensionMechanisms.map((item, i) => (
              <div
                key={item.mechanism}
                className={`glass-card rounded-2xl p-5 relative overflow-hidden ${
                  mechVisible
                    ? `animate-fade-up stagger-${i + 1}`
                    : "opacity-0"
                }`}
              >
                <div
                  className="absolute top-0 left-0 h-[2px] w-full"
                  style={{ background: item.accent }}
                />
                <h4
                  className="text-base font-bold"
                  style={{ color: item.accent }}
                >
                  {item.mechanism}
                </h4>
                <p
                  className="text-sm leading-relaxed mt-2"
                  style={{ color: "rgba(244,243,238,0.8)" }}
                >
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "rgba(244,243,238,0.5)" }}
                  >
                    Analogy:
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-xs"
                    style={{
                      background: `${item.accent}14`,
                      border: `1px solid ${item.accent}33`,
                      color: "rgba(244,243,238,0.7)",
                    }}
                  >
                    {item.analogy}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Skills note */}
          <div
            className={`mt-4 rounded-xl px-5 py-3 ${
              mechVisible ? "animate-fade-up stagger-5" : "opacity-0"
            }`}
            style={{
              background: "rgba(203,154,118,0.06)",
              border: "1px solid rgba(203,154,118,0.15)",
            }}
          >
            <p className="text-sm" style={{ color: "#CB9A76" }}>
              Skills are the simplest mechanism -- just markdown files. No code,
              no server, no configuration needed.
            </p>
          </div>
        </div>

        {/* Where Skills Live */}
        <div ref={locationRef} className="mt-16">
          <div
            className={`flex items-center gap-3 mb-5 ${
              locationVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <span
              className="h-3 w-3 rounded-full inline-block"
              style={{ backgroundColor: "#C15F3C" }}
            />
            <span
              className="text-xs uppercase font-medium"
              style={{ letterSpacing: "0.2em", color: "rgba(244,243,238,0.5)" }}
            >
              Where Skills Live
            </span>
          </div>

          <div
            className={`glass-card rounded-2xl p-6 ${
              locationVisible ? "animate-slide-left stagger-1" : "opacity-0"
            }`}
          >
            <div className="space-y-0">
              {skillLocations.map((loc, i) => (
                <div
                  key={loc.level}
                  className="flex items-center gap-4 py-3"
                  style={{
                    borderBottom:
                      i < skillLocations.length - 1
                        ? "1px solid rgba(203,154,118,0.08)"
                        : "none",
                  }}
                >
                  {/* Priority indicator */}
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "rgba(203,154,118,0.1)",
                      color: "#CB9A76",
                    }}
                  >
                    {loc.priority}
                  </div>

                  {/* Level name */}
                  <div className="w-28 flex-shrink-0">
                    <span
                      className="text-sm font-bold"
                      style={{ color: "#F4F3EE" }}
                    >
                      {loc.level}
                    </span>
                  </div>

                  {/* Path */}
                  <span
                    className="font-mono text-xs"
                    style={{ color: "rgba(244,243,238,0.6)" }}
                  >
                    {loc.path}
                  </span>
                </div>
              ))}
            </div>

            {/* Priority note */}
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(203,154,118,0.08)" }}>
              <p className="text-xs" style={{ color: "rgba(244,243,238,0.5)" }}>
                Priority order: enterprise &gt; personal &gt; project (higher
                priority overrides lower)
              </p>
            </div>
          </div>
        </div>

        {/* How Skills Get Triggered */}
        <div ref={triggerRef} className="mt-16">
          <div
            className={`flex items-center gap-3 mb-5 ${
              triggerVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <span
              className="h-3 w-3 rounded-full inline-block"
              style={{ backgroundColor: "#6A9BCC" }}
            />
            <span
              className="text-xs uppercase font-medium"
              style={{ letterSpacing: "0.2em", color: "rgba(244,243,238,0.5)" }}
            >
              How Skills Get Triggered
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {triggerModes.map((trigger, i) => (
              <div
                key={trigger.mode}
                className={`glass-card rounded-2xl p-5 ${
                  triggerVisible
                    ? `animate-fade-up stagger-${i + 1}`
                    : "opacity-0"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{
                    background: `${trigger.accent}14`,
                  }}
                >
                  <TriggerIcon mode={trigger.mode} color={trigger.accent} />
                </div>
                <h4
                  className="text-sm font-bold"
                  style={{ color: "#F4F3EE" }}
                >
                  {trigger.mode}
                </h4>
                <p
                  className="text-sm leading-relaxed mt-2"
                  style={{ color: "rgba(244,243,238,0.7)" }}
                >
                  {trigger.description}
                </p>
              </div>
            ))}
          </div>

          <p
            className={`text-xs mt-4 ${
              triggerVisible ? "animate-fade-up stagger-4" : "opacity-0"
            }`}
            style={{ color: "rgba(244,243,238,0.5)" }}
          >
            You control which skills can auto-invoke vs require manual trigger
            via the frontmatter config.
          </p>
        </div>
      </div>
    </section>
  );
}

function TriggerIcon({ mode, color }: { mode: string; color: string }) {
  switch (mode) {
    case "Manual":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
    case "Automatic":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case "Programmatic":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
        </svg>
      );
    default:
      return null;
  }
}
