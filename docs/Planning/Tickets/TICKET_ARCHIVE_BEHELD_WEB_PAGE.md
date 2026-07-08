---
status: open
severity: P3
opened: 2026-07-02
title: Archive the superseded Beheld-web-page proposals directory
area: site
effort: evening
risk: low
---

# TICKET — Archive the superseded Beheld-web-page proposals directory

**Priority:** P3 — housekeeping; removes a duplicate/confusing site source.
**Area:** site — canonical site is this repo (`~/my_works/Beheld-site`); `~/my_works/Beheld-web-page` is the archive candidate.
**Migrated:** 2026-07-08 from the Beheld app repo (`docs/Planning/Tickets/TICKET_ARCHIVE_BEHELD_WEB_PAGE.md`, opened 2026-07-02) as part of the PLAN-TIME Phase 0 rule reversal — site tickets now live in the site repos. Original closed with a pointer (`TICKET_ARCHIVE_BEHELD_WEB_PAGE_MIGRATED.md` in the app repo's `wontfix/`). Full original history preserved below.

---

## Problem

`~/my_works/Beheld-web-page` is a **design-exploration** repo, not a deployable site: per its own `README.md` it holds "Five distinct single-page landing-site proposals" (`01-editorial/`, `02-companion/`, `03-gallery/`, `04-manifesto/`, `05-conventional/`) plus a `prototype-review/` and `WEB_DESIGNER_SPEC.md`. The live site (`~/my_works/Beheld-site`) already shipped the **manifesto** direction (Beheld-site commit "Ship manifesto landing page + legal/support pages"). Keeping the proposals tree alongside the real site invites confusion about which is canonical.

## Unique-content check (done)

- The proposals' App Store links are **placeholders** (`<a id="app-store-link" href="#">`, per the repo README) — nothing production-ready.
- All live copy, legal, support, and press content already exists in `Beheld-site/public/`.
- The only non-duplicated material is **design history**: the four non-chosen directions, `prototype-review/06-synthesis.html`, and `WEB_DESIGNER_SPEC.md`. Valuable as rationale, but not production content the live site needs.

## Proposed action

1. Re-confirm nothing unique is worth folding into `Beheld-site` (the design docs are history, not production copy).
2. Move `~/my_works/Beheld-web-page` → `~/my_works/_old_stuff/Beheld-web-page` (the `_old_stuff/` archive already exists).

## Acceptance

- [ ] Unique-content pass documented (nothing production folded, or list what was).
- [ ] Directory relocated to `~/my_works/_old_stuff/`; no dangling references from `Beheld-site`.
