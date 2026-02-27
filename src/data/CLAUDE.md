# Data Directory

## Convention
- One file per data concept, named with kebab-case
- Always export TypeScript interface first, then the data array
- All data is static (hardcoded), no dynamic fetching

## Files
- `tutorials.ts` - Session registry for Navigation dropdown. Add new sessions here with {id, date, title, path}.
- `sections.ts` - Section metadata with bilingual titles and subsection lists
- `advanced-features.ts` - Feature cards with groups, accent colors, availability badges
- `case-studies.ts` - Case study cards with optional image, link, stats
- `comparison-table.ts` - AI model comparison data
- `prompt-techniques.ts` - Prompt engineering technique cards with examples

## Patterns
- Bilingual fields: `title` (Chinese) + `titleEn` (English) when both needed
- Accent colors stored per-item for flexible card styling
- Markdown-like bold (`**text**`) parsed manually in some components - not a universal pattern
- Some inline data lives in components (e.g., YouTube URLs in AdvancedSection) rather than here
