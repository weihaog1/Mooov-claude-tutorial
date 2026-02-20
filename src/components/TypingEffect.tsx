"use client";

import { useEffect, useRef, useState } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: "p" | "span" | "div";
}

export default function TypingEffect({
  text,
  speed = 25,
  className,
  style,
  as: Tag = "p",
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    setDisplayedText("");

    const typeNext = () => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        timeoutId = setTimeout(typeNext, speed + Math.random() * 15 - 7);
      }
    };

    timeoutId = setTimeout(typeNext, speed);

    return () => clearTimeout(timeoutId);
  }, [hasStarted, text, speed]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLParagraphElement>}
      className={className}
      style={{ ...style, minHeight: hasStarted ? undefined : "1em" }}
    >
      {hasStarted ? displayedText : ""}
      {hasStarted && displayedText.length < text.length && (
        <span
          className="inline-block w-[2px] h-[1em] ml-[1px] align-text-bottom animate-pulse"
          style={{ backgroundColor: "rgba(244,243,238,0.5)" }}
        />
      )}
    </Tag>
  );
}
