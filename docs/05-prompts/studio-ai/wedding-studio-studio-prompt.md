# Wedding Studio Studio Prompt

## Title:
Chuyen thiet ke studio anh cuoi thanh Next.js public template.

## Context:
Template wedding studio render public tai `/demo/[place_id]`.

## Goal:
Code landing page lang man, gallery tot, CTA tu van.

## Non-goals:
- Khong tao playground/dashboard/editor.
- Khong tao form sua du lieu.
- Khong tao preset doanh nghiep mau.
- Khong tao route simulation trong `src/App.tsx`.

## Tech Stack:
Next.js App Router, TypeScript, Tailwind CSS, `next/image`.

## Component Structure:
`WeddingStudioTemplate` + 10 section chuan.

## Data Binding Rules:
Khong hard-code package gia, ten cap doi, anh rieng tu. Dung `data.gallery` va `data.contact`.

## Mock Data Rules:
Mock data trong `mockDemoData.ts`, sau nay thay bang Supabase fetch.

## Route Rules:
`/demo/[place_id]` render landing page truc tiep.

## Responsive Rules:
Mobile anh lon, text ngan; desktop gallery rong.

## SEO Rules:
Metadata tu `data.seo`; demo `noindex`.

## Performance Rules:
Optimize anh, lazy gallery, tranh lightbox nang trong MVP.

## Fallback Rules:
Thieu Facebook dung phone/map. Thieu anh dung wedding fallback an toan.

## Output Expectation:
Next.js template typed, image-first, khong co UI chon/sua data.
