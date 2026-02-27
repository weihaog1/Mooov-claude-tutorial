export const fundamentalsText = {
  en: {
    // Section header
    title: "Fundamentals",
    subtitle: "What Are Skills?",
    description:
      "Skills are one of the most powerful ways to customize Claude for your specific needs. Instead of re-explaining your preferences, processes, and domain expertise in every conversation, skills let you teach Claude once and benefit every time.",

    // The Core Idea
    coreIdeaLabel: "The Core Idea",
    coreIdeaDefinition:
      "A skill is a folder containing instructions that teaches Claude how to handle specific tasks or workflows.",
    coreIdeaExplanation:
      "Skills work best when you have repeatable workflows. They capture your domain knowledge, best practices, and step-by-step processes so Claude can apply them consistently across every conversation.",
    useCases: [
      {
        title: "Frontend Design",
        description:
          "Generate UI components from specs following your design system",
      },
      {
        title: "Research",
        description:
          "Conduct research with consistent methodology and structured output",
      },
      {
        title: "Document Creation",
        description:
          "Create documents that follow your style guide and formatting standards",
      },
      {
        title: "Multi-Step Automation",
        description:
          "Orchestrate processes that combine multiple tools and decision points",
      },
    ],

    // Skill Structure card
    skillStructureTitle: "Skill Structure",
    skillStructureDesc: "Every skill is a folder with a clear hierarchy",

    // Progressive Disclosure card
    progressiveTitle: "Progressive Disclosure",
    progressiveDesc: "Content loads in stages",

    // Composability & Portability card
    composabilityTitle: "Composability & Portability",
    composabilityLabel: "Composability",
    composabilityDesc:
      "Load multiple skills simultaneously. Each skill works alongside others.",
    portabilityLabel: "Portability",
    portabilityDesc: "Create once, works across all surfaces.",

    // Layers
    layers: [
      { label: "YAML Frontmatter", desc: "Always loaded", color: "#CB9A76" },
      {
        label: "SKILL.md Body",
        desc: "Loaded when relevant",
        color: "#D97757",
      },
      { label: "Linked Files", desc: "On demand", color: "#B0AEA5" },
    ],

    // File tree annotations
    annotationRequired: "(required)",
    annotationOptional: "(optional)",

    // Who This Is For
    whoSublabel: "Who This Is For",
    personas: [
      {
        title: "Developers",
        description:
          "Developers who want Claude to follow specific workflows consistently",
      },
      {
        title: "Power Users",
        description:
          "Power users who want Claude to follow specific workflows",
      },
      {
        title: "Teams",
        description:
          "Teams looking to standardize how Claude works across their organization",
      },
    ],

    // Two Paths
    pathsSublabel: "Two Paths Through This Guide",
    twoPaths: [
      {
        title: "Standalone Skills",
        description:
          "Building standalone skills? Focus on Fundamentals, Planning and Design, and Category 1-2.",
      },
      {
        title: "MCP Enhancement",
        description:
          "Enhancing an MCP integration? The Skills + MCP section and Category 3 are for you.",
      },
    ],
    pathsNote:
      "Both paths share the same technical requirements, but you choose what is relevant to your use case.",
    pathsCallout:
      "By the end, you will be able to build a functional skill in a single sitting. Expect about 15-30 minutes to build and test your first working skill using the skill-creator.",

    // What is MCP?
    whatIsMcpLabel: "What is MCP?",
    whatIsMcpTitle: "Model Context Protocol",
    whatIsMcpDesc:
      "MCP is an open protocol that connects Claude to external services and tools. It gives Claude the ability to read data, take actions, and interact with the apps you already use.",
    whatIsMcpExplanation:
      "Think of MCP as giving Claude hands to reach into your tools. Without MCP, Claude can only work with what you paste into the conversation. With MCP, Claude can directly access your project management, documentation, code repositories, and more.",
    mcpServices: [
      { label: "Notion", category: "Docs" },
      { label: "Linear", category: "Projects" },
      { label: "GitHub", category: "Code" },
      { label: "Asana", category: "Tasks" },
    ],

    // MCP + Skills Together
    mcpSkillsLabel: "MCP + Skills Together",
    kitchenMcp: "MCP",
    kitchenMcpRole: "The Kitchen",
    kitchenMcpDesc:
      "Access to tools, ingredients, and equipment. MCP connects Claude to your services and gives it the ability to act.",
    kitchenSkills: "Skills",
    kitchenSkillsRole: "The Recipes",
    kitchenSkillsDesc:
      "Step-by-step instructions on how to create something valuable. Skills capture the workflows and best practices.",
    kitchenSummary:
      "Together, they enable users to accomplish complex tasks without needing to figure out every step themselves.",

    // MCP vs Skills table
    mcpConnectivity: "MCP (Connectivity)",
    skillsKnowledge: "Skills (Knowledge)",
    mcpVsSkillsRows: [
      {
        mcp: "Connects Claude to your service (Notion, Asana, Linear, etc.)",
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
    ],

    withoutSkillsTitle: "Without Skills",
    withSkillsTitle: "With Skills",

    withoutSkillsBullets: [
      "Users connect your MCP but don't know what to do next",
      'Support tickets asking "how do I do X with your integration"',
      "Each conversation starts from scratch",
      "Inconsistent results because users prompt differently each time",
      "Users blame your connector when the real issue is workflow guidance",
    ],

    withSkillsBullets: [
      "Pre-built workflows activate automatically when needed",
      "Consistent, reliable tool usage",
      "Best practices embedded in every interaction",
      "Lower learning curve for your integration",
    ],
  },

  zh: {
    // Section header
    title: "基础概念",
    subtitle: "什么是 Skills?",
    description:
      "Skills 是定制 Claude 最强大的方式之一。与其每次对话都重新解释你的偏好、流程和专业知识，不如通过 skill 一次性教会 Claude，之后每次都能受益。",

    // The Core Idea
    coreIdeaLabel: "核心概念",
    coreIdeaDefinition:
      "Skill 是一个包含指令的文件夹，用于教会 Claude 如何处理特定任务或工作流程。",
    coreIdeaExplanation:
      "当你有可重复的工作流程时，skill 的效果最好。它能沉淀你的领域知识、最佳实践和分步流程，让 Claude 在每次对话中都能一致地执行。",
    useCases: [
      {
        title: "前端设计",
        description: "根据规范生成符合团队设计系统的 UI 组件",
      },
      {
        title: "研究工作",
        description: "以一致的方法论和结构化输出进行研究",
      },
      {
        title: "文档创建",
        description: "创建符合团队风格指南和格式标准的文档",
      },
      {
        title: "多步骤自动化",
        description: "编排结合多个工具和决策点的复杂流程",
      },
    ],

    // Skill Structure card
    skillStructureTitle: "Skill 结构",
    skillStructureDesc: "每个 skill 都是一个层级清晰的文件夹",

    // Progressive Disclosure card
    progressiveTitle: "渐进式加载",
    progressiveDesc: "内容分阶段加载",

    // Composability & Portability card
    composabilityTitle: "可组合性与可移植性",
    composabilityLabel: "可组合性",
    composabilityDesc: "同时加载多个 skill，每个 skill 可以协同工作。",
    portabilityLabel: "可移植性",
    portabilityDesc: "一次创建，全平台通用。",

    // Layers
    layers: [
      {
        label: "YAML Frontmatter",
        desc: "始终加载",
        color: "#CB9A76",
      },
      {
        label: "SKILL.md 正文",
        desc: "按需加载",
        color: "#D97757",
      },
      { label: "关联文件", desc: "按需读取", color: "#B0AEA5" },
    ],

    // File tree annotations
    annotationRequired: "(必需)",
    annotationOptional: "(可选)",

    // Who This Is For
    whoSublabel: "适用人群",
    personas: [
      {
        title: "开发者",
        description: "希望 Claude 始终遵循特定工作流程的开发者",
      },
      {
        title: "高级用户",
        description: "希望 Claude 按照特定工作流程执行任务的高级用户",
      },
      {
        title: "团队",
        description: "希望在整个组织中统一 Claude 工作方式的团队",
      },
    ],

    // Two Paths
    pathsSublabel: "两条学习路径",
    twoPaths: [
      {
        title: "独立 Skill 开发",
        description:
          "构建独立的 skill? 重点关注基础概念、规划与设计，以及 Category 1-2。",
      },
      {
        title: "MCP 增强",
        description:
          "增强 MCP 集成? Skills + MCP 部分和 Category 3 最适合你。",
      },
    ],
    pathsNote:
      "两条路径共享相同的技术要求，你可以根据自己的使用场景选择合适的路径。",
    pathsCallout:
      "学完本教程后，你将能够在一次集中时间内构建出一个可用的 skill。使用 skill-creator 构建和测试你的第一个 skill 大约需要 15-30 分钟。",

    // What is MCP?
    whatIsMcpLabel: "什么是 MCP?",
    whatIsMcpTitle: "Model Context Protocol",
    whatIsMcpDesc:
      "MCP 是一个开放协议，用于将 Claude 连接到外部服务和工具。它让 Claude 能够读取数据、执行操作，并与你日常使用的应用交互。",
    whatIsMcpExplanation:
      "可以把 MCP 想象成给 Claude 一双手，让它能触及你的工具。没有 MCP 时，Claude 只能处理你粘贴到对话中的内容。有了 MCP，Claude 可以直接访问你的项目管理、文档、代码仓库等。",
    mcpServices: [
      { label: "Notion", category: "文档" },
      { label: "Linear", category: "项目" },
      { label: "GitHub", category: "代码" },
      { label: "Asana", category: "任务" },
    ],

    // MCP + Skills Together
    mcpSkillsLabel: "MCP + Skills 协同",
    kitchenMcp: "MCP",
    kitchenMcpRole: "厨房",
    kitchenMcpDesc:
      "提供工具、食材和设备的访问能力。MCP 将 Claude 连接到你的服务，并赋予它行动的能力。",
    kitchenSkills: "Skills",
    kitchenSkillsRole: "菜谱",
    kitchenSkillsDesc:
      "关于如何创造价值的分步指引。Skills 沉淀工作流程和最佳实践。",
    kitchenSummary:
      "两者结合，用户无需自己摸索每个步骤，即可完成复杂任务。",

    // MCP vs Skills table
    mcpConnectivity: "MCP (连接能力)",
    skillsKnowledge: "Skills (领域知识)",
    mcpVsSkillsRows: [
      {
        mcp: "将 Claude 连接到你的服务 (Notion, Asana, Linear 等)",
        skills: "教会 Claude 如何高效地使用你的服务",
      },
      {
        mcp: "提供实时数据访问和工具调用",
        skills: "沉淀工作流程和最佳实践",
      },
      {
        mcp: "Claude 能做什么",
        skills: "Claude 应该怎么做",
      },
    ],

    withoutSkillsTitle: "没有 Skills 时",
    withSkillsTitle: "有 Skills 时",

    withoutSkillsBullets: [
      "用户连接了你的 MCP，却不知道下一步该做什么",
      '不断收到"我要怎么用你的集成做 X"这类支持工单',
      "每次对话都要从零开始",
      "由于用户每次提示方式不同，结果不一致",
      "用户抱怨你的连接器，但真正的问题是缺乏工作流程指引",
    ],

    withSkillsBullets: [
      "预置工作流程在需要时自动激活",
      "工具使用方式一致且可靠",
      "最佳实践融入每次交互",
      "降低集成的学习门槛",
    ],
  },
} as const;
