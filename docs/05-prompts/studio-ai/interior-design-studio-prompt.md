# Interior Design Studio Prompt

## Title:
Chuyen thiet ke noi that thanh Next.js public template.

## Context:
Template image-first cho cong ty thiet ke noi that tai `/demo/[place_id]`.

## Goal:
Code giao dien premium, gallery tot, props-driven.

## Non-goals:
- Khong tao playground/dashboard/editor.
- Khong tao form sua thong tin.
- Khong tao sample selector.
- Khong tao route simulation trong `src/App.tsx`.

## Tech Stack:
Next.js App Router, TypeScript, Tailwind CSS, `next/image`.

## Component Structure:
`InteriorDesignTemplate` + 10 section chuan.

## Data Binding Rules:
Khong claim portfolio gia. Anh tu `data.gallery`; fallback neu thieu.

## Mock Data Rules:
Mock data nam trong `mockDemoData.ts`; UI component khong hard-code business info.

## Route Rules:
`/demo/[place_id]` render website public truc tiep.

## Responsive Rules:
Mobile gallery 1-2 cot; desktop mosaic don gian co ratio on dinh.

## SEO Rules:
Metadata tu `data.seo`; demo `noindex`.

## Performance Rules:
Uu tien image optimization, lazy gallery, tranh masonry JS nang.

## Fallback Rules:
Thieu anh dung fallback noi that; thieu phone dung email/map.

## Output Expectation:
Template Next.js dep, nhe, khong co UI cau hinh.
