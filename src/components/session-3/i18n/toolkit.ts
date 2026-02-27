export const toolkitText = {
  en: {
    title: "Toolkit",
    subtitle: "Quick Reference & Templates",
    description:
      "Everything you need to start applying these techniques today. A quick-reference grid of all six approaches plus ready-to-use templates you can copy and adapt.",

    // Quick Reference Grid
    quickRefLabel: "Quick Reference",
    techniques: [
      {
        title: "System Prompts",
        description:
          "Set the AI's identity and rules before any conversation",
      },
      {
        title: "Prompt Chaining",
        description:
          "Break complex tasks into focused sequential steps",
      },
      {
        title: "Context Engineering",
        description:
          "Select and structure the right information",
      },
      {
        title: "Evaluation",
        description:
          "Diagnose failures and iterate systematically",
      },
      {
        title: "Meta-Prompting",
        description:
          "Use AI to write and refine your prompts",
      },
      {
        title: "Constrained Output",
        description:
          "Force specific formats and structures",
      },
    ],

    // Templates
    templatesLabel: "Ready-to-Use Templates",
    analysisTemplateTitle: "Analysis Template",
    analysisTemplate: `<role>You are a [domain] analyst with [N] years of experience.</role>
<context>[Paste relevant background here]</context>
<task>Analyze [topic] and provide:
1. Executive summary (3 sentences)
2. Key findings (bullet points)
3. Recommendations (actionable next steps)</task>
<constraints>
- Cite specific data points
- Flag assumptions clearly
- Keep total length under [N] words
</constraints>`,
    reviewTemplateTitle: "Review Template",
    reviewTemplate: `Review the following [content type] against these criteria:

## Criteria
- [Criterion 1]: [Description]
- [Criterion 2]: [Description]
- [Criterion 3]: [Description]

## Format
For each criterion, provide:
- Score: [1-5]
- Evidence: [specific quote or reference]
- Suggestion: [concrete improvement]

## Content to Review
[Paste content here]`,

    // CTA
    ctaHeading: "Start Practicing Today",
    ctaText:
      "The best way to improve is to pick one technique and apply it to a real task. Copy a template, adapt it to your domain, and iterate from there.",
  },

  zh: {
    title: "工具箱",
    subtitle: "速查参考与模板",
    description:
      "你需要的一切，今天就可以开始应用这些技巧。六种方法的速查卡片，加上可以直接复制和改编的实用模板。",

    // Quick Reference Grid
    quickRefLabel: "速查参考",
    techniques: [
      {
        title: "System Prompts",
        description:
          "在任何对话开始前设定 AI 的身份和规则",
      },
      {
        title: "Prompt Chaining",
        description:
          "将复杂任务拆分为聚焦的顺序步骤",
      },
      {
        title: "Context Engineering",
        description:
          "选择并组织正确的信息",
      },
      {
        title: "Evaluation",
        description:
          "诊断失败原因并系统性地迭代改进",
      },
      {
        title: "Meta-Prompting",
        description:
          "用 AI 来编写和优化你的 prompt",
      },
      {
        title: "Constrained Output",
        description:
          "强制输出特定的格式和结构",
      },
    ],

    // Templates
    templatesLabel: "即用模板",
    analysisTemplateTitle: "分析模板",
    analysisTemplate: `<role>You are a [domain] analyst with [N] years of experience.</role>
<context>[Paste relevant background here]</context>
<task>Analyze [topic] and provide:
1. Executive summary (3 sentences)
2. Key findings (bullet points)
3. Recommendations (actionable next steps)</task>
<constraints>
- Cite specific data points
- Flag assumptions clearly
- Keep total length under [N] words
</constraints>`,
    reviewTemplateTitle: "评审模板",
    reviewTemplate: `Review the following [content type] against these criteria:

## Criteria
- [Criterion 1]: [Description]
- [Criterion 2]: [Description]
- [Criterion 3]: [Description]

## Format
For each criterion, provide:
- Score: [1-5]
- Evidence: [specific quote or reference]
- Suggestion: [concrete improvement]

## Content to Review
[Paste content here]`,

    // CTA
    ctaHeading: "从今天开始练习",
    ctaText:
      "提升的最好方式是选择一种技巧，应用到实际任务中。复制一个模板，根据你的领域调整，然后不断迭代。",
  },
} as const;
