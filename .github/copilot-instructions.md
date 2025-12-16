<!-- Copilot instructions for Finora project -->
# Copilot / AI Agent Guide — Finora

Purpose: get an AI coding agent productive immediately in this repo.

- **Quick start (build & dev)**:
  - Build: `bun build.ts` (same as `npm run build`).
  - Dev/watch: `bun build.ts --watch` (`npm run dev`).
  - CSS CLI used by build: `bun x tailwindcss -i ./src/styles/input.css -o ./dist/styles.css --minify` (see `build.ts`).

- **What the build does (see build.ts)**:
  - Processes HTML includes from `src/pages/*.html` and injects files from `src/components/`.
  - Compiles Tailwind CSS to `./dist/styles.css` using the CLI above.
  - Bundles JS via `Bun.build` with entry `src/index.ts` into `dist/`.
  - On failure the script exits (errors printed to console).

- **Where to edit**:
  - Edit component markup in `src/components/` (atomic edits). Do NOT edit files in `dist/` (output).
  - Pages live in `src/pages/` (the builder resolves `<!-- include: "component-name" -->`).

- **Include syntax (exact)**:
  - Use: `<!-- include: "my-component" -->` or `<!-- include: "my-component.html" -->`.
  - The builder looks for `src/components/my-component.html`.

- **Conventions & patterns (project-specific)**:
  - File naming: kebab-case for HTML component filenames (e.g., `transaction-table.html`).
  - Dark-mode-first design: use `bg-[#0A0A0A]` / `bg-background` tokens from `tailwind.config.js`.
  - Borders: 1px low-opacity borders like `border-white/5` (avoid double borders).
  - Numbers: use `tabular-nums` for currency and numeric displays.
  - Use Tailwind utility classes everywhere (see `src/styles/input.css` for entrypoint).

- **Tailwind / design tokens**:
  - See `tailwind.config.js` for `surface-*`, `primary`, `border`, and font tokens.
  - CSS entry: `src/styles/input.css` -> compiled to `dist/styles.css` by the build script.

- **Icons**:
  - Icons use Lucide. Ensure `lucide.createIcons()` is invoked in the main entry when adding icons (AGENTS.md guidance).

- **Scripts / package.json**:
  - `scripts.build` -> `bun build.ts`
  - `scripts.dev` -> `bun build.ts --watch`

- **Small but important behaviors discovered in code**:
  - The include regex in `build.ts` requires the component name in quotes: `<!-- include: 'name' | "name" -->`.
  - The build writes HTML files into `dist/` and logs each output file (useful for verifying include resolution).

- **Do this when changing markup or styles**:
  1. Edit `src/components/<component>.html` or `src/pages/*.html`.
  2. Run `bun build.ts` and inspect `dist/` output.
  3. Confirm hover states, mobile responsive classes (the project enforces `hidden md:flex` patterns), and border rules.

- **Avoid**:
  - Editing `dist/` directly.
  - Adding global layout changes without checking `tailwind.config.js` tokens.

- **References**:
  - Project guidance: [AGENTS.md](../AGENTS.md)
  - Build entry: [build.ts](../build.ts)
  - Tailwind tokens: [tailwind.config.js](../tailwind.config.js)
  - Main entry: [src/index.ts](../src/index.ts)

If any of these sections are unclear or you want more examples (component + page include, or a short checklist for PRs), tell me which area to expand.
