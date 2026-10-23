# Abdellah — Portfolio RPG

A professional, multilingual developer portfolio with an optional isometric RPG adventure.

## Current milestone

This starter establishes the Next.js App Router, strict TypeScript, locale-aware route structure (`en`, `fr`, `ar`), shared typed portfolio content, and initial accessible hero UI. Phaser and game-specific dependencies are intentionally not included yet.

All personal content is clearly marked as placeholder data. Replace it before publishing; do not present placeholder projects or achievements as real work.

## Requirements

- Node.js 20.9+
- pnpm 9+

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000/en. The root route redirects to `/en`.

## Quality checks

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

These commands are provided as project scripts. They have not been run in the target repository as this bundle is a starter deliverable, not a modification of your local checkout.

## Architecture boundaries

- `src/content/`: locale-neutral, typed portfolio data.
- `src/lib/i18n/`: locale definitions and copy.
- `src/app/`: routing, metadata, page composition, and global styles.
- Future `src/game/`: Phaser scenes, controls, collision rules, and adapters. Keep it separate and dynamically loaded only from `/[locale]/adventure`.

## Asset policy

Review license, attribution, source resolution, and permitted use for each existing sprite, tileset, font, and sound before shipping. Do not add assets of unknown provenance.

## MVP guardrails

- Portfolio information must remain accessible without playing.
- Use semantic HTML, keyboard focus states, and reduced-motion support.
- Arabic must use RTL layout; English and French use LTR.
- Do not add authentication, a database, CMS, multiplayer, or open-world systems in the MVP.
- Do not create a contact form that implies successful submission without a real configured endpoint.
