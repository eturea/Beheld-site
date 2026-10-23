# CLAUDE.md

## Project

Marketing and support website for **Beheld** (iOS milestone-tracking journal app,
`~/projects/beheld/app`). Static site, served from `public/` via GitHub Pages —
no build step, no framework, no Xcode tooling. The app repo's `CLAUDE.md`
carries the app-side context; this repo is site content only.

## Work tracking

Work for this site is filed in `eturea/Beheld` with Area = Site, on the Work Project
(https://github.com/users/eturea/projects/4); nothing is filed here. `docs/Planning/Tickets/` is
the archive.

Each issue gets its own branch from `main` (`gh ticket start N --worktree`, a neutral slug, never
the title) and lands by one PR into `main` from `gh ticket pr N`, whose body says
`Fixes eturea/Beheld#N` and what changed in the site. The session merges it with
`gh ticket merge N` after a clean review and green checks. Nobody commits on `main`: the
`pre-commit`, `pre-push` and `reference-transaction` git hooks are the authority, the Claude
`git-policy` hook the early warning.
