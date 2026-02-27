import type { CodeLine } from "./anatomyData";

export function renderCodeBlock(lines: CodeLine[]) {
  return lines.map((line, i) => (
    <div key={i} className="flex">
      <span
        className="w-8 text-right pr-4 select-none shrink-0 font-mono text-xs"
        style={{ color: "rgba(176,174,165,0.3)" }}
      >
        {i + 1}
      </span>
      <span>
        {line.map((seg, j) => (
          <span key={j} style={{ color: seg.color }}>
            {seg.text}
          </span>
        ))}
      </span>
    </div>
  ));
}
