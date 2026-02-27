import React from "react";

export const tabs = [
  {
    id: "document",
    label: "Document & Asset Creation",
    example: "frontend-design skill",
    exampleDesc: "creates distinctive, production-grade interfaces",
    techniques: [
      "Embedded style guides and brand standards",
      "Template structures for consistent output",
      "Quality checklists before finalizing",
      "Uses Claude's built-in capabilities",
    ],
    badge: "No external tools required",
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
    label: "Workflow Automation",
    example: "skill-creator skill",
    exampleDesc: "interactive guide for building new skills",
    techniques: [
      "Step-by-step workflow with validation gates",
      "Templates for common structures",
      "Built-in review and improvement suggestions",
      "Iterative refinement loops",
    ],
    badge: "Multi-step orchestration",
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
    label: "MCP Enhancement",
    example: "sentry-code-review skill",
    exampleDesc: "analyzes bugs in PRs using Sentry data",
    techniques: [
      "Coordinates multiple MCP calls in sequence",
      "Embeds domain expertise",
      "Provides context users would otherwise specify",
      "Error handling for common MCP issues",
    ],
    badge: "Requires MCP server",
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

export const quantitative = [
  { text: "Skill triggers on 90%+ of relevant queries", color: "#CB9A76" },
  { text: "Completes workflow in minimal tool calls", color: "#D97757" },
  { text: "Zero failed API calls per workflow", color: "#C15F3C" },
];

export const qualitative = [
  { text: "Users don't need to prompt about next steps", color: "#6A9BCC" },
  { text: "Workflows complete without correction", color: "#788C5D" },
  { text: "Consistent results across sessions", color: "#CB9A76" },
];

export const useCaseBlock = {
  label: "Use Case: Project Sprint Planning",
  trigger: 'User says "help me plan this sprint" or "create sprint tasks"',
  steps: [
    "Fetch current project status from Linear (via MCP)",
    "Analyze team velocity and capacity",
    "Suggest task prioritization",
    "Create tasks in Linear with proper labels and estimates",
  ],
  result: "Fully planned sprint with tasks created",
};

export const askYourselfQuestions = [
  "What does a user want to accomplish?",
  "What multi-step workflows does this require?",
  "Which tools are needed (built-in or MCP)?",
  "What domain knowledge or best practices should be embedded?",
];

export const measurementCards = [
  {
    title: "Triggering Coverage",
    description:
      "Run 10-20 test queries that should trigger your skill. Track how many times it loads automatically vs. requires explicit invocation.",
    color: "#CB9A76",
  },
  {
    title: "Efficiency",
    description:
      "Compare the same task with and without the skill enabled. Count tool calls and total tokens consumed.",
    color: "#D97757",
  },
  {
    title: "Quality Consistency",
    description:
      "Run the same request 3-5 times. Compare outputs for structural consistency and quality. Can a new user accomplish the task on first try with minimal guidance?",
    color: "#6A9BCC",
  },
];
