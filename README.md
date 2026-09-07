# Prismic + Next.js Disclaimer Demo (Codementor)

Minimal **Next.js App Router + TypeScript** teaching sample that renders a **Prismic-shaped disclaimer** document from mock CMS data — no API tokens, no secrets.

Built for live mentoring on wiring a Prismic custom type (disclaimer) into a Next.js page (Codementor / freelance sessions).

---

## What you get

1. **Mock Prismic document** -- `content/sample-disclaimer.json` mirrors getSingle(disclaimer) shape
2. **Typed helpers** -- `lib/prismic-types.ts`, span-aware `lib/rich-text.tsx`
3. **App Router page** -- `app/page.tsx` fetches via getDisclaimer() and renders the disclaimer field
4. **Swap path** -- replace the mock loader with @prismicio/client when a real repository is connected

---

## Setup & run

```bash
npm install
npm run dev
```

Open http://localhost:3000 . You should see a warning-styled disclaimer card with bold/link spans and a bullet list from the mock document.

```bash
npm run build
npm start
```

Requires Node 18+. No Prismic account needed for this demo.

---

## Layout

```
app/
  layout.tsx          Root layout + metadata
  page.tsx            Renders the disclaimer field
  globals.css         Card / severity styles
content/
  sample-disclaimer.json   Mock Prismic document (no secrets)
lib/
  prismic-types.ts    Minimal Prismic-shaped TS types
  get-disclaimer.ts   Mock stand-in for client.getSingle()
  rich-text.tsx       Span-aware Rich Text renderer
package.json
tsconfig.json         @/* path aliases
```

---

## Mentoring hooks

| Piece | Teaching point |
|--------|----------------|
| JSON mock vs real client | Same shape as Prismic REST responses -- safe offline practice |
| Rich Text spans | Why CMS text is not a plain string; bold/em/hyperlink offsets |
| getDisclaimer() | Single seam to swap mock for createClient().getSingle("disclaimer") |
| Severity field | Select field maps to CSS class; editors control UI tone |
| App Router async page | Server Component fetch without client-side waterfalls |

---

## Live session teaching plan

~45-60 minute Codementor outline (Emmanuel Kalashnikov / Prismic + Next.js disclaimer):

- Rich Text rendering (15 min): walk rich-text.tsx spans; contrast with @prismicio/react.
- Client swap (10-15 min): sketch real Prismic client in get-disclaimer.ts; tokens stay in .env.
- Stretch: Slice for legal copy, or /disclaimer route with generateMetadata.

---

## Mentoring angle (Codementor)

Tailored for a Prismic + Next.js disclaimer mentoring request:
- Start from a runnable App Router app, not slides -- mentee keeps the repo.
- Emphasize the CMS to types to render seam so migrating to a real Prismic repo is one function change.
- Prefer live edits: change severity to critical, tweak spans, re-render.
- Scope stays small: one document type, one page, clear next steps to Slice Machine / Preview.

---

## License

MIT -- use freely for teaching, portfolios, and Codementor sessions.
