"use client";

import { useInView } from "@/components/useInView";

const models = [
  {
    name: "Haiku 4.5",
    badge: "极速",
    description:
      "轻量级任务的最佳选择。响应速度最快，适合简单问答、文本分类、信息提取、数据格式化等高频低复杂度任务。延迟最低，成本最优。",
    bestFor: "高频简单任务、客服自动回复、数据预处理",
    apiPrice: "Input $1 / Output $5 per MTok",
    color: "#6A9BCC",
  },
  {
    name: "Sonnet 4.6",
    badge: "均衡",
    description:
      "日常工作的主力模型。在智能和速度之间取得最佳平衡，适合写作、分析、编程、翻译等大多数任务。支持Extended Thinking和Adaptive Thinking，能根据任务复杂度自动调整思考深度。",
    bestFor: "90%的日常工作任务、写作、编程、分析",
    apiPrice: "Input $3 / Output $15 per MTok",
    color: "#D97757",
  },
  {
    name: "Opus 4.6",
    badge: "深度",
    description:
      "最强推理能力。处理复杂分析、高级编程、深度研究、多步推理等需要深度思考的任务时表现卓越。是最智能的模型，专为Agent和高难度编程任务设计。支持最高128K tokens输出。",
    bestFor: "复杂推理、Agent任务、架构设计、深度研究",
    apiPrice: "Input $5 / Output $25 per MTok",
    color: "#788C5D",
  },
];

