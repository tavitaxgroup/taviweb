# General Clinic Studio Prompt

## Title:
Chuyen thiet ke phong kham da khoa thanh Next.js public template.

## Context:
Template phong kham render tai `/demo/[place_id]`; mock data chi de preview truoc khi ket noi Supabase.

## Goal:
Tao UI y te ro rang, an toan, de lien he, props-driven.

## Non-goals:
- Khong tao playground/dashboard/editor.
- Khong tao form sua du lieu.
- Khong tao man hinh chon doanh nghiep mau.
- Khong tao path routing simulation trong `src/App.tsx`.

## Tech Stack:
Next.js App Router, TypeScript, Tailwind CSS, `next/image`.

## Component Structure:
`GeneralClinicTemplate` + 10 section chuan.

## Data Binding Rules:
Phone/map/rating lay tu `data.contact` va `data.trust`. Khong hard-code ten phong kham, phone, claim y te.

## Mock Data Rules:
Dung `mockDemoData.ts` cho du lieu mau; UI component khong chua mock data.

## Route Rules:
`/demo/[place_id]` render landing page truc tiep qua `DemoTemplateRenderer`.

## Responsive Rules:
Mobile uu tien CTA goi dien; desktop hero 2 cot.

## SEO Rules:
Metadata tu `data.seo`, demo `noindex`.

## Performance Rules:
Toi uu anh, CSS gon, animation nhe.

## Fallback Rules:
Thieu phone dung map/Facebook/email. Thieu rating an sao. Thieu anh dung clinic fallback.

## Output Expectation:
Template Next.js chuan hoa, khong co UI cau hinh du lieu.
