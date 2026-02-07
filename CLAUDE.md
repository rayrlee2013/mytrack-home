# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MyTrack Home - Static site for GitHub Pages deployment, showcasing MyTrack products and features.

**Tech Stack:** React 19 + TypeScript + Vite + React Router + Tailwind CSS 4 + Radix UI + Lucide React + Sass

## Development Commands

```bash
pnpm install     # Install dependencies
pnpm dev         # Start development server
pnpm build       # Build for production (outputs to dist/)
pnpm preview     # Preview production build locally
pnpm deploy      # Deploy to GitHub Pages via gh-pages
```

## Architecture

### Directory Structure

```
src/
├── main.tsx           # App entry, wraps with LanguageProvider
├── App.tsx            # Root component, defines routes
├── pages/
│   └── Home.tsx       # Home page composing sections
├── components/
│   ├── ui/            # Base UI components (Button, Card, Badge, etc.)
│   ├── layout/        # Layout components (Navbar, Footer, Section)
│   ├── sections/      # Page sections (Hero, Features, Products, Blog, About)
│   ├── SEOHead.tsx    # SEO meta tags
│   └── JsonLd.tsx     # Structured data for SEO
├── hooks/             # Custom hooks (useScrollSpy, useScrollReveal)
├── lib/               # Utilities (cn.ts, content.ts, markdown.ts)
├── i18n/              # Internationalization (context, types, en.ts, zh.ts)
├── types/             # TypeScript types (content.ts)
└── styles/            # Global styles (Tailwind CSS)
content/               # Markdown content organized by locale and category
```

### Key Patterns

- **Content-driven:** Content is stored as Markdown files in `content/{locale}/{category}/` (e.g., `content/en/products/`, `content/zh/features/`). Use `src/lib/content.ts` to load and parse content with frontmatter.
- **i18n:** Two locales (en, zh). Use `useLanguage()` hook to access current locale and translations. Content files must exist for both locales.
- **@/ alias:** Points to `src/`, configured in `tsconfig.json` and `vite.config.ts`.
- **Tailwind CSS 4:** Uses `@tailwindcss/postcss`, configured via CSS imports (no separate config file).
- **TypeScript strict:** `noUnusedLocals` and `noUnusedParameters` are enabled.

## Deployment

- **GitHub Pages:** Built output in `dist/` deployed via `gh-pages` package
- **SPA fallback:** `dist/404.html` serves as 404 fallback for SPA routing
- **Static assets:** `public/` files copied to dist root during build
