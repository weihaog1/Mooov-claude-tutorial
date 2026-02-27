/* Data arrays for S2LaunchSection to keep the component under 400 lines */

export const testingCards = [
  {
    title: "Triggering Tests",
    borderColor: "#788C5D",
    description: "Ensure your skill loads at the right times",
    items: [
      "Triggers on obvious tasks",
      "Triggers on paraphrased requests",
      "Doesn't trigger on unrelated topics",
    ],
  },
  {
    title: "Functional Tests",
    borderColor: "#6A9BCC",
    description: "Verify correct outputs and error handling",
    items: [
      "Valid outputs generated",
      "API calls succeed",
      "Edge cases covered",
    ],
  },
];

export const distributionSteps = [
  {
    number: 1,
    title: "Host on GitHub",
    description:
      "Public repo with a clear README, example inputs, and expected outputs for each skill.",
  },
  {
    number: 2,
    title: "Document with MCP",
    description:
      "Link skills from your MCP server documentation so users discover them naturally.",
  },
  {
    number: 3,
    title: "Installation Guide",
    description:
      "Quick-start instructions for both Claude.ai and Claude Code environments.",
  },
];

export const resourceLinks = [
  { label: "Skills Documentation", href: "#" },
  { label: "Skills Open Standard", href: "#" },
  { label: "Example Skills Repository", href: "#" },
];

export const skillCreatorCards = [
  {
    title: "Creating Skills",
    items: [
      "Generate skills from natural language descriptions",
      "Produce properly formatted SKILL.md with frontmatter",
      "Suggest trigger phrases and structure",
    ],
  },
  {
    title: "Reviewing Skills",
    items: [
      "Flag common issues (vague descriptions, missing triggers)",
      "Identify potential over/under-triggering risks",
      "Suggest test cases based on stated purpose",
    ],
  },
  {
    title: "Iterative Improvement",
    items: [
      "Bring edge cases back to skill-creator",
      'Example: "Use the issues identified in this chat to improve how the skill handles [specific edge case]"',
    ],
  },
];

export const iterationSignals = [
  {
    title: "Undertriggering Signals",
    borderColor: "#D97757",
    symptoms: [
      "Skill doesn't load when it should",
      "Users manually enabling it",
      "Support questions about when to use it",
    ],
    solution:
      "Add more detail and nuance to the description -- this may include keywords particularly for technical terms",
  },
  {
    title: "Overtriggering Signals",
    borderColor: "#C15F3C",
    symptoms: [
      "Skill loads for irrelevant queries",
      "Users disabling it",
      "Confusion about purpose",
    ],
    solution: "Add negative triggers, be more specific",
  },
  {
    title: "Execution Issues",
    borderColor: "#6A9BCC",
    symptoms: [
      "Inconsistent results",
      "API call failures",
      "User corrections needed",
    ],
    solution: "Improve instructions, add error handling",
  },
];

export const apiComparisonRows = [
  { useCase: "End users interacting directly", surface: "Claude.ai / Claude Code" },
  { useCase: "Manual testing during development", surface: "Claude.ai / Claude Code" },
  { useCase: "Individual, ad-hoc workflows", surface: "Claude.ai / Claude Code" },
  { useCase: "Applications using skills programmatically", surface: "API" },
  { useCase: "Production deployments at scale", surface: "API" },
  { useCase: "Automated pipelines and agent systems", surface: "API" },
];

export const checklistGroups = [
  {
    title: "Before You Start",
    accentColor: "#CB9A76",
    items: [
      "Identified 2-3 concrete use cases",
      "Tools identified (built-in or MCP)",
      "Reviewed this guide and example skills",
      "Planned folder structure",
    ],
  },
  {
    title: "During Development",
    accentColor: "#D97757",
    items: [
      "Folder named in kebab-case",
      "SKILL.md file exists (exact spelling)",
      "YAML frontmatter has --- delimiters",
      "name field: kebab-case, no spaces",
      "description includes WHAT and WHEN",
      "No XML tags anywhere",
    ],
  },
  {
    title: "Before Upload",
    accentColor: "#6A9BCC",
    items: [
      "Tested triggering on obvious tasks",
      "Tested on paraphrased requests",
      "Verified doesn't trigger on unrelated",
      "Functional tests pass",
      "Compressed as .zip file",
    ],
  },
  {
    title: "After Upload",
    accentColor: "#788C5D",
    items: [
      "Test in real conversations",
      "Monitor for under/over-triggering",
      "Collect user feedback",
      "Iterate on description and instructions",
    ],
  },
];
