export const writingText = {
  en: {
    // Section header
    title: "Writing",
    subtitle: "Crafting Effective Skills",
    description:
      "After the frontmatter, write the actual instructions in Markdown. Clear, specific instructions make the difference between a skill that works consistently and one that produces unpredictable results.",

    // Recommended Structure
    structSublabel: "Recommended Structure",

    // Best Practices
    practicesSublabel: "Best Practices for Instructions",
    practicesTitles: [
      "Be Specific and Actionable",
      "Include Error Handling",
      "Reference Bundled Resources",
      "Use Progressive Disclosure",
    ],
    goodLabel: "Good",
    badLabel: "Bad",
    progressiveText:
      "Keep SKILL.md focused on core instructions. Move detailed documentation to references/ and link to it.",

    // Advanced Technique
    advancedLabel: "Advanced Technique",
    advancedText:
      "For critical validations, consider bundling a script that performs the checks programmatically rather than relying on language instructions. Code is deterministic; language interpretation isn't.",

    // Performance Notes
    perfSublabel: "Performance Notes",
    perfIntro: "Add explicit encouragement to your skill:",
    perfNote:
      "Note: Adding this to user prompts is more effective than in SKILL.md",
  },

  zh: {
    // Section header
    title: "编写指令",
    subtitle: "打造高效的 Skill",
    description:
      "在 frontmatter 之后，用 Markdown 编写实际的指令内容。清晰、具体的指令决定了一个 skill 是稳定可靠，还是结果难以预测。",

    // Recommended Structure
    structSublabel: "推荐结构",

    // Best Practices
    practicesSublabel: "指令编写最佳实践",
    practicesTitles: [
      "具体且可操作",
      "包含错误处理",
      "引用附带资源",
      "使用渐进式披露",
    ],
    goodLabel: "推荐",
    badLabel: "不推荐",
    progressiveText:
      "让 SKILL.md 专注于核心指令。将详细文档放到 references/ 目录中并引用它。",

    // Advanced Technique
    advancedLabel: "进阶技巧",
    advancedText:
      "对于关键验证，考虑附带一个脚本来以编程方式执行检查，而不是依赖自然语言指令。代码是确定性的，语言理解则不是。",

    // Performance Notes
    perfSublabel: "性能备注",
    perfIntro: "在你的 skill 中添加明确的提示语:",
    perfNote:
      "注意: 将这类提示添加到用户 prompt 中比写在 SKILL.md 里更有效",
  },
} as const;
