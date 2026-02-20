"use client";

import Image from "next/image";
import { advancedFeatures } from "@/data/advanced-features";
import { caseStudies } from "@/data/case-studies";
import { useInView } from "@/components/useInView";

const youtubeVideos: Record<string, { url: string; title: string }[]> = {
  "claude-code": [
    {
      url: "https://www.youtube.com/embed/6eBSHbLKuN0",
      title: "Mastering Claude Code in 30 minutes",
    },
  ],
  cowork: [
    {
      url: "https://www.youtube.com/embed/UAmKyyZ-b9E",
      title: "Claude Cowork Demo",
    },
  ],
  integration: [
    {
      url: "https://www.youtube.com/embed/gxL6-rg3SoY",
      title: "Claude in PowerPoint",
    },
    {
      url: "https://www.youtube.com/embed/54BdUqMQUMI",
      title: "Claude in Excel",
    },
  ],
  agent: [
    {
      url: "https://www.youtube.com/embed/oDks2gVHu4k",
      title: "Building Blocks for Tomorrow's AI Agents",
    },
  ],
  workflow: [
    {
      url: "https://www.youtube.com/embed/8gTpgWru0Wg",
      title: "Building AI agents with Claude in Amazon Bedrock",
    },
  ],
};

function AgentVisual({ accentColor }: { accentColor: string }) {
  const nodes = [
    { label: "Coordinator", cx: 160, cy: 50, color: accentColor },
    { label: "Research Agent", cx: 280, cy: 140, color: "#6A9BCC" },
    { label: "Data Agent", cx: 50, cy: 140, color: "#CB9A76" },
    { label: "Writer Agent", cx: 240, cy: 270, color: "#D97757" },
    { label: "Review Agent", cx: 80, cy: 270, color: "#C15F3C" },
  ];

  const lines = [
    // Coordinator to all
    { x1: 160, y1: 50, x2: 280, y2: 140, opacity: 0.5 },
    { x1: 160, y1: 50, x2: 50, y2: 140, opacity: 0.5 },
    { x1: 160, y1: 50, x2: 240, y2: 270, opacity: 0.3 },
    { x1: 160, y1: 50, x2: 80, y2: 270, opacity: 0.4 },
    // Data Agent connections
    { x1: 50, y1: 140, x2: 80, y2: 270, opacity: 0.3 },
    { x1: 50, y1: 140, x2: 280, y2: 140, opacity: 0.3 },
    // Research to Writer/Review
    { x1: 280, y1: 140, x2: 240, y2: 270, opacity: 0.3 },
    // Writer to Review
    { x1: 240, y1: 270, x2: 80, y2: 270, opacity: 0.3 },
  ];

  return (
    <div className="flex items-center justify-center">
      <svg viewBox="0 0 320 320" className="w-full max-w-[320px]">
        {lines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={accentColor}
            strokeWidth="1"
            opacity={line.opacity}
          />
        ))}
        {nodes.map((node) => (
          <g key={node.label}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r="28"
              fill={node.color}
              opacity="0.1"
            />
            <circle cx={node.cx} cy={node.cy} r="12" fill={node.color} />
            <text
              x={node.cx}
              y={node.cy + 44}
              textAnchor="middle"
              fill="rgba(244,243,238,0.6)"
              fontSize="10"
              fontFamily="sans-serif"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function YouTubeEmbed({ featureId }: { featureId: string }) {
  const videos = youtubeVideos[featureId];
  if (!videos || videos.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {videos.map((video, i) => (
        <div
          key={i}
          className="glass-card rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(203,154,118,0.15)" }}
        >
          <div className="aspect-video">
            <iframe
              src={video.url}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="px-4 py-3">
            <p
              className="text-xs"
              style={{ color: "rgba(244,243,238,0.5)" }}
            >
              {video.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeatureVisual({
  featureId,
  accentColor,
}: {
  featureId: string;
  accentColor: string;
}) {
  if (featureId === "agent") {
    return (
      <div className="flex flex-col gap-6">
        <AgentVisual accentColor={accentColor} />
        <YouTubeEmbed featureId={featureId} />
      </div>
    );
  }
  return <YouTubeEmbed featureId={featureId} />;
}

export default function AdvancedSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useInView(0.05);

  return (
    <section
      id="advanced"
      ref={sectionRef}
      className="py-32 px-8 lg:px-20"
      style={{ backgroundColor: "#191919" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`transition-all duration-700 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="font-serif text-[8rem] font-black leading-none select-none"
            style={{ color: "rgba(120,140,93,0.12)" }}
          >
            05
          </p>
          <h2
            className="font-serif text-4xl font-bold -mt-10"
            style={{ color: "#F4F3EE" }}
          >
            高阶功能
          </h2>
          <p
            className="text-xs uppercase mt-2"
            style={{ letterSpacing: "0.25em", color: "#B0AEA5" }}
          >
            Advanced Features
          </p>
          <p
            className="text-base mt-4 max-w-2xl"
            style={{ color: "rgba(244,243,238,0.7)" }}
          >
            从基础对话到工程级应用。探索Claude的高阶能力，解锁企业级AI工作流。Claude不只是聊天工具，更是一个完整的AI协作平台。
          </p>
        </div>

        {/* Features list */}
        <div className="mt-16 space-y-24">
          {advancedFeatures.map((feature, index) => (
            <FeatureBlock key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({
  feature,
  index,
}: {
  feature: (typeof advancedFeatures)[number];
  index: number;
}) {
  const { ref, isVisible } = useInView(0.1);
  const isEven = index % 2 === 0;

  const contentAnimation = isEven ? "animate-slide-left" : "animate-slide-right";
  const visualAnimation = isEven ? "animate-slide-right" : "animate-slide-left";

  const contentColumn = (
    <div
      className={`${
        isVisible ? `${contentAnimation} stagger-1` : "opacity-0"
      }`}
    >
      {/* Dot indicator */}
      <div className="flex items-center gap-3">
        <span
          className="h-3 w-3 rounded-full inline-block"
          style={{ backgroundColor: feature.accentColor }}
        />
        <span
          className="text-xs uppercase"
          style={{
            letterSpacing: "0.2em",
            color: "rgba(244,243,238,0.5)",
          }}
        >
          {feature.titleEn}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-serif text-2xl font-bold mt-3"
        style={{ color: "#F4F3EE" }}
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mt-4"
        style={{ color: "rgba(244,243,238,0.75)" }}
      >
        {feature.description}
      </p>

      {/* Groups */}
      {feature.groups.map((group) => (
        <div key={group.title} className="glass-card rounded-2xl p-5 mt-4">
          <p
            className="text-sm font-bold"
            style={{ color: feature.accentColor }}
          >
            {group.title}
          </p>
          <ul className="mt-3 space-y-2">
            {group.bullets.map((bullet, bi) => (
              <li key={bi} className="flex gap-2">
                <span
                  className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 inline-block"
                  style={{ backgroundColor: feature.accentColor }}
                />
                <span
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(244,243,238,0.75)" }}
                >
                  {bullet.startsWith("**") && bullet.endsWith("**") ? (
                    <strong style={{ color: "#F4F3EE" }}>
                      {bullet.slice(2, -2)}
                    </strong>
                  ) : (
                    bullet
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Availability badges */}
      {feature.availability && feature.availability.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-5">
          {feature.availability.map((a) => (
            <span
              key={a.platform}
              className="rounded-full px-3 py-1.5 text-xs"
              style={{
                border: `1px solid ${feature.accentColor}44`,
                color: "rgba(244,243,238,0.7)",
              }}
            >
              {a.platform}: {a.status}
            </span>
          ))}
        </div>
      )}

      {/* Requirement */}
      {feature.requirement && (
        <p
          className="text-xs mt-3"
          style={{ color: "rgba(244,243,238,0.55)" }}
        >
          {feature.requirement}
        </p>
      )}
    </div>
  );

  const visualColumn = (
    <div
      className={`flex items-start justify-center ${
        isVisible ? `${visualAnimation} stagger-3` : "opacity-0"
      }`}
    >
      <div className="w-full max-w-sm">
        <FeatureVisual
          featureId={feature.id}
          accentColor={feature.accentColor}
        />
      </div>
    </div>
  );

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {isEven ? (
          <>
            {contentColumn}
            {visualColumn}
          </>
        ) : (
          <>
            {visualColumn}
            {contentColumn}
          </>
        )}
      </div>

      {/* Case studies - full width under claude-code feature */}
      {feature.id === "claude-code" && (
        <div className={`mt-10 ${isVisible ? "animate-fade-up stagger-4" : "opacity-0"}`}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "rgba(244,243,238,0.5)" }}
          >
            实际案例 / Case Studies
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="glass-card rounded-2xl p-5 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 h-[2px] w-full"
                  style={{ background: study.accentColor }}
                />
                <h4
                  className="text-base font-bold mb-2"
                  style={{ color: "#F4F3EE" }}
                >
                  {study.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(244,243,238,0.75)" }}
                >
                  {study.description}
                </p>
                {study.extendedDescription && (
                  <p
                    className="text-sm leading-relaxed mt-2"
                    style={{ color: "rgba(244,243,238,0.75)" }}
                  >
                    {study.extendedDescription}
                  </p>
                )}
                {study.image && (
                  <div
                    className="mt-3 rounded-xl overflow-hidden"
                    style={{ border: "1px solid rgba(203,154,118,0.15)" }}
                  >
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                )}
                {study.link && (
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold mt-3 transition-opacity hover:opacity-80"
                    style={{ color: study.accentColor }}
                  >
                    <span>View Live</span>
                    <svg
                      className="w-3.5 h-3.5"
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
                )}
                {study.stats && study.stats.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {study.stats.map((stat) => (
                      <span
                        key={stat.label}
                        className="rounded-full px-3 py-1.5"
                        style={{
                          border: `1px solid ${study.accentColor}4D`,
                          backgroundColor: `${study.accentColor}14`,
                        }}
                      >
                        <span
                          className="text-[11px] font-semibold"
                          style={{ color: study.accentColor }}
                        >
                          {stat.label}{" "}
                        </span>
                        <span
                          className="text-[11px] font-semibold"
                          style={{ color: "#F4F3EE" }}
                        >
                          {stat.value}
                        </span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
