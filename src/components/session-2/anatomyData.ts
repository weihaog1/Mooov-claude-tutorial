export type Segment = { text: string; color: string };
export type CodeLine = Segment[];

export const frontmatterLines: CodeLine[] = [
  [{ text: "---", color: "#D97757" }],
  [{ text: "name: ", color: "#CB9A76" }, { text: "sprint-planner", color: "#6A9BCC" }],
  [{ text: "description: ", color: "#CB9A76" }, { text: "Manages Linear project", color: "#6A9BCC" }],
  [{ text: "  workflows including sprint planning,", color: "#6A9BCC" }],
  [{ text: "  task creation, and status tracking.", color: "#6A9BCC" }],
  [{ text: '  Use when user mentions "sprint",', color: "#6A9BCC" }],
  [{ text: '  "Linear tasks", "project planning",', color: "#6A9BCC" }],
  [{ text: '  or asks to "create tickets".', color: "#6A9BCC" }],
  [{ text: "license: ", color: "#CB9A76" }, { text: "MIT", color: "#6A9BCC" }],
  [{ text: "metadata:", color: "#CB9A76" }],
  [{ text: "  author: ", color: "#CB9A76" }, { text: "DevTeam", color: "#6A9BCC" }],
  [{ text: "  version: ", color: "#CB9A76" }, { text: "2.1.0", color: "#6A9BCC" }],
  [{ text: "  mcp-server: ", color: "#CB9A76" }, { text: "linear", color: "#6A9BCC" }],
  [{ text: "---", color: "#D97757" }],
];

export const instructionLines: CodeLine[] = [
  [{ text: "# Sprint Planner", color: "#D97757" }],
  [{ text: "\u00A0", color: "#B0AEA5" }],
  [{ text: "## Instructions", color: "#D97757" }],
  [{ text: "\u00A0", color: "#B0AEA5" }],
  [{ text: "### Step 1: Fetch Project Status", color: "#D97757" }],
  [{ text: "Call MCP tool: ", color: "#B0AEA5" }, { text: "`get_projects`", color: "#788C5D" }],
  [{ text: "Parameters: team_id, status", color: "#B0AEA5" }],
  [{ text: "\u00A0", color: "#B0AEA5" }],
  [{ text: "### Step 2: Analyze Velocity", color: "#D97757" }],
  [{ text: "Review last 3 sprints for:", color: "#B0AEA5" }],
  [{ text: "- Average story points completed", color: "#B0AEA5" }],
  [{ text: "- Carry-over percentage", color: "#B0AEA5" }],
  [{ text: "- Team capacity changes", color: "#B0AEA5" }],
  [{ text: "\u00A0", color: "#B0AEA5" }],
  [{ text: "### Step 3: Create Sprint", color: "#D97757" }],
  [{ text: "Call MCP tool: ", color: "#B0AEA5" }, { text: "`create_sprint`", color: "#788C5D" }],
];

export const fields = [
  {
    name: "name",
    accent: "#CB9A76",
    required: true,
    description: "kebab-case only. No spaces or capitals. Must match folder name.",
  },
  {
    name: "description",
    accent: "#D97757",
    required: true,
    description:
      "MUST include both what the skill does AND when to use it (trigger conditions). Under 1024 chars. No XML tags. Include specific trigger phrases users would say. Mention file types if relevant.",
  },
  {
    name: "license",
    accent: "#6A9BCC",
    required: false,
    description: "Common: MIT, Apache-2.0.",
    when: "When making your skill open source.",
  },
  {
    name: "compatibility",
    accent: "#C15F3C",
    required: false,
    description: "1-500 characters.",
    when: "When your skill has environment requirements -- intended product surface, required system packages, or network access needs.",
  },
  {
    name: "metadata",
    accent: "#788C5D",
    required: false,
    description: "Any custom key-value pairs. Suggested keys: author, version, mcp-server, category, tags, documentation, support.",
    when: "When you want custom key-value pairs for discoverability and management.",
  },
];

export const namingRules = [
  { text: "kebab-case only", valid: true },
  { text: "No README.md in skill folder", valid: false },
  { text: "Exactly SKILL.md (case-sensitive)", valid: true },
];

export const goodExamples = [
  {
    label: "Specific and actionable",
    value:
      "Analyzes Figma design files and generates developer handoff documentation. Use when user uploads .fig files, asks for 'design specs', 'component documentation', or 'design-to-code handoff'.",
  },
  {
    label: "Includes trigger phrases",
    value:
      "Manages Linear project workflows including sprint planning, task creation, and status tracking. Use when user mentions 'sprint', 'Linear tasks', 'project planning', or asks to 'create tickets'.",
  },
  {
    label: "Clear value proposition",
    value:
      "End-to-end customer onboarding workflow for PayFlow. Handles account creation, payment setup, and subscription management. Use when user says 'onboard new customer', 'set up subscription', or 'create PayFlow account'.",
  },
];

export const badExamples = [
  { label: "Too vague", value: "Helps with projects." },
  {
    label: "Missing triggers",
    value: "Creates sophisticated multi-page documentation systems.",
  },
  {
    label: "Too technical, no user triggers",
    value:
      "Implements the Project entity model with hierarchical relationships.",
  },
];

export const forbiddenItems = [
  {
    text: "XML angle brackets (< >)",
    why: "Could inject instructions into system prompt",
  },
  {
    text: 'Skills with "claude" or "anthropic" in name',
    why: "Reserved namespace for official skills",
  },
];

export const allowedItems = [
  "Any standard YAML types (strings, numbers, booleans, lists, objects)",
  "Custom metadata fields",
  "Long descriptions (up to 1024 characters)",
];
