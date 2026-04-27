# omar-sadek.github.io

Personal portfolio of **Omar Sadek** — Gameplay Programmer.
Built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.
Deployed to **GitHub Pages** as a fully static export.

Live site → https://omar-sadek.github.io

---

## Editing content

All copy lives in **one place**: [`lib/data.ts`](./lib/data.ts).

Edit that file to change anything in the site:

| What you want to change | Where in `lib/data.ts` |
| --- | --- |
| Name, role, tagline, bio, contact info, resume link, socials | `profile` |
| Work experience entries (Genesis, Largelabs, etc.) | `experience` |
| Featured projects | `projects` |
| Open-source repositories | `repositories` |
| Articles / writing | `articles` |
| Skills bars | `skills` |
| Languages | `languages` |
| Education | `education` |
| Top navigation links | `navLinks` |

Images go in `public/`. Reference them from `data.ts` as `/yourimage.jpg`.

### Resume (Google Drive / PDF)

- [`RESUME.md`](./RESUME.md) — Markdown source (good for Git; **do not paste from Cursor into Google Docs** — it often becomes a code block).
- [`RESUME_PLAIN_FOR_GOOGLE_DOCS.txt`](./RESUME_PLAIN_FOR_GOOGLE_DOCS.txt) — open in **Notepad**, copy, paste into Google Docs (normal text).
- [`public/resume-print.html`](./public/resume-print.html) — open in a browser, select all, copy, paste into Docs for quick layout.
- [`GOOGLE_DOCS_PASTE_INSTRUCTIONS.txt`](./GOOGLE_DOCS_PASTE_INSTRUCTIONS.txt) — why the code block happens and how to fix it.

---

## Local development

Requires Node.js 18+ (LTS recommended).

```bash
npm install      # first time only
npm run dev      # start dev server at http://localhost:3000
```

Hot reload is on. Edit any file and the browser refreshes automatically.

To produce a production build locally:

```bash
npm run build    # outputs the static site into ./out
```

You can preview the static export with any local web server, e.g.:

```bash
npx serve out
```

---

## Deployment

Deployment is automated via **GitHub Actions** (`.github/workflows/deploy.yml`).
Every push to the `main` branch:

1. Installs dependencies
2. Runs `npm run build` (Next.js static export → `./out`)
3. Publishes `./out` to GitHub Pages

You don't need to run anything locally to deploy — just commit and push.

### One-time GitHub Pages setup

In the repository settings → **Pages** → **Build and deployment**, set:

- **Source**: `GitHub Actions`

That's it. The workflow handles the rest.

---

## Project structure

```
.
├── app/                     # Next.js App Router pages
│   ├── layout.tsx           # Root layout (nav, footer, fonts)
│   ├── page.tsx             # Home (hero + previews)
│   ├── globals.css          # Tailwind v4 theme tokens & utilities
│   ├── work-experience/     # /work-experience
│   ├── projects/            # /projects
│   ├── about/               # /about
│   └── contact/             # /contact
├── components/              # Reusable UI building blocks
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── ExperienceCard.tsx
│   ├── ProjectCard.tsx
│   ├── RepositoryCard.tsx
│   ├── SectionHeader.tsx
│   ├── TechTag.tsx
│   └── Icons.tsx
├── lib/
│   └── data.ts              # ⭐ Single source of truth for all content
├── public/                  # Static assets (images, etc.)
├── .github/workflows/       # CI/CD (GitHub Pages deploy)
├── next.config.mjs
├── tailwind.config / @theme in globals.css
├── tsconfig.json
└── package.json
```

---

## Theme tokens

Defined in [`app/globals.css`](./app/globals.css) under `@theme`. The
accent color (`--color-accent`) is what controls every cyan highlight on
the site. Change it once, every link, button border, and bullet updates.
