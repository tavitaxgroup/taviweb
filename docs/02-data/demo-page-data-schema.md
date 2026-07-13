# Demo Page Data Schema

## Object chuẩn
Tất cả template nhận cùng một object:

```json
{
  "business": {},
  "template": {},
  "hero": {},
  "trust": {},
  "about": {},
  "services": [],
  "gallery": [],
  "reviews": [],
  "contact": {},
  "seo": {}
}
```

## Type gợi ý
```ts
type DemoPageData = {
  business: {
    id?: string
    placeId: string
    name: string
    industry: string
    address?: string
    phone?: string
    website?: string
    facebookUrl?: string
    email?: string
  }
  template: {
    key: string
    industryLabel: string
    palette: string
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    image: DemoImage
    primaryCta: DemoCTA
    secondaryCta?: DemoCTA
  }
  trust: {
    rating?: number
    reviewCount?: number
    followers?: number
    badges: string[]
  }
  about: {
    title: string
    body: string
    highlights: string[]
  }
  services: Array<{
    title: string
    description: string
    iconKey?: string
  }>
  gallery: DemoImage[]
  reviews: Array<{
    author: string
    rating: number
    content: string
    source: "google" | "facebook" | "fallback"
  }>
  contact: {
    phone?: string
    email?: string
    address?: string
    mapQuery: string
    facebookUrl?: string
    primaryAction: DemoCTA
  }
  seo: {
    title: string
    description: string
    canonicalPath: string
    noindex: boolean
  }
}
```

## Ví dụ rút gọn
```json
{
  "business": {
    "placeId": "ChIJ123",
    "name": "Nha Khoa Minh Tâm",
    "industry": "dental",
    "address": "24 Lê Lợi, Quận 1, TP.HCM",
    "phone": "0901 234 567"
  },
  "template": {
    "key": "dental",
    "industryLabel": "Nha khoa",
    "palette": "medical-teal"
  },
  "hero": {
    "eyebrow": "Nha khoa tại Quận 1",
    "title": "Nụ cười khỏe đẹp bắt đầu tại Nha Khoa Minh Tâm",
    "subtitle": "Trang demo gợi ý cách trình bày dịch vụ, hình ảnh và thông tin liên hệ chuyên nghiệp hơn.",
    "image": {
      "src": "https://example.com/photo.jpg",
      "alt": "Hình ảnh Nha Khoa Minh Tâm",
      "source": "business"
    }
  }
}
```
