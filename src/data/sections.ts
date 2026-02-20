export interface SubSection {
  id: string;
  title: string;
}

export interface Section {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  subsections: SubSection[];
}

export const sections: Section[] = [
  {
    id: "hero",
    number: "00",
    title: "驾驭 Claude/AI",
    subtitle: "场景全攻略",
    subsections: [],
  },
  {
    id: "setup",
    number: "01",
    title: "环境配置",
    subtitle: "Environment Setup",
    subsections: [
      { id: "setup-access", title: "访问 Claude" },
      { id: "setup-plans", title: "订阅方案" },
      { id: "setup-models", title: "模型选择" },
      { id: "setup-first-chat", title: "第一次对话" },
    ],
  },
  {
    id: "intro",
    number: "02",
    title: "Claude 简介",
    subtitle: "Meet Claude",
    subsections: [
      { id: "intro-models", title: "可用模型概览" },
      { id: "intro-tokens", title: "Token 与成本" },
      { id: "intro-plans", title: "订阅方案对比" },
    ],
  },
  {
    id: "comparison",
    number: "03",
    title: "AI 模型对比",
    subtitle: "Model Comparison",
    subsections: [
      { id: "comparison-content", title: "内容创作" },
      { id: "comparison-research", title: "Research" },
      { id: "comparison-image", title: "图片生成" },
      { id: "comparison-code", title: "编程" },
      { id: "comparison-data", title: "数据处理" },
      { id: "comparison-learning", title: "学习辅助" },
    ],
  },
  {
    id: "prompts",
    number: "04",
    title: "提示词技巧",
    subtitle: "Prompt Engineering",
    subsections: [
      { id: "prompts-role", title: "角色扮演" },
      { id: "prompts-structure", title: "结构化提示" },
      { id: "prompts-chain", title: "思维链" },
      { id: "prompts-few-shot", title: "Few-shot" },
    ],
  },
  {
    id: "advanced",
    number: "05",
    title: "高阶功能",
    subtitle: "Advanced Features",
    subsections: [
      { id: "advanced-code", title: "Claude Code" },
      { id: "advanced-cowork", title: "Claude Cowork" },
      { id: "advanced-integration", title: "应用集成" },
      { id: "advanced-agent", title: "Multi-Agent" },
      { id: "advanced-workflow", title: "工作流设计" },
    ],
  },
];
