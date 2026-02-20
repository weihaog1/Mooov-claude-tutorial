"use client";

import { useRef, useEffect, useState } from "react";
import { comparisonData } from "@/data/comparison-table";
import { useInView } from "@/components/useInView";
import TypingEffect from "@/components/TypingEffect";

export default function ComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const { ref: headerRef, isVisible: headerVisible } = useInView(0.1);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    const panelsWrap = panelsRef.current;
    if (!section || !track || !panelsWrap) return;

    let gsapCtx: ReturnType<typeof import("gsap").gsap.context> | null = null;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const totalPanels = comparisonData.length;

        const getScrollDistance = () => {
          const distance = panelsWrap.scrollWidth - window.innerWidth;
          return Math.max(distance, window.innerWidth * 0.8);
        };

        gsapCtx = gsap.context(() => {
          gsap.to(panelsWrap, {
            x: () =>
              -Math.max(panelsWrap.scrollWidth - window.innerWidth, 0),
            ease: "none",
            scrollTrigger: {
              trigger: track,
              pin: true,
              scrub: 1,
              start: "top top",
              end: () => `+=${getScrollDistance()}`,
              snap: {
                snapTo: totalPanels > 1 ? 1 / (totalPanels - 1) : 1,
                duration: { min: 0.15, max: 0.4 },
                ease: "power1.inOut",
              },
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const index = Math.round(
                  self.progress * (totalPanels - 1)
                );
                setActiveIndex(index);
              },
            },
          });
        }, section);

        const handleResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
        };
      });
    });

    return () => {
      gsapCtx?.revert();
    };
  }, [isDesktop]);

  return (
    <section
      id="comparison"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#191919" }}
    >
      {/* Section header */}
      <div
        ref={headerRef}
        className="px-8 lg:px-20 pt-32 pb-12"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p
              className="font-serif text-[8rem] font-black leading-none select-none"
              style={{ color: "rgba(217,119,87,0.12)" }}
            >
              03
            </p>
            <h2
              className="font-serif text-4xl font-bold -mt-10"
              style={{ color: "#F4F3EE" }}
            >
              AI 模型对比
            </h2>
            <p
              className="text-xs uppercase mt-2"
              style={{ letterSpacing: "0.25em", color: "#B0AEA5" }}
            >
              Model Comparison
            </p>
            <p
              className="text-base mt-4 max-w-xl"
              style={{ color: "rgba(244,243,238,0.7)" }}
            >
              不同任务适合不同的AI工具。选择场景查看最佳实践和提示词参考。
            </p>
          </div>
        </div>
      </div>

      {/* Desktop: horizontal scroll */}
      {isDesktop ? (
        <div ref={trackRef} className="relative min-h-screen overflow-hidden">
          <div
            ref={panelsRef}
            className="flex h-screen"
            style={{ width: `${comparisonData.length * 100}vw` }}
          >
            {comparisonData.map((item, i) => (
              <ComparisonPanel key={item.categoryEn} item={item} index={i} />
            ))}
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {comparisonData.map((item, i) => (
              <div
                key={item.categoryEn}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? 30 : 8,
                  height: 8,
                  background:
                    i === activeIndex
                      ? item.accentColor
                      : "rgba(176,174,165,0.35)",
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        /* Mobile: stacked cards */
        <div className="px-8 pb-32">
          <div className="max-w-6xl mx-auto space-y-6">
            {comparisonData.map((item, i) => (
              <MobileComparisonCard key={item.categoryEn} item={item} index={i} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function ComparisonPanel({
  item,
  index,
}: {
  item: (typeof comparisonData)[number];
  index: number;
}) {
  const padIndex = String(index + 1).padStart(2, "0");

  return (
    <article className="flex h-full w-screen shrink-0 items-center px-8 lg:px-20">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Left column */}
        <div className="flex flex-col justify-center gap-4">
          <p
            className="font-serif text-[5rem] font-black leading-none select-none"
            style={{ color: `${item.accentColor}4D` }}
          >
            {padIndex}
          </p>
          <h3
            className="font-serif text-[2rem] font-bold -mt-4"
            style={{ color: "#F4F3EE" }}
          >
            {item.category}
          </h3>
          <p
            className="text-xs uppercase"
            style={{
              letterSpacing: "0.2em",
              color: "rgba(244,243,238,0.5)",
            }}
          >
            {item.categoryEn}
          </p>

          {/* Recommended model badge */}
          <div className="mt-2">
            <span
              className="rounded-full px-4 py-2 text-sm font-bold inline-block"
              style={{
                backgroundColor: `${item.accentColor}30`,
                border: `1px solid ${item.accentColor}55`,
                color: item.accentColor,
              }}
            >
              Recommended: {item.recommendedModel}
            </span>
          </div>

          <p
            className="text-sm leading-relaxed max-w-xl"
            style={{ color: "rgba(244,243,238,0.75)" }}
          >
            {item.description}
          </p>

          {/* Use cases badge */}
          <div className="flex flex-wrap gap-2 mt-1">
            <span
              className="rounded-full px-3 py-1.5 text-xs font-semibold"
              style={{
                backgroundColor: `${item.accentColor}14`,
                border: `1px solid ${item.accentColor}33`,
                color: "rgba(244,243,238,0.8)",
              }}
            >
              {item.useCases}
            </span>
          </div>
        </div>

        {/* Right column - prompt boxes */}
        <div className="flex flex-col justify-center gap-6">
          {/* English prompt box */}
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="h-2.5 w-2.5 rounded-full inline-block"
                style={{ backgroundColor: "#6A9BCC" }}
              />
              <span
                className="text-xs uppercase font-medium"
                style={{
                  letterSpacing: "0.18em",
                  color: "#6A9BCC",
                }}
              >
                ENGLISH PROMPT
              </span>
            </div>
            <TypingEffect
              text={item.promptEn}
              speed={20}
              className="text-sm leading-relaxed"
              style={{ color: "rgba(244,243,238,0.8)" }}
            />
          </div>

          {/* Chinese prompt box */}
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="h-2.5 w-2.5 rounded-full inline-block"
                style={{ backgroundColor: "#D97757" }}
              />
              <span
                className="text-xs uppercase font-medium"
                style={{
                  letterSpacing: "0.18em",
                  color: "#D97757",
                }}
              >
                中文提示词
              </span>
            </div>
            <TypingEffect
              text={item.promptZh}
              speed={20}
              className="text-sm leading-relaxed"
              style={{ color: "rgba(244,243,238,0.8)" }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function MobileComparisonCard({
  item,
  index,
}: {
  item: (typeof comparisonData)[number];
  index: number;
}) {
  const padIndex = String(index + 1).padStart(2, "0");
  const { ref, isVisible } = useInView(0.1);

  return (
    <article
      ref={ref}
      className={`glass-card rounded-2xl p-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p
            className="font-serif text-3xl font-black leading-none"
            style={{ color: `${item.accentColor}AA` }}
          >
            {padIndex}
          </p>
          <h3
            className="mt-2 text-xl font-bold"
            style={{ color: "#F4F3EE" }}
          >
            {item.category}
          </h3>
          <p
            className="text-xs uppercase tracking-[0.14em]"
            style={{ color: "rgba(244,243,238,0.5)" }}
          >
            {item.categoryEn}
          </p>
        </div>
        <span
          className="inline-flex rounded-full px-3 py-1.5 text-[11px] font-bold"
          style={{
            background: `${item.accentColor}30`,
            border: `1px solid ${item.accentColor}55`,
            color: item.accentColor,
          }}
        >
          {item.recommendedModel}
        </span>
      </div>

      <p
        className="mt-3 text-sm leading-relaxed"
        style={{ color: "rgba(244,243,238,0.75)" }}
      >
        {item.description}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-3">
        <div
          className="rounded-xl p-3"
          style={{
            background: "rgba(38,38,36,0.6)",
            border: "1px solid rgba(203,154,118,0.08)",
          }}
        >
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: "#6A9BCC" }}
          >
            English Prompt
          </p>
          <TypingEffect
            text={item.promptEn}
            speed={15}
            className="mt-2 text-xs leading-relaxed"
            style={{ color: "rgba(244,243,238,0.8)" }}
          />
        </div>
        <div
          className="rounded-xl p-3"
          style={{
            background: "rgba(38,38,36,0.6)",
            border: "1px solid rgba(203,154,118,0.08)",
          }}
        >
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: "#D97757" }}
          >
            中文提示词
          </p>
          <TypingEffect
            text={item.promptZh}
            speed={15}
            className="mt-2 text-xs leading-relaxed"
            style={{ color: "rgba(244,243,238,0.8)" }}
          />
        </div>
      </div>
    </article>
  );
}
