# Auto Garage Studio Prompt

## Title:
Chuyen thiet ke garage o to thanh Next.js public template.

## Context:
Template garage sua chua/bao duong o to render public tai `/demo/[place_id]`.

## Goal:
Code giao dien ky thuat, dang tin, CTA goi kiem tra xe.

## Non-goals:
- Khong tao playground/dashboard/editor.
- Khong tao form sua thong tin.
- Khong tao selector doanh nghiep mau.
- Khong tao path simulation trong `src/App.tsx`.

## Tech Stack:
Next.js App Router, TypeScript, Tailwind CSS, `next/image`.

## Component Structure:
`AutoGarageTemplate` + 10 section chuan.

## Data Binding Rules:
Khong hard-code hang xe, gia, cam ket sua moi loi. Phone/map tu `data.contact`.

## Mock Data Rules:
Mock data dat trong `src/lib/demo/mockDemoData.ts`, sau nay thay bang Supabase.

## Route Rules:
`/demo/[place_id]` render landing page garage truc tiep.

## Responsive Rules:
Mobile uu tien goi ngay va xem duong di. Desktop grid ro.

## SEO Rules:
Title/description tu business name va nganh.

## Performance Rules:
Anh toi uu, animation nhe.

## Fallback Rules:
Thieu phone dung map/Facebook. Thieu anh dung garage fallback.

## Output Expectation:
Template Next.js ben, nhe, san sang route `/demo/[place_id]`, khong co UI chon/sua data.
