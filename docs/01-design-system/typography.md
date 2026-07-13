# Typography

## Font đề xuất
Ưu tiên font dễ đọc và hỗ trợ tiếng Việt:

| Vai trò | Font gợi ý |
|---|---|
| Heading premium | `Playfair Display`, `Cormorant Garamond`, `Lora` |
| Heading hiện đại | `Inter`, `Manrope`, `Plus Jakarta Sans` |
| Body | `Inter`, `Be Vietnam Pro`, `Roboto` |

## Scale
| Token | Mobile | Desktop | Dùng cho |
|---|---:|---:|---|
| `text-sm` | 14px | 14px | Label, metadata |
| `text-base` | 16px | 16px | Body |
| `text-lg` | 18px | 18px | Lead paragraph |
| `h3` | 22px | 24px | Card heading |
| `h2` | 30px | 40px | Section heading |
| `h1` | 40px | 56px | Hero heading |

## Quy tắc copy
- Hero title dùng tên doanh nghiệp hoặc thông điệp ngành có chèn tên.
- Không viết chữ in hoa toàn bộ cho câu dài.
- Section heading ngắn, rõ, không vượt 2 dòng trên mobile.
- CTA text nên có động từ: `Gọi ngay`, `Đặt lịch tư vấn`, `Xem bản đồ`, `Nhắn Facebook`.

## Xử lý tên dài
Nếu `business.name` dài hơn 60 ký tự:
```ts
hero.title = business.name
navbar.name = truncate(business.name, 34)
seo.title = `${business.name} | Website demo`
```

## Ví dụ heading
| Ngành | Heading hero |
|---|---|
| Nha khoa | `Nụ cười khỏe đẹp bắt đầu tại {business.name}` |
| Spa | `Không gian chăm sóc sắc đẹp thư giãn tại {business.name}` |
| Luật | `Tư vấn pháp lý rõ ràng, chuyên nghiệp tại {business.name}` |
| Garage | `Bảo dưỡng và sửa chữa ô tô đáng tin cậy tại {business.name}` |
