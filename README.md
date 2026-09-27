# Alckmin Lab

The current Alckmin Lab website: an academic profile for research, projects,
publications, and blog updates.

- **Production site:** <https://alckminlab.org/>
- **Source repository:** <https://github.com/gtalckmin/alckminlab_v2>
- **Framework:** Next.js App Router, React, and TypeScript
- **Content management:** Sanity; its Studio is embedded at `/studio`
- **Styling:** Tailwind CSS

The production site is live at the URL above. The project roadmap names Vercel
as the deployment target, but this repository does not include a Vercel project
configuration or deployment workflow. Confirm the connected Vercel project,
production branch, and custom-domain assignment in the Vercel dashboard before
changing deployment settings.

## Getting started

### Requirements

- Node.js compatible with the version of Next.js in `package.json`
- npm
- Sanity project credentials for CMS-backed content and the embedded Studio

### Install and run locally

Run these commands from this directory (`alckminlab-v2`):

```bash
npm ci
cp .env.example .env.local
# Fill in the Sanity settings described below.
npm run dev
```

Open <http://localhost:3000>. The Sanity Studio is at
<http://localhost:3000/studio>.

To make a production build and run it locally:

```bash
npm run build
npm run start
```

When `SANITY_PROJECT_ID` is set, site pages read published Sanity documents;
Sanity drafts are not reflected on the local site unless preview support is
explicitly added. Without it, pages that define fallbacks use local data. The
About page includes all 56 credentials supplied in the LinkedIn profile export;
the raw LinkedIn export is intentionally kept out of the public source repository.
For CMS-backed content and Studio, configure the Sanity variables below.

### Environment variables

Create `.env.local` from `.env.example`. Keep credentials out of source
control; `.env.local` is ignored by Git. The application currently uses both
server-side and `NEXT_PUBLIC_` Sanity settings:

| Variable | Purpose |
| --- | --- |
| `SANITY_PROJECT_ID` | Enables the server-side Sanity client used to fetch site content. |
| `SANITY_DATASET` | Dataset for server-side content queries; defaults to `production` in the code. |
| `SANITY_API_VERSION` | API version for server-side queries; defaults to `2023-01-01`. |
| `SANITY_API_READ_TOKEN` | Optional server-only read token, if the dataset requires authenticated reads. Do not rename this with a `NEXT_PUBLIC_` prefix. |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID used by the embedded Studio. |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset used by the embedded Studio. |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Optional API version used by Studio; defaults to `2025-12-27`. Add it to `.env.local` if you need to override the code default. |

The two project ID and dataset pairs are consumed separately by the current
server client and Studio configuration. Set both pairs to the same Sanity
project and dataset. Values prefixed with `NEXT_PUBLIC_` are included in
browser-facing code and must never contain secrets.

## Project map

| Path | What lives there |
| --- | --- |
| `app/` | App Router pages and global styles. Routes include `/`, `/about`, `/projects`, `/publications`, `/blog`, `/blog/[slug]`, `/contact`, and `/studio`. |
| `components/` | Shared UI, including the site header. |
| `lib/sanity.ts` | Sanity client, GROQ projections, and content-fetching helpers. |
| `lib/types.ts` | TypeScript types for CMS content. |
| `sanity/schemas/` | Sanity document schemas for profile, projects, publications, posts, and related content. |
| `sanity.config.ts`, `sanity/` | Embedded Studio setup and supporting configuration. |
| `scripts/migration-data.ts` | Extracted migration content from the previous site; it is not wired to an npm import command. |
| `public/` | Static assets served by Next.js. |
| `ROADMAP.md` | Project notes and planned work. |

The older `alckminlab/` project beside this directory is a separate site
codebase. Make changes to this project from `alckminlab-v2` unless you
intentionally mean to update the older site.

## Content editing

1. Start the development server and open `/studio`.
2. Sign in with an account that has access to the configured Sanity project.
3. Edit and publish the relevant document type.

| Sanity document | Main site location |
| --- | --- |
| Profile, skills, education, experience | Home and About |
| Project | Projects |
| Publication | Publications and homepage highlight |
| Post | Blog and homepage news |

Schemas are under `sanity/schemas/`; query projections and fetch helpers are in
`lib/sanity.ts`. When changing CMS fields, update the schema, relevant query,
TypeScript type, and page/component that consumes the field together.

## Development notes for agents and contributors

- Start with the existing route, component, schema, and fetch helper before
  introducing a new pattern. Keep page-specific UI in `app/` and reusable UI
  in `components/`.
- The visual system is editorial and research-focused: warm paper backgrounds,
  botanical green accents, serif display headings, and restrained card
  treatments. Shared design tokens and responsive component styles live in
  `app/globals.css`; Tailwind color and font configuration lives in
  `tailwind.config.js`. Reuse classes such as `page-heading`, `page-title`,
  `content-card`, `tag`, and `text-link` to keep new routes consistent.
- For content-backed UI, use the existing Sanity helpers in `lib/sanity.ts`
  and types in `lib/types.ts`. Keep appropriate fallbacks where a page already
  has them; do not assume every page has the homepage fallback behavior.
- Keep secrets in `.env.local` or the deployment environment, never in source,
  commits, screenshots, or logs.
- This project currently uses the Next.js App Router. The former i18n config
  was removed; localized routes and a locale switcher are not implemented.
- Before handing off a change, run the production build. The package also
  defines `npm run lint`; if it fails, report the failure rather than treating
  a successful build as proof that lint passed.

Useful commands:

```bash
npm run dev       # Local Next.js app and embedded Studio
npm run build     # Production build
npm run start     # Serve the production build locally
npm run lint      # Run the configured lint script
```

## Deployment

The public production address is <https://alckminlab.org/>. The roadmap names
Vercel as the deployment target and describes the standard Next.js build
(`npm run build`); verify the actual project connection and deployment settings
in Vercel before relying on them. Configure the Sanity environment variables
above in the deployment environment as well as locally. Changes to
`NEXT_PUBLIC_` variables require a new build.

The embedded Studio is available at `/studio` in the app. Studio access depends
on Sanity authentication and project permissions; review access controls before
making changes to production CMS configuration.
