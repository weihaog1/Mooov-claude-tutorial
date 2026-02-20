"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#191919" }}
    >
      {/* Floating gradient blobs */}
      <div
        className="pointer-events-none absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(203,154,118,0.12) 0%, transparent 70%)",
          animation: "floatGlow 12s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(217,119,87,0.08) 0%, transparent 70%)",
          animation: "floatGlow 12s ease-in-out infinite",
          animationDelay: "4s",
        }}
      />

      {/* Decorative circle - visible on lg+ */}
      <div
        className="hidden lg:block absolute w-[500px] h-[500px] rounded-full"
        style={{
          border: "1px solid rgba(203,154,118,0.1)",
          right: "-10%",
          top: "15%",
        }}
      >
        {/* Small accent dot at top of circle */}
        <div
          className="absolute w-3 h-3 rounded-full"
          style={{
            background: "#D97757",
            top: "0",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Anthropic diagram illustration - overlaps decorative circle */}
      <div
        className="hidden md:block absolute pointer-events-none -right-[8%]"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          width: "67vw",
        }}
      >
        <Image
          src="/anthropic-diagram.png"
          alt=""
          width={780}
          height={600}
          priority
          className="w-full h-auto select-none"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl w-full px-8 lg:px-20">
        {/* Title block */}
        <div className="mb-10">
          <h1
            className="font-serif font-black leading-[1.1] animate-hero-reveal"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              color: "#CB9A76",
            }}
          >
            驾驭 Claude/AI
          </h1>
          <p
            className="font-serif font-bold leading-tight mt-2 animate-hero-reveal stagger-2"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)",
              color: "rgba(203,154,118,0.6)",
            }}
          >
            场景全攻略
          </p>
        </div>

        {/* Divider line */}
        <div
          className="h-[1px] w-24 mb-6"
          style={{
            background: "linear-gradient(to right, #D97757, transparent)",
            transformOrigin: "left",
            animation: "lineGrow 0.6s ease both 0.8s",
          }}
        />

        {/* Presenter info */}
        <p
          className="text-sm tracking-[0.3em] uppercase animate-fade-up stagger-4"
          style={{ color: "#B0AEA5" }}
        >
          Presenter: Alan
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <svg
          className="w-5 h-5"
          style={{
            color: "rgba(203,154,118,0.4)",
            animation: "scrollBounce 2s ease-in-out infinite",
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

    </section>
  );
}
