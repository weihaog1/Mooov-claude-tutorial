export const chainingText = {
  en: {
    // Section header
    title: "Prompt Chaining",
    subtitle: "Building Multi-Step Pipelines",
    description:
      "Instead of asking one prompt to do everything, break complex tasks into a sequence of focused steps. Each step's output feeds into the next, producing better results through specialization.",

    // Subsection A - Concept
    conceptLabel: "The Concept",
    conceptDefinition:
      "Breaking complex tasks into a sequence of focused prompts, where each step's output feeds into the next.",
    conceptWhyTitle: "Why it works",
    conceptWhyItems: [
      "Each prompt does one thing well",
      "Easier to debug when something goes wrong",
      "Better quality at each individual step",
      "You can inspect and adjust between steps",
    ],

    // Subsection B - Chain Example
    chainLabel: "Chain Example",
    chainIntro:
      "A 4-step content creation chain, where each step builds on the previous output:",
    chainSteps: [
      {
        num: "01",
        title: "Research",
        prompt: "Gather key facts about [topic] from these sources...",
        output: "Produces: structured research notes with citations",
      },
      {
        num: "02",
        title: "Outline",
        prompt: "Using the research above, create a structured outline...",
        output: "Produces: hierarchical outline with section summaries",
      },
      {
        num: "03",
        title: "Draft",
        prompt: "Write a full draft following this outline...",
        output: "Produces: complete first draft with proper flow",
      },
      {
        num: "04",
        title: "Review",
        prompt: "Review this draft for accuracy, tone, and completeness...",
        output: "Produces: final polished version with revision notes",
      },
    ],

    // Subsection C - When to Chain
    whenLabel: "When to Chain",
    singlePromptTitle: "Single Prompt",
    singlePromptSubtitle: "Good for",
    singlePromptItems: [
      "Simple questions with clear answers",
      "Quick one-off tasks",
      "Well-defined outputs with minimal ambiguity",
    ],
    chainedPromptTitle: "Chained Prompts",
    chainedPromptSubtitle: "Good for",
    chainedPromptItems: [
      "Multi-step workflows with dependencies",
      "Quality-sensitive content creation",
      "Tasks requiring different expertise at each step",
    ],
  },

  zh: {
    // Section header
    title: "Prompt Chaining",
    subtitle: "Building Multi-Step Pipelines",
    description:
      "与其让一个 prompt 完成所有工作，不如将复杂任务拆解为一系列聚焦的步骤。每个步骤的输出作为下一步的输入，通过专业化分工产出更好的结果。",

    // Subsection A - Concept
    conceptLabel: "核心概念",
    conceptDefinition:
      "将复杂任务拆解为一系列聚焦的 prompt，每个步骤的输出作为下一步的输入。",
    conceptWhyTitle: "为什么有效",
    conceptWhyItems: [
      "每个 prompt 专注做好一件事",
      "出问题时更容易调试",
      "每个单独步骤的质量更高",
      "你可以在步骤之间检查和调整",
    ],

    // Subsection B - Chain Example
    chainLabel: "Chain 示例",
    chainIntro:
      "一个 4 步内容创作 chain，每一步都基于前一步的输出:",
    chainSteps: [
      {
        num: "01",
        title: "Research",
        prompt: "Gather key facts about [topic] from these sources...",
        output: "产出: 带引用的结构化研究笔记",
      },
      {
        num: "02",
        title: "Outline",
        prompt: "Using the research above, create a structured outline...",
        output: "产出: 带章节摘要的层级大纲",
      },
      {
        num: "03",
        title: "Draft",
        prompt: "Write a full draft following this outline...",
        output: "产出: 结构完整、逻辑通顺的初稿",
      },
      {
        num: "04",
        title: "Review",
        prompt: "Review this draft for accuracy, tone, and completeness...",
        output: "产出: 附修改说明的最终版本",
      },
    ],

    // Subsection C - When to Chain
    whenLabel: "何时使用 Chaining",
    singlePromptTitle: "单个 Prompt",
    singlePromptSubtitle: "适合场景",
    singlePromptItems: [
      "答案明确的简单问题",
      "快速的一次性任务",
      "歧义最小的明确输出",
    ],
    chainedPromptTitle: "Chained Prompts",
    chainedPromptSubtitle: "适合场景",
    chainedPromptItems: [
      "有依赖关系的多步骤工作流",
      "对质量要求高的内容创作",
      "每个步骤需要不同专业能力的任务",
    ],
  },
} as const;
