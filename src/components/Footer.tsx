"use client";

import { useInView } from "@/components/useInView";

export default function Footer() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <footer
      ref={ref}
      className="min-h-[40vh] flex items-center justify-center text-center px-8 lg:px-20"
      style={{
        background: "linear-gradient(to bottom, #191919, #141210)",
      }}
    >
      <p
        className={`font-serif text-5xl font-bold transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ color: "#CB9A76" }}
      >
        End.
      </p>
    </footer>
  );
}
