# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is pnpm (`packageManager: pnpm@10.27.0`).

- `pnpm dev` — Astro dev server
- `pnpm build` — production build (output in `dist/`)

There is no test or lint setup (`pnpm test` is a placeholder that fails).

## Architecture

Single-page Spanish-language portfolio for Josué Valbuena (freelance full-stack dev), built with Astro 7 and Tailwind CSS v4 (via the `@tailwindcss/vite` plugin, not the Astro integration). Site URL is `https://josuevalbuena.com` (set in `astro.config.mjs`; `@astrojs/sitemap` is enabled). Icons come from `@lucide/astro`.

- `src/pages/index.astro` is the only page. It holds all `<head>` SEO/OG/Twitter meta (hardcoded URLs and copy), composes the section components in order (`Hero`, `Services`, `Projects`, `Experience`, `Contact`, plus `Navbar` and `FloatingButtons`), and contains an inline `IntersectionObserver` script. Any element with the `animate-on-scroll` class is revealed by swapping `opacity-0 translate-y-8 scale-95` for `opacity-100 translate-y-0`, so new animated elements must start with those initial classes.
- Navbar links are in-page anchors (`#servicios`, `#proyectos`, `#experiencia`, `#contacto`); section components must keep matching `id`s.
- `src/assets/styles/global.css` imports Tailwind and defines the design tokens in an `@theme` block (shadcn-style names: `background`, `foreground`, `primary`, `muted-foreground`, `border`, etc., dark theme with an emerald primary), fonts (Space Grotesk headings, Inter body), and custom utilities such as `text-gradient` and `font-heading`. Use these tokens rather than raw colors.
- `public/` serves static assets (`images/`, `robots.txt`); `og:image` points at `/images/profile.webp`.
- `old/` is the legacy Bootstrap/HTML version of the site and `README.md` documents that old version; neither is part of the Astro build.
