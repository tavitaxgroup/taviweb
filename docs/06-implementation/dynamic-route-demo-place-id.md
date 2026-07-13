# Dynamic Route `/demo/[place_id]`

## Route
File:
```txt
src/app/demo/[place_id]/page.tsx
```

## Pseudo-code page
```tsx
type PageProps = {
  params: Promise<{ place_id: string }>
}

export default async function DemoPage({ params }: PageProps) {
  const { place_id } = await params
  const business = await getBusinessByPlaceId(decodeURIComponent(place_id))

  if (!business) notFound()

  const templateKey =
    business.template_key ?? routeTemplateByIndustry(business.industry)

  const data = buildDemoPageData(business, templateKey)

  return <DemoTemplateRenderer data={data} />
}
```

## Metadata
```tsx
export async function generateMetadata({ params }: PageProps) {
  const { place_id } = await params
  const business = await getBusinessByPlaceId(decodeURIComponent(place_id))
  const templateKey = business.template_key ?? routeTemplateByIndustry(business.industry)
  const data = buildDemoPageData(business, templateKey)

  return {
    title: data.seo.title,
    description: data.seo.description,
    robots: data.seo.noindex ? { index: false, follow: false } : undefined
  }
}
```

## 404
Render 404 khi:
- `place_id` không tồn tại.
- `demo_status = failed` và không cho public xem.
- Record bị reject hoặc do-not-contact nếu policy yêu cầu.

## Caching
MVP nên dùng dynamic render để dữ liệu cập nhật nhanh:
```ts
export const dynamic = "force-dynamic"
```

Sau khi ổn định có thể dùng revalidate:
```ts
export const revalidate = 3600
```
