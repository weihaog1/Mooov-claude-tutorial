export const contextText = {
  en: {
    // Section header
    title: "Context Engineering",
    subtitle: "Strategic Information Design",
    description:
      "The quality of an AI's output is directly shaped by the context you provide. Context engineering is about choosing, structuring, and prioritizing information so the model can do its best work.",

    // Subsection A - Context as Strategy
    strategyLabel: "Context as Strategy",
    strategyDefinition:
      "Context engineering is the art of selecting, structuring, and prioritizing information in your prompt to maximize output quality.",
    strategyInsight:
      "The context window is not just a limit - it is a strategic resource. Every token you include shapes the model's attention and reasoning. Irrelevant content dilutes focus; well-chosen context amplifies it.",

    // Subsection B - Structure and Include
    structureLabel: "What to Include",
    structureCards: [
      {
        title: "Relevant Code / Data",
        description:
          "Include only what is needed, not entire files. Focused snippets outperform large dumps.",
      },
      {
        title: "Examples",
        description:
          "Show 2-3 examples of the desired output format. Concrete examples beat abstract descriptions.",
      },
      {
        title: "Reference Docs",
        description:
          "Attach relevant specs, style guides, or requirements. Give the model the same references you would give a colleague.",
      },
      {
        title: "XML Tags for Structure",
        description:
          "Use tags like <context>, <instructions>, <examples> to separate sections and make intent explicit.",
      },
    ],
    codeBlockTitle: "Structured Prompt with XML Tags",

    // Subsection C - Good vs Bad
    comparisonLabel: "Good vs. Bad Context",
    badLabel: "Bad Context",
    badItems: [
      "Dumping the entire codebase without filtering",
      "No structural separation between context and task",
      "Including irrelevant files and documentation",
      "Vague instructions with no concrete examples",
    ],
    goodLabel: "Good Context",
    goodItems: [
      "Focused snippets of only the relevant code",
      "Clear sections using XML tags or headings",
      "Relevant examples showing the desired output",
      "Explicit instructions with acceptance criteria",
    ],
  },

  zh: {
    // Section header
    title: "Context Engineering",
    subtitle: "Strategic Information Design",
    description:
      "AI 输出的质量直接取决于你提供的上下文。Context engineering 是关于选择、组织和排列信息优先级，使模型能够产出最佳结果。",

    // Subsection A - Context as Strategy
    strategyLabel: "上下文即策略",
    strategyDefinition:
      "Context engineering 是一门在 prompt 中选择、组织和排列信息优先级以最大化输出质量的艺术。",
    strategyInsight:
      "上下文窗口不仅仅是一个限制 - 它是一种策略资源。你包含的每个 token 都会影响模型的注意力和推理。无关内容会分散焦点，而精心选择的上下文则会增强焦点。",

    // Subsection B - Structure and Include
    structureLabel: "应该包含什么",
    structureCards: [
      {
        title: "相关代码 / 数据",
        description:
          "只包含需要的内容，而非整个文件。聚焦的代码片段比大量代码转储更有效。",
      },
      {
        title: "示例",
        description:
          "展示 2-3 个期望的输出格式示例。具体示例胜过抽象描述。",
      },
      {
        title: "参考文档",
        description:
          "附上相关的规范、风格指南或需求文档。给模型提供你会给同事的同样参考资料。",
      },
      {
        title: "XML Tags 结构化",
        description:
          "使用 <context>、<instructions>、<examples> 等标签分隔不同部分，使意图更明确。",
      },
    ],
    codeBlockTitle: "使用 XML Tags 的结构化 Prompt",

    // Subsection C - Good vs Bad
    comparisonLabel: "好的 vs. 差的上下文",
    badLabel: "差的上下文",
    badItems: [
      "不加筛选地倾倒整个代码库",
      "上下文和任务之间没有结构性分隔",
      "包含无关的文件和文档",
      "指令模糊，没有具体示例",
    ],
    goodLabel: "好的上下文",
    goodItems: [
      "仅包含相关代码的聚焦片段",
      "使用 XML tags 或标题清晰分隔各部分",
      "提供展示期望输出的相关示例",
      "包含验收标准的明确指令",
    ],
  },
} as const;
