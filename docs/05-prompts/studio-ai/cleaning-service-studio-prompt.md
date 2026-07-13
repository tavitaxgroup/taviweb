# Cleaning Service Studio Prompt

## Title:
Chuyen thiet ke dich vu ve sinh thanh Next.js public template.

## Context:
Template cho cong ty ve sinh cong nghiep, render public tai `/demo/[place_id]`.

## Goal:
Code giao dien thuc dung, CTA bao gia ro, khong hard-code data.

## Non-goals:
- Khong tao playground/dashboard/form/editor.
- Khong tao selector doanh nghiep mau.
- Khong tao path simulation trong `src/App.tsx`.

## Tech Stack:
Next.js App Router, TypeScript, Tailwind CSS, `next/image`.

## Component Structure:
`CleaningServiceTemplate` + 10 section chuan.

## Data Binding Rules:
Phone CTA tu `data.contact`; services tu `data.services`; gallery tu `data.gallery`.

## Mock Data Rules:
Mock data trong `src/lib/demo/mockDemoData.ts`; component chi nhan props.

## Route Rules:
Route `/demo/[place_id]` hien landing page truc tiep.

## Responsive Rules:
Mobile uu tien nut goi bao gia; desktop grid services.

## SEO Rules:
Title/description tu `data.seo`, canonical path `/demo/[place_id]`, demo `noindex`.

## Performance Rules:
Khong dung slider nang; anh lazy.

## Fallback Rules:
Khong co anh before-after thi khong render before-after. Thieu phone dung map/Facebook.

## Output Expectation:
Template Next.js ben voi du lieu thieu, khong co playground.
