"use client";

import Image from "next/image";
import { caseStudies } from "@/data/case-studies";
import { useInView } from "@/components/useInView";

const staggerClasses = [
  "stagger-1",
  "stagger-2",
  "stagger-3",
  "stagger-4",
];

export default function CasesSection() {
  const { ref, isVisible } = useInView(0.1);

  const mooovCases = caseStudies.filter((c) => c.category === "Mooov \u5B9E\u8DF5");

  return (
    <section
      id="cases"
      ref={ref}
      className="py-32 px-8 lg:px-20"
      style={{ backgroundColor: "#191919" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="font-serif text-[8rem] font-black leading-none select-none"
            style={{ color: "rgba(193,95,60,0.12)" }}
          >
            06
          </p>
          <h2
            className="font-serif text-4xl font-bold -mt-10"
            style={{ color: "#F4F3EE" }}
          >
            实战案例
          </h2>
          <p
            className="text-xs uppercase mt-2"
            style={{ letterSpacing: "0.25em", color: "#B0AEA5" }}
          >
            Case Studies
          </p>
          <p
            className="text-base mt-4 max-w-2xl"
            style={{ color: "rgba(244,243,238,0.7)" }}
          >
            从Mooov团队的实际经验到行业最佳实践，看AI如何在真实场景中创造价值。数据来自真实项目和公开行业报告。
          </p>
        </div>

        {/* Mooov practices subsection */}
        <div className="mt-16">
          <p
            className={`text-xs uppercase transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              letterSpacing: "0.2em",
              color: "rgba(244,243,238,0.5)",
            }}
          >
            Mooov 实践
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            {mooovCases.map((study, index) => (
              <div
                key={study.id}
                className={`glass-card rounded-2xl p-6 group relative overflow-hidden ${
                  isVisible
                    ? `animate-fade-up ${staggerClasses[index]}`
                    : "opacity-0"
                }`}
              >
                {/* Mooov badge */}
                <span
                  className="absolute right-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-semibold"
                  style={{
                    backgroundColor: `${study.accentColor}26`,
                    color: study.accentColor,
                  }}
                >
                  Mooov
                </span>

                {/* Title */}
                <h3
                  className="text-lg font-bold pr-14"
                  style={{ color: "#F4F3EE" }}
                >
                  {study.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mt-3"
                  style={{ color: "rgba(244,243,238,0.75)" }}
                >
                  {study.description}
                </p>

                {/* Extended description */}
                {study.extendedDescription && (
                  <p
                    className="text-sm leading-relaxed mt-3"
                    style={{ color: "rgba(244,243,238,0.75)" }}
                  >
                    {study.extendedDescription}
                  </p>
                )}

                {/* Screenshot */}
                {study.image && (
                  <div
                    className="mt-4 rounded-xl overflow-hidden"
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

                {/* External link */}
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

                {/* Stats */}
                {study.stats && study.stats.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
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

                {/* Bottom hover bar */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: study.accentColor }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
