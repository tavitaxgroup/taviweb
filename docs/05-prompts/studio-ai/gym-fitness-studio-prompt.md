# Gym Fitness Studio Prompt

## Title:
Chuyen thiet ke gym fitness thanh Next.js public template.

## Context:
Template cho phong gym/fitness render theo `/demo/[place_id]`.

## Goal:
Code giao dien manh, nhanh, CTA dang ky ro.

## Non-goals:
- Khong tao playground/dashboard/editor.
- Khong tao form thay doi business data.
- Khong tao sample selector.
- Khong tao path simulation trong `src/App.tsx`.

## Tech Stack:
Next.js App Router, TypeScript, Tailwind CSS, `next/image`.

## Component Structure:
`GymFitnessTemplate` + 10 section chuan.

## Data Binding Rules:
Khong hard-code cam ket ket qua co the. Services tu mapper, CTA tu contact.

## Mock Data Rules:
Dung `mockDemoData.ts` de preview route; khong dat mock data trong section component.

## Route Rules:
`/demo/[place_id]` hien landing page gym truc tiep.

## Responsive Rules:
Mobile CTA lon; desktop hero manh va services grid.

## SEO Rules:
Metadata tu `data.seo`; noindex neu demo.

## Performance Rules:
Khong dung video background nang; anh lazy.

## Fallback Rules:
Thieu phone dung map/Facebook. Thieu image dung gym fallback.

## Output Expectation:
Template Next.js responsive, props-driven, khong co playground.
