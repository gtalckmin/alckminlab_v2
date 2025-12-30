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

---

## Recent Updates (Dec 2025)

### Dependency Upgrades
| Package | Old | New |
|---------|-----|-----|
| `next` | ^14.x | ^16.1.1 |
| `@sanity/client` | ^6.8.3 | ^7.13.2 |
| `eslint` | ^8.56.0 | ^9.39.2 |
| `eslint-config-next` | ^14.x | ^16.1.1 |
| `sanity` | — | ^4.22.0 |
| `next-sanity` | — | ^11.6.12 |

### New Files & Features
- **Single Post Page**: `app/blog/[slug]/page.tsx` — renders individual blog posts fetched via `fetchPostBySlug()`
- **Video Player Component**: `components/video-player.tsx` — client-side wrapper for `react-player`
- **Sanity Studio Integration**: embedded at `/studio` using `next-sanity/studio`
- **Sanity CLI scaffolding**: `sanity/` directory with `env.ts`, `lib/`, `schemaTypes/`, `structure.ts`
- **About Page**: `app/about/page.tsx` — displays profile, skills, education, and experience
- **Projects Page**: `app/projects/page.tsx` — displays research and development projects
- **New Sanity Schemas**: `skill.ts`, `education.ts`, `experience.ts`, `project.ts`
- **Migration Data**: `scripts/migration-data.ts` — extracted content from Hugo site for Sanity import
- **Enhanced Profile Schema**: added fields for nickname, greeting, designation, company, summaryPoints, email, resume

### Configuration Changes
- `next.config.mjs`: removed unsupported `experimental.turbo` and `i18n` blocks for App Router compatibility
- `sanity.config.ts`: now imports `projectId` and `dataset` from `sanity/env.ts` (uses `NEXT_PUBLIC_*` env vars)
- `tsconfig.json`: excludes `sanity/` directory from type-checking to avoid circular reference errors
- `.env.example`: sanitized (no real tokens); use `.env.local` for actual secrets

### Security
- **Token rotation required**: API token was previously exposed in git history; rotate in [sanity.io/manage](https://sanity.io/manage)
- Git history rewritten to remove the leaked commit; collaborators should `git fetch && git reset --hard origin/main`

---

## Content Workflow

### Creating Blog Posts
1. Start the dev server: `npm run dev`
2. Open **Sanity Studio** at `http://localhost:3000/studio`
3. Log in with your Sanity account (Google/GitHub)
4. Click **Post** in the sidebar → **Create** (pencil icon)
5. Fill in Title, Slug (click Generate), Date, Body
6. Click **Publish**

Posts appear automatically on `/blog` and the homepage "Latest News" section.

### Creating Other Content
| Content Type | Studio Location | Displays On |
|--------------|-----------------|-------------|
| Profile | Profiles | Homepage hero, `/about` |
| Skill | Skills | `/about` |
| Education | Education | `/about` |
| Experience | Experiences | `/about` |
| Project | Projects | `/projects` |
| Publication | Publications | `/publications` |
| Video | Videos | `/videos` |
| Post | Posts | `/blog`, homepage |

---

## Known Issues / TODO

- [x] `@portabletext/react` — already installed via `next-sanity` (v6.0.0)
- [x] Content migration from Hugo — data extracted to `scripts/migration-data.ts`
- [x] About page with skills, education, experience
- [x] Projects page
- [ ] Sanity image builder not wired up — `mainImage` shows placeholder; use `@sanity/image-url` to generate URLs
- [ ] i18n removed from Next config — implement App Router internationalization pattern if needed
- [ ] No dynamic OG images yet — consider `@vercel/og` for social sharing previews
- [ ] Studio auth: currently open to logged-in Sanity users; consider Vercel password protection for production
- [ ] Import migration data into Sanity (run `scripts/migration-data.ts` → NDJSON → `sanity dataset import`)

---

## Tech Stack Summary

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, Turbopack) |
| CMS | Sanity v4 (embedded Studio at `/studio`) |
| Styling | Tailwind CSS 3.4 + custom design tokens |
| Data Fetching | `next-sanity` + GROQ queries |
| Video | `react-player` (client component) |
| Analytics | Vercel Analytics |
| Deployment | Vercel |
