"use client";

import { useInView } from "@/components/useInView";

const steps = [
  {
    step: "01",
    title: "访问 Claude",
    description:
      "通过 claude.ai 访问Claude网页版，或下载桌面/移动端应用。注意：中国大陆无法直接访问，需使用VPN。桌面端支持macOS和Windows，移动端支持iOS和Android。",
    detail: "推荐使用Chrome浏览器获得最佳体验",
  },
  {
    step: "02",
    title: "选择订阅方案",
    description:
      "Free版本可以体验基础功能（每天约30-100条消息）；Pro版本($20/月)解锁5倍用量和全部模型；Team版本($25/人/月)适合企业团队协作。Max版本($100-200/月)提供最高用量和优先访问。",
    detail: "建议从Pro开始，体验完整功能",
  },
  {
    step: "03",
    title: "了解模型选择",
    description:
      "Haiku 4.5 (极速轻量) / Sonnet 4.6 (均衡首选) / Opus 4.6 (深度推理)。不同任务选择不同模型，平衡效果与成本。Sonnet适合90%的日常任务，Opus用于需要深度思考的复杂场景。",
    detail: "日常任务首选Sonnet，复杂推理用Opus",
  },
  {
    step: "04",
    title: "开始第一次对话",
    description:
      "明确你的需求，提供足够的上下文信息，使用清晰的指令。AI的输出质量取决于输入的质量。好的提示词应包含：角色设定、背景信息、具体任务、输出格式要求。",
    detail: "提示词质量与输出质量成正比",
  },
];

const staggerClasses = ["stagger-1", "stagger-2", "stagger-3", "stagger-4"];

export default function SetupSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="setup"
      ref={ref}
      className="py-32 px-8 lg:px-20"
      style={{ background: "#191919" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="relative">
          <span
            className="font-serif text-[8rem] font-black leading-none absolute top-0 left-0 select-none pointer-events-none"
            style={{ color: "rgba(217,119,87,0.12)" }}
          >
            01
          </span>
          <div className="relative pt-10">
            <h2
              className="font-serif text-4xl font-bold"
              style={{ color: "#F4F3EE" }}
            >
              环境配置
            </h2>
            <p
              className="text-xs uppercase mt-2"
              style={{ letterSpacing: "0.25em", color: "#B0AEA5" }}
            >
              Environment Setup
            </p>
            <p
              className="text-base mt-4 max-w-2xl"
              style={{ color: "rgba(244,243,238,0.7)" }}
            >
              快速上手Claude，从注册到第一次对话，只需四步。掌握基本配置，开启AI协作之旅。
            </p>
          </div>
        </div>

        {/* Step cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`group relative glass-card rounded-2xl p-7 overflow-hidden ${
                isVisible
                  ? `animate-fade-up ${staggerClasses[index]}`
                  : "opacity-0"
              }`}
            >
              {/* Large step number background */}
              <span
                className="text-5xl font-black font-serif select-none"
                style={{ color: "rgba(217,119,87,0.15)" }}
              >
                {item.step}
              </span>

              {/* Step badge */}
              <div className="mt-3">
                <span
                  className="rounded-full px-3 py-1 text-[11px] font-semibold inline-block"
                  style={{
                    background: "rgba(217,119,87,0.12)",
                    color: "#C15F3C",
                  }}
                >
                  Step {item.step}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold mt-4"
                style={{ color: "#F4F3EE" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mt-3"
                style={{ color: "rgba(244,243,238,0.75)" }}
              >
                {item.description}
              </p>

              {/* Detail badge */}
              <div className="mt-5">
                <span
                  className="rounded-full px-3 py-1.5 text-xs inline-block"
                  style={{
                    background: "rgba(203,154,118,0.08)",
                    border: "1px solid rgba(203,154,118,0.15)",
                    color: "#B0AEA5",
                  }}
                >
                  {item.detail}
                </span>
              </div>

              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "#D97757" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
