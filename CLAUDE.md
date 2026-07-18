# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Josué Valbuena (full-stack developer), built with Astro 5 + Tailwind CSS 4, deployed as a static site at josuevalbuena.com (GitHub Pages). Content is in Spanish.

## Commands

Package manager is **pnpm** (see `packageManager` in package.json).

- `pnpm dev` — start Astro dev server
- `pnpm build` — production build (outputs to `dist/`)
- There is no lint, typecheck, or test script configured; `pnpm test` is a placeholder that always fails.

## Architecture

This is a single-page site (`src/pages/index.astro`) composed of section components rendered in order:
`Navbar` → `FloatingButtons` → `Hero` → `Services` → `Projects` → `Experience` → `Contact`, all under `src/components/`.

- **No layout abstraction**: `index.astro` owns the entire `<html>` document (head/meta/SEO tags, fonts, footer) directly — there is no shared `Layout.astro`. Since this is a single-page site, new pages would need this factored out first.
- **Content is inline, not data-driven**: component data (e.g. the `projects` array in `Projects.astro`, work history in `Experience.astro`) lives in the frontmatter of each `.astro` file as plain arrays/objects, not in a CMS or content collection. Add/edit portfolio items by editing the array in the relevant component.
- **Styling**: Tailwind v4 using the new CSS-first config (no `tailwind.config.js`). Theme tokens (colors, fonts, gradients) are defined via `@theme` in `src/assets/styles/global.css`, imported once from `index.astro`. Use existing tokens (`bg-background`, `text-primary`, `border-border`, etc.) rather than raw Tailwind color classes to stay consistent with the dark theme.
- **Scroll animations**: a vanilla `IntersectionObserver` in `index.astro` toggles `opacity-100`/`translate-y-0` on any element with the `animate-on-scroll` class the first time it enters the viewport (see the inline `<script>` at the bottom of that file). Apply that class (plus the initial hidden-state utilities) to animate new sections in the same way.
- **Images**: photos rendered through `<Image />` (project screenshots, the Hero profile photo) live in `src/assets/` and are imported as modules so Astro can optimize them at build time via `astro:assets` (requires the `sharp` dependency) — e.g. `Projects.astro` loads all of `src/assets/projects/*.webp` with `import.meta.glob(..., { eager: true })` and looks each one up by filename (the `image` field in the `projects` array). Everything else (favicon, documents, robots.txt) stays in `public/` and is referenced by absolute path (`/images/...`), unprocessed. Add a new project screenshot by dropping the `.webp` file into `src/assets/projects/` and setting `image` to its filename.
- **SEO**: `astro.config.mjs` sets `site: 'https://josuevalbuena.com'` and registers `@astrojs/sitemap`, which generates `sitemap-index.xml` at build time (referenced from `public/robots.txt`). Meta tags (title, description, OG/Twitter cards) are hardcoded in `index.astro`'s `<head>` — update them there if canonical URL, title, or social preview content changes.
- **`old/`**: a legacy, pre-Astro version of the site (plain HTML + Bootstrap). Not part of the build; don't edit it as if it were live code.
