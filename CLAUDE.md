# Mooov AI Tutorial Website

A long-running, weekly AI tutorial site by the Mooov team. Each week a new session is added covering a different AI topic (Claude, agentic skills, workflows, etc.). The site grows over time - sessions are never removed, only added.

## Adding a New Session
1. Create a folder in `contents-by-session/` with the date (e.g., `3-5/`) and drop in the agenda/materials
2. Create `src/components/session-{n}/` with section components following existing design patterns
3. Create `src/app/session-{n}/page.tsx` composing Navigation (with custom navItems), sections, and Footer
4. Add an entry to `src/data/tutorials.ts` with id, date, title, and path
5. The Navigation dropdown and routing pick up the new session automatically

## Commands
- `npm run dev` - Start dev server (Next.js 16 + Turbopack)
- `npm run build` - Production build
- `npm run lint` - ESLint

## Architecture
- Next.js 16.1.6 with App Router, React 19, TypeScript 5
- Tailwind CSS 4 (via @tailwindcss/postcss)
- Animation: motion/react (Framer Motion v3), gsap
- Path alias: `@/*` maps to `./src/*`
- Bilingual: Chinese primary (zh-CN), English labels/subtitles

## Multi-Session Structure
- Each tutorial session is a separate route: `/` (session-1), `/session-2`, etc.
- Session registry: `src/data/tutorials.ts` - add entries here for new sessions
- Session-1 components live in `src/components/`, session-2+ in `src/components/session-{n}/`
- Navigation accepts optional `navItems` prop; defaults to session-1 items
- Section IDs must match navItem IDs for anchor linking to work

## Design System
- Background: `#191919`, Cards: glass-card class (semi-transparent + blur)
- Accent colors: `#CB9A76` (gold), `#D97757` (orange), `#C15F3C` (crail), `#6A9BCC` (blue), `#788C5D` (green)
- Text: `#F4F3EE` (primary), `#B0AEA5` (secondary)
- Fonts: Playfair Display / Noto Serif SC (headings), Outfit / Noto Sans SC (body), Fira Code (mono)
- Section pattern: large ghost number + serif title + English subtitle + description

## Animation Pattern
- All section animations use `useInView` hook (one-time trigger on scroll)
- Conditional classes: `isVisible ? "animate-fade-up stagger-2" : "opacity-0"`
- Available: animate-fade-up, animate-slide-left, animate-slide-right, animate-scale-in
- Stagger delays: stagger-1 through stagger-8 (100ms intervals)
- All animated components must be `"use client"`

## Internationalization (i18n)
- Session-2 supports EN/ZH toggle via `LanguageContext` (`src/contexts/LanguageContext.tsx`)
- Translation files live in `src/components/session-2/i18n/` (one file per section)
- Each translation file exports `{ en: {...}, zh: {...} } as const`
- Components use `useLanguage()` hook to get current `lang` and select translations
- Navigation accepts `showLanguageToggle` prop to render the EN/ZH toggle
- All content changes to session-2 must also be applied to the Chinese translations in the i18n files
- Technical terms (MCP, YAML, API, Claude, SKILL.md, frontmatter, skill, SDK) stay English in Chinese text

## Key Conventions
- Never use emojis in code, comments, or commits
- Keep components under 300 lines; extract helpers as needed
- Data belongs in `src/data/` with TypeScript interfaces exported first
- Shared components (Navigation, Footer, GradientText, TypingEffect, useInView) are reused across sessions
