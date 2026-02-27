"use client";

import { useInView } from "@/components/useInView";

const frontmatterFields = [
  {
    field: "name",
    description: "The slash command name (e.g. fix-issue)",
    accent: "#CB9A76",
  },
  {
    field: "description",
    description:
      "Tells Claude WHEN to use this skill -- critical for auto-invocation",
    accent: "#D97757",
  },
  {
    field: "user-invocable",
    description: "Show in the / menu (true) or keep hidden (false)",
    accent: "#C15F3C",
  },
  {
    field: "disable-model-invocation",
    description: "Prevent Claude from auto-invoking this skill (safety guard)",
    accent: "#6A9BCC",
  },
  {
    field: "allowed-tools",
    description: "Restrict which tools the skill can use during execution",
    accent: "#788C5D",
  },
  {
    field: "context: fork",
    description: "Run in an isolated subagent to avoid polluting main context",
    accent: "#CB9A76",
  },
];

const demoSteps = [
  {
    step: 1,
    command: "mkdir -p .claude/skills/explain-code/",
    label: "Create the skill directory",
  },
  {
    step: 2,
    command: "Write the SKILL.md with frontmatter + instructions",
    label: "Author the skill file",
  },
  {
    step: 3,
    command: "/explain-code src/main.py",
    label: "Invoke the skill in Claude Code",
  },
  {
    step: 4,
    command: "Watch Claude follow your instructions step by step",
    label: "Observe the result",
  },
];

