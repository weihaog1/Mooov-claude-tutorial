export const systemPromptsText = {
  en: {
    // Section header
    title: "System Prompts",
    subtitle: "The Hidden Instruction Layer",
    description:
      "System prompts define how the AI behaves before the user says anything. They are the foundation of every reliable AI application, turning a generic model into a specialized tool.",

    // Subsection A - What System Prompts Are
    whatLabel: "What System Prompts Are",
    whatDefinition:
      "A system prompt is a hidden instruction layer that shapes how the AI behaves before the user says anything.",
    whatExplanation:
      "Unlike user messages, system prompts are invisible to the end user. They set the stage for every interaction, ensuring consistent behavior, tone, and quality across all conversations.",
    components: [
      {
        title: "Persona",
        description:
          "Define who the AI is - role, expertise, communication style",
      },
      {
        title: "Behavioral Constraints",
        description:
          "Set boundaries - what to do, what to avoid, tone rules",
      },
      {
        title: "Formatting Directives",
        description:
          "Specify output structure - headers, bullet points, code blocks, length",
      },
      {
        title: "Guardrails",
        description:
          "Safety rules - content restrictions, disclaimer requirements, escalation triggers",
      },
    ],

    // Subsection B - Before/After
    beforeAfterLabel: "Before / After",
    withoutTitle: "Without System Prompt",
    withoutBullets: [
      "Generic AI response with no personality",
      "Inconsistent formatting across conversations",
      "No boundaries or scope limitations",
      "Unpredictable tone and depth",
    ],
    withTitle: "With System Prompt",
    withBullets: [
      "Focused expert response with clear identity",
      "Consistent style and formatting every time",
      "Structured output that matches expectations",
      "Clear limits on scope and behavior",
    ],

    // Code example
    codeExampleLabel: "Production Example",
    codeExample: `You are a senior financial analyst with 15 years of experience.
Speak in clear, professional language. Avoid jargon unless
the user is technical.

## Behavioral Rules
- Always cite data sources
- Use conservative estimates by default
- Flag assumptions explicitly
- Never provide specific investment advice

## Output Format
- Start with executive summary (3 sentences max)
- Use markdown headers for sections
- Include a confidence level (high/medium/low)
- End with "Key Risks" section`,
  },

  zh: {
    // Section header
    title: "System Prompts",
    subtitle: "The Hidden Instruction Layer",
    description:
      "System prompt 定义了 AI 在用户开口之前的行为方式。它是每个可靠 AI 应用的基础，能将通用模型转变为专业化工具。",

    // Subsection A - What System Prompts Are
    whatLabel: "什么是 System Prompt",
    whatDefinition:
      "System prompt 是一个隐藏的指令层，在用户发送任何消息之前就已经塑造了 AI 的行为方式。",
    whatExplanation:
      "与用户消息不同，system prompt 对终端用户不可见。它为每次交互设定基调，确保所有对话中行为、语气和质量的一致性。",
    components: [
      {
        title: "Persona",
        description: "定义 AI 的身份 - 角色、专业领域、沟通风格",
      },
      {
        title: "Behavioral Constraints",
        description: "设定边界 - 该做什么、该避免什么、语气规则",
      },
      {
        title: "Formatting Directives",
        description: "指定输出结构 - 标题、要点、代码块、长度",
      },
      {
        title: "Guardrails",
        description: "安全规则 - 内容限制、免责声明要求、升级触发条件",
      },
    ],

    // Subsection B - Before/After
    beforeAfterLabel: "对比效果",
    withoutTitle: "没有 System Prompt",
    withoutBullets: [
      "通用的 AI 回复，没有个性",
      "不同对话之间格式不一致",
      "没有边界或范围限制",
      "语气和深度不可预测",
    ],
    withTitle: "有 System Prompt",
    withBullets: [
      "带有清晰身份的专业回复",
      "每次都保持一致的风格和格式",
      "输出结构符合预期",
      "行为和范围有明确边界",
    ],

    // Code example
    codeExampleLabel: "生产级示例",
    codeExample: `You are a senior financial analyst with 15 years of experience.
Speak in clear, professional language. Avoid jargon unless
the user is technical.

## Behavioral Rules
- Always cite data sources
- Use conservative estimates by default
- Flag assumptions explicitly
- Never provide specific investment advice

## Output Format
- Start with executive summary (3 sentences max)
- Use markdown headers for sections
- Include a confidence level (high/medium/low)
- End with "Key Risks" section`,
  },
} as const;
