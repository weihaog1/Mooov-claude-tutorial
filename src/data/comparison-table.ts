export interface ComparisonRow {
  category: string;
  categoryEn: string;
  description: string;
  useCases: string;
  researchNote?: string;
  recommendedModel: string;
  promptEn: string;
  promptZh: string;
  accentColor: string;
}

export const comparisonData: ComparisonRow[] = [
  {
    category: "文档/内容创作",
    categoryEn: "Content Creation",
    description:
      "营销文案、报告撰写、邮件起草、技术文档、社交媒体内容、公众号文章、小红书笔记。关键技巧：用你期望输出的语言来写提示词。想要中文输出就用中文提示，想要英文输出就用英文提示。Claude能理解中国社交媒体平台的语气和风格，直接用中文下达指令效果最佳。",
    useCases: "营销文案 / 社媒内容 / 报告撰写 / 技术文档",
    recommendedModel: "Claude",
    promptEn:
      "You are a senior content strategist. Write a LinkedIn post announcing our company's new product launch. Target audience: industry professionals and potential partners. Tone: professional but approachable. Include a compelling hook, 3 key benefits, and a clear CTA. Keep it under 300 words.",
    promptZh:
      "你是一位资深内容策略师。请为我们公司的新产品发布撰写一篇小红书种草笔记。要求：标题20字以内使用二极管标题法，正文700字口语化表达，每段使用emoji，融入\"宝藏\"\"绝绝子\"等热门词汇，文末带5-10个话题标签。目标受众：对新产品感兴趣的年轻消费者。",
    accentColor: "#D97757",
  },
  {
    category: "内容搜索/Research",
    categoryEn: "Research",
    description:
      "市场调研、竞品分析、学术文献综述、行业趋势分析、政策法规解读。Claude支持200K+ token上下文窗口（1M beta），可以一次处理相当于一本15万字中文小说的信息量。适合需要跨文档比对、信息综合的深度研究任务。",
    useCases: "竞品分析 / 行业研究 / 政策解读 / 文献综述",
    recommendedModel: "Claude",
    promptEn:
      "Analyze the competitive landscape of AI-powered productivity tools in the enterprise market. Compare the top 5 players by: market share, key features, pricing model, and target customer segment. Present findings in a structured table, then provide a SWOT analysis for a new entrant looking to differentiate.",
    promptZh:
      "分析企业级AI生产力工具的竞争格局。从市场份额、核心功能、定价模式、目标客户四个维度对比前5家竞品。用表格呈现对比结果，然后为新进入者（我们公司）提供SWOT分析。重点关注中小企业服务能力和产品差异化。",
    accentColor: "#6A9BCC",
  },
  {
    category: "图片生成",
    categoryEn: "Image Generation",
    description:
      "产品图设计、社交媒体配图、品牌视觉素材、PPT插图、营销海报。Claude本身不生成图片，但可以辅助撰写精准的图片生成提示词。推荐使用Google的Imagen系列模型，图片质量和文字渲染能力均属顶尖。国产模型同样表现强劲，如字节跳动的Seedance 2.0在视频和图像生成领域已达到世界一流水平。",
    useCases: "产品图 / 海报 / 视觉素材 / 演示插图",
    recommendedModel: "Google Nano Banana Pro",
    promptEn:
      "Create a professional product showcase image: a modern SaaS dashboard displayed on a MacBook Pro, sitting on a clean white desk. The dashboard shows analytics charts in blue and orange tones. Soft studio lighting, shallow depth of field, 4K resolution, photorealistic style.",
    promptZh:
      "请生成一张专业的产品展示图：一台MacBook Pro展示着现代化的SaaS产品仪表盘，放置在简洁的白色桌面上。仪表盘使用蓝橙配色的数据分析图表。柔和的摄影棚灯光，浅景深效果，4K分辨率，照片级真实风格。",
    accentColor: "#788C5D",
  },
  {
    category: "编程",
    categoryEn: "Programming",
    description:
      "代码生成、Bug修复、代码审查、架构设计、测试编写、数据库设计、API开发。Claude在编程领域的能力尤其突出。Claude Code可以自主理解整个代码库，进行多文件编辑、运行测试、执行命令。支持Sub-Agent协作模式，多个AI Agent并行处理不同开发任务，效率提升5-10倍。",
    useCases: "代码生成 / 架构设计 / 测试编写 / 代码审查",
    recommendedModel: "Claude / ChatGPT Codex",
    promptEn:
      "Review this Python function for potential issues: [code]. Check for: edge cases, performance bottlenecks, security vulnerabilities, and code style. Suggest specific improvements with code examples. Also write unit tests covering the happy path and 3 edge cases.",
    promptZh:
      "审查这段Python函数的潜在问题：[代码]。请从以下维度检查：边界情况处理、性能瓶颈、安全漏洞、代码风格。给出具体的改进建议和代码示例。同时编写单元测试，覆盖正常路径和3种边界情况。输出格式使用markdown代码块。",
    accentColor: "#C15F3C",
  },
  {
    category: "数据处理",
    categoryEn: "Data Processing",
    description:
      "Excel数据清洗、CSV分析、数据可视化建议、报表生成、数据转换、统计分析。Claude可以直接处理上传的Excel/CSV文件，进行数据分析和清洗。配合Claude Cowork（桌面AI助手），可以直接生成带有工作公式（如VLOOKUP、条件格式）的Excel文件，以及带有图表的数据分析报告。",
    useCases: "数据清洗 / 报表生成 / 趋势分析 / 商业洞察",
    recommendedModel: "Claude",
    promptEn:
      "I have a CSV file with 10,000 rows of customer transaction data. Columns: customer_id, date, amount, category, region. Please: 1) Identify data quality issues (nulls, duplicates, outliers). 2) Calculate monthly revenue by region. 3) Find the top 10 customers by lifetime value. 4) Suggest 3 actionable insights from the data patterns.",
    promptZh:
      "我有一份包含10,000行客户交易数据的CSV文件。字段：客户ID、日期、金额、类别、地区。请执行以下分析：1) 识别数据质量问题（空值、重复、异常值）并建议清洗方案。2) 按地区计算月度营收趋势。3) 找出生命周期价值最高的前10位客户。4) 从数据模式中提炼3条可执行的商业洞察。输出包含数据表格和分析说明。",
    accentColor: "#D97757",
  },
  {
    category: "学习与教育辅助",
    categoryEn: "Learning & Education",
    description:
      "概念解释、知识测验、学习路线规划、论文辅导、技术文档理解、新领域快速入门。Claude善于将复杂概念分层次讲解，支持苏格拉底式教学法，可以根据学习者水平调整解释深度。特别适合技术概念的中文化解释和跨领域知识迁移。Gemini默认支持1M上下文窗口，适合一次性输入大量学习材料进行综合理解。",
    useCases: "概念解释 / 学习规划 / 知识测验 / 跨领域入门",
    recommendedModel: "Claude / Gemini",
    promptEn:
      "Explain machine learning to a business executive with no technical background. Use 3 real-world business analogies they would understand. Then create a 5-question quiz to test their understanding. Finally, suggest a 2-week learning roadmap with specific resources.",
    promptZh:
      "请向一位没有技术背景的企业管理者解释机器学习。使用3个他们能理解的商业类比。然后创建一个5题的理解测验。最后，制定一个2周的学习路线图，包含具体的学习资源推荐。要求：语言通俗易懂，避免技术术语，用中文商业场景举例。",
    accentColor: "#6A9BCC",
  },
];
