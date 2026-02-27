# Session-3: Advanced Prompt Engineering - Design Doc

**Date:** 2026-02-26
**Session Date:** Mar 5
**Route:** `/session-3`
**Component Prefix:** S3
**i18n:** Full EN/ZH

## Overview

Session-3 teaches advanced prompt engineering techniques, building on the basics covered in session-1 (role playing, structured prompts, CoT, few-shot). Each section focuses on one technique in depth with theory, examples, and before/after comparisons.

## Section Breakdown

### Hero - S3HeroSection
- Session badge: "Session 03"
- Title: three lines with GradientText on the middle line
  - EN: "Advanced" / "Prompt" / "Engineering"
  - ZH: "进阶" / "Prompt" / "Engineering"
- Subtitle via TextGenerateEffect (use key={lang} for re-mount)
- Right side: floating glass card showing a prompt example (similar to S2's SKILL.md preview)
- BackgroundBeams background, floating gradient blobs

### 01 - System Prompts (s3-system-prompts) - S3SystemPromptsSection
- **Subsection A:** What system prompts are and why they matter
  - Left-accent glass card with definition
  - 4 top-accent cards for components: Persona, Behavioral Constraints, Formatting Directives, Guardrails
- **Subsection B:** Before/After comparison
  - Without/With comparison grid (crail for without, green for with)
  - Code block card showing a production system prompt example

### 02 - Prompt Chaining (s3-chaining) - S3ChainingSection
- **Subsection A:** Concept introduction
  - Definition card explaining the pipeline pattern
- **Subsection B:** Chain example
  - Step-by-step numbered cards showing a 4-step chain: Research -> Outline -> Draft -> Review
  - Each card shows the input and output of that step
- **Subsection C:** When to chain vs. single prompt
  - 2-column comparison: single prompt vs. chained approach

### 03 - Context Engineering (s3-context) - S3ContextSection
- **Subsection A:** Context as a strategic resource
  - Definition card about context window strategy
- **Subsection B:** What to include and how to structure
  - Glass cards for: relevant code, examples, reference docs, XML tag structuring
  - Code block showing XML-tagged context example
- **Subsection C:** Good vs. Bad context comparison
  - Good/bad comparison grid (green for good, crail for bad)

### 04 - Evaluation & Iteration (s3-evaluation) - S3EvaluationSection
- **Subsection A:** Common failure modes
  - Cards for each failure mode: hallucination, format drift, wrong scope, surface-level answers
- **Subsection B:** Diagnostic workflow
  - Step-by-step numbered cards for the iteration cycle
- **Subsection C:** Building rubrics
  - Pre-flight checklist pattern showing what to evaluate

### 05 - Advanced Patterns (s3-patterns) - S3PatternsSection
- 4 pattern cards with top-accent styling:
  - Meta-prompting (prompts that write prompts)
  - Self-reflection (review and critique)
  - Constrained generation (JSON, specific formats)
  - Temperature and parameter guidance
- Each card has a code example in a code block card

### 06 - Toolkit (s3-toolkit) - S3ToolkitSection
- Quick-reference grid: compact cards summarizing all 6 techniques
- 3-4 ready-to-use prompt templates in code block cards
- Gradient border CTA for engagement / next steps

## File Structure

```
src/components/session-3/
  S3HeroSection.tsx
  S3SystemPromptsSection.tsx
  S3ChainingSection.tsx
  S3ContextSection.tsx
  S3EvaluationSection.tsx
  S3PatternsSection.tsx
  S3ToolkitSection.tsx
  i18n/
    hero.ts
    systemprompts.ts
    chaining.ts
    context.ts
    evaluation.ts
    patterns.ts
    toolkit.ts
src/app/session-3/page.tsx
```

## Nav Items

```typescript
const navItems = [
  { id: "s3-system-prompts", label: "System Prompts", num: "01" },
  { id: "s3-chaining", label: "Chaining", num: "02" },
  { id: "s3-context", label: "Context", num: "03" },
  { id: "s3-evaluation", label: "Evaluation", num: "04" },
  { id: "s3-patterns", label: "Patterns", num: "05" },
  { id: "s3-toolkit", label: "Toolkit", num: "06" },
];
```

## tutorials.ts Entry

```typescript
{
  id: "session-3",
  date: "Mar 5",
  title: "Prompt Engineering",
  path: "/session-3",
}
```
