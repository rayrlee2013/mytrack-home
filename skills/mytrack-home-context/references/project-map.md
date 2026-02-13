# MyTrack Home Project Map (Brand-first)

## Product Summary

- Goal: represent MyTrack as a personal brand for future product development.
- Subproduct: iTrackDaily (external link: `https://daily.mytrack.club/`).
- Routes: `/`, `/products`, `/philosophy`, `/about`, `/contact`.
- Languages: English and Chinese (`en` / `zh`).

## Core Files

- Entry: `/src/main.tsx`
- Router and locale state: `/src/App.tsx`
- Shared content model: `/src/content/siteContent.ts`
- Layout:
  - `/src/components/layout/Navbar.tsx`
  - `/src/components/layout/Footer.tsx`
- Pages:
  - `/src/pages/Home.tsx`
  - `/src/pages/Products.tsx`
  - `/src/pages/HowItWorks.tsx` (philosophy page)
  - `/src/pages/About.tsx`
  - `/src/pages/Contact.tsx`
- Style:
  - `/src/styles/global.css`

## Behavioral Notes

- Brand site is not equivalent to a subproduct site.
- iTrackDaily is linked as one subproduct under brand context.
- Locale persists in local storage (`mytrack-home-locale`).

## Risk Notes

- Contact form still posts from frontend to Discord webhook (security risk).

## Useful Commands

```bash
pnpm dev
pnpm build
pnpm preview
```
