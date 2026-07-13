# English Center Studio Prompt

## Title:
Chuyen thiet ke trung tam tieng Anh thanh Next.js public template.

## Context:
Template giao duc render theo `/demo/[place_id]`, data tu mock truoc va Supabase sau.

## Goal:
Code landing page nang dong, CTA tu van, du lieu qua props.

## Non-goals:
- Khong tao playground/dashboard/editor.
- Khong tao form thay doi business data.
- Khong tao preset launchers.
- Khong tao route simulation trong `src/App.tsx`.

## Tech Stack:
Next.js App Router, TypeScript, Tailwind CSS, `next/image`.

## Component Structure:
`EnglishCenterTemplate` + 10 section chuan.

## Data Binding Rules:
Courses/services lay tu `data.services`; khong hard-code khoa hoc neu mapper khong cung cap.

## Mock Data Rules:
Tao `mockDemoData.ts` de preview route, sau nay thay bang Supabase fetch.

## Route Rules:
`/demo/[place_id]` render landing page truc tiep, khong hien UI chon mau.

## Responsive Rules:
Mobile de doc cho phu huynh, CTA noi bat.

## SEO Rules:
Metadata tu `data.seo`; alt anh lop hoc tu data.

## Performance Rules:
Optimize anh, giam JS khong can thiet.

## Fallback Rules:
Thieu phone dung Facebook/map. Thieu review an metrics.

## Output Expectation:
Component Next.js de gan Supabase va template registry.
