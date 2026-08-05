---
target: src/components/company/CompanyHome.tsx
total_score: 31
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 0
timestamp: 2026-08-04T03-42-51Z
slug: src-components-company-companyhome-tsx
---
# Design critique of TAVIWEB Landing Page

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | Solid loading and active states in Place ID search and services tabs |
| 2 | Match System / Real World | 4 | High-quality B2B Vietnamese copy |
| 3 | User Control and Freedom | 4 | Mobile navigation is fully closeable |
| 4 | Consistency and Standards | 4 | Cohesive color scheme and transitions |
| 5 | Error Prevention | 4 | Place ID search guards against empty queries |
| 6 | Recognition Rather Than Recall | 4 | All features are easily discoverable |
| 7 | Flexibility and Efficiency | n/a | Persuade landing page, no expert accelerators |
| 8 | Aesthetic and Minimalist Design | 4 | Clean, spacious layout with Double-Bezel cards |
| 9 | Error Recovery | 3 | Input validation warnings are clear, but could provide more context |
| 10 | Help and Documentation | n/a | Persuade surface, standard FAQs are sufficient |
| **Total** | | **31/32** | **Excellent** |

## Design Specificity Verdict

The page feels highly tailored for TAVIWEB. The automated instant template previews, custom local Vietnamese symbolic photos, and 3D stacked cards timeline make the interface unique and specific to this SaaS business.

## Overall Impression

An exceptionally clean, modern, and visually striking landing page with excellent structural hierarchy and high-quality local Vietnamese assets.

## What's Working
- **Interactive Services Tabs**: Provides a neat 2-column division of services.
- **3D Stacked Cards**: High-end depth layering timeline.
- **Multi-Column Footer**: Premium footer links structure.

## Priority Issues
- **[P3] Footer spacing**: On medium viewports, column wraps can feel slightly crowded.
  - *Why it matters*: Minor visual tension.
  - *Fix*: Add margin bottom or grid gap for column wrappers.
  - *Suggested command*: `$impeccable layout`
- **[P3] Mobile grid transition**: Grid transitions on mobile could benefit from wider column gaps.
  - *Why it matters*: Enhances readability.
  - *Fix*: Adjust gap properties dynamically in css query.
  - *Suggested command*: `$impeccable adapt`

## Persona Red Flags
- **Sam (Accessibility)**: Color contrast is generally excellent, but some muted texts could be slightly darkened.
- **Jordan (First-Timer)**: No onboarding walk-through, but the interface is simple enough that it doesn't cause confusion.

## Minor Observations
- High-contrast lines are clean.
- Animation speed is crisp.
