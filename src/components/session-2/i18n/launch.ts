export const launchText = {
  en: {
    // Section header
    title: "Launch",
    subtitle: "Testing & Next Steps",
    description:
      "Skills are living documents. Test rigorously and iterate based on real feedback.",

    // Testing
    testSublabel: "Testing Approach",
    testingCards: [
      {
        title: "Triggering Tests",
        description: "Ensure your skill loads at the right times",
        items: [
          "Triggers on obvious tasks",
          "Triggers on paraphrased requests",
          "Doesn't trigger on unrelated topics",
        ],
      },
      {
        title: "Functional Tests",
        description: "Verify correct outputs and error handling",
        items: [
          "Valid outputs generated",
          "API calls succeed",
          "Edge cases covered",
        ],
      },
    ],

    // Skill Creator
    creatorSublabel: "The Skill-Creator Tool",
    creatorIntro:
      "The skill-creator skill -- available in Claude.ai via plugin directory or download for Claude Code -- can help you build and iterate on skills. If you have an MCP server and know your top 2-3 workflows, you can build and test a functional skill in a single sitting -- often in 15-30 minutes.",
    skillCreatorCards: [
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
    ],
    usageLabel: "Usage: ",
    usageText:
      '"Use the skill-creator skill to help me build a skill for [your use case]"',
    usageNote:
      "Note: skill-creator helps you design and refine skills but does not execute automated test suites or produce quantitative evaluation results.",

    // Iteration
    iterSublabel: "Iteration Based on Feedback",
    iterIntro: "Skills are living documents. Plan to iterate based on:",
    iterationSignals: [
      {
        title: "Undertriggering Signals",
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
        symptoms: [
          "Skill loads for irrelevant queries",
          "Users disabling it",
          "Confusion about purpose",
        ],
        solution: "Add negative triggers, be more specific",
      },
      {
        title: "Execution Issues",
        symptoms: [
          "Inconsistent results",
          "API call failures",
          "User corrections needed",
        ],
        solution: "Improve instructions, add error handling",
      },
    ],

    // Checklist
    checkSublabel: "Pre-Flight Checklist",
    checklistGroups: [
      {
        title: "Before You Start",
        items: [
          "Identified 2-3 concrete use cases",
          "Tools identified (built-in or MCP)",
          "Reviewed this guide and example skills",
          "Planned folder structure",
        ],
      },
      {
        title: "During Development",
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
        items: [
          "Test in real conversations",
          "Monitor for under/over-triggering",
          "Collect user feedback",
          "Iterate on description and instructions",
        ],
      },
    ],

    // Next Steps
    nextSublabel: "Next Steps",
    nextCTA: "Start with one skill. Try it today.",
    resourceLinks: [
      { label: "Skills Documentation" },
    ],
    nextClosing: "Create once, benefit every time.",

    solutionLabel: "Solution",
  },

  zh: {
    // Section header
    title: "发布上线",
    subtitle: "测试与后续步骤",
    description:
      "Skills 是不断演进的文档。严格测试，并根据真实反馈持续迭代。",

    // Testing
    testSublabel: "测试方法",
    testingCards: [
      {
        title: "触发测试",
        description: "确保你的 skill 在正确的时机加载",
        items: [
          "在明确相关的任务上能够触发",
          "在换一种说法的请求上也能触发",
          "在无关话题上不会误触发",
        ],
      },
      {
        title: "功能测试",
        description: "验证输出正确性和错误处理",
        items: [
          "生成有效的输出",
          "API 调用成功",
          "覆盖边界情况",
        ],
      },
    ],

    // Skill Creator
    creatorSublabel: "Skill-Creator 工具",
    creatorIntro:
      "skill-creator skill -- 在 Claude.ai 的插件目录中可用，也可下载到 Claude Code 使用 -- 可以帮助你构建和迭代 skill。如果你有 MCP server 并且明确了 2-3 个核心工作流，通常一次就能构建并测试出一个可用的 skill -- 往往只需 15-30 分钟。",
    skillCreatorCards: [
      {
        title: "创建 Skill",
        items: [
          "根据自然语言描述生成 skill",
          "生成格式正确的 SKILL.md 及 frontmatter",
          "建议触发短语和结构",
        ],
      },
      {
        title: "审查 Skill",
        items: [
          "标记常见问题 (描述模糊、缺少触发条件)",
          "识别过度触发/触发不足的风险",
          "根据 skill 的目标建议测试用例",
        ],
      },
      {
        title: "迭代改进",
        items: [
          "将边界情况反馈给 skill-creator",
          '示例: "Use the issues identified in this chat to improve how the skill handles [specific edge case]"',
        ],
      },
    ],
    usageLabel: "用法: ",
    usageText:
      '"Use the skill-creator skill to help me build a skill for [your use case]"',
    usageNote:
      "注意: skill-creator 帮助你设计和改进 skill，但不会执行自动化测试套件或生成定量评估结果。",

    // Iteration
    iterSublabel: "基于反馈的迭代",
    iterIntro: "Skills 是不断演进的文档。根据以下信号进行迭代:",
    iterationSignals: [
      {
        title: "触发不足的信号",
        symptoms: [
          "Skill 在应该加载时没有加载",
          "用户需要手动启用",
          "出现关于何时使用的支持问题",
        ],
        solution:
          "在 description 中添加更多细节和语境 -- 尤其是技术术语相关的关键词",
      },
      {
        title: "过度触发的信号",
        symptoms: [
          "Skill 在不相关的查询中加载",
          "用户主动禁用它",
          "用户对其用途感到困惑",
        ],
        solution: "添加反向触发条件，使描述更具体",
      },
      {
        title: "执行问题",
        symptoms: [
          "结果不一致",
          "API 调用失败",
          "需要用户手动纠正",
        ],
        solution: "改进指令，添加错误处理",
      },
    ],

    // Checklist
    checkSublabel: "发布前检查清单",
    checklistGroups: [
      {
        title: "开始之前",
        items: [
          "已确定 2-3 个具体使用场景",
          "已确定所需工具 (内置或 MCP)",
          "已阅读本指南和示例 skill",
          "已规划文件夹结构",
        ],
      },
      {
        title: "开发过程中",
        items: [
          "文件夹使用 kebab-case 命名",
          "SKILL.md 文件存在 (拼写必须精确)",
          "YAML frontmatter 包含 --- 分隔符",
          "name 字段: kebab-case，无空格",
          "description 包含做什么和何时使用",
          "任何地方都不包含 XML 标签",
        ],
      },
      {
        title: "上传之前",
        items: [
          "已测试在明确相关任务上的触发",
          "已测试在换种说法的请求上的触发",
          "已验证不会在无关话题上触发",
          "功能测试通过",
          "已压缩为 .zip 文件",
        ],
      },
      {
        title: "上传之后",
        items: [
          "在真实对话中测试",
          "监控触发不足/过度触发的情况",
          "收集用户反馈",
          "持续迭代 description 和指令",
        ],
      },
    ],

    // Next Steps
    nextSublabel: "下一步",
    nextCTA: "从一个 skill 开始，今天就试试看。",
    resourceLinks: [
      { label: "Skills 文档" },
    ],
    nextClosing: "一次创建，持续受益。",

    solutionLabel: "解决方案",
  },
} as const;
