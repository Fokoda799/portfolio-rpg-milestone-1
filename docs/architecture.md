# Architecture Notes

## 1. Purpose

The application is a multilingual developer portfolio with an optional 2D isometric RPG-inspired adventure. Portfolio content must remain accessible through conventional pages without requiring visitors to play the game.

The implementation prioritizes maintainability, accessibility, performance, and verified content over game complexity.

## 2. Technology stack

- Next.js 15 App Router
- React 19
- TypeScript with strict checking
- Tailwind CSS 4
- CSS custom properties for shared design tokens
- pnpm for package management
- Vitest for unit tests
- ESLint and Prettier for code quality

Phaser is planned for the adventure milestone but is not currently installed.

## 3. Current source structure

```text
src/
├── app/
│   ├── (root)/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── [locale]/
│   │   ├── about/page.tsx
│   │   ├── adventure/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── journey/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── services/page.tsx
│   │   ├── skills/page.tsx
│   │   └── layout.tsx
│   ├── globals.css
│   └── ...
├── components/
│   └── portfolio-placeholder-page.tsx
├── content/
│   ├── portfolio.ts
│   ├── profile.ts
│   └── projects.ts
└── lib/
    └── i18n/
        ├── config.ts
        ├── config.test.ts
        └── copy.ts
```

The project detail route `/[locale]/projects/[slug]` is implemented separately under the projects directory.

## 4. Routing and localization

Supported locales are `en`, `fr`, and `ar`.

- `/` redirects to `/en`.
- `/[locale]` is the localized home route.
- Conventional portfolio sections are nested under `[locale]`.
- The localized root layout validates the locale and sets document-level `lang` and `dir` attributes.
- Arabic uses RTL; English and French use LTR.
- Invalid locale segments must return a not-found response.

Keep locale configuration centralized in `src/lib/i18n/config.ts`. Avoid duplicating locale validation or direction logic in individual pages.

Localized page copy should be added through the existing localization layer or typed content models. Do not assume every content item is translated unless its data confirms that.

## 5. Content model boundaries

`src/content/` contains shared, typed portfolio data.

- `profile.ts`: profile identity and explicitly labelled placeholders.
- `projects.ts`: project metadata and placeholder project entries.
- `portfolio.ts`: models and collections for skills, journey entries, services, contact placeholders, and dialogue lines.

Content modules should not import React components or perform rendering. Pages and components consume typed data.

Do not invent professional history, project outcomes, contact details, or credentials. Placeholder entries must remain clearly identified and must not be presented as verified achievements.

## 6. UI and styling

- `src/components/` holds reusable UI components shared by routes.
- `src/app/globals.css` defines design tokens, global defaults, pixel-inspired utilities, focus states, and reduced-motion behavior.
- Prefer semantic HTML and native links for navigation.
- Use visible keyboard focus indicators.
- Respect `prefers-reduced-motion`.
- Keep essential information readable on narrow screens and in RTL layouts.

Avoid introducing another styling framework or UI dependency without a concrete requirement.

## 7. Adventure architecture — planned

The game is not implemented yet. When work begins:

- Place game-specific code under `src/game/`.
- Load Phaser only when the visitor opens `/[locale]/adventure`.
- Keep scenes, movement, collision, and game lifecycle separate from portfolio content and page composition.
- Dispose of event listeners, observers, and animation frames when the game is unmounted.
- Keep dialogue content in the shared content model.
- Provide direct links to each portfolio section outside the game.
- Support keyboard and touch input, with a conventional navigation alternative.

Do not add Phaser to the ordinary portfolio route bundle.

## 8. Testing and verification

Available scripts:

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm format:check
```

Current unit tests cover locale validation and direction behavior. Add tests when introducing new shared logic, especially for routing, content selection, dialogue, and game lifecycle behavior.

Do not describe E2E tests, performance audits, or browser accessibility checks as completed unless they have actually been run.

## 9. Asset governance

Track assets in `docs/asset-inventory.md`.

Before integration, verify source, license, attribution requirements, dimensions, file format, file size, and suitability for responsive and high-density displays. Do not ship assets with unknown provenance.

## 10. Explicit non-goals

The initial release excludes authentication, a database, a CMS, multiplayer, open-world gameplay, complex branching quests, and a contact form without a working submission endpoint.

## 11. Architecture decision principles

1. Prefer small, typed modules over monolithic components.
2. Keep portfolio content independent of rendering and game logic.
3. Load optional game code only when requested.
4. Preserve direct navigation and accessibility if the game is unavailable.
5. Add dependencies only when their benefits justify their maintenance and bundle costs.
6. Record implementation status honestly; planned architecture is not evidence of completed functionality.
