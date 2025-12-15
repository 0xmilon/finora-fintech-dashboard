# AGENTS.md

> **Context**: This file guides AI Agents (Claude, Gemini, ChatGPT, etc.) on how to work within the **Finora** project. Follow these protocols strictly to maintain the project's $150M premium standard.

## 1. Project Overview
**Finora** is a high-end, futuristic fintech dashboard built with a "Linear-esque" design philosophy. It prioritizes aesthetics, performance, and a "wow" factor over generic utility.
-   **Goal**: Create a dashboard that feels like a $150M SaaS product.
-   **Tone**: Serious, Premium, Dark Mode, Data-Dense but Breathable.

## 2. Technology Stack
-   **Runtime/Bundler**: [Bun](https://bun.sh) (v1.0+)
-   **Build Script**: Custom TypeScript builder (`build.ts`). **ALWAYS** run `bun build.ts` to execute the build pipeline.
-   **Styling**: 
    -   **TailwindCSS** (v3.4+).
    -   **Deep Dark Theme**: Backgrounds are `#0A0A0A` or `bg-background`.
    -   **Custom Config**: See `tailwind.config.js` for `surface-*`, `primary`, and `border` tokens.
-   **Icons**: [Lucide Icons](https://lucide.dev).
-   **Architecture**:
    -   **HTML Components**: Located in `src/components/`.
    -   **Pages**: Located in `src/pages/`.
    -   **Include System**: The builder uses `<!-- include: "component-name" -->` syntax.

## 3. Design Guidelines (The "Gold Standard")

### A. Visuals & Aesthetics
1.  **Dark Mode First**: The UI is strictly dark mode. Use `bg-[#0A0A0A]` for the main background.
2.  **Glassmorphism & Borders**:
    -   Use strictly `1px` borders with low opacity (e.g., `border-white/5` or `border-white/10`).
    -   Use subtle gradients for active states or highlights (e.g., `bg-gradient-to-t from-primary/10`).
3.  **Shadows & Glows**:
    -   Use colored shadows for charts/calls-to-action (e.g., `shadow-2xl shadow-black/40`).
    -   Implement ambient background glows using large blurred circles (`blur-[120px]`).

### B. Layout & Spacing
1.  **Container**: Main content should be wrapped in `max-w-[1800px] mx-auto` to prevent unlimited stretching on ultra-wide monitors.
2.  **Grid Systems**: Use CSS Grid for complex layouts (e.g., `grid-cols-12`).
3.  **Whitespace**: Be generous. Do not cram elements. Use `gap-6` or `gap-8` for major sections.

### C. Components
1.  **Cards**: `rounded-3xl` or `rounded-2xl`. `border border-white/5 bg-[#0A0A0A]`.
2.  **Buttons**:
    -   Secondary: `bg-surface-100 hover:bg-surface-200 text-gray-400 hover:text-white`.
    -   Primary: `bg-white text-black` (High contrast).
3.  **Data Display**:
    -   Use `tabular-nums` for all currency/numbers.
    -   Font: `font-display` (Sans-serif, Inter-like) or `font-mono` for raw data.

## 4. Workflows & Rules

### A. modifying Code
1.  **Atomic Edits**: When editing HTML, edit the *Component* file (`src/components/foo.html`), NOT the `dist/` or `index.html` output.
2.  **Naming**: Use kebab-case for filenames (`transaction-table.html`).
3.  **Icons**: Always use `data-lucide="icon-name"`. Ensure `lucide.createIcons()` is called in the main entry.

### B. Build Process
Run the build script after **EVERY** set of changes to verify integrity.
```bash
bun build.ts
```
*Note: The build script handles HTML includes, CSS compilation, and TS bundling.*

### C. Quality Control
Before marking a task as done:
1.  **Check Mobile**: Ensure `hidden md:flex` or similar classes are used for responsive hiding.
2.  **Check Hover States**: Every interactive element MUST have a `:hover` state.
3.  **Check Borders**: No double borders. Use `divide-y` or `border-b` carefully.

## 5. Directory Structure
```
finora/
├── build.ts             # Custom Build Logic
├── tailwind.config.js   # Design Tokens
├── src/
│   ├── index.ts         # Entry Point (Lucide initialization)
│   ├── styles/
│   │   └── input.css    # Tailwind Directives
│   ├── pages/
│   │   └── index.html   # Main Layout Skeleton
│   └── components/      # Reusable HTML Blocks
│       ├── sidebar.html
│       ├── header.html
│       ├── analytics.html
│       └── ...
└── dist/                # Build Output (Do not edit)
```

## 6. Pro-Tips for Agents
-   **Think "Apple" x "Linear"**: If it looks like a standard Bootstrap/Material admin panel, it is WRONG.
-   **Micro-Interactions**: Add `transition-all duration-300` to everything interactive.
-   **Data Density**: Balance high data density with readability (use opacity `text-gray-500` for labels).

---
