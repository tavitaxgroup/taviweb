# Hair Salon Studio Prompt

## Title:
Chuyen thiet ke hair salon thanh Next.js public template.

## Context:
Template salon dung `DemoPageData`, render public tai `/demo/[place_id]`.

## Goal:
Code giao dien co ca tinh, responsive, gallery dep, khong hard-code business data.

## Non-goals:
- Khong tao playground, dashboard, form, live editor.
- Khong tao selector/preset doanh nghiep mau.
- Khong tao route simulation trong `src/App.tsx`.

## Tech Stack:
Next.js App Router, TypeScript, Tailwind CSS, `next/image`.

## Component Structure:
`HairSalonTemplate` + 10 section chuan.

## Data Binding Rules:
CTA booking tu `data.contact.primaryAction`; gallery tu `data.gallery`; services tu `data.services`. Khong hard-code ten salon, phone, image.

## Mock Data Rules:
Mock data nam trong `src/lib/demo/mockDemoData.ts` de test route.

## Route Rules:
Tao `src/app/demo/[place_id]/page.tsx`; route public hien landing page ngay.

## Responsive Rules:
Mobile anh lon va CTA ro; desktop services 3 cot.

## SEO Rules:
Metadata tu `data.seo`; alt anh tu `DemoImage.alt`.

## Performance Rules:
Lazy load gallery; tranh carousel nang.

## Fallback Rules:
Thieu Facebook dung phone/map. Thieu anh dung salon fallback.

## Output Expectation:
Template props-driven, ready for `/demo/[place_id]`, khong co editor.
