# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Josué Valbuena (full-stack developer), built with Astro 7 + Tailwind CSS 4, deployed as a static site at josuevalbuena.com (served by Netlify, per the live response headers). Content is in Spanish. The site is positioned as a freelance service (clients looking to hire a web/AI developer), not as a CV.

## Commands

Package manager is **pnpm** (see `packageManager` in package.json).

- `pnpm dev` — start Astro dev server
- `pnpm build` — production build (outputs to `dist/`)
- There is no lint, typecheck, or test script configured; `pnpm test` is a placeholder that always fails.

## Architecture

The site is a home page plus service pages, all rendered through one shared layout:

- `src/pages/index.astro` — home. Sections in order: `Hero` → `Services` → `Projects` → `Process` → `Experience` → `Faq` → `Contact` (components in `src/components/`).
- `src/pages/servicios/index.astro` — index of services. `src/pages/servicios/[slug].astro` — one page per entry of `servicePages` in `src/data/servicePages.ts` (`getStaticPaths`). To add a service page, add an object there; the page, sitemap entry, footer/nav links and JSON-LD (`Service`, `BreadcrumbList`, `FAQPage`) are generated. Each page must target a distinct search intent — don't copy text between them.
- **Layout** (`src/layouts/Layout.astro`): owns `<html>`, `<head>` (title, description, canonical, OG/Twitter, theme-color), `Navbar`, `FloatingButtons`, footer and the scroll-animation script. Pages pass `title`, `description`, `path` (with trailing slash), optional `ogDescription` and extra `jsonLd` schemas. The base JSON-LD graph (`WebSite`, `Person`, `ProfessionalService`), `siteUrl` and the `whatsappUrl()` helper live in `src/lib/seo.ts`. Keep titles ~45–60 chars and descriptions ≤160.
- **Shared data** in `src/data/`: `projects.ts` (projects list, each with a `slug` derived from its image filename and a descriptive `alt`), `servicePages.ts`, `faq.ts` (home FAQ). `Projects.astro` and `Faq.astro` take their items as props so service pages reuse them. Some content still lives in component frontmatter (`Services.astro` cards, `Experience.astro` jobs — the sbpay and Kibernum entries are intentionally commented out).
- **Styling**: Tailwind v4 using the new CSS-first config (no `tailwind.config.js`). Theme tokens (colors, fonts, gradients) are defined via `@theme` in `src/assets/styles/global.css`, imported once from `Layout.astro`. Use existing tokens (`bg-background`, `text-primary`, `border-border`, etc.) rather than raw Tailwind color classes to stay consistent with the dark theme.
- **Scroll animations**: a vanilla `IntersectionObserver` in `Layout.astro` toggles `opacity-100`/`translate-y-0` on any element with the `animate-on-scroll` class the first time it enters the viewport (see the inline `<script>` at the bottom of that file). Apply that class (plus the initial hidden-state utilities) to animate new sections in the same way.
- **Images**: photos rendered through `<Image />` (project screenshots, the Hero profile photo) live in `src/assets/` and are imported as modules so Astro can optimize them at build time via `astro:assets` (requires the `sharp` dependency) — e.g. `Projects.astro` loads all of `src/assets/projects/*.webp` with `import.meta.glob(..., { eager: true })` and looks each one up by filename (the `image` field in `src/data/projects.ts`); company logos for `Experience.astro` are in `src/assets/logos/`. Everything else (favicon, `og-image.jpg`, robots.txt) stays in `public/` and is referenced by absolute path (`/images/...`), unprocessed. Add a new project screenshot by dropping the `.webp` file into `src/assets/projects/` and setting `image` (and `alt`) in `src/data/projects.ts`.
- **SEO**: `astro.config.mjs` sets `site: 'https://josuevalbuena.com'` and registers `@astrojs/sitemap`, which generates `sitemap-index.xml` at build time (referenced from `public/robots.txt`). Per-page meta tags come from the props passed to `Layout.astro`; the social preview image is `public/images/og-image.jpg` (1200×630, with the headline text baked in, so regenerate it if the headline changes). `*.pdf` is gitignored, so there is no CV download.
- **`old/`**: a legacy, pre-Astro version of the site (plain HTML + Bootstrap). Not part of the build; don't edit it as if it were live code.
