# Dmitry Marakulin — Portfolio

Personal portfolio site built with React + TypeScript + Vite. Presents two
resume tracks — Systems Analyst and Full-Stack Developer — behind a single
switcher, with a light/dark theme toggle.

## Structure

- `src/data/roles.ts` — all role-specific content (hero copy, highlights,
  experience bullets, skills). Edit this file to update what's displayed.
- `src/data/profile.ts` — shared contact info and education, same for both
  roles. **Update the GitHub and email placeholders here.**
- `src/components/` — one component + co-located CSS file per section.
- `public/resume/` — the original PDF CVs, linked from the hero and contact
  sections as downloads.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # type-checks then builds to dist/
npm run preview # serve the production build locally
```
