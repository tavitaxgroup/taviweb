# Dental Studio Prompt

## Title:
Chuyen thiet ke landing page nha khoa thanh Next.js public template.

## Context:
Template nay dung cho website demo public cua doanh nghiep nha khoa tai route `/demo/[place_id]`. Hien tai co the dung mock data de preview. Sau nay Builder Agent/Supabase se truyen du lieu that vao.

## Goal:
Tao mot landing page nha khoa hoan chinh, component-based, props-driven, khong hard-code thong tin doanh nghiep.

## Non-goals:
- Khong tao playground.
- Khong tao dashboard.
- Khong tao sidebar chon doanh nghiep.
- Khong tao form nhap/sua ten, so dien thoai, dia chi, nganh nghe.
- Khong tao live editor hoac preset launcher.
- Khong tao path routing simulation trong `src/App.tsx`.
- Khi mo `/demo/[place_id]`, nguoi xem phai thay landing page ngay.

## Tech Stack:
Next.js App Router, TypeScript, Tailwind CSS, `next/image`, de tich hop Supabase.

## Component Structure:
`DentalTemplate`, `DemoTemplateRenderer`, `DemoNavbar`, `DemoHero`, `TrustBar`, `AboutSection`, `ServicesSection`, `GallerySection`, `WhyChooseUsSection`, `ReviewsSection`, `ContactCTASection`, `DemoFooter`.

## Data Binding Rules:
- Template chi nhan `data: DemoPageData`.
- Section component chi nhan props, khong fetch Supabase.
- Du lieu hien thi lay tu `data.business`, `data.hero`, `data.trust`, `data.about`, `data.services`, `data.gallery`, `data.reviews`, `data.contact`, `data.seo`.
- Khong hard-code ten phong kham, anh, phone, dia chi trong component.

## Mock Data Rules:
Neu chua co Supabase, tao `src/lib/demo/mockDemoData.ts`. Route `/demo/[place_id]` lay mock business theo `place_id`, build thanh `DemoPageData`, roi render template. Mock data chi nam trong file data, khong nam trong UI component.

## Route Rules:
Bat buoc tao `src/app/demo/[place_id]/page.tsx`. Page nay lay `place_id`, fetch mock hoac Supabase sau nay, goi `buildDemoPageData()`, roi render `DemoTemplateRenderer`.

## Responsive Rules:
Mobile-first, hero 1 cot tren mobile, desktop 2 cot, services 3 cot.

## SEO Rules:
`generateMetadata()` dung `data.seo.title`, `data.seo.description`; demo mac dinh `noindex`.

## Performance Rules:
Dung `next/image`, lazy load gallery, tranh animation nang.

## Fallback Rules:
Thieu anh dung fallback nganh dental. Thieu phone doi CTA sang map/Facebook/email. Thieu rating thi an rating metric.

## Output Expectation:
Code Next.js public website template. Khong co playground, khong co form, khong co man hinh chon du lieu.
