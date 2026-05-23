# Beheld Site

Marketing and support website for [Beheld](https://apps.apple.com/app/idXXXXXXXX),
an iOS 26+ milestone-tracking app.

## Stack

- Static HTML/CSS hosted on Cloudflare Pages
- Domain: beheld.app (Cloudflare Registrar)
- Auto-deploys from `main` branch

## Local development

Open `public/index.html` in a browser, or:

    cd public && python3 -m http.server 8000

## Structure

- `public/` — site root (Cloudflare Pages output directory)
- `public/legal/` — privacy policy, terms
- `public/assets/` — images, videos, icons

## Deploy

Push to `main`. Cloudflare Pages builds and deploys automatically.
