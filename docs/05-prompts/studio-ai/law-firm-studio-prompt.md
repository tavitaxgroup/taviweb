# Law Firm Studio Prompt

## Title:
Chuyen thiet ke van phong luat thanh Next.js public template.

## Context:
Landing page demo phap ly render tai `/demo/[place_id]`, dung mock data truoc khi fetch Supabase.

## Goal:
Code UI nghiem tuc, tin cay, khong tao claim phap ly sai.

## Non-goals:
- Khong tao playground/dashboard/editor.
- Khong tao form thay doi thong tin.
- Khong tao doanh nghiep selector.
- Khong tao path simulation trong `src/App.tsx`.

## Tech Stack:
Next.js App Router, TypeScript, Tailwind CSS, `next/image`.

## Component Structure:
`LawFirmTemplate` + 10 section chuan.

## Data Binding Rules:
Khong hard-code ten luat su, ket qua phap ly, phone. Dung `data.contact.email` neu co.

## Mock Data Rules:
Mock data tap trung trong `mockDemoData.ts`, khong dat trong section component.

## Route Rules:
`/demo/[place_id]` lay data, build `DemoPageData`, render landing page truc tiep.

## Responsive Rules:
Mobile ro CTA tu van/email; desktop layout trang nha.

## SEO Rules:
SEO title tu business name va nganh; demo `noindex`.

## Performance Rules:
Anh toi uu, icon nhe, animation don gian.

## Fallback Rules:
Thieu phone dung email/Facebook/map. Thieu anh dung legal office fallback.

## Output Expectation:
Next.js template typed, khong co man hinh cau hinh.
