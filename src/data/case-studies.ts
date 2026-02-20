export interface CaseStudy {
  id: string;
  title: string;
  category: "Mooov 实践" | "商业应用";
  description: string;
  extendedDescription?: string;
  stats?: { label: string; value: string }[];
  link?: string;
  image?: string;
  accentColor: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "risk-control",
    title: "Mooov 风控模块开发",
    category: "Mooov 实践",
    description:
      "使用Claude Code开发完整的风控模块系统。从需求分析、架构设计、代码实现到测试部署，全流程由AI辅助完成。原本需要3-5人团队数周完成的工作量。",
    extendedDescription:
      "Claude Code能够理解整个代码库上下文，进行跨文件重构，自动编写测试用例。",
    stats: [
      { label: "效率提升", value: "5-10x" },
      { label: "开发周期", value: "1个月" },
      { label: "人员投入", value: "1人" },
    ],
    accentColor: "#B8533E",
  },
  {
    id: "ui-implementation",
    title: "Mooov UI 快速实现",
    category: "Mooov 实践",
    description:
      "从Figma设计稿到完全实现的Web UI，包括新功能开发，仅需1小时完成。使用Figma MCP Server让Claude Code直接读取设计规范，自动生成符合设计系统的React组件。",
    extendedDescription:
      "组件包含正确的响应式布局、动画效果和交互逻辑。项目集成了Mapbox API，在多种设计方案中进行了快速实验与迭代。",
    link: "https://mooov-mapbox-ui.vercel.app/",
    image: "/Mooov-UI-design.png",
    stats: [
      { label: "从设计到上线", value: "1hr" },
      { label: "设计还原度", value: "100%" },
    ],
    accentColor: "#6A9BCC",
  },
  {
    id: "nextgen",
    title: "NextGen 风控系统规划",
    category: "Mooov 实践",
    description:
      "计划将Claude Code作为下一代风控系统的智能大脑和Agentic核心。利用Skills体系构建可复用的风控Agent技能包（数据清洗Skill、规则引擎Skill、报告生成Skill）。",
    extendedDescription:
      "通过MCP接入外部数据源和第三方风控服务。用Claude本身进行Prompt工程开发以及优化，实现AI驱动的AI开发。",
    stats: [
      { label: "角色", value: "智能核心" },
      { label: "技术", value: "Agent + Skills + MCP" },
    ],
    accentColor: "#788C5D",
  },
  {
    id: "ces-2026",
    title: "CES 2026 展商数据研究",
    category: "Mooov 实践",
    description:
      "使用Claude Code对CES 2026全部3,302家展商进行智能筛选与深度调研。通过50个并发子Agent自动访问展商官网，提取产品信息、价格区间，并针对大学生消费场景进行租赁意愿和分期意愿双维度评分(0-5分)。全部输出为中文结构化数据。",
    extendedDescription:
      "从原始数据中筛选出2,742家目标品类展商，经6批次并行处理后，最终输出1,310个消费级产品，其中623个高意愿标的(评分>=3)。整个流程由CLAUDE.md定义工作规范，子Agent自动增量保存，支持断点续跑。一人完成了传统需要5-10人数周的市场调研工作量。",
    stats: [
      { label: "数据规模", value: "3,302家展商" },
      { label: "并发Agent", value: "50个" },
      { label: "高意愿标的", value: "623个" },
      { label: "人员投入", value: "1人" },
    ],
    accentColor: "#D97757",
  },
  {
    id: "content-creation",
    title: "AI内容创作与社交运营",
    category: "商业应用",
    description:
      "企业使用AI进行营销文案、社交媒体内容、技术文档的批量生成。小红书运营中，AI可在5分钟内生成30条图文笔记，但需遵守平台60%原创度要求。",
    extendedDescription:
      "微信公众号长文、抖音短视频脚本、产品说明书等均可通过角色扮演+结构化Prompt实现批量高质量生产。通过xiaohongshu-mcp工具，还可实现自动发布、趋势监控和互动管理。",
    stats: [
      { label: "内容效率", value: "3-5x" },
      { label: "小红书", value: "5min/30条" },
      { label: "平台", value: "小红书+微信+抖音" },
    ],
    accentColor: "#D97757",
  },
  {
    id: "ai-risk",
    title: "AI金融风控",
    category: "商业应用",
    description:
      "蚂蚁集团AlphaRisk系统将支付宝资损率控制在亿分之0.98以下（远低于行业平均），不良贷款识别准确率超95%。蚁盾\"知识交互建模引擎\"10分钟即可定制AI风控模型。",
    extendedDescription:
      "京东科技与工商银行共建智慧供应链金融平台，服务中小微企业超50万家。AI风控正从辅助工具演变为系统核心基础设施。",
    stats: [
      { label: "资损率", value: "<亿分之0.98" },
      { label: "识别准确率", value: "95%+" },
      { label: "模型定制", value: "10分钟" },
    ],
    accentColor: "#C15F3C",
  },
  {
    id: "office-automation",
    title: "智能办公自动化",
    category: "商业应用",
    description:
      "中国协同办公市场2025年预计达4148亿元。钉钉AI Table已有30万+企业用户，支持80+AI字段模板和30+方言识别。飞书AI矩阵覆盖知识问答、多维表格、对话式业务搭建。",
    extendedDescription:
      "WPS AI全产品线集成。行业数据显示：AI文档处理成本降低40%、周转时间缩短70%、北森AI招聘Agent将平均招聘周期从28天压缩至17天（效率提升40%）。",
    stats: [
      { label: "市场规模", value: "4148亿" },
      { label: "成本降低", value: "40%" },
      { label: "时间缩短", value: "70%" },
    ],
    accentColor: "#6A9BCC",
  },
];
