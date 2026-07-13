# SEO Rules

## Nguyên tắc
Demo page gửi khách thường nên `noindex` để tránh index nhầm nội dung chưa được khách duyệt.

## Metadata mẫu
| Field | Giá trị |
|---|---|
| `title` | `{business.name} | Website demo {industryLabel}` |
| `description` | `Bản demo giao diện website cho {business.name}, trình bày dịch vụ, hình ảnh, đánh giá và thông tin liên hệ rõ ràng hơn.` |
| `canonicalPath` | `/demo/{place_id}` |
| `robots` | `noindex, nofollow` cho demo |

## Open Graph
```ts
openGraph: {
  title: data.seo.title,
  description: data.seo.description,
  images: [data.hero.image.src],
  type: "website"
}
```

## Không nên làm
- Không index hàng loạt demo khi chưa có quyền khách.
- Không tạo structured data như doanh nghiệp chính thức nếu thông tin chưa được xác nhận.
- Không dùng review fallback trong schema review.

## Khi khách duyệt thành website thật
Có thể đổi:
- `noindex = false`
- domain chính thức
- structured data `LocalBusiness`
- sitemap
- canonical về domain khách
