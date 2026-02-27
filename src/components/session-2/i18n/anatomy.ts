export const anatomyText = {
  en: {
    // Section header
    title: "Anatomy",
    subtitle: "Inside a Skill",
    description:
      "Every skill follows a precise structure. The SKILL.md file is the heart -- its YAML frontmatter determines when Claude loads your skill, and the body contains the actual instructions.",

    // Code tabs
    frontmatterTab: "Frontmatter",
    instructionsTab: "Instructions",

    // Key Fields
    keyFieldsLabel: "Key Fields Reference",
    requiredLabel: "Required",
    optionalLabel: "Optional",
    addWhenPrefix: "Add when:",

    // Field descriptions
    fields: {
      name: {
        description:
          "kebab-case only. No spaces or capitals. Must match folder name.",
      },
      description: {
        description:
          "MUST include both what the skill does AND when to use it (trigger conditions). Under 1024 chars. No XML tags. Include specific trigger phrases users would say. Mention file types if relevant.",
      },
      license: {
        description: "Common: MIT, Apache-2.0.",
        when: "When sharing your skill with others.",
      },
      compatibility: {
        description: "1-500 characters.",
        when: "When your skill has environment requirements -- intended product surface, required system packages, or network access needs.",
      },
      metadata: {
        description:
          "Any custom key-value pairs. Suggested keys: author, version, mcp-server, category, tags, documentation, support.",
        when: "When you want to add custom key-value pairs for organization.",
      },
    },

    // Naming Rules
    namingRulesLabel: "Naming Rules",
    namingRules: [
      "kebab-case only",
      "No README.md in skill folder",
      "Exactly SKILL.md (case-sensitive)",
    ],

    // Description Field
    descFieldSublabel: "The Description Field",
    descFieldExplanation:
      'According to Anthropic\'s engineering blog: "This metadata provides just enough information for Claude to know when each skill should be used without loading all of it into context." This is the first level of progressive disclosure.',
    structureLabel: "Structure",
    whatItDoes: "What it does",
    whenToUse: "When to use it",
    keyCapabilities: "Key capabilities",

    // Good examples
    goodLabel: "Good",
    goodExamples: [
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
    ],

    // Bad examples
    badLabel: "Bad",
    badExamples: [
      {
        label: "Too vague",
        value: "Helps with projects.",
      },
      {
        label: "Missing triggers",
        value: "Creates sophisticated multi-page documentation systems.",
      },
      {
        label: "Too technical, no user triggers",
        value:
          "Implements the Project entity model with hierarchical relationships.",
      },
    ],

    // Security
    securitySublabel: "Security Restrictions",
    forbiddenTitle: "Forbidden in frontmatter",
    allowedTitle: "Allowed",
    forbiddenNote:
      "Frontmatter appears in Claude's system prompt. Malicious content could inject instructions.",
    forbiddenItems: [
      {
        text: "XML angle brackets (< >)",
        why: "Could inject instructions into system prompt",
      },
      {
        text: 'Skills with "claude" or "anthropic" in name',
        why: "Reserved namespace for official skills",
      },
    ],
    allowedItems: [
      "Any standard YAML types (strings, numbers, booleans, lists, objects)",
      "Custom metadata fields",
      "Long descriptions (up to 1024 characters)",
    ],
  },

  zh: {
    // Section header
    title: "解剖",
    subtitle: "Skill 的内部结构",
    description:
      "每个 skill 都遵循一套精确的结构。SKILL.md 文件是核心 -- 其 YAML frontmatter 决定了 Claude 何时加载你的 skill，正文则包含实际的指令内容。",

    // Code tabs
    frontmatterTab: "Frontmatter",
    instructionsTab: "Instructions",

    // Key Fields
    keyFieldsLabel: "关键字段参考",
    requiredLabel: "必填",
    optionalLabel: "可选",
    addWhenPrefix: "适用场景:",

    // Field descriptions
    fields: {
      name: {
        description:
          "仅限 kebab-case，不允许空格或大写字母，必须与文件夹名称一致。",
      },
      description: {
        description:
          "必须同时包含 skill 的功能说明和触发条件。不超过 1024 个字符，禁止使用 XML 标签。需包含用户可能使用的具体触发短语，如涉及特定文件类型也应注明。",
      },
      license: {
        description: "常见: MIT, Apache-2.0。",
        when: "当你要与他人分享 skill 时。",
      },
      compatibility: {
        description: "1-500 个字符。",
        when: "当你的 skill 有环境要求时 -- 目标产品平台、所需系统包或网络访问需求。",
      },
      metadata: {
        description:
          "任意自定义键值对。建议的 key: author, version, mcp-server, category, tags, documentation, support。",
        when: "当你需要自定义键值对来组织和标记 skill 时。",
      },
    },

    // Naming Rules
    namingRulesLabel: "命名规则",
    namingRules: [
      "仅限 kebab-case",
      "skill 文件夹内不能有 README.md",
      "文件名必须严格为 SKILL.md (区分大小写)",
    ],

    // Description Field
    descFieldSublabel: "description 字段",
    descFieldExplanation:
      '根据 Anthropic 工程博客的说法: "这些元数据为 Claude 提供了刚好足够的信息，使其知道何时应该使用每个 skill，而无需将所有内容加载到上下文中。"这就是渐进式披露的第一层。',
    structureLabel: "结构",
    whatItDoes: "做什么",
    whenToUse: "何时使用",
    keyCapabilities: "核心能力",

    // Good examples
    goodLabel: "好的示例",
    goodExamples: [
      {
        label: "具体且可操作",
        value:
          "Analyzes Figma design files and generates developer handoff documentation. Use when user uploads .fig files, asks for 'design specs', 'component documentation', or 'design-to-code handoff'.",
      },
      {
        label: "包含触发短语",
        value:
          "Manages Linear project workflows including sprint planning, task creation, and status tracking. Use when user mentions 'sprint', 'Linear tasks', 'project planning', or asks to 'create tickets'.",
      },
      {
        label: "价值主张清晰",
        value:
          "End-to-end customer onboarding workflow for PayFlow. Handles account creation, payment setup, and subscription management. Use when user says 'onboard new customer', 'set up subscription', or 'create PayFlow account'.",
      },
    ],

    // Bad examples
    badLabel: "反面示例",
    badExamples: [
      {
        label: "过于模糊",
        value: "Helps with projects.",
      },
      {
        label: "缺少触发条件",
        value: "Creates sophisticated multi-page documentation systems.",
      },
      {
        label: "过于技术化，没有用户触发词",
        value:
          "Implements the Project entity model with hierarchical relationships.",
      },
    ],

    // Security
    securitySublabel: "安全限制",
    forbiddenTitle: "frontmatter 中禁止使用",
    allowedTitle: "允许使用",
    forbiddenNote:
      "Frontmatter 会出现在 Claude 的系统提示中，恶意内容可能注入指令。",
    forbiddenItems: [
      {
        text: "XML 尖括号 (< >)",
        why: "可能向系统提示注入指令",
      },
      {
        text: '名称中包含 "claude" 或 "anthropic" 的 skill',
        why: "官方 skill 的保留命名空间",
      },
    ],
    allowedItems: [
      "任何标准 YAML 类型 (字符串、数字、布尔值、列表、对象)",
      "自定义 metadata 字段",
      "长描述 (最多 1024 个字符)",
    ],
  },
} as const;
