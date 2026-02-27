export const patternsText = {
  en: {
    title: "Advanced Patterns",
    subtitle: "Power Techniques",
    description:
      "Once you have mastered the fundamentals, these advanced patterns unlock a new level of precision and control. Each pattern addresses a specific class of prompting challenges.",

    patterns: [
      {
        name: "Meta-Prompting",
        tagline: "Prompts that write prompts",
        description:
          "Use AI to generate and refine prompts themselves. Instead of crafting the perfect prompt by hand, describe your goal and let the model produce a detailed, optimized prompt for you. This is especially useful when you need domain-specific prompts at scale.",
        example: `I need to analyze customer feedback for our SaaS product.

Write me a detailed prompt that will:
- Extract sentiment (positive / neutral / negative)
- Identify recurring themes across reviews
- Surface actionable insights for the product team
- Output results in a structured table format

The prompt should work on batches of 20-50 reviews at a time.`,
      },
      {
        name: "Self-Reflection",
        tagline: "Critique and improve its own output",
        description:
          "Ask the AI to review, critique, and then improve its own response. This two-pass approach catches gaps, logical errors, and shallow reasoning that a single pass often misses. The model becomes its own editor.",
        example: `Review your analysis above. For each section:

1. Identify 3 specific weaknesses or gaps
2. Explain why each weakness matters
3. Provide an improved version that addresses
   every issue you identified

Be rigorous -- do not simply rephrase the original.`,
      },
      {
        name: "Constrained Generation",
        tagline: "Force specific output formats",
        description:
          "Lock the model into a precise output structure such as JSON, CSV, or a custom schema. By defining the exact shape of the response, you eliminate ambiguity and make the output directly consumable by downstream code or pipelines.",
        example: `Respond ONLY with valid JSON matching this schema:

{
  "summary": string (max 100 words),
  "confidence": number (0 to 1),
  "tags": string[] (3-5 items),
  "risks": [
    {
      "level": "low" | "medium" | "high",
      "description": string
    }
  ]
}

Do not include any text outside the JSON block.`,
      },
      {
        name: "Output Templating",
        tagline: "Define exact output structure with placeholders",
        description:
          "Provide a template with named placeholders that the model fills in. This gives you full control over document layout, section ordering, and formatting while letting the AI handle the content generation.",
        example: `Use exactly this template for your response:

## [TITLE]
One-line summary of the topic.

### Key Points
- [KEY_POINT_1]
- [KEY_POINT_2]
- [KEY_POINT_3]

### Detailed Analysis
[ANALYSIS - 2 to 3 paragraphs]

### Recommended Next Steps
1. [NEXT_STEP_1]
2. [NEXT_STEP_2]
3. [NEXT_STEP_3]`,
      },
    ],
  },

  zh: {
    title: "进阶模式",
    subtitle: "Power Techniques",
    description:
      "掌握基础技巧后，这些进阶模式将为你解锁更高精度和控制力。每种模式都针对一类特定的 prompting 挑战。",

    patterns: [
      {
        name: "Meta-Prompting",
        tagline: "让 AI 帮你写 prompt",
        description:
          "让 AI 自己生成和优化 prompt，而不是手动反复打磨。只需描述你的目标，模型就能为你生成详细、优化的 prompt。当你需要大规模生成特定领域的 prompt 时尤其有用。",
        example: `I need to analyze customer feedback for our SaaS product.

Write me a detailed prompt that will:
- Extract sentiment (positive / neutral / negative)
- Identify recurring themes across reviews
- Surface actionable insights for the product team
- Output results in a structured table format

The prompt should work on batches of 20-50 reviews at a time.`,
      },
      {
        name: "Self-Reflection",
        tagline: "让 AI 自我审视并改进输出",
        description:
          "要求 AI 审查、批判并改进自己的回答。这种两轮方法能捕捉到单轮回答经常遗漏的漏洞、逻辑错误和浅层推理。模型成为自己的编辑。",
        example: `Review your analysis above. For each section:

1. Identify 3 specific weaknesses or gaps
2. Explain why each weakness matters
3. Provide an improved version that addresses
   every issue you identified

Be rigorous -- do not simply rephrase the original.`,
      },
      {
        name: "Constrained Generation",
        tagline: "强制指定输出格式",
        description:
          "将模型锁定在精确的输出结构中，如 JSON、CSV 或自定义 schema。通过定义响应的确切形状，消除歧义，使输出可直接被下游代码或流水线使用。",
        example: `Respond ONLY with valid JSON matching this schema:

{
  "summary": string (max 100 words),
  "confidence": number (0 to 1),
  "tags": string[] (3-5 items),
  "risks": [
    {
      "level": "low" | "medium" | "high",
      "description": string
    }
  ]
}

Do not include any text outside the JSON block.`,
      },
      {
        name: "Output Templating",
        tagline: "用占位符定义精确的输出结构",
        description:
          "提供带有命名占位符的模板，让模型填充内容。这让你完全控制文档布局、章节顺序和格式，同时让 AI 负责内容生成。",
        example: `Use exactly this template for your response:

## [TITLE]
One-line summary of the topic.

### Key Points
- [KEY_POINT_1]
- [KEY_POINT_2]
- [KEY_POINT_3]

### Detailed Analysis
[ANALYSIS - 2 to 3 paragraphs]

### Recommended Next Steps
1. [NEXT_STEP_1]
2. [NEXT_STEP_2]
3. [NEXT_STEP_3]`,
      },
    ],
  },
} as const;
