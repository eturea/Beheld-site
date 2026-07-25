---
status: done
severity: P3
opened: 2026-07-02
closed: 2026-07-25
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

- [x] Unique-content pass documented (nothing production folded, or list what was).
- [x] Directory relocated to `~/my_works/_old_stuff/`; no dangling references from `Beheld-site`.

---

## Resolution

Closed **2026-07-25** as **already done** — the relocation had happened before
this ticket was ever migrated here, and the ticket simply outlived the work.

`~/my_works/Beheld-web-page` no longer exists. The tree was moved on
**2026-07-05** to:

```
~/my_works/_archive/beheld-superseded/Beheld-web-page
```

That is three days *before* the 2026-07-08 PLAN-TIME Phase 0 migration that
brought this ticket into the site repo, so the migration carried over an
already-satisfied ticket and nobody caught it.

### Destination differs from the proposed action (equivalent outcome)

Step 2 proposed `~/my_works/_old_stuff/Beheld-web-page`. The actual home is
`~/my_works/_archive/beheld-superseded/Beheld-web-page`, because `_old_stuff/`
has itself since been reorganized underneath `_archive/` (now
`~/my_works/_archive/_old_stuff/`, and it holds Receipts/YNAB-era material, not
Beheld material). The web-page tree instead landed in the purpose-named
`_archive/beheld-superseded/`, next to `Beheld_Local-salvage`. Same intent —
out of `~/my_works/` top level, retained as history — in a better-sorted place.

### Integrity verified

The archived tree is complete: **52 files**, a plain directory with **no `.git`**
(so no repository history was stranded by the move). Everything the
unique-content check called out as design history is present:

- all five proposals — `01-editorial/`, `02-companion/`, `03-gallery/`,
  `04-manifesto/`, `05-conventional/`, each with its `index.html`
- `prototype-review/06-synthesis.html`
- `WEB_DESIGNER_SPEC.md`, `README.md`, `_shared/`

**Nothing was folded into `Beheld-site`.** The re-confirmation in step 1 holds:
the proposals carry placeholder App Store links, and all live copy, legal,
support, and press content already exists in `public/`. The archived material is
rationale, not production content.

### No dangling references

`grep -rn "Beheld-web-page"` across the site repo returns only this ticket's own
text and its generated copy in `tickets.json`. No page, stylesheet, script, or
tool refers to the old path.

### Related

The sibling cleanup — deleting the superseded `04_press_kit/` copy of the press
page from this repo's root — was done 2026-07-25 under
`TICKET_SITE_SYNC_CURRENT_VERSION` (commit `e4ed031`).
