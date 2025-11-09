## Sajjad Portfolio Static React TSX — November 09, 2025

This document summarizes the static React + TypeScript portfolio application (Vite), the edits and improvements applied on and before November 9, 2025, the key design choices and engineering trade-offs, frontend issues encountered and how they were solved, and the prompts used to drive those solutions.

---

## Project overview

- Tech stack: React + TypeScript, Vite (bundler), Tailwind utility classes (via CDN in `index.html`), and small hand-written CSS in `index.css` for helpers.
- Purpose: A statically-built personal portfolio site with in-page navigation, project cards, an experience timeline, and a downloadable resume PDF. Prepared for deployment to GitHub Pages with relative asset paths.

## Work completed (concise)

- Converted and extended the baseline UI from Google AI Studio to a typed React + Vite project.
- Standardized section layouts and spacing (About, Experience, Projects, Contact) to use consistent two-column or timeline patterns.
- Replaced single-column experiences with a centered timeline using IntersectionObserver animations.
- Added project image imports and overlays (colour mask + backdrop blur) to integrate images with site background.
- Wired a real resume PDF in `assets/` and implemented a production-safe "Download CV" button that forces a PDF download in the built site.
- Increased and updated skill chips and added new skills (Docker, LangChain, FastAPI, Streamlit) including inline SVG icons.
- Added TypeScript module declarations for non-code assets (`.webp`, `.png`, `.pdf`, `.ico`) so Vite + TS compiles cleanly.
- Introduced a `index.css` file with Tailwind directives to support optional build-time Tailwind usage.
- Configured `vite.config.ts` with `base: './'` to produce relative paths in `dist/` so the site works when served from GitHub Pages or any static root.
- Added `gh-pages` and `predeploy`/`deploy` npm scripts to make deploying `dist/` to GitHub Pages straightforward.
- Updated `index.tsx` to ensure favicon and other runtime link hrefs resolve properly in production builds.

## Key design aspects and focus

- Consistency: unified section padding, spacing and two-column layouts to provide a cohesive visual rhythm across breakpoints.
- Accessibility & content clarity: clear headings, download attribute on resume link to ensure predictable behavior, and anchor-based navigation for static hosting.
- Progressive enhancement: visual overlays, modest animations, and intersection-driven reveals that do not break if JavaScript is limited.
- Static-hosting safety: relative base paths (`base: './'`) and using `public/` for critical root assets (favicon) when needed — ensuring both dev and production serve the same root assets.
- Small, maintainable CSS: prefer Tailwind utility classes with a small `index.css` scaffold if future compile-time Tailwind is desired.

## Frontend issues encountered & resolutions

1) Favicon visible in production build but not during local dev

  - Symptom: The favicon appeared after `npm run build` and opening `dist/index.html` but not while running the Vite dev server.
  - Root cause: The initial favicon request happens early in the page load and the runtime code that imports the hashed favicon and rewrites the `<link rel="icon">` runs after that request — too late for the browser's first fetch in dev. Production `index.html` is rewritten at build-time to point to the hashed asset, so it worked there.
  - Fix: Place `favicon.ico` in `public/` so the file is available at `/favicon.ico` for both dev and prod, and add a static `<link rel="icon" href="/favicon.ico">` in `index.html`. This ensures the browser gets a 200 on the favicon request immediately. Also recommended a hard reload after updating favicon to bust the browser cache.

2) Import errors for non-code assets in TypeScript (PDF, ICO, images)

  - Symptom: TypeScript complained when importing `.pdf` or `.ico` files from `src/assets`.
  - Root cause: TypeScript needs module declarations for non-code asset types when using `import` syntax.
  - Fix: Added `src/types/images.d.ts` with `declare module '*.pdf'`, `declare module '*.ico'`, `declare module '*.webp'`, etc., so the imports type-check and Vite resolves assets.

3) Large project image increased bundle size (Sky Marine PNG)

  - Symptom: `dist/assets/Sky Marine Services-<hash>.png` was large (~2.6MB), impacting page weight.
  - Fix/Recommendation: Optimize images (lossy compression / webp conversion) before building for production. Consider generating multiple sizes and using srcset or responsive images.

4) Tailwind directives in `index.css` trigger linter/warnings when not compiled

  - Symptom: `@tailwind` at-rules appear as unknown to some linters when Tailwind isn't being processed at build time.
  - Fix: Keep `index.css` as a future-ready entrypoint for compiled Tailwind. For the current CDN-based workflow it's harmless; if you switch to build-time Tailwind, add a PostCSS/Tailwind setup and configure `postcss.config.js` and `tailwind.config.js`.

