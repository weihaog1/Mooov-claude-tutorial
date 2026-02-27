# Components

## Shared (used across all sessions)
- `Navigation.tsx` - Sticky frosted-glass nav with tutorial dropdown + section links. Accepts optional `navItems` prop.
- `Footer.tsx` - Fade-in footer with brand color
- `GradientText.tsx` - Animated gradient text using motion/react. Props: colors[], animationSpeed, direction
- `TypingEffect.tsx` - Character-by-character typing with cursor. Triggers on viewport entry.
- `useInView.ts` - IntersectionObserver hook returning `{ref, isVisible}`. Fires once (unobserves after trigger). Default threshold: 0.15.

## Session-Specific Layout
- Session-1 components live at root: HeroSection, SetupSection, IntroSection, ComparisonSection, PromptSection, AdvancedSection
- Session-2+ components live in `session-{n}/` subdirectories
- Section IDs must match the navItems passed to Navigation (e.g., "s2-part1" for session-2)

## Component Patterns
- Always add `"use client"` for components using hooks, IntersectionObserver, or event handlers
- Section structure: `<section id="..." ref={ref} className="py-32 px-8 lg:px-20" style={{background: "#191919"}}>`
- Cards use `glass-card rounded-2xl p-7` with optional hover accent bar at bottom
- Visibility gating: `className={isVisible ? "animate-fade-up stagger-N" : "opacity-0"}`
- Multiple useInView hooks per component OK (e.g., one per subsection for staggered reveals)

## Gotchas
- motion/react is the import path (not framer-motion)
- useInView fires only once per element - no re-triggering on scroll back
- Navigation IntersectionObserver uses separate rootMargin from useInView; don't confuse them
- AdvancedSection.tsx is ~500 lines - avoid this size for new components
