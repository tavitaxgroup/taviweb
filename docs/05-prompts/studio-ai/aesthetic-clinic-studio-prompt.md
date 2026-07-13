# Aesthetic Clinic Studio Prompt

## Title:
Chuyen thiet ke landing page tham my vien thanh Next.js public template.

## Context:
Template nay render website demo public cho tham my vien tai `/demo/[place_id]`. Hien tai dung mock data de preview, sau nay thay bang Supabase fetch.

## Goal:
Code template sang trong, an toan ve claims, du lieu truyen qua `DemoPageData` props.

## Non-goals:
- Khong tao playground, dashboard, live editor.
- Khong tao sidebar chon doanh nghiep mau.
- Khong tao form sua ten, phone, dia chi, rating.
- Khong tao preset launcher.
- Khong tao path routing simulation trong `src/App.tsx`.
- Public route phai render landing page truc tiep.

## Tech Stack:
Next.js App Router, TypeScript, Tailwind CSS, `next/image`, de tich hop Supabase.

## Component Structure:
`AestheticClinicTemplate` + 10 section chuan: Navbar, Hero, Trust, About, Services, Gallery, Why Choose Us, Reviews, Contact CTA, Footer.

## Data Binding Rules:
Bind `business`, `hero`, `trust`, `about`, `services`, `gallery`, `reviews`, `contact`, `seo`. Khong hard-code ket qua tham my, ten doanh nghiep, phone, anh.

## Mock Data Rules:
Tao mock data trong `src/lib/demo/mockDemoData.ts` neu chua co Supabase. UI component khong chua business sample data.

## Route Rules:
`src/app/demo/[place_id]/page.tsx` lay `place_id`, lay data, build `DemoPageData`, render `DemoTemplateRenderer`.

## Responsive Rules:
Mobile-first; desktop spacing rong, CTA luon visible.

## SEO Rules:
Title chua `business.name` va nganh, description lay tu mapper, demo `noindex`.

## Performance Rules:
Khong dung video background; gallery lazy load.

## Fallback Rules:
Khong co before-after thi khong render before-after. Thieu anh dung fallback clinic cao cap. Thieu phone dung Facebook/map/email.

## Output Expectation:
Next.js component typed, san sang cam vao `templateRegistry`, khong co UI chon/sua du lieu.
