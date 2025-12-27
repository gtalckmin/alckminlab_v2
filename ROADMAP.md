# Alckmin Lab v2 Roadmap

## Quick Start
- Install deps: `npm install`
- Local dev: `npm run dev` (Next at 3000); Studio at `/studio` (uses same dev server)
- Env: copy `.env.example` to `.env.local` and set `SANITY_PROJECT_ID`, `SANITY_DATASET` (e.g., `production`), `SANITY_API_VERSION` (e.g., `2023-01-01`), `SANITY_API_READ_TOKEN` (read token for public fetch)

## Sanity Setup
- Create a Sanity project/dataset (production). Note the `projectId`/`dataset`
- Deploy studio (optional) via `npm run dev` locally or Vercel preview; base path `/studio`
- Schemas live in [sanity/schemas](sanity/schemas) and are wired in [sanity.config.ts](sanity.config.ts)
- Seed starter docs (one `profile`, a few `publication`, `video`, `post` docs) for layout testing

## Next.js App (App Router)
- i18n locales: en (default), pt, es (see [next.config.mjs](next.config.mjs))
- Styling: Tailwind + serif headings / sans body ([tailwind.config.js](tailwind.config.js), [app/globals.css](app/globals.css))
- Layout + pages:
  - Home with hero/bento + latest publication/video/posts: [app/page.tsx](app/page.tsx)
  - Publications with year filter: [app/publications/page.tsx](app/publications/page.tsx)
  - Videos grid (react-player): [app/videos/page.tsx](app/videos/page.tsx)
  - Blog listing: [app/blog/page.tsx](app/blog/page.tsx)
  - Contact: [app/contact/page.tsx](app/contact/page.tsx)
  - Header: [components/header.tsx](components/header.tsx)
- Data access helpers/GROQ: [lib/sanity.ts](lib/sanity.ts); types in [lib/types.ts](lib/types.ts)
- Fallback content renders when env vars are missing, so UI is viewable without Sanity

## Content & Localization
- Current: data comes from Sanity (planned) with fallbacks; no markdown content layer yet
- Next steps: decide per-locale content model (separate docs per locale or locale fields). If Sanity supports i18n, enable field-level or document-level localization and adjust GROQ queries accordingly
- Migrate key content from Hugo: profile bio, publications, posts, videos; map assets into Sanity or Next `public/`

## Deployment
- Target: Vercel
- Set env vars in Vercel project: `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_VERSION`, `SANITY_API_READ_TOKEN`
- Build command: `npm run build`; Output: Next default
- Studio: can be exposed at `/studio`; protect with Sanity auth or Vercel password if desired

## Nice-to-haves / Next Work
- Add MDX or contentlayer for hybrid file-based content if preferred over Studio for posts
- Add Shadcn UI primitives for consistent buttons/cards/tables; wire typography tokens
- Add image handling (Sanity image builder) and replace placeholders
- Add RSS feed for posts; sitemap/robots
- Add analytics (Vercel Analytics already imported) and OG image generation
- Implement locale switcher in header and translate UI strings
- Add search/filter UI for publications (client-side filtering already year-based)
- Write migration notes from Hugo/Quarto to this stack; archive old Netlify config
