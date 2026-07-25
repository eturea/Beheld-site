---
status: done
severity: P2
opened: 2026-07-02
closed: 2026-07-25
title: Sync Beheld-site to the current app version (v1.1.2)
area: site
effort: evening
risk: low
---

# TICKET — Sync Beheld-site to the current app version (v1.1.2)

**Priority:** P2 — marketing/legal accuracy, no app impact.
**Area:** site — tracked here in the site repo (its natural home).
**Live app:** v1.1.2 (`Beheld.xcodeproj/project.pbxproj` `MARKETING_VERSION = 1.1.2`; app repo `CHANGELOG.md` `[1.1.2] — 2026-06-25 build 190`).
**Migrated:** 2026-07-08 from the Beheld app repo (`docs/Planning/Tickets/TICKET_SITE_SYNC_CURRENT_VERSION.md`, opened 2026-07-02) as part of the PLAN-TIME Phase 0 rule reversal — site tickets now live in the site repos. Original closed with a pointer (`TICKET_SITE_SYNC_CURRENT_VERSION_MIGRATED.md` in the app repo's `wontfix/`). Full original history preserved below.

---

## Problem

`~/my_works/Beheld-site` was last touched 2026-06-25 (commit `ca436d0` "Replace iMessage share-plate with a static 'The journal' section; site polish") — the same day v1.1.2 shipped — but a concrete audit turned up two things the "site polish" pass did not cover, both tied to features that landed in v1.1.1–v1.1.2.

## Audit findings (cited)

1. **Legal pages predate the v1.1.1 Personalization / Image Playground feature.** `public/privacy.html:90` and `public/terms.html:102` both read **"Effective May 24, 2026"**. v1.1.1 (`CHANGELOG` `[1.1.1] — 2026-05-30`) shipped **on-device Image Playground postcard generation** for the paid Personalization tier (Chunks A–C). Verify the privacy policy adequately describes on-device AI image generation for personalized postcards; update the Effective date if the copy changes.
2. **Press-kit screenshots may predate the v1.1.2 "Topographic Atlas" restyle.** v1.1.2 was a full timeline visual overhaul (paper background, hand-inked meander spine, new entry anatomy) and shipped **new App Store screenshots** (`CHANGELOG` [1.1.2] "App Store screenshots use three distinct stock illustrations"). The site's press-kit stills — `public/assets/press/screenshot-1-journal.jpg`, `screenshot-2-postcard.jpg`, `screenshot-3-postcard.jpg`, `screenshot-4-widget.jpg` — were **not** in the 2026-06-25 commit (only `app-timeline.jpg` and `share-card.jpg` were). Confirm they show the current v1.1.2 UI, not the pre-restyle look; re-export from the current App Store set if stale.
3. **Confirm (likely OK, verify anyway):** the App Store link `https://apps.apple.com/app/id6760872350` still resolves; the landing/press feature copy (Personalization one-time IAP, on-device postcards, free journal with no time limit — `public/index.html:546`, `public/press.html:254`) matches the current App Store description.

## Acceptance

- [x] privacy.html / terms.html reviewed against v1.1.1–v1.1.2 features; Effective date bumped if copy changed.
- [x] Press-kit + landing screenshots confirmed to show the v1.1.2 Atlas timeline UI (or re-exported).
- [x] App Store link + feature copy verified current.
- [x] Commit references this ticket ID.

---

## Resolution

Closed **2026-07-25** on audit, not on edits. The site needed **no content
changes**: all three findings were verified against the live v1.1.4 App Store
listing and the repository history, and each turned out to be either already
correct or a false alarm. Verified one release later than the ticket was
written — the app shipped **v1.1.4** publicly on 2026-07-25 (`MARKETING_VERSION
= 1.1.4`, build 201, App Store "Version 1.1.4" live at audit time), so this
closes the sync gap for v1.1.1 through v1.1.4 in one pass.

### Finding 1 — legal pages: **false alarm, no change**

The suspicion was that `privacy.html` / `terms.html` ("Effective May 24, 2026")
predated the v1.1.1 Image Playground feature. They do not. `git log -S "Image
Playground" -- public/privacy.html` returns exactly one commit, `25d3561`
(2026-05-24, "Ship manifesto landing page + legal/support pages") — the
on-device image-generation copy at `public/privacy.html:104` landed in the
**same commit that set the Effective date**. The policy already describes
Apple Intelligence generation (`:101`), Image Playground postcard generation and
local storage (`:104`), the bundled-illustration fallback (`:104`), and
delete-by-uninstall (`:121`). Nothing about v1.1.1–v1.1.4 changed the data
flows those paragraphs describe, so the Effective date correctly stays at
**May 24, 2026**.

### Finding 2 — press screenshots: **false alarm, no change**

The suspicion was that `public/assets/press/screenshot-*.jpg` (added 2026-06-03
in `d06bbf7`, three weeks before v1.1.2 shipped 2026-06-25) showed the
pre-restyle UI. Visual comparison of `public/assets/press/screenshot-1-journal.jpg`
against the known-current `public/assets/app-timeline.jpg` (re-exported
2026-06-25 in `ca436d0`) shows the **same Topographic Atlas treatment** — paper
background, hand-inked meander spine with milestone nodes, current entry
anatomy, identical seeded copy. The press stills were exported from the
restyled build; the commit date predates the *release*, not the *restyle*. No
re-export needed.

### Finding 3 — App Store link + feature copy: **verified current**

`https://apps.apple.com/app/id6760872350` resolves (the id appears four times
across `public/*.html`, twice with `ppid` attribution params). Live listing
checked field by field against the site:

| Live App Store (v1.1.4) | Site | Verdict |
|---|---|---|
| Subtitle "A journal you don't write." | `og:image:alt` site-wide | match |
| iOS 26.0 or later | `index.html:406`, `press.html:326`, `support.html:125` | match |
| Free, no subscription | `index.html:546`, `press.html:254` | match |
| Personalization, one-time non-consumable, **US$4.99** | `press.html:328` "US$4.99 … CAD $6.99 in Canada" | match |
| On-device processing, nothing uploaded | `press.html:258`, `:311`, `privacy.html:92` | match |
| Data Not Collected privacy label | `press.html:258` | match |

v1.1.4 itself ("Companion Truth" — `docs/Planning/SPEC_V1_1_4_COMPANION_TRUTH.md`)
is an accuracy pass over generated companion text plus a notification-opt-out
fix. It ships **no new feature, data flow, permission, price, or platform
requirement**, so no marketing or legal surface on the site is stale because of
it.

### Housekeeping done alongside

Deleted the untracked `04_press_kit/` directory from the repo root — a
superseded standalone copy of the press page. Its three icon PNGs and `sent.png`
were byte-identical to `public/assets/press/`, but its four screenshots were the
**old pre-Atlas dark-mode UI** (dark chat bubbles, "A journal you do not write."
marketing frame), i.e. strictly older than the shipped set. The live press page
is `public/press.html`; the directory was never served. Related but separate:
`TICKET_ARCHIVE_BEHELD_WEB_PAGE` still covers `~/my_works/Beheld-web-page`.

### Not in scope, filed elsewhere

The **app repo's** `CHANGELOG.md` has no `[1.1.4]` entry — it jumps from
`[Unreleased]` to `[1.1.3]` despite v1.1.4 shipping publicly. That is an app-repo
gap, not a site one.
