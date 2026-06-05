# Cevdet Batuhan Isik — Personal Website

A single-page personal portfolio built with Next.js. Bold/modern dark "Amber Glow" theme,
JetBrains Mono + Inter typography, and scroll-driven animations.

**Sections:** Hero · About · Experience · Projects · Skills · Contact

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animations

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Editing content

All résumé content (bio, experience, projects, skills, links) lives in
[`lib/data.ts`](lib/data.ts) — edit there and every section updates.

- **Photo:** `public/profile.jpg`, referenced via `profile.photo` in `lib/data.ts`.
- **Resume:** `public/resume.pdf` (served by the Download Resume buttons).

## Contact form (Formspree)

The contact form posts to [Formspree](https://formspree.io). To enable it:

1. Create a free form at formspree.io and copy its form ID (the part after `/f/`).
2. Create `.env.local`:

   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id
   ```

Without this, the form gracefully falls back to opening the visitor's email client.

## Deployment

Deploys to [Vercel](https://vercel.com): import the GitHub repo, add the
`NEXT_PUBLIC_FORMSPREE_ID` environment variable, and deploy.
