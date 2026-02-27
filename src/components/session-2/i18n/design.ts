export const designText = {
  en: {
    // Section header
    title: "Design",
    subtitle: "Planning & Skill Categories",
    description:
      "Before writing any code, identify concrete use cases your skill should enable.",

    // Use Cases
    useCasesSublabel: "Start With Use Cases",
    useCasesIntro:
      "Before writing any code, identify 2-3 concrete use cases your skill should enable.",

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
      "在编写任何代码之前，先明确你的 skill 需要支持哪些具体使用场景。",

    // Use Cases
    useCasesSublabel: "从使用场景出发",
    useCasesIntro:
      "在编写任何代码之前，先确定你的 skill 需要支持的 2-3 个具体使用场景。",

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
