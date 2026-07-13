# Data Mapper

## Nhiệm vụ
Biến record `businesses` thành `DemoPageData` chuẩn cho component.

## Mapping theo section
| Section | Dữ liệu vào | Dữ liệu fallback |
|---|---|---|
| Navbar | `name`, phone/facebook | CTA map hoặc facebook |
| Hero | `name`, `industry`, `image_url`, address | copy ngành, ảnh fallback |
| Trust | `rating`, `user_ratings_total`, followers | badge generic |
| About | `name`, address, industry | mô tả ngành |
| Services | template defaults | 4-6 service theo ngành |
| Gallery | `image_url` | ảnh fallback theo ngành |
| Reviews | rating/review count | review placeholder trung thực |
| Contact | phone, email, facebook, address | map CTA |
| SEO | name, industry, address | noindex demo |

## Quy tắc tạo text
```ts
function buildHeroTitle(business, defaults) {
  return defaults.heroTitle
    .replace("{business.name}", business.name)
    .replace("{area}", extractArea(business.formatted_address) ?? "khu vực của bạn")
}
```

## Ví dụ output services
```json
[
  {
    "title": "Tư vấn ban đầu",
    "description": "Giúp khách hàng hiểu rõ dịch vụ phù hợp trước khi đặt lịch.",
    "iconKey": "message-circle"
  }
]
```

## Validate
- `business.name` không rỗng.
- `template.key` nằm trong registry.
- `hero.title` không rỗng.
- `services.length >= 3`.
- `contact.primaryAction.href` hợp lệ.