const tokenStats = [
  {
    value: "200K+",
    color: "#D97757",
    label: "最大上下文窗口",
    detail:
      "约等于一本15万字的中文小说，1M beta版本可处理约340万个Unicode字符。",
  },
  {
    value: "~1500",
    color: "#6A9BCC",
    label: "每1000汉字约token数",
    detail: "常见汉字约1500 tokens，含生僻字或专业术语可达2500 tokens。",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    usage: "~30-100消息/天",
    features: ["基础对话", "有限用量", "Sonnet模型", "无Projects功能"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$20/月",
    usage: "",
    features: [
      "全部模型(含Opus 4.6)",
      "Claude Code + Projects",
      "文件上传/创建 + Research",
      "Extended Thinking + Google Workspace",
    ],
    highlight: true,
  },
  {
    name: "Max",
    price: "$100-200/月",
    usage: "5-20x Pro用量",
    features: [
      "Pro全部功能",
      "持久记忆",
      "新功能优先体验",
      "高峰期优先访问 + 更高输出限制",
    ],
    highlight: false,
  },
  {
    name: "Team",
    price: "$25-150/人/月",
    usage: "高于Pro",
    features: [
      "Pro全部功能",
      "团队协作空间",
      "管理后台 + SSO单点登录",
      "更高用量配额",
    ],
    highlight: false,
  },
];

export default function IntroSection() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="intro" ref={ref} style={{ background: "#191919" }}>
      <div className="py-32 px-8 lg:px-20 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="relative">
          <span
            className="font-serif text-[8rem] font-black leading-none select-none"
            style={{ color: "rgba(106,155,204,0.12)" }}
          >
            02
          </span>
          <div className="mt-[-2rem]">
            <p
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: "#B0AEA5" }}
            >
              Meet Claude
            </p>
            <h2
              className={`font-serif text-4xl font-bold mt-1 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ color: "#F4F3EE" }}
            >
              Claude 简介
            </h2>
            <p
              className={`text-base mt-4 max-w-2xl ${
                isVisible ? "animate-fade-up stagger-2" : "opacity-0"
              }`}
              style={{ color: "rgba(244,243,238,0.7)" }}
            >
              Claude是Anthropic开发的AI助手，以安全性和实用性著称。了解不同模型和方案，选择最适合你的使用方式。
            </p>
          </div>
        </div>

        {/* Why Claude */}
        <div className="mt-12">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              isVisible ? "animate-fade-up stagger-2" : "opacity-0"
            }`}
            style={{ color: "rgba(244,243,238,0.5)" }}
          >
            Why Claude
          </p>

          <div
            className={`glass-card rounded-2xl p-6 mt-4 ${
              isVisible ? "animate-fade-up stagger-3" : "opacity-0"
            }`}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(244,243,238,0.75)" }}
            >
              在全球最权威的AI模型盲测排行榜Chatbot Arena中，Claude系列模型持续位居前列。Arena采用真实用户双盲投票机制，是目前最客观的AI能力评估平台。Claude在编程、推理、写作等核心能力维度上表现卓越，是Mooov团队推荐的首选AI工具。
            </p>

            <a
              href="https://arena.ai/zh/leaderboard/text"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 mt-4 rounded-xl px-4 py-3 transition-all duration-300 hover:brightness-110"
              style={{
                background: "rgba(106,155,204,0.1)",
                border: "1px solid rgba(106,155,204,0.2)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(106,155,204,0.15)" }}
              >
                <svg
                  className="w-5 h-5"
                  style={{ color: "#6A9BCC" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#6A9BCC" }}
                >
                  Chatbot Arena Leaderboard
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "rgba(244,243,238,0.5)" }}
                >
                  arena.ai - AI Model Rankings by Real User Votes
                </p>
              </div>
              <svg
                className="w-4 h-4 ml-auto flex-shrink-0"
                style={{ color: "rgba(244,243,238,0.3)" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Sub-section 1: Model overview */}
        <div className="mt-16">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              isVisible ? "animate-fade-up stagger-5" : "opacity-0"
            }`}
            style={{ color: "rgba(244,243,238,0.5)" }}
          >
            可用模型概览
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
            {models.map((model, i) => (
              <div
                key={model.name}
                className={`glass-card rounded-2xl p-6 relative overflow-hidden ${
                  isVisible ? `animate-fade-up stagger-${6 + i}` : "opacity-0"
                }`}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 h-[2px] w-full"
                  style={{ background: model.color }}
                />

                {/* Name and badge */}
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className="text-2xl font-bold font-serif"
                    style={{ color: "#F4F3EE" }}
                  >
                    {model.name}
                  </h3>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      background: `${model.color}26`,
                      color: model.color,
                    }}
                  >
                    {model.badge}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "rgba(244,243,238,0.75)" }}
                >
                  {model.description}
                </p>

                {/* Best for */}
                <div
                  className="rounded-lg px-3 py-2 text-xs mb-3"
                  style={{ background: `${model.color}1a` }}
                >
                  <span style={{ color: "rgba(244,243,238,0.45)" }}>
                    Best for:{" "}
                  </span>
                  <span style={{ color: "rgba(244,243,238,0.85)" }}>
                    {model.bestFor}
                  </span>
                </div>

                {/* API price */}
                <p
                  className="text-xs font-semibold tracking-wide"
                  style={{ color: model.color }}
                >
                  {model.apiPrice}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-section 2: Token and cost */}
        <div className="mt-20">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              isVisible ? "animate-fade-up stagger-7" : "opacity-0"
            }`}
            style={{ color: "rgba(244,243,238,0.5)" }}
          >
            Token与成本
          </p>

          {/* Token explanation */}
          <div
            className={`glass-card rounded-2xl p-5 mt-6 ${
              isVisible ? "animate-fade-up stagger-8" : "opacity-0"
            }`}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(244,243,238,0.75)" }}
            >
              Token是AI模型处理文本的基本单位。中文通常每个字对应1-2个token，英文每个单词约1-4个token。理解token机制有助于更好地控制使用成本和优化对话效率。
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {tokenStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`rounded-2xl p-5 text-center ${
                  isVisible ? `animate-fade-up` : "opacity-0"
                }`}
                style={{
                  border: "1px solid rgba(203,154,118,0.1)",
                  background: "rgba(38,38,36,0.5)",
                  animationDelay: isVisible ? `${0.9 + i * 0.1}s` : undefined,
                }}
              >
                <p
                  className="text-4xl font-black font-serif"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs font-semibold mt-2"
                  style={{ color: "#F4F3EE" }}
                >
                  {stat.label}
                </p>
                <p
                  className="text-xs mt-1 leading-relaxed"
                  style={{ color: "rgba(244,243,238,0.5)" }}
                >
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-section 3: Subscription plans */}
        <div className="mt-20">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{
              color: "rgba(244,243,238,0.5)",
              animationDelay: isVisible ? "1.3s" : undefined,
            }}
          >
            订阅方案对比
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`glass-card rounded-2xl p-6 relative ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{
                  borderColor: plan.highlight
                    ? "rgba(193,95,60,0.35)"
                    : undefined,
                  animationDelay: isVisible ? `${1.4 + i * 0.1}s` : undefined,
                }}
              >
                {/* Highlight badge */}
                {plan.highlight && (
                  <span
                    className="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold"
                    style={{ background: "#C15F3C", color: "white" }}
                  >
                    推荐
                  </span>
                )}

                {/* Plan name */}
                <p
                  className="text-xs uppercase tracking-[0.15em] font-semibold"
                  style={{ color: "rgba(244,243,238,0.5)" }}
                >
                  {plan.name}
                </p>

                {/* Price */}
                <p
                  className="text-3xl font-black font-serif mt-2"
                  style={{ color: "#F4F3EE" }}
                >
                  {plan.price}
                </p>

                {/* Usage */}
                {plan.usage && (
                  <p
                    className="text-xs mt-1"
                    style={{ color: "rgba(244,243,238,0.5)" }}
                  >
                    {plan.usage}
                  </p>
                )}

                {/* Features */}
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "rgba(244,243,238,0.75)" }}
                    >
                      <span
                        className="mt-[6px] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "#D97757" }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div
            className={`glass-card rounded-xl px-4 py-3 mt-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{
              animationDelay: isVisible ? "1.8s" : undefined,
            }}
          >
            <p
              className="text-sm"
              style={{ color: "rgba(244,243,238,0.7)" }}
            >
              所有方案均可随时升降级。API使用按量计费，独立于订阅方案。教育和开源项目可申请额外额度优惠。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
