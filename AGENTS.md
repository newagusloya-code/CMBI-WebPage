# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/index.astro` is the homepage for the CMBI landing template.
- `src/pages/servicios/[slug].astro` generates one internal page per service from `servicePages` in `src/data/site.ts`.
- `src/pages/cookies.astro`, `src/pages/privacidad.astro`, and `src/pages/aviso-legal.astro` contain provisional legal/support pages.
- `src/components/` contains reusable UI: `SiteHeader.astro`, `SiteFooter.astro`, `ServiceSlideshow.astro`, and `MotionRevealScript.astro`.
- `src/layouts/Layout.astro` holds the shared HTML shell, metadata, favicon links, Open Graph tags, and global stylesheet import.
- `src/data/site.ts` is the main editable content hub for CMBI: settings, WhatsApp example number, social links, images, navigation, services, benefits, testimonials, and dashboard metrics.
- `src/styles/global.css` defines the full visual system: CMBI colors, layout, cards, curves, service pages, slideshow illustrations, responsive behavior, and accessibility states.
- `public/` stores static assets referenced with root-relative paths such as `/cmbi-hero.png` and `/cmbi-logo.jpg`.
- `reports/` stores project documentation artifacts, including the CMBI v0.3 PDF editing guide and its JSON source.

## Build, Test, and Development Commands
- `npm install` installs dependencies. This repo targets Node `>=22.12.0`.
- `npm run dev` starts the local Astro dev server at `http://localhost:4321`.
- `npm run build` creates the production site in `dist/`; use this as the primary validation check.
- `npm run preview` serves the built output locally for final checks.
- `npm run astro` exposes the Astro CLI for ad hoc commands.

## Coding Style & Naming Conventions
- Keep content edits in `src/data/site.ts` whenever possible, especially services, navigation, WhatsApp messages, and image references.
- Add or remove service pages by editing `servicePages`; do not create separate hardcoded service pages unless the layout truly diverges.
- Service slugs should be lowercase and URL-safe, e.g. `nutricion`, `acuaterapia`, `spa-belleza`, `sauna`.
- Use concise Spanish copy with a premium, calm, objective wellness tone. Avoid medical promises, exaggerated claims, or final business data unless explicitly confirmed.
- Match the existing Astro/CSS style: 2-space indentation, no CSS semicolons, small focused components, and minimal diffs.
- Use root-relative asset paths from `public/`, e.g. `/cmbi-pool.png`. Do not reintroduce old SHA assets or `/sha/` paths.

## Content & Design Guidelines
- This is still a template/skeleton, not a final production website.
- WhatsApp currently uses an example number in `WHATSAPP_NUMBER`; replace it only after real contact data is confirmed.
- Keep Instagram/Facebook links as references unless the user asks to remove or replace them.
- Preserve the no-video/no-autoplay direction. Slideshow interactions should remain manual and accessible.
- Respect `prefers-reduced-motion` and the motion toggle controlled by `MotionRevealScript.astro`.
- Use the CMBI logo palette: plum `#6f2c7f`, teal `#1188a0`, aqua `#6fb8c8`, and warm background `#fbf8f5`.
- Keep layouts clean and low-saturation: short text, generous spacing, unified card/container style, subtle fades/blur, and gentle curved background artwork.

## Testing Guidelines
- There is no automated test suite yet.
- Run `npm run build` before commits or publication.
- Manually verify these routes after structural changes:
  - `/`
  - `/servicios/nutricion`
  - `/servicios/acuaterapia`
  - `/servicios/fitness`
  - `/servicios/spa-belleza`
  - `/servicios/sauna`
  - `/aviso-legal`
  - `/privacidad`
  - `/cookies`
- Before publishing, search for stale placeholders or old-template residue such as real phone numbers, `SHA`, `/sha/`, `prototipo`, `Play`, and `video`.
- Manually check mobile layout, sticky header spacing, service cards, slideshows, map image, cookie banner, and footer.

## Commit, GitHub, and Deploy Guidelines
- Use short imperative commits, e.g. `feat: add service skeleton` or `fix: update CMBI content guide`.
- The GitHub remote is `https://github.com/newagusloya-code/CMBI-WebPage.git`.
- Push source changes to GitHub only when the user asks or confirms.
- Do not deploy to Vercel unless the user explicitly says the edition phase is done and authorizes deployment.
- Vercel may be linked locally, but deployment must remain a separate intentional action.
- PRs or release notes should mention affected routes, content/legal changes, and any assets replaced.

## Security & Configuration Tips
- Treat all current business/contact details as provisional unless explicitly confirmed.
- Do not collect or request sensitive medical data through forms or WhatsApp copy.
- Keep legal copy conservative until reviewed with real business requirements.
- Do not commit `.vercel/`, `dist/`, `.astro/`, `node_modules/`, environment files, or local OS artifacts.
- When replacing imagery, keep optimized assets in `public/` and update `settings.images` in `src/data/site.ts`.
