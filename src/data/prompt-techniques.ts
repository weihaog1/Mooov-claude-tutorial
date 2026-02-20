export interface PromptTechnique {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  example: string;
  icon: string;
}

export const promptTechniques: PromptTechnique[] = [
  {
    id: "role",
    title: "角色扮演",
    titleEn: "Role Playing",
    description:
      "为AI指定一个专业角色，让它以该领域专家的身份回答问题。这能显著提高回答的专业性和针对性。角色设定越具体越好 - 包含经验年限、专业领域、工作风格等细节。研究显示，带角色设定的提示词输出质量平均提升40%。",
    example:
      "你是一位拥有20年经验的品牌策略顾问，曾服务过多家金融科技公司。你的风格务实直接，擅长用数据说话。请分析我们公司的品牌定位，并给出优化建议。",
    icon: "mask",
  },
  {
    id: "structure",
    title: "结构化提示",
    titleEn: "Structured Prompts",
    description:
      "使用清晰的格式和标签来组织提示词。一个好的结构化提示包含：背景信息（Context）、具体任务（Task）、约束条件（Constraints）、输出格式（Format）。使用分隔符（如---、```、\"\"）区分不同部分，让AI精准理解每个要素。",
    example:
      "# 背景\n我们是一家B2B金融科技公司\n# 任务\n撰写一份季度市场分析报告\n# 要求\n- 3000字以内\n- 包含数据图表描述\n- 使用正式商务语气\n# 输出格式\nMarkdown格式，含标题分级",
    icon: "layout",
  },
  {
    id: "chain",
    title: "思维链 (CoT)",
    titleEn: "Chain of Thought",
    description:
      "引导AI逐步思考，展示推理过程。通过加入\"让我们一步步思考\"或\"请先分析...再评估...最后建议...\"等引导语，使AI进行系统性思考而非直接给出答案。特别适合复杂决策、数据分析、问题诊断等需要推理链条的场景。",
    example:
      "请一步步分析这个商业决策：\n第一步：列出当前市场状况和关键数据\n第二步：分析3种可选方案的优劣势\n第三步：评估每种方案的风险和收益\n第四步：给出你的推荐方案和实施路线图",
    icon: "chain",
  },
  {
    id: "examples",
    title: "示例引导 (Few-shot)",
    titleEn: "Few-shot Learning",
    description:
      "提供几个输入-输出示例，让AI理解你期望的格式和风格。这是让AI精确匹配你预期输出的最有效方式。通常2-3个示例即可，示例应覆盖不同情况。",
    example:
      "请按以下格式分析公司：\n\n示例输入：苹果公司\n示例输出：行业：消费电子+软件生态 / 核心优势：品牌溢价+闭环生态 / 风险：创新放缓、中国市场份额下降\n\n示例输入：特斯拉\n示例输出：行业：新能源汽车+能源 / 核心优势：技术领先+品牌效应 / 风险：竞争加剧、产能扩张压力\n\n请分析：Mooov",
    icon: "examples",
  },
];
