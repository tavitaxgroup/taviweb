# Performance Rules

## Mục tiêu
Trang demo phải mở nhanh trên mobile, vì khách thường bấm link từ Zalo/Facebook.

## Checklist kỹ thuật
- [ ] Dùng `next/image` cho hero và gallery.
- [ ] Hero image có kích thước hợp lý và `priority` nếu là ảnh đầu trang.
- [ ] Gallery lazy load.
- [ ] Không dùng video background trong MVP.
- [ ] Không dùng carousel nặng nếu grid đủ tốt.
- [ ] CSS theo Tailwind hoặc module gọn.
- [ ] Font load có subset tiếng Việt.
- [ ] Giảm số lượng third-party script.

## Image sizes
| Loại ảnh | Width gợi ý |
|---|---:|
| Hero mobile | 640px |
| Hero desktop | 1200px |
| Gallery thumbnail | 480px |
| OG image | 1200px |

## Lighthouse mục tiêu
| Metric | Mục tiêu |
|---|---:|
| Performance | >= 85 |
| Accessibility | >= 90 |
| Best Practices | >= 90 |
| SEO | >= 85 |

## Pseudo-code image fallback
```ts
const src = isValidImageUrl(image?.src)
  ? image.src
  : `/images/fallback/${templateKey}.jpg`
```
