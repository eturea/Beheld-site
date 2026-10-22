# CLAUDE.md

## Project

Marketing and support website for **Beheld** (iOS milestone-tracking journal app,
`~/projects/beheld/app`). Static site, served from `public/` via GitHub Pages —
no build step, no framework, no Xcode tooling. The app repo's `CLAUDE.md`
carries the app-side context; this repo is site content only.

## Work tracking

Since 2026-10-21 the site's work is tracked as **GitHub issues in the app's private repo,
`eturea/Beheld`, with Area = Site**, on the Work Project
(https://github.com/users/eturea/projects/4). This repo is public, so its issues would be too; file
site work there instead, with its Project fields:
`python3 ~/projects/workbench/tracker/issue.py new --repo eturea/Beheld --area Site ...`.
A commit or PR here closes it with `Fixes eturea/Beheld#N`.

`docs/Planning/Tickets/` is the archive: `done/` and `wontfix/` keep the closed site tickets.
`tickets.json` is frozen, and `tools/regenerate-tickets-json.py` no longer runs.
