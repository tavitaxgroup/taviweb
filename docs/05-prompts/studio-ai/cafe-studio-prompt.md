# Cafe Studio Prompt

## Title:
Chuyen thiet ke quan cafe thanh Next.js public template.

## Context:
Template cho cafe dia phuong, route `/demo/[place_id]`, mock data truoc khi Supabase.

## Goal:
Code landing page am, CTA xem duong di, props-driven.

## Non-goals:
- Khong tao playground/dashboard/editor.
- Khong tao form sua thong tin quan.
- Khong tao selector doanh nghiep mau.
- Khong tao path simulation trong `src/App.tsx`.

## Tech Stack:
Next.js App Router, TypeScript, Tailwind CSS, `next/image`.

## Component Structure:
`CafeTemplate` + 10 section chuan.

## Data Binding Rules:
Khong hard-code menu hoac gio mo cua. Map CTA tu `data.contact.mapQuery`.

## Mock Data Rules:
Mock data tap trung trong `src/lib/demo/mockDemoData.ts`.

## Route Rules:
Route `/demo/[place_id]` hien landing page truc tiep, khong hien man hinh chon mau.

## Responsive Rules:
Mobile uu tien anh va map; desktop gallery thoang.

## SEO Rules:
Title/description tu `data.seo`; alt anh tu data.

## Performance Rules:
Lazy gallery, giam script.

## Fallback Rules:
Thieu anh dung cafe fallback. Thieu phone van render map CTA.

## Output Expectation:
Template Next.js cafe ro, dep, khong co form/playground.
