# Beheld Site

Marketing and support website for [Beheld](https://apps.apple.com/app/idXXXXXXXX),
an iOS 26+ milestone-tracking app.

## Stack

- Static HTML/CSS/JS — no build step, no framework
- Hosted on Cloudflare Pages (output directory: `public`)
- Domain: beheld.day (Cloudflare Registrar)
- Auto-deploys from `main` branch

## Local development

Open `public/index.html` in a browser, or:

    cd public && python3 -m http.server 8000

## Structure

- `public/` — site root (Cloudflare Pages output directory)
  - `index.html` — manifesto landing page
  - `privacy.html`, `terms.html`, `support.html`, `licenses.html` — secondary pages
  - `base.css` — shared stylesheet and design tokens (edit brand values here)
  - `share-plate.js` — sprite animation for the home page Send section
  - `robots.txt` — currently blocks all indexing (pre-launch)
- `public/assets/` — images and the share sprite

## Deploy

Push to `main`. Cloudflare Pages builds and deploys automatically.
