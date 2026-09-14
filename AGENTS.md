# Project Rules

## Framework & Language

- Framework: Next.js (App Router only, no Pages Router)
- TypeScript strict mode — no `any` type, no implicit any
- Component structure: one component per file, named exports (no default export unless required by Next.js convention like page.tsx, layout.tsx)

## Server vs Client Components

- Default rule: every component is a Server Component unless it absolutely needs client-side interactivity
- Only add `"use client"` when the component actually needs one of these:
  - React hooks: useState, useEffect, useContext, useReducer, etc.
  - Browser-only APIs (window, localStorage, document)
  - Event handlers (onClick, onChange, onSubmit, etc.)
  - Third-party libraries that depend on client-side rendering
- If only a small part of a component needs interactivity, extract that part into its own small Client Component and keep the parent as a Server Component — don't mark the entire page/parent as client just because one child needs it
- Never add `"use client"` "just in case" or by default — if unsure whether it's needed, don't add it, write it as a Server Component and only convert if it breaks
- Fetch data directly in Server Components using async/await — don't use useEffect + fetch for data that could be fetched server-side
- Push `"use client"` boundary as deep/low as possible in the component tree (leaf components), not at the top of the page

## Styling Rules

- Styling: Tailwind CSS only — no inline styles, no separate CSS modules unless absolutely necessary
- Always check and follow the global CSS file (globals.css) first — use existing CSS variables, color tokens, and design tokens defined there instead of hardcoding new values
- Never introduce new color/spacing values that conflict with the existing design system — reuse what's already defined in tailwind.config and globals.css
- UI components must come from ShadCN UI first — check /components/ui before writing custom markup
- For animations, use Animate UI components — do not write custom CSS animations or use other animation libraries unless the required animation doesn't exist in Animate UI
- Follow Radix UI primitives underneath ShadCN components when accessibility/behavior customization is needed — don't rebuild primitives from scratch

## Code Quality & Size Limits

- No garbage code — no dead code, no commented-out code blocks, no unused imports/variables
- No unnecessary comments explaining obvious code — comments only for non-obvious business logic
- No console.log statements in final/committed code
- Keep each page/component file under 80-90 lines maximum:
  - If a page/component exceeds this limit, break it into smaller sub-components
  - Extract repeated logic into custom hooks (/hooks folder)
  - Extract reusable UI blocks into separate components (/components folder)
- Keep functions small and single-responsibility — one function does one thing
- Avoid deeply nested conditionals/JSX — extract into helper functions or sub-components instead

## Reusability Rules

- Before creating any new component, hook, or utility function — search /components, /hooks, and /lib first to check if something similar already exists
- If a similar component exists but needs slight variation, extend/compose it with props instead of duplicating code
- Don't add new npm dependencies without asking first — check if the existing stack (ShadCN, Radix, Animate UI, Tailwind) can already solve the problem

## Decision Making

- If a requirement is unclear or ambiguous, ask a clarifying question before writing any code — never guess and implement
- Don't add extra features, states, or edge-case handling that wasn't explicitly asked for (no scope creep)
- Don't refactor unrelated/working code while implementing a new feature unless explicitly asked
