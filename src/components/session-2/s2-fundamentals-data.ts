export const fileTreeLines = [
  { text: "my-skill/", indent: 0, isFolder: true },
  { text: "SKILL.md", indent: 1, isFolder: false, annotation: "(required)" },
  { text: "scripts/", indent: 1, isFolder: true, annotation: "(optional)" },
  { text: "validate.sh", indent: 2, isFolder: false },
  { text: "references/", indent: 1, isFolder: true, annotation: "(optional)" },
  { text: "api-guide.md", indent: 2, isFolder: false },
  { text: "assets/", indent: 1, isFolder: true, annotation: "(optional)" },
];

export const layers = [
  { label: "YAML Frontmatter", desc: "Always loaded", color: "#CB9A76" },
  { label: "SKILL.md Body", desc: "Loaded when relevant", color: "#D97757" },
  { label: "Linked Files", desc: "On demand", color: "#B0AEA5" },
];

export const platforms = [
  { label: "Claude.ai" },
  { label: "Claude Code" },
  { label: "API" },
];

export const personas = [
  {
    title: "Developers",
    description:
      "Developers who want Claude to follow specific workflows consistently",
    color: "#CB9A76",
  },
  {
    title: "Power Users",
    description:
      "Power users who want Claude to follow specific workflows",
    color: "#D97757",
  },
  {
    title: "Teams",
    description:
      "Teams looking to standardize how Claude works across their organization",
    color: "#6A9BCC",
  },
];

export const twoPaths = [
  {
    title: "Standalone Skills",
    description:
      "Building standalone skills? Focus on Fundamentals, Planning and Design, and Category 1-2.",
    color: "#CB9A76",
  },
  {
    title: "MCP Enhancement",
    description:
      "Enhancing an MCP integration? The Skills + MCP section and Category 3 are for you.",
    color: "#6A9BCC",
  },
];

export const mcpVsSkillsRows = [
  {
    mcp: "Connects Claude to your service",
    skills: "Teaches Claude how to use your service effectively",
  },
  {
    mcp: "Provides real-time data access and tool invocation",
    skills: "Captures workflows and best practices",
  },
  {
    mcp: "What Claude can do",
    skills: "How Claude should do it",
  },
];

export const withoutSkillsBullets = [
  "Users connect your MCP but don't know what to do next",
  "Support tickets asking \"how do I do X with your integration\"",
  "Each conversation starts from scratch",
  "Inconsistent results because users prompt differently each time",
  "Users blame your connector when the real issue is workflow guidance",
];

export const withSkillsBullets = [
  "Pre-built workflows activate automatically when needed",
  "Consistent, reliable tool usage",
  "Best practices embedded in every interaction",
  "Lower learning curve for your integration",
];
