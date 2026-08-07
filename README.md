# Portfolio — Dhruva Ramachandran

Next.js 16 (App Router) + React 19 + Tailwind v4 + shadcn/ui.

```bash
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
```

## Where the content lives

All copy is data, not markup. Edit this file and every page updates:

| File             | Holds                                                            |
| ---------------- | ---------------------------------------------------------------- |
| `lib/content.ts` | Profile, projects, experience, education, skills, certifications |

The résumé PDF served at `/dhruva-ramachandran-resume.pdf` is
`public/dhruva-ramachandran-resume.pdf` — replace that file to update the
download link everywhere.

### Adding a project

Append an entry to `projects` in `lib/content.ts`. The route
(`/projects/<slug>`), the cards on `/` and `/projects`, the metadata, and the
"next project" link at the bottom of each write-up are all generated from it.

Each project has two content layers:

- `highlights` — the résumé bullets, rendered verbatim under "What I delivered"
- `detail` — the longer narrative sections (`heading` + `body`)

`accent` picks which signal colour the page and card use: `neon` (magenta),
`cyan`, or `violet`.

## Routes

```
/                       hero, selected work, current role
/projects               project index
/projects/[slug]        write-up  (statically generated per project)
/about                  full résumé detail + PDF download
```

## Design system

"Night Drive" — a deliberately dark-only aesthetic. There is no light theme;
`ThemeProvider` is set to `forcedTheme="dark"` in `app/layout.tsx`.

- **Palette** — `app/globals.css`. Flat dark grey canvas (`--background`), with
  three signal colours (`--neon`, `--neon-cyan`, `--neon-violet`) reserved for
  glow and emphasis. They are never used for body copy; all text contrast meets
  WCAG AA against the background.
- **Type** — Unbounded (display), Chivo (body), JetBrains Mono (labels and
  indices), loaded via `next/font/google`.
- **Atmosphere** — a fixed SVG grain overlay on `body::before`, and a fading
  edge mask on the skills ticker.
- **Motion** — `components/reveal.tsx` wraps content in an IntersectionObserver
  and releases it with a staggered rise-in (pass `delay` in ms). Everything
  collapses under `prefers-reduced-motion: reduce`.

Brand glyphs for GitHub and LinkedIn live in `components/brand-icons.tsx`;
lucide-react v1 no longer ships them.

## Deploying

Every route is static, so any host works. On Vercel: import the repo, no
configuration needed.
