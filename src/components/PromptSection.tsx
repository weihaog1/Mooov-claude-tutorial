"use client";

import { promptTechniques } from "@/data/prompt-techniques";
import { useInView } from "@/components/useInView";
import TypingEffect from "@/components/TypingEffect";

const staggerClasses = ["stagger-1", "stagger-2", "stagger-3", "stagger-4"];

const chatUserMessage =
  "你是一位拥有15年经验的高级产品经理。我们公司准备发布一款面向中小企业的SaaS协作工具。请分析我们的产品上市策略，并给出3条关键建议。要求：每条建议包含具体行动项和预期效果。";

const chatAiMessage = `作为产品经理，我从三个核心维度分析你们的上市策略：\n1. 精准定位差异化 - 聚焦"中小企业专属"这个关键标签，避免与大厂通用产品正面竞争。行动项：梳理3-5个目标行业的痛点场景，为每个场景设计定制化的产品演示。预期效果：转化率提升30-50%，因为用户能直接看到与自身业务相关的价值。\n2. 种子用户冷启动 - 在产品正式发布前，招募50-100家种子企业进行Beta测试。行动项：通过行业社群和KOL合作获取首批用户，提供3个月免费+专属顾问服务。预期效果：获得真实使用反馈，同时培养第一批口碑传播者。\n3. 建立反馈闭环 - 将用户反馈系统化，形成"收集-分析-迭代-验证"的持续优化循环。行动项：设置产品内反馈入口，每周生成用户行为分析报告，双周迭代发版。预期效果：用户留存率提升20%，NPS评分持续改善。`;

function TechniqueIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "mask":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="9" cy="10" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="15" cy="10" r="1.2" fill="currentColor" stroke="none" />
          <path d="M8 14.5c1 1.5 2.5 2 4 2s3-0.5 4-2" />
        </svg>
      );
    case "layout":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="12" y1="9" x2="12" y2="21" />
        </svg>
      );
    case "chain":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "examples":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <circle cx="4" cy="6" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="4" cy="12" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="4" cy="18" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}

export default function PromptSection() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="prompts"
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
            04
          </span>
          <div className="relative pt-10">
            <h2
              className="font-serif text-4xl font-bold"
              style={{ color: "#F4F3EE" }}
            >
              提示词技巧
            </h2>
            <p
              className="text-xs uppercase mt-2"
              style={{ letterSpacing: "0.25em", color: "#B0AEA5" }}
            >
              Prompt Engineering
            </p>
            <p
              className="text-base mt-4 max-w-2xl"
              style={{ color: "rgba(244,243,238,0.7)" }}
            >
              掌握提示词工程的核心技巧，让AI输出质量提升十倍。好的提示词是AI协作的基础。研究表明，结构化的中文提示词有效率高达92.3%。
            </p>
          </div>
        </div>

        {/* Chat example */}
        <div className="mt-16">
          <p
            className="text-xs uppercase mb-6"
            style={{
              letterSpacing: "0.2em",
              color: "rgba(244,243,238,0.5)",
            }}
          >
            角色扮演示例
          </p>

          {/* User message - right aligned */}
          <div className="flex justify-end">
            <div
              className="max-w-2xl rounded-2xl rounded-br-md px-6 py-4"
              style={{
                background: "rgba(203,154,118,0.15)",
                border: "1px solid rgba(203,154,118,0.2)",
              }}
            >
              <TypingEffect
                text={chatUserMessage}
                speed={20}
                className="text-sm"
                style={{ color: "rgba(244,243,238,0.9)" }}
              />
            </div>
          </div>

          {/* AI response - left aligned */}
          <div className="flex justify-start mt-5">
            <div
              className="max-w-2xl rounded-2xl rounded-tl-md px-6 py-4"
              style={{
                background: "rgba(38,38,36,0.8)",
                border: "1px solid rgba(203,154,118,0.1)",
              }}
            >
              <TypingEffect
                text={chatAiMessage}
                speed={15}
                className="text-sm whitespace-pre-line"
                style={{ color: "rgba(244,243,238,0.85)" }}
              />
            </div>
          </div>
        </div>

        {/* Technique cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {promptTechniques.map((technique, index) => (
            <div
              key={technique.id}
              className={`group relative glass-card rounded-2xl p-7 overflow-hidden ${
                isVisible
                  ? `animate-fade-up ${staggerClasses[index]}`
                  : "opacity-0"
              }`}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(217,119,87,0.12)",
                  color: "#D97757",
                }}
              >
                <TechniqueIcon icon={technique.icon} />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold mt-4"
                style={{ color: "#F4F3EE" }}
              >
                {technique.title}
              </h3>
              <p
                className="text-xs mt-0.5"
                style={{ color: "rgba(244,243,238,0.5)" }}
              >
                {technique.titleEn}
              </p>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mt-4"
                style={{ color: "rgba(244,243,238,0.75)" }}
              >
                {technique.description}
              </p>

              {/* Example code block */}
              <div
                className="mt-5 rounded-xl p-4"
                style={{
                  background: "rgba(25,25,25,0.6)",
                  border: "1px solid rgba(203,154,118,0.08)",
                }}
              >
                <TypingEffect
                  text={technique.example}
                  speed={15}
                  className="whitespace-pre-wrap font-mono text-xs leading-relaxed"
                  style={{ color: "rgba(244,243,238,0.65)" }}
                />
              </div>

              {/* Bottom hover bar */}
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
