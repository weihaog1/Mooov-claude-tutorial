export const patternsText = {
  en: {
    // Section header
    title: "Patterns",
    subtitle: "Real-World Skill Patterns",
    description:
      "Skills generally fall into three categories based on what they need to accomplish. Understanding these categories helps you choose the right structure for your own skills.",

    // Choosing Your Approach
    approachSublabel: "Choosing Your Approach",
    approachAnalogy:
      'Think of it like Home Depot. You might walk in with a problem -- "I need to fix a kitchen cabinet" -- and an employee points you to the right tools. Or you might pick out a new drill and ask how to use it for your specific job.',
    problemFirstTitle: "Problem-First",
    problemFirstDesc:
      '"I need to onboard a new hire" -- your skill knows every step from account creation to first-day setup, and handles them in order. Users describe outcomes; the skill handles the tools.',
    toolFirstTitle: "Tool-First",
    toolFirstDesc:
      '"I have GitHub MCP connected" -- your skill teaches Claude your team\'s branching strategy, PR conventions, and review standards. Users have access; the skill provides expertise.',
    approachNote:
      "Most skills lean one direction. Knowing which framing fits your use case helps you choose the right pattern below.",

    // Categories
    categoriesIntro:
      "Most skills fall into one of three categories. Each has distinct techniques and trade-offs -- pick the one that matches what your skill needs to do.",

    categoryNames: [
      "Document & Asset Creation",
      "Workflow Automation",
      "MCP Enhancement",
    ],
    categoryDescs: [
      "Skills that make Claude better at producing specific types of output. No external tools needed -- these embed your standards, templates, and quality criteria directly into Claude's generation process.",
      "Skills that orchestrate multi-step processes end to end. Define the sequence, validate between steps, and include recovery instructions when something fails midway.",
      "Skills that add an intelligence layer on top of MCP-connected tools. Instead of just exposing tool access, they teach Claude when and how to use each tool correctly for your specific context.",
    ],

    exampleLabel: "Example",
    techniquesLabel: "Key Techniques",

    categoryExampleNames: [
      "frontend-design skill",
      "release-management skill",
      "smart-database skill",
    ],
    categoryExampleDescs: [
      "Creates distinctive, production-grade interfaces with consistent design language and brand adherence.",
      "Automates the release cycle: runs tests, bumps version, generates changelog, creates tag, and publishes.",
      "Adds safety checks, query optimization hints, and migration best practices to your database MCP.",
    ],
    categoryExampleNotes: [
      "No external tools required",
      "Chains Git, npm, and CI/CD steps",
      "Layers expertise on top of database MCP",
    ],

    categoryTechniques: [
      [
        "Embedded style guides",
        "Template structures",
        "Quality checklists",
        "Brand standards",
      ],
      [
        "Step ordering",
        "Validation gates",
        "Error recovery",
        "Progress tracking",
      ],
      [
        "Safety guardrails",
        "Domain knowledge",
        "Context-aware routing",
        "Fallback strategies",
      ],
    ],
  },

  zh: {
    // Section header
    title: "设计模式",
    subtitle: "实战 Skill 模式",
    description:
      "Skills 通常分为三大类，取决于它们需要完成什么任务。理解这些分类有助于你为自己的 skill 选择合适的结构。",

    // Choosing Your Approach
    approachSublabel: "选择你的方法",
    approachAnalogy:
      '可以把它想象成 Home Depot。你可能带着一个问题走进去 -- "我需要修一个厨房柜子" -- 店员会帮你找到合适的工具。或者你可能先选了一把新电钻，然后问它怎么用在你的具体任务上。',
    problemFirstTitle: "问题优先",
    problemFirstDesc:
      '"我需要入职一个新员工" -- 你的 skill 知道从创建账号到第一天安排的每一步，并按顺序执行。用户描述期望结果，skill 负责调度工具。',
    toolFirstTitle: "工具优先",
    toolFirstDesc:
      '"我已经连接了 GitHub MCP" -- 你的 skill 教会 Claude 你团队的分支策略、PR 规范和代码审查标准。用户拥有工具访问权限，skill 提供使用专长。',
    approachNote:
      "大多数 skill 会偏向其中一个方向。了解哪种思路适合你的场景，有助于选择下面合适的模式。",

    // Categories
    categoriesIntro:
      "大多数 skill 属于以下三大类之一。每类有各自的技巧和权衡 -- 选择最符合你需求的那个。",

    categoryNames: [
      "文档与资产创建",
      "工作流自动化",
      "MCP 增强",
    ],
    categoryDescs: [
      "让 Claude 更擅长生成特定类型输出的 skills。无需外部工具 -- 将你的标准、模板和质量标准直接嵌入 Claude 的生成过程。",
      "端到端编排多步骤流程的 skills。定义执行顺序，在步骤之间添加验证，并包含中途失败时的恢复指令。",
      "在 MCP 连接工具之上添加智能层的 skills。不仅仅暴露工具访问权限，还教会 Claude 在你的特定场景中何时以及如何正确使用每个工具。",
    ],

    exampleLabel: "示例",
    techniquesLabel: "关键技巧",

    categoryExampleNames: [
      "frontend-design skill",
      "release-management skill",
      "smart-database skill",
    ],
    categoryExampleDescs: [
      "创建独特的、生产级的界面组件，保持一致的设计语言和品牌规范。",
      "自动化发布流程: 运行测试、版本升级、生成 changelog、创建 tag 并发布。",
      "为你的 database MCP 添加安全检查、查询优化建议和迁移最佳实践。",
    ],
    categoryExampleNotes: [
      "无需外部工具",
      "串联 Git、npm 和 CI/CD 步骤",
      "在 database MCP 之上叠加专业知识",
    ],

    categoryTechniques: [
      [
        "内嵌风格指南",
        "模板结构",
        "质量检查清单",
        "品牌标准",
      ],
      [
        "步骤排序",
        "验证关卡",
        "错误恢复",
        "进度追踪",
      ],
      [
        "安全防护栏",
        "领域知识",
        "上下文感知路由",
        "降级策略",
      ],
    ],
  },
} as const;
