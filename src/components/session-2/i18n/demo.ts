export const demoText = {
  en: {
    title: "Live Demo",
    subtitle: "Skills in Action",
    description:
      "Theory meets practice. Let's see how Claude Code skills power a real production workflow at Mooov - from fraud risk scoring to automated rule generation.",

    // Challenge
    challengeLabel: "The Challenge",
    challengeText:
      "Mooov operates a product rental platform. Before approving any rental order, the system must evaluate fraud risk - will this customer actually return the equipment? Different products attract different fraud patterns, target completely different user groups, and need completely different scoring strategies. Building these rules manually for each product was slow, error-prone, and impossible to keep consistent across dozens of product categories.",

    // Scoring Engine
    engineLabel: "The Scoring Engine",
    engineTitle: "Risk Control Module",
    engineDesc:
      "A production API that runs on a set of configurable rules and calculates Trust Scores for each rental order. The scoring engine is modular - each new product category needs its own set of rules tailored to that product's specific risk profile. This is where skills come in.",

    // Pipeline
    pipelineLabel: "The Rule Generator",
    pipelineTitle: "NextGen Prompt System",
    pipelineDesc:
      "Instead of writing scoring rules by hand, we built a 10-stage AI pipeline - entirely as Claude Code skills. Each stage is a SKILL.md file that Claude can invoke. Input a product name, and the pipeline outputs production-ready Python code, tests, and documentation.",

    // Phase names
    phaseNames: [
      "Research & Analysis",
      "Rule Generation",
      "Implementation & Testing",
    ],

    // Stage data
    stageNames: [
      "Product Analysis",
      "User Segmentation",
      "Consistency Check",
      "Explorer Rules",
      "Challenger Review",
      "Rule Proposal",
      "Code Generation",
      "Unit Tests",
      "Scenario Tests",
      "Package & Deploy",
    ],
    stageDescs: [
      "Research specs, pricing, resale markets. Calculate risk tier and leverage ratio.",
      "Map customer archetypes and identify which personas each fraud type would impersonate.",
      "Cross-validate signals against legal boundaries. Build signal interaction matrix.",
      "Free-form rule design - scoring formula, weights, deposit schedules, scenario walkthroughs.",
      "Adversarial review - simulate 6 fraud personas attacking the proposed rules.",
      "Human-readable proposal for non-technical reviewers.",
      "Convert approved rules to production-ready Python (BaseScorer / BaseCollector).",
      "Generate and run pytest tests for all new scorers and collectors.",
      "Run standard + product-specific scenarios through the full scoring logic.",
      "Assemble code, docs, and tests into a PR-ready package with deployment checklist.",
    ],
    approvalGate: "Approval Gate",

    // Highlights
    highlightTitles: [
      "Human Gates",
      "Adversarial Testing",
      "Auto-Retry Loops",
      "Skill Chaining",
    ],
    highlightDescs: [
      "Code is never generated until non-technical reviewers approve the rule proposal at Stage 06. AI creativity is strictly separated from production deployment.",
      "Stage 05 simulates 6 distinct fraud personas attacking the rules - rating bypass difficulty and identifying scoring gaps.",
      "Test failures automatically re-trigger generation. Unit test failures retry code gen (3x max). Scenario failures retry from rule design (2x max).",
      "Each skill defines explicit handoff instructions to the next stage, creating a self-documenting pipeline with clear input/output contracts.",
    ],

    // Demo preview
    previewLabel: "Up Next",
    previewTitle: "Live Demo",
    previewItems: [
      "How skill files are structured - frontmatter, instructions, and handoffs",
      "Running pipeline stages in Claude Code and watching skills chain together",
      "Creating a brand new skill from scratch using the create-skill command",
    ],
  },

  zh: {
    title: "实战演示",
    subtitle: "Skills 实战应用",
    description:
      "理论结合实践。让我们看看 Claude Code skills 如何驱动 Mooov 的真实生产工作流 - 从欺诈风险评估到自动化规则生成。",

    // Challenge
    challengeLabel: "业务挑战",
    challengeText:
      "Mooov 运营一个产品租赁平台。在批准任何租赁订单之前，系统必须评估欺诈风险 - 这个客户真的会归还设备吗? 不同的产品会吸引不同的欺诈模式，面向完全不同的用户群体，需要完全不同的评分策略。为每个产品手动编写评分规则既缓慢又容易出错，而且几乎不可能在数十个产品类别之间保持一致性。",

    // Scoring Engine
    engineLabel: "评分引擎",
    engineTitle: "Risk Control Module",
    engineDesc:
      "一个生产级 API，基于一套可配置的规则为每笔租赁订单计算 Trust Score。评分引擎是模块化的 - 每个新产品类别都需要针对该产品特定风险特征的专属规则集。这就是 skills 发挥作用的地方。",

    // Pipeline
    pipelineLabel: "规则生成器",
    pipelineTitle: "NextGen Prompt System",
    pipelineDesc:
      "我们没有手动编写评分规则，而是构建了一个 10 阶段的 AI 流水线 - 全部以 Claude Code skills 的形式实现。每个阶段都是一个 SKILL.md 文件。输入产品名称，流水线输出生产级的 Python 代码、测试和文档。",

    // Phase names
    phaseNames: ["调研与分析", "规则生成", "实现与测试"],

    // Stage data
    stageNames: [
      "Product Analysis",
      "User Segmentation",
      "Consistency Check",
      "Explorer Rules",
      "Challenger Review",
      "Rule Proposal",
      "Code Generation",
      "Unit Tests",
      "Scenario Tests",
      "Package & Deploy",
    ],
    stageDescs: [
      "调研产品规格、定价、二手市场。计算风险等级和杠杆比率。",
      "绘制客户画像，识别每种欺诈类型会冒充哪类合法用户。",
      "交叉验证信号与法律边界。构建信号交互矩阵。",
      "自由探索式规则设计 - 评分公式、权重、押金计划、场景推演。",
      "对抗性审查 - 模拟 6 种欺诈角色攻击所提议的规则。",
      "面向非技术审核人员的可读提案。",
      "将批准的规则转化为生产级 Python 代码 (BaseScorer / BaseCollector)。",
      "为所有新的 scorer 和 collector 生成并运行 pytest 测试。",
      "使用标准 + 产品特定场景，通过完整评分逻辑进行端到端验证。",
      "组装代码、文档和测试为 PR-ready 的完整包，附带部署清单。",
    ],
    approvalGate: "审批关卡",

    // Highlights
    highlightTitles: [
      "人工审批关卡",
      "对抗性测试",
      "自动重试循环",
      "Skill 链式调用",
    ],
    highlightDescs: [
      "在非技术审核人员批准 Stage 06 的规则提案之前，绝不生成代码。将 AI 创造力与生产部署严格分离。",
      "Stage 05 模拟 6 种不同的欺诈角色攻击规则 - 评估绕过难度，识别评分漏洞。",
      "测试失败会自动重新触发生成。单元测试失败重试代码生成 (最多 3 次)。场景测试失败从规则设计阶段重试 (最多 2 次)。",
      "每个 skill 定义了明确的交接指令指向下一阶段，形成一个自文档化的流水线，具有清晰的输入/输出契约。",
    ],

    // Demo preview
    previewLabel: "接下来",
    previewTitle: "现场演示",
    previewItems: [
      "Skill 文件的结构 - frontmatter、指令和交接机制",
      "在 Claude Code 中运行 pipeline 阶段，观察 skills 如何链式调用",
      "使用 create-skill 命令从零创建一个全新的 skill",
    ],
  },
} as const;
