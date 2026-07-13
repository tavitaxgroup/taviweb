# Component Guidelines

## Quy tắc chung
- Component nhận dữ liệu qua props, không fetch trực tiếp trừ page-level component.
- Component không biết Supabase schema; chỉ biết `DemoPageData`.
- Component phải render ổn khi field optional bị thiếu.

## Props chuẩn
```ts
type DemoTemplateProps = {
  data: DemoPageData
}
```

## Section props
| Component | Props | Fallback |
|---|---|---|
| `DemoHero` | `hero`, `business`, `contact` | Hero copy theo ngành, ảnh placeholder |
| `TrustBar` | `trust` | Ẩn metric thiếu |
| `ServicesSection` | `services` | Service defaults theo ngành |
| `GallerySection` | `gallery` | Placeholder theo ngành |
| `ReviewsSection` | `reviews`, `trust` | Review generic có disclaimer |
| `ContactCTASection` | `contact` | Map CTA nếu thiếu phone |

## Button
| Variant | Dùng khi |
|---|---|
| `primary` | CTA chính |
| `secondary` | CTA phụ |
| `ghost` | Navbar hoặc footer link |

## Cards
- Card radius `12px`.
- Padding mobile `20px`, desktop `24px`.
- Border nhẹ `1px solid var(--border)`.
- Không đặt chiều cao cứng nếu có text động.

## Image component
```ts
type DemoImage = {
  src: string
  alt: string
  source: "business" | "facebook" | "fallback"
}
```

## Empty states
Không hiển thị chữ như “No image” hoặc “Missing phone” cho khách. Thay bằng:
- Ảnh fallback theo ngành.
- CTA khác như `Xem bản đồ`.
- Trust metric khác còn đủ dữ liệu.
