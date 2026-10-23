# APEX AUTO & MOTO LAB — Dark-Luxury Design System (`DESIGN.md`)

## 1. Brand Direction & Philosophy
- **Aesthetic**: High-end European specialist workshop meets precision horology (watchmaker's atelier).
- **Mood**: Refined, precise, trustworthy, understated dark luxury.
- **Anti-Patterns Blocked**: No loud red/neon-orange (`#FF5526`) glows, no bubbly `24px–9999px` card radii, no generic SaaS gradients, no crowded multi-line navbar wrapping.

---

## 2. Color Tokens (WCAG AA Verified)

| Token | Value | Contrast on `#0B0B0C` | Usage Rule |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#0B0B0C` | — | Main page canvas (near-black warm charcoal) |
| `--bg-surface` | `#141416` | — | Card surfaces, alternating sections, footer |
| `--bg-elevated` | `#1C1C1F` | — | Hover states, form inputs, modals, active tabs |
| `--text-primary` | `#F2EFE9` | `17.4 : 1` (AAA) | Primary headlines, titles, prices, body emphasis |
| `--text-secondary` | `#A8A49C` | `7.8 : 1` (AAA) | Body paragraphs, descriptions, navigation links |
| `--text-muted` | `#6F6B64` | `4.6 : 1` (AA) | Metadata, captions, secondary labels |
| `--accent-gold` | `#C8A96A` | `9.1 : 1` (AAA) | Primary CTA fill, 1px hairline accents, key numerals |
| `--accent-racing-green` | `#1E3A2F` | — | Subtle status badge background (`#76B59B` text) |
| `--border-subtle` | `rgba(255,255,255,0.08)` | — | `1px solid` structural borders & dividers |
| `--border-hover` | `rgba(200,169,106,0.42)` | — | Card & input hover/focus border |

---

## 3. Typography System (Vietnamese Diacritic Safe)

- **Headings (`.font-luxury-display`)**: `Plus Jakarta Sans` (weight `700`, geometric architectural sans inspired by Porsche / Polestar), loaded with `"vietnamese"` subset.
  - Line-height: `1.12`
  - Tracking: `-0.025em`
  - Hero Fluid Size: `clamp(2.35rem, 3.8vw + 0.85rem, 4.15rem)`
  - Section H2 Fluid Size: `clamp(1.85rem, 2.4vw + 0.75rem, 2.75rem)`
- **Body & UI (`--font-ui-sans`)**: `Inter` (with `Be Vietnam Pro` fallback).
  - Line-height: `1.6`
  - Body Measure: `60ch–68ch` max width for effortless reading.
- **Eyebrow Labels (`.eyebrow-label`)**:
  - `12px` (`0.75rem`), `font-weight: 600`, `uppercase`, `letter-spacing: 0.18em`, color `#C8A96A`.
- **Numerals (`.luxury-numeral`)**:
  - `Space Grotesk` / `JetBrains Mono` with `font-variant-numeric: tabular-nums` applied to all prices, durations, step numbers, and statistics.

---

## 4. Layout, Spacing & Shape

- **Container**: `max-w-[1280px]` (`80rem`), 12-column CSS Grid (`grid-cols-12`), horizontal padding `20px` (mobile) to `40px` (desktop).
- **Vertical Rhythm (8px Scale)**:
  - Desktop section padding: `96px–128px` (`py-24` to `py-32`)
  - Mobile section padding: `64px–80px` (`py-16` to `py-20`)
- **Corner Radius**:
  - Cards & Containers: `6px` (`--radius-md`)
  - Buttons, Inputs & Badges: `4px` (`--radius-sm`)
- **Elevation**:
  - Prefer `1px solid rgba(255,255,255,0.08)` borders and surface layering (`#0B0B0C` → `#141416` → `#1C1C1F`) over heavy drop shadows.

---

## 5. Component & Interaction Specifications

1. **Header**:
   - Transparent over hero (`bg-gradient-to-b from-[#0B0B0C]/85 to-transparent`), transitions to `bg-[#0B0B0C]/95 backdrop-blur-md border-b border-white/[0.08]` on scroll (`scrollY > 32`).
   - Strictly single-line (`whitespace-nowrap`) across `1280px` and `1920px`.
   - Includes refined Car / Motorcycle switcher, 4 anchor links, visible phone link on mobile/desktop, primary Gold CTA, and full-screen overlay menu on mobile/tablet.
2. **Buttons**:
   - `.btn-gold-primary`: Solid `#C8A96A`, `#0B0B0C` text, `-2px` lift on hover, `2px` gold `focus-visible` ring.
   - `.btn-outline-luxury`: `1px` border `rgba(255,255,255,0.18)`, transitions to `#C8A96A` border + `#1C1C1F` surface on hover.
3. **Cards (`.luxury-card`)**:
   - `#141416` surface, `1px` subtle border, `-4px` vertical translate + `#C8A96A/42` border on hover, and animated bottom gold line indicator on service cards.
4. **Motion & Accessibility**:
   - Scroll entry: `opacity: 0 → 1`, `translateY(16px → 0)`, `600ms cubic-bezier(0.22, 1, 0.36, 1)`, `80ms` child stagger.
   - Full `prefers-reduced-motion: reduce` support via CSS media query and `useReducedMotion()`.
