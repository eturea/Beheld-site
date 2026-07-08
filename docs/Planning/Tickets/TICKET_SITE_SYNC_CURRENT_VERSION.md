---
status: open
severity: P2
opened: 2026-07-02
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

- [ ] privacy.html / terms.html reviewed against v1.1.1–v1.1.2 features; Effective date bumped if copy changed.
- [ ] Press-kit + landing screenshots confirmed to show the v1.1.2 Atlas timeline UI (or re-exported).
- [ ] App Store link + feature copy verified current.
- [ ] Commit references this ticket ID.
