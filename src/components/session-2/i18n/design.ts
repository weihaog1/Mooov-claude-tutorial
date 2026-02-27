export const designText = {
  en: {
    // Section header
    title: "Design",
    subtitle: "Planning & Skill Categories",
    description:
      "Before writing any code, identify concrete use cases your skill should enable. Skills fall into three proven categories, each with distinct techniques and patterns.",

    // Use Cases
    useCasesSublabel: "Start With Use Cases",
    useCasesIntro:
      "Before writing any code, identify 2-3 concrete use cases your skill should enable.",

    // Tabs
    tab1Label: "Document & Asset Creation",
    tab1Example: "frontend-design skill",
    tab1ExampleDesc: "creates distinctive, production-grade interfaces",
    tab1Techniques: [
      "Embedded style guides and brand standards",
      "Template structures for consistent output",
      "Quality checklists before finalizing",
      "Uses Claude's built-in capabilities",
    ],
    tab1Badge: "No external tools required",

    tab2Label: "Workflow Automation",
    tab2Example: "skill-creator skill",
    tab2ExampleDesc: "interactive guide for building new skills",
    tab2Techniques: [
      "Step-by-step workflow with validation gates",
      "Templates for common structures",
      "Built-in review and improvement suggestions",
      "Iterative refinement loops",
    ],
    tab2Badge: "Multi-step orchestration",

    tab3Label: "MCP Enhancement",
    tab3Example: "sentry-code-review skill",
    tab3ExampleDesc: "analyzes bugs in PRs using Sentry data",
    tab3Techniques: [
      "Coordinates multiple MCP calls in sequence",
      "Embeds domain expertise",
      "Provides context users would otherwise specify",
      "Error handling for common MCP issues",
    ],
    tab3Badge: "Requires MCP server",

    exampleLabel: "Example",
    keyTechniquesLabel: "Key Techniques",

    // Ask Yourself
    askYourselfTitle: "Ask yourself:",
    askYourselfQuestions: [
      "What does a user want to accomplish?",
      "What multi-step workflows does this require?",
      "Which tools are needed (built-in or MCP)?",
      "What domain knowledge or best practices should be embedded?",
    ],

    // Use Case Block
    useCaseLabel: "Use Case:",
    triggerLabel: "Trigger:",
    stepsLabel: "Steps:",
    resultLabel: "Result:",

    useCaseBlock: {
      label: "Project Sprint Planning",
      trigger:
        'User says "help me plan this sprint" or "create sprint tasks"',
      steps: [
        "Fetch current project status from Linear (via MCP)",
        "Analyze team velocity and capacity",
        "Suggest task prioritization",
        "Create tasks in Linear with proper labels and estimates",
      ],
      result: "Fully planned sprint with tasks created",
    },
  },

  zh: {
    // Section header
    title: "设计",
    subtitle: "规划与 Skill 类别",
    description:
      "在编写任何代码之前，先明确你的 skill 需要支持哪些具体使用场景。Skills 可分为三大成熟类别，各有不同的技术手段和设计模式。",

    // Use Cases
    useCasesSublabel: "从使用场景出发",
    useCasesIntro:
      "在编写任何代码之前，先确定你的 skill 需要支持的 2-3 个具体使用场景。",

    // Tabs
    tab1Label: "文档与资源生成",
    tab1Example: "frontend-design skill",
    tab1ExampleDesc: "生成独特的、生产级的界面设计",
    tab1Techniques: [
      "内嵌风格指南和品牌规范",
      "模板结构确保输出一致性",
      "定稿前执行质量检查清单",
      "利用 Claude 的内置能力",
    ],
    tab1Badge: "无需外部工具",

    tab2Label: "工作流自动化",
    tab2Example: "skill-creator skill",
    tab2ExampleDesc: "构建新 skill 的交互式引导工具",
    tab2Techniques: [
      "带验证节点的分步工作流",
      "常用结构的预置模板",
      "内置审查和改进建议",
      "迭代优化循环",
    ],
    tab2Badge: "多步骤编排",

    tab3Label: "MCP 增强",
    tab3Example: "sentry-code-review skill",
    tab3ExampleDesc: "利用 Sentry 数据分析 PR 中的 bug",
    tab3Techniques: [
      "按顺序协调多次 MCP 调用",
      "内嵌领域专业知识",
      "提供用户原本需要手动指定的上下文",
      "处理常见的 MCP 错误",
    ],
    tab3Badge: "需要 MCP server",

    exampleLabel: "示例",
    keyTechniquesLabel: "关键技术",

    // Ask Yourself
    askYourselfTitle: "问问自己:",
    askYourselfQuestions: [
      "用户想要完成什么任务?",
      "这需要哪些多步骤工作流?",
      "需要哪些工具 (内置或 MCP)?",
      "应该嵌入哪些领域知识或最佳实践?",
    ],

    // Use Case Block
    useCaseLabel: "使用场景:",
    triggerLabel: "触发条件:",
    stepsLabel: "步骤:",
    resultLabel: "结果:",

    useCaseBlock: {
      label: "项目 Sprint 规划",
      trigger:
        '用户说 "help me plan this sprint" 或 "create sprint tasks"',
      steps: [
        "通过 MCP 从 Linear 获取当前项目状态",
        "分析团队速度和产能",
        "提出任务优先级建议",
        "在 Linear 中创建带有正确标签和工时估算的任务",
      ],
      result: "完整的 sprint 规划，任务已创建完毕",
    },
  },
} as const;
