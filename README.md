# Feynman Diagram Editor

A browser-based Feynman diagram editor inspired by [JaxoDraw](https://jaxodraw.sourceforge.io/).
Pick a propagator, click-and-drag to draw, bend lines into arcs, and export to
`axodraw2` LaTeX, SVG or PNG — everything runs client-side, no server.

Lives at **[feynman.zichaoyang.com](https://feynman.zichaoyang.com/)**. Split out of the
main site ([zichaoyang.com](https://zichaoyang.com/)) into its own repo so the editor can
evolve independently.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # astro type-check
npm run build    # static output to ./dist
```

## Deploy

Pushed to `main` → GitHub Actions builds and publishes to GitHub Pages
(`.github/workflows/deploy.yml`). The custom domain is pinned via `public/CNAME`.

## Layout

- `src/pages/index.astro` — the editor page (toolbar, SVG canvas, export panel).
- `src/scripts/feynman-editor/` — all editor logic: state, geometry, rendering,
  interactions (pointer/keyboard/label), and exporters (axodraw2/SVG/PNG/JSON).
- `src/scripts/effects/` + `src/layouts/BaseLayout.astro` — shared shell carried
  over from the main site.
