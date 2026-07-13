# Construction Company Studio Prompt

## Title:
Chuyen thiet ke cong ty xay dung thanh Next.js public template.

## Context:
Template cho nha thau/cong ty xay dung, render tai `/demo/[place_id]`.

## Goal:
Code layout chac, CTA bao gia, khong hard-code thong tin cong trinh.

## Non-goals:
- Khong tao playground/dashboard/form/editor.
- Khong tao doanh nghiep selector.
- Khong tao preset launcher.
- Khong tao path simulation trong `src/App.tsx`.

## Tech Stack:
Next.js App Router, TypeScript, Tailwind CSS, `next/image`.

## Component Structure:
`ConstructionCompanyTemplate` + 10 section chuan.

## Data Binding Rules:
Services tu `data.services`; gallery khong duoc goi la du an that neu chi la fallback.

## Mock Data Rules:
Mock data dung de preview route va nam trong `src/lib/demo/mockDemoData.ts`.

## Route Rules:
`/demo/[place_id]` hien landing page truc tiep.

## Responsive Rules:
Mobile text ro, button lon; desktop grid manh.

## SEO Rules:
SEO tu `data.seo`; noindex theo config.

## Performance Rules:
Optimize anh cong trinh, khong parallax nang.

## Fallback Rules:
Thieu anh dung construction fallback. Thieu phone dung map/Facebook.

## Output Expectation:
Code component-based, phu hop `templateRegistry`, khong co editor.
