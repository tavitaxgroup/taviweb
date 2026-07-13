# Component Architecture

## Component props chuẩn
```ts
export type DemoTemplateProps = {
  data: DemoPageData
}
```

## Renderer
```tsx
export function DemoTemplateRenderer({ data }: DemoTemplateProps) {
  const Template = templateRegistry[data.template.key]
  if (!Template) return <GeneralServiceFallbackTemplate data={data} />
  return <Template data={data} />
}
```

## Template component
```tsx
export function DentalTemplate({ data }: DemoTemplateProps) {
  return (
    <>
      <DemoNavbar business={data.business} contact={data.contact} />
      <DemoHero hero={data.hero} business={data.business} />
      <TrustBar trust={data.trust} />
      <AboutSection about={data.about} />
      <ServicesSection services={data.services} />
      <GallerySection images={data.gallery} />
      <WhyChooseUsSection items={data.about.highlights} />
      <ReviewsSection reviews={data.reviews} trust={data.trust} />
      <ContactCTASection contact={data.contact} business={data.business} />
      <DemoFooter business={data.business} seo={data.seo} />
    </>
  )
}
```

## Quy tắc section
| Section | Có được ẩn không? | Điều kiện |
|---|---:|---|
| Navbar | Không | Luôn render |
| Hero | Không | Dùng fallback nếu thiếu ảnh |
| Trust | Có | Ẩn metric thiếu, không ẩn cả section nếu còn badge |
| About | Không | Fallback copy theo ngành |
| Services | Không | Dùng defaults |
| Gallery | Không | Fallback images |
| Reviews | Có | Dùng fallback review hoặc ẩn nếu policy yêu cầu |
| Contact CTA | Không | Dùng map CTA nếu thiếu phone |
| Footer | Không | Luôn render |

## Test component
- Render với đủ dữ liệu.
- Render thiếu ảnh.
- Render thiếu phone.
- Render tên doanh nghiệp rất dài.
- Render unknown `template_key`.
