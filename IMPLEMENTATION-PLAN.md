# Implementation Plan — Specification v1.0

## Milestone 1: Foundation (current deliverable)
- Establish Next.js App Router, strict TypeScript, lint/typecheck/test scripts.
- Add `/en`, `/fr`, and `/ar` route foundation with Arabic RTL.
- Add typed placeholder content and the first responsive hero.
- Keep all placeholder content explicitly labelled.
- Acceptance: install succeeds; typecheck, lint, unit tests, and production build can be run locally.

## Milestone 2: Shared shell and visual system
- Add shared header/navigation, responsive menu, reusable panel/button/dialog styles.
- Refine the isometric hero and overlay menu with licensed existing assets.
- Acceptance: keyboard-only navigation, visible focus, reduced-motion behavior, responsive layout.

## Milestone 3: Conventional portfolio routes
- About, skills, projects index/detail, journey, services, contact.
- Localized copy and route metadata; real project data stays in typed shared modules.
- Acceptance: direct deep links work; placeholder data is never presented as verified biography or achievement.

## Milestone 4: Adventure foundation
- Add Phaser only when `/[locale]/adventure` is opened; keep game code under `src/game`.
- One compact isometric map, movement, camera, collision, keyboard and touch controls.
- Acceptance: Phaser absent from ordinary portfolio route bundles; listeners and animation frames are cleaned up.

## Milestone 5: NPC and object interactions
- Dialogue UI reads from the same content model as the conventional pages.
- Connect six areas: About, Skills, Projects, Journey, Services, Contact.
- Add final checkpoint with direct portfolio links and return/restart behavior.
- Acceptance: every area can be accessed without game completion; no dead-end interaction.

## Milestone 6: Localization and accessibility QA
- Validate English/French LTR and Arabic RTL, text expansion, mobile controls, focus, contrast, reduced motion.
- Review existing asset licensing and optimize dimensions/formats.
- Acceptance: no clipped essential content at narrow widths; language and direction are correct.

## Milestone 7: Release readiness
- Run lint, typecheck, unit tests, E2E tests, production build, and a measured performance review.
- Add README, asset attribution, deployment instructions, and known limitations.
- Acceptance: record actual outcomes; do not report checks as passing unless run.

## Explicitly out of scope
Database, authentication, CMS, multiplayer, open world, complex branching quests, custom full sprite production, and a contact form without a working endpoint.
