export interface AdvancedFeatureGroup {
  title: string;
  bullets: string[];
}

export interface AdvancedFeatureStat {
  label: string;
  value: string;
  color?: string;
}

export interface PlatformAvailability {
  platform: string;
  status: string;
}

export interface AdvancedFeature {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  groups: AdvancedFeatureGroup[];
  supplementaryText?: string;
  availability?: PlatformAvailability[];
  requirement?: string;
  stats?: AdvancedFeatureStat[];
  accentColor: string;
  visualType: "claude-code" | "agent" | "generic";
}

export const advancedFeatures: AdvancedFeature[] = [
  {
    id: "claude-code",
    title: "Claude Code - 工程化AI的终极形态",
    titleEn: "Claude Code",
    description:
      "Claude Code是Anthropic推出的Agent级编程工具，运行在你的终端中，能够自主理解整个代码库、编辑文件、运行命令。它不只是一个代码补全工具 - 它是一个能独立思考、规划、执行的AI软件工程师。Claude Code可以在VS Code、JetBrains、桌面应用和终端中运行。",
    groups: [
      {
        title: "Claude Code + Figma 设计到代码",
        bullets: [
          "Figma MCP Server让Claude Code直接读取设计稿，理解设计意图、组件结构、样式规范。",
          "2026年2月17日Figma官方发布\"Code to Canvas\"功能：Claude Code生成的UI可以反向转化为可编辑的Figma设计稿。",
          "实现真正的双向工作流：Figma设计 -> Claude Code生成代码 -> 运行中的UI回传Figma -> 设计师在Figma上调整 -> 更新推回代码。",
          "Mooov实践：从Figma设计稿到完全实现的Web UI仅需1小时，设计还原度99%。",
        ],
      },
      {
        title: "Sub-Agents / Agent Teams - 多Agent协作",
        bullets: [
          "Claude Code支持生成多个Sub-Agent，每个Agent专注于特定任务并行工作。",
          "Team Lead Agent负责任务分解和协调，Worker Agents执行具体任务。",
          "每个Agent可配置独立的：自定义提示词、工具权限、模型选择、MCP服务器。",
          "Agent Teams功能：通过TeamCreate、TaskCreate、SendMessage等原语实现多Agent协同。",
          "适用场景：大规模重构（一个Agent改后端，一个Agent改前端，一个Agent写测试）。",
        ],
      },
      {
        title: "工程化使用方式 - Skills/Hooks/MCP",
        bullets: [
          "Skills：可复用的\"技能包\"，包含SKILL.md描述文件和配套脚本/模板，支持Prompt模板、工具限制和模型选择。",
          "Hooks：确定性代码钩子，绑定特定事件（如编辑后自动格式化、提交前自动lint）。",
          "MCP (Model Context Protocol)：标准化AI工具与外部数据源/服务连接，可接入Google Drive、Jira、Slack、Figma等。",
          "Plugins：将Skills、Hooks、MCP Server打包为可分发插件单元，一键安装扩展能力。",
        ],
      },
      {
        title: "Mooov 工程实践案例",
        bullets: [
          "风控模块开发：原本需要完整团队数周完成的工作量，由Alan单人在一个月内完成，开发效率提升5-10倍。",
          "NextGen风控系统：计划将Claude Code作为下一代风控系统的智能大脑和Agentic核心，利用Skills体系构建可复用Agent技能包。",
          "UI快速实现：从Figma设计稿到完全实现的Web UI（含新功能开发）仅需1小时，自动生成符合设计系统的组件代码。",
        ],
      },
    ],
    stats: [
      { label: "开发效率提升", value: "10x", color: "#D97757" },
      { label: "Figma到生产UI", value: "1hr", color: "#6A9BCC" },
      { label: "单人交付完整模块", value: "1个月", color: "#788C5D" },
    ],
    accentColor: "#B8533E",
    visualType: "claude-code",
  },
  {
    id: "cowork",
    title: "Claude Cowork - 桌面AI协作助手",
    titleEn: "Claude Cowork",
    description:
      "Claude Cowork是Anthropic推出的桌面AI Agent（2026年1月发布研究预览版），可以理解为\"Claude Code的办公版\"。它不是对话式AI，而是一个能自主执行多步骤任务的数字同事。你描述目标，Claude自动规划、分解任务、并行执行，最终将完成的成果（文档、表格、报告）直接保存到你的文件系统中。",
    groups: [
      {
        title: "核心能力",
        bullets: [
          "直接文件访问：可读写本地文件，无需手动上传下载；可分析桌面Excel并直接输出清洗后的新文件。",
          "自主任务执行：你描述目标后它独立完成，例如自动读取10份客户反馈并生成总结PPT。",
          "Sub-Agent协调：复杂任务自动分解并行处理，一个Agent分析数据，另一个Agent生成图表。",
          "专业文档输出：Excel含VLOOKUP/条件格式/多工作表，PPT含规范排版，Word含目录和页码。",
        ],
      },
    ],
    availability: [
      { platform: "macOS", status: "Available (since Jan 16, 2026)" },
      { platform: "Windows", status: "Available (since Feb 10, 2026)" },
    ],
    requirement: "Requirement: Claude Desktop app + Pro/Max/Team/Enterprise plan",
    accentColor: "#D97757",
    visualType: "generic",
  },
  {
    id: "integration",
    title: "应用集成 - Claude in PPT, Excel & Documents",
    titleEn: "Application Integration",
    description:
      "Claude可以深度集成到日常办公工具中，实现从数据分析到演示文稿的全链路AI化。通过Claude Cowork的桌面Agent能力和MCP协议，Claude不再局限于聊天窗口，而是直接在你熟悉的办公环境中工作。",
    groups: [
      {
        title: "场景能力",
        bullets: [
          "PowerPoint自动生成：输入主题和大纲，自动生成完整PPT（排版、配色、图表占位符），支持企业模板和品牌色。",
          "Excel深度分析：理解数据结构，创建透视分析、复杂公式（VLOOKUP/INDEX-MATCH/条件汇总），并输出带公式的新文件。",
          "Word文档协作：自动生成目录、页眉页脚、标题分级、表格和引用，支持多轮迭代修改。",
          "PDF处理：读取PDF总结、合并拆分文件、填写PDF表单。",
        ],
      },
    ],
    accentColor: "#6A9BCC",
    visualType: "generic",
  },
  {
    id: "agent",
    title: "Multi-Agent System - 多Agent协作",
    titleEn: "Multi-Agent System",
    description:
      "多个AI Agent协同工作，每个Agent专注于特定任务领域，通过协调机制完成复杂项目。这不是科幻概念，而是Claude Code和Claude Cowork中已经可用的生产级功能。多Agent系统的核心优势是：并行处理加速、专业分工提质、复杂任务分解。",
    groups: [
      {
        title: "系统优势",
        bullets: [
          "并行处理：多个Agent同时执行不同任务，大幅缩短完成时间（如调研/财务分析/PPT并行）。",
          "自动协调：Team Lead Agent负责任务分配、进度跟踪、结果整合；Worker完成后自动汇报。",
          "复杂项目分解：将大项目拆分为独立子任务，由最适合的Agent执行并自动合并结果。",
          "不同专长：每个Agent可拥有不同Skills、工具权限和模型配置（Opus调研 / Sonnet写作 / Haiku校验）。",
        ],
      },
    ],
    accentColor: "#788C5D",
    visualType: "agent",
  },
  {
    id: "workflow",
    title: "工作流设计 - 将AI融入日常工作",
    titleEn: "Workflow Design",
    description:
      "将AI融入日常工作流程，不是替代人类，而是增强人类。AI工作流设计的核心思想是：将重复性、规则明确的任务交给AI自动化执行，人类专注于需要判断力、创造力和关系建设的工作。好的AI工作流应该像水电一样 - 无处不在但不引人注目。",
    groups: [
      {
        title: "落地方法",
        bullets: [
          "Prompt即配置：将Prompt作为可版本化管理的配置文件，每个业务流程对应标准化模板。",
          "Prompt版本管理：像代码一样记录修改、对比输出、回滚历史，在Skills体系中实现模块化管理。",
          "人机协作流程：明确AI独立完成环节、人工审核环节和人机协作环节（初稿->审核->修改->终审）。",
          "持续迭代优化：根据实际效果优化Prompt、调整流程节点、更新模型选择，形成反馈闭环。",
        ],
      },
    ],
    accentColor: "#C15F3C",
    visualType: "generic",
  },
];
