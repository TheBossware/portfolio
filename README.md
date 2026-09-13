# Ahmet Tarık Bostan — Portfolio

Personal portfolio & digital CV built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Vercel auto-detects Next.js — just click Deploy. No config needed.

## Editing your content

**Everything you'll want to change lives in one file:** `app/content.ts`

- `profile` — name, email, links (⚠️ replace the placeholder GitHub & LinkedIn URLs)
- `automation` — your n8n services
- `projects` — add / edit / reorder your work
- `skills` — your toolkit

The CV PDF is at `public/Ahmet_Tarik_Bostan_CV.pdf` — replace it to update the download.

## Notes

- `Integrated Safety Database` and the banking work are marked as confidential client work — no internal
  screenshots or data are shown, only role, responsibilities, and tech. Keep it that way
  unless you have written permission.
- Fonts (Fraunces / Inter / JetBrains Mono) are pulled from Google Fonts at build time.
