# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` contains the site routes: `index.astro`, `cookies.astro`, `privacidad.astro`, and `aviso-legal.astro`.
- `src/layouts/Layout.astro` holds the shared HTML shell, metadata, and global imports.
- `src/styles/global.css` defines the site-wide visual system and utility classes.
- `src/data/site.ts` is the main content hub for copy, navigation, CTA labels, and section data.
- `public/` stores static assets such as images, icons, and logos.

## Build, Test, and Development Commands
- `npm install` installs dependencies. This repo targets Node `>=22.12.0`.
- `npm run dev` starts the local Astro dev server at `http://localhost:4321`.
- `npm run build` creates the production site in `dist/`.
- `npm run preview` serves the built output locally for final checks.
- `npm run astro` exposes the Astro CLI for ad hoc commands.

## Coding Style & Naming Conventions
- Use Astro components for pages and shared layout logic; keep content edits in `src/data/site.ts` when possible.
- Prefer clear, descriptive names for sections and assets, e.g. `hero`, `programCards`, `sha-hero-exterior.png`.
- Follow the existing formatting style: 2-space indentation, semicolons omitted in CSS, and concise Spanish/English content depending on the page.
- No formatter or linter is configured yet, so match the surrounding code and keep diffs small.

## Testing Guidelines
- There is no automated test suite in the repository yet.
- Use `npm run build` as the primary validation step before opening a PR.
- Manually verify the homepage, legal pages, responsive behavior, and asset loading in the browser.

## Commit & Pull Request Guidelines
- This branch has no Git history yet, so there is no project-specific commit convention to mirror.
- Use short, imperative commits when possible, such as `feat: update hero copy` or `fix: adjust mobile spacing`.
- PRs should include a concise description, the pages affected, and screenshots for visual changes.
- Call out any content or legal text changes explicitly, especially edits to contact details or policy pages.

## Security & Configuration Tips
- Replace placeholder business data in `src/data/site.ts` before publishing.
- Double-check WhatsApp, address, social links, and legal copy before deployment.
- Keep large or final imagery in `public/` and reference it with root-relative paths like `/sha/sha-hero-exterior.png`.
