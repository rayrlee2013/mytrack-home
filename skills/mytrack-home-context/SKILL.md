---
name: mytrack-home-context
description: Analyze and implement changes in the MyTrack Home repository (React + Vite brand site). Use when tasks involve MyTrack brand messaging, brand-to-subproduct information architecture, iTrackDaily entry positioning, bilingual copy, routing, visual style, or product philosophy documentation.
---

# MyTrack Home Context

Use this skill to work consistently in the `mytrack-home` project.

## Workflow

1. Read `/docs/product-overview.md` for brand positioning.
2. Read `/skills/mytrack-home-context/references/project-map.md` for file map.
3. Keep route behavior in `/src/App.tsx`.
4. Keep copy and product semantics in `/src/content/siteContent.ts`.
5. Treat MyTrack as brand layer and iTrackDaily as subproduct entry.
6. Run `pnpm build` after non-trivial edits.

## Conventions

- Maintain `en | zh` parity for copy updates.
- Preserve `@/` alias imports for `src/*`.
- Keep mobile and desktop navigation semantics aligned.
- For new products, expand `/products` before adding dedicated deep pages.

## Output Expectations

- List changed files.
- Explain brand-level impact and user-visible behavior changes.
- Flag security/deployment concerns when relevant.
