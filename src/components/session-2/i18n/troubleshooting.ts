export const troubleshootingText = {
  en: {
    // Section header
    title: "Troubleshooting",
    subtitle: "Common Issues & Solutions",
    description:
      "Even well-designed skills encounter issues. Here are the most common problems and their solutions, drawn from early adopter experience.",

    // Upload Errors
    uploadSublabel: "Skill Won't Upload",

    error1Msg: 'Error: "Could not find SKILL.md in uploaded folder"',
    error1Cause: "File not named exactly SKILL.md",
    error1Solution: "Rename to SKILL.md (case-sensitive). Verify with:",
    error1Verify: "should show",

    error2Msg: 'Error: "Invalid frontmatter"',
    error2Cause: "YAML formatting issue",
    error2Wrong1: "Wrong - missing delimiters",
    error2Wrong2: "Wrong - unclosed quotes",
    error2Correct: "Correct",

    error3Msg: 'Error: "Invalid skill name"',
    error3Cause: "Name has spaces or capitals",

    causeLabel: "Cause: ",
    solutionLabel: "Solution: ",

    // Triggering Problems
    triggerSublabel: "Triggering Problems",

    noTriggerTitle: "Skill Doesn't Trigger",
    noTriggerSymptom: "Skill never loads automatically",
    noTriggerFix: "Revise your description field",
    quickChecklistLabel: "Quick checklist",
    checklistItems: [
      'Is it too generic? ("Helps with projects" won\'t work)',
      "Does it include trigger phrases users would actually say?",
      "Does it mention relevant file types if applicable?",
    ],
    debugLabel: "Debugging approach",
    debugText:
      'Ask Claude: "When would you use the [skill name] skill?" Claude will quote the description back. Adjust based on what\'s missing.',

    overTriggerTitle: "Skill Triggers Too Often",
    overTriggerSymptom: "Skill loads for unrelated queries",
    solutionsLabel: "Solutions",
    solution1Title: "1. Add negative triggers:",
    solution2Title: "2. Be more specific:",
    solution3Title: "3. Clarify scope:",
    tooBroad: "Too broad:",
    better: "Better:",

    symptomLabel: "Symptom: ",
    fixLabel: "Fix: ",

    // MCP Connection
    mcpSublabel: "MCP Connection Issues",
    mcpSymptom: "Skill loads but MCP calls fail",
    mcpSteps: [
      {
        title: "Verify MCP server is connected",
        detail:
          'Claude.ai: Settings > Extensions > [Your Service]. Should show "Connected" status',
      },
      {
        title: "Check authentication",
        detail:
          "API keys valid and not expired. Proper permissions/scopes granted. OAuth tokens refreshed",
      },
      {
        title: "Test MCP independently",
        detail:
          'Ask Claude to call MCP directly (without skill): "Use [Service] MCP to fetch my projects". If this fails, issue is MCP not skill',
      },
      {
        title: "Verify tool names",
        detail:
          "Skill references correct MCP tool names. Check MCP server documentation. Tool names are case-sensitive",
      },
    ],

    // Instructions Not Followed
    instrSublabel: "Instructions Not Followed",
    instrSymptom: "Skill loads but Claude doesn't follow instructions",
    cause1Title: "Too Verbose",
    cause1Items: [
      "Keep instructions concise",
      "Use bullet points and numbered lists",
      "Move detailed reference to separate files",
    ],
    cause2Title: "Instructions Buried",
    cause2Items: [
      "Put critical instructions at the top",
      "Use ## Important or ## Critical headers",
      "Repeat key points if needed",
    ],
    cause3Title: "Ambiguous Language",
    cause3Bad: '"Make sure to validate things properly"',
    cause3Good:
      '"CRITICAL: Before calling create_project, verify: Project name is non-empty, At least one team member assigned, Start date is not in the past"',
    cause4Title: "Large Context Issues",
    cause4Items: [
      "Skill content too large",
      "Too many skills enabled simultaneously",
      "Keep SKILL.md under 5,000 words",
      "Move detailed docs to references/",
      "Evaluate if you have more than 20-50 skills enabled simultaneously",
    ],
  },

  zh: {
    // Section header
    title: "问题排查",
    subtitle: "常见问题与解决方案",
    description:
      "即使设计良好的 skill 也会遇到问题。以下是从早期用户经验中总结的最常见问题及其解决方案。",

    // Upload Errors
    uploadSublabel: "Skill 无法上传",

    error1Msg: 'Error: "Could not find SKILL.md in uploaded folder"',
    error1Cause: "文件名不是精确的 SKILL.md",
    error1Solution: "重命名为 SKILL.md (区分大小写)，验证方式:",
    error1Verify: "应显示",

    error2Msg: 'Error: "Invalid frontmatter"',
    error2Cause: "YAML 格式问题",
    error2Wrong1: "错误 - 缺少分隔符",
    error2Wrong2: "错误 - 引号未闭合",
    error2Correct: "正确",

    error3Msg: 'Error: "Invalid skill name"',
    error3Cause: "名称包含空格或大写字母",

    causeLabel: "原因: ",
    solutionLabel: "解决方案: ",

    // Triggering Problems
    triggerSublabel: "触发问题",

    noTriggerTitle: "Skill 无法触发",
    noTriggerSymptom: "Skill 始终不会自动加载",
    noTriggerFix: "修改你的 description 字段",
    quickChecklistLabel: "快速检查清单",
    checklistItems: [
      '是否过于笼统? ("Helps with projects" 这样的描述不会生效)',
      "是否包含了用户实际会说的触发短语?",
      "如果涉及特定文件类型，是否有提及?",
    ],
    debugLabel: "调试方法",
    debugText:
      '问 Claude: "When would you use the [skill name] skill?" Claude 会引用 description 内容作答。根据缺失的部分进行调整。',

    overTriggerTitle: "Skill 触发过于频繁",
    overTriggerSymptom: "Skill 在不相关的查询中也会加载",
    solutionsLabel: "解决方案",
    solution1Title: "1. 添加反向触发条件:",
    solution2Title: "2. 更加具体:",
    solution3Title: "3. 明确作用范围:",
    tooBroad: "过于宽泛:",
    better: "更好:",

    symptomLabel: "症状: ",
    fixLabel: "修复: ",

    // MCP Connection
    mcpSublabel: "MCP 连接问题",
    mcpSymptom: "Skill 加载成功但 MCP 调用失败",
    mcpSteps: [
      {
        title: "确认 MCP server 已连接",
        detail:
          'Claude.ai: Settings > Extensions > [你的服务]，应显示 "Connected" 状态',
      },
      {
        title: "检查身份验证",
        detail:
          "API key 有效且未过期。已授予正确的权限/作用域。OAuth token 已刷新",
      },
      {
        title: "独立测试 MCP",
        detail:
          '直接让 Claude 调用 MCP (不使用 skill): "Use [Service] MCP to fetch my projects"。如果这也失败，问题出在 MCP 而非 skill',
      },
      {
        title: "验证工具名称",
        detail:
          "确认 skill 引用了正确的 MCP tool 名称。查阅 MCP server 文档。工具名称区分大小写",
      },
    ],

    // Instructions Not Followed
    instrSublabel: "指令未被遵循",
    instrSymptom: "Skill 已加载但 Claude 不按指令执行",
    cause1Title: "内容过于冗长",
    cause1Items: [
      "保持指令简洁",
      "使用要点列表和编号列表",
      "将详细参考资料移至单独文件",
    ],
    cause2Title: "关键指令被淹没",
    cause2Items: [
      "将关键指令放在最前面",
      "使用 ## Important 或 ## Critical 标题",
      "必要时重复强调要点",
    ],
    cause3Title: "语言模糊",
    cause3Bad: '"Make sure to validate things properly"',
    cause3Good:
      '"CRITICAL: Before calling create_project, verify: Project name is non-empty, At least one team member assigned, Start date is not in the past"',
    cause4Title: "上下文过大",
    cause4Items: [
      "Skill 内容体积过大",
      "同时启用的 skill 数量过多",
      "SKILL.md 保持在 5,000 字以内",
      "将详细文档移至 references/ 目录",
      "评估是否同时启用了超过 20-50 个 skill",
    ],
  },
} as const;