5) Timeline layout & IntersectionObserver edge-cases

  - Symptom: Small timing issues or flicker on very slow devices when animations trigger immediately.
  - Fix: Use small animation delays and `rootMargin` adjustments in the IntersectionObserver so elements animate only after they are clearly in view. Also provide sensible reduced-motion support for accessibility.

## Prompts used (reconstructed)

Below are the core prompts you used (or likely used) during the iteration. They drove the changes to layout, assets, and build configuration.

1. "Add an underline accent for the 'About Me' header and make the About section a two-column layout; ensure container padding and section spacing are consistent across breakpoints."

2. "Mirror About's two-column layout for Experience, Projects, and Contact sections; center-align Contact and update contact email to `Sajjadismail22@gmail.com`."

3. "Increase skill chip size slightly; add Docker, LangChain, FastAPI, Streamlit to the skills list and include suitable icons."

4. "Connect the 'Download CV' button to the actual resume PDF stored in `assets/` and make sure it downloads in production builds."

5. "TypeScript is complaining when I import `.pdf` files with Vite — add declarations so imports compile cleanly." 

6. "I added project images — import them into `constants.ts` and set them as `imageUrl` fields; add an overlay and blur effect to blend the images with the background." 

7. "Replace the simple Experience list with a centered timeline and IntersectionObserver animations; update the title to 'Where I've Worked' and keep responsive behavior." 

8. "Make build-ready changes for GitHub Pages: add `base: './'` to `vite.config.ts`, add `predeploy` and `deploy` scripts and install `gh-pages`." 

9. "Favicon appears after build but not in dev — why? How do I make it show in dev too?" 

10. "Optimize the large image assets or recommend strategies to reduce bundle size (webp, srcset, compression)."

These prompts guided the incremental edits and were paired with clarifying follow-ups (for example, confirming the resume filename and the desired email address, or whether to keep Tailwind via CDN or move to a build-time configuration).

## Files created or changed (not exhaustive; highlights)

- `vite.config.ts` — set `base: './'` to ensure relative paths for static hosting.
- `index.css` — Tailwind directives and small helper rules for future compile-time use.
- `src/types/images.d.ts` — module declarations for `.pdf`, `.ico`, `.webp`, `.png`.
- `components/Hero.tsx` — added PDF import and a download link with `download` attribute.
- `components/Experience.tsx` — new timeline layout and IntersectionObserver logic.
- `components/Projects.tsx` — project card image overlays (color mask + blur).
- `constants.ts` — actual EXPERIENCE and PROJECTS arrays wired to imported assets.
- `index.tsx` — runtime favicon handling to ensure the production build's hashed favicon is used; recommended to prefer `public/favicon.ico` for dev.
- `index.html` — retained Tailwind CDN; update favicon link to `/favicon.ico` if `public/favicon.ico` is used.
- `package.json` — added `predeploy` and `deploy` scripts; added `gh-pages` devDependency.

## How to run locally (quick)

1. Install dependencies:

```powershell
npm install
```

2. Start dev server:

```powershell
npm run dev
```

3. Build for production:

```powershell
npm run build
```

4. Preview the production build (locally):

```powershell
npm run preview
```

Or serve `dist/` with a small static server (if `npm run preview` not available):

```powershell
npx http-server .\dist -p 8080
# then open http://localhost:8080
```

## Recommended next steps

- Move the favicon into `public/favicon.ico` and reference `/favicon.ico` in `index.html` to ensure consistent dev+prod behavior.
- Compress large images (Sky Marine) and/or convert to WebP with responsive sizes.
- If you want smaller CSS output and faster builds, switch Tailwind from CDN to build-time PostCSS/Tailwind with purge/scan configured.
- Add one or two minimal unit/visual tests for critical components (Hero and Experience timeline) if you plan to iterate further.

## Closing notes

This file is a snapshot of the state and decisions made on November 9, 2025. It should help onboard collaborators, guide future optimizations, and serve as a reference for why specific build and asset choices were made.

If you want, I can now: 1) add `public/favicon.ico` and update `index.html` automatically, 2) compress large images and re-run the build, or 3) switch Tailwind to a build-time configuration — tell me which and I'll proceed.
