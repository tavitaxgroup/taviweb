# Spa Studio Prompt

## Title:
Chuyen thiet ke landing page spa thanh Next.js public template.

## Context:
Template spa render tai `/demo/[place_id]`, hien tai dung mock data tam, sau nay thay bang Supabase.

## Goal:
Tao template spa responsive, premium, du lieu qua `DemoPageData` props.

## Non-goals:
- Khong tao playground, dashboard, editor.
- Khong tao form nhap/sua thong tin doanh nghiep.
- Khong tao selector/preset doanh nghiep mau.
- Khong tao path simulation trong `src/App.tsx`.
- `/demo/[place_id]` phai hien landing page ngay.

## Tech Stack:
Next.js App Router, TypeScript, Tailwind CSS, `next/image`, Supabase-ready.

## Component Structure:
`SpaTemplate` dung 10 section chuan.

## Data Binding Rules:
Dung `data.hero`, `data.business`, `data.services`, `data.gallery`, `data.contact`. Khong hard-code ten spa, anh, phone.

## Mock Data Rules:
Mock data dat trong `src/lib/demo/mockDemoData.ts`; component chi render props.

## Route Rules:
Tao `src/app/demo/[place_id]/page.tsx` va render qua `DemoTemplateRenderer`.

## Responsive Rules:
Mobile CTA stack doc, anh ratio co dinh; desktop grid 2/3 cot.

## SEO Rules:
Metadata tu `data.seo`; demo ho tro `noindex`.

## Performance Rules:
Optimize anh, preload hero neu can, lazy gallery.

## Fallback Rules:
Thieu phone uu tien Facebook/email/map. Thieu anh dung spa fallback.

## Output Expectation:
Next.js public template, khong co playground hoac form.
