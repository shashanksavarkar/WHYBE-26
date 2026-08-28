# WHYBE'26 — Design Specification

**Event:** WHYBE'26 — An AI-Driven Hackathon
**Organizer:** TechnoCrats GSV
**Tagline:** First time in GSV
**Duration:** 10 hours
**Team size:** 4 members
**Registration fee:** ₹80

This document specifies the visual design system and page-by-page content structure for the WHYBE'26 site: `Home`, `About`, `Leaderboard`, `Timeline`, `Code of Conduct`, `Privacy Policy`, `Terms & Conditions`, plus a global `Header` and `Footer`.

---

## 1. Reference & Direction

Structural inspiration: [hackaton-ux.webflow.io](https://hackaton-ux.webflow.io/) — single-page vertical scroll, section-based storytelling, generous whitespace, minimal chrome, content-first hierarchy, grid photo galleries with captions, text-link CTAs.

Visual identity diverges from that reference on purpose: WHYBE'26 already ships a **dark, neon-tech, glassmorphism** aesthetic in `index.html` (Material-3-style color tokens, animated gradient/glow text, glass cards) that fits an "AI-driven hackathon" brand better than the reference's flat editorial-brutalist look. This spec **keeps the structural discipline** of the reference (clear sections, whitespace, minimal nav, scannable content blocks) and **keeps the existing visual system** (dark surface, lime/periwinkle accents, glass cards, glow/gradient motion) as the site's actual skin. All new pages must extend the existing Tailwind config in `index.html` rather than introduce a second design language.

**Mood keywords:** dark, technical, AI-forward, high-contrast, glowing, minimal-but-energetic, data-forward (mono type for labels/stats).

---

## 2. Color System

Source of truth: the `tailwind.config` block already in `index.html`. Reuse these tokens — do not hardcode new hex values in page markup.

| Token | Hex | Usage |
|---|---|---|
| `background` / `surface` / `surface-dim` | `#051424` | Page background (floor level) |
| `surface-container-lowest` | `#010f1f` | Deepest recess (e.g. code blocks, table zebra) |
| `surface-container-low` | `#0d1c2d` | Card background (subtle) |
| `surface-container` | `#122131` | Card background (default) |
| `surface-container-high` | `#1c2b3c` | Elevated card / modal |
| `surface-container-highest` / `surface-variant` | `#273647` | Highest elevation, dividers |
| `surface-bright` | `#2c3a4c` | Hover surfaces |
| `on-background` / `on-surface` | `#d4e4fa` | Primary body text on dark |
| `on-surface-variant` | `#c7c4d7` | Secondary/muted text |
| `outline` | `#908fa0` | Borders, dividers |
| `outline-variant` | `#464554` | Subtle borders |
| `primary` | `#c0c1ff` | Primary accent (periwinkle) — links, icons, focus rings |
| `primary-container` | `#8083ff` | Primary buttons (filled) |
| `on-primary` | `#1000a9` | Text on filled primary buttons |
| `secondary` | `#ffffff` | High-emphasis white text/accents |
| `secondary-container` | `#c3f400` | Lime accent — CTA highlight, glow-pulse text, badges |
| `on-secondary-container` | `#556d00` | Text on lime chips (light-on-lime alt) |
| `tertiary` / `tertiary-fixed-dim` | `#bec6e0` | Tertiary accents, muted UI chrome |
| `error` | `#ffb4ab` | Error/destructive states |
| `error-container` | `#93000a` | Error banner background |

**Gradient/glow utilities already defined (reuse, don't redefine):**
- `.text-gradient` / `.text-gradient-animated` — periwinkle → lime animated gradient text, for hero headlines and major section titles.
- `.glow-pulse-text` — pulsing lime text-shadow, for single high-emphasis words (e.g. "Coming Soon", countdown numbers, "LIVE").
- `.glass-card` — translucent surface + blur + hairline border, the default card treatment site-wide (About team cards, leaderboard rows, timeline nodes, rule callouts).
- `.glow-effect` — soft indigo box-shadow, for cards/buttons that need to feel "active" (top-3 leaderboard, current timeline step).

Rank accent colors (new, additive — for Leaderboard only):
| Rank | Color |
|---|---|
| 1st | `#FFD700` (gold) — pair with `.glow-effect` |
| 2nd | `#C0C0C0` (silver) |
| 3rd | `#CD7F32` (bronze) |

---

## 3. Typography

| Token | Font | Size / Line-height | Weight | Usage |
|---|---|---|---|---|
| `display-lg` (desktop) / `display-lg-mobile` | Geist | 64/72px · 40/48px | 800 | Hero headline, page H1 |
| `headline-md` | Geist | 32/40px | 700 | Section headings (H2) |
| `body-lg` | Inter | 18/28px | 400 | Lead paragraphs, intro copy |
| `body-base` | Inter | 16/24px | 400 | Default body text |
| `label-caps` | Inter | 12/16px, +0.1em tracking | 600 | Eyebrow labels, small uppercase tags ("REGISTRATIONS OPEN") |
| `label-mono` | JetBrains Mono | 14/20px, +0.05em tracking | 500 | Numeric/data UI: leaderboard scores, timestamps, countdown, timeline hours, fee amount |

Font stack loaded via Google Fonts: `Geist` (400/700/800), `Inter` (400/600), `JetBrains Mono` (500). Any new weight needed must be added to the existing `<link>` in `index.html`'s `<head>`, not a second font-loading mechanism.

**Rule of thumb:** Geist = brand/emotion (headlines, glow text). Inter = reading (body, nav, legal pages). JetBrains Mono = data/precision (leaderboard, timeline, countdown, fee, team size, "10hrs").

---

## 4. Spacing, Radius & Grid

| Token | Value |
|---|---|
| `base-unit` | 4px |
| `stack-sm` | 8px |
| `stack-md` | 16px |
| `stack-lg` | 32px |
| `gutter` | 24px |
| `margin-mobile` | 16px |
| `margin-desktop` | 48px |
| `container-max-width` | 1280px |

Border radius: `DEFAULT` 0.125rem, `lg` 0.25rem, `xl` 0.5rem, `full` 0.75rem — intentionally tight/near-square radii (not pill-shaped), reinforcing the technical/precise mood. Glass cards use `xl`; chips/badges use `full`.

Grid: single centered column (`max-w-container-max-width mx-auto`), horizontal padding `px-margin-mobile` on mobile stepping up to `px-margin-desktop` at `md:`. Section vertical rhythm uses `stack-lg` (32px) minimum between sections, more on desktop (e.g. `py-24`/`py-32`) to preserve the reference site's generous-whitespace feel.

---

## 5. Core Components

**Buttons**
- Primary: filled `primary-container` background, `on-primary` text, `xl` radius, glow on hover (`.glow-effect`). Used for "Register Now".
- Secondary: outline (`outline` border, transparent bg, `on-surface` text), hover fills to `surface-container-high`. Used for "Learn More", "View Rules".
- Text-link CTA (reference-site influence): underline-on-hover text links for low-emphasis actions inside body copy (e.g. inline "read the Code of Conduct").

**Cards** — always `.glass-card` as the base. Variants:
- Info card (About, tracks, prizes): icon/eyebrow label + `headline-md` title + `body-base` description.
- Leaderboard row card (mobile): rank badge + team name + score, mono type for the score.
- Timeline node: dot/line marker + `label-mono` timestamp + `body-base` description, current/next step gets `.glow-effect`.
- Team member card (About): square photo, name (`body-lg` bold), role (`label-caps`), socials row.

**Badges/Chips** — `full` radius, `label-caps` text, background = `secondary-container` (lime) for "LIVE"/"OPEN" states, `surface-container-high` for neutral tags ("AI/ML", "Web", "10 HRS", "TEAM OF 4", "₹80").

**Tables (Leaderboard)** — desktop: real `<table>` with sticky header row (`surface-container-lowest`), zebra rows (`surface-container` / `surface-container-low`), rank/team/score/badges columns, mono type for numeric columns. Mobile: collapses to stacked leaderboard row cards (see above) — no horizontal scroll.

**Forms** (if a registration/contact form is added later) — inputs use `surface-container-high` background, `outline-variant` border, `primary` focus ring, `Inter` labels.

---

## 6. Motion & Interaction

Reuse existing keyframes; do not add a competing animation vocabulary.
- `gradient-shift` (4s) → animated brand gradient text.
- `glow-pulse` (2.4s) → single-word emphasis / live countdown digits.
- `float-y` (5s) → small floating emphasis on eyebrow/kicker text only — use sparingly (max 1–2 per page) so it stays a signature moment, not visual noise.
- Hover states: buttons/cards transition `150–200ms ease` on background, border, and shadow (glow-effect fade-in).
- Page/section reveal: simple fade+translate-up on scroll (8–16px, 300ms) is acceptable but optional — do not block content behind JS-only reveals (respect `prefers-reduced-motion`: disable float/pulse/gradient animation loops for users who request reduced motion).

---

## 7. Iconography & Imagery

- Icons: simple line icons (1.5px stroke) in `on-surface-variant`, switching to `primary` or `secondary-container` on hover/active. Keep to a single icon set (e.g. Lucide) for consistency.
- Photography (About team photos, hackathon venue shots): natural/candid, not stock-glossy; if unavailable, use abstract geometric/gradient placeholders in the existing color tokens rather than generic stock photos, to preserve the technical mood.
- Logo: `whybe26-logo.png` used as favicon and header mark — must be re-added to `assets/` (currently missing from the working tree).

---

## 8. Global Header

Sticky, `surface-container-low` background at `85%` opacity + blur (glass treatment) once scrolled; transparent over the hero.

- Left: WHYBE'26 wordmark/logo (links to Home).
- Center/Right nav (desktop, `body-base`, `on-surface` → `primary` on hover/active): Home · About · Timeline · Leaderboard · Code of Conduct.
- Right-most: primary "Register" button (filled, glow on hover).
- Mobile (< md): logo left, hamburger right → full-screen `surface` overlay menu, nav links stacked at `headline-md`-ish size, Register button pinned at bottom.
- Legal pages (Privacy/Terms) are intentionally excluded from primary nav — reachable only via footer, per standard convention.

---

## 9. Global Footer

`surface-container-lowest` background, `outline-variant` top hairline border.

Layout (desktop: 3 columns; mobile: stacked, centered):
1. **Brand column** — WHYBE'26 mark, one-line description ("An AI-driven hackathon by TechnoCrats GSV"), copyright line (`© 2026 TechnoCrats GSV`).
2. **Site links** — Home, About, Timeline, Leaderboard, Code of Conduct.
3. **Legal + Socials** — Privacy Policy, Terms & Conditions, and a socials row with icon links:
   - Instagram → `label-caps` accessible label "Follow on Instagram" (`href` placeholder: `https://instagram.com/whybe26` — replace with real handle)
   - LinkedIn → "Follow on LinkedIn" (`href` placeholder: `https://linkedin.com/company/whybe26`)
   - Website → globe icon linking to canonical domain `https://whybe.tech` (from `CNAME`)

Social icons: `outline`/`on-surface-variant` default, `primary` on hover, 40×40px tap target minimum for mobile accessibility.

---

## 10. Page Specifications

### 10.1 Home
1. **Hero** (already implemented) — "TechnoCrats GSV Presents" kicker (float animation) → "WHYBE'26" animated gradient title → "Coming Soon!" glow-pulse line. On launch, extend hero with: date/venue line (`body-lg`), and two CTAs — "Register Now" (primary) + "Learn More" (secondary, scrolls to About/Timeline anchor).
2. **Quick facts strip** — 4 chip/stat cards in a row (stack on mobile): `AI-Driven` · `10 Hours` · `Team of 4` · `₹80 Fee`. Mono type for the numbers, `label-caps` for the labels.
3. **Why WHYBE'26 / Highlights** — 3–4 `.glass-card` info cards (e.g. "First time in GSV", "AI-first challenge tracks", "Mentors & workshops", "Prizes & swag").
4. **Timeline teaser** — condensed 3–4 step preview of the Timeline page with a "View full timeline →" text link.
5. **Leaderboard teaser** (post-event) — top 3 teams preview card with "View full leaderboard →" link; hidden/placeholder pre-event.
6. **Final CTA band** — full-width gradient/glow band restating registration deadline + fee + Register button.

### 10.2 About
1. Header block — `headline-md` "About WHYBE'26", `body-lg` mission paragraph (what/why: AI-driven hackathon, first at GSV, community goal).
2. Story/context section — organizer intro (TechnoCrats GSV), 2–3 paragraphs, `body-base`.
3. Event facts recap — same chip row as Home (duration, team size, fee) for users landing here directly.
4. **Organizing team grid** — responsive grid (4 cols desktop → 2 → 1) of team member cards (photo, name, role, socials), replacing the previously-deleted `team-1..4.jpg` assets.
5. Optional stats band (`label-mono` big numbers): expected participants, prize pool, tracks, hours.

### 10.3 Leaderboard
1. Header — `headline-md` "Leaderboard", status badge: `Registrations Open` / `Live` / `Final Results` (lime badge when live).
2. Top-3 podium cards (desktop: 3-up highlighted row with gold/silver/bronze accents + `.glow-effect` on rank 1; mobile: stacked, still visually ranked).
3. Full ranking — table on desktop (rank, team, score/points, track badge), stacked glass-card rows on mobile.
4. Empty/pre-event state — friendly placeholder card: "Leaderboard goes live on hackathon day — check back after doors open." with countdown in `label-mono`.

### 10.4 Timeline
1. Header — `headline-md` "Timeline", subtitle noting total duration ("10 hours, start to finish").
2. **Vertical stepper** running down the center (desktop) / left-aligned (mobile): a glowing gradient line connecting timestamped nodes. Two sub-phases:
   - **Pre-event**: Registrations Open → Registrations Close → Team Confirmation → Hackathon Day.
   - **Hackathon day (hour-by-hour, 10hrs)**: Check-in & Kickoff → Problem Statement Reveal → Hacking Begins → Mentor Rounds (mid-point check-ins) → Submission Deadline → Judging → Results & Closing.
3. Each node: `label-mono` time, `body-lg` title, `body-base` short description; the current/next node (on event day) gets `.glow-effect` + lime accent to show "you are here."

### 10.5 Code of Conduct (Rules)
1. Header — `headline-md` "Code of Conduct", short intro paragraph on tone (respectful, fair-play, safety).
2. Numbered rule sections (`headline-md`-lite subheads, e.g. "1. Eligibility & Teams", "2. Fair Use of AI Tools", "3. Code of Behavior", "4. Judging Criteria", "5. Disqualification", "6. Reporting Issues") each with `body-base` paragraphs/bulleted lists.
3. Callout box (`.glass-card`, lime left border-accent) for the single most important rule (e.g. plagiarism/AI-misuse policy or the ₹80 fee non-refundable clause) so it doesn't get lost in prose.
4. Contact/escalation line at the end (email or socials link) for reporting violations.

### 10.6 Privacy Policy & 10.7 Terms & Conditions
Both are long-form legal reads — deliberately the least "designed" pages, prioritizing readability over branding:
- Single narrow column (`max-w-2xl` inside the standard container) instead of full-width, for line-length comfort.
- `body-base` Inter throughout; `headline-md`-lite (scaled down, e.g. 24px) section headers; no gradient/glow text, no glass cards — plain `surface`/`on-surface` for minimal distraction.
- "Last updated: [date]" line under the H1.
- Table of contents (anchor links) at the top if the document exceeds ~6 sections.
- Both link to each other and to the Code of Conduct in a closing note, plus a contact link for data/legal queries.

---

## 11. Responsive Behavior

Mobile-first using Tailwind's default breakpoints (`sm` 640 / `md` 768 / `lg` 1024 / `xl` 1280).
- Nav: hamburger below `md`, inline links at `md+`.
- Grids: team cards, quick-fact chips, and highlight cards go 1-col (mobile) → 2-col (`sm`/`md`) → 3–4-col (`lg`).
- Leaderboard: table below `md` becomes stacked glass-card rows (no horizontal scrolling tables).
- Timeline: stepper line moves from centered (desktop) to left-aligned with left-indented content (mobile).
- Type scale: `display-lg-mobile`/`headline-md` already have mobile-appropriate sizes wired in the Tailwind config — reuse them rather than ad-hoc `text-*` overrides.
- Touch targets ≥ 40×40px for all nav, social, and button elements.

---

## 12. Accessibility

- Maintain WCAG AA contrast for `on-surface`/`on-background` text against all surface tokens (already dark-on-dark safe by design; double-check `on-surface-variant` on `surface-container-lowest`).
- Visible focus rings using `primary` on all interactive elements (buttons, links, nav, socials).
- Respect `prefers-reduced-motion`: disable `gradient-shift`, `glow-pulse`, and `float-y` loops (or drop to a single static state) when set.
- All social icons and logo-only links need `aria-label`/accessible text (e.g. "Instagram", "LinkedIn", "WHYBE'26 home").
- Leaderboard rank changes (if live-updating) should be announced via `aria-live="polite"`, not color alone (pair gold/silver/bronze with rank number, not color-only cues).

---

## 13. Asset & File Notes

- `assets/whybe26-logo.png`, `assets/about-hero.jpg`, `assets/team-1.jpg` … `team-4.jpg` are referenced by prior page structure but currently missing from the working tree — must be re-added (or regenerated) before `about.html`/header favicon will render correctly.
- Keep all page-specific styles inside the shared Tailwind config in a common `<head>` partial (or a shared `assets/config.js` if pages are split into multiple HTML files) so color/type/spacing tokens never drift between pages.
- Suggested file layout: `index.html` (Home), `about.html`, `leaderboard.html`, `timeline.html`, `code-of-conduct.html`, `privacy-policy.html`, `terms.html`, each including the same header/footer markup.