export default function SkillAnatomySection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useInView(0.05);
  const { ref: formatRef, isVisible: formatVisible } = useInView(0.1);
  const { ref: fieldsRef, isVisible: fieldsVisible } = useInView(0.1);
  const { ref: dynamicRef, isVisible: dynamicVisible } = useInView(0.1);
  const { ref: demoRef, isVisible: demoVisible } = useInView(0.1);

  return (
    <section
      id="s2-part3"
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
            03
          </p>
          <h2
            className="font-serif text-4xl font-bold -mt-10"
            style={{ color: "#F4F3EE" }}
          >
            Skill
          </h2>
          <p
            className="text-xs uppercase mt-2"
            style={{ letterSpacing: "0.25em", color: "#B0AEA5" }}
          >
            Anatomy of a Skill
          </p>
          <p
            className="text-base mt-4 max-w-2xl"
            style={{ color: "rgba(244,243,238,0.7)" }}
          >
            A skill is just a directory with a SKILL.md file. The file combines
            YAML configuration with markdown instructions to teach Claude Code
            new workflows.
          </p>
        </div>

        {/* File Structure */}
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
              File Structure
            </span>
          </div>

          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(25,25,25,0.6)",
              border: "1px solid rgba(203,154,118,0.08)",
            }}
          >
            <div className="font-mono text-sm leading-loose">
              <span style={{ color: "#CB9A76" }}>.claude/skills/</span>
              <br />
              <span style={{ color: "rgba(244,243,238,0.4)" }}>
                {"  "}
              </span>
              <span style={{ color: "#D97757" }}>my-skill/</span>
              <br />
              <span style={{ color: "rgba(244,243,238,0.4)" }}>
                {"    "}
              </span>
              <span style={{ color: "#F4F3EE" }}>SKILL.md</span>
              <span
                className="ml-4 text-xs"
                style={{ color: "rgba(203,154,118,0.5)" }}
              >
                {"<-- required"}
              </span>
              <br />
              <span style={{ color: "rgba(244,243,238,0.4)" }}>
                {"    "}
              </span>
              <span style={{ color: "rgba(244,243,238,0.5)" }}>
                reference.md
              </span>
              <span
                className="ml-4 text-xs"
                style={{ color: "rgba(203,154,118,0.35)" }}
              >
                {"<-- optional"}
              </span>
              <br />
              <span style={{ color: "rgba(244,243,238,0.4)" }}>
                {"    "}
              </span>
              <span style={{ color: "rgba(244,243,238,0.5)" }}>
                examples/
              </span>
              <span
                className="ml-4 text-xs"
                style={{ color: "rgba(203,154,118,0.35)" }}
              >
                {"<-- optional"}
              </span>
            </div>
          </div>
        </div>

        {/* The SKILL.md Format */}
        <div ref={formatRef} className="mt-16">
          <div
            className={`flex items-center gap-3 mb-5 ${
              formatVisible ? "animate-fade-up" : "opacity-0"
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
              The SKILL.md Format
            </span>
          </div>

          <div
            className={`${
              formatVisible ? "animate-slide-left stagger-1" : "opacity-0"
            }`}
          >
            <p
              className="text-sm mb-4"
              style={{ color: "rgba(244,243,238,0.7)" }}
            >
              Two parts:{" "}
              <span style={{ color: "#CB9A76" }}>YAML frontmatter</span> (config)
              +{" "}
              <span style={{ color: "#D97757" }}>Markdown body</span>{" "}
              (instructions)
            </p>

            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(203,154,118,0.08)",
              }}
            >
              {/* File tab */}
              <div
                className="px-5 py-2.5 flex items-center gap-2"
                style={{
                  background: "rgba(38,38,36,0.8)",
                  borderBottom: "1px solid rgba(203,154,118,0.08)",
                }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ background: "#D97757" }}
                />
                <span
                  className="font-mono text-xs"
                  style={{ color: "rgba(244,243,238,0.5)" }}
                >
                  SKILL.md
                </span>
              </div>

              {/* Code content */}
              <div
                className="p-5"
                style={{ background: "rgba(25,25,25,0.6)" }}
              >
                <pre className="font-mono text-xs leading-relaxed overflow-x-auto">
                  <span style={{ color: "rgba(203,154,118,0.5)" }}>---</span>
                  {"\n"}
                  <span style={{ color: "#CB9A76" }}>name</span>
                  <span style={{ color: "rgba(244,243,238,0.4)" }}>: </span>
                  <span style={{ color: "rgba(244,243,238,0.7)" }}>
                    fix-issue
                  </span>
                  {"\n"}
                  <span style={{ color: "#CB9A76" }}>description</span>
                  <span style={{ color: "rgba(244,243,238,0.4)" }}>: </span>
                  <span style={{ color: "rgba(244,243,238,0.7)" }}>
                    Fix a GitHub issue following our team standards
                  </span>
                  {"\n"}
                  <span style={{ color: "#CB9A76" }}>user-invocable</span>
                  <span style={{ color: "rgba(244,243,238,0.4)" }}>: </span>
                  <span style={{ color: "#788C5D" }}>true</span>
                  {"\n"}
                  <span style={{ color: "rgba(203,154,118,0.5)" }}>---</span>
                  {"\n\n"}
                  <span style={{ color: "#D97757" }}># Instructions</span>
                  {"\n"}
                  <span style={{ color: "rgba(244,243,238,0.65)" }}>
                    When fixing an issue:
                  </span>
                  {"\n"}
                  <span style={{ color: "rgba(244,243,238,0.65)" }}>
                    1. Read the issue details from GitHub
                  </span>
                  {"\n"}
                  <span style={{ color: "rgba(244,243,238,0.65)" }}>
                    2. Identify the relevant files
                  </span>
                  {"\n"}
                  <span style={{ color: "rgba(244,243,238,0.65)" }}>
                    3. Write a fix following our coding standards
                  </span>
                  {"\n"}
                  <span style={{ color: "rgba(244,243,238,0.65)" }}>
                    4. Write tests for the fix
                  </span>
                  {"\n"}
                  <span style={{ color: "rgba(244,243,238,0.65)" }}>
                    5. Create a PR with a clear description
                  </span>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Key Frontmatter Fields */}
        <div ref={fieldsRef} className="mt-16">
          <div
            className={`flex items-center gap-3 mb-5 ${
              fieldsVisible ? "animate-fade-up" : "opacity-0"
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
              Key Frontmatter Fields
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {frontmatterFields.map((item, i) => (
              <div
                key={item.field}
                className={`glass-card rounded-2xl p-5 ${
                  fieldsVisible
                    ? `animate-fade-up stagger-${(i % 6) + 1}`
                    : "opacity-0"
                }`}
              >
                <span
                  className="font-mono text-sm font-bold"
                  style={{ color: item.accent }}
                >
                  {item.field}
                </span>
                <p
                  className="text-sm leading-relaxed mt-2"
                  style={{ color: "rgba(244,243,238,0.7)" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Features */}
        <div ref={dynamicRef} className="mt-16">
          <div
            className={`flex items-center gap-3 mb-5 ${
              dynamicVisible ? "animate-fade-up" : "opacity-0"
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
              Dynamic Features
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Argument Substitution */}
            <div
              className={`glass-card rounded-2xl p-6 ${
                dynamicVisible ? "animate-slide-left stagger-1" : "opacity-0"
              }`}
            >
              <h4
                className="text-base font-bold"
                style={{ color: "#F4F3EE" }}
              >
                Argument Substitution
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {["$ARGUMENTS", "$0", "$1"].map((token) => (
                  <span
                    key={token}
                    className="font-mono text-xs rounded-md px-2 py-1"
                    style={{
                      background: "rgba(203,154,118,0.1)",
                      color: "#CB9A76",
                    }}
                  >
                    {token}
                  </span>
                ))}
              </div>
              <div
                className="mt-4 rounded-xl p-4"
                style={{
                  background: "rgba(25,25,25,0.6)",
                  border: "1px solid rgba(203,154,118,0.08)",
                }}
              >
                <p
                  className="font-mono text-xs"
                  style={{ color: "rgba(244,243,238,0.5)" }}
                >
                  # User types:
                </p>
                <p className="font-mono text-xs mt-1" style={{ color: "#CB9A76" }}>
                  /fix-issue 123
                </p>
                <p
                  className="font-mono text-xs mt-3"
                  style={{ color: "rgba(244,243,238,0.5)" }}
                >
                  # In SKILL.md:
                </p>
                <p className="font-mono text-xs mt-1">
                  <span style={{ color: "rgba(244,243,238,0.65)" }}>
                    Fix issue{" "}
                  </span>
                  <span style={{ color: "#D97757" }}>$0</span>
                </p>
                <p
                  className="font-mono text-xs mt-3"
                  style={{ color: "rgba(244,243,238,0.5)" }}
                >
                  # Claude sees:
                </p>
                <p
                  className="font-mono text-xs mt-1"
                  style={{ color: "rgba(244,243,238,0.8)" }}
                >
                  Fix issue 123
                </p>
              </div>
            </div>

            {/* Shell Command Injection */}
            <div
              className={`glass-card rounded-2xl p-6 ${
                dynamicVisible ? "animate-slide-right stagger-2" : "opacity-0"
              }`}
            >
              <h4
                className="text-base font-bold"
                style={{ color: "#F4F3EE" }}
              >
                Shell Command Injection
              </h4>
              <div className="mt-2">
                <span
                  className="font-mono text-xs rounded-md px-2 py-1"
                  style={{
                    background: "rgba(203,154,118,0.1)",
                    color: "#CB9A76",
                  }}
                >
                  {"`command`"}
                </span>
              </div>
              <div
                className="mt-4 rounded-xl p-4"
                style={{
                  background: "rgba(25,25,25,0.6)",
                  border: "1px solid rgba(203,154,118,0.08)",
                }}
              >
                <p
                  className="font-mono text-xs"
                  style={{ color: "rgba(244,243,238,0.5)" }}
                >
                  # In SKILL.md:
                </p>
                <p className="font-mono text-xs mt-1">
                  <span style={{ color: "rgba(244,243,238,0.65)" }}>
                    Recent commits:{" "}
                  </span>
                  <span style={{ color: "#D97757" }}>
                    !`git log --oneline -5`
                  </span>
                </p>
                <p
                  className="font-mono text-xs mt-3"
                  style={{ color: "rgba(244,243,238,0.5)" }}
                >
                  # Claude sees:
                </p>
                <p
                  className="font-mono text-xs mt-1"
                  style={{ color: "rgba(244,243,238,0.8)" }}
                >
                  Recent commits:
                </p>
                <p
                  className="font-mono text-xs"
                  style={{ color: "rgba(244,243,238,0.65)" }}
                >
                  a1b2c3d fix: Resolve auth bug
                </p>
                <p
                  className="font-mono text-xs"
                  style={{ color: "rgba(244,243,238,0.65)" }}
                >
                  e4f5g6h feat: Add user dashboard
                </p>
                <p
                  className="font-mono text-xs"
                  style={{ color: "rgba(244,243,238,0.65)" }}
                >
                  i7j8k9l refactor: Clean up utils
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Demo Steps */}
        <div ref={demoRef} className="mt-16">
          <div
            className={`flex items-center gap-3 mb-5 ${
              demoVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <span
              className="h-3 w-3 rounded-full inline-block"
              style={{ backgroundColor: "#788C5D" }}
            />
            <span
              className="text-xs uppercase font-medium"
              style={{ letterSpacing: "0.2em", color: "rgba(244,243,238,0.5)" }}
            >
              Live Demo Walkthrough
            </span>
          </div>

          <div className="space-y-4">
            {demoSteps.map((item, i) => (
              <div
                key={item.step}
                className={`flex items-start gap-4 ${
                  demoVisible
                    ? `animate-fade-up stagger-${i + 1}`
                    : "opacity-0"
                }`}
              >
                {/* Step number */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                  style={{
                    background: "rgba(217,119,87,0.12)",
                    color: "#D97757",
                  }}
                >
                  {item.step}
                </div>

                {/* Step content */}
                <div className="flex-1 pt-1">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#F4F3EE" }}
                  >
                    {item.label}
                  </p>
                  <div
                    className="mt-2 rounded-lg px-4 py-2.5 inline-block"
                    style={{
                      background: "rgba(25,25,25,0.6)",
                      border: "1px solid rgba(203,154,118,0.08)",
                    }}
                  >
                    <code
                      className="font-mono text-xs"
                      style={{ color: "rgba(244,243,238,0.65)" }}
                    >
                      {item.command}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
