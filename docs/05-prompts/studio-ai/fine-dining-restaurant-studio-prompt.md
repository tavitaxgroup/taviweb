# Fine Dining Restaurant Studio Prompt

## Title:
Chuyen thiet ke nha hang sang trong thanh Next.js public template.

## Context:
Template restaurant render tai `/demo/[place_id]`, data tu mock truoc va Supabase sau.

## Goal:
Code landing page dat ban, anh dep, khong bia menu.

## Non-goals:
- Khong tao playground/dashboard/editor.
- Khong tao form sua du lieu.
- Khong tao sample selector.
- Khong tao route simulation trong `src/App.tsx`.

## Tech Stack:
Next.js App Router, TypeScript, Tailwind CSS, `next/image`.

## Component Structure:
`FineDiningRestaurantTemplate` + 10 section chuan.

## Data Binding Rules:
Khong hard-code mon an, gia, gio mo cua. CTA dat ban tu `data.contact`.

## Mock Data Rules:
Mock data nam trong `mockDemoData.ts`; section component chi nhan props.

## Route Rules:
`/demo/[place_id]` render landing page nha hang truc tiep.

## Responsive Rules:
Mobile anh ro, CTA khong chim; desktop hero image lon.

## SEO Rules:
Metadata tu business name, industry, address.

## Performance Rules:
Preload hero image, lazy gallery.

## Fallback Rules:
Thieu phone dung map/Facebook. Thieu anh dung restaurant fallback.

## Output Expectation:
Template Next.js restaurant responsive, khong co playground.
